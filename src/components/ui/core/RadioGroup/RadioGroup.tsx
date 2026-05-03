"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RadioSize = "xs" | "sm" | "md" | "lg" | "xl";

interface RadioGroupContextType {
  value?: string;
  onValueChange?: (value: string) => void;
  size: RadioSize;
}

const RadioGroupContext = React.createContext<RadioGroupContextType | null>(
  null
);

export function RadioGroup({
  children,
  value,
  onValueChange,
  size = "md",
  className,
}: {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  size?: RadioSize;
  className?: string;
}) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange, size }}>
      <div className={cn("grid gap-2", className)} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({
  value,
  id,
  className,
  disabled,
}: {
  value: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}) {
  const context = React.useContext(RadioGroupContext);
  if (!context) return null;

  const isChecked = context.value === value;

  const sizeMap = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  };

  const innerSizeMap = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-3.5 w-3.5",
  };

  return (
    <button
      type="button"
      role="radio"
      id={id}
      aria-checked={isChecked}
      disabled={disabled}
      onClick={() => !disabled && context.onValueChange?.(value)}
      className={cn(
        "relative flex items-center justify-center rounded-full border border-white/10 bg-zinc-950 transition-all focus:outline-none focus:ring-1 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50",
        isChecked
          ? "border-white text-white"
          : "hover:border-white/20 text-transparent",
        sizeMap[context.size],
        className
      )}
    >
      <div className={cn("relative", innerSizeMap[context.size])}>
        <motion.div
          initial={false}
          animate={{
            scale: isChecked ? 1 : 0,
            opacity: isChecked ? 1 : 0,
          }}
          className="absolute inset-0 m-auto rounded-full bg-current"
        />
      </div>
    </button>
  );
}
