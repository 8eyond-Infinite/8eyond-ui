"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  onCheckedChange?: (checked: boolean) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    { className, onCheckedChange, size = "md", defaultChecked, ...props },
    ref
  ) => {
    const [checked, setChecked] = React.useState(
      props.checked ?? defaultChecked ?? false
    );

    const sizes = {
      xs: "h-3 w-6",
      sm: "h-4 w-8",
      md: "h-5 w-10",
      lg: "h-6 w-12",
      xl: "h-7 w-14",
    };

    const thumbSizes = {
      xs: "h-2 w-2",
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
    };

    const translates = {
      xs: "translate-x-3",
      sm: "translate-x-4",
      md: "translate-x-5",
      lg: "translate-x-6",
      xl: "translate-x-7",
    };

    React.useEffect(() => {
      if (props.checked !== undefined) {
        setChecked(props.checked);
      }
    }, [props.checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      if (props.checked === undefined) {
        setChecked(isChecked);
      }
      onCheckedChange?.(isChecked);
    };

    return (
      <div className="relative inline-flex items-center group cursor-pointer h-fit">
        <input
          type="checkbox"
          role="switch"
          className="peer sr-only"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "rounded-sm border transition-all duration-500 flex items-center relative",
            sizes[size],
            checked
              ? "bg-white/10 border-white/20"
              : "bg-zinc-950/50 border-white/10 group-hover:border-white/30",
            props.disabled && "opacity-50 cursor-not-allowed grayscale",
            className
          )}
          onClick={() => {
            if (!props.disabled) {
              const next = !checked;
              if (props.checked === undefined) setChecked(next);
              onCheckedChange?.(next);
            }
          }}
        >
          <div
            className={cn(
              "absolute left-[2px] rounded-[1px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              thumbSizes[size],
              checked
                ? cn(
                    translates[size],
                    "bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  )
                : "bg-zinc-700"
            )}
          />
        </div>
      </div>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
