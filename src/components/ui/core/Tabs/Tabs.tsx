"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TabsContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  layoutId: string;
} | null>(null);

const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  size = "md",
  className,
  children,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const activeValue = value ?? internalValue;
  const generatedId = React.useId();

  return (
    <TabsContext.Provider
      value={{
        value: activeValue,
        onValueChange: (v) => {
          setInternalValue(v);
          onValueChange?.(v);
        },
        size,
        layoutId: `tabs-active-${generatedId}`,
      }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const context = React.useContext(TabsContext);
  const size = context?.size || "md";

  const sizes = {
    xs: "h-7 p-0.5",
    sm: "h-9 p-1",
    md: "h-11 p-1",
    lg: "h-14 p-1.5",
    xl: "h-16 p-2",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-zinc-950/50 border border-white/10 text-zinc-500 relative",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
};

const TabsTrigger = ({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const context = React.useContext(TabsContext);
  const isActive = context?.value === value;
  const size = context?.size || "md";

  const sizes = {
    xs: "px-3 py-1 text-[9px]",
    sm: "px-4 py-1.5 text-[10px]",
    md: "px-6 py-2 text-[11px]",
    lg: "px-8 py-3 text-[13px]",
    xl: "px-10 py-4 text-[15px]",
  };

  return (
    <button
      onClick={() => context?.onValueChange?.(value)}
      className={cn(
        "relative z-10 inline-flex items-center justify-center whitespace-nowrap font-mono font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-full",
        sizes[size],
        isActive ? "text-black" : "hover:text-zinc-300",
        className
      )}
    >
      {isActive && (
        <motion.div
          layoutId={context?.layoutId}
          className="absolute inset-0 bg-white rounded-[1px] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        />
      )}
      <div className="relative z-20 flex items-center justify-center gap-[inherit]">
        {children}
      </div>
    </button>
  );
};

const TabsContent = ({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const context = React.useContext(TabsContext);
  const isActive = context?.value === value;

  return (
    <div
      className={cn(
        "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isActive
          ? "grid-rows-[1fr] opacity-100 mt-6"
          : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
      )}
    >
      <div className="overflow-hidden">
        <motion.div
          initial={false}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn("focus-visible:outline-none w-full", className)}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
