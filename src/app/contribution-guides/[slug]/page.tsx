import DocTemplate from "@/components/DocTemplate";

export default async function ContributionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <DocTemplate slug={slug} expectedCategory="contribution-guides" />;
}