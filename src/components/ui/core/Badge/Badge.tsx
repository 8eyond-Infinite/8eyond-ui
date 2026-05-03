import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "destructive"
  | "success"
  | "warning";
type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  pulse?: boolean;
}

function Badge({
  className,
  variant = "default",
  size = "md",
  dot = false,
  pulse = false,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-white text-black border-transparent",
    secondary: "bg-zinc-900 text-zinc-300 border-white/5 hover:bg-zinc-800",
    outline: "border-white/20 text-white bg-transparent hover:bg-white/5",
    destructive:
      "bg-zinc-950 text-red-500 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]",
    success:
      "bg-zinc-950 text-emerald-500 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    warning:
      "bg-zinc-950 text-amber-500 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
  };

  const sizes = {
    xs: "px-1.5 py-0.5 text-[8px] gap-1",
    sm: "px-2 py-0.5 text-[9px] gap-1.5",
    md: "px-2.5 py-1 text-[10px] gap-2",
    lg: "px-3 py-1.5 text-[11px] gap-2.5",
    xl: "px-4 py-2 text-[12px] gap-3",
  };

  const dotColors = {
    default: "bg-black",
    secondary: "bg-zinc-500",
    outline: "bg-white",
    destructive: "bg-red-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border font-mono font-bold uppercase tracking-widest transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                dotColors[variant]
              )}
            />
          )}
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              dotColors[variant]
            )}
          />
        </span>
      )}
      {props.children}
    </div>
  );
}

export { Badge };
