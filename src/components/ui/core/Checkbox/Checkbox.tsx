"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
          className="peer sr-only"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "h-5 w-5 rounded-[2px] border border-white/10 bg-white/[0.02] transition-all duration-300 peer-focus-visible:border-accent/40 peer-focus-visible:shadow-glow peer-checked:bg-accent peer-checked:border-accent group-hover:border-white/20 flex items-center justify-center",
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
          <Check
            className={cn(
              "h-3.5 w-3.5 text-void-1000 transition-all duration-300 transform",
              checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          />
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
