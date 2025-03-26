import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--x", `${x}px`);
      container.style.setProperty("--y", `${y}px`);
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
        "absolute inset-0 overflow-hidden [--x:50%] [--y:50%]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-50" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(100,255,218,0.1)_0%,transparent_50%)]"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}; 