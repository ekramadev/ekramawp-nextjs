type Three<T> = readonly [T, T, T];
type Six<T> = readonly [T, T, T, T, T, T];

export interface ArchitecturePhase {
  title: string;
  subtitle: string;
  price: string;
  priceUnit: string;
  bodyTitle: string;
  description: string;
  list: Three<string>;
  imageAlt: string;
}
export interface ArchitecturePhasesContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  phases: Three<ArchitecturePhase>;
  cta: string;
}
export interface ResourceCard { title: string; description: string; }
export interface PageResourcesContent {
  sidebarLead: string;
  sidebarAccent: string;
  sidebarDescription: string;
  imageAlt: string;
  placeholder: string;
  submitLabel: string;
  title: string;
  introLead: string;
  introBody: string;
  cards: Six<ResourceCard>;
}

export const architecturePhasesContent: Readonly<Record<string, ArchitecturePhasesContent>> = {
  "/services/database-development/": {
    titleLead: "Database", titleAccent: "Delivery Stages", intro: "Translate application data needs into a database model, practical query paths and a reviewed approach to operating the system.", cta: "Review Database Scope",
    phases: [
      { title: "PHASE 01: MODEL", subtitle: "Records and Relationships", price: "DATA", priceUnit: " MODEL", bodyTitle: "Define the Data", description: "Map entities, relationships and ownership rules before choosing how application records will be stored.", list: ["Entity definitions", "Relationship rules", "Ownership boundaries"], imageAlt: "Phase icon for database modeling" },
      { title: "PHASE 02: QUERIES", subtitle: "Access and Transactions", price: "READ", priceUnit: " WRITE", bodyTitle: "Build Access Paths", description: "Develop queries and transactions around expected workloads, then inspect indexes and execution plans with representative data.", list: ["Query workloads", "Transaction boundaries", "Execution-plan review"], imageAlt: "Phase icon for database access planning" },
      { title: "PHASE 03: OPERATE", subtitle: "Change and Recovery", price: "RUN", priceUnit: " BOOK", bodyTitle: "Prepare Operations", description: "Document schema changes, backups and recovery checks so maintenance decisions have an explicit operational context.", list: ["Schema migration steps", "Backup requirements", "Recovery checks"], imageAlt: "Phase icon for database operations" }
    ]
  },
  "/m365-sharepoint/": {
    titleLead: "SharePoint", titleAccent: "From Structure to Use", intro: "Shape a SharePoint workspace around information ownership, document handling and the people who will maintain it.", cta: "Outline SharePoint Needs",
    phases: [
      { title: "PHASE 01: STRUCTURE", subtitle: "Sites and Information", price: "SITE", priceUnit: " MAP", bodyTitle: "Organize the Workspace", description: "Identify site purposes, library categories and content owners before arranging the intranet or collaboration space.", list: ["Site purpose mapping", "Library categories", "Content ownership"], imageAlt: "Phase icon for SharePoint information structure" },
      { title: "PHASE 02: WORKFLOWS", subtitle: "Documents and Access", price: "DOC", priceUnit: " FLOW", bodyTitle: "Connect Daily Work", description: "Configure document metadata, sharing boundaries and review flows around the team's actual collaboration needs.", list: ["Document metadata", "Sharing boundaries", "Review-flow steps"], imageAlt: "Phase icon for SharePoint document workflows" },
      { title: "PHASE 03: ADOPTION", subtitle: "Ownership and Upkeep", price: "TEAM", priceUnit: " USE", bodyTitle: "Support Site Owners", description: "Review navigation, permissions and content upkeep with the people responsible for the SharePoint environment.", list: ["Owner handover", "Permission reviews", "Content upkeep rules"], imageAlt: "Phase icon for SharePoint adoption planning" }
    ]
  },
  "/services/testing-and-qa/": {
    titleLead: "Software QA", titleAccent: "Through Each Release", intro: "Connect testing scope to product risks, repeatable checks and a clear record of the findings that affect a release decision.", cta: "Define QA Coverage",
    phases: [
      { title: "PHASE 01: COVERAGE", subtitle: "Risks and Test Scope", price: "TEST", priceUnit: " PLAN", bodyTitle: "Choose What to Test", description: "Use product workflows and known risks to identify test priorities, environments and the evidence needed for review.", list: ["Workflow risk review", "Test environment needs", "Coverage priorities"], imageAlt: "Phase icon for QA coverage planning" },
      { title: "PHASE 02: EXECUTE", subtitle: "Manual and Automated", price: "CHECK", priceUnit: " RUN", bodyTitle: "Exercise the Product", description: "Run suitable manual and automated checks with traceable inputs, expected behavior and reproducible defect reports.", list: ["Scenario execution", "Automation candidates", "Reproducible defects"], imageAlt: "Phase icon for software test execution" },
      { title: "PHASE 03: REVIEW", subtitle: "Findings and Regression", price: "QA", priceUnit: " NOTES", bodyTitle: "Inform Release Review", description: "Retest fixes and summarize remaining coverage gaps so stakeholders can assess the evidence behind a release.", list: ["Fix verification", "Regression selection", "Open-risk summaries"], imageAlt: "Phase icon for QA release review" }
    ]
  },
  "/salesforce-tech/": {
    titleLead: "Salesforce", titleAccent: "Implementation Path", intro: "Align Salesforce configuration and integrations with the records, permissions and workflows your CRM users need.", cta: "Map Salesforce Scope",
    phases: [
      { title: "PHASE 01: DISCOVERY", subtitle: "CRM Processes and Data", price: "CRM", priceUnit: " MAP", bodyTitle: "Understand CRM Work", description: "Trace sales or service activities to their objects, record owners and reporting requirements before configuration begins.", list: ["Process discovery", "Object relationships", "Record ownership"], imageAlt: "Phase icon for Salesforce discovery" },
      { title: "PHASE 02: CONFIGURE", subtitle: "Rules and Integrations", price: "FLOW", priceUnit: " BUILD", bodyTitle: "Configure the Platform", description: "Implement appropriate fields, validation and automation, with integration contracts that account for external system behavior.", list: ["Field validation", "Automation boundaries", "Integration contracts"], imageAlt: "Phase icon for Salesforce configuration" },
      { title: "PHASE 03: VALIDATE", subtitle: "Users and Administration", price: "USER", priceUnit: " CHECK", bodyTitle: "Review Real Scenarios", description: "Check role-based scenarios, migration samples and administrator tasks before handing over the configured Salesforce setup.", list: ["Role-based scenarios", "Migration samples", "Administrator guidance"], imageAlt: "Phase icon for Salesforce validation" }
    ]
  },
  "/php-engineers/": {
    titleLead: "PHP Applications", titleAccent: "From Scope to Support", intro: "Plan PHP application work around request handling, business rules, persistent data and the checks needed for ongoing change.", cta: "Discuss PHP Work",
    phases: [
      { title: "PHASE 01: SCOPE", subtitle: "Routes and Domain Rules", price: "APP", priceUnit: " SCOPE", bodyTitle: "Frame the Application", description: "Define portal workflows, framework boundaries and data requirements before implementing PHP controllers and services.", list: ["Portal workflow maps", "Framework boundaries", "Data requirements"], imageAlt: "Phase icon for PHP application scoping" },
      { title: "PHASE 02: IMPLEMENT", subtitle: "Services and Persistence", price: "PHP", priceUnit: " BUILD", bodyTitle: "Implement Server Logic", description: "Build request validation, service logic and database access with explicit handling for failures and authorization decisions.", list: ["Request validation", "Service-layer logic", "Database access rules"], imageAlt: "Phase icon for PHP implementation" },
      { title: "PHASE 03: MAINTAIN", subtitle: "Tests and Deployment", price: "SHIP", priceUnit: " NOTES", bodyTitle: "Prepare Future Changes", description: "Review application tests, environment settings and migration steps so the PHP release has a practical maintenance baseline.", list: ["Application test cases", "Environment settings", "Migration instructions"], imageAlt: "Phase icon for PHP maintenance planning" }
    ]
  },
  "/services/data-warehousing/": {
    titleLead: "Data Warehousing", titleAccent: "In Delivery Stages", intro: "Bring warehouse sources, analytical models and refresh operations into one implementation plan with traceable definitions.", cta: "Scope a Data Warehouse",
    phases: [
      { title: "PHASE 01: SOURCES", subtitle: "Business Data and Grain", price: "DATA", priceUnit: " GRAIN", bodyTitle: "Establish the Inputs", description: "Identify source systems, record granularity and business definitions before designing warehouse tables and transformations.", list: ["Source-system inventory", "Record-grain decisions", "Business definitions"], imageAlt: "Phase icon for warehouse source analysis" },
      { title: "PHASE 02: MODEL", subtitle: "Pipelines and Measures", price: "LOAD", priceUnit: " PATH", bodyTitle: "Build Analytical Models", description: "Develop ingestion and transformation paths with dimensional relationships, reconciliation checks and documented measure logic.", list: ["Transformation paths", "Dimensional relationships", "Measure reconciliation"], imageAlt: "Phase icon for data warehouse modeling" },
      { title: "PHASE 03: REFRESH", subtitle: "Scheduling and Recovery", price: "OPS", priceUnit: " VIEW", bodyTitle: "Operate the Warehouse", description: "Plan refresh windows, failed-load handling and data ownership so analytical consumers understand warehouse availability.", list: ["Refresh scheduling", "Failed-load handling", "Dataset ownership"], imageAlt: "Phase icon for warehouse refresh operations" }
    ]
  },
  "/iot-engineering/": {
    titleLead: "IoT Engineering", titleAccent: "Across the Device Path", intro: "Connect device requirements to telemetry processing and field operations without separating software decisions from hardware constraints.", cta: "Outline an IoT System",
    phases: [
      { title: "PHASE 01: DEVICES", subtitle: "Hardware and Connectivity", price: "EDGE", priceUnit: " NEEDS", bodyTitle: "Define Device Behavior", description: "Identify sensing, connectivity and power constraints alongside the device events the platform needs to interpret.", list: ["Device event contracts", "Connectivity constraints", "Power-use assumptions"], imageAlt: "Phase icon for IoT device requirements" },
      { title: "PHASE 02: TELEMETRY", subtitle: "Ingestion and Commands", price: "DATA", priceUnit: " PATH", bodyTitle: "Connect Platform Logic", description: "Build ingestion, validation and command paths that account for delayed events, retries and device identity.", list: ["Telemetry validation", "Command acknowledgments", "Delayed-event handling"], imageAlt: "Phase icon for IoT telemetry processing" },
      { title: "PHASE 03: FIELD USE", subtitle: "Monitoring and Updates", price: "FLEET", priceUnit: " OPS", bodyTitle: "Prepare Field Support", description: "Review device health signals, update procedures and field diagnostics before extending the installation to more devices.", list: ["Device health signals", "Update procedures", "Field diagnostic notes"], imageAlt: "Phase icon for IoT field operations" }
    ]
  },
  "/dynamics-365-solutions/": {
    titleLead: "Dynamics 365", titleAccent: "From Process to Rollout", intro: "Organize Dynamics 365 implementation around business processes, connected records and the operational responsibilities of each team.", cta: "Plan Dynamics 365 Scope",
    phases: [
      { title: "PHASE 01: PROCESS", subtitle: "Roles and Business Records", price: "ROLE", priceUnit: " MAP", bodyTitle: "Map Business Processes", description: "Identify the relevant Dynamics applications, process owners and shared records before defining configuration boundaries.", list: ["Application selection", "Process ownership", "Shared-record mapping"], imageAlt: "Phase icon for Dynamics 365 process mapping" },
      { title: "PHASE 02: CONFIGURE", subtitle: "Workflows and Connections", price: "APP", priceUnit: " SETUP", bodyTitle: "Connect the Workflow", description: "Configure data rules and workflow steps while documenting how Dynamics exchanges information with surrounding systems.", list: ["Data validation rules", "Workflow configuration", "System connection points"], imageAlt: "Phase icon for Dynamics 365 configuration" },
      { title: "PHASE 03: ROLLOUT", subtitle: "Migration and User Checks", price: "GO", priceUnit: " REVIEW", bodyTitle: "Review Rollout", description: "Validate migration samples, user permissions and support procedures against the agreed Dynamics implementation scope.", list: ["Migration validation", "User permission checks", "Support procedures"], imageAlt: "Phase icon for Dynamics 365 rollout review" }
    ]
  },
  "/services/penetration-testing/": {
    titleLead: "Penetration Testing", titleAccent: "With Clear Boundaries", intro: "Structure an authorized assessment around an agreed scope, evidence-based findings and a documented remediation review.", cta: "Define Assessment Scope",
    phases: [
      { title: "PHASE 01: AUTHORIZE", subtitle: "Scope and Rules of Work", price: "SCOPE", priceUnit: " FIRST", bodyTitle: "Agree the Boundaries", description: "Confirm written authorization, in-scope assets, assessment windows and escalation contacts before testing starts.", list: ["Written authorization", "In-scope asset list", "Escalation contacts"], imageAlt: "Phase icon for penetration-test authorization" },
      { title: "PHASE 02: ASSESS", subtitle: "Controlled Validation", price: "TEST", priceUnit: " NOTES", bodyTitle: "Document Observed Risk", description: "Assess the authorized environment within the agreed rules and record reproducible evidence for findings and limitations.", list: ["Agreed testing limits", "Finding evidence", "Assessment limitations"], imageAlt: "Phase icon for an authorized security assessment" },
      { title: "PHASE 03: REMEDIATE", subtitle: "Priorities and Retesting", price: "FIX", priceUnit: " REVIEW", bodyTitle: "Review Corrective Work", description: "Prioritize findings with system owners, describe remediation options and retest agreed changes within the assessment scope.", list: ["Remediation priorities", "Owner action plans", "Scoped retest results"], imageAlt: "Phase icon for penetration-test remediation review" }
    ]
  },
  "/c-engineers/": {
    titleLead: "C++ Engineering", titleAccent: "From Constraints to Tests", intro: "Frame C++ work around platform limits, resource ownership and the behavior that needs to hold under representative workloads.", cta: "Define C++ Requirements",
    phases: [
      { title: "PHASE 01: CONSTRAINTS", subtitle: "Platforms and Interfaces", price: "SYS", priceUnit: " SCOPE", bodyTitle: "Identify System Limits", description: "Document operating targets, interfaces and memory or timing constraints before choosing the C++ implementation approach.", list: ["Target platform needs", "Interface contracts", "Resource constraints"], imageAlt: "Phase icon for C++ system constraints" },
      { title: "PHASE 02: IMPLEMENT", subtitle: "Ownership and Concurrency", price: "C++", priceUnit: " BUILD", bodyTitle: "Develop Core Behavior", description: "Implement system modules with explicit resource ownership, error paths and concurrency assumptions suited to the platform.", list: ["Resource ownership", "Error-handling paths", "Concurrency assumptions"], imageAlt: "Phase icon for C++ implementation" },
      { title: "PHASE 03: EXERCISE", subtitle: "Tests and Diagnostics", price: "RUN", priceUnit: " CHECK", bodyTitle: "Review Runtime", description: "Exercise boundary conditions and inspect runtime diagnostics before accepting changes to the desktop, embedded or system code.", list: ["Boundary-condition tests", "Runtime diagnostics", "Integration review"], imageAlt: "Phase icon for C++ runtime checks" }
    ]
  },
  "/java-architects/": {
    titleLead: "Java Architecture", titleAccent: "Across the Lifecycle", intro: "Turn enterprise application needs into Java service boundaries, tested integrations and operational guidance for future releases.", cta: "Outline Java Architecture",
    phases: [
      { title: "PHASE 01: BOUNDARIES", subtitle: "Domains and Contracts", price: "JAVA", priceUnit: " PLAN", bodyTitle: "Plan Enterprise Services", description: "Separate business responsibilities, data ownership and integration contracts before selecting Java application patterns.", list: ["Domain responsibilities", "Data ownership rules", "Service contracts"], imageAlt: "Phase icon for Java service boundaries" },
      { title: "PHASE 02: BUILD", subtitle: "Services and Persistence", price: "CORE", priceUnit: " LOGIC", bodyTitle: "Implement the Services", description: "Develop Java business logic, persistence and integration handling with transaction behavior that can be inspected in tests.", list: ["Business service logic", "Persistence boundaries", "Transaction test cases"], imageAlt: "Phase icon for Java service implementation" },
      { title: "PHASE 03: OPERATIONS", subtitle: "Delivery and Diagnostics", price: "OPS", priceUnit: " NOTES", bodyTitle: "Prepare Runtime Support", description: "Review deployment settings, service diagnostics and dependency changes against the Java application's operating needs.", list: ["Deployment settings", "Service diagnostics", "Dependency change review"], imageAlt: "Phase icon for Java operations planning" }
    ]
  },
  "/ar-experiences/": {
    titleLead: "AR Experiences", titleAccent: "From Scenario to Device", intro: "Plan augmented-reality work around the user's environment, spatial interactions and the devices on which the experience will run.", cta: "Scope an AR Experience",
    phases: [
      { title: "PHASE 01: SCENARIO", subtitle: "Users and Physical Context", price: "AR", priceUnit: " SCOPE", bodyTitle: "Define the Real Context", description: "Describe the training, enterprise or retail task and the physical conditions that affect the augmented experience.", list: ["User task scenarios", "Physical environment", "Device constraints"], imageAlt: "Phase icon for AR scenario planning" },
      { title: "PHASE 02: INTERACT", subtitle: "Assets and Spatial Input", price: "SPACE", priceUnit: " INPUT", bodyTitle: "Build Spatial Behavior", description: "Develop asset placement and interaction rules with attention to tracking, scale and the feedback available to users.", list: ["Asset placement rules", "Tracking assumptions", "Interaction feedback"], imageAlt: "Phase icon for AR spatial interactions" },
      { title: "PHASE 03: DEVICE QA", subtitle: "Conditions and Usability", price: "FIELD", priceUnit: " CHECK", bodyTitle: "Check Target Devices", description: "Check the AR experience on supported devices and representative surroundings, recording usability issues and tracking limits.", list: ["Supported-device checks", "Environment trials", "Usability findings"], imageAlt: "Phase icon for AR device validation" }
    ]
  },
  "/servicenow-dev/": {
    titleLead: "ServiceNow", titleAccent: "Workflow Delivery Stages", intro: "Connect ServiceNow implementation to service ownership, practical workflow rules and the people who will administer the platform.", cta: "Map ServiceNow Workflows",
    phases: [
      { title: "PHASE 01: SERVICE", subtitle: "Requests and Ownership", price: "ITSM", priceUnit: " MAP", bodyTitle: "Describe Service Work", description: "Identify request types, service owners and escalation paths before designing ServiceNow records and workflows.", list: ["Request classifications", "Service ownership", "Escalation paths"], imageAlt: "Phase icon for ServiceNow service discovery" },
      { title: "PHASE 02: WORKFLOW", subtitle: "Rules and Integrations", price: "FLOW", priceUnit: " SETUP", bodyTitle: "Set Workflow Steps", description: "Implement approvals, routing and integration behavior with an explicit record of roles and exception handling.", list: ["Approval conditions", "Assignment routing", "Integration exceptions"], imageAlt: "Phase icon for ServiceNow workflow configuration" },
      { title: "PHASE 03: HANDOVER", subtitle: "Validation and Upkeep", price: "ADMIN", priceUnit: " GUIDE", bodyTitle: "Prepare Platform Upkeep", description: "Validate service scenarios and provide configuration context for the administrators who will review future ServiceNow changes.", list: ["Service scenario checks", "Configuration notes", "Administrator handover"], imageAlt: "Phase icon for ServiceNow platform handover" }
    ]
  },
  "/azure-cloud/": {
    titleLead: "Azure Cloud", titleAccent: "From Plan to Operations", intro: "Plan Azure environments around workload requirements, resource access and the operational checks needed after deployment.", cta: "Outline Azure Requirements",
    phases: [
      { title: "PHASE 01: WORKLOAD", subtitle: "Resources and Boundaries", price: "CLOUD", priceUnit: " PLAN", bodyTitle: "Plan Azure Resources", description: "Map application dependencies, network boundaries and resource needs before choosing Azure services and environment structure.", list: ["Workload dependencies", "Network boundaries", "Resource requirements"], imageAlt: "Phase icon for Azure workload planning" },
      { title: "PHASE 02: PROVISION", subtitle: "Identity and Configuration", price: "AZURE", priceUnit: " SETUP", bodyTitle: "Configure Azure", description: "Provision the selected Azure resources with documented identity assignments, configuration settings and deployment steps.", list: ["Identity assignments", "Resource configuration", "Deployment definitions"], imageAlt: "Phase icon for Azure environment provisioning" },
      { title: "PHASE 03: OPERATE", subtitle: "Monitoring and Recovery", price: "OPS", priceUnit: " CHECK", bodyTitle: "Review Azure Operations", description: "Establish workload monitoring, recovery exercises and cost-review inputs so Azure changes can be assessed in context.", list: ["Workload monitoring", "Recovery exercises", "Cost-review inputs"], imageAlt: "Phase icon for Azure operations review" }
    ]
  },
  "/pimcore-solutions/": {
    titleLead: "Pimcore", titleAccent: "From Data to Channels", intro: "Structure Pimcore implementation around product records, asset relationships and the channels that consume governed information.", cta: "Plan Pimcore Data Work",
    phases: [
      { title: "PHASE 01: RECORDS", subtitle: "Product Data and Assets", price: "DATA", priceUnit: " SHAPE", bodyTitle: "Model Product Data", description: "Identify product attributes, asset references and ownership rules before building the Pimcore data-object structure.", list: ["Product attribute models", "Asset relationships", "Data ownership rules"], imageAlt: "Phase icon for Pimcore data modeling" },
      { title: "PHASE 02: CONNECT", subtitle: "Imports and Publishing", price: "SYNC", priceUnit: " PATH", bodyTitle: "Connect Data Channels", description: "Implement imports, validation and publishing contracts so upstream and downstream systems exchange defined records.", list: ["Import mappings", "Validation conditions", "Publishing contracts"], imageAlt: "Phase icon for Pimcore integration work" },
      { title: "PHASE 03: GOVERN", subtitle: "Review and Maintenance", price: "TEAM", priceUnit: " REVIEW", bodyTitle: "Support Data Owners", description: "Check record completeness and channel outputs with the teams responsible for maintaining product information in Pimcore.", list: ["Completeness checks", "Channel output review", "Stewardship guidance"], imageAlt: "Phase icon for Pimcore data stewardship" }
    ]
  },
  "/services/big-data/": {
    titleLead: "Big Data Services", titleAccent: "From Inputs to Insight", intro: "Define distributed data work through source characteristics, processing requirements and the evidence needed to interpret results.", cta: "Scope Big Data Processing",
    phases: [
      { title: "PHASE 01: INPUTS", subtitle: "Volume and Data Meaning", price: "DATA", priceUnit: " SCOPE", bodyTitle: "Characterize Inputs", description: "Assess source formats, arrival patterns and analytical questions before deciding how the distributed processing work should run.", list: ["Source format review", "Arrival-pattern analysis", "Analytical questions"], imageAlt: "Phase icon for big data source analysis" },
      { title: "PHASE 02: PROCESS", subtitle: "Distributed Workloads", price: "JOB", priceUnit: " FLOW", bodyTitle: "Build Processing Paths", description: "Develop partitioning and transformation steps with handling for incomplete inputs, retries and reconciliation.", list: ["Partitioning choices", "Transformation steps", "Retry and reconciliation"], imageAlt: "Phase icon for distributed data processing" },
      { title: "PHASE 03: INTERPRET", subtitle: "Results and Lineage", price: "TRACE", priceUnit: " DATA", bodyTitle: "Review Data Outputs", description: "Validate output definitions, retain source lineage and document limitations before downstream teams use the processed data.", list: ["Output definitions", "Source lineage records", "Interpretation limits"], imageAlt: "Phase icon for big data output review" }
    ]
  },
  "/services/api-development/": {
    titleLead: "API Development", titleAccent: "Across the Contract", intro: "Connect API design to consumer needs, implementation rules and the compatibility checks needed when interfaces change.", cta: "Define an API Contract",
    phases: [
      { title: "PHASE 01: CONTRACT", subtitle: "Consumers and Operations", price: "API", priceUnit: " PLAN", bodyTitle: "Define API Rules", description: "Specify operations, request shapes and consumer expectations before implementing the application integration boundary.", list: ["Consumer requirements", "Request and response shapes", "Error response contracts"], imageAlt: "Phase icon for API contract design" },
      { title: "PHASE 02: IMPLEMENT", subtitle: "Validation and Access", price: "HTTP", priceUnit: " FLOW", bodyTitle: "Build the API Boundary", description: "Implement validation, access decisions and service integration with explicit behavior for retries and partial failures.", list: ["Payload validation", "Access decision rules", "Retry behavior"], imageAlt: "Phase icon for API implementation" },
      { title: "PHASE 03: EVOLVE", subtitle: "Compatibility and Support", price: "API", priceUnit: " REVIEW", bodyTitle: "Plan API Changes", description: "Exercise contract tests and document interface versions so consumers can evaluate changes before adopting an API release.", list: ["Contract test coverage", "Versioning decisions", "Consumer documentation"], imageAlt: "Phase icon for API compatibility review" }
    ]
  },
  "/aws-infrastructure/": {
    titleLead: "AWS Infrastructure", titleAccent: "In Operating Stages", intro: "Translate workload needs into an AWS environment with defined network boundaries, deployment steps and recovery responsibilities.", cta: "Frame AWS Infrastructure",
    phases: [
      { title: "PHASE 01: DESIGN", subtitle: "Workloads and Dependencies", price: "AWS", priceUnit: " PLAN", bodyTitle: "Plan AWS Resources", description: "Identify application dependencies, network paths and workload expectations before selecting AWS resources and account boundaries.", list: ["Dependency inventory", "Network path design", "Account boundaries"], imageAlt: "Phase icon for AWS infrastructure design" },
      { title: "PHASE 02: DEPLOY", subtitle: "Provisioning and Access", price: "STACK", priceUnit: " BUILD", bodyTitle: "Define Provisioning", description: "Define resource provisioning, access policies and configuration inputs so changes to the AWS environment can be reviewed.", list: ["Provisioning definitions", "Access policy scope", "Configuration inputs"], imageAlt: "Phase icon for AWS resource provisioning" },
      { title: "PHASE 03: SUPPORT", subtitle: "Signals and Recovery", price: "RUN", priceUnit: " GUIDE", bodyTitle: "Plan Operational Checks", description: "Review service signals, recovery procedures and resource usage with the people accountable for the AWS workload.", list: ["Service health signals", "Recovery procedures", "Resource usage review"], imageAlt: "Phase icon for AWS operational support" }
    ]
  },
  "/net-experts/": {
    titleLead: ".NET Engineering", titleAccent: "From Domain to Delivery", intro: "Shape .NET development around domain behavior, data access and a release process that reflects the application's operating needs.", cta: "Discuss .NET Work",
    phases: [
      { title: "PHASE 01: DOMAIN", subtitle: "Requirements and Interfaces", price: ".NET", priceUnit: " SCOPE", bodyTitle: "Frame Application Scope", description: "Describe enterprise workflows, system interfaces and deployment constraints before organizing the .NET application.", list: ["Enterprise workflow needs", "System interface contracts", "Deployment constraints"], imageAlt: "Phase icon for .NET domain planning" },
      { title: "PHASE 02: DEVELOP", subtitle: "Services and Data Access", price: "APP", priceUnit: " LOGIC", bodyTitle: "Build Core Flows", description: "Develop .NET services, persistence and integration code with defined validation, access and exception-handling behavior.", list: ["Service implementation", "Persistence decisions", "Exception handling"], imageAlt: "Phase icon for .NET application development" },
      { title: "PHASE 03: RELEASE", subtitle: "Testing and Runtime Notes", price: "BUILD", priceUnit: " CHECK", bodyTitle: "Review Delivery", description: "Check application scenarios and deployment settings, then document the diagnostics needed to support subsequent .NET changes.", list: ["Application scenarios", "Deployment verification", "Runtime diagnostics"], imageAlt: "Phase icon for .NET delivery review" }
    ]
  },
  "/services/cybersecurity/": {
    titleLead: "Cybersecurity", titleAccent: "From Risk to Review", intro: "Relate security decisions to the systems in scope, the controls under review and the evidence available to their owners.", cta: "Outline Security Priorities",
    phases: [
      { title: "PHASE 01: CONTEXT", subtitle: "Assets and Risk Priorities", price: "RISK", priceUnit: " MAP", bodyTitle: "Define Security Context", description: "Identify critical assets, access boundaries and business concerns before defining the cybersecurity assessment or advisory scope.", list: ["Critical asset inventory", "Access boundary review", "Business risk priorities"], imageAlt: "Phase icon for cybersecurity risk context" },
      { title: "PHASE 02: ASSESS", subtitle: "Controls and Evidence", price: "CHECK", priceUnit: " SCOPE", bodyTitle: "Review Security Controls", description: "Examine agreed security controls and their supporting evidence while recording assessment limits and ownership gaps.", list: ["Control evidence review", "Ownership gaps", "Assessment boundaries"], imageAlt: "Phase icon for cybersecurity control assessment" },
      { title: "PHASE 03: IMPROVE", subtitle: "Actions and Follow-up", price: "ACT", priceUnit: " PLAN", bodyTitle: "Prioritize Improvements", description: "Translate assessment findings into prioritized actions with accountable owners and defined follow-up review steps.", list: ["Owner-assigned actions", "Remediation priorities", "Follow-up review steps"], imageAlt: "Phase icon for cybersecurity improvement planning" }
    ]
  },
  "/services/devops-consulting/": {
    titleLead: "DevOps Consulting", titleAccent: "Along the Release Path", intro: "Review how code reaches its environment, then shape automation and operating feedback around the team's delivery constraints.", cta: "Review a Delivery Pipeline",
    phases: [
      { title: "PHASE 01: DELIVERY", subtitle: "Repos and Environments", price: "FLOW", priceUnit: " MAP", bodyTitle: "Trace the Current Path", description: "Map repositories, environment handoffs and release approvals to find where delivery needs clearer responsibilities or checks.", list: ["Repository workflow review", "Environment handoffs", "Release approval points"], imageAlt: "Phase icon for DevOps delivery discovery" },
      { title: "PHASE 02: AUTOMATE", subtitle: "Builds and Deployment", price: "CI/CD", priceUnit: " STEPS", bodyTitle: "Define Pipeline Checks", description: "Develop build, test and deployment automation with explicit configuration inputs, access scope and failure handling.", list: ["Build and test stages", "Deployment automation", "Pipeline failure handling"], imageAlt: "Phase icon for DevOps pipeline automation" },
      { title: "PHASE 03: FEEDBACK", subtitle: "Operations and Recovery", price: "OPS", priceUnit: " LOOP", bodyTitle: "Connect Ops Feedback", description: "Review release signals and recovery procedures so the team can use operational findings to inform its next delivery changes.", list: ["Release health signals", "Recovery instructions", "Delivery review notes"], imageAlt: "Phase icon for DevOps operational feedback" }
    ]
  },
  "/services/microsoft-consulting/": {
    titleLead: "Microsoft Consulting", titleAccent: "From Estate to Plan", intro: "Review the Microsoft software estate through configuration, access responsibilities and the requirements that shape an adoption plan.", cta: "Outline Microsoft Priorities",
    phases: [
      { title: "PHASE 01: INVENTORY", subtitle: "Products and Requirements", price: "MS", priceUnit: " ESTATE", bodyTitle: "Understand the Estate", description: "List relevant Microsoft products, business uses and licensing assumptions before recommending configuration or administration work.", list: ["Product inventory", "Business use requirements", "Licensing assumptions"], imageAlt: "Phase icon for Microsoft estate discovery" },
      { title: "PHASE 02: ALIGN", subtitle: "Identity and Configuration", price: "ROLE", priceUnit: " SETUP", bodyTitle: "Align Administration", description: "Review identity assignments, data settings and integration boundaries against the organization's stated operating requirements.", list: ["Identity assignment review", "Data administration settings", "Integration boundaries"], imageAlt: "Phase icon for Microsoft configuration review" },
      { title: "PHASE 03: ROADMAP", subtitle: "Priorities and Ownership", price: "NEXT", priceUnit: " STEPS", bodyTitle: "Set Platform Priorities", description: "Document configuration recommendations, adoption dependencies and ownership so Microsoft platform changes can be evaluated in sequence.", list: ["Configuration priorities", "Adoption dependencies", "Ownership assignments"], imageAlt: "Phase icon for a Microsoft platform roadmap" }
    ]
  },
  "/services/infrastructure-services/": {
    titleLead: "Infrastructure", titleAccent: "From Baseline to Upkeep", intro: "Plan infrastructure work around workload dependencies, environment configuration and the operating evidence needed to support change.", cta: "Define Infrastructure Scope",
    phases: [
      { title: "PHASE 01: BASELINE", subtitle: "Workloads and Capacity", price: "SYS", priceUnit: " MAP", bodyTitle: "Establish the Baseline", description: "Inventory infrastructure dependencies and capacity assumptions across the internal or cloud environments in scope.", list: ["Infrastructure inventory", "Workload dependencies", "Capacity assumptions"], imageAlt: "Phase icon for infrastructure baseline analysis" },
      { title: "PHASE 02: CONFIGURE", subtitle: "Networks and Environments", price: "ENV", priceUnit: " BUILD", bodyTitle: "Configure Environments", description: "Configure agreed compute, network and storage changes with documented access boundaries and deployment procedures.", list: ["Compute configuration", "Network and storage scope", "Access boundary notes"], imageAlt: "Phase icon for infrastructure configuration" },
      { title: "PHASE 03: UPKEEP", subtitle: "Signals and Maintenance", price: "RUN", priceUnit: " REVIEW", bodyTitle: "Support Ongoing Upkeep", description: "Review monitoring, recovery tasks and maintenance responsibilities against the infrastructure's actual operating needs.", list: ["Monitoring requirements", "Recovery task reviews", "Maintenance ownership"], imageAlt: "Phase icon for infrastructure maintenance" }
    ]
  },
  "/services/security-testing/": {
    titleLead: "Security Testing", titleAccent: "Through Evidence Review", intro: "Link software security checks to defined access rules, representative inputs and a clear review of the findings and limits.", cta: "Set Security Test Coverage",
    phases: [
      { title: "PHASE 01: SCOPE", subtitle: "Interfaces and Permissions", price: "TEST", priceUnit: " SCOPE", bodyTitle: "Set Security Coverage", description: "Identify the application interfaces, user roles and security requirements that the authorized testing work will examine.", list: ["Interface inventory", "User-role expectations", "Security requirements"], imageAlt: "Phase icon for security test scoping" },
      { title: "PHASE 02: EXERCISE", subtitle: "Inputs and Access Checks", price: "CHECK", priceUnit: " RULES", bodyTitle: "Test Application Rules", description: "Check agreed input, session and access behaviors, retaining test conditions and evidence for each reported issue.", list: ["Input handling checks", "Session behavior review", "Access-rule verification"], imageAlt: "Phase icon for application security checks" },
      { title: "PHASE 03: VERIFY", subtitle: "Fixes and Residual Risk", price: "FIX", priceUnit: " CHECK", bodyTitle: "Review Tested Changes", description: "Retest corrective changes and describe untested areas so product owners understand what the security results do and do not cover.", list: ["Corrective change retests", "Untested-area notes", "Residual-risk review"], imageAlt: "Phase icon for security fix verification" }
    ]
  },
  "/blockchain-tech/": {
    titleLead: "Blockchain Systems", titleAccent: "From Rules to Operation", intro: "Define ledger work through transaction rules, integration boundaries and the network assumptions that affect confirmation and support.", cta: "Outline Ledger Requirements",
    phases: [
      { title: "PHASE 01: RULES", subtitle: "Participants and Records", price: "CHAIN", priceUnit: " SCOPE", bodyTitle: "Set Ledger Boundaries", description: "Identify participants, transaction records and trust assumptions before choosing what belongs on the ledger or in external storage.", list: ["Participant roles", "Transaction definitions", "On-chain data boundaries"], imageAlt: "Phase icon for blockchain scope definition" },
      { title: "PHASE 02: IMPLEMENT", subtitle: "Contracts and Connections", price: "TX", priceUnit: " FLOW", bodyTitle: "Build Transaction Rules", description: "Build transaction validation and application integrations with explicit handling for contract errors and network responses.", list: ["Validation conditions", "Contract error paths", "Application integration"], imageAlt: "Phase icon for blockchain transaction implementation" },
      { title: "PHASE 03: OPERATE", subtitle: "Confirmation and Monitoring", price: "NODE", priceUnit: " REVIEW", bodyTitle: "Review Network Rules", description: "Document confirmation rules, key responsibilities and monitoring needs using the selected network's finality assumptions.", list: ["Confirmation assumptions", "Key-management ownership", "Network monitoring needs"], imageAlt: "Phase icon for blockchain network operations" }
    ]
  },
  "/big-data-systems/": {
    titleLead: "Big Data Systems", titleAccent: "Across the Platform", intro: "Plan the data platform around repository organization, distributed execution and the operational work needed to keep datasets usable.", cta: "Plan a Data Platform",
    phases: [
      { title: "PHASE 01: PLATFORM", subtitle: "Storage and Dataset Shape", price: "LAKE", priceUnit: " PLAN", bodyTitle: "Plan Platform Storage", description: "Classify structured and unstructured datasets, retention needs and access paths before defining the repository layout.", list: ["Dataset classification", "Retention requirements", "Repository organization"], imageAlt: "Phase icon for big data platform storage planning" },
      { title: "PHASE 02: EXECUTION", subtitle: "Parallel Processing", price: "JOB", priceUnit: " GRID", bodyTitle: "Connect Data Jobs", description: "Define distributed execution, orchestration and resource boundaries around the data platform's processing dependencies.", list: ["Execution dependencies", "Orchestration steps", "Resource boundaries"], imageAlt: "Phase icon for parallel data execution" },
      { title: "PHASE 03: PLATFORM OPS", subtitle: "Lineage and Recovery", price: "DATA", priceUnit: " OPS", bodyTitle: "Plan Platform Support", description: "Review lineage, failed-job recovery and capacity signals so platform operators can trace changes and investigate interruptions.", list: ["Dataset lineage", "Failed-job recovery", "Capacity signal review"], imageAlt: "Phase icon for big data platform operations" }
    ]
  },
  "/vr-enterprise/": {
    titleLead: "Enterprise VR", titleAccent: "From Scenario to Session", intro: "Frame virtual-reality delivery around training or prototyping goals, interactive scenes and the practical limits of the target hardware.", cta: "Scope Enterprise VR",
    phases: [
      { title: "PHASE 01: SCENARIO", subtitle: "Objectives and Hardware", price: "VR", priceUnit: " SCOPE", bodyTitle: "Set the Session Goals", description: "Describe the training or layout-review task, participant needs and headset constraints before building the virtual environment.", list: ["Session objectives", "Participant requirements", "Headset constraints"], imageAlt: "Phase icon for enterprise VR scenario planning" },
      { title: "PHASE 02: SCENES", subtitle: "Interaction and Feedback", price: "SCENE", priceUnit: " FLOW", bodyTitle: "Build VR Scenes", description: "Develop scene navigation, object interactions and feedback around the actions participants need to practice or evaluate.", list: ["Scene navigation", "Object interaction rules", "Participant feedback"], imageAlt: "Phase icon for enterprise VR scene development" },
      { title: "PHASE 03: SESSIONS", subtitle: "Device Checks and Use", price: "USER", priceUnit: " TRIAL", bodyTitle: "Review the Experience", description: "Check supported hardware and representative sessions, recording comfort considerations and task-completion observations.", list: ["Supported-headset checks", "Comfort considerations", "Session observations"], imageAlt: "Phase icon for enterprise VR session review" }
    ]
  },
  "/cloud-native/": {
    titleLead: "Cloud-Native Software", titleAccent: "In Delivery Stages", intro: "Connect service design, deployment automation and operational feedback around the requirements of a cloud-hosted application.", cta: "Scope Cloud-Native Delivery",
    phases: [
      { title: "PHASE 01: SERVICES", subtitle: "Boundaries and Tenancy", price: "APP", priceUnit: " MAP", bodyTitle: "Set Service Boundaries", description: "Identify service responsibilities, tenancy requirements and data ownership before choosing the deployment architecture.", list: ["Service responsibilities", "Tenancy requirements", "Data ownership boundaries"], imageAlt: "Phase icon for cloud-native service planning" },
      { title: "PHASE 02: DELIVERY", subtitle: "Containers and Settings", price: "SHIP", priceUnit: " FLOW", bodyTitle: "Plan Deployment", description: "Prepare application packaging, environment configuration and service integration with explicit deployment and rollback steps.", list: ["Application packaging", "Environment configuration", "Rollback instructions"], imageAlt: "Phase icon for cloud-native deployment work" },
      { title: "PHASE 03: OPERATIONS", subtitle: "Observability and Failure", price: "OPS", priceUnit: " SIGNAL", bodyTitle: "Review Runtime Behavior", description: "Exercise failure scenarios and review service signals so operating assumptions are visible before expanding the deployment.", list: ["Failure scenario review", "Service signal definitions", "Operating assumptions"], imageAlt: "Phase icon for cloud-native runtime review" }
    ]
  },
  "/python-engineers/": {
    titleLead: "Python Engineering", titleAccent: "From Task to Integration", intro: "Plan Python development around automation inputs, computational logic and the interfaces that connect a script or service to daily work.", cta: "Describe Python Requirements",
    phases: [
      { title: "PHASE 01: INPUTS", subtitle: "Tasks and Data Contracts", price: "TASK", priceUnit: " SCOPE", bodyTitle: "Frame Python Work", description: "Identify automation steps, data formats and computation requirements before choosing the Python module or service structure.", list: ["Automation task steps", "Data format contracts", "Computation requirements"], imageAlt: "Phase icon for Python requirements discovery" },
      { title: "PHASE 02: LOGIC", subtitle: "Modules and Interfaces", price: "PY", priceUnit: " BUILD", bodyTitle: "Build Processing Logic", description: "Develop Python processing modules, validation and API connections with explicit error handling and dependency boundaries.", list: ["Processing modules", "Input validation", "API connection handling"], imageAlt: "Phase icon for Python implementation" },
      { title: "PHASE 03: INTEGRATE", subtitle: "Tests and Execution", price: "RUN", priceUnit: " NOTES", bodyTitle: "Check Execution", description: "Review representative test inputs, environment dependencies and execution instructions before the Python work is handed over.", list: ["Representative test inputs", "Environment dependencies", "Execution instructions"], imageAlt: "Phase icon for Python integration review" }
    ]
  },
  "/go-engineers/": {
    titleLead: "Go Engineering", titleAccent: "From Service to Runtime", intro: "Organize Go development around service contracts, concurrent work and the runtime checks needed for networked applications.", cta: "Outline Go Service Work",
    phases: [
      { title: "PHASE 01: CONTRACTS", subtitle: "Services and Dependencies", price: "GO", priceUnit: " SCOPE", bodyTitle: "Frame the Service", description: "Describe API contracts, network dependencies and processing requirements before organizing the Go service boundary.", list: ["Service API contracts", "Network dependencies", "Processing requirements"], imageAlt: "Phase icon for Go service discovery" },
      { title: "PHASE 02: DEVELOP", subtitle: "Concurrency and I/O", price: "WORK", priceUnit: " FLOW", bodyTitle: "Build Concurrent Work", description: "Build request handling and background work with explicit cancellation, error propagation and resource lifetime decisions.", list: ["Request handling", "Cancellation behavior", "Resource lifetime rules"], imageAlt: "Phase icon for concurrent Go development" },
      { title: "PHASE 03: RUNTIME", subtitle: "Tests and Diagnostics", price: "RUN", priceUnit: " TRACE", bodyTitle: "Review Service Behavior", description: "Exercise service boundaries and review runtime diagnostics so deployment choices reflect the Go application's actual workload.", list: ["Service boundary tests", "Runtime diagnostic review", "Workload observations"], imageAlt: "Phase icon for Go runtime diagnostics" }
    ]
  },
  "/mobile-devs/": {
    titleLead: "Mobile Engineering", titleAccent: "From Flow to Device", intro: "Shape mobile application work around user journeys, service connections and the conditions encountered on supported phones.", cta: "Plan Mobile Application Work",
    phases: [
      { title: "PHASE 01: JOURNEYS", subtitle: "Users and Platform Needs", price: "APP", priceUnit: " FLOWS", bodyTitle: "Map the Mobile Journey", description: "Describe mobile tasks, supported platforms and device permissions before deciding how the application flows should work.", list: ["Mobile task journeys", "Supported platform scope", "Device permission needs"], imageAlt: "Phase icon for mobile user-journey planning" },
      { title: "PHASE 02: DEVELOP", subtitle: "Screens and Service Data", price: "UI", priceUnit: " DATA", bodyTitle: "Build Connected Screens", description: "Implement screen behavior, service requests and local data handling with explicit loading, error and offline states.", list: ["Screen interaction rules", "Service request handling", "Offline-state decisions"], imageAlt: "Phase icon for mobile screen development" },
      { title: "PHASE 03: DEVICE QA", subtitle: "Conditions and Release", price: "PHONE", priceUnit: " CHECK", bodyTitle: "Check Mobile Devices", description: "Test representative devices and connectivity conditions, then document release requirements and unresolved mobile limitations.", list: ["Representative devices", "Connectivity-condition tests", "Release requirement notes"], imageAlt: "Phase icon for mobile device validation" }
    ]
  },
  "/ms-ecosystem/": {
    titleLead: "Microsoft Ecosystem", titleAccent: "Across Shared Services", intro: "Connect shared Microsoft products through an explicit view of directories, access assignments and the data each system exchanges.", cta: "Map Microsoft Connections",
    phases: [
      { title: "PHASE 01: DIRECTORY", subtitle: "Products and Identity", price: "ID", priceUnit: " MAP", bodyTitle: "Map Shared Identities", description: "Identify directory sources, shared Microsoft applications and account ownership before defining cross-product access rules.", list: ["Directory source mapping", "Application inventory", "Account ownership"], imageAlt: "Phase icon for Microsoft identity mapping" },
      { title: "PHASE 02: CONNECT", subtitle: "Access and Data Exchange", price: "SYNC", priceUnit: " RULES", bodyTitle: "Connect Product Flows", description: "Configure agreed access assignments and data exchange paths while recording the responsibilities of each connected product.", list: ["Access assignments", "Data exchange paths", "Product responsibilities"], imageAlt: "Phase icon for Microsoft product connections" },
      { title: "PHASE 03: REVIEW", subtitle: "Changes and Administration", price: "ADMIN", priceUnit: " VIEW", bodyTitle: "Review Shared Services", description: "Check account lifecycle changes, integration behavior and administration notes across the Microsoft services in scope.", list: ["Account lifecycle checks", "Integration behavior review", "Shared administration notes"], imageAlt: "Phase icon for Microsoft ecosystem administration" }
    ]
  },
  "/power-apps-dev/": {
    titleLead: "Power Apps", titleAccent: "From Form to Workspace", intro: "Plan low-code applications around the records, role-based actions and review needs of the people using an internal workspace.", cta: "Define a Power Apps Workflow",
    phases: [
      { title: "PHASE 01: WORKFLOW", subtitle: "Users and Data Sources", price: "FORM", priceUnit: " SCOPE", bodyTitle: "Map Internal Work", description: "Identify the users, record sources and approval steps that the Power Apps workspace needs to bring together.", list: ["Workspace user roles", "Record source mapping", "Approval step requirements"], imageAlt: "Phase icon for Power Apps workflow discovery" },
      { title: "PHASE 02: BUILD", subtitle: "Forms and Business Rules", price: "APP", priceUnit: " RULES", bodyTitle: "Assemble the Workspace", description: "Configure forms, connectors and validation around the agreed record model, including visible loading and error behavior.", list: ["Form configuration", "Connector requirements", "Validation and error states"], imageAlt: "Phase icon for Power Apps workspace assembly" },
      { title: "PHASE 03: REVIEW", subtitle: "Access and Ownership", price: "USER", priceUnit: " REVIEW", bodyTitle: "Check Workspace Use", description: "Review role-based tasks, data permissions and environment ownership before handing over the Power Apps application.", list: ["Role-based task checks", "Data permission review", "Environment ownership"], imageAlt: "Phase icon for Power Apps user review" }
    ]
  },
  "/wep-app-front-end/": {
    titleLead: "Web App Frontends", titleAccent: "From Flow to Release", intro: "Connect interface structure, application state and service responses to the checks needed when a web application reaches its users.", cta: "Plan Web App Frontend Work",
    phases: [
      { title: "PHASE 01: FLOWS", subtitle: "Screens and Ownership", price: "UI", priceUnit: " PLAN", bodyTitle: "Map Application Tasks", description: "Describe the screens, user actions and component responsibilities that shape the web application's frontend.", list: ["Screen and task mapping", "Component responsibilities", "Interaction requirements"], imageAlt: "Phase icon for web application interface planning" },
      { title: "PHASE 02: DATA", subtitle: "State and Service Responses", price: "APP", priceUnit: " STATE", bodyTitle: "Build Interface Flows", description: "Implement state transitions, forms and service integration with visible loading, validation and failure states.", list: ["State transition rules", "Form validation feedback", "Service response handling"], imageAlt: "Phase icon for web application state handling" },
      { title: "PHASE 03: RELEASE", subtitle: "Browsers and User Journeys", price: "WEB", priceUnit: " CHECK", bodyTitle: "Review the User Journey", description: "Check representative browsers, screen sizes and end-to-end application tasks before reviewing the frontend release.", list: ["Browser scenario checks", "Responsive task review", "Release verification notes"], imageAlt: "Phase icon for web application release verification" }
    ]
  }
};

export const pageResourcesContent: Readonly<Record<string, PageResourcesContent>> = {
  "/services/it-project-management/": {
    sidebarLead: "Plan", sidebarAccent: "Delivery", sidebarDescription: "Bring project objectives, dependencies and a relevant system URL into the discussion before defining delivery responsibilities.", imageAlt: "Illustration for IT project management", placeholder: "Project website URL", submitLabel: "Submit project website URL",
    title: "IT Project Delivery Context", introLead: "What makes a project plan usable?", introBody: "A shared view of scope, milestones, dependencies and decisions gives the delivery team a practical basis for coordinating software work.",
    cards: [
      { title: "Scope and Acceptance", description: "Define the deliverables, exclusions and acceptance conditions that establish the project's working boundaries." },
      { title: "Milestone Planning", description: "Connect milestones to reviewable outputs, owners and the dependencies that affect their sequence." },
      { title: "Dependency Coordination", description: "Identify external systems, approvals and team handoffs that can change the delivery path." },
      { title: "Progress Visibility", description: "Describe work status and blockers using evidence that stakeholders can relate to the agreed plan." },
      { title: "Change Decisions", description: "Record how proposed scope changes affect priorities, responsibilities and milestone assumptions." },
      { title: "Delivery Handover", description: "Plan the documentation, acceptance review and ownership transfer needed when project work concludes." }
    ]
  },
  "/services/agile-consulting/": {
    sidebarLead: "Review", sidebarAccent: "Team Flow", sidebarDescription: "Start with the team's delivery constraints, planning habits and product context when considering changes to agile ways of working.", imageAlt: "Illustration for agile consulting", placeholder: "Product website URL", submitLabel: "Submit product website URL",
    title: "Agile Ways of Working", introLead: "Where should an agile review begin?", introBody: "Examine how work enters the team, how priorities change and how completed work is reviewed before recommending adjustments to delivery practices.",
    cards: [
      { title: "Current Workflow", description: "Map the stages and handoffs that work actually follows, including queues and recurring blockers." },
      { title: "Backlog Decisions", description: "Review how items become ready for development and how business priorities guide their order." },
      { title: "Work in Progress", description: "Consider team capacity and competing tasks when identifying practical limits on concurrent work." },
      { title: "Feedback Loops", description: "Connect demonstrations, testing and stakeholder feedback to the team's next planning decisions." },
      { title: "Role Clarity", description: "Make product, delivery and engineering responsibilities visible without assuming one structure fits every team." },
      { title: "Adoption Review", description: "Agree how the team will evaluate a process change and adjust it using observations from real work." }
    ]
  },
  "/services/compliance-services/": {
    sidebarLead: "Frame", sidebarAccent: "Evidence", sidebarDescription: "Identify the systems, applicable requirements and evidence owners before defining a compliance-support workstream.", imageAlt: "Illustration for compliance evidence planning", placeholder: "System or policy URL", submitLabel: "Submit system or policy URL",
    title: "Compliance Support Context", introLead: "What should compliance work trace?", introBody: "Relate applicable requirements to system controls, operational evidence and accountable owners. Define the assessment scope and specialist review responsibilities alongside the technical work.",
    cards: [
      { title: "Applicable Requirements", description: "Confirm which contractual, regulatory or organizational requirements apply to the system in scope." },
      { title: "Control Mapping", description: "Connect each relevant requirement to the configuration or operating control intended to address it." },
      { title: "Evidence Ownership", description: "Identify who maintains each evidence item and what period or system boundary it represents." },
      { title: "Data Administration", description: "Review data access, retention and handling settings against the agreed requirement set." },
      { title: "Change Records", description: "Keep configuration decisions and corrective actions traceable to the controls being reviewed." },
      { title: "Review Boundaries", description: "State what was examined, what remains unverified and which decisions require qualified specialist review." }
    ]
  },
  "/node-js-experts/": {
    sidebarLead: "Scope", sidebarAccent: "Node.js", sidebarDescription: "Outline service endpoints, background tasks and database dependencies before discussing the Node.js implementation approach.", imageAlt: "Illustration for Node.js service planning", placeholder: "Application website URL", submitLabel: "Submit Node.js application URL",
    title: "Node.js Application Decisions", introLead: "What shapes a Node.js service?", introBody: "Request handling, asynchronous work and external dependencies need clear boundaries so runtime behavior can be tested and operated in the application's context.",
    cards: [
      { title: "Runtime Boundaries", description: "Separate request processing, background work and resource-intensive tasks according to workload needs." },
      { title: "Request Contracts", description: "Define route inputs, validation and error responses before connecting clients to a Node.js API." },
      { title: "Database Connections", description: "Plan database access, transaction behavior and connection handling around expected application activity." },
      { title: "Asynchronous Work", description: "Specify how jobs, retries and partial failures are handled when work continues beyond a single request." },
      { title: "Application Checks", description: "Exercise service boundaries and dependency failures with representative Node.js test scenarios." },
      { title: "Runtime Operations", description: "Document configuration, diagnostic signals and deployment steps needed to support the Node.js service." }
    ]
  },
  "/headless-cms/": {
    sidebarLead: "Plan", sidebarAccent: "Content", sidebarDescription: "Bring editorial roles, content structures and a relevant publishing URL into the headless CMS requirements discussion.", imageAlt: "Illustration for headless CMS planning", placeholder: "Publishing website URL", submitLabel: "Submit publishing website URL",
    title: "Headless CMS Planning Context", introLead: "What connects editing to delivery?", introBody: "A headless CMS needs content models, delivery contracts and publishing rules that account for both the editorial workflow and the consuming applications.",
    cards: [
      { title: "Editorial Content Models", description: "Define reusable content fields, relationships and validation around the material editors need to maintain." },
      { title: "Delivery API Contracts", description: "Specify the records and media references each consuming application expects from the CMS." },
      { title: "Media Relationships", description: "Plan asset metadata, alternative text and delivery requirements without tying the model to one page layout." },
      { title: "Preview Boundaries", description: "Clarify how authorized editors inspect draft content before it becomes available to public consumers." },
      { title: "Publishing and Refresh", description: "Define how publishing changes reach frontend caches and what happens when a refresh attempt fails." },
      { title: "Editorial Handover", description: "Document model ownership, publishing permissions and the steps needed for routine content updates." }
    ]
  },
  "/about/": {
    sidebarLead: "Know", sidebarAccent: "WPFEDEV", sidebarDescription: "Use project context, engineering priorities and collaboration needs to frame a conversation about working with WPFEDEV.", imageAlt: "Illustration for WPFEDEV agency context", placeholder: "Relevant website URL", submitLabel: "Submit relevant website URL",
    title: "Agency Context and Engineering Fit", introLead: "What should guide agency fit?", introBody: "Consider the technical work involved, the principles used to review it and the responsibilities a working relationship needs to make clear.",
    cards: [
      { title: "Company Context", description: "Relate the agency's software-delivery focus to the business problem and technical environment under discussion." },
      { title: "Engineering Principles", description: "Discuss maintainable structures, reviewable changes and the reasoning behind important implementation decisions." },
      { title: "Technical Scope", description: "Identify the application, platform or integration work that belongs within the proposed engagement." },
      { title: "Collaboration Needs", description: "Describe how product knowledge, engineering feedback and stakeholder decisions will be shared." },
      { title: "Decision Responsibilities", description: "Clarify who provides requirements, reviews technical choices and accepts completed delivery work." },
      { title: "Project Fit", description: "Compare the project's constraints and support needs with the scope being considered before making commitments." }
    ]
  },
  "/our-agency/": {
    sidebarLead: "Frame", sidebarAccent: "Team Work", sidebarDescription: "Describe the delivery scope, communication needs and ownership boundaries that an agency engagement should address.", imageAlt: "Illustration for agency delivery planning", placeholder: "Team or project URL", submitLabel: "Submit team or project URL",
    title: "How Agency Work Is Organized", introLead: "What needs to be clear in agency work?", introBody: "An engagement description connects technical responsibilities, collaboration arrangements and handoffs. Review these together with the actual skills and working context required by the project.",
    cards: [
      { title: "Delivery Scope", description: "Set out the software, configuration and advisory work included in the agency's proposed responsibility." },
      { title: "Technical Coordination", description: "Explain how application, data and infrastructure work need to connect across the project." },
      { title: "Working Arrangements", description: "Confirm communication windows and collaboration tools for the people assigned to the engagement." },
      { title: "Resource Planning", description: "Match required skills and review responsibilities to the agreed scope rather than an assumed staffing total." },
      { title: "Handoff Boundaries", description: "Document the information and access needed when work moves between agency and client teams." },
      { title: "Engagement Ownership", description: "Identify accountable contacts for priorities, technical decisions and acceptance of the delivered work." }
    ]
  },
  "/our-vision/": {
    sidebarLead: "Discuss", sidebarAccent: "Direction", sidebarDescription: "Connect longer-term software goals to the maintenance, resource-use and user needs that should influence today's design choices.", imageAlt: "Illustration for engineering direction", placeholder: "Product or service URL", submitLabel: "Submit product or service URL",
    title: "A Practical Engineering Direction", introLead: "Which principles guide future work?", introBody: "Maintainability, considered resource use and attention to user needs provide a basis for discussing technical direction. Evaluate each priority against the system's constraints and available evidence.",
    cards: [
      { title: "Maintainable Software", description: "Favor structures that make application behavior understandable to the people responsible for future changes." },
      { title: "Purposeful Technology", description: "Evaluate tools against the problem, operating constraints and skills needed to maintain the solution." },
      { title: "Considered Resource Use", description: "Review computing and storage choices using observed workload needs and the resources required to support them." },
      { title: "User-Centered Decisions", description: "Connect interface and workflow choices to the tasks people need to complete with the software." },
      { title: "Open Technical Reasoning", description: "Make assumptions and tradeoffs visible so stakeholders can understand why a direction is proposed." },
      { title: "Room for Change", description: "Account for likely integration and maintenance needs when reviewing the long-term suitability of a technical approach." }
    ]
  },
  "/quality-standards/": {
    sidebarLead: "Define", sidebarAccent: "Quality", sidebarDescription: "Identify the product risks, acceptance conditions and review evidence needed to discuss a meaningful software quality standard.", imageAlt: "Illustration for software quality review", placeholder: "Application review URL", submitLabel: "Submit application review URL",
    title: "Software Quality Review Criteria", introLead: "How should quality be evaluated?", introBody: "Use agreed acceptance conditions and traceable evidence to assess a release. Interpret test coverage, defect records and performance observations alongside the conditions in which they were collected.",
    cards: [
      { title: "Acceptance Conditions", description: "Describe the observable behavior that reviewers will use to assess whether scoped work is complete." },
      { title: "Test Coverage Context", description: "Explain which scenarios are covered and what remains untested alongside any coverage measurement." },
      { title: "Defect Classification", description: "Record severity, reproduction steps and affected workflows so defect counts have useful context." },
      { title: "Performance Conditions", description: "State the workload, environment and method behind a performance observation before interpreting it." },
      { title: "Release Evidence", description: "Connect reviewed changes, test outcomes and unresolved issues to the release under consideration." },
      { title: "Review Limitations", description: "Identify known gaps and ownership of follow-up checks instead of presenting testing as proof of defect-free software." }
    ]
  },
  "/directors/": {
    sidebarLead: "Clarify", sidebarAccent: "Leadership", sidebarDescription: "Frame leadership discussions around decision authority, technical direction and accountability for the scope under consideration.", imageAlt: "Illustration for leadership responsibilities", placeholder: "Organization website URL", submitLabel: "Submit organization website URL",
    title: "Leadership Responsibilities", introLead: "What should leadership profiles explain?", introBody: "Leadership context connects a person's role, decision responsibilities and relevant experience. Consider technical direction, delivery oversight and approval authority together when reviewing a leadership remit.",
    cards: [
      { title: "Role and Remit", description: "Identify the verified leadership role and the business or technical responsibilities within its remit." },
      { title: "Technical Direction", description: "Describe how architecture priorities and engineering decisions are reviewed at leadership level." },
      { title: "Resource Decisions", description: "Clarify who considers the skills, availability and dependencies needed to support delivery plans." },
      { title: "Escalation Ownership", description: "Make the appropriate decision path clear when project risks require leadership attention." },
      { title: "Governance Boundaries", description: "Distinguish advisory responsibilities from authority to approve commercial or technical commitments." },
      { title: "Verified Profile Details", description: "Check biography, experience and publication consent before using a leadership profile as company evidence." }
    ]
  },
  "/the-engineers/": {
    sidebarLead: "Discuss", sidebarAccent: "Skills", sidebarDescription: "Match the engineering work to relevant technical skills, review responsibilities and the evidence needed to assess project fit.", imageAlt: "Illustration for engineering roles", placeholder: "Project or portfolio URL", submitLabel: "Submit project or portfolio URL",
    title: "Engineering Roles and Practice", introLead: "What makes engineering experience relevant?", introBody: "Assess the responsibilities, technical context and work evidence that relate to the project. Relevant examples, reviewed implementation choices and verified qualifications help explain an engineer's role fit.",
    cards: [
      { title: "Application Engineering", description: "Relate implementation experience to the application workflows and platforms involved in the proposed work." },
      { title: "Architecture Responsibilities", description: "Clarify who reviews system boundaries, integration decisions and the constraints behind a design." },
      { title: "Review Practices", description: "Discuss how changes are inspected, tested and documented before they become part of the shared codebase." },
      { title: "Evidence of Skills", description: "Use relevant work examples and verified credentials when assessing an engineer's suitability for a role." },
      { title: "Code Ownership", description: "Identify maintenance responsibilities and the context needed for another engineer to continue the work." },
      { title: "Learning and Handover", description: "Plan knowledge sharing around unfamiliar systems, existing decisions and the team's support needs." }
    ]
  },
  "/case-studies/": {
    sidebarLead: "Frame", sidebarAccent: "Evidence", sidebarDescription: "Start with the project context, authorized source material and measurement conditions before presenting a delivery case study.", imageAlt: "Illustration for case-study evidence", placeholder: "Project reference URL", submitLabel: "Submit project reference URL",
    title: "Reading Project Case Studies", introLead: "What makes a case study useful?", introBody: "A credible project review connects the original problem, the work performed and the evidence for any stated outcome, including limitations and attribution.",
    cards: [
      { title: "Original Project Context", description: "Establish the system, business problem and constraints that existed before the described work began." },
      { title: "Scope of the Work", description: "Separate delivered changes from recommendations or work performed by other project contributors." },
      { title: "Before-and-After Conditions", description: "Use comparable environments and measurement methods when describing a change in runtime behavior." },
      { title: "Validation Evidence", description: "Link reported outcomes to test records, observations or approved source data that support them." },
      { title: "Attribution and Permission", description: "Confirm permission to identify a client, display project materials or attribute a statement." },
      { title: "Limits of the Outcome", description: "Explain remaining constraints and avoid presenting one project's result as a promise for another." }
    ]
  },
  "/client-feedback/": {
    sidebarLead: "Review", sidebarAccent: "Feedback", sidebarDescription: "Consider the source, project context and publication consent behind feedback before treating it as evidence of an engagement.", imageAlt: "Illustration for client-feedback context", placeholder: "Feedback source URL", submitLabel: "Submit feedback source URL",
    title: "Client Feedback in Context", introLead: "How should feedback be interpreted?", introBody: "An attributed evaluation is most useful when its source, timing and project scope are clear. Read communication and delivery observations alongside the engagement circumstances they describe.",
    cards: [
      { title: "Source Attribution", description: "Identify who provided the feedback and verify their relationship to the engagement being discussed." },
      { title: "Project and Period", description: "State which work and delivery period the evaluation covers so readers can interpret its scope." },
      { title: "Communication Themes", description: "Distinguish comments about coordination and responsiveness from claims about technical results." },
      { title: "Outcome Context", description: "Check the evidence behind any performance statement instead of treating praise as a measured benchmark." },
      { title: "Publication Consent", description: "Confirm permission for the wording, attribution and identifying details used in a published evaluation." },
      { title: "Balanced Interpretation", description: "Keep relevant limitations and context visible when feedback informs a prospective engagement decision." }
    ]
  },
  "/tech-alliances/": {
    sidebarLead: "Map", sidebarAccent: "Technology", sidebarDescription: "Discuss the platform dependencies and integration responsibilities relevant to the project without assuming a formal partner designation.", imageAlt: "Illustration for technology relationships", placeholder: "Technology reference URL", submitLabel: "Submit technology reference URL",
    title: "Technology Relationships and Fit", introLead: "What should a technology relationship show?", introBody: "Review platform suitability, integration boundaries and provider responsibilities together. Formal partnership or certification details also need an issuing source and a current, verifiable scope.",
    cards: [
      { title: "Platform Suitability", description: "Evaluate a technology against application requirements, operating constraints and maintenance responsibilities." },
      { title: "Integration Boundaries", description: "Document the interfaces through which the chosen platform exchanges data with the rest of the system." },
      { title: "Provider Responsibilities", description: "Separate managed platform responsibilities from the configuration and application work owned by the project." },
      { title: "Credential Verification", description: "Check the issuing source and current status before describing a partnership level or certification." },
      { title: "Data Exchange Rules", description: "Clarify what information crosses platform boundaries and the permissions required for that exchange." },
      { title: "Support Handoffs", description: "Identify where technical investigation moves between the project team and an external platform provider." }
    ]
  },
  "/global-presence/": {
    sidebarLead: "Plan", sidebarAccent: "Coordination", sidebarDescription: "Clarify locations, working windows and handoff needs for the actual people and systems involved in a distributed engagement.", imageAlt: "Illustration for distributed collaboration", placeholder: "Organization or project URL", submitLabel: "Submit distributed project URL",
    title: "Distributed Delivery Context", introLead: "What supports work across locations?", introBody: "Connect working arrangements, communication windows and data-handling constraints for each engagement. Review location requirements alongside the actual people and systems involved in delivery.",
    cards: [
      { title: "Working Windows", description: "Agree the hours in which participants can review work, resolve blockers and make delivery decisions." },
      { title: "Timezone Handoffs", description: "Record the context and outstanding actions needed when work passes between different working windows." },
      { title: "Communication Routes", description: "Define the channels used for routine collaboration and for issues that require timely escalation." },
      { title: "Location Requirements", description: "Confirm any location-specific access, contracting or data-residency requirements for the scoped work." },
      { title: "Support Boundaries", description: "Specify the environments, working windows and escalation responsibilities included in the support arrangement." },
      { title: "Verified Presence", description: "Check the source of office and regional contact details before using them to describe company presence." }
    ]
  },
  "/onboarding-workflow/": {
    sidebarLead: "Prepare", sidebarAccent: "Access", sidebarDescription: "Bring repository context, environment requirements and the people responsible for access into the onboarding discussion.", imageAlt: "Illustration for engineering onboarding", placeholder: "Repository or project URL", submitLabel: "Submit onboarding project URL",
    title: "Engineering Onboarding Context", introLead: "What should a handover make clear?", introBody: "An effective onboarding plan connects authorized access, local setup instructions and system context so new contributors know how to begin reviewed work.",
    cards: [
      { title: "Repository Context", description: "Identify the relevant repositories, branch practices and code ownership before assigning initial changes." },
      { title: "Authorized Access", description: "Arrange the permissions needed for the contributor's role and record who approves or removes them." },
      { title: "Local Environment", description: "Document required tools, configuration sources and the steps used to verify a working development setup." },
      { title: "System Knowledge", description: "Explain important workflows, integrations and existing decisions that affect the contributor's first tasks." },
      { title: "First Reviewed Change", description: "Choose an appropriately scoped task that exercises the team's review, test and delivery process." },
      { title: "Handover Checkpoints", description: "Confirm what context has been transferred and which setup or ownership questions remain unresolved." }
    ]
  },
  "/engagement-models/": {
    sidebarLead: "Define", sidebarAccent: "Engagement", sidebarDescription: "Clarify the scope, planning cadence and decision responsibilities before discussing how an engineering engagement should be structured.", imageAlt: "Illustration for engagement planning", placeholder: "Engagement context URL", submitLabel: "Submit engagement context URL",
    title: "Choosing an Engagement Structure", introLead: "What should the working model define?", introBody: "Relate the arrangement to how clearly scope is known, how priorities are reviewed and who accepts delivery decisions. Record commercial responsibilities alongside the agreed working model.",
    cards: [
      { title: "Scope Definition", description: "Describe whether the work follows a defined deliverable set or an evolving, prioritized backlog." },
      { title: "Planning Cadence", description: "Agree how often upcoming work, dependencies and available engineering capacity will be reviewed." },
      { title: "Role Allocation", description: "Identify the product, engineering and acceptance responsibilities expected from each participating team." },
      { title: "Change Handling", description: "Set a review path for changes that affect the agreed scope, assumptions or delivery priorities." },
      { title: "Commercial Boundaries", description: "Confirm payment and contracting terms directly rather than inferring pricing or staffing commitments." },
      { title: "Continuity and Handover", description: "Plan access, documentation and ownership transfer for the point at which the arrangement changes or ends." }
    ]
  },
  "/agile-pmo/": {
    sidebarLead: "Connect", sidebarAccent: "Milestones", sidebarDescription: "Describe the products, cross-team dependencies and reporting decisions that an agile PMO needs to bring into view.", imageAlt: "Illustration for agile portfolio coordination", placeholder: "Portfolio or program URL", submitLabel: "Submit portfolio or program URL",
    title: "Agile Portfolio Coordination", introLead: "What should a PMO make visible?", introBody: "Relate product priorities and delivery evidence to milestones, dependencies and decisions across teams. A shared view helps stakeholders interpret progress in the context of the work being coordinated.",
    cards: [
      { title: "Portfolio Priorities", description: "Connect the initiatives under review to business objectives and the reasons for their current priority." },
      { title: "Milestone Evidence", description: "Define the outputs and acceptance conditions that support a meaningful milestone status." },
      { title: "Epic Boundaries", description: "Clarify which workflows and deliverables belong to an epic before discussing its completion." },
      { title: "Cross-Team Dependencies", description: "Identify the ownership and timing assumptions behind work that depends on another team's output." },
      { title: "Risk and Decisions", description: "Record unresolved risks, escalation needs and the decisions required to move coordinated work forward." },
      { title: "Stakeholder Reporting", description: "Explain progress and changes in terms that stakeholders can trace to current delivery evidence." }
    ]
  },
  "/system-design-hub/": {
    sidebarLead: "Plan", sidebarAccent: "Architecture", sidebarDescription: "Start with the system boundary, workload assumptions and integration questions before reviewing an architecture proposal.", imageAlt: "Illustration for system design review", placeholder: "System design reference URL", submitLabel: "Submit system design URL",
    title: "System Design Review Context", introLead: "What should an architecture explain?", introBody: "Show how responsibilities, data movement and failure assumptions fit together. Connect diagrams and design decisions to the workload, operating constraints and alternatives considered.",
    cards: [
      { title: "System Boundaries", description: "Identify the responsibilities owned by each service and the interfaces through which they collaborate." },
      { title: "Data Movement", description: "Trace synchronization paths, data ownership and the conditions under which records may be delayed." },
      { title: "Storage Choices", description: "Relate persistence and caching decisions to access patterns, consistency needs and operating constraints." },
      { title: "Failure Assumptions", description: "Describe expected failure modes and how the design handles unavailable dependencies or partial work." },
      { title: "Capacity Context", description: "State the workload assumptions behind sizing choices before drawing conclusions about system capacity." },
      { title: "Decision Records", description: "Keep the alternatives, tradeoffs and reasons for important architecture choices available for later review." }
    ]
  },
  "/innovation-labs/": {
    sidebarLead: "Frame", sidebarAccent: "Experiments", sidebarDescription: "Define the question, test conditions and evidence needed before exploring an unfamiliar model, interface or software approach.", imageAlt: "Illustration for technical experimentation", placeholder: "Experiment reference URL", submitLabel: "Submit experiment reference URL",
    title: "Technical Experiment Planning", introLead: "What should an experiment establish?", introBody: "A bounded prototype can test a specific assumption about a model, workflow or spatial interaction. Its results should retain the conditions and limitations of the trial.",
    cards: [
      { title: "Testable Questions", description: "Turn an idea into a question that a bounded technical experiment can meaningfully investigate." },
      { title: "Baseline Conditions", description: "Record the existing approach or reference condition against which the experimental result will be considered." },
      { title: "Inputs and Data", description: "Identify permitted test inputs, data limitations and the preparation needed before running the trial." },
      { title: "Prototype Scope", description: "Keep the implementation focused on the assumption being tested rather than treating it as a finished product." },
      { title: "Observed Findings", description: "Describe what happened under the trial conditions and distinguish observations from broader expectations." },
      { title: "Next-Step Decisions", description: "Use the evidence and remaining uncertainties to decide whether to stop, revise or extend the experiment." }
    ]
  },
  "/delivery-framework/": {
    sidebarLead: "Trace", sidebarAccent: "Delivery", sidebarDescription: "Connect code review, environment configuration and release checks when describing the path from a proposed change to operation.", imageAlt: "Illustration for software delivery review", placeholder: "Delivery reference URL", submitLabel: "Submit delivery reference URL",
    title: "From Reviewed Change to Release", introLead: "What should a delivery framework connect?", introBody: "Make review steps, build inputs and post-release checks traceable to the intended change so each release decision can be assessed using the available evidence.",
    cards: [
      { title: "Change Review", description: "Identify the intended behavior and inspect the focused source changes before accepting them for delivery." },
      { title: "Build and Test Inputs", description: "Record the environment and configuration assumptions needed to interpret a build or test result." },
      { title: "Environment Boundaries", description: "Distinguish preview, staging and production targets so verification is applied to the intended environment." },
      { title: "Release Readiness", description: "Connect required checks and unresolved concerns to the exact revision proposed for publication." },
      { title: "Post-Release Checks", description: "Review the served behavior and relevant runtime signals after the intended release reaches its target." },
      { title: "Recovery Ownership", description: "Document the conditions, authority and instructions for restoring a previously verified release when needed." }
    ]
  },
  "/security-posture/": {
    sidebarLead: "Define", sidebarAccent: "Boundaries", sidebarDescription: "Describe the assets, access responsibilities and evidence needed to review security arrangements in their operating context.", imageAlt: "Illustration for organizational security context", placeholder: "Security context URL", submitLabel: "Submit security context URL",
    title: "Security Posture Review Context", introLead: "What does a security posture describe?", introBody: "It brings together system boundaries, control responsibilities and evidence about current practices. Review the configuration and operating context alongside the gaps that still need attention.",
    cards: [
      { title: "Asset and Network Scope", description: "Identify the systems, network boundaries and dependencies included in the security review." },
      { title: "Access Responsibilities", description: "Document who approves access, which roles require it and how account changes are reviewed." },
      { title: "Data Protection Context", description: "Relate storage and transfer protections to the data involved and the controls actually configured." },
      { title: "Secret Handling", description: "Clarify where credentials belong and who maintains the processes for their use, rotation and removal." },
      { title: "Incident Preparation", description: "Identify the reporting contacts and response responsibilities needed when a security concern is observed." },
      { title: "Evidence and Gaps", description: "Record available control evidence, its review period and unresolved gaps that need an accountable follow-up." }
    ]
  },
  "/co-innovation/": {
    sidebarLead: "Explore", sidebarAccent: "Together", sidebarDescription: "Establish the shared problem, contribution boundaries and evidence needed before pursuing a joint technical experiment.", imageAlt: "Illustration for collaborative innovation", placeholder: "Shared project URL", submitLabel: "Submit shared project URL",
    title: "Collaborative Technical Exploration", introLead: "What makes joint exploration productive?", introBody: "A shared question, clear contribution boundaries and an agreed way to evaluate findings help teams investigate difficult software and integration problems together.",
    cards: [
      { title: "Shared Problem Definition", description: "Describe the transaction, integration or workflow issue that participating teams want to investigate." },
      { title: "System Context", description: "Bring the relevant architecture, constraints and existing observations into a common technical discussion." },
      { title: "Contribution Boundaries", description: "Agree which team supplies context, implements experimental changes and reviews the resulting evidence." },
      { title: "Prototype Decisions", description: "Choose a bounded way to test the proposed approach without committing to a wider implementation prematurely." },
      { title: "Joint Findings Review", description: "Compare observations and remaining uncertainties against the question the collaboration set out to answer." },
      { title: "Transition to Delivery", description: "Define ownership, acceptance conditions and handover needs before moving a promising idea into project work." }
    ]
  },
  "/green-it/": {
    sidebarLead: "Review", sidebarAccent: "Resources", sidebarDescription: "Use workload observations and operating constraints to discuss practical computing-efficiency options and how their effects can be measured.", imageAlt: "Illustration for computing-efficiency review", placeholder: "Workload reference URL", submitLabel: "Submit workload reference URL",
    title: "Computing Resource Use in Context", introLead: "Where can efficiency work begin?", introBody: "Review what compute and storage resources do, when they are needed and how their use is measured. Evaluate changes using workload evidence and clearly defined measurement boundaries.",
    cards: [
      { title: "Workload Measurements", description: "Establish the operating period and measurements used to understand current compute and storage activity." },
      { title: "Idle Resource Review", description: "Identify resources that appear unused and confirm their dependencies before changing their availability." },
      { title: "Scheduling Choices", description: "Consider whether non-interactive work can run at appropriate times within the application's constraints." },
      { title: "Storage Lifecycle", description: "Relate retention and storage-tier choices to data access needs and the applicable handling requirements." },
      { title: "Capacity Adjustments", description: "Review sizing assumptions against observed workloads before changing resource allocations." },
      { title: "Measurement Limits", description: "Separate observed resource-use changes from broader environmental claims that need additional verified evidence." }
    ]
  },
  "/webinars-talks/": {
    sidebarLead: "Frame", sidebarAccent: "Learning", sidebarDescription: "Identify the technical topic, audience and prerequisite context before planning a talk or evaluating session materials.", imageAlt: "Illustration for technical learning sessions", placeholder: "Session reference URL", submitLabel: "Submit session reference URL",
    title: "Technical Sessions and Materials", introLead: "What should a technical session explain?", introBody: "A useful talk gives its audience a clear question, the setup needed to follow it and the limits of its examples. Session dates, speaker context and supporting materials help people judge its relevance.",
    cards: [
      { title: "Topic and Audience", description: "Describe the engineering question and the level of prior knowledge expected from participants." },
      { title: "Prerequisite Setup", description: "Identify the tools, versions and environment assumptions needed to follow a practical demonstration." },
      { title: "Session Structure", description: "Connect the explanation, demonstration and discussion to the learning objective of the proposed session." },
      { title: "Example Materials", description: "Keep code samples and configuration examples tied to their stated environment and limitations." },
      { title: "Questions and Follow-up", description: "Record the questions that need clarification and the references that support further investigation." },
      { title: "Recording Context", description: "Verify publication permission, session date and speaker attribution before presenting a recording as an available resource." }
    ]
  },
  "/press-coverage/": {
    sidebarLead: "Check", sidebarAccent: "Sources", sidebarDescription: "Retain the publication, date and source context behind a media reference before using it to describe agency coverage.", imageAlt: "Illustration for media-source review", placeholder: "Publication source URL", submitLabel: "Submit publication source URL",
    title: "Media Coverage and Attribution", introLead: "What supports a media reference?", introBody: "Review a media item through its original publication, date and reporting context. Accurate attribution helps explain the connection between the source and the announcement or event being discussed.",
    cards: [
      { title: "Publication Details", description: "Identify the outlet, author and original source before describing a media mention." },
      { title: "Dates and Context", description: "Distinguish the publication date from the date of the event or announcement being discussed." },
      { title: "Statement Accuracy", description: "Check that the summary reflects the source without extending it into an unsupported company claim." },
      { title: "Source Verification", description: "Confirm that a cited item is available and relates to the organization or project being identified." },
      { title: "Reuse Permissions", description: "Review the terms for quotations, screenshots or publication marks before reusing media material." },
      { title: "Correction Contacts", description: "Provide a clear ownership path for reviewing inaccurate attribution or outdated media references." }
    ]
  },
  "/leadership-insights/": {
    sidebarLead: "Discuss", sidebarAccent: "Decisions", sidebarDescription: "Connect a technology outlook to the evidence, constraints and organizational choices that make it relevant to a real system.", imageAlt: "Illustration for technical leadership discussion", placeholder: "Architecture context URL", submitLabel: "Submit architecture context URL",
    title: "Technical Leadership Perspectives", introLead: "What makes a technology outlook useful?", introBody: "Explain the assumptions behind an architectural view and connect it to practical tradeoffs. Forecasts and modernization recommendations should remain distinct from verified outcomes.",
    cards: [
      { title: "Architecture Tradeoffs", description: "Compare the constraints and responsibilities that shape a system decision rather than promoting one universal pattern." },
      { title: "Modernization Priorities", description: "Relate proposed platform changes to current limitations, migration dependencies and support needs." },
      { title: "Data Platform Direction", description: "Discuss storage and integration options in the context of actual data ownership and access patterns." },
      { title: "Team Implications", description: "Consider the skills, operational responsibilities and coordination a technical direction requires." },
      { title: "Evidence Behind a View", description: "Identify the observations and sources that support an opinion, along with the questions they leave open." },
      { title: "Decision Governance", description: "Describe who reviews a proposal and what evidence is needed before a strategic recommendation becomes delivery work." }
    ]
  },
  "/tech-blog/": {
    sidebarLead: "Explore", sidebarAccent: "Code", sidebarDescription: "Start with a reproducible question, the relevant code or system context and the environment in which an observation was made.", imageAlt: "Illustration for technical writing", placeholder: "Technical reference URL", submitLabel: "Submit technical reference URL",
    title: "Engineering Topics and Explanations", introLead: "What should a technical explanation show?", introBody: "Connect an implementation choice to its environment, reasoning and observed behavior. Code examples and optimization discussions need reproducible context rather than unsupported benchmark claims.",
    cards: [
      { title: "Application Structure", description: "Explain module boundaries and implementation decisions using enough context for another developer to follow the reasoning." },
      { title: "Query Behavior", description: "Relate database query changes to execution plans, input data and the conditions under which they were observed." },
      { title: "Interface Implementation", description: "Describe responsive component behavior and the user tasks that guide its layout and interaction choices." },
      { title: "Environment Assumptions", description: "State the relevant framework versions, configuration and dependencies behind a code example." },
      { title: "Operational Lessons", description: "Connect deployment or diagnostic observations to the system boundary in which they occurred." },
      { title: "Example Limitations", description: "Make omissions and tradeoffs visible so a reader can judge whether an example fits a different application." }
    ]
  },
  "/agency-updates/": {
    sidebarLead: "Review", sidebarAccent: "Changes", sidebarDescription: "Use confirmed dates, responsible owners and source records when preparing an update about agency work or operations.", imageAlt: "Illustration for agency-update context", placeholder: "Update source URL", submitLabel: "Submit update source URL",
    title: "Agency Updates with Clear Context", introLead: "What should an agency update establish?", introBody: "State what changed, when it changed and which source supports the announcement. The affected operating scope and responsible contact provide context for questions and follow-up.",
    cards: [
      { title: "Announcement Scope", description: "Define the specific change being announced and distinguish it from work still under consideration." },
      { title: "Confirmed Dates", description: "Identify when the change took effect and when the announcement was prepared or revised." },
      { title: "Team Information", description: "Verify role and staffing details with the responsible owner before describing an organizational change." },
      { title: "Platform Relationship Updates", description: "Confirm the current issuing source before announcing a partnership designation or provider status." },
      { title: "Infrastructure Context", description: "Describe the systems and operating scope affected by a confirmed infrastructure change." },
      { title: "Follow-up Ownership", description: "Identify who maintains the announcement and reviews questions or corrections about its details." }
    ]
  },
  "/press-kit/": {
    sidebarLead: "Prepare", sidebarAccent: "Media Use", sidebarDescription: "Confirm approved company information, asset versions and intended publication use before preparing materials for media work.", imageAlt: "Illustration for media-material preparation", placeholder: "Publication or asset URL", submitLabel: "Submit publication or asset URL",
    title: "Media Materials and Brand Context", introLead: "What belongs in approved media material?", introBody: "Company descriptions, brand naming and authorized visual assets need clear usage context. Review asset versions, attribution and publication requirements when preparing media materials.",
    cards: [
      { title: "Company Brief", description: "Check the current approved description of the organization before reusing it in a publication." },
      { title: "Logo Versions", description: "Identify the approved logo file and preserve its intended proportions and usage conditions." },
      { title: "Brand Naming", description: "Confirm the spelling, capitalization and attribution used when referring to the company." },
      { title: "Profile Materials", description: "Verify biography and portrait permissions before including identifying information about a representative." },
      { title: "Asset Usage Terms", description: "Clarify the permitted context and any attribution requirements for a supplied media asset." },
      { title: "Media Enquiry Context", description: "Include the publication, subject and timing needed for the responsible contact to review an enquiry." }
    ]
  },
  "/media-spokespersons/": {
    sidebarLead: "Check", sidebarAccent: "Attribution", sidebarDescription: "Establish the subject, publication context and approval responsibility before attributing a company statement to a representative.", imageAlt: "Illustration for media-representation context", placeholder: "Media enquiry URL", submitLabel: "Submit media enquiry URL",
    title: "Media Representation and Statements", introLead: "Who can speak for a subject?", introBody: "Connect representation to authorized responsibilities and relevant subject expertise. The enquiry topic, quotation context and approved attribution help define a clear company statement.",
    cards: [
      { title: "Subject Responsibility", description: "Identify the technical or organizational subject covered by the proposed statement." },
      { title: "Authorization Scope", description: "Confirm which representative is authorized to comment and the limits of that authorization." },
      { title: "Enquiry Background", description: "Provide the publication, questions and deadline needed to understand the media request." },
      { title: "Quotation Review", description: "Check the exact wording and context of a proposed quotation with the responsible representative." },
      { title: "Titles and Attribution", description: "Verify the name, role and organization details that will accompany an attributed remark." },
      { title: "Corrections and Follow-up", description: "Keep a clear review path for clarifications or corrections involving a published company statement." }
    ]
  },
  "/hiring-workflow/": {
    sidebarLead: "Understand", sidebarAccent: "Hiring", sidebarDescription: "Relate candidate materials and assessment expectations to a specific engineering role before discussing a hiring process.", imageAlt: "Illustration for engineering hiring context", placeholder: "Role or portfolio URL", submitLabel: "Submit role or portfolio URL",
    title: "Engineering Hiring Process Context", introLead: "What should candidates understand?", introBody: "Connect the role, assessment purpose and review stages in clear terms. Role-specific expectations, participation requirements and review responsibilities give candidates useful process context.",
    cards: [
      { title: "Role Requirements", description: "Identify the responsibilities and relevant technical experience against which a candidate will be reviewed." },
      { title: "Application Materials", description: "Explain which experience details or work examples are relevant to the role under consideration." },
      { title: "Assessment Purpose", description: "Clarify what a technical exercise is intended to assess and the conditions under which it will be reviewed." },
      { title: "Interview Context", description: "Connect interview topics to the engineering responsibilities rather than assuming one process fits every role." },
      { title: "Access and Adjustments", description: "Provide a way to discuss participation needs or questions about the assessment format before it begins." },
      { title: "Review and Data Handling", description: "Clarify the review responsibilities and candidate-information handling applicable to the specific recruitment process." }
    ]
  },
  "/partner-program/": {
    sidebarLead: "Discuss", sidebarAccent: "Partners", sidebarDescription: "Clarify a proposed business introduction, information-sharing consent and commercial responsibilities before considering partner terms.", imageAlt: "Illustration for business-introduction planning", placeholder: "Business reference URL", submitLabel: "Submit business reference URL",
    title: "Business Introduction Context", introLead: "What should a partner arrangement define?", introBody: "Clarify eligibility, introduction handling and commercial responsibilities together. An agreed scope and documented terms give participating organizations a basis for reviewing a proposed relationship.",
    cards: [
      { title: "Relationship Scope", description: "Describe the type of introduction or collaboration being considered before defining any partner arrangement." },
      { title: "Introduction Context", description: "Provide the business need and relevant contact permissions required to review a proposed engineering opportunity." },
      { title: "Opportunity Review", description: "Clarify how the proposed work will be assessed for scope, suitability and ownership." },
      { title: "Commercial Agreement", description: "Confirm any eligibility, incentive or payment conditions in an agreed document rather than assuming a standard reward." },
      { title: "Information Handling", description: "Identify what contact and project information may be shared and the consent supporting that exchange." },
      { title: "Ongoing Responsibilities", description: "Define who maintains the relationship and resolves questions about the introduction or agreed terms." }
    ]
  },
  "/refer-a-dev/": {
    sidebarLead: "Frame", sidebarAccent: "Referrals", sidebarDescription: "Connect a developer's relevant experience to the role context while confirming consent to share their information.", imageAlt: "Illustration for developer-referral context", placeholder: "Candidate portfolio URL", submitLabel: "Submit candidate portfolio URL",
    title: "Developer Referral Considerations", introLead: "What makes a referral relevant?", introBody: "Connect a developer's experience to a specific role and confirm consent to share their information. Role criteria, review responsibilities and agreed referral terms provide the context for an introduction.",
    cards: [
      { title: "Role Alignment", description: "Relate the developer's experience to the responsibilities and technical context of the role in question." },
      { title: "Candidate Consent", description: "Confirm permission before sharing a person's contact details, portfolio or employment information." },
      { title: "Experience Evidence", description: "Use relevant work examples and verified qualifications instead of assuming a certification from a role label." },
      { title: "Referral Review", description: "Clarify who reviews the introduction and what further information may be needed to assess suitability." },
      { title: "Incentive Conditions", description: "Check whether an agreed incentive applies and what its actual eligibility conditions are before making a promise." },
      { title: "Candidate Information", description: "Keep the purpose and handling of referral information clear throughout the review process." }
    ]
  },
  "/endorsements/": {
    sidebarLead: "Verify", sidebarAccent: "Sources", sidebarDescription: "Review the issuing source, date, scope and publication permission behind a recommendation before treating it as organizational evidence.", imageAlt: "Illustration for endorsement verification", placeholder: "Recommendation source URL", submitLabel: "Submit recommendation source URL",
    title: "Endorsements and Their Evidence", introLead: "What supports an endorsement?", introBody: "A recommendation is best understood through its source, date and the work it recognizes. Attribution, scope and publication permission provide context for interpreting the statement.",
    cards: [
      { title: "Issuing Source", description: "Identify the person or organization responsible for the recommendation and verify its origin." },
      { title: "Recognized Scope", description: "Describe the particular work or capability addressed without extending the recommendation beyond its wording." },
      { title: "Date and Relevance", description: "State when the recommendation was issued and consider whether its context remains applicable." },
      { title: "Attribution Accuracy", description: "Preserve the approved attribution and avoid changing a recommendation into a broader performance claim." },
      { title: "Permission to Publish", description: "Confirm the rights to use the wording, identifying details and any associated organization mark." },
      { title: "Evidence Boundaries", description: "Distinguish an attributed opinion from independently measured delivery results or formal certification." }
    ]
  },
  "/industry-awards/": {
    sidebarLead: "Review", sidebarAccent: "Recognition", sidebarDescription: "Confirm the award issuer, recipient, category and supporting record before describing an item as company recognition.", imageAlt: "Illustration for award-evidence review", placeholder: "Award issuer source URL", submitLabel: "Submit award issuer source URL",
    title: "Recognition and Review Context", introLead: "What should an award entry establish?", introBody: "Recognition is best understood through its issuer, recipient, category and year. Relate an entry to the source record and published selection criteria when considering what the recognition covers.",
    cards: [
      { title: "Issuer Verification", description: "Check the organization operating the award and locate the source record for the claimed recognition." },
      { title: "Recipient Identity", description: "Confirm that the named recipient is the company or individual being described in the entry." },
      { title: "Category and Year", description: "Keep the award category, edition and date explicit so the recognition is presented in its proper scope." },
      { title: "Selection Context", description: "Describe the published selection criteria where available without implying a wider technical validation." },
      { title: "Marks and Usage", description: "Verify the permission and conditions for displaying an award name, logo or recognition badge." },
      { title: "Claim Limitations", description: "Avoid turning an award entry into an unsupported promise about future delivery, quality or business outcomes." }
    ]
  },
  "/careers-portal/": {
    sidebarLead: "Explore", sidebarAccent: "Role Fit", sidebarDescription: "Relate your experience, portfolio and working requirements to a verified engineering vacancy before preparing an application.", imageAlt: "Illustration for engineering career context", placeholder: "Portfolio website URL", submitLabel: "Submit portfolio website URL",
    title: "Engineering Career Information", introLead: "What should a vacancy explain?", introBody: "A role description connects responsibilities, relevant experience and working arrangements. Review the current vacancy details and application route when assessing whether a position fits your background.",
    cards: [
      { title: "Verified Role Details", description: "Confirm the position title, responsibilities and current vacancy status before treating a role as available." },
      { title: "Technical Experience", description: "Connect the required skills to the application, platform or system work involved in that particular role." },
      { title: "Working Arrangements", description: "Clarify location, working windows and collaboration expectations using the actual vacancy information." },
      { title: "Relevant Work Examples", description: "Choose portfolio material that demonstrates the responsibilities the engineering role requires." },
      { title: "Application Process", description: "Use the confirmed application route and review stages associated with the specific open position." },
      { title: "Candidate Questions", description: "Identify missing role details or participation needs that should be clarified before a recruitment assessment." }
    ]
  },
  "/headless-wordpress-front-end/": {
    sidebarLead: "Plan", sidebarAccent: "WordPress", sidebarDescription: "Describe editorial needs, application consumers and publishing requirements before deciding how a headless WordPress frontend should connect.", imageAlt: "Illustration for headless WordPress planning", placeholder: "WordPress website URL", submitLabel: "Submit WordPress website URL",
    title: "Headless WordPress Decisions", introLead: "What connects WordPress to a frontend?", introBody: "A decoupled WordPress setup uses defined content APIs, publishing rules and preview access to connect familiar editing tools to a separately delivered application.",
    cards: [
      { title: "WordPress Content Models", description: "Map post types, fields and relationships to the information the frontend needs to present." },
      { title: "Content API Choices", description: "Review the required records and access behavior when choosing WordPress REST or GraphQL delivery paths." },
      { title: "Draft Preview Access", description: "Define how authorized editors inspect unpublished WordPress content in the separate frontend." },
      { title: "Publishing and Cache Rules", description: "Connect WordPress publishing events to frontend refresh behavior and recovery from failed updates." },
      { title: "Plugin and Theme Boundaries", description: "Check which existing WordPress features supply data and which depend on theme-rendered pages." },
      { title: "Frontend Release Checks", description: "Review content routes, media references and editorial scenarios before releasing a headless WordPress change." }
    ]
  }
};

const fallbackPhases: ArchitecturePhasesContent = {
  titleLead: "Engineering Work", titleAccent: "From Scope to Review", intro: "Connect the problem, implementation boundaries and review evidence before agreeing the next steps for a software project.", cta: "Outline Project Requirements",
  phases: [
    { title: "PHASE 01: SCOPE", subtitle: "Goals and Constraints", price: "PLAN", priceUnit: " SCOPE", bodyTitle: "Describe the Work", description: "Identify the users, system boundaries and constraints that define the engineering task under discussion.", list: ["User requirements", "System boundaries", "Project constraints"], imageAlt: "Phase icon for engineering scope" },
    { title: "PHASE 02: BUILD", subtitle: "Implementation and Checks", price: "WORK", priceUnit: " STEPS", bodyTitle: "Connect the Changes", description: "Organize implementation and verification around the interfaces and behavior included in the agreed scope.", list: ["Implementation steps", "Interface decisions", "Verification scenarios"], imageAlt: "Phase icon for engineering implementation" },
    { title: "PHASE 03: REVIEW", subtitle: "Evidence and Ownership", price: "NEXT", priceUnit: " REVIEW", bodyTitle: "Review the Outcome", description: "Describe the completed work, remaining questions and ownership needed for its next stage of use or maintenance.", list: ["Reviewed outcomes", "Remaining questions", "Maintenance ownership"], imageAlt: "Phase icon for engineering review" }
  ]
};
const fallbackResources: PageResourcesContent = {
  sidebarLead: "Plan", sidebarAccent: "Your Project", sidebarDescription: "Describe the system context and intended work before discussing the requirements of a software engagement.", imageAlt: "Illustration for software project planning", placeholder: "Relevant project URL", submitLabel: "Submit relevant project URL", title: "Engineering Project Context", introLead: "What information helps define the work?", introBody: "Bring the intended behavior, technical boundaries and review responsibilities together when considering a software project.",
  cards: [
    { title: "Project Requirements", description: "Identify the business tasks and user needs that the scoped engineering work should address." },
    { title: "Existing Systems", description: "Describe the application environment and dependencies relevant to the proposed change." },
    { title: "Integration Boundaries", description: "Clarify the data and responsibilities that cross an interface between connected systems." },
    { title: "Review Evidence", description: "Agree the checks and observations needed to assess the work within its intended context." },
    { title: "Delivery Ownership", description: "Identify the people responsible for priorities, technical decisions and acceptance reviews." },
    { title: "Ongoing Maintenance", description: "Consider the documentation and operational context required to support the resulting software." }
  ]
};
const pathKey = (path?: string | null) => {
  const clean = (path || "/").trim().split(/[?#]/)[0].replace(/^\/+|\/+$/g, "").toLowerCase();
  return clean ? `/${clean}/` : "/";
};
export function getArchitecturePhasesContent(path?: string | null): ArchitecturePhasesContent {
  return architecturePhasesContent[pathKey(path)] || fallbackPhases;
}
export function getPageResourcesContent(path?: string | null): PageResourcesContent {
  return pageResourcesContent[pathKey(path)] || fallbackResources;
}
