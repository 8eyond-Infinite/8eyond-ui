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
import { UsageBlock } from "@/components/docs/UsageBlock";

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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <ToastProvider position={demoPosition}>
          <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center gap-12 transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Position Controller */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 px-1">
                  <div className="w-1 h-1 bg-border" />
                  <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                    Positions
                  </Muted>
                </div>
                <Card className="p-6 bg-background/40 border-border grid grid-cols-2 gap-3 h-fit">
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
                  <div className="w-1 h-1 bg-border" />
                  <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                    Variants
                  </Muted>
                </div>
                <Card className="p-6 bg-background/40 border-border flex flex-wrap gap-3 h-fit">
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
                  title
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  -
                </TableCell>
                <TableCell className="text-muted/70">
                  The bold header text of the notification.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  description
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  -
                </TableCell>
                <TableCell className="text-muted/70">
                  The technical details displayed in monospace.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  type
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "info" | "success" | "warning" | "error"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "info"
                </TableCell>
                <TableCell className="text-muted/70">
                  Operational status level for color coding.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  duration
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  5000
                </TableCell>
                <TableCell className="text-muted/70">
                  Time in milliseconds before auto-decommissioning.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  position
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  "top-left" | "top-right" | "bottom-left" | "bottom-right"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "bottom-right"
                </TableCell>
                <TableCell className="text-muted/70">
                  Anchor position of the toast stack on the screen.
                </TableCell>
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
          code={`// app/layout.tsx\n<ToastProvider position="bottom-right">\n  {children}\n</ToastProvider>\n\n// Usage within components:\nconst { toast } = useToast();\n\ntoast({\n  title: "PROTOCOL_INITIALIZED",\n  description: "Secure node established successfully.",\n  type: "success",\n});`}
        />
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
