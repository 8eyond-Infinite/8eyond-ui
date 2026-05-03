import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "artifact";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[2px] border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs tracking-tight transition-all duration-300 placeholder:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          variant === "default" &&
            "focus-visible:border-white/30 focus-visible:bg-white/[0.05]",
          variant === "artifact" &&
            "focus-visible:border-accent/40 focus-visible:shadow-glow focus-visible:bg-accent/[0.02]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
