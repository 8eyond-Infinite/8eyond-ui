import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "destructive"
    | "outline"
    | "link"
    | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center rounded-[2px] font-mono text-[13px] tracking-tight transition-all duration-500 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

    const variants = {
      primary:
        "bg-foreground text-background hover:bg-white/90 shadow-[0_4px_12px_rgba(255,255,255,0.03)]",
      secondary:
        "border border-white/5 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.08] hover:text-white hover:border-white/10",
      ghost: "text-zinc-500 hover:text-white hover:bg-white/5",
      destructive:
        "bg-red-500/5 text-red-500 border border-red-500/10 hover:bg-red-500/10 hover:border-red-500/40 shadow-[0_4px_12px_rgba(239,68,68,0.05)]",
      outline:
        "border border-white/10 bg-transparent text-zinc-500 hover:bg-white/5 hover:border-white/20 hover:text-white",
      link: "text-accent underline-offset-4 hover:underline px-0 h-auto font-bold uppercase italic",
      success:
        "bg-emerald-500/5 text-emerald-500 border border-emerald-500/10 hover:bg-emerald-500/10 hover:border-emerald-500/40 shadow-[0_4px_12px_rgba(16,185,129,0.05)]",
    };

    const sizes = {
      xs: "h-7 px-3 text-[11px]",
      sm: "h-8 px-4 text-[12px]",
      md: "h-11 px-8 text-[13px]",
      lg: "h-14 px-12 text-[15px] font-medium",
      xl: "h-16 px-16 text-[17px] font-medium",
      icon: "h-10 w-10 px-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          variants[variant as keyof typeof variants],
          sizes[size],
          fullWidth && "w-full",
          size === "icon" && "rounded-sm",
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className={cn("h-4 w-4 animate-spin", children && "mr-2")} />
        ) : leftIcon ? (
          <span className={cn(children && "mr-2")}>{leftIcon}</span>
        ) : null}
        {children}
        {!loading && rightIcon && (
          <span className={cn(children && "ml-2")}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
