"use client";

import type { MouseEvent } from "react";

export function ProjectVideo({ src }: { src: string }) {
  const handleClick = (event: MouseEvent<HTMLVideoElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <video
      src={src}
      controls
      playsInline
      preload="metadata"
      className="mt-4 w-full rounded-xl border border-white/[0.07] bg-black/40"
      onClick={handleClick}
    />
  );
}
