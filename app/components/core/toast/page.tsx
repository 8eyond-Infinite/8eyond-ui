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
  H1,
  H3,
  Lead,
  Muted,
  useToast,
  ToastProvider,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";
import { LayoutGrid, MousePointer2 } from "lucide-react";

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export default function ToastDoc() {
  const [demoPosition, setDemoPosition] =
    React.useState<ToastPosition>("bottom-right");

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Toast</H1>
        <Lead>
          A non-interruptive system notification artifact. Engineered for
          high-visibility operational feedback within the architectural flow.
        </Lead>
      </div>

      {/* Local Demo with Provider */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <ToastProvider position={demoPosition}>
          <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center gap-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Position Controller */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 px-1">
                  <div className="w-1 h-1 bg-zinc-800" />
                  <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                    Positions
                  </Muted>
                </div>
                <Card className="p-6 bg-black/40 border-white/10 grid grid-cols-2 gap-3 h-fit">
                  {(
                    [
                      "top-left",
                      "top-right",
                      "bottom-left",
                      "bottom-right",
                    ] as ToastPosition[]
                  ).map((pos) => (
                    <Button
                      key={pos}
                      variant={demoPosition === pos ? "primary" : "ghost"}
                      size="sm"
                      className="text-[10px] font-mono"
                      onClick={() => setDemoPosition(pos)}
                    >
                      {pos.replace("-", "_").toUpperCase()}
                    </Button>
                  ))}
                </Card>
              </div>

              {/* Signal Trigger */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 px-1">
                  <div className="w-1 h-1 bg-zinc-800" />
                  <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                    Variants
                  </Muted>
                </div>
                <Card className="p-6 bg-black/40 border-white/10 flex flex-wrap gap-3 h-fit">
                  <ToastTrigger variant="success" label="Success" />
                  <ToastTrigger variant="info" label="Info" />
                  <ToastTrigger variant="warning" label="Warning" />
                  <ToastTrigger variant="error" label="Error" />
                </Card>
              </div>
            </div>

            <Muted className="relative z-10 text-[10px] italic">
              {
                "// Note: This demo uses a local ToastProvider to isolate coordinate testing."
              }
            </Muted>
          </div>
        </ToastProvider>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-800" />
            <H3>API_Reference</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>
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
                <TableCell className="font-mono text-white">title</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px]">-</TableCell>
                <TableCell>The bold header text of the notification.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  description
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px]">-</TableCell>
                <TableCell>
                  The technical details displayed in monospace.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">type</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "info" | "success" | "warning" | "error"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"info"</TableCell>
                <TableCell>
                  Operational status level for color coding.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">duration</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px]">5000</TableCell>
                <TableCell>
                  Time in milliseconds before auto-decommissioning.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">position</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  "top-left" | "top-right" | "bottom-left" | "bottom-right"
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  "bottom-right"
                </TableCell>
                <TableCell>
                  Anchor position of the toast stack on the screen.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-800" />
            <H3>Usage</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-sm blur-sm" />
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex flex-col gap-6">
            <div className="space-y-2">
              <Muted className="text-[10px] uppercase">
                1. Wrap your application:
              </Muted>
              <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
                {`// app/layout.tsx
<ToastProvider position="bottom-right">
  {children}
</ToastProvider>`}
              </code>
            </div>
            <div className="space-y-2 border-t border-white/5 pt-6">
              <Muted className="text-[10px] uppercase">
                2. Use within components:
              </Muted>
              <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
                {`const { toast } = useToast();

toast({
  title: "PROTOCOL_INITIALIZED",
  description: "Secure node established successfully.",
  type: "success",
});`}
              </code>
            </div>
            <div className="absolute top-8 right-8">
              <CopyButton
                value={`<ToastProvider position="bottom-right">\n  {children}\n</ToastProvider>\n\nconst { toast } = useToast();\n\ntoast({\n  title: "PROTOCOL_INITIALIZED",\n  description: "Secure node established successfully.",\n  type: "success",\n});`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToastTrigger({
  variant,
  label,
}: {
  variant: "success" | "error" | "warning" | "info";
  label: string;
}) {
  const { toast } = useToast();

  const getButtonVariant = () => {
    if (variant === "success") return "success";
    if (variant === "error") return "destructive";
    if (variant === "warning") return "primary";
    return "secondary";
  };

  return (
    <Button
      variant={getButtonVariant()}
      size="sm"
      className="text-[10px] font-mono"
      onClick={() =>
        toast({
          title: `${variant.toUpperCase()}_SIGNAL`,
          description: `Triggering operational feedback for ${variant} status.`,
          type: variant,
        })
      }
    >
      Trigger_{label}
    </Button>
  );
}
