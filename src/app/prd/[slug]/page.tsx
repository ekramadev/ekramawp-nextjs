import DocTemplate from "@/components/DocTemplate";

// Next.js 16 requires us to await the URL params
export default async function PRDPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Sends the dynamic slug straight to your master template
  return <DocTemplate slug={slug} />;
}