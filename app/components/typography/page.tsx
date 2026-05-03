import {
  Typography,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";

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
        <Typography variant="h1">Typography</Typography>
        <Typography variant="lead">
          The structural language of 8eyond UI. A dual-layer system balancing
          technical precision with readability.
        </Typography>
      </div>

      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <Typography variant="h3">Scale Preview</Typography>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core Archetypes
          </span>
        </div>

        <div className="space-y-24">
          {typographyExamples.map((example) => {
            return (
              <div key={example.label} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-sm bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold">
                      {example.variant.toUpperCase()}
                    </span>
                    <Typography
                      variant="large"
                      className="text-sm uppercase tracking-[0.2em]"
                    >
                      {example.label}
                    </Typography>
                  </div>
                  <Typography
                    variant="muted"
                    className="font-mono text-[10px] italic opacity-50"
                  >
                    Archetype Reference
                  </Typography>
                </div>

                <div className="space-y-4">
                  <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] overflow-hidden">
                    <Typography
                      variant={example.variant}
                      gradient={example.gradient}
                    >
                      {example.content}
                    </Typography>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-sm blur-sm" />
                    <div className="relative p-6 rounded-sm bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex items-center justify-between">
                      <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
                        {example.code}
                      </code>
                      <CopyButton value={example.code} className="ml-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <Typography variant="h3">API Reference</Typography>
        <Card className="overflow-hidden border-white/5 bg-black/20">
          <Table>
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
                <TableCell className="font-mono text-accent">variant</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "small" |
                  "muted" | "code" | "ul" | "li" | "blockquote"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"p"</TableCell>
                <TableCell>The typographic preset to apply.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">as</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  React.ElementType
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  The HTML element to render as (e.g. "span", "div").
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">
                  gradient
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>Apply metallic gold gradient effect.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">align</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "left" | "center" | "right" | "justify"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"left"</TableCell>
                <TableCell>Text alignment.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
