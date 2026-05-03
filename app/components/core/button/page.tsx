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
import { CopyButton } from "@/components/docs/CopyButton";
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
        { variant: "primary", children: "Full_Width_Block", fullWidth: true },
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
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="w-2 h-2 bg-accent shadow-glow" />
          <H3>Execution</H3>
        </div>
        <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px]" />

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
              {isDeploying ? "Deploying..." : "Initialize_System"}
            </Button>
            <Typography variant="small" className="text-zinc-600 font-mono">
              [CMD]: sudo systemctl start 8eyond-core.service
            </Typography>
          </div>
        </div>
      </section>

      {/* Industrial Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-500" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="space-y-16">
          {industrialExamples.map((group) => (
            <div key={group.label} className="space-y-6">
              <Typography
                variant="large"
                className="text-xs uppercase tracking-[0.3em] text-zinc-500"
              >
                {group.label.replace("_", " ")}
              </Typography>

              <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-wrap gap-6 items-center">
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
        <H3>API_Reference</H3>
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
                  "primary" | "secondary" | "success" | "destructive" |
                  "outline" | "ghost" | "link"
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  "primary"
                </TableCell>
                <TableCell>The industrial visual style preset.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">size</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "xs" | "sm" | "md" | "lg" | "xl" | "icon"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Structural dimensions of the button artifact.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">loading</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Engage technical spinner and disable input.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">
                  fullWidth
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
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
        <H3>Usage</H3>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-sm blur-sm" />
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex items-center justify-between">
            <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
              {`<Button 
  variant="primary" 
  leftIcon={<Zap size={14} />}
>
  Deploy_System
</Button>`}
            </code>
            <CopyButton
              value={`<Button variant="primary" leftIcon={<Zap size={14} />}>Deploy_System</Button>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
