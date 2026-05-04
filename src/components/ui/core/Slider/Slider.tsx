"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SliderProps {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  unit?: string;
  onChange?: (value: number) => void;
  className?: string;
  disabled?: boolean;
}

export function Slider({
  defaultValue = 0,
  value: controlledValue,
  min = 0,
  max = 100,
  step = 1,
  label,
  unit = "",
  onChange,
  className,
  disabled = false,
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const trackRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleUpdate = (clientX: number) => {
    if (!trackRef.current || disabled) return;

    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const rawValue = (x / rect.width) * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;
    const finalValue = Math.max(min, Math.min(max, steppedValue));

    if (controlledValue === undefined) {
      setInternalValue(finalValue);
    }
    onChange?.(finalValue);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleUpdate(e.clientX);

    const onMouseMove = (e: MouseEvent) => handleUpdate(e.clientX);
    const onMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  // Tick marks calculation
  const tickCount = 11; // 0, 10, 20... 100
  const ticks = Array.from({ length: tickCount }, (_, i) => i);

  return (
    <div className={cn("group space-y-4 w-full", className)}>
      {/* Header Info */}
      {(label || unit) && (
        <div className="flex items-end justify-between px-1">
          {label && (
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
                {label}
              </div>
              <div className="w-4 h-[1px] bg-muted" />
            </div>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-black italic text-foreground tracking-tighter">
              {value.toFixed(step < 1 ? 1 : 0)}
            </span>
            <span className="text-[9px] font-mono text-muted uppercase">
              {unit}
            </span>
          </div>
        </div>
      )}

      {/* Main Slider Track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        className={cn(
          "relative h-8 flex items-center cursor-pointer select-none touch-none px-4",
          disabled && "opacity-40 cursor-not-allowed"
        )}
      >
        {/* Background Track */}
        <div className="absolute inset-x-0 h-1 bg-foreground/[0.05] border border-border/50 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-foreground/10"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Tick Marks */}
        <div className="absolute inset-x-4 inset-y-0 flex justify-between pointer-events-none">
          {ticks.map((t) => {
            const isFilled = (t / (tickCount - 1)) * 100 <= percentage;
            return (
              <div
                key={t}
                className="flex flex-col justify-center gap-1.5 h-full"
              >
                <div
                  className={cn(
                    "w-[1px] transition-all duration-300",
                    t % 5 === 0 ? "h-3" : "h-1.5",
                    isFilled ? "bg-foreground/30" : "bg-muted/20"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Thumb */}
        <motion.div
          className="absolute z-20 w-4 h-6 flex items-center justify-center -ml-2"
          style={{ left: `${percentage}%` }}
          animate={{ scale: isDragging ? 1.1 : 1 }}
        >
          {/* Main Handle */}
          <div
            className={cn(
              "w-3 h-full bg-background border-2 transition-colors duration-300 shadow-xl flex flex-col justify-center items-center gap-0.5",
              isDragging
                ? "border-foreground"
                : "border-border hover:border-muted"
            )}
          >
            {/* Grip Lines */}
            <div className="w-full h-[1px] bg-muted/20" />
            <div className="w-full h-[1px] bg-muted/20" />
            <div className="w-full h-[1px] bg-muted/20" />
          </div>

          {/* Pulse Effect */}
          {isDragging && (
            <div className="absolute inset-0 bg-foreground/5 blur-md rounded-full -z-10" />
          )}
        </motion.div>
      </div>

      {/* Scanline Detail (Footer Decor) */}
      <div className="h-[1px] w-full bg-[linear-gradient(90deg,transparent,var(--border),transparent)] opacity-50" />
    </div>
  );
}
