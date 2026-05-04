"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: "default" | "technical" | "danger" | "success";
  showLabel?: boolean;
  label?: string;
}

export function Progress({
  value = 0,
  max = 100,
  variant = "default",
  showLabel = false,
  label,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    default: "bg-accent",
    technical: "bg-foreground",
    danger: "bg-red-500",
    success: "bg-emerald-500",
  };

  return (
    <div className={cn("w-full space-y-2", className)} {...props}>
      {(showLabel || label) && (
        <div className="flex justify-between items-end mb-1">
          {label && (
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
              {label}
            </span>
          )}
          {showLabel && (
            <span className="text-[10px] font-mono text-foreground font-bold">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="h-2 w-full bg-foreground/[0.05] border border-border/50 relative overflow-hidden rounded-sm">
        {/* Track Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:4px_100%]" />

        <motion.div
          className={cn("h-full relative", variants[variant])}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] bg-[length:200%_100%] animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}
