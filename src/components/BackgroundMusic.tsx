"use client";
import Image from "next/image";
import PlayIcon from "@/public/icons/play-icon.svg";
import PauseIcon from "@/public/icons/pause-icon.svg";
import { useMusic } from "@/src/contexts/MusicContext";

export function BackgroundMusic() {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <div className="fixed bottom-6 right-6 z-50">
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
