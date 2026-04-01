"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let rafId = 0;

    const clampTarget = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = Math.max(0, Math.min(target, Math.max(0, max)));
    };

    const step = () => {
      current += (target - current) * 0.28;
      if (Math.abs(target - current) < 0.25) current = target;
      window.scrollTo(0, current);
      rafId = window.requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      const element = event.target as HTMLElement | null;
      if (element?.closest("input, textarea, select, [contenteditable='true']")) {
        return;
      }
      event.preventDefault();
      target += event.deltaY * 1.2;
      clampTarget();
    };

    const onResize = () => clampTarget();

    rafId = window.requestAnimationFrame(step);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
