"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PlayIcon from "@/public/icons/play-icon.svg";
import PauseIcon from "@/public/icons/pause-icon.svg";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        // Auto-play might be blocked by browser, user needs to interact first
        console.log("Auto-play prevented:", error);
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/music/music.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full transition-all duration-200 border border-gray-200/50 hover:border-gray-300 cursor-pointer"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Image src={PauseIcon} alt="Pause" width={20} height={20} />
        ) : (
          <Image src={PlayIcon} alt="Play" width={20} height={20} />
        )}
      </button>
    </div>
  );
}
