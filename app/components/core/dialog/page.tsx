"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Input,
  Label,
  Typography,
  Muted,
  H1,
  H3,
  Lead,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";
import { AlertCircle, UserPlus, CheckCircle2 } from "lucide-react";

export default function DialogDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Dialog</H1>
        <Lead>
          An immersive overlay portal for critical system focus. Engineered for
          structural clarity and precise focus management.
        </Lead>
      </div>

      {/* Preview */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-zinc-800" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Variants
              </Muted>
            </div>

            <Card className="p-16 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden flex flex-wrap gap-6 justify-center items-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Scenario 1: Destructive */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="destructive">Purge_System_Node</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2 text-red-500">
                      <AlertCircle size={18} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
                        Critical_Warning
                      </span>
                    </div>
                    <DialogTitle>Decommission_Protocol</DialogTitle>
                    <DialogDescription>
                      This will permanently purge the current architectural
                      node. All associated alchemical metadata will be lost.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="p-4 rounded-sm bg-red-500/5 border border-red-500/10 font-mono text-[10px] text-red-500/60 italic">
                    {"// EXECUTION_KEY: 0xDEADBEEF_PURGE_AUTHORIZED"}
                  </div>
                  <DialogFooter>
                    <DialogTrigger>
                      <Button variant="ghost">Abort_Process</Button>
                    </DialogTrigger>
                    <Button variant="destructive">Confirm_Purge</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Scenario 2: Identity Registration */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="secondary">Inscribe_Operator</Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2 text-white/40">
                      <UserPlus size={18} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
                        Identity_Registry
                      </span>
                    </div>
                    <DialogTitle>New_System_Operator</DialogTitle>
                    <DialogDescription>
                      Establish a new access point within the 8eyond
                      architectural kernel.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 my-4">
                    <div className="space-y-2">
                      <Label htmlFor="doc-op-name" size="sm">
                        Operator_Identifier
                      </Label>
                      <Input
                        id="doc-op-name"
                        placeholder="ARCHITECT_01"
                        size="sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doc-op-role" size="sm">
                        Permission_Tier
                      </Label>
                      <Input
                        id="doc-op-role"
                        placeholder="ADMIN_ACCESS_LEVEL_7"
                        size="sm"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogTrigger>
                      <Button variant="ghost" size="sm">
                        Cancel
                      </Button>
                    </DialogTrigger>
                    <Button variant="primary" size="sm">
                      Initialize_Access
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Scenario 3: Success Acknowledgement */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="success">Sync_Artifacts</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2 text-emerald-500">
                      <CheckCircle2 size={18} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
                        Synchronization_Stable
                      </span>
                    </div>
                    <DialogTitle>Alignment_Complete</DialogTitle>
                    <DialogDescription>
                      All distributed nodes have been successfully synchronized
                      with the central lead essence.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogTrigger>
                      <Button variant="success" className="w-full">
                        Continue_Operation
                      </Button>
                    </DialogTrigger>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        </div>
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
                <TableCell className="font-mono text-white">open</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Controlled visibility state of the portal.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  onOpenChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  (open: boolean) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Callback triggered upon visibility transition.
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
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex items-center justify-between">
            <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
              {`<Dialog>
  <DialogTrigger>
    <Button>Open_Portal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
            </code>
            <CopyButton
              value={`<Dialog>\n  <DialogTrigger>\n    <Button>Open_Portal</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Title</DialogTitle>\n      <DialogDescription>Description</DialogDescription>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
