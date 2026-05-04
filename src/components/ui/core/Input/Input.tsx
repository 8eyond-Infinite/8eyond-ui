import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, leftIcon, rightIcon, error, size = "md", ...props },
    ref
  ) => {
    const sizes = {
      xs: "h-7 px-3 text-[11px]",
      sm: "h-8 px-4 text-[12px]",
      md: "h-11 px-8 text-[13px]",
      lg: "h-14 px-10 text-[15px]",
      xl: "h-16 px-12 text-[17px]",
    };

    return (
      <div className="relative group w-full">
        {leftIcon && (
          <div
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-foreground transition-colors duration-300",
              size === "xs" && "left-2",
              size === "sm" && "left-3"
            )}
          >
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-[2px] border bg-foreground/[0.02] font-mono tracking-tight transition-all duration-300 placeholder:text-muted/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground",
            sizes[size],
            leftIcon &&
              (size === "xs" ? "pl-8" : size === "sm" ? "pl-9" : "pl-11"),
            rightIcon &&
              (size === "xs" ? "pr-8" : size === "sm" ? "pr-9" : "pr-11"),
            error
              ? "border-red-500/50 focus-visible:border-red-500"
              : "border-border focus-visible:border-foreground/30 focus-visible:bg-foreground/[0.03]",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-foreground transition-colors duration-300">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
