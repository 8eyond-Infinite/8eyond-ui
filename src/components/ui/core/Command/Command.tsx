"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MoveRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action: () => void;
  category: string;
}

interface CommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CommandItem[];
}

export function CommandMenu({ open, onOpenChange, items }: CommandProps) {
  const [search, setSearch] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const filteredItems = React.useMemo(() => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }

      if (!open) return;

      if (e.key === "Escape") {
        onOpenChange(false);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filteredItems.length);
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (i) => (i - 1 + filteredItems.length) % filteredItems.length
        );
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          onOpenChange(false);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange, filteredItems, selectedIndex]);

  // Click outside to close
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onOpenChange]);

  const categories = Array.from(
    new Set(filteredItems.map((item) => item.category))
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] p-4">
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-[640px] bg-background border border-border shadow-2xl rounded-sm overflow-hidden flex flex-col"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--foreground-raw),0.01)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />

              {/* Input Area */}
              <div className="relative flex items-center px-4 border-b border-border bg-foreground/[0.02]">
                <Search className="w-4 h-4 text-muted mr-3" />
                <input
                  autoFocus
                  placeholder="Execute protocol search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 h-14 bg-transparent outline-none text-[13px] font-mono placeholder:text-muted/40 text-foreground"
                />
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded-[2px] border border-border bg-foreground/[0.05] text-[10px] font-mono text-muted uppercase">
                    Esc
                  </kbd>
                </div>
              </div>

              {/* Results Area */}
              <div className="max-h-[400px] overflow-y-auto p-2 space-y-4 custom-scrollbar">
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center space-y-2">
                    <div className="text-[10px] font-mono text-muted/40 uppercase tracking-[0.2em]">
                      No_Results_Found
                    </div>
                    <div className="text-xs text-muted italic">
                      Zero matches in local sector.
                    </div>
                  </div>
                ) : (
                  categories.map((category) => (
                    <div key={category} className="space-y-1">
                      <div className="px-3 py-2 flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent/40" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted">
                          {category}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {filteredItems
                          .filter((item) => item.category === category)
                          .map((item) => {
                            const globalIndex = filteredItems.indexOf(item);
                            const isSelected = globalIndex === selectedIndex;

                            return (
                              <button
                                key={item.id}
                                onClick={() => {
                                  item.action();
                                  onOpenChange(false);
                                }}
                                onMouseEnter={() =>
                                  setSelectedIndex(globalIndex)
                                }
                                className={cn(
                                  "w-full flex items-center gap-3 px-3 py-3 rounded-[2px] transition-all group relative overflow-hidden text-left",
                                  isSelected
                                    ? "bg-foreground/[0.05]"
                                    : "bg-transparent"
                                )}
                              >
                                {isSelected && (
                                  <motion.div
                                    layoutId="command-highlight"
                                    className="absolute left-0 w-[2px] h-3/5 bg-accent top-1/2 -translate-y-1/2"
                                  />
                                )}

                                <div
                                  className={cn(
                                    "flex-shrink-0 w-8 h-8 rounded-sm border flex items-center justify-center transition-colors",
                                    isSelected
                                      ? "border-accent/30 bg-accent/5 text-accent"
                                      : "border-border text-muted"
                                  )}
                                >
                                  {item.icon || <Terminal size={14} />}
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div
                                    className={cn(
                                      "text-[12px] font-bold uppercase tracking-tight transition-colors",
                                      isSelected
                                        ? "text-foreground"
                                        : "text-foreground/80"
                                    )}
                                  >
                                    {item.title}
                                  </div>
                                  {item.description && (
                                    <div className="text-[10px] font-mono text-muted/60 truncate uppercase tracking-tighter">
                                      {item.description}
                                    </div>
                                  )}
                                </div>

                                {isSelected && (
                                  <MoveRight
                                    size={12}
                                    className="text-accent animate-pulse"
                                  />
                                )}
                              </button>
                            );
                          })}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-border bg-foreground/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded-[2px] border border-border bg-background text-[9px] font-mono text-muted">
                      ↑↓
                    </kbd>
                    <span className="text-[9px] font-mono text-muted/60 uppercase">
                      Navigate
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded-[2px] border border-border bg-background text-[9px] font-mono text-muted">
                      ↵
                    </kbd>
                    <span className="text-[9px] font-mono text-muted/60 uppercase">
                      Execute
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-mono text-muted/40 uppercase tracking-widest italic">
                    System_Stable
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
