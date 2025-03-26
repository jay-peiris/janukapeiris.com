import { cn } from "../utils/cn";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full w-full bg-black [--mouse-x:50%] [--mouse-y:50%]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-30 transition duration-300 lg:absolute">
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20" />
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(100,255,218,0.15),transparent_40%)]" />
      </div>
    </div>
  );
}; 