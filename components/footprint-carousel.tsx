"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FootprintCarouselProps = {
  images: string[];
  imageAlt: string;
};

const AUTOPLAY_INTERVAL_MS = 4000;

export function FootprintCarousel({ images, imageAlt }: FootprintCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imageCount = images.length;
  const shouldAutoplay = imageCount > 1 && !isPaused;

  const showImageAtIndex = (nextIndex: number) => {
    setActiveIndex((nextIndex + imageCount) % imageCount);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    if (!shouldAutoplay) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % imageCount);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [shouldAutoplay, imageCount]);

  if (!imageCount) {
    return null;
  }

  return (
    <div
      className="group relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-surface-secondary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {images.map((imageSrc, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={imageSrc}
            className={`absolute inset-0 transition-all duration-700 ${
              isActive ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-[1.02]"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        );
      })}

      {imageCount > 1 ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
            <button
              type="button"
              onClick={() => showImageAtIndex(activeIndex - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="上一张图片"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => showImageAtIndex(activeIndex + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="下一张图片"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 px-4">
            {images.map((imageSrc, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${imageSrc}-dot`}
                  type="button"
                  onClick={() => showImageAtIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                  aria-label={`查看第 ${index + 1} 张图片`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
