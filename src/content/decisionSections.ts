export interface AiShiftContent {
  title: string;
  body: string;
  modernAlt: string;
  traditionalAlt: string;
}

export interface PentagonGrowthTabContent {
  title: string;
  heading: string;
  desc: string;
  list: readonly [string, string, string];
  imageAlt: string;
}

export interface PentagonGrowthContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  tabs: readonly [PentagonGrowthTabContent, PentagonGrowthTabContent, PentagonGrowthTabContent, PentagonGrowthTabContent, PentagonGrowthTabContent];
}

export const aiShiftContent: Readonly<Record<string, AiShiftContent>> = {
  "/": {
    title: "Connected Front-End Delivery",
    body: "A useful frontend connects content, application logic and the tasks people need to complete. This illustration contrasts a fragmented workflow with an AI-assisted approach to organizing interface work. Move across the image to compare the two sides, then click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying connected website experiences",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying connected website experiences",
  },
  "/services/data-science/": {
    title: "Interfaces for Data Science",
    body: "Data science interfaces need to explain model inputs, analytical context and the limits of an output. The front-end comparison illustrates a shift from disconnected presentation work toward coordinated, AI-assisted interface development. Move across the image to compare approaches, and click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying data science interfaces",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying data science interfaces",
  },
  "/computer-vision/": {
    title: "Interfaces for Visual Inspection",
    body: "Computer vision tools need interfaces that keep source images, detection results and review actions together. This front-end illustration provides a comparison of fragmented implementation and AI-assisted coordination around that interface work. Move across the image to explore each side, then click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying computer vision review tools",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying computer vision review tools",
  },
  "/services/machine-learning/": {
    title: "Machine Learning in Daily Work",
    body: "An ML-enabled application must connect predictions with the data, decisions and exception states surrounding them. The comparison illustrates how front-end work can move from separate pieces toward an AI-assisted development workflow. Move across the image to compare the sides, and click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying machine learning applications",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying machine learning applications",
  },
  "/services/ai-development/": {
    title: "Interfaces for Custom AI",
    body: "Custom AI development includes the experience around an automated task: user input, system feedback and a clear path for review. This front-end comparison illustrates fragmented delivery alongside AI-assisted coordination of interface work. Move across the image to reveal both approaches, then click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying custom AI application delivery",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying custom AI application delivery",
  },
  "/services/artificial-intelligence/": {
    title: "AI in Operational Workflows",
    body: "Operational AI interfaces should show what information a system used, what it returned and when a person needs to intervene. The illustration compares fragmented front-end work with a coordinated, AI-assisted approach to building those experiences. Move across the image to inspect the contrast, and click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying operational AI interfaces",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying operational AI interfaces",
  },
  "/data-science-ops/": {
    title: "Make Analytical Operations Clear",
    body: "Data science operations need clear views of preparation steps, model runs and the records behind an output. This front-end comparison illustrates the difference between disconnected interface tasks and an AI-assisted development workflow. Move across the image to compare each side, then click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying data science operations views",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying data science operations views",
  },
  "/ml-engineering/": {
    title: "See the Model Delivery Workflow",
    body: "ML engineering interfaces connect training context, evaluation findings and deployed model behavior for the teams operating them. The illustration compares fragmented front-end implementation with AI-assisted coordination of that work. Move across the image to explore the contrast, and click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying ML engineering tools",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying ML engineering tools",
  },
  "/applied-ai/": {
    title: "Applied AI Around the User's Task",
    body: "Document processing and conversational features need interfaces that keep source material, suggested output and human review in context. This comparison illustrates a shift from fragmented front-end work toward an AI-assisted approach to coordinating delivery. Move across the image to compare, then click to pin or release the divider.",
    modernAlt: "AI-assisted front-end workflow illustration accompanying applied AI user journeys",
    traditionalAlt: "Fragmented front-end workflow illustration accompanying applied AI user journeys",
  },
};

export const pentagonGrowthContent: Readonly<Record<string, PentagonGrowthContent>> = {
  "/": {
    titleLead: "Software",
    titleAccent: "Delivery Workflow",
    intro: "Bring requirements, interface development, service integration and release checks together around the software your users need.",
    tabs: [
      {
        title: "Discovery", heading: "Define the Task Before Building the Screen",
        desc: "Start with the people, records and actions the software must support. Map the current workflow and agree on the scope, dependencies and acceptance checks for the work ahead.",
        list: ["User tasks and delivery scope", "Workflow and dependency mapping", "Agreed software acceptance checks"],
        imageAlt: "Existing software-interface illustration accompanying software discovery",
      },
      {
        title: "Interfaces", heading: "Give Shared Components the Right Page Content",
        desc: "Build reusable interface components around clear content fields and understandable states. Keep the wording and data appropriate to each page while maintaining a consistent presentation across the application.",
        list: ["Reusable interface content contracts", "Distinct page and service content", "Consistent application presentation"],
        imageAlt: "Existing software-interface illustration accompanying reusable interface delivery",
      },
      {
        title: "Integration", heading: "Connect User Actions to Application Services",
        desc: "Define the data and permission boundaries between the interface and its supporting systems. Plan request, response and failure behavior as part of the complete task a person needs to finish.",
        list: ["Interface-to-service data boundaries", "Permission-aware application actions", "Explicit request and failure behavior"],
        imageAlt: "Existing software-interface illustration accompanying service integration",
      },
      {
        title: "Validation", heading: "Check the Journey Across Its Important States",
        desc: "Review content, interaction, accessibility and service outcomes together. Exercise the loading, empty and unsuccessful states alongside the expected path before assessing a release.",
        list: ["Complete user-journey review", "Loading, empty and error-state checks", "Content and accessibility verification"],
        imageAlt: "Existing software-interface illustration accompanying software validation",
      },
      {
        title: "Handover", heading: "Leave the Team with a Maintainable Delivery",
        desc: "Document the content sources, release process and operational responsibilities behind the software. Keep review evidence and known limitations available so later changes start from a clear working baseline.",
        list: ["Content-source and release documentation", "Clear operational responsibilities", "Recorded checks and known limitations"],
        imageAlt: "Existing software-interface illustration accompanying software handover",
      },
    ],
  },
  "/services/data-analytics/": {
    titleLead: "Practical",
    titleAccent: "Data Analytics",
    intro: "Connect the source records, preparation steps and analytical questions that give business data a usable decision context.",
    tabs: [
      {
        title: "Sources", heading: "Start with the Records Behind the Question",
        desc: "Identify the systems, owners and reporting periods relevant to the analytical task. Define what each record represents before combining information from separate operational sources.",
        list: ["Source and ownership inventory", "Record-level meaning and identifiers", "Relevant reporting periods"],
        imageAlt: "Existing software-interface illustration accompanying analytics source planning",
      },
      {
        title: "Preparation", heading: "Prepare Data with Visible Rules",
        desc: "Review missing values, duplicate records and inconsistent formats before analysis. Keep transformation rules and exceptions understandable so the team can trace a prepared dataset back to its sources.",
        list: ["Missing and duplicate value checks", "Documented transformation logic", "Reviewable preparation exceptions"],
        imageAlt: "Existing software-interface illustration accompanying analytics data preparation",
      },
      {
        title: "Analysis", heading: "Choose Analysis for the Business Task",
        desc: "Use suitable aggregations, comparisons and exploratory methods to investigate the question. Keep units, populations and time windows aligned when comparing results.",
        list: ["Question-led analytical methods", "Consistent units and populations", "Comparable time-window definitions"],
        imageAlt: "Existing software-interface illustration accompanying analytical comparisons",
      },
      {
        title: "Decisions", heading: "Explain Findings in Their Operating Context",
        desc: "Present patterns alongside definitions, caveats and the source context needed to interpret them. Separate an observed relationship from an assumption about why it occurred.",
        list: ["Clear metric definitions and caveats", "Traceable supporting observations", "Explicit interpretation assumptions"],
        imageAlt: "Existing software-interface illustration accompanying analytics interpretation",
      },
      {
        title: "Delivery", heading: "Make the Analytical Output Maintainable",
        desc: "Define how datasets and reports are refreshed, reviewed and handed over. Give the team a practical way to identify stale information and revisit the logic when source systems change.",
        list: ["Refresh and review responsibilities", "Visible data freshness context", "Maintainable reporting handover"],
        imageAlt: "Existing software-interface illustration accompanying analytics delivery workflows",
      },
    ],
  },
  "/marketing-software/": {
    titleLead: "Connected",
    titleAccent: "Marketing Software",
    intro: "Build campaign tools around audience data, controlled automation and measurement that teams can follow across their marketing workflow.",
    tabs: [
      {
        title: "Audience", heading: "Organize Audience Data for Relevant Workflows",
        desc: "Model audience records, segments and communication preferences around how the campaign platform will use them. Preserve the origin and update rules of information arriving from other systems.",
        list: ["Audience fields and segment rules", "Communication preference handling", "Source-aware customer record updates"],
        imageAlt: "Existing software-interface illustration accompanying marketing audience records",
      },
      {
        title: "Campaigns", heading: "Give Campaigns a Clear Delivery Structure",
        desc: "Connect content, channels, schedules and approval steps in an understandable campaign workspace. Keep drafts, approved material and published activity distinguishable for the team.",
        list: ["Campaign content and channel context", "Schedule and approval states", "Distinct draft and published records"],
        imageAlt: "Existing software-interface illustration accompanying campaign coordination",
      },
      {
        title: "Automation", heading: "Make Automated Actions Reviewable",
        desc: "Define triggers, eligibility conditions and exit rules before automating campaign steps. Record what ran and how exceptions are handled so operators can investigate unintended outcomes.",
        list: ["Explicit campaign trigger conditions", "Eligibility and exit-rule controls", "Action history and exception review"],
        imageAlt: "Existing software-interface illustration accompanying campaign automation rules",
      },
      {
        title: "Measurement", heading: "Connect Campaign Activity to Defined Measures",
        desc: "Capture the events and reporting dimensions needed to evaluate campaign activity. Show attribution assumptions and source limits alongside summaries instead of presenting estimates as certain outcomes.",
        list: ["Defined activity events and dimensions", "Documented attribution assumptions", "Reporting context and source limits"],
        imageAlt: "Existing software-interface illustration accompanying marketing measurement",
      },
      {
        title: "Governance", heading: "Keep Platform Changes and Access Controlled",
        desc: "Apply roles, integration boundaries and review steps around campaign data and configuration. Make ownership clear when teams change audiences, automation rules or connected tools.",
        list: ["Role-based campaign responsibilities", "Controlled integration boundaries", "Configuration ownership and review"],
        imageAlt: "Existing software-interface illustration accompanying marketing platform governance",
      },
    ],
  },
  "/services/business-intelligence/": {
    titleLead: "Useful",
    titleAccent: "BI Reporting Services",
    intro: "Plan BI dashboards and reporting services around defined questions, consistent measures and the people who need to interpret them.",
    tabs: [
      {
        title: "Requirements", heading: "Define What Each Report Must Help People Decide",
        desc: "Work from the operational questions, users and reporting cadence. Agree on the measures and levels of detail that make the report useful before assembling charts.",
        list: ["Decision and reporting-user requirements", "Agreed measures and detail levels", "Operational reporting cadence"],
        imageAlt: "Existing software-interface illustration accompanying BI reporting requirements",
      },
      {
        title: "Data Models", heading: "Give Reports a Consistent Data Foundation",
        desc: "Bring source fields into a model with explicit relationships, calculation rules and business definitions. Check whether joins and aggregations preserve the meaning of the underlying records.",
        list: ["Defined model relationships and grain", "Consistent business calculation rules", "Join and aggregation validation"],
        imageAlt: "Existing software-interface illustration accompanying BI data modeling",
      },
      {
        title: "Reporting", heading: "Present Measures with the Right Context",
        desc: "Compose dashboards that make comparisons, filters and reporting periods clear. Keep labels and measure definitions close enough for users to interpret what a view includes.",
        list: ["Clear filters and reporting periods", "Contextual measure labels and definitions", "Task-focused dashboard composition"],
        imageAlt: "Existing software-interface illustration accompanying BI dashboard composition",
      },
      {
        title: "Exploration", heading: "Support Questions Beyond the Overview",
        desc: "Plan how users move from a summary to the relevant detail. Preserve filter context and make comparison boundaries visible as people investigate a changing measure.",
        list: ["Summary-to-detail reporting journeys", "Preserved exploration filter context", "Visible comparison boundaries"],
        imageAlt: "Existing software-interface illustration accompanying BI report exploration",
      },
      {
        title: "Adoption", heading: "Prepare Reports for Ongoing Use",
        desc: "Document ownership, refresh expectations and important interpretation limits. Review reports with the people who use them so the delivery includes a shared understanding of the data.",
        list: ["Report ownership and refresh expectations", "Documented interpretation limits", "User review and reporting handover"],
        imageAlt: "Existing software-interface illustration accompanying BI report adoption",
      },
    ],
  },
  "/power-bi-dashboards/": {
    titleLead: "Purposeful",
    titleAccent: "Power BI Views",
    intro: "Develop Power BI models and reports around useful business measures, clear filter behavior and a manageable publishing and refresh process.",
    tabs: [
      {
        title: "Connections", heading: "Connect Power BI to the Intended Sources",
        desc: "Identify the datasets, access requirements and update patterns behind the report. Shape source queries and preparation steps around the records the business needs to analyze.",
        list: ["Power BI source and access planning", "Source query and preparation steps", "Dataset update-pattern review"],
        imageAlt: "Existing software-interface illustration accompanying Power BI source connections",
      },
      {
        title: "Modeling", heading: "Model Relationships and Business Measures",
        desc: "Define relationships, date context and calculations in the semantic model. Validate measures against known examples so totals and filtered views reflect the intended business rules.",
        list: ["Semantic model relationship design", "Date context and measure definitions", "Calculation checks against source examples"],
        imageAlt: "Existing software-interface illustration accompanying Power BI semantic models",
      },
      {
        title: "Report Views", heading: "Design Report Views for Practical Exploration",
        desc: "Select visuals, slicers and detail views for the task each report supports. Explain the current selection and comparison context as readers navigate between summaries and underlying detail.",
        list: ["Task-specific visuals and slicers", "Clear selection and comparison context", "Connected summary and detail views"],
        imageAlt: "Existing software-interface illustration accompanying Power BI report views",
      },
      {
        title: "Access", heading: "Plan Report Distribution and Data Visibility",
        desc: "Match publishing, sharing and any row-level rules to the intended audience. Review how report access and data visibility interact in the actual deployment environment.",
        list: ["Audience-aware publishing and sharing", "Data visibility rule review", "Deployment access verification"],
        imageAlt: "Existing software-interface illustration accompanying Power BI access planning",
      },
      {
        title: "Refresh", heading: "Keep Refresh and Ownership Understandable",
        desc: "Agree on refresh schedules, connection dependencies and the people responsible for failures. Provide useful freshness context so a report reader can recognize when data needs review.",
        list: ["Scheduled refresh responsibility", "Connection and gateway dependency review", "Data freshness and failure follow-up"],
        imageAlt: "Existing software-interface illustration accompanying Power BI refresh operations",
      },
    ],
  },
  "/business-intelligence/": {
    titleLead: "Clear",
    titleAccent: "Business Intelligence",
    intro: "Connect business questions, query logic and visual reporting so commercial teams can inspect the evidence behind a decision.",
    tabs: [
      {
        title: "Questions", heading: "Start from the Commercial Decision",
        desc: "Identify the investment, operating or planning question the BI view should support. Record the assumptions and comparisons that distinguish a useful answer from a collection of charts.",
        list: ["Commercial question and decision scope", "Explicit planning assumptions", "Relevant business comparisons"],
        imageAlt: "Existing software-interface illustration accompanying commercial BI questions",
      },
      {
        title: "Data Logic", heading: "Trace Query Logic to Business Meaning",
        desc: "Translate source queries into consistent business measures. Keep record grain, inclusion rules and transformations visible so analysts can explain how a reported value was assembled.",
        list: ["Business-aligned query definitions", "Visible record grain and inclusion rules", "Traceable reporting transformations"],
        imageAlt: "Existing software-interface illustration accompanying BI query logic",
      },
      {
        title: "Visuals", heading: "Choose Views That Explain the Comparison",
        desc: "Use charts and tables that fit the relationship being examined. Show units, periods and filters clearly so readers can compare commercial activity on a consistent basis.",
        list: ["Relationship-appropriate reporting views", "Visible units, periods and filters", "Consistent commercial comparison bases"],
        imageAlt: "Existing software-interface illustration accompanying commercial BI visuals",
      },
      {
        title: "Scenarios", heading: "Keep Assumptions Separate from Observations",
        desc: "Distinguish recorded business activity from scenario inputs and estimated outcomes. Give readers enough context to understand which parts of a view change when an assumption changes.",
        list: ["Separated observed and assumed values", "Clear scenario input context", "Explainable changes between scenarios"],
        imageAlt: "Existing software-interface illustration accompanying BI scenario comparisons",
      },
      {
        title: "Review", heading: "Make Decision Support Reviewable",
        desc: "Attach definitions, data dates and responsible owners to the reporting process. Review findings against source records before they inform ongoing commercial planning.",
        list: ["Reporting definitions and source dates", "Named analytical review responsibilities", "Source checks before planning use"],
        imageAlt: "Existing software-interface illustration accompanying commercial BI review",
      },
    ],
  },
  "/real-estate/": {
    titleLead: "Connected",
    titleAccent: "Real Estate Workflows",
    intro: "Bring property listings, broker schedules and contract records into coherent digital workflows for residential and commercial teams.",
    tabs: [
      {
        title: "Listings", heading: "Keep Listing Information Clear and Current",
        desc: "Structure residential and commercial listings around the details people need to evaluate a property. Give staff clear draft, published and withdrawn states when information changes.",
        list: ["Structured residential and commercial listings", "Defined listing publication states", "Maintainable property content fields"],
        imageAlt: "Existing software-interface illustration accompanying real estate listing workflows",
      },
      {
        title: "Property Data", heading: "Connect Each Property to Its Supporting Records",
        desc: "Organize property identifiers, location information, documents and availability in a consistent record. Keep permissions explicit for information that belongs to owners, brokers or internal teams.",
        list: ["Consistent property identity and location", "Linked documents and availability records", "Role-aware property data visibility"],
        imageAlt: "Existing software-interface illustration accompanying property data management",
      },
      {
        title: "Viewings", heading: "Coordinate Viewings with Broker Availability",
        desc: "Connect inquiry and viewing requests to the appropriate property, broker and schedule. Make pending, confirmed, changed and canceled arrangements understandable to the people coordinating them.",
        list: ["Property-linked viewing requests", "Broker availability and scheduling context", "Clear appointment change states"],
        imageAlt: "Existing software-interface illustration accompanying property viewing coordination",
      },
      {
        title: "Contracts", heading: "Track Contract Work through Defined Stages",
        desc: "Bring commercial contract forms, required documents and review steps into a visible process. Record status and ownership so the next action is clear without treating software as legal approval.",
        list: ["Contract form and document requirements", "Visible review stages and ownership", "Recorded contract status transitions"],
        imageAlt: "Existing software-interface illustration accompanying real estate contract tracking",
      },
      {
        title: "Coordination", heading: "Give Teams a Shared Operational Context",
        desc: "Connect listing updates, appointments and contract tasks around the property journey. Show the relevant activity to each team so handoffs include the information needed for follow-up.",
        list: ["Connected listing and appointment activity", "Property-centered task handoffs", "Team-specific operational follow-up"],
        imageAlt: "Existing software-interface illustration accompanying real estate team coordination",
      },
    ],
  },
};

const normalizePath = (path?: string | null) => {
  const clean = (path || "/").split(/[?#]/, 1)[0].toLowerCase();
  const slug = clean.replace(/^\/+|\/+$/g, "");
  return slug ? `/${slug}/` : "/";
};

export function getAiShiftContent(path?: string | null, pageTitle?: string | null): AiShiftContent {
  const exact = aiShiftContent[normalizePath(path)];
  if (exact) return exact;
  if (!pageTitle) return aiShiftContent["/"];
  return {
    ...aiShiftContent["/"],
    title: `Connect the Interface Work Behind ${pageTitle}`,
    body: `Explore the interface delivery work around ${pageTitle.toLowerCase()}. This illustration compares fragmented front-end tasks with an AI-assisted workflow. Move across the image to compare the two sides, then click to pin or release the divider.`,
  };
}

export function getPentagonGrowthContent(path?: string | null, pageTitle?: string | null): PentagonGrowthContent {
  const exact = pentagonGrowthContent[normalizePath(path)];
  if (exact) return exact;
  const fallback = pentagonGrowthContent["/services/data-analytics/"];
  if (!pageTitle) return fallback;
  return { ...fallback, titleLead: pageTitle, titleAccent: "Data and Decision Context" };
}
