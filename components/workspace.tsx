"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function WorkspaceVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Mute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Update progress bar as video plays
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress || 0);
  };

  // Scrub through the timeline
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section
      id="workspace"
      className="relative isolate bg-[#050505] px-[16px] py-[64px] sm:px-[24px] lg:py-[96px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 top-0 h-[560px] w-[1000px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(48,109,131,0.45),rgba(48,109,131,0))]"
      />
      {/* Showreel box */}
      <div className="mx-auto max-w-[1100px] rounded-[28px] bg-[linear-gradient(160deg,rgba(22,49,59,0.9),rgba(12,26,32,0.9))] p-[12px] shadow-[0_30px_90px_rgba(48,109,131,0.35),inset_0_0_0_1px_rgba(142,224,236,0.14)] sm:p-[18px]">
      <div className="relative group overflow-hidden rounded-[16px]">
        {/* Video Element */}
        <video
          ref={videoRef}
          src="/videos/Draft.mp4"
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          className="block w-full aspect-video object-cover cursor-pointer"
        />

        {/* Floating Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          
          {/* 1. Scrubber / Progress Bar */}
          <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer overflow-hidden group/bar">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
            />
            {/* Visual Fill Bar */}
            <div
              className="h-full bg-[#8EE0EC] rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* 2. Control Buttons Toolbar */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md border border-white/10"
              >
                {isPlaying ? <Pause className="size-4" /> : <Play className="size-4 fill-white" />}
              </button>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md border border-white/10"
              >
                {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            </div>

            {/* Right Side: Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md border border-white/10"
            >
              <Maximize className="size-4" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
