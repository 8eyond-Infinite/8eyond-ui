"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "info" | "success" | "warning" | "error";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface ToastContextType {
  toast: (options: Omit<Toast, "id">) => void;
  remove: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export const ToastProvider = ({
  children,
  position = "bottom-right",
}: {
  children: React.ReactNode;
  position?: ToastPosition;
}) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const [isHovered, setIsHovered] = React.useState(false);

  const remove = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    ({ duration = 5000, ...options }: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [{ id, duration, ...options }, ...prev]);

      if (duration !== Infinity) {
        setTimeout(() => {
          remove(id);
        }, duration);
      }
    },
    [remove]
  );

  const positionClasses = {
    "top-left": "top-20 left-0 md:left-72 flex-col",
    "top-right": "top-20 right-0 flex-col",
    "bottom-left": "bottom-0 left-0 md:left-72 flex-col-reverse",
    "bottom-right": "bottom-0 right-0 flex-col-reverse",
  };

  return (
    <ToastContext.Provider value={{ toast, remove }}>
      {children}
      <div
        className={cn(
          "fixed z-[9999] p-6 pointer-events-none w-full max-w-md flex gap-0",
          positionClasses[position]
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "relative w-full flex flex-col pointer-events-none min-h-[200px]",
            position.startsWith("top") ? "justify-start" : "justify-end"
          )}
        >
          <AnimatePresence mode="popLayout">
            {toasts.slice(0, 5).map((t, index) => (
              <ToastItem
                key={t.id}
                {...t}
                index={index}
                isExpanded={isHovered}
                position={position}
                onRemove={() => remove(t.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

const ToastItem = ({
  title,
  description,
  type = "info",
  index,
  isExpanded,
  position,
  onRemove,
}: Toast & {
  index: number;
  isExpanded: boolean;
  position: ToastPosition;
  onRemove: () => void;
}) => {
  const icons = {
    info: <Info size={16} className="text-zinc-400" />,
    success: <CheckCircle2 size={16} className="text-emerald-500" />,
    warning: <AlertTriangle size={16} className="text-accent" />,
    error: <AlertCircle size={16} className="text-red-500" />,
  };

  const indicators = {
    info: "bg-zinc-800",
    success: "bg-emerald-500",
    warning: "bg-accent",
    error: "bg-red-500",
  };

  // Stacked variables
  const isTop = position.startsWith("top");
  const yOffset = isExpanded ? index * 100 : index * 12;
  const scale = isExpanded ? 1 : 1 - index * 0.05;
  const opacity = isExpanded ? 1 : 1 - index * 0.2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: isTop ? -20 : 20, scale: 0.95 }}
      animate={{
        opacity: opacity > 0 ? opacity : 0,
        y: isTop ? yOffset : -yOffset,
        scale,
        zIndex: 100 - index,
      }}
      exit={{ opacity: 0, scale: 0.95, y: isTop ? -20 : 20 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "pointer-events-auto absolute w-full rounded-sm border border-white/10 bg-zinc-950 p-4 pr-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md",
        isTop ? "top-0" : "bottom-0",
        position.includes("left") ? "left-0" : "right-0",
        "flex gap-4 items-start"
      )}
    >
      {/* Invisible bridge to prevent hover flicker */}
      {isExpanded && index > 0 && (
        <div
          className={cn(
            "absolute left-0 right-0 h-[100px] pointer-events-auto",
            isTop ? "-top-[100px]" : "-bottom-[100px]"
          )}
        />
      )}

      {/* Indicator Line */}
      <div
        className={cn("absolute left-0 top-0 h-full w-[2px]", indicators[type])}
      />

      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>

      <div className="space-y-1">
        {title && (
          <h4 className="text-[11px] font-black uppercase italic tracking-wider text-white leading-tight">
            {title}
          </h4>
        )}
        {description && (
          <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <button
        onClick={onRemove}
        className="absolute right-3 top-3 text-zinc-700 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
};
