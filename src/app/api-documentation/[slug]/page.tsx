import DocTemplate from "@/components/DocTemplate";

export default async function APIDocsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <DocTemplate slug={slug} expectedCategory="api-documentation" />;
}