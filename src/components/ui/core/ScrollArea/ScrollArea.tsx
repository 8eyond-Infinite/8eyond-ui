"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: "vertical" | "horizontal" | "both";
  scrollbarSize?: number;
}

export function ScrollArea({
  children,
  orientation = "vertical",
  scrollbarSize = 4,
  className,
  ...props
}: ScrollAreaProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || orientation !== "horizontal") return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [orientation]);

  return (
    <div
      className={cn("relative overflow-hidden group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Viewport */}
      <div
        ref={containerRef}
        className={cn(
          "h-full w-full overflow-auto custom-scrollbar transition-all duration-300",
          orientation === "vertical" && "overflow-x-hidden",
          orientation === "horizontal" && "overflow-y-hidden"
        )}
        style={{
          scrollbarWidth: "none", // Hide default for Firefox
          msOverflowStyle: "none", // Hide default for IE/Edge
        }}
      >
        {children}
      </div>

      {/* Custom Styles for Scrollbar (Injected via CSS) */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: ${orientation !== "horizontal" ? scrollbarSize : 0}px;
          height: ${orientation !== "vertical" ? scrollbarSize : 0}px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 9999px;
          transition: background 0.2s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--muted-foreground);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }
      `}</style>

      {/* Decorative Scanline Overlays (Optional for high-fidelity look) */}
      <div className="absolute inset-y-0 right-0 w-[1px] bg-border/20 pointer-events-none" />
    </div>
  );
}
