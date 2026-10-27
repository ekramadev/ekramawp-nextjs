export type FourStrings = readonly [string, string, string, string];
export type SixHeroNodes = readonly [HeroNode, HeroNode, HeroNode, HeroNode, HeroNode, HeroNode];
export type ThreeStrings = readonly [string, string, string];

export interface HeroNode {
  readonly label: string;
  readonly description: string;
}

export interface WpHeroContent {
  readonly title: string;
  readonly intro: string;
  readonly hubTitle: string;
  readonly hubCue: string;
  readonly sectors: FourStrings;
  readonly placeholder: string;
  readonly submitLabel: string;
  readonly nodes: SixHeroNodes;
}

export type EngineeringApproachKey = "performance" | "scalability" | "ux";

export interface EngineeringApproachTab {
  readonly id: EngineeringApproachKey;
  readonly label: string;
  readonly title: string;
  readonly desc: string;
  readonly list: ThreeStrings;
  readonly imageAlt: string;
  readonly img: string;
}

export interface EngineeringApproachContent {
  readonly titleLead: string;
  readonly titleAccent: string;
  readonly intro: string;
  readonly tabs: Readonly<Record<EngineeringApproachKey, EngineeringApproachTab>>;
}

function normalizePath(path: string | null | undefined): string {
  if (!path) return "/";
  const clean = path.trim().split(/[?#]/, 1)[0].toLowerCase();
  if (!clean || clean === "/") return "/";
  return `/${clean.replace(/^\/+|\/+$/g, "")}/`;
}

const wpHeroContentByPath = {
  "/services/data-analytics/": {
    "title": "Analytics That Starts With Your Data",
    "intro": "Connect business questions to relevant datasets, clear measures and analysis that people can interpret in context.",
    "hubTitle": "Analytics",
    "hubCue": "Data Context",
    "sectors": [
      "Sources",
      "Analysis",
      "Measures",
      "Review"
    ],
    "placeholder": "Relevant analytics URL",
    "submitLabel": "Use Data URL",
    "nodes": [
      {
        "label": "Source Records",
        "description": "Identify the systems and records behind each analytical question."
      },
      {
        "label": "Metric Meaning",
        "description": "Define how measures are calculated and where their limits apply."
      },
      {
        "label": "Data Preparation",
        "description": "Review missing values and transformations before interpreting patterns."
      },
      {
        "label": "Explore Patterns",
        "description": "Examine trends and segments against the business question in scope."
      },
      {
        "label": "Useful Findings",
        "description": "Present observations with the context needed to discuss a decision."
      },
      {
        "label": "Refresh Checks",
        "description": "Track source changes that may affect the next analysis cycle."
      }
    ]
  },
  "/services/database-development/": {
    "title": "Databases Built Around Your Workloads",
    "intro": "Shape database models, queries and operational checks around the records your applications need to manage.",
    "hubTitle": "Databases",
    "hubCue": "Data Design",
    "sectors": [
      "Models",
      "Queries",
      "Access",
      "Recovery"
    ],
    "placeholder": "Relevant databases URL",
    "submitLabel": "Use DB URL",
    "nodes": [
      {
        "label": "Record Models",
        "description": "Describe entities and relationships before defining storage structures."
      },
      {
        "label": "Query Paths",
        "description": "Connect common application requests to suitable database access paths."
      },
      {
        "label": "Transactions",
        "description": "Define which related writes should succeed or fail together."
      },
      {
        "label": "Index Review",
        "description": "Inspect query plans and indexes against representative workloads."
      },
      {
        "label": "Access Rules",
        "description": "Assign database privileges according to application responsibilities."
      },
      {
        "label": "Recovery Steps",
        "description": "Document backup needs and rehearse the relevant restore procedures."
      }
    ]
  },
  "/m365-sharepoint/": {
    "title": "SharePoint for Everyday Team Work",
    "intro": "Organize SharePoint sites, document libraries and collaboration flows around the people who use and maintain them.",
    "hubTitle": "SharePoint",
    "hubCue": "Team Context",
    "sectors": [
      "Sites",
      "Documents",
      "Workflows",
      "Ownership"
    ],
    "placeholder": "Relevant sharepoint URL",
    "submitLabel": "Use M365 URL",
    "nodes": [
      {
        "label": "Site Purpose",
        "description": "Give each SharePoint workspace a defined audience and purpose."
      },
      {
        "label": "Document Libraries",
        "description": "Arrange libraries around document types and working practices."
      },
      {
        "label": "Metadata Rules",
        "description": "Use document fields that support useful filtering and retrieval."
      },
      {
        "label": "Sharing Boundaries",
        "description": "Review who can read, edit and share each workspace resource."
      },
      {
        "label": "Review Flows",
        "description": "Describe the approval steps needed for document review."
      },
      {
        "label": "Site Ownership",
        "description": "Identify the people responsible for content and permission upkeep."
      }
    ]
  },
  "/services/testing-and-qa/": {
    "title": "Software QA Around Your Release Risks",
    "intro": "Plan manual and automated checks around product workflows, likely failures and the evidence needed for release review.",
    "hubTitle": "Software QA",
    "hubCue": "Test Scope",
    "sectors": [
      "Risks",
      "Scenarios",
      "Findings",
      "Regression"
    ],
    "placeholder": "Relevant software qa URL",
    "submitLabel": "Use QA URL",
    "nodes": [
      {
        "label": "Risk Priorities",
        "description": "Identify failures that would most affect the intended product use."
      },
      {
        "label": "Test Scenarios",
        "description": "Define test inputs and expected behavior for important workflows."
      },
      {
        "label": "Manual Checks",
        "description": "Explore user paths and edge cases that need human observation."
      },
      {
        "label": "Automation Scope",
        "description": "Choose repeatable scenarios suited to automated test execution."
      },
      {
        "label": "Defect Evidence",
        "description": "Record reproduction steps, environment details and observed results."
      },
      {
        "label": "Regression Review",
        "description": "Check affected behavior again after a fix or related change."
      }
    ]
  },
  "/services/software-development/": {
    "title": "Custom Software With Clear Boundaries",
    "intro": "Translate enterprise workflows into application features, integration contracts and a practical plan for delivery and upkeep.",
    "hubTitle": "Software",
    "hubCue": "Project Scope",
    "sectors": [
      "Workflows",
      "Features",
      "Interfaces",
      "Delivery"
    ],
    "placeholder": "Relevant software URL",
    "submitLabel": "Use App URL",
    "nodes": [
      {
        "label": "User Tasks",
        "description": "Describe the work the application should help people complete."
      },
      {
        "label": "System Boundaries",
        "description": "Separate application responsibilities and external dependencies."
      },
      {
        "label": "Feature Behavior",
        "description": "Define the expected states and actions for each scoped feature."
      },
      {
        "label": "Service Contracts",
        "description": "Specify the records and behavior exchanged with connected systems."
      },
      {
        "label": "Release Checks",
        "description": "Review relevant application scenarios before accepting a release."
      },
      {
        "label": "Support Context",
        "description": "Keep implementation decisions and operating needs available to owners."
      }
    ]
  },
  "/salesforce-tech/": {
    "title": "Salesforce for Sales and Service Work",
    "intro": "Configure Salesforce records, workflows and integrations around your sales and service processes and their owners.",
    "hubTitle": "Salesforce",
    "hubCue": "CRM Context",
    "sectors": [
      "Records",
      "Processes",
      "Connections",
      "Releases"
    ],
    "placeholder": "Relevant salesforce URL",
    "submitLabel": "Use SF URL",
    "nodes": [
      {
        "label": "CRM Records",
        "description": "Map Salesforce objects and fields to the information teams use."
      },
      {
        "label": "Process Flows",
        "description": "Describe routing, approvals and exceptions in the CRM workflow."
      },
      {
        "label": "Role Access",
        "description": "Review record and feature access against user responsibilities."
      },
      {
        "label": "Connected Systems",
        "description": "Define how external applications exchange Salesforce data."
      },
      {
        "label": "Reporting Needs",
        "description": "Agree the report definitions and filters needed by CRM users."
      },
      {
        "label": "Change Validation",
        "description": "Check configuration changes against representative business scenarios."
      }
    ]
  },
  "/php-engineers/": {
    "title": "PHP Apps Built for Real Workflows",
    "intro": "Develop PHP applications and portals around clear request handling, business rules and connections to existing services.",
    "hubTitle": "PHP Apps",
    "hubCue": "Web Context",
    "sectors": [
      "Requests",
      "App Logic",
      "Records",
      "Delivery"
    ],
    "placeholder": "Relevant php apps URL",
    "submitLabel": "Use PHP URL",
    "nodes": [
      {
        "label": "Request Handling",
        "description": "Map incoming web requests to the PHP application behavior in scope."
      },
      {
        "label": "Business Rules",
        "description": "Keep domain decisions explicit within the application logic."
      },
      {
        "label": "Data Access",
        "description": "Connect PHP features to the records and transactions they require."
      },
      {
        "label": "Service Links",
        "description": "Define the inputs and failures handled at external API boundaries."
      },
      {
        "label": "User Sessions",
        "description": "Review authentication and session behavior for the portal audience."
      },
      {
        "label": "Application Checks",
        "description": "Exercise PHP workflows and error paths before a deployment."
      }
    ]
  },
  "/services/data-warehousing/": {
    "title": "A Data Warehouse With Clear Lineage",
    "intro": "Bring enterprise sources into warehouse models with defined transformations, quality checks and refresh responsibilities.",
    "hubTitle": "Warehousing",
    "hubCue": "Data Lineage",
    "sectors": [
      "Sources",
      "Ingestion",
      "Models",
      "Refresh"
    ],
    "placeholder": "Relevant warehousing URL",
    "submitLabel": "Use DWH URL",
    "nodes": [
      {
        "label": "Source Inventory",
        "description": "List the source systems and records required by warehouse users."
      },
      {
        "label": "Warehouse Models",
        "description": "Organize analytical entities around agreed reporting questions."
      },
      {
        "label": "Ingestion Paths",
        "description": "Define how source changes reach the warehouse environment."
      },
      {
        "label": "Transform Rules",
        "description": "Document the transformations that shape shared analytical tables."
      },
      {
        "label": "Quality Gates",
        "description": "Check warehouse records for agreed completeness and consistency rules."
      },
      {
        "label": "Refresh Ownership",
        "description": "Assign responsibility for refresh schedules and failed data runs."
      }
    ]
  },
  "/iot-engineering/": {
    "title": "Connect Devices to Useful IoT Workflows",
    "intro": "Plan device communication, platform data and operational feedback around the conditions in which your IoT system will run.",
    "hubTitle": "IoT Systems",
    "hubCue": "Device Scope",
    "sectors": [
      "Devices",
      "Messages",
      "Platform",
      "Operations"
    ],
    "placeholder": "Relevant iot systems URL",
    "submitLabel": "Use IoT URL",
    "nodes": [
      {
        "label": "Device Roles",
        "description": "Describe sensor, actuator and gateway responsibilities in the system."
      },
      {
        "label": "Message Formats",
        "description": "Define device payloads, timestamps and message handling rules."
      },
      {
        "label": "Network Conditions",
        "description": "Account for connection loss and the network limits of target sites."
      },
      {
        "label": "Platform Records",
        "description": "Arrange device observations so platform services can interpret them."
      },
      {
        "label": "Command Feedback",
        "description": "Specify how device commands and their outcomes are tracked."
      },
      {
        "label": "Fleet Operations",
        "description": "Review provisioning, diagnostics and update needs across devices."
      }
    ]
  },
  "/marketing-software/": {
    "title": "Marketing Tools Around Your Campaigns",
    "intro": "Connect audience records, campaign workflows and reporting needs around the teams planning and reviewing marketing activity.",
    "hubTitle": "Campaigns",
    "hubCue": "Workflow Scope",
    "sectors": [
      "Audiences",
      "Journeys",
      "Channels",
      "Reporting"
    ],
    "placeholder": "Relevant campaigns URL",
    "submitLabel": "Use Mktg URL",
    "nodes": [
      {
        "label": "Audience Records",
        "description": "Define the customer fields and segments used by campaign teams."
      },
      {
        "label": "Consent Context",
        "description": "Carry relevant consent and preference records through campaign flows."
      },
      {
        "label": "Campaign Rules",
        "description": "Describe campaign triggers, exclusions and review responsibilities."
      },
      {
        "label": "Journey Steps",
        "description": "Map the messages and decisions involved in each audience journey."
      },
      {
        "label": "Channel Links",
        "description": "Identify which marketing services exchange campaign and event data."
      },
      {
        "label": "Campaign Measures",
        "description": "Explain how reported campaign events and measures are derived."
      }
    ]
  },
  "/dynamics-365-solutions/": {
    "title": "Dynamics 365 Around Your Business Work",
    "intro": "Align Dynamics 365 modules, business data and process rules with the teams responsible for daily use and administration.",
    "hubTitle": "Dynamics 365",
    "hubCue": "Process Scope",
    "sectors": [
      "Modules",
      "Records",
      "Workflows",
      "Rollout"
    ],
    "placeholder": "Relevant dynamics 365 URL",
    "submitLabel": "Use D365 URL",
    "nodes": [
      {
        "label": "Module Scope",
        "description": "Select Dynamics 365 functions against the business tasks in scope."
      },
      {
        "label": "Business Records",
        "description": "Map the records shared between the selected business applications."
      },
      {
        "label": "Process Rules",
        "description": "Define approvals and exceptions that affect day-to-day transactions."
      },
      {
        "label": "Integration Paths",
        "description": "Specify the exchanges between Dynamics 365 and connected systems."
      },
      {
        "label": "Role Boundaries",
        "description": "Review user roles against operational and administrative duties."
      },
      {
        "label": "Rollout Checks",
        "description": "Validate representative workflows before expanding system use."
      }
    ]
  },
  "/services/penetration-testing/": {
    "title": "Test Security With a Clear Scope",
    "intro": "Define an authorized penetration test around target systems, assessment boundaries, reproducible findings and remediation review.",
    "hubTitle": "Pen Testing",
    "hubCue": "Agreed Scope",
    "sectors": [
      "Targets",
      "Methods",
      "Evidence",
      "Retesting"
    ],
    "placeholder": "Relevant pen testing URL",
    "submitLabel": "Use Test URL",
    "nodes": [
      {
        "label": "Test Boundaries",
        "description": "Agree the systems and activities included in the authorized test."
      },
      {
        "label": "Asset Context",
        "description": "Identify target interfaces and their relevant operating conditions."
      },
      {
        "label": "Access Scenarios",
        "description": "Review the user roles and access paths included in the assessment."
      },
      {
        "label": "Controlled Tests",
        "description": "Execute scoped test scenarios within the agreed engagement limits."
      },
      {
        "label": "Finding Records",
        "description": "Document affected behavior, reproduction steps and supporting evidence."
      },
      {
        "label": "Remediation Review",
        "description": "Recheck agreed findings after the relevant fixes are available."
      }
    ]
  },
  "/c-engineers/": {
    "title": "C++ Engineering for Native Systems",
    "intro": "Develop native and system-level software around explicit memory ownership, platform interfaces and representative runtime checks.",
    "hubTitle": "C++ Systems",
    "hubCue": "Native Scope",
    "sectors": [
      "Memory",
      "Interfaces",
      "Runtime",
      "Testing"
    ],
    "placeholder": "Relevant c++ systems URL",
    "submitLabel": "Use C++ URL",
    "nodes": [
      {
        "label": "Memory Ownership",
        "description": "Make object lifetimes and resource responsibilities explicit in C++."
      },
      {
        "label": "Native Interfaces",
        "description": "Define the contracts between native modules and platform services."
      },
      {
        "label": "Concurrent Work",
        "description": "Review shared state and synchronization in concurrent code paths."
      },
      {
        "label": "Device Context",
        "description": "Account for the hardware and operating environment in scope."
      },
      {
        "label": "Build Targets",
        "description": "Document compiler settings and supported native build targets."
      },
      {
        "label": "Runtime Checks",
        "description": "Exercise native error paths and resource handling under test workloads."
      }
    ]
  },
  "/java-architects/": {
    "title": "Java Systems With Clear Service Roles",
    "intro": "Design Java applications around domain boundaries, service contracts and the operational behavior of the target runtime.",
    "hubTitle": "Java Systems",
    "hubCue": "Service Scope",
    "sectors": [
      "Domains",
      "Services",
      "Records",
      "Runtime"
    ],
    "placeholder": "Relevant java systems URL",
    "submitLabel": "Use Java URL",
    "nodes": [
      {
        "label": "Domain Modules",
        "description": "Separate Java application responsibilities around business concepts."
      },
      {
        "label": "Service APIs",
        "description": "Define the operations and failures exposed by Java services."
      },
      {
        "label": "Persistence Rules",
        "description": "Connect domain actions to appropriate storage and transaction behavior."
      },
      {
        "label": "Concurrent Tasks",
        "description": "Review the shared resources used by concurrent Java workloads."
      },
      {
        "label": "Runtime Signals",
        "description": "Choose runtime observations that help investigate application behavior."
      },
      {
        "label": "Release Context",
        "description": "Keep dependency and configuration changes visible during Java releases."
      }
    ]
  },
  "/ar-experiences/": {
    "title": "AR Experiences for Real Places and Tasks",
    "intro": "Shape augmented-reality interactions around user tasks, spatial content, physical surroundings and supported devices.",
    "hubTitle": "AR Work",
    "hubCue": "Spatial Scope",
    "sectors": [
      "Scenarios",
      "Space",
      "Interaction",
      "Devices"
    ],
    "placeholder": "Relevant ar work URL",
    "submitLabel": "Use AR URL",
    "nodes": [
      {
        "label": "Physical Context",
        "description": "Describe where the AR experience will be used and by whom."
      },
      {
        "label": "Spatial Content",
        "description": "Plan the placement, scale and meaning of augmented content."
      },
      {
        "label": "Interaction Rules",
        "description": "Define how users select and manipulate objects in the AR scene."
      },
      {
        "label": "Tracking Limits",
        "description": "Account for conditions that may affect spatial tracking."
      },
      {
        "label": "Asset Delivery",
        "description": "Review how AR assets reach supported devices and sessions."
      },
      {
        "label": "Device Trials",
        "description": "Check the experience in representative surroundings on target devices."
      }
    ]
  },
  "/services/business-intelligence/": {
    "title": "BI Reporting With Shared Definitions",
    "intro": "Connect business questions to governed datasets, agreed measures and report views that explain their own context.",
    "hubTitle": "BI Reporting",
    "hubCue": "Metric Context",
    "sectors": [
      "Datasets",
      "Measures",
      "Reports",
      "Refresh"
    ],
    "placeholder": "Relevant bi reporting URL",
    "submitLabel": "Use BI URL",
    "nodes": [
      {
        "label": "Reporting Questions",
        "description": "Start BI scope with the decisions and questions reports should support."
      },
      {
        "label": "Dataset Context",
        "description": "Identify the records and source owners behind each report view."
      },
      {
        "label": "Shared Measures",
        "description": "Document calculations so reporting teams can interpret measures alike."
      },
      {
        "label": "Report Views",
        "description": "Organize visual reports around the needs of the intended readers."
      },
      {
        "label": "Filter Meaning",
        "description": "Explain how filters change the records included in a BI result."
      },
      {
        "label": "Refresh Status",
        "description": "Make reporting refresh timing and known data limitations visible."
      }
    ]
  },
  "/power-bi-dashboards/": {
    "title": "Power BI Views With Clear Data Context",
    "intro": "Build Power BI models and dashboards around source relationships, defined measures and the way readers explore results.",
    "hubTitle": "Power BI",
    "hubCue": "Report Scope",
    "sectors": [
      "Sources",
      "Models",
      "Measures",
      "Views"
    ],
    "placeholder": "Relevant power bi URL",
    "submitLabel": "Use PBI URL",
    "nodes": [
      {
        "label": "Source Connections",
        "description": "Identify the data sources used by the Power BI reporting model."
      },
      {
        "label": "Model Relations",
        "description": "Define table relationships in line with the questions being reported."
      },
      {
        "label": "DAX Measures",
        "description": "Describe calculation intent before implementing Power BI measures."
      },
      {
        "label": "Visual Selection",
        "description": "Choose report visuals that suit the measures and reader tasks."
      },
      {
        "label": "Reader Access",
        "description": "Review report access and relevant row-level filtering requirements."
      },
      {
        "label": "Refresh Review",
        "description": "Check dataset refresh behavior and communicate reporting caveats."
      }
    ]
  },
  "/servicenow-dev/": {
    "title": "ServiceNow Workflows With Clear Owners",
    "intro": "Configure ServiceNow requests, approvals and integrations around service responsibilities and the people administering the platform.",
    "hubTitle": "ServiceNow",
    "hubCue": "Service Context",
    "sectors": [
      "Requests",
      "Routing",
      "Approvals",
      "Ownership"
    ],
    "placeholder": "Relevant servicenow URL",
    "submitLabel": "Use ITSM URL",
    "nodes": [
      {
        "label": "Request Types",
        "description": "Classify the service requests that the ServiceNow workflow will handle."
      },
      {
        "label": "Assignment Rules",
        "description": "Connect request routing to the teams responsible for service work."
      },
      {
        "label": "Approval Paths",
        "description": "Define approval conditions and what happens when an exception occurs."
      },
      {
        "label": "System Exchanges",
        "description": "Describe the records exchanged with connected enterprise systems."
      },
      {
        "label": "Service Records",
        "description": "Keep request history and service context useful to platform users."
      },
      {
        "label": "Admin Handover",
        "description": "Document configuration choices for ServiceNow administrators."
      }
    ]
  },
  "/azure-cloud/": {
    "title": "Plan Azure Around Your Workloads",
    "intro": "Configure Azure resources, identity boundaries and operational checks according to application and infrastructure requirements.",
    "hubTitle": "Azure Cloud",
    "hubCue": "Cloud Context",
    "sectors": [
      "Resources",
      "Identity",
      "Networks",
      "Operations"
    ],
    "placeholder": "Relevant azure cloud URL",
    "submitLabel": "Use Azure URL",
    "nodes": [
      {
        "label": "Resource Needs",
        "description": "Match Azure resource choices to the workload requirements in scope."
      },
      {
        "label": "Identity Roles",
        "description": "Define identity assignments for application and administrative access."
      },
      {
        "label": "Network Paths",
        "description": "Review the network boundaries connecting Azure workload resources."
      },
      {
        "label": "Deployment Inputs",
        "description": "Document the configuration needed to reproduce Azure environments."
      },
      {
        "label": "Operational Signals",
        "description": "Select workload observations that help investigate Azure incidents."
      },
      {
        "label": "Recovery Planning",
        "description": "Review backup and recovery needs with Azure workload owners."
      }
    ]
  },
  "/pimcore-solutions/": {
    "title": "Pimcore for Product and Master Data",
    "intro": "Structure Pimcore records, assets and publishing workflows around governed information and the channels that consume it.",
    "hubTitle": "Pimcore",
    "hubCue": "Product Context",
    "sectors": [
      "Records",
      "Assets",
      "Quality",
      "Channels"
    ],
    "placeholder": "Relevant pimcore URL",
    "submitLabel": "Use PIM URL",
    "nodes": [
      {
        "label": "Product Models",
        "description": "Define product fields and relationships used by the business."
      },
      {
        "label": "Asset Links",
        "description": "Connect relevant media and documents to Pimcore product records."
      },
      {
        "label": "Data Ownership",
        "description": "Assign responsibility for product information and master-data changes."
      },
      {
        "label": "Validation Rules",
        "description": "Review record requirements before information reaches a channel."
      },
      {
        "label": "Publishing Flows",
        "description": "Describe how approved product data is prepared for delivery."
      },
      {
        "label": "Channel Exchanges",
        "description": "Map the data contracts between Pimcore and consuming systems."
      }
    ]
  },
  "/services/big-data/": {
    "title": "Big Data Work With Defined Pipelines",
    "intro": "Plan distributed data processing around source volume, transformation behavior and the operational needs of each workload.",
    "hubTitle": "Big Data",
    "hubCue": "Pipeline Scope",
    "sectors": [
      "Inputs",
      "Processing",
      "Storage",
      "Operations"
    ],
    "placeholder": "Relevant big data URL",
    "submitLabel": "Use Dataflow URL",
    "nodes": [
      {
        "label": "Input Patterns",
        "description": "Describe the volume, shape and arrival patterns of incoming data."
      },
      {
        "label": "Partition Choices",
        "description": "Choose processing boundaries that suit the data access patterns."
      },
      {
        "label": "Transform Stages",
        "description": "Define the distributed transformations required by the workload."
      },
      {
        "label": "Storage Layout",
        "description": "Organize processed datasets for their intended downstream use."
      },
      {
        "label": "Failure Handling",
        "description": "Plan how data runs are retried and incomplete outputs are treated."
      },
      {
        "label": "Pipeline Signals",
        "description": "Observe data freshness and processing failures during operation."
      }
    ]
  },
  "/services/api-development/": {
    "title": "APIs With Clear Contracts and Boundaries",
    "intro": "Define API behavior, access rules and failure responses around the applications and enterprise services that connect through it.",
    "hubTitle": "APIs",
    "hubCue": "Contract Scope",
    "sectors": [
      "Contracts",
      "Access",
      "Records",
      "Operations"
    ],
    "placeholder": "Relevant apis URL",
    "submitLabel": "Use API URL",
    "nodes": [
      {
        "label": "Operation Scope",
        "description": "Name the business operations that each API endpoint should expose."
      },
      {
        "label": "Payload Models",
        "description": "Specify request and response fields with their validation rules."
      },
      {
        "label": "Access Decisions",
        "description": "Define which callers may perform each scoped API operation."
      },
      {
        "label": "Error Responses",
        "description": "Make failure responses consistent enough for consumers to handle."
      },
      {
        "label": "Consumer Changes",
        "description": "Review compatibility when API contracts or data meanings change."
      },
      {
        "label": "Integration Checks",
        "description": "Exercise API exchanges with representative consumers and failures."
      }
    ]
  },
  "/aws-infrastructure/": {
    "title": "AWS Setup for Your Application Work",
    "intro": "Design AWS environments around workload dependencies, access boundaries and the operating checks required after deployment.",
    "hubTitle": "AWS Cloud",
    "hubCue": "Workload Scope",
    "sectors": [
      "Resources",
      "Networks",
      "Identity",
      "Recovery"
    ],
    "placeholder": "Relevant aws cloud URL",
    "submitLabel": "Use AWS URL",
    "nodes": [
      {
        "label": "Workload Mapping",
        "description": "Identify the AWS resources needed by each application dependency."
      },
      {
        "label": "Network Boundaries",
        "description": "Describe the traffic paths and network restrictions in the design."
      },
      {
        "label": "Identity Policies",
        "description": "Review AWS permissions against the responsibilities of each caller."
      },
      {
        "label": "Environment Setup",
        "description": "Keep AWS provisioning and configuration inputs reproducible."
      },
      {
        "label": "Monitoring Needs",
        "description": "Select workload signals and escalation context for operations."
      },
      {
        "label": "Recovery Exercises",
        "description": "Test the recovery steps agreed for the AWS application environment."
      }
    ]
  },
  "/net-experts/": {
    "title": ".NET Apps for Enterprise Workflows",
    "intro": "Build .NET application services around domain behavior, integration contracts and the requirements of their operating environment.",
    "hubTitle": ".NET Apps",
    "hubCue": "Runtime Context",
    "sectors": [
      "Domains",
      "Services",
      "Data",
      "Releases"
    ],
    "placeholder": "Relevant .net apps URL",
    "submitLabel": "Use .NET URL",
    "nodes": [
      {
        "label": "Domain Behavior",
        "description": "Translate enterprise tasks into explicit .NET application rules."
      },
      {
        "label": "Service Interfaces",
        "description": "Define the contracts exposed by .NET services to their consumers."
      },
      {
        "label": "Data Operations",
        "description": "Review persistence and transaction behavior for application records."
      },
      {
        "label": "Identity Context",
        "description": "Connect application access decisions to the intended user roles."
      },
      {
        "label": "Dependency Review",
        "description": "Track the libraries and configuration used by the .NET application."
      },
      {
        "label": "Deployment Checks",
        "description": "Validate scoped .NET workflows in the target release environment."
      }
    ]
  },
  "/services/cybersecurity/": {
    "title": "Security Reviews With System Context",
    "intro": "Assess enterprise security priorities through asset context, access boundaries and a practical record of findings and follow-up work.",
    "hubTitle": "Cybersecurity",
    "hubCue": "Risk Context",
    "sectors": [
      "Assets",
      "Access",
      "Controls",
      "Review"
    ],
    "placeholder": "Relevant cybersecurity URL",
    "submitLabel": "Use Sec URL",
    "nodes": [
      {
        "label": "Asset Priorities",
        "description": "Identify the systems and information most relevant to the assessment."
      },
      {
        "label": "Access Boundaries",
        "description": "Review how users and services reach the resources they need."
      },
      {
        "label": "Control Context",
        "description": "Describe the safeguards being assessed and their intended purpose."
      },
      {
        "label": "Threat Scenarios",
        "description": "Consider credible misuse paths within the agreed system scope."
      },
      {
        "label": "Finding Evidence",
        "description": "Connect security observations to affected assets and supporting facts."
      },
      {
        "label": "Follow-up Work",
        "description": "Assign remediation ownership and review the changes that result."
      }
    ]
  },
  "/services/devops-consulting/": {
    "title": "DevOps Delivery With Reviewable Changes",
    "intro": "Connect build, test and deployment workflows with environment ownership, release evidence and a practical recovery process.",
    "hubTitle": "DevOps",
    "hubCue": "Release Context",
    "sectors": [
      "Builds",
      "Checks",
      "Releases",
      "Operations"
    ],
    "placeholder": "Relevant devops URL",
    "submitLabel": "Use CI URL",
    "nodes": [
      {
        "label": "Build Inputs",
        "description": "Document the source and dependencies used to create a release artifact."
      },
      {
        "label": "Pipeline Steps",
        "description": "Arrange delivery steps around the checks required by the project."
      },
      {
        "label": "Environment Rules",
        "description": "Define the configuration boundaries between delivery environments."
      },
      {
        "label": "Release Evidence",
        "description": "Keep build and verification results linked to the released change."
      },
      {
        "label": "Recovery Options",
        "description": "Describe the available rollback or repair steps for a release."
      },
      {
        "label": "Operational Roles",
        "description": "Clarify ownership of pipeline maintenance and deployment incidents."
      }
    ]
  },
  "/services/": {
    "title": "Software Services With Clear Scope",
    "intro": "Connect software development, consulting, cloud and support needs to defined responsibilities and an agreed delivery approach.",
    "hubTitle": "Engineering",
    "hubCue": "Service Scope",
    "sectors": [
      "Discovery",
      "Software",
      "Cloud",
      "Support"
    ],
    "placeholder": "Relevant engineering URL",
    "submitLabel": "Use Scope URL",
    "nodes": [
      {
        "label": "Business Context",
        "description": "Describe the operational problem before selecting an engineering service."
      },
      {
        "label": "Software Needs",
        "description": "Identify application features and integrations relevant to the work."
      },
      {
        "label": "Technical Advice",
        "description": "Frame architecture and platform questions that need closer review."
      },
      {
        "label": "Cloud Requirements",
        "description": "Discuss infrastructure dependencies and operating constraints."
      },
      {
        "label": "Delivery Ownership",
        "description": "Agree who sets priorities and reviews the scoped work."
      },
      {
        "label": "Support Boundaries",
        "description": "Define maintenance responsibilities and the context needed for support."
      }
    ]
  },
  "/services/microsoft-consulting/": {
    "title": "Plan Microsoft Tools Around Your Teams",
    "intro": "Review Microsoft configuration, identity, data administration and licensing questions in the context of your organization.",
    "hubTitle": "Microsoft",
    "hubCue": "Platform Scope",
    "sectors": [
      "Products",
      "Identity",
      "Data",
      "Governance"
    ],
    "placeholder": "Relevant microsoft URL",
    "submitLabel": "Use MS URL",
    "nodes": [
      {
        "label": "Product Landscape",
        "description": "Identify which Microsoft products support the teams in scope."
      },
      {
        "label": "Configuration Needs",
        "description": "Review settings against the intended collaboration and system use."
      },
      {
        "label": "Identity Structure",
        "description": "Describe directory and access responsibilities across Microsoft tools."
      },
      {
        "label": "Data Administration",
        "description": "Map the ownership and handling of shared business information."
      },
      {
        "label": "License Context",
        "description": "Review licensing questions against the products and usage being planned."
      },
      {
        "label": "Change Guidance",
        "description": "Document configuration decisions and the owners of follow-up actions."
      }
    ]
  },
  "/services/infrastructure-services/": {
    "title": "Plan Core IT With Clear Ownership",
    "intro": "Review infrastructure dependencies, capacity needs and operating responsibilities across internal and cloud environments.",
    "hubTitle": "Core IT",
    "hubCue": "System Context",
    "sectors": [
      "Assets",
      "Capacity",
      "Networks",
      "Operations"
    ],
    "placeholder": "Relevant core it URL",
    "submitLabel": "Use Infra URL",
    "nodes": [
      {
        "label": "Asset Mapping",
        "description": "Describe the compute, storage and network assets supporting each service."
      },
      {
        "label": "Capacity Needs",
        "description": "Compare resource requirements with representative infrastructure demand."
      },
      {
        "label": "Network Dependencies",
        "description": "Identify the network paths on which application services depend."
      },
      {
        "label": "Configuration State",
        "description": "Keep infrastructure settings and change ownership documented."
      },
      {
        "label": "Operating Signals",
        "description": "Select observations that help teams investigate infrastructure stress."
      },
      {
        "label": "Service Recovery",
        "description": "Review recovery dependencies and the people responsible for restoration."
      }
    ]
  },
  "/services/security-testing/": {
    "title": "Security Tests Built Around System Risks",
    "intro": "Define security checks around application boundaries, access behavior and the evidence needed to assess identified weaknesses.",
    "hubTitle": "Security Tests",
    "hubCue": "Check Scope",
    "sectors": [
      "Boundaries",
      "Access",
      "Inputs",
      "Findings"
    ],
    "placeholder": "Relevant security tests URL",
    "submitLabel": "Use Check URL",
    "nodes": [
      {
        "label": "Assessment Scope",
        "description": "Identify the application interfaces included in the security test."
      },
      {
        "label": "Access Verification",
        "description": "Check whether scoped user roles can reach only intended operations."
      },
      {
        "label": "Input Handling",
        "description": "Exercise relevant validation and error paths at application boundaries."
      },
      {
        "label": "Exposure Checks",
        "description": "Review the services and interfaces visible within the agreed perimeter."
      },
      {
        "label": "Weakness Records",
        "description": "Document security findings with the context needed for remediation."
      },
      {
        "label": "Fix Verification",
        "description": "Repeat relevant tests after a security change is implemented."
      }
    ]
  },
  "/blockchain-tech/": {
    "title": "Ledger Systems With Explicit Trust Rules",
    "intro": "Design blockchain workflows around transaction meaning, participant permissions and the limits of the selected ledger model.",
    "hubTitle": "Ledger Systems",
    "hubCue": "Trust Context",
    "sectors": [
      "Transactions",
      "Participants",
      "Validation",
      "Operations"
    ],
    "placeholder": "Relevant ledger systems URL",
    "submitLabel": "Use Ledger URL",
    "nodes": [
      {
        "label": "Ledger Purpose",
        "description": "Define which shared records require the proposed ledger structure."
      },
      {
        "label": "Participant Roles",
        "description": "Describe who may submit, validate and inspect ledger transactions."
      },
      {
        "label": "Transaction Rules",
        "description": "Specify valid state changes and the conditions required to accept them."
      },
      {
        "label": "Contract Behavior",
        "description": "Review the scoped logic executed by the selected blockchain platform."
      },
      {
        "label": "External Inputs",
        "description": "Document where ledger decisions depend on data from outside the chain."
      },
      {
        "label": "Network Operations",
        "description": "Plan key handling, monitoring and change procedures for participants."
      }
    ]
  },
  "/big-data-systems/": {
    "title": "Data Platforms for Distributed Workloads",
    "intro": "Structure shared data storage and parallel processing around dataset ownership, access patterns and operational limits.",
    "hubTitle": "Data Platforms",
    "hubCue": "System Scope",
    "sectors": [
      "Storage",
      "Compute",
      "Catalogs",
      "Operations"
    ],
    "placeholder": "Relevant data platforms URL",
    "submitLabel": "Use Platform URL",
    "nodes": [
      {
        "label": "Repository Layout",
        "description": "Organize raw and prepared datasets by their intended platform use."
      },
      {
        "label": "Compute Boundaries",
        "description": "Separate distributed workloads according to resource and data needs."
      },
      {
        "label": "Dataset Catalogs",
        "description": "Keep dataset meaning and ownership available to platform consumers."
      },
      {
        "label": "Access Patterns",
        "description": "Review how teams and services retrieve shared enterprise datasets."
      },
      {
        "label": "Resource Limits",
        "description": "Define workload limits and review the effects of competing data jobs."
      },
      {
        "label": "Platform Recovery",
        "description": "Document how failed processing and affected datasets are recovered."
      }
    ]
  },
  "/vr-enterprise/": {
    "title": "VR Training Around Defined Work Tasks",
    "intro": "Design virtual environments for training and prototyping with explicit scenarios, interaction rules and supported device requirements.",
    "hubTitle": "VR Work",
    "hubCue": "Scenario Scope",
    "sectors": [
      "Scenarios",
      "Scenes",
      "Interaction",
      "Devices"
    ],
    "placeholder": "Relevant vr work URL",
    "submitLabel": "Use VR URL",
    "nodes": [
      {
        "label": "Training Scenarios",
        "description": "Describe the work tasks and decisions represented in the VR session."
      },
      {
        "label": "Virtual Scenes",
        "description": "Arrange scene content around the purpose of each simulated environment."
      },
      {
        "label": "User Actions",
        "description": "Define the interactions available to people within the VR experience."
      },
      {
        "label": "Session Feedback",
        "description": "Choose feedback that helps users understand their actions in the scene."
      },
      {
        "label": "Device Conditions",
        "description": "Review headset and runtime requirements for the target environment."
      },
      {
        "label": "Scenario Trials",
        "description": "Check the intended VR tasks with representative users and devices."
      }
    ]
  },
  "/cloud-native/": {
    "title": "Cloud-Native Apps With Defined Boundaries",
    "intro": "Structure cloud-native services around deployment units, tenant requirements and the operational behavior of connected workloads.",
    "hubTitle": "Cloud Apps",
    "hubCue": "Service Context",
    "sectors": [
      "Services",
      "Tenants",
      "Delivery",
      "Operations"
    ],
    "placeholder": "Relevant cloud apps URL",
    "submitLabel": "Use Cloud URL",
    "nodes": [
      {
        "label": "Service Boundaries",
        "description": "Separate cloud-native responsibilities along clear application domains."
      },
      {
        "label": "Tenant Context",
        "description": "Define how tenant data and configuration are separated where required."
      },
      {
        "label": "Service Exchanges",
        "description": "Specify contracts and failure handling between cloud-native services."
      },
      {
        "label": "Deployment Units",
        "description": "Review how independently deployed services are configured and released."
      },
      {
        "label": "Workload Signals",
        "description": "Observe service behavior across the dependencies in a user request."
      },
      {
        "label": "Change Recovery",
        "description": "Plan recovery steps for a failed cloud-native service release."
      }
    ]
  },
  "/python-engineers/": {
    "title": "Python Services for Data and Daily Work",
    "intro": "Develop Python APIs, automation and data-processing logic around clear inputs, application rules and operating requirements.",
    "hubTitle": "Python",
    "hubCue": "Code Context",
    "sectors": [
      "Inputs",
      "Services",
      "Data Work",
      "Operations"
    ],
    "placeholder": "Relevant python URL",
    "submitLabel": "Use Python URL",
    "nodes": [
      {
        "label": "Automation Inputs",
        "description": "Identify the files, events and parameters consumed by Python tasks."
      },
      {
        "label": "API Behavior",
        "description": "Define the operations and errors exposed by Python application services."
      },
      {
        "label": "Data Transforms",
        "description": "Describe the calculations and transformations required by the workload."
      },
      {
        "label": "Dependency Context",
        "description": "Keep Python package and runtime requirements explicit for maintainers."
      },
      {
        "label": "Failure Paths",
        "description": "Handle invalid inputs and service failures within the scoped Python code."
      },
      {
        "label": "Repeatable Checks",
        "description": "Exercise Python behavior with representative inputs and expected results."
      }
    ]
  },
  "/go-engineers/": {
    "title": "Go Services for Connected Cloud Work",
    "intro": "Build Go services and data handlers around defined message contracts, concurrency boundaries and runtime observations.",
    "hubTitle": "Go Services",
    "hubCue": "Runtime Scope",
    "sectors": [
      "Services",
      "Messages",
      "Concurrency",
      "Operations"
    ],
    "placeholder": "Relevant go services URL",
    "submitLabel": "Use Go URL",
    "nodes": [
      {
        "label": "Service Tasks",
        "description": "Describe the responsibilities assigned to each Go application service."
      },
      {
        "label": "Message Contracts",
        "description": "Define the data exchanged by Go handlers and connected services."
      },
      {
        "label": "Concurrent Routines",
        "description": "Review goroutine lifetimes and communication between concurrent tasks."
      },
      {
        "label": "Failure Responses",
        "description": "Specify how service failures are reported to Go application callers."
      },
      {
        "label": "Build Context",
        "description": "Document module dependencies and the supported Go build environment."
      },
      {
        "label": "Runtime Review",
        "description": "Check service behavior and resource use under representative workloads."
      }
    ]
  },
  "/mobile-devs/": {
    "title": "Mobile Apps Around Real Device Use",
    "intro": "Develop mobile workflows around native interaction, service data, connection changes and the supported device environment.",
    "hubTitle": "Mobile Apps",
    "hubCue": "Device Context",
    "sectors": [
      "Screens",
      "Services",
      "Sync",
      "Devices"
    ],
    "placeholder": "Relevant mobile apps URL",
    "submitLabel": "Use Mobile URL",
    "nodes": [
      {
        "label": "Screen Tasks",
        "description": "Organize mobile screens around the actions users need to complete."
      },
      {
        "label": "Service Data",
        "description": "Define the records exchanged between the mobile app and its services."
      },
      {
        "label": "Offline States",
        "description": "Describe what the app should show and allow when connectivity changes."
      },
      {
        "label": "Sync Decisions",
        "description": "Review how pending edits and conflicting records are reconciled."
      },
      {
        "label": "Device Features",
        "description": "Scope the permissions and platform features required by the app."
      },
      {
        "label": "Mobile Checks",
        "description": "Test supported device workflows and relevant platform differences."
      }
    ]
  },
  "/ms-ecosystem/": {
    "title": "Connect Work Across Microsoft Tools",
    "intro": "Align Microsoft directories, identity settings and shared information flows around the products your teams use together.",
    "hubTitle": "Microsoft Tools",
    "hubCue": "Shared Context",
    "sectors": [
      "Directories",
      "Identity",
      "Workflows",
      "Governance"
    ],
    "placeholder": "Relevant microsoft tools URL",
    "submitLabel": "Use Tools URL",
    "nodes": [
      {
        "label": "Product Connections",
        "description": "Map how the selected Microsoft products support shared business work."
      },
      {
        "label": "Directory Context",
        "description": "Review the directory records needed by users and connected services."
      },
      {
        "label": "Identity Boundaries",
        "description": "Describe access responsibilities across the Microsoft environment."
      },
      {
        "label": "Shared Workflows",
        "description": "Identify the tasks that cross more than one Microsoft product."
      },
      {
        "label": "Information Owners",
        "description": "Assign responsibility for shared records and platform configuration."
      },
      {
        "label": "Change Coordination",
        "description": "Review cross-product dependencies before changing common settings."
      }
    ]
  },
  "/power-apps-dev/": {
    "title": "Power Apps for Everyday Business Tasks",
    "intro": "Build low-code forms and workflow tools around user roles, business records and the data connections they require.",
    "hubTitle": "Power Apps",
    "hubCue": "App Scope",
    "sectors": [
      "Forms",
      "Records",
      "Connections",
      "Governance"
    ],
    "placeholder": "Relevant power apps URL",
    "submitLabel": "Use Forms URL",
    "nodes": [
      {
        "label": "User Roles",
        "description": "Identify the people and tasks the Power Apps solution should support."
      },
      {
        "label": "Form Behavior",
        "description": "Define field meaning, validation and the actions available on each form."
      },
      {
        "label": "Business Records",
        "description": "Describe the data created and updated through the low-code app."
      },
      {
        "label": "Connector Scope",
        "description": "Review which data sources and services the app needs to connect."
      },
      {
        "label": "Flow Conditions",
        "description": "Map workflow triggers and the exceptions users must be able to handle."
      },
      {
        "label": "App Ownership",
        "description": "Document environment, access and maintenance responsibilities for the app."
      }
    ]
  },
  "/business-intelligence/": {
    "title": "Business Data With Decision Context",
    "intro": "Turn business query results into understandable reporting with defined measures, visible assumptions and clear review ownership.",
    "hubTitle": "Business BI",
    "hubCue": "Decision Scope",
    "sectors": [
      "Questions",
      "Queries",
      "Measures",
      "Decisions"
    ],
    "placeholder": "Relevant business bi URL",
    "submitLabel": "Use Report URL",
    "nodes": [
      {
        "label": "Decision Questions",
        "description": "Define the commercial questions the business reporting should address."
      },
      {
        "label": "Query Meaning",
        "description": "Explain which business records are included in each reporting query."
      },
      {
        "label": "Measure Context",
        "description": "Document the assumptions behind business performance measures."
      },
      {
        "label": "Visual Summaries",
        "description": "Present results in views that suit the intended decision discussion."
      },
      {
        "label": "Result Caveats",
        "description": "Make reporting gaps and interpretation limits visible to readers."
      },
      {
        "label": "Review Ownership",
        "description": "Identify who reviews reporting definitions when business needs change."
      }
    ]
  },
  "/real-estate/": {
    "title": "Property Workflows for Listings and Teams",
    "intro": "Connect property records, contract steps and appointment workflows around the people managing real-estate operations.",
    "hubTitle": "Property Work",
    "hubCue": "Workflow Scope",
    "sectors": [
      "Listings",
      "Contracts",
      "Appointments",
      "Operations"
    ],
    "placeholder": "Relevant property work URL",
    "submitLabel": "Use Realty URL",
    "nodes": [
      {
        "label": "Listing Records",
        "description": "Define the property information needed by listing and search workflows."
      },
      {
        "label": "Search Context",
        "description": "Map property filters and detail views to the intended audience."
      },
      {
        "label": "Contract Steps",
        "description": "Describe document states and responsibilities in property transactions."
      },
      {
        "label": "Appointment Rules",
        "description": "Review how brokers and clients coordinate property appointments."
      },
      {
        "label": "Record Access",
        "description": "Set access boundaries for listing, client and contract information."
      },
      {
        "label": "Workflow Review",
        "description": "Check property scenarios and exception paths with operational owners."
      }
    ]
  },
  "/wep-app-front-end/": {
    "title": "Web Application Interfaces for Daily Tasks",
    "intro": "Build web application screens around user actions, service data and the states people encounter while completing their work.",
    "hubTitle": "Web Apps",
    "hubCue": "Interface Context",
    "sectors": [
      "Tasks",
      "Components",
      "Services",
      "States"
    ],
    "placeholder": "Relevant web apps URL",
    "submitLabel": "Use App URL",
    "nodes": [
      {
        "label": "User Tasks",
        "description": "Organize application views around the work people need to finish."
      },
      {
        "label": "Component States",
        "description": "Define loading, empty, error and completed interface states."
      },
      {
        "label": "Service Data",
        "description": "Map API responses to the records shown and changed in the app."
      },
      {
        "label": "Form Behavior",
        "description": "Validate inputs and explain corrections within the user workflow."
      },
      {
        "label": "Access Views",
        "description": "Present actions according to authenticated user responsibilities."
      },
      {
        "label": "Interface Checks",
        "description": "Exercise representative web app paths across supported layouts."
      }
    ]
  }
} as const satisfies Readonly<Record<string, WpHeroContent>>;

const engineeringApproachContentByPath = {
  "/services/it-project-management/": {
    "titleLead": "Manage IT Projects",
    "titleAccent": "With Visible Decisions",
    "intro": "Connect project scope, delivery milestones and decision ownership so progress can be reviewed against agreed expectations.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Project Scope",
        "title": "Define the Work to Be Managed",
        "desc": "Describe the intended outcome, dependencies and acceptance conditions before arranging project milestones.",
        "list": [
          "Outcome boundaries",
          "Delivery dependencies",
          "Acceptance conditions"
        ],
        "imageAlt": "Illustration accompanying define the work to be managed",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Progress Context",
        "title": "Track Change Against the Plan",
        "desc": "Review completed work, unresolved issues and scope changes alongside the milestones they may affect.",
        "list": [
          "Milestone evidence",
          "Issue ownership",
          "Scope-change records"
        ],
        "imageAlt": "Illustration accompanying track change against the plan",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Decision Ownership",
        "title": "Keep Delivery Decisions Traceable",
        "desc": "Identify who makes project decisions and record the context needed for stakeholders to review their consequences.",
        "list": [
          "Decision responsibilities",
          "Stakeholder feedback",
          "Review notes"
        ],
        "imageAlt": "Illustration accompanying keep delivery decisions traceable",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/services/agile-consulting/": {
    "titleLead": "Review Agile Delivery",
    "titleAccent": "In Its Working Context",
    "intro": "Examine how teams plan, complete and review work before selecting changes to their delivery practices.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Delivery Flow",
        "title": "Understand How Work Moves",
        "desc": "Review the steps between an incoming request and a usable change, including queues and recurring blockers.",
        "list": [
          "Work-entry rules",
          "Flow constraints",
          "Recurring blockers"
        ],
        "imageAlt": "Illustration accompanying understand how work moves",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Team Practices",
        "title": "Choose Changes Teams Can Test",
        "desc": "Connect proposed planning and collaboration changes to specific delivery problems and observable trial outcomes.",
        "list": [
          "Practice experiments",
          "Feedback intervals",
          "Shared responsibilities"
        ],
        "imageAlt": "Illustration accompanying choose changes teams can test",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Review Evidence",
        "title": "Assess the Effect of a Change",
        "desc": "Compare observations from the trial with the original problem before keeping or adjusting a delivery practice.",
        "list": [
          "Trial observations",
          "Outcome context",
          "Follow-up adjustments"
        ],
        "imageAlt": "Illustration accompanying assess the effect of a change",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/services/compliance-services/": {
    "titleLead": "Review Compliance Needs",
    "titleAccent": "Against Defined Requirements",
    "intro": "Connect applicable information-handling requirements to system configuration, evidence and responsible review.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Requirement Scope",
        "title": "Identify What Applies",
        "desc": "Describe the requirements and system boundaries being reviewed, with specialist interpretation where needed.",
        "list": [
          "Applicable requirements",
          "System boundaries",
          "Review responsibilities"
        ],
        "imageAlt": "Illustration accompanying identify what applies",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Control Mapping",
        "title": "Connect Requirements to Configuration",
        "desc": "Map relevant requirements to data handling, access settings and operating procedures without assuming certification.",
        "list": [
          "Data-handling rules",
          "Configuration evidence",
          "Operating procedures"
        ],
        "imageAlt": "Illustration accompanying connect requirements to configuration",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Evidence Review",
        "title": "Record Gaps and Follow-up Work",
        "desc": "Keep assessment observations, unresolved gaps and action ownership available for the relevant compliance review.",
        "list": [
          "Assessment records",
          "Gap ownership",
          "Follow-up evidence"
        ],
        "imageAlt": "Illustration accompanying record gaps and follow-up work",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/about/": {
    "titleLead": "Understand Our Work",
    "titleAccent": "Through Its Scope",
    "intro": "Read the agency overview in the context of its stated engineering focus, working principles and supporting information.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Engineering Focus",
        "title": "Identify the Work Being Described",
        "desc": "Distinguish the application, integration and platform topics included in the agency overview.",
        "list": [
          "Service topics",
          "System contexts",
          "Project boundaries"
        ],
        "imageAlt": "Illustration accompanying identify the work being described",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Working Principles",
        "title": "Connect Principles to Project Decisions",
        "desc": "Consider how the stated approach would shape requirements, implementation review and ongoing ownership.",
        "list": [
          "Requirements context",
          "Review expectations",
          "Maintenance ownership"
        ],
        "imageAlt": "Illustration accompanying connect principles to project decisions",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Supporting Context",
        "title": "Assess Statements With Their Evidence",
        "desc": "Use attributed project information and dated source material when assessing statements about the agency.",
        "list": [
          "Attributed information",
          "Publication dates",
          "Evidence scope"
        ],
        "imageAlt": "Illustration accompanying assess statements with their evidence",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/our-agency/": {
    "titleLead": "Explore the Agency",
    "titleAccent": "In Practical Terms",
    "intro": "Frame agency information around the work discussed, the people responsible and the context needed to evaluate a project fit.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Service Context",
        "title": "Understand the Agency Remit",
        "desc": "Review the service categories and technical environments described without inferring an unstated delivery commitment.",
        "list": [
          "Service categories",
          "Technical environments",
          "Engagement boundaries"
        ],
        "imageAlt": "Illustration accompanying understand the agency remit",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Responsibility Map",
        "title": "Clarify How Work Is Owned",
        "desc": "Identify the roles needed for project priorities, technical decisions and delivery communication.",
        "list": [
          "Priority ownership",
          "Technical decisions",
          "Communication roles"
        ],
        "imageAlt": "Illustration accompanying clarify how work is owned",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Project Fit",
        "title": "Connect Agency Information to Your Needs",
        "desc": "Compare the available agency information with the requirements and constraints of the work under consideration.",
        "list": [
          "Project requirements",
          "Delivery constraints",
          "Questions for review"
        ],
        "imageAlt": "Illustration accompanying connect agency information to your needs",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/our-vision/": {
    "titleLead": "Guide Technology Work",
    "titleAccent": "With Clear Priorities",
    "intro": "Turn broad engineering aims into explicit priorities that can be discussed when making software and infrastructure decisions.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Engineering Priorities",
        "title": "Describe the Intended Direction",
        "desc": "State which user needs, software qualities and operating concerns should guide the proposed technology work.",
        "list": [
          "User needs",
          "Software qualities",
          "Operating concerns"
        ],
        "imageAlt": "Illustration accompanying describe the intended direction",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Decision Tradeoffs",
        "title": "Make Competing Needs Visible",
        "desc": "Compare delivery effort, maintenance needs and resource use when deciding how a stated priority should be applied.",
        "list": [
          "Delivery effort",
          "Maintenance needs",
          "Resource use"
        ],
        "imageAlt": "Illustration accompanying make competing needs visible",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Review Context",
        "title": "Revisit Priorities as Work Changes",
        "desc": "Use project observations to check whether the original priorities still reflect the needs of users and system owners.",
        "list": [
          "Project observations",
          "Owner feedback",
          "Priority revisions"
        ],
        "imageAlt": "Illustration accompanying revisit priorities as work changes",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/quality-standards/": {
    "titleLead": "Review Software Quality",
    "titleAccent": "With Defined Evidence",
    "intro": "Connect quality expectations to test coverage, defect context and runtime observations relevant to the application.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Coverage Context",
        "title": "Define Relevant Quality Checks",
        "desc": "Select checks from the product risks and supported workflows rather than treating a coverage figure as proof of quality.",
        "list": [
          "Product risk areas",
          "Workflow coverage",
          "Check limitations"
        ],
        "imageAlt": "Illustration accompanying define relevant quality checks",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Defect Review",
        "title": "Interpret Findings in Context",
        "desc": "Review defects by affected behavior, reproduction evidence and release impact before assigning follow-up priorities.",
        "list": [
          "Affected behavior",
          "Reproduction evidence",
          "Release impact"
        ],
        "imageAlt": "Illustration accompanying interpret findings in context",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Runtime Evidence",
        "title": "Assess Behavior Under Representative Use",
        "desc": "Compare runtime observations with defined workload and environment conditions when reviewing software quality.",
        "list": [
          "Workload conditions",
          "Environment details",
          "Observed behavior"
        ],
        "imageAlt": "Illustration accompanying assess behavior under representative use",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/directors/": {
    "titleLead": "Understand Leadership",
    "titleAccent": "Through Responsibilities",
    "intro": "Read leadership information through the remit, decision authority and attributed background relevant to each role.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Leadership Remit",
        "title": "Describe the Responsibility of a Role",
        "desc": "Identify the organizational or technical decisions included in a leadership remit without inferring unstated authority.",
        "list": [
          "Role responsibilities",
          "Decision scope",
          "Reporting context"
        ],
        "imageAlt": "Illustration accompanying describe the responsibility of a role",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Decision Context",
        "title": "Connect Leadership to Project Governance",
        "desc": "Explain how leadership responsibilities relate to priorities, escalation and the review of significant project decisions.",
        "list": [
          "Priority decisions",
          "Escalation context",
          "Governance reviews"
        ],
        "imageAlt": "Illustration accompanying connect leadership to project governance",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Profile Evidence",
        "title": "Keep Background Statements Attributed",
        "desc": "Assess profile information through named sources, relevant dates and the scope of the work being described.",
        "list": [
          "Source attribution",
          "Relevant dates",
          "Experience context"
        ],
        "imageAlt": "Illustration accompanying keep background statements attributed",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/the-engineers/": {
    "titleLead": "Understand Engineering Roles",
    "titleAccent": "Through Relevant Work",
    "intro": "Connect technical roles to system responsibilities, collaboration needs and evidence of the skills relevant to a project.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Capability Scope",
        "title": "Describe the Engineering Work",
        "desc": "Identify the languages, systems and implementation tasks relevant to the role being considered.",
        "list": [
          "Technical tasks",
          "System responsibilities",
          "Implementation scope"
        ],
        "imageAlt": "Illustration accompanying describe the engineering work",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Team Interfaces",
        "title": "Clarify How Engineering Roles Connect",
        "desc": "Describe where engineering responsibilities meet product, testing and operations work within a delivery team.",
        "list": [
          "Product collaboration",
          "Testing handoffs",
          "Operations context"
        ],
        "imageAlt": "Illustration accompanying clarify how engineering roles connect",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Skill Evidence",
        "title": "Review Skills in Their Applied Context",
        "desc": "Use relevant work examples and verified credentials where available without assuming titles establish a capability.",
        "list": [
          "Work examples",
          "Credential context",
          "Role-relevant evidence"
        ],
        "imageAlt": "Illustration accompanying review skills in their applied context",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/case-studies/": {
    "titleLead": "Read Project Work",
    "titleAccent": "With Its Original Context",
    "intro": "Interpret a case study through the problem addressed, engineering choices made and evidence supporting the reported outcome.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Project Context",
        "title": "Start With the Original Problem",
        "desc": "Identify the users, system constraints and scope that shaped the project before interpreting its implementation.",
        "list": [
          "Original requirements",
          "System constraints",
          "Project boundaries"
        ],
        "imageAlt": "Illustration accompanying start with the original problem",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Engineering Choices",
        "title": "Review the Decisions That Shaped the Work",
        "desc": "Connect architecture and implementation choices to the constraints and alternatives described in the project account.",
        "list": [
          "Architecture decisions",
          "Considered alternatives",
          "Implementation context"
        ],
        "imageAlt": "Illustration accompanying review the decisions that shaped the work",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Outcome Evidence",
        "title": "Check What the Results Actually Measure",
        "desc": "Read outcome statements alongside their measurement conditions, dates and attribution without extending their scope.",
        "list": [
          "Measurement conditions",
          "Result attribution",
          "Outcome limitations"
        ],
        "imageAlt": "Illustration accompanying check what the results actually measure",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/client-feedback/": {
    "titleLead": "Read Client Feedback",
    "titleAccent": "With Attribution and Scope",
    "intro": "A client statement is easier to interpret when its source, project context and publication basis are clear.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Statement Source",
        "title": "Identify Who Provided the Feedback",
        "desc": "Review the named source, role and date attached to a client statement before using it to assess project experience.",
        "list": [
          "Named source",
          "Role context",
          "Statement date"
        ],
        "imageAlt": "Illustration accompanying identify who provided the feedback",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Project Scope",
        "title": "Connect the Feedback to the Work",
        "desc": "Identify which engagement, deliverables or communication practices the statement actually describes.",
        "list": [
          "Engagement context",
          "Referenced deliverables",
          "Experience described"
        ],
        "imageAlt": "Illustration accompanying connect the feedback to the work",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Publication Context",
        "title": "Keep the Statement Within Its Permission",
        "desc": "Consider attribution and publication permission when presenting feedback, and preserve the meaning of the original statement.",
        "list": [
          "Publication permission",
          "Original meaning",
          "Attribution details"
        ],
        "imageAlt": "Illustration accompanying keep the statement within its permission",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/tech-alliances/": {
    "titleLead": "Assess Technology Links",
    "titleAccent": "With Verifiable Context",
    "intro": "Interpret technology-alliance statements through their published source, stated scope and relevance to the proposed system work.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Alliance Scope",
        "title": "Identify the Relationship Being Claimed",
        "desc": "Distinguish product use, integration work and formal program participation when reading a technology-alliance statement.",
        "list": [
          "Relationship type",
          "Program scope",
          "Statement boundaries"
        ],
        "imageAlt": "Illustration accompanying identify the relationship being claimed",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Source Checks",
        "title": "Review the Supporting Publication",
        "desc": "Look for the provider source, relevant dates and any stated conditions before relying on an alliance or certification claim.",
        "list": [
          "Provider attribution",
          "Relevant dates",
          "Stated conditions"
        ],
        "imageAlt": "Illustration accompanying review the supporting publication",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Project Relevance",
        "title": "Connect Technology Links to Requirements",
        "desc": "Assess whether a described technology relationship has a practical bearing on the integration and delivery work in scope.",
        "list": [
          "Integration needs",
          "Delivery relevance",
          "Open questions"
        ],
        "imageAlt": "Illustration accompanying connect technology links to requirements",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/global-presence/": {
    "titleLead": "Coordinate Delivery",
    "titleAccent": "Across Working Locations",
    "intro": "Review location and availability information through stated coverage, working-time overlap and the needs of project handoffs.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Coverage Context",
        "title": "Clarify the Locations Relevant to the Work",
        "desc": "Use published location information and explicit service scope without inferring offices or regional capabilities.",
        "list": [
          "Published locations",
          "Service scope",
          "Coverage boundaries"
        ],
        "imageAlt": "Illustration accompanying clarify the locations relevant to the work",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Working Overlap",
        "title": "Plan Collaboration Windows",
        "desc": "Identify the time windows needed for project discussion, review and incident coordination across participating teams.",
        "list": [
          "Review windows",
          "Team availability",
          "Coordination needs"
        ],
        "imageAlt": "Illustration accompanying plan collaboration windows",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Handoff Context",
        "title": "Keep Work Understandable Between Teams",
        "desc": "Record ownership, current status and pending decisions so work can move between teams with useful context.",
        "list": [
          "Handoff ownership",
          "Current work status",
          "Pending decisions"
        ],
        "imageAlt": "Illustration accompanying keep work understandable between teams",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/onboarding-workflow/": {
    "titleLead": "Start Project Work",
    "titleAccent": "With the Right Context",
    "intro": "Organize onboarding around system knowledge, authorized access and a repeatable local development setup.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Project Knowledge",
        "title": "Establish the Starting Context",
        "desc": "Review repository structure, system dependencies and existing decisions before changing the application.",
        "list": [
          "Repository structure",
          "System dependencies",
          "Existing decisions"
        ],
        "imageAlt": "Illustration accompanying establish the starting context",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Authorized Access",
        "title": "Arrange Access by Responsibility",
        "desc": "Identify the accounts and permissions required for the scoped role and confirm who owns access approval.",
        "list": [
          "Role permissions",
          "Account ownership",
          "Approval responsibilities"
        ],
        "imageAlt": "Illustration accompanying arrange access by responsibility",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Workspace Checks",
        "title": "Verify the Development Starting Point",
        "desc": "Check setup instructions, local configuration and the agreed verification steps before beginning implementation.",
        "list": [
          "Setup instructions",
          "Local configuration",
          "Initial checks"
        ],
        "imageAlt": "Illustration accompanying verify the development starting point",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/engagement-models/": {
    "titleLead": "Choose an Engagement",
    "titleAccent": "Around the Work Required",
    "intro": "Compare engagement options through scope clarity, delivery responsibilities and the way changes will be reviewed.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Scope Definition",
        "title": "Describe What the Engagement Covers",
        "desc": "Set out the intended work, assumptions and exclusions before comparing project or team-based engagement options.",
        "list": [
          "Included work",
          "Working assumptions",
          "Scope exclusions"
        ],
        "imageAlt": "Illustration accompanying describe what the engagement covers",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Delivery Roles",
        "title": "Clarify Responsibility Within the Model",
        "desc": "Identify who manages priorities, contributes implementation work and reviews acceptance under the selected arrangement.",
        "list": [
          "Priority management",
          "Implementation roles",
          "Acceptance ownership"
        ],
        "imageAlt": "Illustration accompanying clarify responsibility within the model",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Change Review",
        "title": "Agree How Scope Changes Are Discussed",
        "desc": "Document the process for reviewing changing requirements, delivery expectations and the relevant commercial terms.",
        "list": [
          "Requirement changes",
          "Delivery expectations",
          "Term-review process"
        ],
        "imageAlt": "Illustration accompanying agree how scope changes are discussed",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/agile-pmo/": {
    "titleLead": "Coordinate Agile Projects",
    "titleAccent": "Through Shared Visibility",
    "intro": "Connect portfolio priorities, team milestones and delivery dependencies without treating activity counts as completed outcomes.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Portfolio Context",
        "title": "Make Priorities and Dependencies Visible",
        "desc": "Identify the projects, decision owners and cross-team dependencies that affect the delivery plan.",
        "list": [
          "Project priorities",
          "Decision owners",
          "Cross-team dependencies"
        ],
        "imageAlt": "Illustration accompanying make priorities and dependencies visible",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Milestone Review",
        "title": "Connect Team Progress to Deliverables",
        "desc": "Review milestone status through completed work and acceptance evidence, with unresolved dependencies kept visible.",
        "list": [
          "Completed deliverables",
          "Acceptance evidence",
          "Open dependencies"
        ],
        "imageAlt": "Illustration accompanying connect team progress to deliverables",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Governance Feedback",
        "title": "Use Reviews to Adjust Coordination",
        "desc": "Record the decisions and follow-up actions that result from portfolio and project delivery reviews.",
        "list": [
          "Review decisions",
          "Follow-up actions",
          "Coordination adjustments"
        ],
        "imageAlt": "Illustration accompanying use reviews to adjust coordination",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/system-design-hub/": {
    "titleLead": "Review System Design",
    "titleAccent": "From Boundaries to Behavior",
    "intro": "Connect architecture diagrams to data movement, runtime constraints and the failure scenarios relevant to the design.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "System Boundaries",
        "title": "Describe the Parts and Their Responsibilities",
        "desc": "Identify services, storage and external interfaces before discussing detailed architecture choices.",
        "list": [
          "Service responsibilities",
          "Storage roles",
          "External interfaces"
        ],
        "imageAlt": "Illustration accompanying describe the parts and their responsibilities",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Data Movement",
        "title": "Trace How Information Crosses the Design",
        "desc": "Review record ownership, synchronization paths and consistency assumptions across connected system parts.",
        "list": [
          "Record ownership",
          "Synchronization paths",
          "Consistency assumptions"
        ],
        "imageAlt": "Illustration accompanying trace how information crosses the design",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Failure Context",
        "title": "Test the Design Against Failure Scenarios",
        "desc": "Consider dependency failures and recovery behavior within the expected workload and operating environment.",
        "list": [
          "Dependency failures",
          "Recovery behavior",
          "Workload conditions"
        ],
        "imageAlt": "Illustration accompanying test the design against failure scenarios",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/innovation-labs/": {
    "titleLead": "Explore Technical Ideas",
    "titleAccent": "With Bounded Experiments",
    "intro": "Frame new technology work as an experiment with a defined question, representative inputs and an explicit review decision.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Experiment Scope",
        "title": "State What the Trial Should Explore",
        "desc": "Identify the uncertainty and constraints behind a proposed machine-learning, spatial or software experiment.",
        "list": [
          "Research question",
          "Trial constraints",
          "Success criteria"
        ],
        "imageAlt": "Illustration accompanying state what the trial should explore",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Prototype Context",
        "title": "Keep Experimental Work Reproducible",
        "desc": "Record the inputs, configuration and implementation choices used to produce a prototype observation.",
        "list": [
          "Representative inputs",
          "Configuration notes",
          "Prototype decisions"
        ],
        "imageAlt": "Illustration accompanying keep experimental work reproducible",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Learning Review",
        "title": "Decide What the Observations Support",
        "desc": "Review the experiment against its original question and document limitations before extending the work.",
        "list": [
          "Observed results",
          "Trial limitations",
          "Next-step decision"
        ],
        "imageAlt": "Illustration accompanying decide what the observations support",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/delivery-framework/": {
    "titleLead": "Deliver Software Changes",
    "titleAccent": "With Traceable Checks",
    "intro": "Connect implementation, verification and deployment steps to the exact source change being reviewed for release.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Change Scope",
        "title": "Identify the Behavior Being Changed",
        "desc": "Describe the intended change and affected dependencies before selecting implementation and review steps.",
        "list": [
          "Intended behavior",
          "Affected dependencies",
          "Review scope"
        ],
        "imageAlt": "Illustration accompanying identify the behavior being changed",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Verification Evidence",
        "title": "Link Checks to the Release Candidate",
        "desc": "Keep the source revision, check results and unresolved limitations together when assessing a proposed release.",
        "list": [
          "Source revision",
          "Check results",
          "Known limitations"
        ],
        "imageAlt": "Illustration accompanying link checks to the release candidate",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Release Ownership",
        "title": "Record Deployment and Recovery Context",
        "desc": "Identify the deployment target, release owner and recovery options relevant to the software change.",
        "list": [
          "Deployment target",
          "Release responsibility",
          "Recovery options"
        ],
        "imageAlt": "Illustration accompanying record deployment and recovery context",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/security-posture/": {
    "titleLead": "Review Security Posture",
    "titleAccent": "Across System Boundaries",
    "intro": "Describe the assets, access controls and operating practices being assessed, with evidence kept separate from assumptions.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Asset Context",
        "title": "Identify What Needs Protection",
        "desc": "Map relevant information, applications and infrastructure to their owners and expected use.",
        "list": [
          "Information assets",
          "System owners",
          "Expected use"
        ],
        "imageAlt": "Illustration accompanying identify what needs protection",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Control Context",
        "title": "Review Access and Data Safeguards",
        "desc": "Examine the identity, network and data-handling controls relevant to the scoped environment.",
        "list": [
          "Identity boundaries",
          "Network access",
          "Data safeguards"
        ],
        "imageAlt": "Illustration accompanying review access and data safeguards",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Review Evidence",
        "title": "Track Findings and Their Ownership",
        "desc": "Record assessment observations and the actions needed to review or address gaps in the stated security posture.",
        "list": [
          "Assessment observations",
          "Gap ownership",
          "Review actions"
        ],
        "imageAlt": "Illustration accompanying track findings and their ownership",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/co-innovation/": {
    "titleLead": "Develop Shared Ideas",
    "titleAccent": "With Defined Responsibilities",
    "intro": "Structure collaborative technical work around a shared problem, clear interfaces and evidence from jointly reviewed trials.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Shared Problem",
        "title": "Agree the Question Before Building",
        "desc": "Describe the system problem and the constraints each participant brings to the proposed collaboration.",
        "list": [
          "Shared objectives",
          "Participant constraints",
          "Scope agreement"
        ],
        "imageAlt": "Illustration accompanying agree the question before building",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Collaboration Boundaries",
        "title": "Make Contributions and Interfaces Explicit",
        "desc": "Identify responsibility for code, data and system interfaces so collaborative implementation can be reviewed.",
        "list": [
          "Code responsibilities",
          "Data contributions",
          "Interface contracts"
        ],
        "imageAlt": "Illustration accompanying make contributions and interfaces explicit",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Joint Review",
        "title": "Assess Trial Results Together",
        "desc": "Use agreed observations and recorded decisions to determine what the collaborative work supports next.",
        "list": [
          "Agreed observations",
          "Recorded decisions",
          "Next-stage ownership"
        ],
        "imageAlt": "Illustration accompanying assess trial results together",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/green-it/": {
    "titleLead": "Review Resource Use",
    "titleAccent": "Across Software Workloads",
    "intro": "Assess software and infrastructure resource use through measured workload behavior and clearly stated operating conditions.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Usage Context",
        "title": "Understand Where Resources Are Used",
        "desc": "Identify the compute, storage and transfer activity associated with representative application tasks.",
        "list": [
          "Compute activity",
          "Storage demand",
          "Data transfer"
        ],
        "imageAlt": "Illustration accompanying understand where resources are used",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Efficiency Changes",
        "title": "Test Adjustments Against the Workload",
        "desc": "Evaluate scheduling, configuration or code changes against the resource demand and behavior they are intended to affect.",
        "list": [
          "Scheduling changes",
          "Configuration trials",
          "Workload comparisons"
        ],
        "imageAlt": "Illustration accompanying test adjustments against the workload",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Measurement Limits",
        "title": "Report Environmental Claims Carefully",
        "desc": "State measurement boundaries and supporting evidence rather than inferring carbon neutrality from an optimization change.",
        "list": [
          "Measurement boundaries",
          "Supporting evidence",
          "Unresolved assumptions"
        ],
        "imageAlt": "Illustration accompanying report environmental claims carefully",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/webinars-talks/": {
    "titleLead": "Explore Technical Sessions",
    "titleAccent": "With Publication Context",
    "intro": "Review a technical session through its stated subject, demonstrated setup and the date and source of its publication.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Session Scope",
        "title": "Identify the Topic and Intended Audience",
        "desc": "Read session descriptions for the technical question addressed and the background expected of participants.",
        "list": [
          "Technical subject",
          "Audience context",
          "Session boundaries"
        ],
        "imageAlt": "Illustration accompanying identify the topic and intended audience",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Demonstration Context",
        "title": "Understand the Setup Behind an Example",
        "desc": "Check the tools, configuration and assumptions used in a demonstration before applying it to another environment.",
        "list": [
          "Tool versions",
          "Configuration details",
          "Example assumptions"
        ],
        "imageAlt": "Illustration accompanying understand the setup behind an example",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Publication Details",
        "title": "Keep Source and Date With the Session",
        "desc": "Use speaker attribution, publication timing and available materials to interpret a recorded or described technical session.",
        "list": [
          "Speaker attribution",
          "Publication timing",
          "Related materials"
        ],
        "imageAlt": "Illustration accompanying keep source and date with the session",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/press-coverage/": {
    "titleLead": "Read Press Coverage",
    "titleAccent": "Through Its Original Source",
    "intro": "Interpret external coverage through the publisher, publication date and the scope of the statement being reported.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Original Source",
        "title": "Identify the Publication Behind the Coverage",
        "desc": "Distinguish an external article from an agency announcement and retain the original publisher attribution.",
        "list": [
          "Publisher attribution",
          "Original article",
          "Publication type"
        ],
        "imageAlt": "Illustration accompanying identify the publication behind the coverage",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Reported Scope",
        "title": "Separate Quoted Statements From Findings",
        "desc": "Check whether a passage reports a claim, quotes a spokesperson or describes independently documented work.",
        "list": [
          "Quoted statements",
          "Reported claims",
          "Documented work"
        ],
        "imageAlt": "Illustration accompanying separate quoted statements from findings",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Date and Context",
        "title": "Read Coverage Within Its Timeframe",
        "desc": "Keep dates and relevant project context visible so older coverage is not presented as evidence of current conditions.",
        "list": [
          "Publication date",
          "Project context",
          "Current relevance"
        ],
        "imageAlt": "Illustration accompanying read coverage within its timeframe",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/leadership-insights/": {
    "titleLead": "Read Technical Perspectives",
    "titleAccent": "With Their Reasoning",
    "intro": "Evaluate leadership commentary through the problem discussed, the reasoning offered and the evidence supporting its conclusions.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Problem Framing",
        "title": "Identify the Decision Under Discussion",
        "desc": "Read a technical perspective for the system context, constraints and decisions it is intended to address.",
        "list": [
          "System context",
          "Decision constraints",
          "Intended audience"
        ],
        "imageAlt": "Illustration accompanying identify the decision under discussion",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Reasoning Context",
        "title": "Review Assumptions and Alternatives",
        "desc": "Consider the assumptions and tradeoffs behind a recommendation rather than applying it without its original context.",
        "list": [
          "Working assumptions",
          "Considered alternatives",
          "Technical tradeoffs"
        ],
        "imageAlt": "Illustration accompanying review assumptions and alternatives",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Evidence and Date",
        "title": "Keep the Perspective Attributed",
        "desc": "Use publication timing, author attribution and supporting references when assessing a technical opinion.",
        "list": [
          "Author attribution",
          "Publication timing",
          "Supporting references"
        ],
        "imageAlt": "Illustration accompanying keep the perspective attributed",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/tech-blog/": {
    "titleLead": "Read Engineering Articles",
    "titleAccent": "With Reproducible Context",
    "intro": "Connect technical explanations to their code examples, environment assumptions and the conditions under which observations were made.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Article Scope",
        "title": "Start With the Problem Being Explained",
        "desc": "Identify the application behavior or engineering question that gives a technical article its scope.",
        "list": [
          "Engineering question",
          "Application behavior",
          "Article boundaries"
        ],
        "imageAlt": "Illustration accompanying start with the problem being explained",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Example Conditions",
        "title": "Check the Setup Behind the Code",
        "desc": "Review dependencies, sample inputs and configuration before adapting an example to a different codebase.",
        "list": [
          "Dependency context",
          "Sample inputs",
          "Configuration assumptions"
        ],
        "imageAlt": "Illustration accompanying check the setup behind the code",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Observed Results",
        "title": "Interpret Results Within Their Limits",
        "desc": "Read query, rendering or runtime observations alongside the workload and environment used to obtain them.",
        "list": [
          "Workload details",
          "Environment conditions",
          "Observation limits"
        ],
        "imageAlt": "Illustration accompanying interpret results within their limits",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/agency-updates/": {
    "titleLead": "Read Agency Updates",
    "titleAccent": "With Dates and Scope",
    "intro": "Use dated announcements and attributed source information to understand which agency changes are being described.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Announcement Scope",
        "title": "Identify the Change Being Announced",
        "desc": "Read an update for the specific team, service or platform change it describes without extending its meaning.",
        "list": [
          "Announced change",
          "Affected area",
          "Statement scope"
        ],
        "imageAlt": "Illustration accompanying identify the change being announced",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Source Context",
        "title": "Check the Basis of the Announcement",
        "desc": "Keep the source and supporting information visible when an update refers to staffing, partnerships or infrastructure.",
        "list": [
          "Source attribution",
          "Supporting information",
          "Verification context"
        ],
        "imageAlt": "Illustration accompanying check the basis of the announcement",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Current Relevance",
        "title": "Review the Update in Its Timeframe",
        "desc": "Use publication dates and subsequent information when assessing whether an announcement still describes the current state.",
        "list": [
          "Publication dates",
          "Subsequent changes",
          "Current-state questions"
        ],
        "imageAlt": "Illustration accompanying review the update in its timeframe",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/press-kit/": {
    "titleLead": "Use Agency Media Assets",
    "titleAccent": "With Clear Attribution",
    "intro": "Consider each media asset through its intended use, version context and the publication details that should accompany it.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Asset Purpose",
        "title": "Choose an Asset for the Intended Use",
        "desc": "Distinguish logos, profile imagery and company information by the purpose each supplied asset is meant to serve.",
        "list": [
          "Asset category",
          "Intended use",
          "Publication context"
        ],
        "imageAlt": "Illustration accompanying choose an asset for the intended use",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Version Context",
        "title": "Check Which Asset Version Is Current",
        "desc": "Review available version or date information before reusing a brand or profile asset in a publication.",
        "list": [
          "Version information",
          "Available dates",
          "Current-use context"
        ],
        "imageAlt": "Illustration accompanying check which asset version is current",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Attribution Details",
        "title": "Keep Names and Usage Context Accurate",
        "desc": "Preserve relevant names, captions and usage permissions when preparing agency material for publication.",
        "list": [
          "Accurate captions",
          "Name attribution",
          "Usage permissions"
        ],
        "imageAlt": "Illustration accompanying keep names and usage context accurate",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/media-spokespersons/": {
    "titleLead": "Interpret Media Remarks",
    "titleAccent": "Through Authorized Context",
    "intro": "Review spokesperson information through the stated remit, publication attribution and subject of the remarks.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Spokesperson Remit",
        "title": "Identify the Subject a Person Represents",
        "desc": "Read the stated role and subject area before assuming a person speaks for every part of an organization.",
        "list": [
          "Stated role",
          "Subject area",
          "Representation scope"
        ],
        "imageAlt": "Illustration accompanying identify the subject a person represents",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Statement Context",
        "title": "Keep Remarks Connected to Their Topic",
        "desc": "Preserve the question, topic and publication context relevant to a quoted or summarized statement.",
        "list": [
          "Question context",
          "Quoted subject",
          "Publication setting"
        ],
        "imageAlt": "Illustration accompanying keep remarks connected to their topic",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Attribution Checks",
        "title": "Verify Names and Publication Details",
        "desc": "Check the available source, name and date information before attributing a technical or organizational statement.",
        "list": [
          "Source information",
          "Name accuracy",
          "Statement date"
        ],
        "imageAlt": "Illustration accompanying verify names and publication details",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/hiring-workflow/": {
    "titleLead": "Understand Hiring Steps",
    "titleAccent": "Through Role-Relevant Evidence",
    "intro": "Connect assessment stages to the role requirements, the work being evaluated and clear communication about next steps.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Role Criteria",
        "title": "Define What the Assessment Should Evaluate",
        "desc": "Use the responsibilities of the role to identify the skills and evidence relevant to a hiring decision.",
        "list": [
          "Role responsibilities",
          "Relevant skills",
          "Assessment evidence"
        ],
        "imageAlt": "Illustration accompanying define what the assessment should evaluate",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Assessment Context",
        "title": "Explain the Purpose of Each Stage",
        "desc": "Describe what a code exercise, interview or work review examines without implying an unstated selection outcome.",
        "list": [
          "Stage purpose",
          "Task instructions",
          "Evaluation context"
        ],
        "imageAlt": "Illustration accompanying explain the purpose of each stage",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Candidate Communication",
        "title": "Keep Progress and Next Steps Clear",
        "desc": "Communicate available process information and distinguish confirmed next steps from decisions that remain under review.",
        "list": [
          "Process information",
          "Confirmed next steps",
          "Pending decisions"
        ],
        "imageAlt": "Illustration accompanying keep progress and next steps clear",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/partner-program/": {
    "titleLead": "Review Partnership Options",
    "titleAccent": "Through Explicit Terms",
    "intro": "Understand a proposed referral or delivery relationship through its scope, responsibilities and documented terms.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Relationship Scope",
        "title": "Describe the Proposed Collaboration",
        "desc": "Clarify whether the relationship concerns introductions, delivery work or another defined contribution.",
        "list": [
          "Contribution type",
          "Relationship boundaries",
          "Intended participants"
        ],
        "imageAlt": "Illustration accompanying describe the proposed collaboration",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Responsibilities",
        "title": "Agree How Introductions or Work Are Handled",
        "desc": "Identify ownership of communication, qualification and follow-up within the proposed partnership arrangement.",
        "list": [
          "Communication ownership",
          "Qualification steps",
          "Follow-up responsibilities"
        ],
        "imageAlt": "Illustration accompanying agree how introductions or work are handled",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Term Review",
        "title": "Confirm Conditions Before Relying on Them",
        "desc": "Review documented eligibility, commercial conditions and attribution rules without assuming fees or incentives are available.",
        "list": [
          "Documented conditions",
          "Eligibility context",
          "Attribution rules"
        ],
        "imageAlt": "Illustration accompanying confirm conditions before relying on them",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/refer-a-dev/": {
    "titleLead": "Describe a Developer Referral",
    "titleAccent": "With Consent and Context",
    "intro": "Frame a developer introduction around relevant work, the candidate's permission and a clear account of the next review step.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Candidate Context",
        "title": "Connect Experience to the Intended Work",
        "desc": "Describe the technical work and role context relevant to the candidate rather than relying only on a job title.",
        "list": [
          "Relevant experience",
          "Technical work examples",
          "Role context"
        ],
        "imageAlt": "Illustration accompanying connect experience to the intended work",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Referral Permission",
        "title": "Share Candidate Information Appropriately",
        "desc": "Confirm permission to make the introduction and include only the information relevant to the proposed referral.",
        "list": [
          "Introduction permission",
          "Relevant information",
          "Candidate preferences"
        ],
        "imageAlt": "Illustration accompanying share candidate information appropriately",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Review Expectations",
        "title": "Distinguish an Introduction From a Decision",
        "desc": "Explain the available next step without promising an interview, selection result or referral payment.",
        "list": [
          "Available next step",
          "Review responsibilities",
          "Unconfirmed outcomes"
        ],
        "imageAlt": "Illustration accompanying distinguish an introduction from a decision",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/endorsements/": {
    "titleLead": "Read Endorsements",
    "titleAccent": "With Their Evidence",
    "intro": "Understand a recommendation through its source, date, the work it recognizes and the permission to publish it.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Recommendation Source",
        "title": "Identify Who Made the Recommendation",
        "desc": "Keep the author, role and date available so readers can interpret the source of an endorsement.",
        "list": [
          "Author attribution",
          "Role context",
          "Recommendation date"
        ],
        "imageAlt": "Illustration accompanying identify who made the recommendation",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Work Recognized",
        "title": "Connect Praise to Its Stated Scope",
        "desc": "Describe the project, contribution or capability the recommendation actually recognizes without extending the claim.",
        "list": [
          "Referenced work",
          "Contribution scope",
          "Original wording context"
        ],
        "imageAlt": "Illustration accompanying connect praise to its stated scope",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Publication Basis",
        "title": "Preserve Meaning and Publication Permission",
        "desc": "Present the endorsement with its agreed attribution and permission while retaining the meaning of the original statement.",
        "list": [
          "Publication permission",
          "Agreed attribution",
          "Original meaning"
        ],
        "imageAlt": "Illustration accompanying preserve meaning and publication permission",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/industry-awards/": {
    "titleLead": "Interpret Industry Recognition",
    "titleAccent": "With Published Context",
    "intro": "Assess an award statement through the awarding body, date, category and evidence describing what was recognized.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Award Source",
        "title": "Identify the Recognition Being Described",
        "desc": "Look for the awarding organization, category and date before interpreting a statement about industry recognition.",
        "list": [
          "Awarding organization",
          "Recognition category",
          "Award date"
        ],
        "imageAlt": "Illustration accompanying identify the recognition being described",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Assessment Scope",
        "title": "Review What the Recognition Covers",
        "desc": "Use published criteria and the named work or recipient to understand the limits of the recognition.",
        "list": [
          "Published criteria",
          "Named recipient",
          "Recognized work"
        ],
        "imageAlt": "Illustration accompanying review what the recognition covers",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Evidence Context",
        "title": "Keep Award Claims Verifiable",
        "desc": "Retain the original publication and relevant attribution rather than treating an unsupported badge as proof of capability.",
        "list": [
          "Original publication",
          "Relevant attribution",
          "Claim boundaries"
        ],
        "imageAlt": "Illustration accompanying keep award claims verifiable",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  },
  "/careers-portal/": {
    "titleLead": "Explore Engineering Roles",
    "titleAccent": "Through Their Requirements",
    "intro": "Review career information through the work described, the evidence relevant to the role and the stated application process.",
    "tabs": {
      "performance": {
        "id": "performance",
        "label": "Role Scope",
        "title": "Understand the Work Being Described",
        "desc": "Read each role description for its responsibilities, technical environment and collaboration requirements.",
        "list": [
          "Role responsibilities",
          "Technical environment",
          "Team collaboration"
        ],
        "imageAlt": "Illustration accompanying understand the work being described",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "scalability": {
        "id": "scalability",
        "label": "Skill Context",
        "title": "Connect Experience to the Role",
        "desc": "Use relevant projects and applied skills to explain how a candidate's background relates to the work under consideration.",
        "list": [
          "Relevant projects",
          "Applied skills",
          "Experience context"
        ],
        "imageAlt": "Illustration accompanying connect experience to the role",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      },
      "ux": {
        "id": "ux",
        "label": "Application Details",
        "title": "Check the Current Process Information",
        "desc": "Review the dated role information and stated next steps without assuming that a vacancy or selection outcome is confirmed.",
        "list": [
          "Dated role information",
          "Stated next steps",
          "Current availability"
        ],
        "imageAlt": "Illustration accompanying check the current process information",
        "img": "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp"
      }
    }
  }
} as const satisfies Readonly<Record<string, EngineeringApproachContent>>;

const fallbackWpHero: WpHeroContent = {
  title: "Software Systems With Clear Scope",
  intro: "Connect application workflows, system records and delivery responsibilities around the work the software needs to support.",
  hubTitle: "Software",
  hubCue: "System Context",
  sectors: ["Workflows", "Services", "Records", "Operations"],
  placeholder: "Relevant software URL",
  submitLabel: "Use App URL",
  nodes: [
    { label: "User Tasks", description: "Define the work the software should help its intended users complete." },
    { label: "System Roles", description: "Separate application responsibilities and connected service boundaries." },
    { label: "Data Records", description: "Identify the information created and changed by each workflow." },
    { label: "Service Links", description: "Specify exchanges and failure handling between connected systems." },
    { label: "Release Checks", description: "Review representative scenarios before accepting a software change." },
    { label: "Operating Notes", description: "Keep support and maintenance context available to system owners." },
  ],
};

const fallbackEngineeringApproach: EngineeringApproachContent = {
  titleLead: "Engineering With",
  titleAccent: "Clear Decisions",
  intro: "Connect technical choices to the people, systems and operating context involved in the work.",
  tabs: {
    performance: {
      id: "performance",
      label: "Define",
      title: "Understand the Work",
      desc: "Clarify the intended outcome, relevant constraints and evidence available before choosing an implementation path.",
      list: ["State the intended outcome", "Identify relevant constraints", "Confirm available evidence"],
      imageAlt: "Illustration accompanying understand the work",
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    },
    scalability: {
      id: "scalability",
      label: "Shape",
      title: "Plan the System",
      desc: "Translate the agreed scope into responsibilities, interfaces and review points that teams can discuss and maintain.",
      list: ["Separate responsibilities", "Define system interfaces", "Plan review points"],
      imageAlt: "Illustration accompanying plan the system",
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    },
    ux: {
      id: "ux",
      label: "Review",
      title: "Check the Outcome",
      desc: "Examine the result against representative scenarios and record the context needed for later decisions.",
      list: ["Exercise real scenarios", "Record observed results", "Retain decision context"],
      imageAlt: "Illustration accompanying check the outcome",
      img: "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp",
    },
  },
};

export function getWpHeroContent(path: string | null | undefined): WpHeroContent {
  const normalized = normalizePath(path);
  return wpHeroContentByPath[normalized as keyof typeof wpHeroContentByPath] ?? fallbackWpHero;
}

export function getEngineeringApproachContent(path: string | null | undefined): EngineeringApproachContent {
  const normalized = normalizePath(path);
  return engineeringApproachContentByPath[normalized as keyof typeof engineeringApproachContentByPath] ?? fallbackEngineeringApproach;
}

export const wpHeroPaths = Object.keys(wpHeroContentByPath);
export const engineeringApproachPaths = Object.keys(engineeringApproachContentByPath);

