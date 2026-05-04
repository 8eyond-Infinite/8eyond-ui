"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  status?: "online" | "offline" | "away" | "busy";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "circle" | "square" | "technical";
}

export function Avatar({
  src,
  alt,
  fallback,
  status,
  size = "md",
  variant = "technical",
  className,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  const sizes = {
    xs: "w-6 h-6 text-[8px]",
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-[12px]",
    lg: "w-12 h-12 text-[14px]",
    xl: "w-16 h-16 text-[18px]",
  };

  const variants = {
    circle: "rounded-full",
    square: "rounded-sm",
    technical: "rounded-[2px] rotate-45 border-border overflow-hidden",
  };

  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-zinc-500",
    away: "bg-amber-500",
    busy: "bg-red-500",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center shrink-0",
        className
      )}
      {...props}
    >
      {/* Container */}
      <div
        className={cn(
          "relative flex items-center justify-center bg-foreground/[0.05] border border-border overflow-hidden transition-all duration-300",
          sizes[size],
          variant === "technical"
            ? "rounded-[2px] rotate-45"
            : variants[variant]
        )}
      >
        <div
          className={cn(
            "w-full h-full flex items-center justify-center",
            variant === "technical" && "-rotate-45 scale-[1.4]"
          )}
        >
          {src && !hasError ? (
            <Image
              src={src}
              alt={alt || "avatar"}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover"
              fill
            />
          ) : (
            <span className="font-mono font-bold text-muted uppercase select-none">
              {fallback || alt?.substring(0, 2) || "OP"}
            </span>
          )}
        </div>

        {/* Scanline overlay for technical look */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--foreground-raw),0.02)_1px,transparent_1px)] bg-[size:100%_2px] pointer-events-none opacity-50" />
      </div>

      {/* Status Indicator */}
      {status && (
        <div
          className={cn(
            "absolute z-10 rounded-full border-2 border-background",
            variant === "technical"
              ? "bottom-0 right-0 translate-x-1/4 translate-y-1/4"
              : "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
            size === "xs" ? "w-2 h-2" : size === "xl" ? "w-4 h-4" : "w-3 h-3",
            statusColors[status]
          )}
        >
          {status === "online" && (
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse scale-150 opacity-20" />
          )}
        </div>
      )}
    </div>
  );
}
