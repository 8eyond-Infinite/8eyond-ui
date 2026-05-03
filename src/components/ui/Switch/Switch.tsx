"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, onCheckedChange, ...props }, ref) => {
    const [checked, setChecked] = React.useState(
      props.checked || props.defaultChecked || false
    );

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
      <div className="relative inline-flex items-center group cursor-pointer">
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
            "h-5 w-9 rounded-full border border-white/10 bg-white/[0.05] transition-all duration-500 peer-checked:bg-accent/10 peer-checked:border-accent/30 peer-focus-visible:ring-1 peer-focus-visible:ring-accent/40",
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
              "absolute top-[3px] left-[3px] h-3 w-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              checked
                ? "translate-x-4 bg-accent shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                : "translate-x-0 bg-zinc-700"
            )}
          />
        </div>
      </div>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
