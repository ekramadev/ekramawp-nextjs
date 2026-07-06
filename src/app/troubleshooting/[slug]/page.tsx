import DocTemplate from "@/components/DocTemplate";

export default async function TroubleshootingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // We are adding the expectedCategory prop here so TypeScript is happy!
  return <DocTemplate slug={slug} expectedCategory="troubleshooting" />;
}