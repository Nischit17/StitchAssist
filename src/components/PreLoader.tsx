"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./PreLoader.module.css";

interface PreLoaderProps {
  onComplete?: () => void;
}

export default function PreLoader({ onComplete }: PreLoaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preloaderRef.current) return;

    // Timeline for the preloader animation
    const tl = gsap.timeline({
      onComplete: () => {
        // After the animation completes, hide the preloader
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (onComplete) onComplete();
            if (preloaderRef.current) {
              preloaderRef.current.style.display = "none";
            }
          },
        });
      },
    });

    // Initial animation setup
    tl.from(".preloader-path", {
      strokeDasharray: "0 157px",
      duration: 2,
      ease: "cubic-bezier(0.8, 0, 0.2, 1)",
      repeat: 1,
    });

    // Preloader auto-hide after 5 seconds (safety fallback)
    const timeout = setTimeout(() => {
      if (preloaderRef.current) {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (onComplete) onComplete();
            if (preloaderRef.current) {
              preloaderRef.current.style.display = "none";
            }
          },
        });
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className={styles.preloaderContainer}>
      <svg className={styles.preloaderSvg} viewBox="0 0 100 150">
        <g>
          <path
            className="preloader-path"
            d="M 50,100 A 1,1 0 0 1 50,0"
            stroke="url(#gradient)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        <g>
          <path
            className="preloader-path"
            d="M 50,75 A 1,1 0 0 0 50,-25"
            stroke="url(#gradient)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#F6732E", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#4F3230", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
