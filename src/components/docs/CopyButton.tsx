"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      className={cn(
        "relative z-20 inline-flex items-center justify-center rounded-sm text-sm font-medium transition-all hover:bg-white/5 h-8 w-8 text-zinc-600 hover:text-white border border-transparent hover:border-white/10",
        className
      )}
    >
      {hasCopied ? (
        <Check
          size={14}
          className="text-emerald-500 animate-in zoom-in duration-300"
        />
      ) : (
        <Copy size={14} className="animate-in fade-in duration-300" />
      )}
    </button>
  );
}
