"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TabsContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
} | null>(null);

const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const activeValue = value ?? internalValue;

  return (
    <TabsContext.Provider
      value={{
        value: activeValue,
        onValueChange: (v) => {
          setInternalValue(v);
          onValueChange?.(v);
        },
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
}) => (
  <div
    className={cn(
      "inline-flex h-11 items-center justify-center rounded-[4px] bg-white/[0.02] border border-white/5 p-1 text-zinc-500 relative mb-2",
      className
    )}
  >
    {children}
  </div>
);

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

  return (
    <button
      onClick={() => context?.onValueChange?.(value)}
      className={cn(
        "relative z-10 inline-flex items-center justify-center whitespace-nowrap px-6 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive ? "text-void-1000" : "hover:text-zinc-300",
        className
      )}
    >
      {isActive && (
        <motion.div
          layoutId="tabs-active"
          className="absolute inset-0 bg-accent rounded-[2px] shadow-glow"
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        />
      )}
      <span className="relative z-20">{children}</span>
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
