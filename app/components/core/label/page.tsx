"use client";

import { cn } from "@/lib/utils";
import {
  Label,
  Input,
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
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function LabelDoc() {
  const labelExamples = [
    {
      label: "Standard_Label",
      items: [
        {
          id: "std-1",
          text: "System_Identifier",
          required: false,
          size: "md" as const,
          placeholder: "0x4A2B9",
        },
        {
          id: "std-2",
          text: "Operator_Name",
          required: false,
          size: "md" as const,
          placeholder: "Administrator",
        },
      ],
    },
    {
      label: "Validation_Labels",
      items: [
        {
          id: "val-1",
          text: "Encrypted_Vault_Key",
          required: true,
          size: "md" as const,
          placeholder: "Enter_Key...",
        },
        {
          id: "val-2",
          text: "Secondary_Auth_Protocol",
          required: true,
          size: "md" as const,
          placeholder: "Sequence_ID...",
        },
      ],
    },
    {
      label: "Scaling",
      items: [
        {
          id: "s-xs",
          text: "XS_Label",
          size: "xs" as const,
          placeholder: "Extreme Density",
          required: true,
        },
        {
          id: "s-sm",
          text: "SM_Label",
          size: "sm" as const,
          placeholder: "Compact Mode",
          required: true,
        },
        {
          id: "s-md",
          text: "MD_Label",
          size: "md" as const,
          placeholder: "Standard Protocol",
          required: true,
        },
        {
          id: "s-lg",
          text: "LG_Label",
          size: "lg" as const,
          placeholder: "Focus Mode",
          required: true,
        },
        {
          id: "s-xl",
          text: "XL_Label",
          size: "xl" as const,
          placeholder: "High Fidelity",
          required: true,
        },
      ],
    },
  ] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Label</H1>
        <Lead>
          The technical descriptor for data inscriptions. Optimized for
          monospace clarity and structural hierarchy.
        </Lead>
      </div>

      {/* Preview */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="space-y-16">
          {labelExamples.map((group) => (
            <div key={group.label} className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  {group.label.replace("_", " ")}
                </Muted>
              </div>

              <div
                className={cn(
                  "p-10 rounded-sm border border-border bg-foreground/[0.01] transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10",
                  group.label === "Scaling"
                    ? "flex flex-col gap-8"
                    : "grid grid-cols-1 md:grid-cols-2 gap-8"
                )}
              >
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "space-y-3",
                      group.label === "Scaling" && "max-w-md"
                    )}
                  >
                    <Label
                      htmlFor={item.id}
                      required={item.required}
                      size={item.size}
                    >
                      {item.text}
                    </Label>
                    <Input
                      id={item.id}
                      placeholder={item.placeholder}
                      size={item.size}
                    />
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
                  size
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Synchronized typographic scale for label alignment.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  required
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Display a technical 'required' asterisk indicator.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  htmlFor
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  The ID of the form element the label is bound to.
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
          code={`<Label htmlFor="email" required>\n  Secure_Auth_Address\n</Label>`}
        />
      </section>
    </div>
  );
}
