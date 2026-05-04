import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm bg-foreground/[0.05]",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-foreground/[0.05] before:to-transparent",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--foreground),0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />
    </div>
  );
}

export { Skeleton };
