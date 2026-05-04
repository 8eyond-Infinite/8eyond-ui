"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: "default" | "technical" | "danger" | "success";
  showValue?: boolean;
  label?: string;
}

export function Gauge({
  value = 0,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = "default",
  showValue = true,
  label,
  className,
  ...props
}: GaugeProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const variants = {
    default: "stroke-accent",
    technical: "stroke-foreground",
    danger: "stroke-red-500",
    success: "stroke-emerald-500",
  };

  return (
    <div
      className={cn("inline-flex flex-col items-center gap-2", className)}
      {...props}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* SVG Gauge */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-foreground/[0.05]"
          />
          {/* Progress */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            strokeLinecap="round"
            className={cn("transition-all duration-300", variants[variant])}
          />
        </svg>

        {/* Value Readout */}
        {showValue && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold font-mono tracking-tighter">
              {Math.round(percentage)}
            </span>
            <span className="text-[8px] font-mono text-muted uppercase">
              Percent
            </span>
          </div>
        )}
      </div>

      {label && (
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest text-center max-w-[100px]">
          {label}
        </span>
      )}
    </div>
  );
}
