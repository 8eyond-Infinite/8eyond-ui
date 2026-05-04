"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

const SheetContext = React.createContext<{
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "bottom" | "left" | "right";
}>({});

export function Sheet({
  open,
  onOpenChange,
  side = "right",
  children,
}: SheetProps) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange, side }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({
  children,
}: {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
}) {
  const { onOpenChange } = React.useContext(SheetContext);
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      onOpenChange?.(true);
    },
  });
}

export function SheetContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, onOpenChange, side } = React.useContext(SheetContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!mounted) return null;

  const variants = {
    right: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
      styles: "right-0 inset-y-0 w-full sm:max-w-md border-l",
    },
    left: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-100%" },
      styles: "left-0 inset-y-0 w-full sm:max-w-md border-r",
    },
    top: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "-100%" },
      styles: "top-0 inset-x-0 h-auto border-b",
    },
    bottom: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
      styles: "bottom-0 inset-x-0 h-auto border-t",
    },
  };

  const current = variants[side || "right"];

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange?.(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={current.initial}
            animate={current.animate}
            exit={current.exit}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "absolute bg-background border-border shadow-2xl flex flex-col focus:outline-none",
              current.styles,
              className
            )}
          >
            {/* Scanline Detail */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--foreground-raw),0.01)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />

            <button
              onClick={() => onOpenChange?.(false)}
              className="absolute right-6 top-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none text-muted group"
            >
              <div className="relative">
                <X className="h-4 w-4" />
                <div className="absolute inset-0 bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="sr-only">Close Panel</span>
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 p-8 border-b border-border bg-foreground/[0.02]",
        className
      )}
      {...props}
    />
  );
}

export function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4 p-8 border-t border-border mt-auto bg-foreground/[0.02]",
        className
      )}
      {...props}
    />
  );
}

export function SheetTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-lg font-black uppercase italic tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-[11px] font-mono text-muted uppercase tracking-widest",
        className
      )}
      {...props}
    />
  );
}
