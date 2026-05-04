"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  variant?: "default" | "technical";
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      variant = "default",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role={decorative ? undefined : "separator"}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        variant === "technical" && [
          "relative",
          orientation === "horizontal"
            ? "before:absolute before:left-0 before:top-[-2px] before:h-[5px] before:w-[1px] before:bg-border/60 after:absolute after:right-0 after:top-[-2px] after:h-[5px] after:w-[1px] after:bg-border/60"
            : "before:absolute before:top-0 before:left-[-2px] before:w-[5px] before:h-[1px] before:bg-border/60 after:absolute after:bottom-0 after:left-[-2px] after:w-[5px] after:h-[1px] after:bg-border/60",
        ],
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
