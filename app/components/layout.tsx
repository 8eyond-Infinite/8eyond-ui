import { DocsLayout } from "@/components/layout/DocsLayout";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}
