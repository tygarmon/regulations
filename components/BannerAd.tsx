"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Ad } from "@/data/ads";

const ROTATION_INTERVAL_MS = 5000;
const DISMISS_KEY = "banner-bottom-dismissed";

type Props = {
  ads: Ad[];
  position: "top" | "bottom";
};

export function BannerAd({ ads, position }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid SSR mismatch — only render client-side
  useEffect(() => {
    setMounted(true);
    if (position === "bottom") {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    }
  }, [position]);

  // Auto-rotate through ads
  useEffect(() => {
    if (ads.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % ads.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [ads.length]);

  if (!mounted || ads.length === 0) return null;
  if (position === "bottom" && dismissed) return null;

  const ad = ads[currentIndex];

  function handleDismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }

  if (position === "top") {
    return (
      <div className="w-full bg-slate-100 border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-1.5 sm:px-6">
          <a
            href={ad.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full max-w-4xl"
            aria-label={ad.alt}
          >
            <div className="relative h-[90px] w-full">
              <Image
                src={ad.image}
                alt={ad.alt}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </a>
          {ads.length > 1 && (
            <div className="ml-3 flex shrink-0 gap-1.5">
              {ads.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-slate-500" : "bg-slate-300"
                  }`}
                  aria-label={`Go to ad ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Bottom sticky
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-1.5 sm:px-6">
        <a
          href={ad.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full max-w-4xl"
          aria-label={ad.alt}
        >
          <div className="relative h-[90px] w-full">
            <Image
              src={ad.image}
              alt={ad.alt}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </a>

        <div className="ml-3 flex shrink-0 flex-col items-center gap-2">
          <button
            onClick={handleDismiss}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Dismiss ad"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {ads.length > 1 && (
            <div className="flex flex-col gap-1.5">
              {ads.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-slate-500" : "bg-slate-300"
                  }`}
                  aria-label={`Go to ad ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
