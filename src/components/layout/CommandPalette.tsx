"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/core/Dialog/Dialog";
import { sidebarData } from "@/config/docs";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const allItems = React.useMemo(() => {
    return sidebarData.flatMap((system) =>
      system.groups.flatMap((group) =>
        group.items.map((item) => ({
          ...item,
          system: system.label.replace("_", " "),
          group: group.title,
        }))
      )
    );
  }, []);

  const filteredItems = React.useMemo(() => {
    if (!query) return [];
    return allItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 10);
  }, [query, allItems]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const onSelect = (href: string) => {
    onOpenChange(false);
    router.push(href);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 overflow-hidden border-white/10 bg-zinc-950">
        <div className="relative flex items-center border-b border-white/5 px-4 h-14">
          <Search size={16} className="text-zinc-500 mr-3" />
          <input
            autoFocus
            placeholder="Search artifacts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-white placeholder:text-zinc-700"
          />
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100">
            ESC
          </kbd>
        </div>

        <div className="max-h-[320px] overflow-y-auto p-2">
          {!query ? (
            <div className="py-12 text-center">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                Type to search components
              </p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                No results found
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => onSelect(item.href)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-sm hover:bg-white/5 group transition-colors text-left"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold uppercase italic text-zinc-400 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-700 group-hover:text-accent/60 transition-colors uppercase">
                        {item.group}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-zinc-600 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-zinc-800 group-hover:text-accent transition-all translate-x-0 group-hover:translate-x-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
