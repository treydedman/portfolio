"use client";

import { useEffect, useRef } from "react";

export function SunriseBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      // Start glow at 20% scroll, fully visible by 80%
      const shifted = Math.max(0, (progress - 0.2) / 0.6);
      const eased = 1 - Math.pow(1 - Math.min(shifted, 1), 1.8);
      const glowOpacity = eased * 0.8;
      const translateY = 100 - eased * 62;

      if (glowRef.current) {
        glowRef.current.style.opacity = String(glowOpacity);
        glowRef.current.style.transform = `translateY(${translateY}%)`;
      }

      document.documentElement.style.setProperty(
        "--sidebar-warm-opacity",
        String(progress * 0.07),
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Base sky: near-black → deep navy → blue-violet → indigo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
          to bottom,
          #08080d 0%,
          #09091a 20%,
          #0c0b20 42%,
          #100d28 62%,
          #150e2a 78%,
          #180d20 90%,
          #160a10 100%
        )`,
        }}
      />

      {/* Subtle violet luminance — upper sky depth, static */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "40%",
          width: "70vw",
          height: "50vh",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, #1c1248 0%, transparent 70%)",
          opacity: 0.55,
          filter: "blur(70px)",
        }}
      />

      {/* Ember glow — full viewport width, anchored to bottom, rises on scroll */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "320px",
          transform: "translateY(100%)",
          opacity: 0,
          background: `radial-gradient(ellipse 70% 100% at 50% 100%, #e05800 0%, #9b3200 30%, #4a1500 58%, transparent 78%)`,
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}
