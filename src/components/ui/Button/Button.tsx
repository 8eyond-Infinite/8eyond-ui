import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "alchemist";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-[2px] font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-500 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary: "bg-foreground text-background hover:bg-white/90",
      secondary:
        "border border-white/10 bg-white/5 text-foreground hover:bg-white/10 hover:border-white/20",
      ghost: "text-zinc-500 hover:text-white hover:bg-white/5",
      alchemist:
        "glass-artifact glass-artifact-hover text-accent text-glow border-accent/20 hover:border-accent shadow-[0_0_15px_rgba(251,191,36,0.1)]",
    };

    const sizes = {
      sm: "h-8 px-4",
      md: "h-11 px-8",
      lg: "h-14 px-12 text-[11px] tracking-[0.4em]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
