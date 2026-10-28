import { getLogoReferenceContent } from "./planningSections";

export interface CodePortfolioModuleContent {
  badge: string;
  title: string;
  description: string;
  action: string;
}

export interface CodePortfolioContent {
  headingLead: string;
  headingAccent: string;
  modules: CodePortfolioModuleContent[];
  modalTitle: string;
  closeLabel: string;
}

export interface BoxesImageCardContent {
  title: string;
  description: string;
  imageAlt: string;
}

export interface BoxesImageContent {
  headingLead: string;
  headingAccent: string;
  intro: string;
  cards: BoxesImageCardContent[];
}

const portfolioPaths = [
  "/services/data-science/",
  "/services/database-development/",
  "/m365-sharepoint/",
  "/services/it-outsourcing/",
  "/services/testing-and-qa/",
  "/services/software-development/",
  "/services/it-support/",
  "/services/desktop-development/",
  "/computer-vision/",
  "/salesforce-tech/",
  "/php-engineers/",
  "/services/data-warehousing/",
  "/iot-engineering/",
  "/services/machine-learning/",
  "/dynamics-365-solutions/",
  "/services/web-development/",
  "/services/penetration-testing/",
  "/services/software-consulting/",
  "/services/application-services/",
  "/c-engineers/",
  "/java-architects/",
  "/ar-experiences/",
  "/servicenow-dev/",
  "/azure-cloud/",
  "/pimcore-solutions/",
  "/services/mobile-development/",
  "/digital-retail/",
  "/services/application-maintenance/",
  "/telecom-tech/",
  "/services/managed-it-services/",
  "/services/big-data/",
  "/services/it-staff-augmentation/",
  "/services/api-development/",
  "/retail-banking-it/",
  "/aws-infrastructure/",
  "/net-experts/",
  "/services/cybersecurity/",
  "/services/it-consulting/",
  "/services/devops-consulting/",
  "/services/",
  "/services/mvp-development/",
  "/services/ai-development/",
  "/services/microsoft-consulting/",
  "/services/artificial-intelligence/",
  "/services/infrastructure-services/",
  "/services/it-help-desk/",
  "/services/security-testing/",
  "/data-science-ops/",
  "/ml-engineering/",
  "/blockchain-tech/",
  "/big-data-systems/",
  "/vr-enterprise/",
  "/cloud-native/",
  "/python-engineers/",
  "/go-engineers/",
  "/node-js-experts/",
  "/javascript-devs/",
  "/react-native-experts/",
  "/mobile-devs/",
  "/ms-ecosystem/",
  "/power-apps-dev/",
  "/logistics-fleet/",
  "/headless-cms/",
  "/financial-planning-analyses/",
  "/enterprise-accounting/",
  "/applied-ai/",
  "/med-devices-software/",
  "/behavioral-health-it/",
  "/lab-info-systems/",
  "/pharma-biotech/",
  "/medtech-startups/",
  "/public-health-systems/",
  "/wellness-apps/",
  "/insurtech/",
  "/wealth-management-tech/",
  "/digital-lending/",
  "/fintech-engineering/",
  "/payment-gateways/",
  "/smart-manufacturing/",
  "/logistics-software/",
  "/energy-utilities/",
  "/professional-services-it/",
  "/construction-it/",
  "/hospitality-tech/",
] as const;

const boxesImagePaths = [
  "/services/it-outsourcing/",
  "/services/software-development/",
  "/services/it-support/",
  "/services/desktop-development/",
  "/services/software-consulting/",
  "/services/application-services/",
  "/services/mobile-development/",
  "/digital-retail/",
  "/services/application-maintenance/",
  "/telecom-tech/",
  "/services/managed-it-services/",
  "/services/it-staff-augmentation/",
  "/retail-banking-it/",
  "/services/it-consulting/",
  "/services/",
  "/services/mvp-development/",
  "/services/ai-development/",
  "/services/it-project-management/",
  "/services/agile-consulting/",
  "/services/it-help-desk/",
  "/services/compliance-services/",
  "/logistics-fleet/",
  "/financial-planning-analyses/",
  "/enterprise-accounting/",
  "/med-devices-software/",
  "/behavioral-health-it/",
  "/lab-info-systems/",
  "/pharma-biotech/",
  "/medtech-startups/",
  "/public-health-systems/",
  "/wellness-apps/",
  "/insurtech/",
  "/wealth-management-tech/",
  "/digital-lending/",
  "/fintech-engineering/",
  "/payment-gateways/",
  "/smart-manufacturing/",
  "/logistics-software/",
  "/energy-utilities/",
  "/professional-services-it/",
  "/construction-it/",
  "/hospitality-tech/",
  "/about/",
  "/our-agency/",
  "/our-vision/",
  "/quality-standards/",
  "/directors/",
  "/the-engineers/",
  "/case-studies/",
  "/client-feedback/",
  "/tech-alliances/",
  "/global-presence/",
  "/onboarding-workflow/",
  "/engagement-models/",
  "/agile-pmo/",
  "/system-design-hub/",
  "/innovation-labs/",
  "/delivery-framework/",
  "/security-posture/",
  "/co-innovation/",
  "/green-it/",
  "/webinars-talks/",
  "/press-coverage/",
  "/leadership-insights/",
  "/tech-blog/",
  "/agency-updates/",
  "/press-kit/",
  "/media-spokespersons/",
  "/hiring-workflow/",
  "/partner-program/",
  "/refer-a-dev/",
  "/endorsements/",
  "/industry-awards/",
  "/careers-portal/",
] as const;

const topicOverrides: Record<string, string> = {
  "/services/it-outsourcing/": "IT Outsourcing",
  "/services/software-development/": "Software Development",
  "/services/it-support/": "IT Support",
  "/services/desktop-development/": "Desktop Applications",
  "/services/web-development/": "Web Development",
  "/services/software-consulting/": "Software Consulting",
  "/services/application-services/": "Application Services",
  "/services/mobile-development/": "Mobile Applications",
  "/services/application-maintenance/": "Application Maintenance",
  "/services/managed-it-services/": "Managed IT Services",
  "/services/it-staff-augmentation/": "IT Staff Augmentation",
  "/services/it-consulting/": "IT Consulting",
  "/services/": "Software Services",
  "/services/mvp-development/": "MVP Development",
  "/services/it-help-desk/": "IT Help Desk",
  "/node-js-experts/": "Node.js Engineering",
  "/javascript-devs/": "JavaScript Engineering",
  "/react-native-experts/": "React Native Engineering",
  "/headless-cms/": "Headless CMS",
};

function normalizePath(path: string | null | undefined): string {
  const value = (path || "/").trim().split(/[?#]/)[0].toLowerCase().replace(/^\/+|\/+$/g, "");
  return value ? `/${value}/` : "/";
}

function humanizePath(path: string): string {
  const segment = path.split("/").filter(Boolean).pop() || "software services";
  const acronyms: Record<string, string> = {
    ai: "AI", api: "API", ar: "AR", aws: "AWS", bi: "BI", cms: "CMS", crm: "CRM",
    erp: "ERP", go: "Go", hris: "HRIS", iot: "IoT", it: "IT", java: "Java", javascript: "JavaScript",
    lab: "Lab", m365: "M365", ml: "ML", ms: "Microsoft", mvp: "MVP", net: ".NET", php: "PHP",
    pmo: "PMO", qa: "QA", saas: "SaaS", ui: "UI", ux: "UX", vr: "VR", wms: "WMS",
  };
  return segment.split("-").map((word) => acronyms[word] || `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");
}

function topicFor(path: string): string {
  const normalized = normalizePath(path);
  if (topicOverrides[normalized]) return topicOverrides[normalized];
  const logoTopic = getLogoReferenceContent(normalized).heading.split(":")[0].trim();
  return logoTopic === "Project Help" ? humanizePath(normalized) : logoTopic;
}

function compactTopic(topic: string): string {
  if (topic.length <= 22) return topic;
  const words = topic.split(" ");
  let value = words.shift() || topic;
  while (words.length && `${value} ${words[0]}`.length <= 22) value += ` ${words.shift()}`;
  return value;
}

function topicCode(topic: string): string {
  const words = topic.match(/[A-Za-z0-9]+/g) || ["Module"];
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words.map((word) => word[0]).join("").slice(0, 4).toUpperCase();
}

function createPortfolioContent(path: string): CodePortfolioContent {
  const topic = topicFor(path);
  const compact = compactTopic(topic);
  const code = topicCode(topic);
  const scope = humanizePath(path).toLowerCase();
  const modules = [
    [`01 / ${code}`, "State", `Review a simple state change in the ${scope} module before connecting broader workflows.`],
    [`02 / ${code}`, "Filter", `Filter a small reference list to examine how ${scope} options can be narrowed.`],
    [`03 / ${code}`, "Workflow", `Move sample work items to review the sequence used for ${scope} delivery.`],
    [`04 / ${code}`, "Loading", `Inspect a controlled loading state before ${scope} service data is displayed.`],
    [`05 / ${code}`, "Theme", `Switch presentation preferences without changing the underlying ${scope} content.`],
    [`06 / ${code}`, "Validation", `Validate a sample email field before a ${scope} request continues.`],
  ].map(([badge, label, description]) => ({
    badge,
    title: `${compact} ${label}`,
    description,
    action: `Open ${compact} →`,
  }));

  return {
    headingLead: topic,
    headingAccent: "Engineering Modules",
    modules,
    modalTitle: `${topic} Engineering Simulator`,
    closeLabel: "Close",
  };
}

function createBoxesImageContent(path: string): BoxesImageContent {
  const topic = topicFor(path);
  const compact = compactTopic(topic);
  const scope = humanizePath(path).toLowerCase();
  const cards = [
    ["Structure", `Define the boundaries, responsibilities and core elements for ${scope} work.`],
    ["Workflow", `Connect the people, tasks and review points involved in ${scope} delivery.`],
    ["Experience", `Organize how users move through the information and actions in ${scope}.`],
    ["Data", `Clarify the records, state changes and validation needed for ${scope}.`],
    ["Connections", `Map the systems, services and handoffs that support ${scope}.`],
    ["Review", `Check ${scope} changes against the agreed scope before handover.`],
  ].map(([label, description]) => ({
    title: `${compact} ${label}`,
    description,
    imageAlt: `${topic} ${label.toLowerCase()} planning`,
  }));

  return {
    headingLead: `${topic} Delivery`,
    headingAccent: "Capabilities",
    intro: `Review six practical areas used to shape ${scope} work from structure through handover.`,
    cards,
  };
}

export const codePortfolioContent: Record<string, CodePortfolioContent> = Object.fromEntries(
  portfolioPaths.map((path) => [path, createPortfolioContent(path)]),
);

export const boxesImageContent: Record<string, BoxesImageContent> = Object.fromEntries(
  boxesImagePaths.map((path) => [path, createBoxesImageContent(path)]),
);

const fallbackPortfolio = createPortfolioContent("/services/");
const fallbackBoxesImage = createBoxesImageContent("/services/");

export const getCodePortfolioContent = (path?: string | null): CodePortfolioContent =>
  codePortfolioContent[normalizePath(path)] || fallbackPortfolio;

export const getBoxesImageContent = (path?: string | null): BoxesImageContent =>
  boxesImageContent[normalizePath(path)] || fallbackBoxesImage;
