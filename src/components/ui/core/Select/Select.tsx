"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";

interface SelectContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  onValueChange: (value: string) => void;
  size: SelectSize;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

export function Select({
  children,
  value,
  onValueChange,
  size = "md",
}: {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  size?: SelectSize;
}) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectContext.Provider
      value={{ open, setOpen, value, onValueChange, size }}
    >
      <div ref={containerRef} className="relative inline-block w-full">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  className,
  placeholder,
}: {
  className?: string;
  children?: React.ReactNode;
  placeholder?: string;
}) {
  const context = React.useContext(SelectContext);
  if (!context) return null;

  const sizeMap = {
    xs: "h-7 px-2 text-[10px]",
    sm: "h-8 px-3 text-[11px]",
    md: "h-10 px-4 text-xs",
    lg: "h-12 px-5 text-sm",
    xl: "h-14 px-6 text-base",
  };

  return (
    <button
      onClick={() => context.setOpen(!context.open)}
      className={cn(
        "flex w-full items-center justify-between rounded-sm border border-border bg-background font-mono text-muted transition-all hover:border-foreground/20 focus:outline-none focus:ring-1 focus:ring-foreground/20 disabled:cursor-not-allowed disabled:opacity-50",
        sizeMap[context.size],
        className
      )}
    >
      <span className="truncate">
        {context.value || placeholder || "Select..."}
      </span>
      <ChevronDown
        className={cn(
          "ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform duration-200",
          context.open && "rotate-180"
        )}
      />
    </button>
  );
}

export function SelectContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(SelectContext);
  if (!context) return null;

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "absolute z-50 mt-2 min-w-[8rem] w-full overflow-hidden rounded-sm border border-border bg-background/95 p-1 shadow-2xl backdrop-blur-md",
            className
          )}
        >
          <div className="max-h-60 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-border">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SelectItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(SelectContext);
  if (!context) return null;

  const isSelected = context.value === value;

  const sizeMap = {
    xs: "py-1 px-2 text-[10px]",
    sm: "py-1.5 px-3 text-[11px]",
    md: "py-2 px-4 text-xs",
    lg: "py-2.5 px-5 text-sm",
    xl: "py-3 px-6 text-base",
  };

  return (
    <div
      onClick={() => {
        context.onValueChange(value);
        context.setOpen(false);
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-[1px] font-mono outline-none transition-colors",
        "hover:bg-foreground/[0.05] hover:text-foreground",
        isSelected ? "text-foreground bg-foreground/[0.03]" : "text-muted",
        sizeMap[context.size],
        className
      )}
    >
      <span className="flex-1 truncate">{children}</span>
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="ml-2"
        >
          <Check className="h-3 w-3 text-accent" />
        </motion.div>
      )}
    </div>
  );
}

export function SelectSeparator({ className }: { className?: string }) {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} />;
}
