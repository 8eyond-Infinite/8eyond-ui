"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DialogContext = React.createContext<{
  open?: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

const Dialog = ({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  // Handle ESC key
  React.useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, setOpen]);

  // Lock body scroll
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ children }: { children: React.ReactNode }) => {
  const context = React.useContext(DialogContext);
  return (
    <div
      onClick={() => context?.setOpen(true)}
      className="inline-block cursor-pointer"
    >
      {children}
    </div>
  );
};

const DialogContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const context = React.useContext(DialogContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {context?.open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => context.setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
                rotateX: 10,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
                rotateX: 10,
                filter: "blur(20px)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", damping: 25, stiffness: 300 },
              }}
              className={cn(
                "relative w-full max-w-lg overflow-hidden border border-white/10 bg-zinc-950 p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-sm pointer-events-auto",
                "after:absolute after:inset-0 after:border after:border-white/5 after:pointer-events-none",
                className
              )}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <button
                onClick={() => context.setOpen(false)}
                className="absolute right-6 top-6 text-zinc-600 hover:text-white transition-all hover:rotate-90"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left mb-8",
      className
    )}
    {...props}
  />
);

const DialogTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "text-2xl font-bold uppercase italic tracking-tight text-white",
      className
    )}
    {...props}
  />
);

const DialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-zinc-400 leading-relaxed", className)} {...props} />
);

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-10 pt-6 border-t border-white/5 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3",
      className
    )}
    {...props}
  />
);

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};
