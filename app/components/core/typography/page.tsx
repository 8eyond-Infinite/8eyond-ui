import {
  Typography,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function TypographyDoc() {
  const typographyExamples = [
    {
      variant: "h1" as const,
      label: "Gradient Hero",
      code: '<Typography variant="h1" gradient>Alchemical Ascension</Typography>',
      content: "Alchemical Ascension",
      gradient: true,
    },
    {
      variant: "h1" as const,
      label: "Heading 1",
      code: '<Typography variant="h1">Architectural Entropy</Typography>',
      content: "Architectural Entropy",
      gradient: false,
    },
    {
      variant: "h2" as const,
      label: "Heading 2",
      code: '<Typography variant="h2">Transmission Protocols</Typography>',
      content: "Transmission Protocols",
      gradient: false,
    },
    {
      variant: "h3" as const,
      label: "Heading 3",
      code: '<Typography variant="h3">Kernel Alignment</Typography>',
      content: "Kernel Alignment",
      gradient: false,
    },
    {
      variant: "p" as const,
      label: "Paragraph",
      code: '<Typography variant="p">The alchemical process begins...</Typography>',
      content:
        "The alchemical process begins with the raw essence of data. Through careful distillation and precise structural alignment, we transmute information into high-performance visual artifacts.",
      gradient: false,
    },
    {
      variant: "blockquote" as const,
      label: "Blockquote",
      code: '<Typography variant="blockquote">At the center of...</Typography>',
      content:
        "At the center of every architectural node lies the lead essence, waiting for the alchemist's touch to reach its golden potential.",
      gradient: false,
    },
    {
      variant: "ul" as const,
      label: "Unordered List",
      code: '<Typography variant="ul">\n  <Typography variant="li">Atomic Design</Typography>\n  <Typography variant="li">Logical Order</Typography>\n</Typography>',
      content: (
        <>
          <Typography variant="li">Atomic Design Principles</Typography>
          <Typography variant="li">Logical State Consistency</Typography>
          <Typography variant="li">Architectural Purity Standard</Typography>
        </>
      ),
      gradient: false,
    },
    {
      variant: "code" as const,
      label: "Inline Code",
      code: '<Typography variant="code">system.init()</Typography>',
      content: "system.init()",
      gradient: false,
    },
    {
      variant: "muted" as const,
      label: "Muted Text",
      code: '<Typography variant="muted">Last updated: 0x0A2B</Typography>',
      content: "Last updated: 0x0A2B",
      gradient: false,
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      <div className="space-y-4">
        <H1>Typography</H1>
        <Lead>
          The structural language of 8eyond UI. A dual-layer system balancing
          technical precision with readability.
        </Lead>
      </div>

      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="space-y-24">
          {typographyExamples.map((example) => {
            return (
              <div key={example.label} className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-border" />
                    <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                      {example.label}
                    </Muted>
                  </div>
                  <Muted className="font-mono text-[9px] uppercase tracking-widest opacity-30">
                    Archetype_Ref
                  </Muted>
                </div>

                <div className="space-y-4">
                  <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] overflow-hidden transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10 group/preview">
                    <Typography
                      variant={example.variant}
                      gradient={example.gradient}
                    >
                      {example.content}
                    </Typography>
                  </div>

                  <UsageBlock code={example.code} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>API Reference</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>
        <Card className="overflow-hidden border-border bg-foreground/[0.02]">
          <Table variant="technical">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  variant
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "small" |
                  "muted" | "code" | "ul" | "li" | "blockquote"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"p"</TableCell>
                <TableCell>The typographic preset to apply.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">as</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  React.ElementType
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  The HTML element to render as (e.g. "span", "div").
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  gradient
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>Apply adaptive metallic gradient effect.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  align
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "left" | "center" | "right" | "justify"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"left"</TableCell>
                <TableCell>Text alignment.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Usage</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>
        <UsageBlock
          code={`<Typography variant="h1">\n  Industrial_Core\n</Typography>`}
        />
      </section>
    </div>
  );
}
