"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "technical" | "dots" | "turbine";
}

export function Spinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const containerClasses = cn(
    "relative flex items-center justify-center",
    sizes[size],
    className
  );

  if (variant === "turbine") {
    return (
      <div className={containerClasses} {...props}>
        <motion.div
          className="absolute inset-0 border-2 border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-1 border border-t-foreground/20 border-r-transparent border-b-transparent border-l-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <div className="w-1 h-1 bg-accent rounded-full" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div
        className={cn("flex gap-1 items-center justify-center", className)}
        {...props}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "rounded-full bg-accent",
              size === "sm" ? "w-1 h-1" : "w-1.5 h-1.5"
            )}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={containerClasses} {...props}>
      <motion.svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="30 60"
          className={cn(
            "opacity-20",
            variant === "technical" ? "text-foreground" : "text-accent"
          )}
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="15 85"
          className={cn(
            variant === "technical" ? "text-foreground" : "text-accent"
          )}
        />
      </motion.svg>
    </div>
  );
}
