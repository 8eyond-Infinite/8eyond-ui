"use client";

import * as React from "react";
import {
  Button,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";
import { Shield, Terminal, Zap } from "lucide-react";

interface ButtonExample {
  variant:
    | "primary"
    | "secondary"
    | "ghost"
    | "destructive"
    | "outline"
    | "link"
    | "success";
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function ButtonDoc() {
  const industrialExamples: { label: string; items: ButtonExample[] }[] = [
    {
      label: "Variants",
      items: [
        { variant: "primary", children: "Primary" },
        { variant: "secondary", children: "Secondary" },
        { variant: "success", children: "Success" },
        { variant: "destructive", children: "Destructive" },
        { variant: "outline", children: "Outline" },
        { variant: "ghost", children: "Ghost" },
      ],
    },
    {
      label: "States",
      items: [
        {
          variant: "primary",
          children: "Execute",
          leftIcon: <Zap size={14} />,
        },
        {
          variant: "outline",
          children: "Shield",
          rightIcon: <Shield size={14} />,
        },
      ],
    },
    {
      label: "Scaling",
      items: [
        { variant: "secondary", children: "XS", size: "xs" },
        { variant: "secondary", children: "SM", size: "sm" },
        { variant: "secondary", children: "MD", size: "md" },
        { variant: "secondary", children: "LG", size: "lg" },
        { variant: "secondary", children: "XL", size: "xl" },
        {
          variant: "secondary",
          children: null,
          size: "icon",
          leftIcon: <Terminal size={16} />,
        },
      ],
    },
    {
      label: "Layout",
      items: [
        { variant: "primary", children: "Full Width Block", fullWidth: true },
      ],
    },
  ];

  const [isDeploying, setIsDeploying] = React.useState(false);

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => setIsDeploying(false), 2000);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Button</H1>
        <Lead>
          The primary industrial interaction artifact. Designed for high-density
          utility and operational efficiency.
        </Lead>
      </div>

      {/* Interactive Execution Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>
        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] flex flex-col items-center justify-center gap-6 relative overflow-hidden transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <Muted className="text-[10px] uppercase tracking-[0.3em]">
              Status: Idle
            </Muted>
            <Button
              size="lg"
              loading={isDeploying}
              onClick={handleDeploy}
              leftIcon={!isDeploying && <Zap size={14} />}
              className="min-w-[280px]"
            >
              {isDeploying ? "Deploying..." : "Initialize"}
            </Button>
            <Typography variant="small" className="text-muted font-mono">
              [CMD]: sudo systemctl start 8eyond-core.service
            </Typography>
          </div>
        </div>
      </section>

      {/* Industrial Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="space-y-16">
          {industrialExamples.map((group) => (
            <div key={group.label} className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  {group.label.replace("_", " ")}
                </Muted>
              </div>

              <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex flex-wrap gap-6 items-center transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
                {group.items.map((btn, idx) => (
                  <div key={idx} className="space-y-4">
                    <Button {...btn} />
                    <Muted className="block text-[9px] font-mono opacity-40 text-center uppercase">
                      {btn.variant} {btn.size && `(${btn.size})`}
                    </Muted>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Reference */}
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
                  "primary" | "secondary" | "success" | "destructive" |
                  "outline" | "ghost" | "link"
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  "primary"
                </TableCell>
                <TableCell>The industrial visual style preset.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  size
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "xs" | "sm" | "md" | "lg" | "xl" | "icon"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Structural dimensions of the button artifact.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  loading
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Engage technical spinner and disable input.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  fullWidth
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>Occupies 100% of the container width.</TableCell>
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
          code={`<Button \n  variant="primary" \n  leftIcon={<Zap size={14} />}\n>\n  Deploy_System\n</Button>`}
        />
      </section>
    </div>
  );
}
