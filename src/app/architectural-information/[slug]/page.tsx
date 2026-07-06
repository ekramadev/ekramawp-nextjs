import DocTemplate from "@/components/DocTemplate";

export default async function ArchitecturalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <DocTemplate slug={slug} expectedCategory="architectural-information" />;
}