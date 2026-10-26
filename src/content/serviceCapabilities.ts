type Four<T> = readonly [T, T, T, T];

export interface CapabilityCard {
  title: string;
  description: string;
  bullets: Four<string>;
}
export interface FourBoxesContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  cards: Four<CapabilityCard>;
}

const card = (title: string, description: string, bullets: Four<string>): CapabilityCard => ({ title, description, bullets });
const boxes = (titleLead: string, titleAccent: string, intro: string, cards: Four<CapabilityCard>): FourBoxesContent => ({ titleLead, titleAccent, intro, cards });

export const fourBoxesContent: Readonly<Record<string, FourBoxesContent>> = {
  "/services/data-analytics/": boxes("Data Analytics", "Across the Evidence Chain", "Connect business questions to usable records, consistent calculations and findings that retain their source context.", [
    card("Source Context", "Identify the records behind an analysis and document what each observation represents.", ["Source ownership", "Record definitions", "Collection periods", "Coverage notes"]),
    card("Data Preparation", "Make cleanup and transformation choices visible before using records in an analytical comparison.", ["Missing-value checks", "Field normalization", "Transformation rules", "Preparation history"]),
    card("Comparable Measures", "Define populations, units and time windows so comparisons describe the same business activity.", ["Population boundaries", "Measurement units", "Comparison windows", "Calculation examples"]),
    card("Interpretable Findings", "Present analytical results with the assumptions and limitations needed for a business review.", ["Finding definitions", "Source references", "Interpretation limits", "Decision questions"]),
  ]),
  "/services/data-science/": boxes("Data Science", "With a Defined Research Task", "Shape statistical and predictive work around the question, available observations and evidence needed to evaluate a result.", [
    card("Problem Framing", "Translate the research question into a modeling task with explicit targets and evaluation expectations.", ["Research objectives", "Target definitions", "Baseline choices", "Evaluation criteria"]),
    card("Modeling Inputs", "Review observations and features for relevance, missing information and possible data leakage.", ["Feature preparation", "Label inspection", "Leakage checks", "Dataset separation"]),
    card("Model Evaluation", "Compare candidate behavior on suitable evaluation data and inspect the errors behind summary measures.", ["Candidate comparisons", "Error analysis", "Validation samples", "Assumption review"]),
    card("Research Handover", "Keep analytical methods and their operating limits understandable to the team using the findings.", ["Method documentation", "Reproducible steps", "Result context", "Further investigation"]),
  ]),
  "/services/database-development/": boxes("Database Development", "Clear Data Models", "Connect database models, query responsibilities and operational requirements before choosing how records are stored and accessed.", [
    card("Data Models", "Define entities, relationships and constraints around the information the application must maintain.", ["Entity relationships", "Key selection", "Constraint rules", "Schema ownership"]),
    card("Query Design", "Review common reads and updates with their filters, expected record volumes and access patterns.", ["Query requirements", "Index candidates", "Execution-plan review", "Update patterns"]),
    card("Data Integrity", "Make validation, transaction boundaries and change behavior explicit where records are modified.", ["Validation boundaries", "Transaction scope", "Consistency checks", "Migration review"]),
    card("Database Operations", "Plan how the database is configured, observed and recovered within its operating environment.", ["Backup requirements", "Recovery exercises", "Access configuration", "Operational diagnostics"]),
  ]),
  "/m365-sharepoint/": boxes("SharePoint Workspaces", "Shared Content", "Organize collaborative portals, documents and internal resources with clear publishing and access responsibilities.", [
    card("Workspace Structure", "Arrange sites, libraries and navigation around how teams find and maintain shared information.", ["Site organization", "Library structure", "Resource navigation", "Content ownership"]),
    card("Document Work", "Connect document metadata and review states to the teams responsible for keeping material current.", ["Document categories", "Version context", "Review responsibilities", "Publication states"]),
    card("Staff Access", "Define who can read, contribute and administer information across the SharePoint workspace.", ["Group responsibilities", "Contribution permissions", "Sensitive libraries", "Access review"]),
    card("Process Connections", "Link internal forms and collaboration tasks to the records and handoffs they support.", ["Form requirements", "Approval handoffs", "Workspace integrations", "Support ownership"]),
  ]),
  "/services/it-outsourcing/": boxes("IT Outsourcing", "With Clear Service Ownership", "Define delegated technology work through agreed scope, operating responsibilities and reviewable handoffs.", [
    card("Service Boundaries", "Specify the systems, tasks and dependencies covered by the outsourcing arrangement.", ["Delegated activities", "System inventory", "Dependency mapping", "Scope exclusions"]),
    card("Operating Handover", "Connect runbooks and access requirements to the people taking responsibility for the service.", ["Runbook transfer", "Authorized access", "Support contacts", "Handover checks"]),
    card("Delivery Coordination", "Keep incidents, maintenance work and decisions visible across internal and delegated teams.", ["Work-item ownership", "Escalation routes", "Maintenance planning", "Decision records"]),
    card("Service Review", "Review the arrangement using agreed reporting definitions and the work completed within its scope.", ["Reporting definitions", "Open issue review", "Change requests", "Service follow-up"]),
  ]),
  "/services/testing-and-qa/": boxes("Testing and QA", "Across Expected and Edge Cases", "Connect test coverage to product behavior, operating conditions and the evidence needed to review a release.", [
    card("Test Planning", "Identify user journeys, integration boundaries and risks that should guide the testing effort.", ["Behavior inventory", "Risk-based priorities", "Acceptance examples", "Environment needs"]),
    card("Manual Investigation", "Explore real task flows and unexpected states with reproducible observations and useful context.", ["Exploratory sessions", "Input variations", "Reproduction steps", "Usability observations"]),
    card("Automated Checks", "Choose repeatable checks around stable behavior and maintain their fixtures and expected outcomes.", ["Regression scenarios", "Test-data fixtures", "Assertion review", "Failure diagnostics"]),
    card("Release Evidence", "Keep findings and unresolved issues connected to the build and behavior that were evaluated.", ["Build references", "Defect context", "Retest outcomes", "Known limitations"]),
  ]),
  "/services/software-development/": boxes("Custom Software", "From Scope to Operation", "Build enterprise applications around defined user tasks, service boundaries and the work needed to maintain them.", [
    card("Application Scope", "Turn operational requirements into explicit user journeys, data responsibilities and acceptance examples.", ["Business workflows", "User responsibilities", "Acceptance boundaries", "Delivery increments"]),
    card("Service Design", "Organize application rules and interfaces so connected parts have clear responsibilities.", ["Domain models", "Service contracts", "State transitions", "Integration dependencies"]),
    card("Implementation Checks", "Review implemented behavior across normal, unsuccessful and recovery paths before release.", ["Functional checks", "Integration scenarios", "Input validation", "Recovery behavior"]),
    card("Operating Handover", "Include deployment and support context in the application work delivered to the operating team.", ["Deployment configuration", "Diagnostic records", "Maintenance guidance", "Support responsibilities"]),
  ]),
  "/services/it-support/": boxes("IT Support", "With Incident Context", "Connect reported technology issues to triage, investigation and the follow-up required to restore the affected work.", [
    card("Issue Intake", "Capture the affected system, symptoms and business task so a support request has usable context.", ["Affected systems", "Symptom records", "Request classification", "Business impact"]),
    card("Triage and Routing", "Assign investigation responsibilities using the issue scope and the dependencies it involves.", ["Initial checks", "Responsible teams", "Escalation context", "Dependency review"]),
    card("Resolution Work", "Record the actions taken and verify the relevant user task after a change or workaround.", ["Investigation notes", "Workaround context", "Change records", "Outcome confirmation"]),
    card("Support Learning", "Turn recurring issues and unresolved questions into maintainable support information.", ["Recurring patterns", "Knowledge entries", "Open follow-up", "Ownership updates"]),
  ]),
  "/services/desktop-development/": boxes("Desktop Applications", "Workstation Tasks", "Connect local interfaces, application data and operating-system dependencies around the work desktop users need to complete.", [
    card("Desktop Journeys", "Model workstation tasks and application states with clear navigation and input feedback.", ["Task-focused screens", "Input handling", "Window interactions", "User-state feedback"]),
    card("Local Data Work", "Define how records are stored, validated and exchanged when the application works with local data.", ["Local persistence", "Record validation", "Import requirements", "Sync expectations"]),
    card("System Connections", "Document the devices, services and operating-system features the desktop workflow depends on.", ["Device interfaces", "Service exchange", "Platform permissions", "Dependency configuration"]),
    card("Application Delivery", "Plan installation, update behavior and diagnostics for the supported desktop environments.", ["Installation packages", "Update handling", "Environment checks", "Desktop diagnostics"]),
  ]),
  "/computer-vision/": boxes("Computer Vision", "With Visual Evidence in View", "Define image-processing work through the inspection task, representative material and review of uncertain detections.", [
    card("Inspection Definition", "Specify what the system should identify and the image conditions relevant to that visual task.", ["Object categories", "Inspection boundaries", "Capture conditions", "Review expectations"]),
    card("Image Preparation", "Keep image sources and annotation choices connected to the data used for training and evaluation.", ["Image provenance", "Annotation rules", "Dataset variation", "Sample separation"]),
    card("Detection Review", "Inspect model errors with their source images and the context of the intended operating environment.", ["Detection examples", "Missed cases", "False detections", "Uncertainty context"]),
    card("Workflow Integration", "Connect visual findings to the interface or operator action that follows the inspection.", ["Result presentation", "Source-image links", "Operator confirmation", "Exception routing"]),
  ]),
  "/salesforce-tech/": boxes("Salesforce Solutions", "Connected CRM Work", "Shape Salesforce configuration and integration around customer records, team responsibilities and the sales or service journey.", [
    card("CRM Configuration", "Match Salesforce record structures and field definitions to the business process being supported.", ["Record relationships", "Field requirements", "Process terminology", "Configuration review"]),
    card("Workflow Rules", "Define how CRM actions move through approval, assignment and completion states.", ["Assignment conditions", "Approval stages", "Action permissions", "Workflow exceptions"]),
    card("Platform Integration", "Connect external services through defined identifiers, exchange formats and failure handling.", ["External identifiers", "Exchange contracts", "Sync responsibilities", "Integration failures"]),
    card("Change Validation", "Check configuration changes against representative customer records and team-specific use cases.", ["CRM test scenarios", "Role-aware checks", "Release notes", "Administrator handover"]),
  ]),
  "/php-engineers/": boxes("PHP Engineering", "For Maintainable Web Services", "Build PHP applications and portals around explicit request handling, persistence and service responsibilities.", [
    card("Web Application Logic", "Organize request handling and business rules around the tasks the PHP application performs.", ["Route responsibilities", "Request validation", "Business-rule modules", "Response handling"]),
    card("Database Interaction", "Connect application records to persistence rules and reviewable query behavior.", ["Data-access boundaries", "Query parameters", "Transaction handling", "Schema changes"]),
    card("Portal Integrations", "Define the identity and data contracts used when PHP services connect a portal to other systems.", ["Session context", "Protected actions", "External API calls", "Error responses"]),
    card("PHP Delivery Checks", "Review application behavior, runtime configuration and maintenance needs together before handover.", ["Runtime requirements", "Application tests", "Dependency review", "Diagnostic guidance"]),
  ]),
  "/services/data-warehousing/": boxes("Data Warehousing", "Source to Reporting", "Connect warehouse architecture to source definitions, transformation rules and the reporting questions it needs to support.", [
    card("Warehouse Models", "Define reporting grain, dimensions and relationships before consolidating source information.", ["Reporting grain", "Dimension definitions", "Fact relationships", "Historical context"]),
    card("Loading Pipelines", "Make extraction and loading steps explicit, including how failures and repeated loads are handled.", ["Source extraction", "Load sequencing", "Incremental updates", "Failed-load recovery"]),
    card("Data Reconciliation", "Compare warehouse records with their source totals and transformation expectations.", ["Record-count checks", "Measure reconciliation", "Transformation evidence", "Data-quality exceptions"]),
    card("Warehouse Operations", "Plan ownership of refresh schedules, data visibility and investigation of reporting discrepancies.", ["Refresh ownership", "Access boundaries", "Pipeline diagnostics", "Reporting support"]),
  ]),
  "/iot-engineering/": boxes("IoT Engineering", "Across Devices and Platforms", "Connect physical-device information to network exchange, platform records and the actions that follow an observed event.", [
    card("Device Context", "Define identifiers, signal units and operating conditions for the devices in the IoT system.", ["Device identities", "Sensor units", "Capture intervals", "Operating conditions"]),
    card("Message Exchange", "Specify how device messages reach the platform and how missing or repeated transmissions are handled.", ["Message formats", "Transport choices", "Connectivity gaps", "Repeated-message handling"]),
    card("Platform Records", "Keep observations connected to the device and time context needed for application processing.", ["Observation timestamps", "Device-state records", "Data retention needs", "Platform interfaces"]),
    card("Operational Actions", "Link device events and alerts to clear investigation, configuration and maintenance responsibilities.", ["Event interpretation", "Alert ownership", "Configuration changes", "Field follow-up"]),
  ]),
  "/services/machine-learning/": boxes("Machine Learning", "Around the Prediction Task", "Connect model inputs and evaluation choices to the operational decision a prediction is intended to support.", [
    card("Prediction Requirements", "Specify the target, available information and outcome against which the model will be reviewed.", ["Prediction targets", "Available inputs", "Baseline behavior", "Use-case constraints"]),
    card("Training Preparation", "Review feature and label choices alongside the boundaries between training and evaluation data.", ["Feature definitions", "Label consistency", "Training partitions", "Leakage prevention checks"]),
    card("Behavior Evaluation", "Examine model errors and representative operating cases before connecting output to application actions.", ["Evaluation cases", "Error categories", "Operating variation", "Model limitations"]),
    card("Prediction Integration", "Define the service responses and review paths needed when the model is used in a business workflow.", ["Prediction contracts", "Output interpretation", "Unsuccessful inference", "Human-review paths"]),
  ]),
  "/marketing-software/": boxes("Marketing Platforms", "Campaign Coordination", "Connect audience records, campaign content and reporting events through explicit scheduling and automation rules.", [
    card("Audience Records", "Organize campaign audiences around defined attributes, eligibility and communication preferences.", ["Audience attributes", "Segment rules", "Contact preferences", "Eligibility changes"]),
    card("Campaign Operations", "Keep content versions, channels and approval steps connected to the campaign being delivered.", ["Campaign versions", "Channel requirements", "Editorial approvals", "Delivery schedules"]),
    card("Automation Behavior", "Define triggers, permitted actions and exits so automated campaign work can be inspected.", ["Trigger definitions", "Automation boundaries", "Exit conditions", "Action history"]),
    card("Marketing Reporting", "Show campaign activity with the event definitions and attribution assumptions behind each measure.", ["Event terminology", "Attribution context", "Reporting periods", "Source-coverage review"]),
  ]),
  "/dynamics-365-solutions/": boxes("Dynamics 365", "For Connected Business Processes", "Align Dynamics 365 configuration and exchanged records with the departments and workflows the implementation supports.", [
    card("Process Configuration", "Translate department requirements into record fields, workflow states and responsibility rules.", ["Department requirements", "Record configuration", "Workflow states", "Role responsibilities"]),
    card("Business Data", "Define shared records and migration expectations before moving information into the configured system.", ["Master-data definitions", "Migration mapping", "Duplicate review", "Data validation"]),
    card("System Exchange", "Connect Dynamics 365 records to external applications with explicit ownership of each exchange.", ["Integration mappings", "Record identifiers", "Exchange ownership", "Sync exceptions"]),
    card("Implementation Review", "Check configured behavior using the users, permissions and business examples relevant to the rollout.", ["User-task scenarios", "Permission review", "Rollout increments", "Operational guidance"]),
  ]),
  "/services/web-development/": boxes("Web Development", "Complete User Journeys", "Connect responsive pages, application services and content delivery to the tasks people need to complete on the web.", [
    card("Page and Task Structure", "Organize web content and application screens around clear navigation and meaningful document structure.", ["Page relationships", "Semantic structure", "Content hierarchy", "Navigation context"]),
    card("Interactive Workflows", "Coordinate forms, interface state and asynchronous responses across expected and unsuccessful journeys.", ["Form feedback", "Loading states", "Service responses", "Recovery paths"]),
    card("Web Service Connections", "Define how browser-facing features exchange records with application services and content sources.", ["API requirements", "Content contracts", "Input checks", "Data-change behavior"]),
    card("Cross-screen Review", "Check content, controls and task completion across the devices and input methods in the project scope.", ["Responsive checks", "Keyboard interactions", "Media alternatives", "Browser coverage"]),
  ]),
  "/services/penetration-testing/": boxes("Penetration Testing", "Agreed Test Boundaries", "Frame authorized security testing around defined targets, reproducible findings and the evidence required for remediation review.", [
    card("Engagement Scope", "Agree on the systems, permitted testing activity and communication responsibilities before assessment.", ["Authorized targets", "Testing boundaries", "Engagement contacts", "Handling requirements"]),
    card("Controlled Assessment", "Investigate relevant application and access behavior within the agreed testing conditions.", ["Exposure review", "Access behavior", "Input boundaries", "Assessment notes"]),
    card("Finding Evidence", "Document observed weaknesses with their conditions and potential impact without overstating coverage.", ["Reproduction context", "Affected components", "Evidence references", "Impact explanation"]),
    card("Remediation Review", "Connect reported findings to responsible owners and focused checks after a corrective change.", ["Remediation ownership", "Change references", "Retest scope", "Remaining limitations"]),
  ]),
  "/services/software-consulting/": boxes("Software Consulting", "Technical Decisions", "Connect architecture advice and delivery recommendations to the requirements, constraints and tradeoffs of the software project.", [
    card("Requirement Discovery", "Clarify the business task, existing system context and constraints behind a technology decision.", ["Business requirements", "System context", "Operating constraints", "Stakeholder questions"]),
    card("Architecture Options", "Compare service and data boundaries against the behavior and dependencies the application needs.", ["Architecture alternatives", "Dependency tradeoffs", "Data responsibilities", "Interface boundaries"]),
    card("Delivery Planning", "Turn technical choices into staged work with acceptance expectations and identified decision owners.", ["Implementation stages", "Acceptance expectations", "Decision ownership", "Delivery dependencies"]),
    card("Technical Handover", "Keep recommendations and their assumptions understandable to the team implementing or operating the system.", ["Decision rationale", "Assumption records", "Review checkpoints", "Follow-up questions"]),
  ]),
  "/services/application-services/": boxes("Application Services", "Change and Support", "Coordinate application development, integration and maintenance around the behavior the business needs to preserve.", [
    card("Application Assessment", "Identify essential workflows and dependencies before planning a change to an existing application.", ["Workflow inventory", "Dependency context", "Current limitations", "Change requirements"]),
    card("Feature Delivery", "Develop application capabilities through defined service contracts and reviewable increments.", ["Feature boundaries", "Service interfaces", "Increment reviews", "Acceptance records"]),
    card("Integration Work", "Connect application data and actions to external services with clear failure and ownership rules.", ["Connected systems", "Data-exchange rules", "Failure handling", "Integration ownership"]),
    card("Lifecycle Support", "Keep maintenance tasks and operational knowledge connected to the application version in use.", ["Issue investigation", "Release context", "Maintenance priorities", "Support documentation"]),
  ]),
  "/c-engineers/": boxes("C++ Engineering", "For Explicit System Behavior", "Develop desktop, embedded and system-level software around resource ownership, interface contracts and supported operating conditions.", [
    card("System Responsibilities", "Define the processing task and boundaries between C++ modules, platforms and connected devices.", ["Module boundaries", "Platform requirements", "Device contracts", "Processing tasks"]),
    card("Resource Management", "Make object lifetimes and shared-resource responsibilities explicit in the implementation design.", ["Object lifetimes", "Ownership rules", "Memory-use review", "Shared-resource access"]),
    card("Native Integration", "Connect native code to application and hardware interfaces with defined data and failure behavior.", ["Native interfaces", "Data-format boundaries", "Hardware dependencies", "Error propagation"]),
    card("Build and Verification", "Review builds and runtime behavior for the operating environments and usage conditions in scope.", ["Build configuration", "Runtime checks", "Boundary-case tests", "Diagnostic context"]),
  ]),
  "/java-architects/": boxes("Java Architecture", "Enterprise Boundaries", "Structure Java applications through clear domain models, service interfaces and an operating model the delivery team can maintain.", [
    card("Enterprise Models", "Define business concepts and module responsibilities before distributing work across application services.", ["Domain terminology", "Module responsibilities", "Business invariants", "Service boundaries"]),
    card("Application Interfaces", "Specify request formats, validation and response behavior for connected Java application services.", ["Request contracts", "Validation rules", "Response states", "Interface compatibility"]),
    card("Persistence Design", "Connect records and transaction behavior to the business actions that read or change enterprise data.", ["Persistence mappings", "Transaction boundaries", "Query behavior", "Data-change rules"]),
    card("Platform Operation", "Plan deployment settings, diagnostics and release checks alongside the application architecture.", ["Runtime configuration", "Release verification", "Service diagnostics", "Operating handover"]),
  ]),
  "/ar-experiences/": boxes("Augmented Reality", "Real-world Task Context", "Connect AR interaction, spatial content and device conditions to the training, enterprise or retail experience being developed.", [
    card("Experience Definition", "Identify the user task and physical setting before designing the augmented interaction.", ["AR user tasks", "Physical environments", "Interaction goals", "Device assumptions"]),
    card("Spatial Content", "Organize overlays and scene content around understandable placement and real-world context.", ["Overlay placement", "Scene relationships", "Content scale", "Spatial cues"]),
    card("Interaction Feedback", "Define how users select, inspect and change AR content, including when tracking is interrupted.", ["Selection feedback", "Tracking conditions", "Input alternatives", "Interrupted sessions"]),
    card("Device Review", "Evaluate the experience on supported devices and the capture or lighting conditions relevant to its use.", ["Supported hardware", "Lighting variation", "Task walkthroughs", "Session recovery"]),
  ]),
  "/services/business-intelligence/": boxes("BI Delivery", "From Definitions to Daily Use", "Build corporate dashboards around consistent measures, source relationships and the needs of the people reading each report.", [
    card("Reporting Requirements", "Define dashboard users and the business questions that determine the reporting dataset.", ["Report audiences", "Business questions", "Reporting cadence", "Required drilldowns"]),
    card("Semantic Consistency", "Keep calculation definitions and record relationships consistent across reports and filtered views.", ["Measure definitions", "Relationship checks", "Date interpretation", "Aggregation rules"]),
    card("Dashboard Context", "Present figures with the filters and periods needed to understand what each visual represents.", ["Filter visibility", "Period selection", "Visual explanations", "Detail navigation"]),
    card("Report Maintenance", "Assign responsibility for refresh behavior, access decisions and investigation of reporting issues.", ["Refresh responsibilities", "Reader permissions", "Report versioning", "Discrepancy review"]),
  ]),
  "/power-bi-dashboards/": boxes("Power BI Reports", "With Traceable Model Logic", "Connect Power BI sources and semantic models to the visual context and publishing responsibilities of the intended report audience.", [
    card("Source Preparation", "Identify tables, preparation steps and connection requirements before building the report model.", ["Connection requirements", "Table preparation", "Source-field mapping", "Data freshness context"]),
    card("Measures and Relationships", "Review model relationships and calculations using representative totals and filter combinations.", ["Model relationships", "Calculation samples", "Filter combinations", "Date-model checks"]),
    card("Report Interaction", "Give report readers a clear relationship between visual selections, slicers and underlying detail.", ["Slicer context", "Visual selections", "Report navigation", "Detail views"]),
    card("Publishing and Refresh", "Plan distribution and refresh behavior around the audience, source access and operating environment.", ["Publishing responsibilities", "Report distribution", "Refresh outcomes", "Source-access dependencies"]),
  ]),
  "/servicenow-dev/": boxes("ServiceNow Workflows", "Requests to Resolution", "Configure service-management records and enterprise workflows around explicit task ownership and operational handoffs.", [
    card("Service Records", "Define request and incident information so teams can understand the work represented by a record.", ["Request categories", "Incident context", "Required service fields", "Record relationships"]),
    card("Workflow Configuration", "Connect assignment and approval states to the responsibilities of each participating team.", ["Assignment rules", "Approval responsibilities", "State-change conditions", "Escalation paths"]),
    card("Enterprise Connections", "Specify exchanged identifiers and exception behavior when ServiceNow connects to other operational systems.", ["System identifiers", "Exchange mappings", "Integration exceptions", "Source ownership"]),
    card("Service Review", "Review configured tasks and reporting definitions against representative service-management scenarios.", ["Service-task checks", "Report definitions", "Administrator notes", "Operational follow-up"]),
  ]),
  "/azure-cloud/": boxes("Azure Infrastructure", "Operating Context", "Connect Azure resource design, access and deployment decisions to the workloads and operational responsibilities of the project.", [
    card("Workload Architecture", "Identify workload dependencies and resource requirements before planning the Azure environment.", ["Workload requirements", "Resource relationships", "Environment separation", "Dependency constraints"]),
    card("Access and Networking", "Define the identities and network boundaries used by applications and administrators.", ["Identity responsibilities", "Network boundaries", "Resource permissions", "Access-change review"]),
    card("Deployment Configuration", "Keep infrastructure settings and release steps reviewable across the environments used by the team.", ["Configuration records", "Deployment steps", "Environment checks", "Change traceability"]),
    card("Cloud Operations", "Plan diagnostics, capacity reviews and recovery requirements around the workload's operating needs.", ["Diagnostic signals", "Capacity assumptions", "Recovery requirements", "Operating ownership"]),
  ]),
  "/pimcore-solutions/": boxes("Pimcore Solutions", "Product Information", "Organize master data, product records and commerce exchange through shared definitions and clear stewardship responsibilities.", [
    card("Information Models", "Define product attributes and relationships around the records required by commerce and internal teams.", ["Product attributes", "Master-data relationships", "Record identifiers", "Attribute ownership"]),
    card("Content Stewardship", "Connect data enrichment and review tasks to the people responsible for maintaining product information.", ["Enrichment workflows", "Review stages", "Completeness checks", "Data-change history"]),
    card("Channel Exchange", "Specify how product and asset records are delivered to the channels and systems that consume them.", ["Channel requirements", "Asset references", "Export mappings", "Exchange exceptions"]),
    card("Commerce Context", "Keep commercial views and operational integrations connected to the underlying product record.", ["Catalog relationships", "Storefront context", "Integration reviews", "Record reconciliation"]),
  ]),
  "/services/mobile-development/": boxes("Mobile Development", "Device and Service Work", "Connect iOS and Android journeys to the device capabilities, application data and service states each mobile task requires.", [
    card("Mobile User Journeys", "Define screen flows and controls around the actions people need to complete on a phone or tablet.", ["Screen-flow requirements", "Touch interactions", "Input feedback", "Navigation states"]),
    card("Application Data", "Coordinate local records and remote responses, including interrupted connections and synchronization needs.", ["Local data choices", "Remote request states", "Offline expectations", "Synchronization rules"]),
    card("Device Integration", "Make permission and capability requirements explicit when the application uses device features.", ["Device permissions", "Platform capabilities", "Capability fallbacks", "Background-work rules"]),
    card("Platform Verification", "Review supported mobile environments and release behavior using representative end-to-end tasks.", ["iOS task checks", "Android task checks", "Device coverage", "Release preparation"]),
  ]),
  "/services/application-maintenance/": boxes("Application Maintenance", "With Clear Context", "Connect bug investigation and planned changes to the application context needed to preserve essential business workflows.", [
    card("Issue Investigation", "Trace reported behavior to the affected version, records and conditions before selecting a corrective change.", ["Affected versions", "Reproduction conditions", "Issue classification", "Investigation evidence"]),
    card("Focused Changes", "Keep fixes and maintenance updates bounded by the behavior and dependencies they affect.", ["Fix boundaries", "Dependency updates", "Compatibility review", "Change rationale"]),
    card("Regression Review", "Check essential workflows and known failure paths against the version prepared for release.", ["Preserved workflows", "Failure-path checks", "Regression evidence", "Release comparison"]),
    card("Maintenance Knowledge", "Retain operational notes and unresolved follow-up so later support work has the necessary context.", ["Support history", "Known issue context", "Maintenance runbooks", "Follow-up responsibilities"]),
  ]),
  "/services/managed-it-services/": boxes("Managed IT Services", "Operating Duties", "Organize infrastructure monitoring and maintenance around agreed coverage, system ownership and operational follow-up.", [
    card("Service Inventory", "Identify managed systems and the operating responsibilities included in the service arrangement.", ["Managed resources", "Coverage requirements", "Operating duties", "Service boundaries"]),
    card("Monitoring Context", "Connect operational signals to their source, expected conditions and investigation responsibilities.", ["Signal sources", "Alert definitions", "Expected conditions", "Investigation routing"]),
    card("Maintenance Work", "Sequence routine changes and upkeep with the approvals and system dependencies they require.", ["Maintenance schedules", "Change approvals", "Dependency awareness", "Work completion records"]),
    card("Operational Review", "Review open incidents, service changes and reporting measures with the people responsible for follow-up.", ["Incident follow-up", "Service-change history", "Reporting agreements", "Operating reviews"]),
  ]),
  "/services/big-data/": boxes("Big Data Services", "Ingestion to Analysis", "Connect distributed processing to the volume, variety and interpretation requirements of the datasets being handled.", [
    card("Ingestion Requirements", "Define incoming sources, record formats and arrival patterns before constructing the data pipeline.", ["Incoming sources", "Record formats", "Arrival patterns", "Ingestion validation"]),
    card("Distributed Processing", "Partition transformation work around data relationships and the operating constraints of the workload.", ["Processing partitions", "Transformation stages", "Workload dependencies", "Failure recovery"]),
    card("Analytical Outputs", "Keep processed datasets associated with the definitions and source context needed by downstream analysis.", ["Output definitions", "Source lineage", "Quality observations", "Consumer requirements"]),
    card("Pipeline Operation", "Plan resource reviews and investigation of incomplete or unsuccessful processing runs.", ["Resource assumptions", "Run diagnostics", "Incomplete datasets", "Pipeline ownership"]),
  ]),
  "/services/it-staff-augmentation/": boxes("Staff Augmentation", "Team Responsibilities", "Define engineering support through role requirements, project context and a practical handover into the existing delivery team.", [
    card("Role Definition", "Specify the skills and responsibilities required for the project rather than relying on generic engineer counts.", ["Required experience", "Role responsibilities", "Project context", "Working expectations"]),
    card("Team Onboarding", "Connect new contributors to the repository knowledge, authorized access and tools their work requires.", ["Repository orientation", "Access requirements", "Tool configuration", "Team contacts"]),
    card("Work Coordination", "Give assigned engineering work a clear owner, acceptance expectation and review path within the team.", ["Task ownership", "Acceptance examples", "Review responsibilities", "Cross-team dependencies"]),
    card("Knowledge Continuity", "Keep implementation decisions and handover material accessible to the people maintaining the project.", ["Decision documentation", "Handover records", "Maintenance context", "Engagement follow-up"]),
  ]),
  "/services/api-development/": boxes("API Development", "Explicit Contracts", "Connect application interfaces to defined inputs, permission boundaries and predictable response and integration behavior.", [
    card("Contract Definition", "Specify resources and operations in terms that both the service and its consumers can implement.", ["Resource definitions", "Operation contracts", "Request schemas", "Response expectations"]),
    card("Protected Operations", "Apply input and authorization checks where the API reads or changes application information.", ["Input-validation rules", "Authorization context", "Protected record access", "Sensitive action checks"]),
    card("Integration Behavior", "Define how clients interpret status, pagination and unsuccessful exchanges with connected services.", ["Status interpretation", "Pagination requirements", "Retry expectations", "External-service errors"]),
    card("API Handover", "Keep examples and compatibility expectations connected to the interface version being delivered.", ["Usage examples", "Contract tests", "Version compatibility", "Integration documentation"]),
  ]),
  "/aws-infrastructure/": boxes("AWS Infrastructure", "Workload and Recovery", "Plan AWS resources and operating responsibilities around application dependencies, access requirements and recovery needs.", [
    card("Workload Planning", "Identify compute, storage and service relationships before configuring the AWS environment.", ["Compute requirements", "Storage responsibilities", "Service dependencies", "Environment boundaries"]),
    card("Identity and Network Rules", "Define who and what may reach resources, with explicit responsibilities for changing access.", ["Identity permissions", "Network access rules", "Resource boundaries", "Access-change ownership"]),
    card("Infrastructure Delivery", "Document resource configuration and deployment decisions so changes can be reviewed by the operating team.", ["Resource configuration", "Deployment records", "Environment validation", "Change ownership"]),
    card("Operating Readiness", "Connect diagnostics and recovery planning to the conditions the application is expected to face.", ["Operational signals", "Recovery scenarios", "Capacity review", "Support runbooks"]),
  ]),
  "/net-experts/": boxes(".NET Engineering", "Enterprise Applications", "Structure .NET application work through clear business rules, data access and service interfaces.", [
    card("Application Responsibilities", "Organize .NET modules around defined business actions and the records those actions use.", ["Business-action models", "Module interfaces", "Input requirements", "Application boundaries"]),
    card("Service Integration", "Specify the contracts and identity context needed when the application exchanges information with services.", ["Service request formats", "Identity context", "Exchange responses", "Integration exceptions"]),
    card("Persistence Behavior", "Connect stored records and transaction rules to the workflows that read or modify enterprise information.", ["Record mappings", "Data validation rules", "Transaction requirements", "Query review"]),
    card("Delivery Support", "Prepare application configuration and diagnostic context alongside checks of the intended user journeys.", ["Configuration guidance", "Workflow verification", "Release handover", "Runtime diagnostics"]),
  ]),
  "/services/cybersecurity/": boxes("Cybersecurity", "Assets and Exposure", "Connect security assessment and advisory work to the information, services and access responsibilities of the organization.", [
    card("Security Scope", "Identify relevant assets and information flows before defining assessment priorities.", ["Asset context", "Information flows", "Exposure priorities", "Assessment boundaries"]),
    card("Access Responsibilities", "Review how identities receive, use and relinquish permissions across the systems in scope.", ["Identity lifecycle", "Permission boundaries", "Administrative access", "Access-review duties"]),
    card("Control Assessment", "Connect observed security conditions to requirements and evidence that can be reviewed by responsible teams.", ["Control expectations", "Evidence collection", "Observed weaknesses", "Risk context"]),
    card("Security Follow-up", "Turn assessment findings into assigned actions and a documented path for reviewing changes.", ["Finding ownership", "Remediation priorities", "Change review", "Continuing assessment"]),
  ]),
  "/services/it-consulting/": boxes("IT Consulting", "Business Priorities", "Connect technology choices to operating requirements, system dependencies and the decisions needed to move a plan forward.", [
    card("Business and IT Context", "Clarify the business processes and technology constraints relevant to the advisory work.", ["Operating objectives", "System constraints", "Stakeholder needs", "Current dependencies"]),
    card("Technology Options", "Review alternatives through their operational implications and suitability for the required work.", ["Option comparisons", "Integration implications", "Resource requirements", "Operating tradeoffs"]),
    card("Change Roadmaps", "Sequence proposed technology work around identified dependencies and reviewable business outcomes.", ["Roadmap increments", "Dependency sequencing", "Decision checkpoints", "Acceptance goals"]),
    card("Advisory Handover", "Keep recommendations and unresolved questions connected to their assumptions and responsible decision makers.", ["Recommendation context", "Assumption documentation", "Decision responsibilities", "Advisory follow-up"]),
  ]),
  "/services/devops-consulting/": boxes("DevOps Consulting", "Build to Operation", "Connect software delivery automation to the checks, environment boundaries and operating responsibilities behind each release.", [
    card("Pipeline Assessment", "Map existing build and release steps before identifying where automation or clearer ownership is needed.", ["Build-step inventory", "Release dependencies", "Pipeline responsibilities", "Current failure points"]),
    card("Automated Verification", "Place repeatable checks where they can provide useful evidence about the artifact being prepared.", ["Build validation", "Test integration", "Artifact references", "Failure reporting"]),
    card("Environment Configuration", "Define how settings and access differ across development, preview and production environments.", ["Environment definitions", "Configuration handling", "Deployment permissions", "Release conditions"]),
    card("Operational Feedback", "Connect deployment results and runtime observations to the team responsible for release follow-up.", ["Deployment outcomes", "Runtime observations", "Rollback planning", "Post-release review"]),
  ]),
  "/services/": boxes("Engineering Services", "From Planning to Support", "Connect custom software, consulting, cloud infrastructure and support work through defined scopes and delivery responsibilities.", [
    card("Software Delivery", "Develop application capabilities around the business tasks and system relationships the project needs.", ["Application requirements", "Custom workflow design", "Service integration", "Delivery verification"]),
    card("Technology Advisory", "Review architecture and implementation choices with their dependencies, assumptions and operating tradeoffs.", ["Architecture discussions", "Technology tradeoffs", "Delivery roadmaps", "Technical decision records"]),
    card("Cloud and Infrastructure", "Plan resource configuration and operating requirements for the environments supporting the software.", ["Environment planning", "Infrastructure settings", "Access responsibilities", "Recovery considerations"]),
    card("Application Support", "Keep incidents and maintenance tasks connected to the system context needed for effective follow-up.", ["Incident investigation", "Maintenance coordination", "Operational knowledge", "Support handover"]),
  ]),
  "/services/mvp-development/": boxes("MVP Development", "The Initial Product Task", "Define a focused software product that can be reviewed against its core workflow before planning later capabilities.", [
    card("Product Hypothesis", "Identify the user problem and assumptions the initial product should help the team investigate.", ["Intended users", "Problem definition", "Product assumptions", "Review questions"]),
    card("Initial Feature Scope", "Select the capabilities needed for the primary task and make later work explicit.", ["Core workflow", "Required features", "Scope boundaries", "Deferred capabilities"]),
    card("Reviewable Increments", "Build the selected product behavior in increments that can be checked against concrete examples.", ["Prototype increments", "Acceptance cases", "Task walkthroughs", "Feedback records"]),
    card("Next-step Decisions", "Use observed product behavior and review findings to decide what needs refinement or further investigation.", ["Observed limitations", "Refinement priorities", "Evidence gaps", "Further product work"]),
  ]),
  "/services/microsoft-consulting/": boxes("Microsoft Consulting", "Platform Context", "Review Microsoft software configuration, information administration and licensing questions in their business and operating context.", [
    card("Platform Requirements", "Identify the products, users and business tasks relevant to the Microsoft advisory scope.", ["Product inventory", "Business task mapping", "User requirements", "Platform dependencies"]),
    card("Configuration Review", "Connect application settings and identity responsibilities to the operating requirements of the environment.", ["Configuration choices", "Identity settings", "Administrative roles", "Change responsibilities"]),
    card("Information Administration", "Define ownership and access expectations for information shared across the relevant Microsoft products.", ["Information ownership", "Data-access requirements", "Retention questions", "Cross-product context"]),
    card("License and Handover Context", "Keep licensing questions and recommendations tied to current product terms and the intended usage.", ["Usage requirements", "License-term review", "Recommendation rationale", "Administrator guidance"]),
  ]),
  "/services/artificial-intelligence/": boxes("Enterprise AI", "Within the Business Workflow", "Connect cognitive services and text processing to defined information boundaries, application actions and human review.", [
    card("AI Use-case Definition", "Describe the business task and the part of that task an AI capability is expected to assist.", ["Operational use cases", "Task responsibilities", "Required information", "Review expectations"]),
    card("Knowledge and Inputs", "Identify relevant records and define the permissions and input checks governing their use.", ["Knowledge sources", "Input boundaries", "Information permissions", "Sensitive-data handling"]),
    card("Controlled Actions", "Connect AI output to application services through explicit contracts and operating rules.", ["Service-action contracts", "Automation conditions", "Output interpretation", "Action restrictions"]),
    card("Evaluation and Recovery", "Review representative outcomes and define how unsuitable or unavailable AI responses are handled.", ["Representative tasks", "Unsuitable-output review", "Fallback behavior", "Human confirmation"]),
  ]),
  "/services/infrastructure-services/": boxes("Infrastructure Services", "Workload Context", "Connect internal and cloud environments to application dependencies, operational signals and maintainable configuration.", [
    card("Infrastructure Context", "Identify the resources and relationships required to support the intended application workload.", ["Resource inventory", "Workload relationships", "Environment requirements", "Dependency planning"]),
    card("Configuration Work", "Document network, access and system settings with the responsibilities needed to maintain them.", ["System settings", "Network configuration", "Administrative boundaries", "Configuration ownership"]),
    card("Operating Observations", "Interpret resource and workload signals using defined thresholds, source context and investigation paths.", ["Resource observations", "Threshold definitions", "Diagnostic context", "Investigation duties"]),
    card("Continuity Planning", "Connect maintenance and recovery requirements to the systems and services the infrastructure supports.", ["Maintenance dependencies", "Recovery priorities", "Restoration checks", "Operating documentation"]),
  ]),
  "/services/it-help-desk/": boxes("IT Help Desk", "From User Request to Follow-up", "Organize hardware and system questions through clear intake, triage and resolution responsibilities.", [
    card("User-request Context", "Capture the user's task, affected equipment and observed symptoms before routing a support request.", ["User task details", "Equipment context", "Reported symptoms", "Request records"]),
    card("Tiered Investigation", "Connect initial troubleshooting to the team and escalation path appropriate to the issue.", ["Initial troubleshooting", "Support-tier boundaries", "Escalation information", "Responsible contacts"]),
    card("Resolution Confirmation", "Record the troubleshooting outcome and check whether the affected user task can proceed.", ["Troubleshooting actions", "Outcome records", "User confirmation", "Unresolved questions"]),
    card("Help-desk Knowledge", "Maintain explanations and recurring-issue information that can support later requests.", ["Reusable support notes", "Recurring user issues", "Knowledge maintenance", "Request follow-up"]),
  ]),
  "/services/security-testing/": boxes("Security Testing", "Reviewable Findings", "Evaluate application exposure and access behavior within a defined scope, keeping observations connected to corrective work.", [
    card("Assessment Preparation", "Define target systems, expected controls and the conditions under which security checks will run.", ["Assessment targets", "Control requirements", "Test conditions", "Authorized boundaries"]),
    card("Exposure Checks", "Inspect relevant entry points and configuration with evidence of the conditions actually observed.", ["Entry-point review", "Configuration checks", "Observed exposure", "Evidence context"]),
    card("Access Verification", "Check how identities and permissions govern information and sensitive application actions.", ["Identity scenarios", "Permission checks", "Protected information", "Sensitive operation paths"]),
    card("Finding Follow-up", "Keep weaknesses, corrective changes and retest outcomes associated with the assessed system version.", ["Version references", "Weakness descriptions", "Corrective work", "Retest evidence"]),
  ]),
  "/data-science-ops/": boxes("Data Science Operations", "Data to Model Runs", "Keep analytical preparation, model artifacts and execution records connected through repeatable operating steps.", [
    card("Analytical Preparation", "Document dataset cleanup and validation so modeling inputs can be recreated and inspected.", ["Dataset cleanup rules", "Preparation validation", "Transformation versions", "Input recreation"]),
    card("Artifact Context", "Associate model files and execution settings with the data and process that produced them.", ["Model artifact records", "Dataset versions", "Execution settings", "Training-run context"]),
    card("Run Coordination", "Define how analytical jobs are started, checked and investigated when processing does not complete.", ["Job dependencies", "Execution records", "Failed-run handling", "Run ownership"]),
    card("Operational Evaluation", "Review changing inputs and model behavior using the context of the active analytical workflow.", ["Input-change review", "Model observations", "Evaluation history", "Operating follow-up"]),
  ]),
  "/ml-engineering/": boxes("ML Engineering", "Training to Prediction", "Connect training pipelines and model evaluation to the interfaces and operating checks required for application use.", [
    card("Training Pipelines", "Structure feature preparation and model training with documented settings and artifact outputs.", ["Feature transformations", "Training configuration", "Artifact storage", "Run reproducibility"]),
    card("Model Checks", "Evaluate trained artifacts against representative tasks and the error behavior relevant to the application.", ["Evaluation datasets", "Task-specific errors", "Artifact comparisons", "Acceptance thresholds"]),
    card("Prediction Services", "Package model inputs and outputs into service contracts with explicit unsuccessful-response behavior.", ["Inference inputs", "Prediction responses", "Service failures", "Consumer expectations"]),
    card("Model Operations", "Plan model-version changes and investigation of data or prediction issues after deployment.", ["Model-version changes", "Deployment checks", "Prediction diagnostics", "Operational review"]),
  ]),
  "/blockchain-tech/": boxes("Blockchain Systems", "Transaction Rules", "Define distributed-ledger work through participant responsibilities, validation rules and the application actions tied to a transaction.", [
    card("Ledger Requirements", "Clarify what is recorded and why a shared ledger is appropriate for the intended business process.", ["Ledger purpose", "Recorded information", "Participant roles", "Application requirements"]),
    card("Transaction Validation", "Define transaction formats and validation responsibilities before connecting records across participants.", ["Transaction formats", "Validation conditions", "Participant permissions", "State-change rules"]),
    card("Application Interfaces", "Connect ledger events and token-related records to the services and user actions that consume them.", ["Ledger-event interfaces", "Token-record context", "Service integration", "User-action mapping"]),
    card("Operating Constraints", "Review the network dependencies, failure conditions and key-management duties of the ledger environment.", ["Network assumptions", "Failure conditions", "Key-management duties", "Transaction review"]),
  ]),
  "/big-data-systems/": boxes("Big Data Platforms", "For Distributed Data Work", "Structure cloud repositories and parallel processing around the records, workload boundaries and consumers the platform must support.", [
    card("Repository Structure", "Organize varied enterprise datasets with clear identifiers, storage responsibilities and source context.", ["Dataset organization", "Storage boundaries", "Source identifiers", "Record-format context"]),
    card("Parallel Workloads", "Define how processing tasks and data partitions relate before distributing work across the platform.", ["Task partitioning", "Processing dependencies", "Parallel-stage inputs", "Workload configuration"]),
    card("Data Consumption", "Connect processed records to documented access patterns and the downstream tools that use them.", ["Consumer access needs", "Published data formats", "Dataset definitions", "Downstream interfaces"]),
    card("Platform Diagnostics", "Keep processing failures and capacity assumptions visible to the team operating the data environment.", ["Processing diagnostics", "Capacity assumptions", "Run-failure context", "Platform maintenance"]),
  ]),
  "/vr-enterprise/": boxes("Enterprise VR", "Around Immersive Training Tasks", "Connect virtual environments and interaction rules to the onboarding, prototyping or training activity the experience supports.", [
    card("Training Scenarios", "Define the participant task and learning context before constructing a virtual training sequence.", ["Participant objectives", "Training sequences", "Scenario boundaries", "Review criteria"]),
    card("Virtual Environments", "Organize spatial content and scene transitions around understandable movement and task context.", ["Scene organization", "Spatial relationships", "Navigation cues", "Environment transitions"]),
    card("Participant Interaction", "Describe how users manipulate objects and receive feedback throughout the virtual task.", ["Object interactions", "Input-device behavior", "Task feedback", "Session interruptions"]),
    card("Experience Evaluation", "Review the supported hardware and participant journey before interpreting training observations.", ["Headset requirements", "Scenario walkthroughs", "Participant observations", "Session handover"]),
  ]),
  "/cloud-native/": boxes("Cloud-native Software", "Connected Services", "Design application responsibilities and deployment context together so connected cloud services have clear data and operating boundaries.", [
    card("Service Boundaries", "Divide application work around explicit capabilities and the data each service is responsible for.", ["Capability boundaries", "Service data ownership", "Interface responsibilities", "Dependency contracts"]),
    card("Tenant Context", "Define account and tenant relationships where the application serves multiple organizations.", ["Tenant identifiers", "Account relationships", "Data-isolation rules", "Shared-service context"]),
    card("Deployment Work", "Connect service artifacts and environment settings to a reviewable software-release process.", ["Service artifacts", "Environment settings", "Release orchestration", "Deployment verification"]),
    card("Runtime Behavior", "Plan diagnostics and recovery paths around the dependencies and failure conditions of connected services.", ["Service observations", "Dependency failures", "Recovery behavior", "Operating responsibilities"]),
  ]),
  "/python-engineers/": boxes("Python Engineering", "Automation and Services", "Build Python workflows around defined inputs, computation steps and the systems that use their results.", [
    card("Automation Tasks", "Translate repeatable operational work into explicit steps with validated inputs and meaningful failure information.", ["Task decomposition", "Input validation", "Automation steps", "Failure reporting"]),
    card("Computational Work", "Keep formulas, data assumptions and calculation outputs connected to the analytical task being implemented.", ["Calculation requirements", "Data assumptions", "Intermediate results", "Computation checks"]),
    card("Service Interfaces", "Connect Python application logic to databases and APIs through documented request and response responsibilities.", ["API interaction", "Database operations", "Response handling", "Service configuration"]),
    card("Project Handover", "Prepare reproducible execution guidance and tests for the team maintaining the Python implementation.", ["Execution requirements", "Dependency records", "Behavior tests", "Maintenance guidance"]),
  ]),
  "/go-engineers/": boxes("Go Engineering", "For Defined Service Workloads", "Structure Go services and data handlers around explicit interfaces, concurrent work and network-operating requirements.", [
    card("Service Contracts", "Define the requests and responses that connect Go application logic to its consumers.", ["Endpoint contracts", "Request parsing", "Response definitions", "Service boundaries"]),
    card("Concurrent Work", "Plan the ownership and coordination of work that proceeds across concurrent processing tasks.", ["Task coordination", "Work ownership", "Cancellation behavior", "Shared-state review"]),
    card("Network and Data Work", "Connect service calls and data handling with clear timeouts and unsuccessful-operation behavior.", ["Network interactions", "Data-handler inputs", "Timeout requirements", "Error handling"]),
    card("Go Service Delivery", "Keep runtime configuration and diagnostic information connected to build and release checks.", ["Build requirements", "Runtime settings", "Service-level tests", "Diagnostic records"]),
  ]),
  "/javascript-devs/": boxes("JavaScript Engineering", "Interfaces and Runtime", "Connect interactive user tasks and server workflows through clear state, asynchronous behavior and service contracts.", [
    card("Interface Components", "Define component inputs and responsibilities around the user action each part of the interface supports.", ["Component contracts", "Event responsibilities", "View-state models", "Reusable interactions"]),
    card("Asynchronous Behavior", "Coordinate requests and user actions with understandable pending, unsuccessful and completed states.", ["Request coordination", "Pending-state feedback", "Error recovery", "State-change handling"]),
    card("Server-side Workflows", "Organize server-side JavaScript around explicit API operations, validation and persistence responsibilities.", ["Server API operations", "Service validation", "Persistence boundaries", "Background task handling"]),
    card("JavaScript Verification", "Review interface and runtime behavior together using representative data and task scenarios.", ["Component behavior checks", "Async failure scenarios", "Service integration tests", "Runtime review"]),
  ]),
  "/react-native-experts/": boxes("React Native", "For Platform-aware Mobile Tasks", "Connect shared mobile components and service work to the native controls and platform behavior relevant to iOS and Android users.", [
    card("Native Interface Work", "Organize mobile screens around native text, controls and the task a user is trying to complete.", ["Native component structure", "Mobile control behavior", "Screen responsibilities", "Input and focus context"]),
    card("Mobile State and Data", "Coordinate application state and remote information when requests complete, fail or lose connectivity.", ["Mobile state transitions", "Remote data handling", "Connectivity interruptions", "Local record choices"]),
    card("Platform Capabilities", "Define device permissions and platform-specific behavior without assuming every native feature behaves identically.", ["iOS capability checks", "Android capability checks", "Permission requirements", "Platform-specific feedback"]),
    card("Journey Verification", "Review the complete mobile task with relevant device settings, accessibility inputs and service conditions.", ["Screen-reader review", "Text-input scenarios", "Device-setting variation", "Mobile recovery paths"]),
  ]),
  "/mobile-devs/": boxes("Mobile Engineering", "Online and Offline", "Define phone-application work through interaction requirements, local information and explicit synchronization behavior.", [
    card("Phone-first Journeys", "Shape controls and navigation around the tasks and device conditions of the intended mobile user.", ["Phone task requirements", "Touch-control feedback", "Mobile navigation", "Device-condition context"]),
    card("Offline Information", "Specify which records remain available locally and how users understand work completed without a connection.", ["Offline record scope", "Local change states", "Connection feedback", "Pending work visibility"]),
    card("Synchronization Rules", "Connect local changes to remote records with a defined approach to conflicts and unsuccessful exchanges.", ["Sync ownership", "Conflict expectations", "Remote update results", "Retry-state handling"]),
    card("Mobile Delivery Review", "Check device capabilities and application journeys against the mobile environments selected for delivery.", ["Supported device context", "Permission walkthroughs", "Journey acceptance checks", "Mobile support notes"]),
  ]),
  "/ms-ecosystem/": boxes("Microsoft Ecosystem", "Shared Identity Context", "Connect Microsoft product environments through clear directory relationships, access responsibilities and exchanged business records.", [
    card("Directory Context", "Identify the users and organization relationships represented across connected Microsoft products.", ["Directory relationships", "Organization context", "User identifiers", "Identity lifecycle needs"]),
    card("Access Administration", "Define who can administer and use information as tasks move between the products in scope.", ["Cross-product permissions", "Administrative duties", "Access-change records", "Visibility requirements"]),
    card("Information Exchange", "Keep shared records and integrations associated with their source and update responsibilities.", ["Shared-record definitions", "Source-product context", "Update responsibilities", "Integration mappings"]),
    card("Operating Coordination", "Connect configuration decisions and support information across the teams maintaining the environment.", ["Configuration decisions", "Product dependencies", "Support coordination", "Environment review"]),
  ]),
  "/power-apps-dev/": boxes("Power Apps", "For Defined Workspace Processes", "Build low-code forms and administrative tools around the records, permissions and review steps of a specific business task.", [
    card("Workspace Requirements", "Define the employee task and information needed before selecting the low-code application scope.", ["Employee task context", "Form requirements", "Required records", "Application scope"]),
    card("Forms and Validation", "Connect field choices and input feedback to the business rules behind a submitted record.", ["Field definitions", "Input feedback rules", "Submission states", "Record-change checks"]),
    card("Connected Work", "Plan the data connections and workflow handoffs used by the workspace application.", ["Data connections", "Workflow handoffs", "User permissions", "Connection dependencies"]),
    card("Administrative Review", "Check the application using the roles and record conditions relevant to the administrative process.", ["Role-based task checks", "Record-state scenarios", "Configuration handover", "Support expectations"]),
  ]),
  "/business-intelligence/": boxes("Business Intelligence", "With Commercial Context", "Connect commercial dashboards to the queries, definitions and assumptions that make investment discussions understandable.", [
    card("Commercial Questions", "Identify the investment or operating question a business view should help its readers investigate.", ["Investment questions", "Commercial measures", "Comparison requirements", "Decision context"]),
    card("Query Pipelines", "Trace transformations and relationships from business records to the measures presented in a dashboard.", ["Business-source queries", "Transformation context", "Measure traceability", "Dataset relationships"]),
    card("Visual Interpretation", "Keep periods and calculation assumptions visible when presenting commercial trends or comparisons.", ["Period definitions", "Assumption visibility", "Comparison context", "Visual interpretation"]),
    card("Decision Review", "Keep source coverage and interpretation questions visible during commercial dashboard reviews.", ["Evidence discussion", "Source-coverage limits", "Interpretation questions", "Review responsibilities"]),
  ]),
  "/applied-ai/": boxes("Applied AI", "Inside Document and Interface Work", "Connect text interpretation and conversational assistance to source material, business records and reviewable application actions.", [
    card("Document Tasks", "Define the fields or questions an AI capability should interpret within a particular business document workflow.", ["Document-field needs", "Source-material context", "Interpretation tasks", "Required output format"]),
    card("Conversational Context", "Keep user questions and generated responses associated with the relevant application information.", ["User-question context", "Relevant record sources", "Response boundaries", "Conversation handoffs"]),
    card("Interface Integration", "Present AI assistance alongside the user task and define which subsequent actions require confirmation.", ["In-task assistance", "Output presentation", "Confirmation rules", "Application action limits"]),
    card("Result Inspection", "Provide review paths for incomplete extraction, unsuitable responses and unavailable AI services.", ["Extraction review", "Unsuitable-response checks", "Unavailable-service paths", "User correction context"]),
  ]),
  "/real-estate/": boxes("Property Software", "Listings and Agreements", "Connect property information, broker activity and contract progress without separating each task from its listing and parties.", [
    card("Property Listings", "Structure residential and commercial information around the details needed to understand the property.", ["Listing attributes", "Availability context", "Property documents", "Listing-change records"]),
    card("Broker Coordination", "Keep inquiries and viewing arrangements connected to the listing, broker and applicable schedule.", ["Property inquiries", "Broker assignments", "Viewing arrangements", "Schedule changes"]),
    card("Agreement Tracking", "Associate contract records and review stages with the relevant property and transaction participants.", ["Agreement documents", "Transaction parties", "Contract-review stages", "Outstanding actions"]),
    card("Operational Follow-up", "Show the ownership and context of unresolved listing, appointment and agreement work.", ["Listing follow-up", "Appointment outcomes", "Agreement questions", "Task ownership records"]),
  ]),
  "/wep-app-front-end/": boxes("Web App Frontends", "Connected Interface Tasks", "Build reusable frontend behavior around application state, service responses and complete user journeys.", [
    card("Interface Responsibilities", "Define components through their inputs and the part of the application task each one supports.", ["Component inputs", "Interface responsibilities", "Shared interaction patterns", "View composition"]),
    card("Application State", "Coordinate user input and asynchronous data changes with clear states across the interface.", ["Input-state changes", "Pending data views", "Update coordination", "State ownership"]),
    card("Service Feedback", "Present service results and unsuccessful requests in the context of the action the user performed.", ["Response interpretation", "Request-failure feedback", "Validation messages", "Retry expectations"]),
    card("Task Completion", "Review the frontend journey through navigation, input and recovery on the supported screens.", ["User-task walkthroughs", "Control feedback", "Cross-screen behavior", "Journey recovery"]),
  ]),
};

const fallbackFourBoxes = boxes("Software Capabilities", "With Clear Delivery Context", "Connect the service requirements to explicit records, implementation responsibilities and practical review points.", [
  card("Required Behavior", "Define the user task and application behavior that the work is intended to support.", ["Task requirements", "Application context", "Acceptance examples", "Scope decisions"]),
  card("Information Context", "Identify the records and relationships needed to complete the intended workflow.", ["Record requirements", "Information sources", "Ownership boundaries", "Data relationships"]),
  card("Connected Services", "Describe how application responsibilities and external systems work together.", ["Service requirements", "Interface contracts", "Dependency context", "Unsuccessful states"]),
  card("Delivery Review", "Check the implemented work and hand over the information needed for maintenance.", ["Behavior review", "Operating guidance", "Maintenance duties", "Unresolved follow-up"]),
]);

export function getFourBoxesContent(path?: string | null): FourBoxesContent {
  const clean = (path || "/").split(/[?#]/, 1)[0].trim().toLowerCase().replace(/^\/+|\/+$/g, "");
  return fourBoxesContent[clean ? `/${clean}/` : "/"] || fallbackFourBoxes;
}
