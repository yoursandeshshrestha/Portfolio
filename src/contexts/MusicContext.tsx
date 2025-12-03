"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Audio Manager - encapsulates all audio logic
class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private stateListeners = new Set<(playing: boolean) => void>();
  private isUserPaused = false;
  private saveInterval: NodeJS.Timeout | null = null;

  private getAudio(): HTMLAudioElement {
    if (typeof window === "undefined") {
      throw new Error("Audio can only be initialized in browser");
    }

    if (!this.audio) {
      this.audio = new Audio("/music/music.mp3");
      this.audio.loop = true;
      this.audio.preload = "auto";

      this.setupEventListeners();
      this.restoreState();
      this.startSaveInterval();
    }

    return this.audio;
  }

  private setupEventListeners(): void {
    if (!this.audio) return;

    this.audio.addEventListener("play", () => {
      this.isUserPaused = false;
      this.notifyStateChange(true);
    });

    this.audio.addEventListener("pause", () => {
      // Only notify if user intentionally paused
      if (this.isUserPaused) {
        this.notifyStateChange(false);
      } else {
        // Auto-resume if paused unintentionally (e.g., during navigation)
        this.resumeIfNeeded();
      }
    });
  }

  private resumeIfNeeded(): void {
    if (!this.audio || this.isUserPaused) return;

    // Use microtask to resume after any navigation-related pause
    queueMicrotask(() => {
      if (this.audio && !this.isUserPaused && this.audio.paused) {
        this.audio.play().catch(() => {
          // Ignore play errors (e.g., autoplay blocked)
        });
      }
    });
  }

  private restoreState(): void {
    if (!this.audio) return;

    const savedState = localStorage.getItem("music-playing");
    const savedTime = localStorage.getItem("music-time");

    if (savedTime) {
      this.audio.currentTime = parseFloat(savedTime);
    }

    // Auto-play unless explicitly saved as paused
    if (savedState !== "false") {
      this.audio.play().catch(() => {
        // Auto-play blocked - user will need to interact first
      });
    }
  }

  private startSaveInterval(): void {
    this.saveInterval = setInterval(() => {
      if (!this.audio) return;

      if (!this.audio.paused) {
        localStorage.setItem("music-time", this.audio.currentTime.toString());
        localStorage.setItem("music-playing", "true");
      } else if (this.isUserPaused) {
        localStorage.setItem("music-playing", "false");
      }
    }, 1000);
  }

  private notifyStateChange(playing: boolean): void {
    this.stateListeners.forEach((listener) => listener(playing));
  }

  subscribe(listener: (playing: boolean) => void): () => void {
    this.stateListeners.add(listener);
    return () => {
      this.stateListeners.delete(listener);
    };
  }

  getPlayingState(): boolean {
    try {
      return !this.getAudio().paused;
    } catch {
      return false;
    }
  }

  toggle(): void {
    try {
      const audio = this.getAudio();
      if (audio.paused) {
        this.isUserPaused = false;
        audio.play().catch(() => {});
      } else {
        this.isUserPaused = true;
        audio.pause();
      }
    } catch {
      // Ignore errors
    }
  }

  ensurePlaying(): void {
    try {
      const audio = this.getAudio();
      if (!this.isUserPaused && audio.paused) {
        audio.play().catch(() => {});
      }
    } catch {
      // Ignore errors
    }
  }

  cleanup(): void {
    if (this.saveInterval) {
      clearInterval(this.saveInterval);
      this.saveInterval = null;
    }
  }
}

// Singleton instance
const audioManager = new AudioManager();

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window === "undefined") return false;
    return audioManager.getPlayingState();
  });

  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize and subscribe to state changes
    setIsPlaying(audioManager.getPlayingState());

    const unsubscribe = audioManager.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return unsubscribe;
  }, []);

  // Handle navigation - ensure audio continues playing
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      // Ensure audio continues after navigation completes
      requestAnimationFrame(() => {
        audioManager.ensurePlaying();
      });
    }
  }, [pathname]);

  const togglePlay = useCallback(() => {
    audioManager.toggle();
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
