import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, size = "md", children, ...props }, ref) => {
    const sizes = {
      xs: "text-[10px]",
      sm: "text-[11px]",
      md: "text-[12px]",
      lg: "text-[14px]",
      xl: "text-[16px]",
    };

    return (
      <label
        ref={ref}
        className={cn(
          "font-mono font-bold tracking-widest text-muted uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1",
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span
            className={cn(
              "text-red-500/80 font-bold",
              size === "xs" || size === "sm" ? "text-[10px]" : "text-[12px]"
            )}
          >
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
