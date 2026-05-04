"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarProps {
  className?: string;
  onSelect?: (date: Date) => void;
  selected?: Date;
  variant?: "default" | "technical";
}

export function Calendar({
  className,
  onSelect,
  selected,
  variant = "default",
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const days = React.useMemo(() => {
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const prevMonthDays = daysInMonth(year, month - 1);

    const calendarDays = [];

    // Prev month days
    for (let i = firstDay - 1; i >= 0; i--) {
      calendarDays.push({
        day: prevMonthDays - i,
        month: month - 1,
        year,
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      calendarDays.push({
        day: i,
        month,
        year,
        isCurrentMonth: true,
      });
    }

    // Next month days
    const remainingSlots = 42 - calendarDays.length;
    for (let i = 1; i <= remainingSlots; i++) {
      calendarDays.push({
        day: i,
        month: month + 1,
        year,
        isCurrentMonth: false,
      });
    }

    return calendarDays;
  }, [month, year]);

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const isToday = (day: number, m: number, y: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      m === today.getMonth() &&
      y === today.getFullYear()
    );
  };

  const isSelected = (day: number, m: number, y: number) => {
    return (
      selected &&
      day === selected.getDate() &&
      m === selected.getMonth() &&
      y === selected.getFullYear()
    );
  };

  return (
    <div
      className={cn(
        "p-4 bg-background border border-border rounded-sm w-[300px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-foreground tracking-[0.2em] italic">
            {monthNames[month]}
          </span>
          <span className="text-[9px] font-mono text-muted uppercase tracking-widest mt-0.5">
            LOG_YEAR // {year}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-1.5 hover:bg-foreground/[0.05] rounded-sm text-muted hover:text-foreground transition-colors border border-transparent hover:border-border"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={nextMonth}
            className="p-1.5 hover:bg-foreground/[0.05] rounded-sm text-muted hover:text-foreground transition-colors border border-transparent hover:border-border"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Grid Header */}
      <div className="grid grid-cols-7 mb-2">
        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((day) => (
          <div
            key={day}
            className="text-center text-[8px] font-mono font-black text-muted/60 uppercase tracking-tighter"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Grid Body */}
      <div
        className={cn(
          "grid grid-cols-7 gap-px bg-border/20 border border-border/20",
          variant === "technical" && "bg-border/40"
        )}
      >
        {days.map((item, idx) => {
          const active = isSelected(item.day, item.month, item.year);
          const current = isToday(item.day, item.month, item.year);

          return (
            <button
              key={idx}
              onClick={() =>
                onSelect?.(new Date(item.year, item.month, item.day))
              }
              className={cn(
                "h-10 flex flex-col items-center justify-center relative group transition-all duration-300",
                "bg-background",
                item.isCurrentMonth ? "text-foreground/70" : "text-muted/30",
                active && "bg-foreground text-background",
                !active &&
                  item.isCurrentMonth &&
                  "hover:bg-foreground/[0.05] hover:text-foreground"
              )}
            >
              {current && !active && (
                <div className="absolute top-1 right-1 w-1 h-1 bg-accent rounded-full" />
              )}
              <span
                className={cn(
                  "text-[10px] font-mono z-10",
                  active && "font-black scale-110"
                )}
              >
                {item.day.toString().padStart(2, "0")}
              </span>

              {/* Technical decorations */}
              {variant === "technical" && (
                <div className="absolute bottom-1 left-1 flex gap-0.5 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-[2px] h-[2px] bg-muted" />
                  <div className="w-[2px] h-[2px] bg-muted" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-accent" />
          <div className="w-1 h-1 bg-muted/40" />
          <div className="w-1 h-1 bg-muted/40" />
        </div>
        <span className="text-[8px] font-mono text-muted/60 uppercase tracking-widest italic">
          v1.0.4 // Chronos_Core
        </span>
      </div>
    </div>
  );
}
