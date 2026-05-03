"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface AlchemistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  glowColor?: string;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const AlchemistButton = React.forwardRef<
  HTMLButtonElement,
  AlchemistButtonProps
>(
  (
    {
      className,
      children,
      loading,
      leftIcon,
      rightIcon,
      variant = "primary",
      glowColor = "#fbbf24",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || loading}
        className={cn(
          "group relative px-8 h-12 flex items-center justify-center font-serif italic text-[14px] font-medium tracking-[0.05em] text-zinc-200 hover:text-accent transition-all duration-700 disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary"
            ? "glass-artifact glass-artifact-hover"
            : "border border-accent/20 hover:border-accent bg-transparent",
          className
        )}
        style={{
          // @ts-expect-error - Custom CSS property
          "--glow-color": glowColor,
        }}
        {...props}
      >
        {/* Internal Glow Layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${glowColor}15 0%, transparent 70%)`,
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent/40 group-hover:border-accent transition-colors" />
        <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-accent/40 group-hover:border-accent transition-colors" />
        <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-accent/40 group-hover:border-accent transition-colors" />
        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent/40 group-hover:border-accent transition-colors" />

        {/* Technical Shine Streak */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </div>

        <span className="relative z-10 flex items-center gap-2 group-hover:text-glow transition-all duration-700">
          {loading ? (
            <Loader2 size={14} className="animate-spin mr-1" />
          ) : leftIcon ? (
            <span className="mr-1">{leftIcon}</span>
          ) : null}
          {children}
          {!loading && rightIcon && <span className="ml-1">{rightIcon}</span>}
        </span>
      </motion.button>
    );
  }
);

AlchemistButton.displayName = "AlchemistButton";
