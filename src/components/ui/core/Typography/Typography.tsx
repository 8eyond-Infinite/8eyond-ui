import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "ul"
  | "li"
  | "lead"
  | "large"
  | "small"
  | "muted"
  | "code";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  align?: "left" | "center" | "right" | "justify";
  gradient?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, align, gradient, ...props }, ref) => {
    const Component =
      as ||
      (variant === "ul"
        ? "ul"
        : variant === "li"
          ? "li"
          : variant === "blockquote"
            ? "blockquote"
            : variant.startsWith("h")
              ? (variant as React.ElementType)
              : "p");

    const alignments = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    };

    const variants = {
      h1: "scroll-m-20 text-4xl font-black tracking-tighter lg:text-6xl text-foreground font-mono",
      h2: "scroll-m-20 border-b border-border pb-2 text-3xl font-bold tracking-tight first:mt-0 text-foreground font-mono",
      h3: "scroll-m-20 text-2xl font-bold tracking-tight text-foreground font-mono",
      h4: "scroll-m-20 text-xl font-bold tracking-tight text-foreground font-mono",
      p: "leading-7 [&:not(:first-child)]:mt-6 font-normal text-foreground/80",
      blockquote: "mt-6 border-l-2 border-border pl-6 italic text-muted",
      ul: "my-6 ml-6 list-none space-y-2",
      li: "relative pl-6 text-foreground/80 leading-7 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:bg-accent/40",
      lead: "text-xl text-muted font-normal leading-relaxed",
      large: "text-lg font-bold text-foreground",
      small: "text-sm font-medium leading-none text-muted",
      muted: "text-[13px] text-muted font-medium",
      code: "relative rounded-[2px] bg-foreground/5 border border-border px-[0.4rem] py-[0.1rem] font-mono text-[12px] font-medium text-foreground shadow-sm",
    };

    const gradientStyles =
      "bg-gradient-to-br from-foreground via-foreground/70 to-foreground/40 bg-clip-text text-transparent";

    return (
      <Component
        ref={ref}
        className={cn(
          variants[variant],
          align && alignments[align],
          gradient && gradientStyles,
          className
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography };

// Explicit Exports for better DX
export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="h1" as="h1" ref={ref} />
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="h2" as="h2" ref={ref} />
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="h3" as="h3" ref={ref} />
);
H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="h4" as="h4" ref={ref} />
);
H4.displayName = "H4";

export const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="p" as="p" ref={ref} />
);
P.displayName = "P";

export const Blockquote = React.forwardRef<HTMLQuoteElement, TypographyProps>(
  (props, ref) => (
    <Typography {...props} variant="blockquote" as="blockquote" ref={ref} />
  )
);
Blockquote.displayName = "Blockquote";

export const UL = React.forwardRef<HTMLUListElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="ul" as="ul" ref={ref} />
);
UL.displayName = "UL";

export const LI = React.forwardRef<HTMLLIElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="li" as="li" ref={ref} />
);
LI.displayName = "LI";

export const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="lead" as="p" ref={ref} />
);
Lead.displayName = "Lead";

export const Large = React.forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="large" as="div" ref={ref} />
);
Large.displayName = "Large";

export const Small = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="small" as="small" ref={ref} />
);
Small.displayName = "Small";

export const Muted = React.forwardRef<HTMLSpanElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="muted" as="span" ref={ref} />
);
Muted.displayName = "Muted";

export const InlineCode = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => <Typography {...props} variant="code" as="code" ref={ref} />
);
InlineCode.displayName = "InlineCode";
