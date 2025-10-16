"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const animationRef = useRef<number>();
  const lenisRef = useRef<Lenis>();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.15,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function onRaf(time: number) {
      lenis.raf(time);
      animationRef.current = requestAnimationFrame(onRaf);
    }

    animationRef.current = requestAnimationFrame(onRaf);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

