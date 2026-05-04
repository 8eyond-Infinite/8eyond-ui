"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "./CopyButton";

interface UsageBlockProps {
  code: string;
  className?: string;
}

export function UsageBlock({ code, className }: UsageBlockProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative p-8 bg-foreground/[0.02] border border-border font-mono text-sm overflow-x-auto flex items-center justify-between transition-all duration-500 hover:bg-foreground/[0.04] hover:border-foreground/30 group rounded-sm">
        <code className="text-muted group-hover:text-foreground transition-colors duration-500 whitespace-pre">
          {code}
        </code>
        <CopyButton value={code} className="ml-4" />
      </div>
    </div>
  );
}
