"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ShowcaseTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = ref.current;
    if (!stage) return;
    const media = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let x = 0;
    let y = 0;

    function onMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      if (frame || !stage) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = stage.getBoundingClientRect();
        const angle = (offset: number, size: number) => Math.max(-4, Math.min(4, 8 * offset / size - 4));
        stage.style.setProperty("--tilt-x", `${-angle(y - rect.top, rect.height)}deg`);
        stage.style.setProperty("--tilt-y", `${angle(x - rect.left, rect.width)}deg`);
      });
    }

    function reset() {
      cancelAnimationFrame(frame);
      frame = 0;
      stage?.style.removeProperty("--tilt-x");
      stage?.style.removeProperty("--tilt-y");
    }

    function disconnect() {
      stage?.removeEventListener("pointermove", onMove);
      stage?.removeEventListener("pointerleave", reset);
      reset();
    }

    function sync() {
      disconnect();
      if (media.matches) {
        stage?.addEventListener("pointermove", onMove, { passive: true });
        stage?.addEventListener("pointerleave", reset);
      }
    }

    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      disconnect();
    };
  }, []);

  return <div ref={ref} className="showcase"><div className="showcase-scene">{children}</div></div>;
}
