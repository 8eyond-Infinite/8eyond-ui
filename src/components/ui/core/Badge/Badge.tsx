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
    default: "bg-foreground text-background border-transparent",
    secondary:
      "bg-foreground/5 text-muted border-border hover:bg-foreground/10",
    outline:
      "border-border text-foreground bg-transparent hover:bg-foreground/5",
    destructive: "bg-red-500/5 text-red-500 border-red-500/20",
    success: "bg-emerald-500/5 text-emerald-500 border-emerald-500/20",
    warning: "bg-amber-500/5 text-amber-500 border-amber-500/20",
  };

  const sizes = {
    xs: "px-1.5 py-0.5 text-[8px] gap-1",
    sm: "px-2 py-0.5 text-[9px] gap-1.5",
    md: "px-2.5 py-1 text-[10px] gap-2",
    lg: "px-3 py-1.5 text-[11px] gap-2.5",
    xl: "px-4 py-2 text-[12px] gap-3",
  };

  const dotColors = {
    default: "bg-background",
    secondary: "bg-muted",
    outline: "bg-foreground",
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
