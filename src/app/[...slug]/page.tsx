import { getLogoReferenceContent, getWorkPlanningContent } from "@/content/planningSections";
import { getStatsSectionContent, getServicesTabsContent } from "@/content/reviewSections";
import { getCodePortfolioContent, getBoxesImageContent } from "@/content/showcaseSections";
import { getArchitecturePhasesContent, getPageResourcesContent } from "@/content/phaseResources";
import { getHtmlExpertiseContent, getHtmlCapabilitiesContent } from "@/content/htmlSections";
import { getTraditionalHeroContent, getHtmlCheatsheetContent } from "@/content/serviceShowcases";
import { getAiShiftContent, getPentagonGrowthContent } from "@/content/decisionSections";
import { getSimpleDeliveryContent, getDeliveryComparisonContent } from "@/content/deliverySections";
import { getFourBoxesContent } from "@/content/serviceCapabilities";
import { getLeftColumnContent } from "@/content/agencyCarousels";
import { getArchitectureTabsContent, getEngineeringCarouselContent } from "@/content/architectureSections";
import { getFiveCirclesContent } from "@/content/fiveCircles";
import { getContentDoubleContent } from "@/content/contentDouble";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { fetchGraphQL } from "@/lib/wordpress";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Metadata } from "next";
import { getWorkflowHeroContent } from "@/content/workflowHeroes";
import { getMarketIntelligenceContent } from "@/content/marketIntelligence";
import { getGeoOverlapContent, getGeoOverlapWordPressUri } from "@/content/geoOverlap";
import { getWpHeroContent, getEngineeringApproachContent } from "@/content/engineeringSections";

// 1. DYNAMIC QUERY
const PAGE_QUERY = gql`
  query PageQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        content
        slug
        seo {
            fullHead
            title
            metaDesc
        }
      }
    }
  }
`;

// 2. FIXED INTERFACE: params is now a Promise
type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 3. FIXED: Await params before using slug
  const { slug } = await params; 
  const uri = `/${slug.join("/")}/`; 
  
  const data = await fetchGraphQL(print(PAGE_QUERY), { uri: getGeoOverlapWordPressUri(uri) });
  
  if (!data?.nodeByUri?.seo) return { title: "Ekrama" };
  return {
    title: data.nodeByUri.seo.title,
    description: data.nodeByUri.seo.metaDesc,
  };
}

export default async function DynamicPage({ params }: Props) {
  // 4. FIXED: Await params here too
  const { slug } = await params;
  const uri = `/${slug.join("/")}/`;

  const data = await fetchGraphQL(print(PAGE_QUERY), { uri: getGeoOverlapWordPressUri(uri) });

  if (!data || !data.nodeByUri) return notFound();

  // ⚠️ CRITICAL FIX: Handle null content
  // If WordPress returns null for content, we default to an empty string ""
  // This prevents the "First argument must be a string" crash.
  const safeContent = data.nodeByUri.content || "";

  return (
    <main className="w-full min-h-screen bg-[#0E1623]">
      <div className="w-full">
        {/* Pass the safe, non-null content string */}
        <BlockRenderer
          htmlContent={safeContent}
          workflowHero={getWorkflowHeroContent(uri, data.nodeByUri.title)}
          marketIntelligence={getMarketIntelligenceContent(uri, data.nodeByUri.title)}
          geoOverlap={getGeoOverlapContent(uri, data.nodeByUri.title)}
          fiveCircles={getFiveCirclesContent(uri, data.nodeByUri.title)}
          contentDouble={getContentDoubleContent(uri, data.nodeByUri.title)}
          architectureTabs={getArchitectureTabsContent(uri, data.nodeByUri.title)}
          engineeringCarousel={getEngineeringCarouselContent(uri, data.nodeByUri.title)}
          htmlExpertise={getHtmlExpertiseContent(uri, data.nodeByUri.title)}
          htmlCapabilities={getHtmlCapabilitiesContent(uri, data.nodeByUri.title)}
          traditionalHero={getTraditionalHeroContent(uri, data.nodeByUri.title)}
          htmlCheatsheet={getHtmlCheatsheetContent(uri)}
          aiShift={getAiShiftContent(uri, data.nodeByUri.title)}
          pentagonGrowth={getPentagonGrowthContent(uri, data.nodeByUri.title)}
          simpleDelivery={getSimpleDeliveryContent(uri)}
          deliveryComparison={getDeliveryComparisonContent(uri)}
          fourBoxes={getFourBoxesContent(uri)}
          leftColumn={getLeftColumnContent(uri)}
          architecturePhases={getArchitecturePhasesContent(uri)}
          pageResources={getPageResourcesContent(uri)}
          wpHero={getWpHeroContent(uri)}
          engineeringApproach={getEngineeringApproachContent(uri)}
          logoReference={getLogoReferenceContent(uri)}
          workPlanning={getWorkPlanningContent(uri)}
          statsSection={getStatsSectionContent(uri)}
          servicesTabs={getServicesTabsContent(uri)}
          codePortfolio={getCodePortfolioContent(uri)}
          boxesImage={getBoxesImageContent(uri)}
        />
      </div>
    </main>
  );
}
