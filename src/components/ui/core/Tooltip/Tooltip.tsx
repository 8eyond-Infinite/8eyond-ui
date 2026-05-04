"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  position: TooltipPosition;
}

const TooltipContext = React.createContext<TooltipContextType | null>(null);

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({
  children,
  position = "top",
  delay = 200,
}: {
  children: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
}) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setOpen(true), delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  return (
    <TooltipContext.Provider value={{ open, setOpen, position }}>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("cursor-help", className)}>{children}</div>;
}

export function TooltipContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(TooltipContext);
  if (!context) return null;

  const positions = {
    top: "bottom-full left-1/2 mb-2",
    bottom: "top-full left-1/2 mt-2",
    left: "right-full top-1/2 mr-2",
    right: "left-full top-1/2 ml-2",
  };

  const initialValues = {
    top: { opacity: 0, y: 5, scale: 0.95, x: "-50%" },
    bottom: { opacity: 0, y: -5, scale: 0.95, x: "-50%" },
    left: { opacity: 0, x: 5, scale: 0.95, y: "-50%" },
    right: { opacity: 0, x: -5, scale: 0.95, y: "-50%" },
  };

  const animateValues = {
    top: { opacity: 1, y: 0, scale: 1, x: "-50%" },
    bottom: { opacity: 1, y: 0, scale: 1, x: "-50%" },
    left: { opacity: 1, x: 0, scale: 1, y: "-50%" },
    right: { opacity: 1, x: 0, scale: 1, y: "-50%" },
  };

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={initialValues[context.position]}
          animate={animateValues[context.position]}
          exit={initialValues[context.position]}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={cn(
            "absolute z-[9999] whitespace-nowrap rounded-sm border border-border bg-background/90 px-3 py-1.5 font-mono text-[10px] leading-none text-foreground shadow-2xl backdrop-blur-md",
            positions[context.position],
            className
          )}
        >
          {children}
          {/* Subtle pointer arrow */}
          <div
            className={cn(
              "absolute h-1.5 w-1.5 rotate-45 border-border bg-background",
              context.position === "top" &&
                "bottom-[-4px] left-1/2 -translate-x-1/2 border-b border-r",
              context.position === "bottom" &&
                "top-[-4px] left-1/2 -translate-x-1/2 border-t border-l",
              context.position === "left" &&
                "right-[-4px] top-1/2 -translate-y-1/2 border-t border-r",
              context.position === "right" &&
                "left-[-4px] top-1/2 -translate-y-1/2 border-b border-l"
            )}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
