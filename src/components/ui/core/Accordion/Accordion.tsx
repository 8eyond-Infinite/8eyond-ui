"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

const AccordionContext = React.createContext<{
  activeItems: string[];
  toggleItem: (value: string) => void;
}>({
  activeItems: [],
  toggleItem: () => {},
});

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", defaultValue, className, children, ...props }, ref) => {
    const [activeItems, setActiveItems] = React.useState<string[]>(
      typeof defaultValue === "string"
        ? [defaultValue]
        : (defaultValue as string[]) || []
    );

    const toggleItem = (value: string) => {
      if (type === "single") {
        setActiveItems((prev) => (prev.includes(value) ? [] : [value]));
      } else {
        setActiveItems((prev) =>
          prev.includes(value)
            ? prev.filter((i) => i !== value)
            : [...prev, value]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ activeItems, toggleItem }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItemContext = React.createContext<{ value: string }>({
  value: "",
});

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <div
          ref={ref}
          className={cn(
            "border border-white/5 bg-white/[0.01] rounded-[2px] overflow-hidden",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

export type AccordionTriggerProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  const { activeItems, toggleItem } = React.useContext(AccordionContext);
  const { value } = React.useContext(AccordionItemContext);
  const isOpen = activeItems.includes(value);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between p-6 text-left font-mono text-[11px] font-bold uppercase tracking-widest transition-all",
        isOpen ? "text-white" : "text-zinc-500 hover:text-zinc-300",
        className
      )}
      {...props}
    >
      {children}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChevronDown
          size={14}
          className={cn(
            "transition-colors",
            isOpen ? "text-white" : "text-zinc-800"
          )}
        />
      </motion.div>
    </button>
  );
});

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { activeItems } = React.useContext(AccordionContext);
  const { value } = React.useContext(AccordionItemContext);
  const isOpen = activeItems.includes(value);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div
            ref={ref}
            className={cn(
              "p-6 pt-0 text-sm text-zinc-400 leading-relaxed",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
