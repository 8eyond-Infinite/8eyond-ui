"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  onCheckedChange?: (checked: boolean) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      onCheckedChange,
      size = "md",
      checked: controlledChecked,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      controlledChecked ?? defaultChecked ?? false
    );

    const sizes = {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
    };

    const checkSizes = {
      xs: "h-2 w-2",
      sm: "h-2.5 w-2.5",
      md: "h-3.5 w-3.5",
      lg: "h-4 w-4",
      xl: "h-5 w-5",
    };

    React.useEffect(() => {
      if (controlledChecked !== undefined) {
        setInternalChecked(controlledChecked);
      }
    }, [controlledChecked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      if (controlledChecked === undefined) {
        setInternalChecked(isChecked);
      }
      onCheckedChange?.(isChecked);
    };

    return (
      <div className="relative inline-flex items-center group cursor-pointer h-fit">
        <input
          type="checkbox"
          className="peer sr-only"
          ref={ref}
          checked={internalChecked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "rounded-[1px] border transition-all duration-300 flex items-center justify-center",
            sizes[size],
            internalChecked
              ? "bg-foreground border-foreground"
              : "border-border bg-foreground/[0.02] group-hover:border-foreground/30",
            props.disabled && "opacity-50 cursor-not-allowed grayscale",
            className
          )}
          onClick={() => {
            if (!props.disabled) {
              const next = !internalChecked;
              if (controlledChecked === undefined) setInternalChecked(next);
              onCheckedChange?.(next);
            }
          }}
        >
          <Check
            className={cn(
              "text-background font-bold transition-all duration-300 transform",
              checkSizes[size],
              internalChecked ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          />
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
