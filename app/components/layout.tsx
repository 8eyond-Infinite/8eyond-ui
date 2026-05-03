import { DocsLayout } from "@/components/layout";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}
