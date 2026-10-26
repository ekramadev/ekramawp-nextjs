export interface PillarContent { label: string; title: string; bullets: readonly [string, string, string]; cta: string; }
export interface FiveCirclesContent { titleLead: string; titleAccent: string; intro: string; pillars: readonly [PillarContent, PillarContent, PillarContent, PillarContent, PillarContent]; }
type PillarDraft = readonly [label: string, title: string, bullets: readonly [string, string, string]];
const pillar = ([label, title, bullets]: PillarDraft, subject: string): PillarContent => ({ label, title, bullets, cta: `Discuss ${subject} ${label.toLowerCase()}`.replace(/\b(\w+)\s+\1\b/gi, "$1") });
const section = (titleLead: string, titleAccent: string, intro: string, subject: string, drafts: readonly [PillarDraft, PillarDraft, PillarDraft, PillarDraft, PillarDraft]): FiveCirclesContent => ({
  titleLead, titleAccent, intro,
  pillars: [pillar(drafts[0], subject), pillar(drafts[1], subject), pillar(drafts[2], subject), pillar(drafts[3], subject), pillar(drafts[4], subject)],
});

// Final page copy; only the current route's configuration is passed to the client.
export const fiveCirclesContent: Record<string, FiveCirclesContent> = {
  "/secure-portals/": section("Bring portal services", "into one workspace", "Plan identity, self-service tasks, shared records, system connections, and access review around the people using your portal.", "portal", [
    ["Identity", "Define how portal users sign in", ["Choose account verification and sign-in requirements.", "Map customer, partner, and administrator roles.", "Plan account recovery and access removal."]],
    ["Self-service", "Make recurring portal tasks clear", ["Organize requests around the information users need.", "Show submission requirements before a form is sent.", "Connect each request with a visible status."]],
    ["Shared records", "Give records a clear owner", ["Define the documents and account details being shared.", "Apply permissions to sensitive fields and files.", "Keep changes tied to the relevant user."]],
    ["Connections", "Link portal activity with internal tools", ["Map approved data exchanges with business systems.", "Validate submitted information before updating records.", "Provide a review path for failed transfers."]],
    ["Access review", "Keep important portal actions traceable", ["Record permission changes and significant user actions.", "Give administrators a way to review access.", "Define retention and review responsibilities."]],
  ]),
  "/services/digital-transformation/": section("Connect digital changes", "with everyday work", "Build a transformation plan around existing processes, shared information, connected applications, and the teams adopting new ways of working.", "digital workflow", [
    ["Discovery", "Start with the current process", ["Map the teams and tools involved in a task.", "Identify repeated manual handoffs and missing information.", "Agree which operational problem to address first."]],
    ["Workflow design", "Give recurring tasks a defined path", ["Replace unclear handoffs with owned steps.", "Define request forms, approvals, and exceptions.", "Keep progress visible to the responsible teams."]],
    ["Information", "Agree on shared business records", ["Define which system owns each important record.", "Review field definitions and data quality.", "Plan how information changes will be checked."]],
    ["Integration", "Connect existing and new applications", ["Map interfaces around actual business events.", "Validate records before passing them between tools.", "Define who reviews failed exchanges."]],
    ["Adoption", "Support the people using the change", ["Prepare guidance around common user tasks.", "Gather feedback from the teams doing the work.", "Review whether the changed process meets its purpose."]],
  ]),
  "/crm-engineering/": section("Build customer workflows", "around shared context", "Connect relationship records, sales activity, service requests, integrations, and reporting in a CRM that reflects your team’s responsibilities.", "CRM", [
    ["Relationships", "Structure the customer record", ["Connect account details, contacts, and interaction history.", "Define ownership of each customer relationship.", "Review duplicate and incomplete records."]],
    ["Sales stages", "Match the pipeline to your process", ["Define how enquiries become qualified opportunities.", "Assign follow-up tasks to accountable owners.", "Keep stage changes tied to clear criteria."]],
    ["Service work", "Carry context into customer support", ["Link requests with the relevant account history.", "Define handoffs between sales and delivery teams.", "Track unresolved actions and their owners."]],
    ["CRM connections", "Connect the tools around the relationship", ["Map data exchanged with operational applications.", "Validate field mappings and update rules.", "Keep integration exceptions available for review."]],
    ["Activity reports", "Make customer work understandable", ["Choose reports around sales and service questions.", "Use agreed definitions for pipeline fields.", "Keep report entries linked to source records."]],
  ]),
  "/services/software-modernization/": section("Move legacy software", "through practical stages", "Plan modernization around current dependencies, target architecture, data migration, verification, and a controlled release process.", "modernization", [
    ["Assessment", "Understand the system before changing it", ["Review business-critical functions and integrations.", "Identify constraints in the current code and data.", "Agree what needs to remain available."]],
    ["Architecture", "Choose a suitable modernization path", ["Compare refactoring, replacement, and migration options.", "Define boundaries between retained and new modules.", "Document the tradeoffs behind architecture decisions."]],
    ["Migration", "Plan how existing records will move", ["Map source fields to the new data model.", "Define validation and reconciliation checks.", "Prepare recovery steps for incomplete transfers."]],
    ["Verification", "Check behavior against business rules", ["Retain examples of important existing workflows.", "Test integrations and changed application functions.", "Review differences with the teams using the system."]],
    ["Rollout", "Release changes in manageable steps", ["Define release stages and operational handovers.", "Keep a documented rollback approach.", "Review issues before expanding the rollout."]],
  ]),
  "/saas-architecture/": section("Give SaaS workloads", "a clear foundation", "Plan tenant boundaries, platform services, application interfaces, operations, and release controls before extending a multi-tenant product.", "SaaS", [
    ["Tenant boundaries", "Define how tenant data is separated", ["Map tenant identity to application permissions.", "Choose a suitable data partitioning approach.", "Check access rules at tenant boundaries."]],
    ["Platform services", "Organize shared product capabilities", ["Identify functions used across the application.", "Define ownership of configuration and background tasks.", "Keep service dependencies explicit."]],
    ["Interfaces", "Give application modules defined contracts", ["Document API inputs and expected outputs.", "Plan versioning and validation rules.", "Define how consumers handle failures."]],
    ["Operations", "Make platform behavior visible", ["Choose logs and signals for important workflows.", "Plan resource use around expected workloads.", "Define incident review and recovery responsibilities."]],
    ["Product releases", "Keep changes reviewable across tenants", ["Test changes with representative tenant scenarios.", "Plan compatibility for existing product consumers.", "Define release and rollback steps."]],
  ]),
  "/adobe-commerce-tech/": section("Connect storefront decisions", "through to fulfillment", "Plan Adobe Commerce around product information, cart behavior, checkout, orders, and the systems supporting the storefront.", "Adobe Commerce", [
    ["Catalogs", "Structure products for the buying journey", ["Map categories, attributes, and product variants.", "Connect item availability with inventory sources.", "Define ownership of catalog updates."]],
    ["Cart rules", "Explain price and availability clearly", ["Define how options affect the selected item.", "Plan promotion and stock validation rules.", "Show the information needed before checkout."]],
    ["Checkout", "Guide buyers through a complete order", ["Plan address, delivery, and payment inputs.", "Validate required details before order submission.", "Provide clear recovery from checkout errors."]],
    ["Order flow", "Keep fulfillment connected to the sale", ["Map order status to business-system exchanges.", "Link payment references with order records.", "Carry shipping details into fulfillment workflows."]],
    ["Store operations", "Support ongoing commerce administration", ["Define permissions for storefront management tasks.", "Review failed integrations and incomplete orders.", "Plan release checks around core buying journeys."]],
  ]),
  "/custom-erp/": section("Connect department records", "through shared workflows", "Build ERP modules around master data, materials, finance, approvals, and reporting that need to work across departments.", "ERP", [
    ["Master data", "Agree on shared business entities", ["Define items, suppliers, accounts, and locations.", "Assign owners for important reference records.", "Review inconsistent codes and duplicate entries."]],
    ["Materials", "Trace operational stock movements", ["Connect receipts, transfers, and consumption records.", "Keep quantities linked to locations and documents.", "Define review steps for unmatched movements."]],
    ["Finance", "Link operational events with bookkeeping", ["Map approved purchases and invoices to accounts.", "Keep financial references tied to source activity.", "Define reconciliation checks between departments."]],
    ["Approvals", "Give decisions a responsible owner", ["Map permissions to department responsibilities.", "Define approval paths for controlled transactions.", "Preserve the context behind each decision."]],
    ["ERP reporting", "Make cross-department activity visible", ["Choose reports around shared operational questions.", "Use consistent field and status definitions.", "Keep summary figures traceable to underlying records."]],
  ]),
  "/transportation-management/": section("Connect freight decisions", "from planning to delivery", "Plan the transport workflow around shipment requirements, available capacity, routes, dispatch coordination, and delivery records.", "transportation", [
    ["Load planning", "Match cargo with available capacity", ["Capture shipment dimensions and handling requirements.", "Review container space and vehicle availability.", "Keep each load linked to its shipment records."]],
    ["Fleet scheduling", "Build schedules around operating constraints", ["Connect vehicle availability with planned departures.", "Consider driver schedules and delivery windows.", "Make schedule changes visible to dispatch teams."]],
    ["Route planning", "Compare the journey before dispatch", ["Organize stops and delivery requirements.", "Review route choices against operating constraints.", "Keep approved route details with the trip."]],
    ["Dispatch", "Keep trip assignments understandable", ["Connect drivers with load and trip documents.", "Record assignment changes and operational exceptions.", "Give dispatchers a shared view of current activity."]],
    ["Delivery records", "Trace the shipment through completion", ["Capture transit milestones and reported delays.", "Link delivery confirmation with the assigned load.", "Keep exceptions available for follow-up and reporting."]],
  ]),
  "/supply-chain-tech/": section("Connect incoming supply", "with outgoing fulfillment", "Trace purchasing, receipts, inventory, warehouse activity, and supply exceptions through linked operational records.", "supply chain", [
    ["Purchasing links", "Start with the expected incoming supply", ["Connect supplier orders with requested items.", "Record expected quantities and receipt dates.", "Keep purchasing references with each supply record."]],
    ["Receiving", "Match deliveries with expected records", ["Compare received items with purchase references.", "Record quantities and identified discrepancies.", "Define review steps for incomplete deliveries."]],
    ["Inventory flow", "Follow materials across locations", ["Track receipts, transfers, and stock allocations.", "Keep item references consistent between systems.", "Link movements with the documents that explain them."]],
    ["Fulfillment", "Carry order context into warehouse work", ["Connect order requirements with allocated stock.", "Keep picking and packing updates together.", "Record the handoff from warehouse to shipment."]],
    ["Supply exceptions", "Make gaps available for investigation", ["Surface shortages and late receipt records.", "Assign responsibility for unmatched movements.", "Keep investigation notes tied to source activity."]],
  ]),
  "/wms-solutions/": section("Connect warehouse tasks", "with traceable stock", "Plan receiving, bin records, picking, packing, and inventory review around the movements your warehouse team needs to record.", "warehouse", [
    ["Receiving", "Give incoming stock a clear reference", ["Match received items with delivery documents.", "Record accepted quantities and receiving exceptions.", "Assign put-away destinations to the received stock."]],
    ["Bin records", "Keep location and quantity connected", ["Associate items with their warehouse bins.", "Record transfers between storage locations.", "Review incomplete or conflicting movement records."]],
    ["Picking", "Guide work from the correct locations", ["Link order lines with allocated stock.", "Provide item, bin, and quantity instructions.", "Record the quantities actually collected."]],
    ["Packing", "Check the shipment before dispatch", ["Match packed items with the order.", "Verify quantities against packing-slip records.", "Route discrepancies to a responsible reviewer."]],
    ["Stock review", "Reconcile counts with recorded activity", ["Plan item and bin stock checks.", "Review differences against movement history.", "Record approved inventory adjustments."]],
  ]),
  "/enterprise-asset-management/": section("Connect asset records", "with maintenance work", "Organize equipment identity, condition observations, planned service, work orders, and lifecycle review in one asset workflow.", "asset management", [
    ["Asset identity", "Build a dependable equipment register", ["Record asset identifiers, locations, and ownership.", "Attach relevant equipment documents.", "Define responsibility for record updates."]],
    ["Condition records", "Keep operating observations in context", ["Associate usage readings with the correct asset.", "Record condition notes and reported faults.", "Preserve the dates and sources of observations."]],
    ["Maintenance plans", "Turn service needs into scheduled tasks", ["Define recurring service requirements.", "Assign responsible teams and required parts.", "Keep instructions linked to each maintenance task."]],
    ["Work orders", "Record what happened during maintenance", ["Connect assigned work with the asset record.", "Capture findings, repairs, and completion details.", "Route unresolved faults for further review."]],
    ["Lifecycle review", "Preserve the history behind asset decisions", ["Connect repair and operating history.", "Record changes in equipment status.", "Keep retirement decisions tied to supporting records."]],
  ]),
  "/procurement/": section("Connect buying decisions", "with the records behind them", "Build a purchasing workflow around requests, supplier comparisons, approvals, purchase orders, and receipt checks.", "procurement", [
    ["Requisitions", "Capture the need before sourcing begins", ["Record requested items and quantities.", "Include department ownership and budget context.", "Keep supporting information with the request."]],
    ["Supplier bids", "Compare offers using shared criteria", ["Organize quoted pricing and commercial terms.", "Review availability against the purchasing requirement.", "Retain the information used in supplier evaluation."]],
    ["Purchase approvals", "Send decisions to the correct owners", ["Map approval paths to spending responsibilities.", "Show the context behind each buying decision.", "Record approval outcomes and requested changes."]],
    ["Purchase orders", "Carry approved decisions into ordering", ["Link orders with their approved requisitions.", "Keep supplier details and order terms together.", "Track changes to the agreed purchasing record."]],
    ["Receipt checks", "Connect delivered items with the order", ["Match received quantities with purchase lines.", "Record delivery and invoice discrepancies.", "Keep follow-up activity tied to the original request."]],
  ]),
  "/enterprise-pm/": section("Connect project work", "across business units", "Structure project scope, schedules, ownership, progress updates, and portfolio reporting around a shared delivery plan.", "project", [
    ["Work structure", "Break delivery into defined tasks", ["Organize programs, projects, and work packages.", "Give each task a clear scope.", "Connect tasks with agreed delivery milestones."]],
    ["Schedules", "Include dependencies in the delivery plan", ["Record planned dates and task handoffs.", "Review resource availability before assigning work.", "Show the effect of schedule changes."]],
    ["Ownership", "Make delivery responsibilities explicit", ["Assign task owners and review responsibilities.", "Define how teams escalate blocked work.", "Keep decisions linked to the relevant project."]],
    ["Progress records", "Tie status updates to actual activity", ["Capture completed work and current blockers.", "Keep supporting updates with the task.", "Record decisions that change the delivery plan."]],
    ["Portfolio views", "Compare projects using shared definitions", ["Review milestones across business units.", "Make workload and project risks visible.", "Keep summary views linked to project-level context."]],
  ]),
  "/enterprise-commerce/": section("Connect business buying", "with commercial agreements", "Plan B2B commerce around company accounts, contract pricing, purchasing roles, checkout, and invoice references.", "B2B commerce", [
    ["Company accounts", "Represent the buyer’s organization", ["Map company users and purchasing roles.", "Keep account details and authorized contacts together.", "Define access to account-specific ordering tasks."]],
    ["Commercial terms", "Apply the agreed conditions to each buyer", ["Define company price tiers and product access.", "Record negotiated quantities and purchasing conditions.", "Keep changes to commercial terms reviewable."]],
    ["Purchasing roles", "Reflect approval responsibilities in ordering", ["Identify who creates and approves purchases.", "Connect account permissions with order actions.", "Preserve the context behind approval decisions."]],
    ["Contract checkout", "Collect what business orders require", ["Capture purchase references and billing terms.", "Validate delivery and account information.", "Provide a clear path to resolve ordering errors."]],
    ["Invoice links", "Keep billing connected to the order", ["Associate invoice references with order lines.", "Retain the relevant contract terms.", "Support review of unmatched billing records."]],
  ]),
  "/corporate-intranets/": section("Connect internal resources", "with the teams using them", "Organize employee access, documents, announcements, people directories, and publishing responsibilities around internal information needs.", "intranet", [
    ["Employee access", "Match resources to employee responsibilities", ["Define sign-in and department permissions.", "Identify restricted internal information.", "Review access when responsibilities change."]],
    ["Document libraries", "Give shared guidance a clear home", ["Organize documents with useful categories.", "Assign owners and review responsibilities.", "Keep current guidance distinguishable from older versions."]],
    ["Company updates", "Publish messages for defined audiences", ["Plan leadership and operational announcements.", "Select the teams each update should reach.", "Keep publishing responsibility explicit."]],
    ["People directory", "Help employees find the right contacts", ["Maintain profiles and department references.", "Connect people with relevant resource links.", "Define visibility and profile-update rules."]],
    ["Content ownership", "Keep internal information maintained", ["Assign editors for important intranet resources.", "Schedule review of time-sensitive guidance.", "Provide a way to report outdated information."]],
  ]),
  "/transaction-systems/": section("Connect payment events", "with settlement records", "Plan transaction recording, validation, ledger matching, access review, and settlement tracking around stable references.", "payment", [
    ["Event recording", "Give each payment event an identity", ["Capture transaction references and timestamps.", "Record incoming status changes consistently.", "Define how duplicate events are handled."]],
    ["Validation", "Check incoming transaction information", ["Define required fields and accepted formats.", "Review incomplete or conflicting payment records.", "Keep validation outcomes available for investigation."]],
    ["Ledger matching", "Connect payment activity with financial entries", ["Map event references to ledger records.", "Define reconciliation checks for unmatched entries.", "Preserve the history of approved adjustments."]],
    ["Access controls", "Control sensitive transaction actions", ["Map permissions to operational responsibilities.", "Keep significant actions in an audit history.", "Define review steps for exceptional activity."]],
    ["Settlement", "Follow provider records through completion", ["Track provider references, currencies, and fees.", "Record settlement status changes.", "Assign unmatched settlement records for follow-up."]],
  ]),
  "/hris-software/": section("Connect employee administration", "through consistent records", "Plan recruitment, employee profiles, payroll inputs, leave requests, and HR access around clear responsibilities.", "HRIS", [
    ["Recruitment", "Follow applicants through the hiring process", ["Organize applications and interview stages.", "Record hiring decisions with relevant context.", "Limit recruiting records to appropriate users."]],
    ["Employee profiles", "Maintain a dependable employment record", ["Connect role, department, and employment details.", "Keep supporting documents with the profile.", "Define who can approve record changes."]],
    ["Payroll inputs", "Prepare approved information for payroll review", ["Structure the profile fields payroll needs.", "Record approved changes to employee information.", "Define validation before transferring payroll inputs."]],
    ["Leave records", "Make requests and balances understandable", ["Apply the organization’s leave categories.", "Define request and approval responsibilities.", "Record balance adjustments with supporting context."]],
    ["HR access", "Keep sensitive administration controlled", ["Map permissions to HR responsibilities.", "Retain a history of important changes.", "Define review and retention rules for employee records."]],
  ]),
  "/corporate-lms/": section("Connect employee learning", "with qualification records", "Plan learning paths, course materials, assessments, progress tracking, and completion records around your training policy.", "learning", [
    ["Learning paths", "Arrange training around roles and goals", ["Define audiences for each learning assignment.", "Connect required modules and prerequisites.", "Keep course sequences understandable for learners."]],
    ["Course delivery", "Give learning materials a clear structure", ["Organize lessons and supporting resources.", "Match navigation to the training format.", "Define how materials are reviewed and updated."]],
    ["Assessments", "Make completion criteria explicit", ["Define the checks each course requires.", "Keep assessment rules visible to coordinators.", "Record outcomes against the relevant learner."]],
    ["Progress tracking", "Show outstanding training requirements", ["Record enrollment and course activity.", "Give learners a view of their current progress.", "Help coordinators follow incomplete assignments."]],
    ["Qualifications", "Keep evidence linked to training outcomes", ["Retain documented completion records.", "Associate qualifications with agreed criteria.", "Record renewal dates where policy requires them."]],
  ]),
};
export function getFiveCirclesContent(path: string, pageTitle?: string | null): FiveCirclesContent {
  const segments = path.split('/').filter(Boolean);
  const route = segments.length ? `/${segments.join('/').toLowerCase()}/` : '/';
  const title = pageTitle?.trim() || 'Your software project';
  return fiveCirclesContent[route] ?? section(title, 'from requirements to delivery', `Define the users, records, interfaces, and review steps for ${title.toLowerCase()}.`, title.toLowerCase(), [
    ['Requirements', 'Define the work to be supported', ['Identify the people using the workflow.', 'Agree on the inputs and expected outputs.', 'Record the project boundaries.']],
    ['Records', 'Organize the information being used', ['Define important source records.', 'Assign ownership of shared information.', 'Agree on validation rules.']],
    ['Access', 'Make responsibilities explicit', ['Map roles to permitted actions.', 'Identify information requiring restricted access.', 'Plan how permissions will be reviewed.']],
    ['Connections', 'Plan handoffs between applications', ['Document interfaces and record mappings.', 'Validate exchanged information.', 'Define how failed handoffs are reviewed.']],
    ['Delivery', 'Check the workflow before release', ['Define representative acceptance scenarios.', 'Record operational handover requirements.', 'Plan how feedback will be reviewed.']],
  ]);
}
