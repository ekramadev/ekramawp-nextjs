export interface IntelligenceArea {
  label: string;
  title: string;
  description: string;
}

export interface MarketIntelligenceContent {
  title: string;
  description: string;
  cta: string;
  areas: readonly [IntelligenceArea, IntelligenceArea, IntelligenceArea, IntelligenceArea];
}

const area = (label: string, title: string, description: string): IntelligenceArea => ({ label, title, description });
const section = (title: string, description: string, cta: string, areas: MarketIntelligenceContent['areas']): MarketIntelligenceContent => ({ title, description, cta, areas });

// Final section copy, resolved by the full WordPress route on the server.
export const marketIntelligenceContent: Record<string, MarketIntelligenceContent> = {
  '/services/data-science/': section('Turn Business Questions into Analytical Models', 'Shape a data science project around the decisions it needs to support, from preparing source records to interpreting model outputs.', 'Discuss your data science project', [
    area('Data preparation', 'Establish a dependable analytical dataset', 'Review source coverage, missing values, and inconsistent definitions before choosing a statistical approach.'),
    area('Statistical modeling', 'Choose models that fit the question', 'Explore relationships, forecasts, or classifications with methods suited to the available data and business context.'),
    area('Model validation', 'Test assumptions before using predictions', 'Compare results against a baseline and examine uncertainty, outliers, and how well the model handles unseen records.'),
    area('Decision support', 'Make findings useful to the people deciding', 'Present model outputs with clear explanations, relevant limitations, and a path to dashboards or operational tools.'),
  ]),
  '/secure-portals/': section('Give Each Portal User the Right Workspace', 'Connect customer or partner self-service with controlled access to the records, documents, and requests each audience needs.', 'Plan your secure portal', [
    area('Identity and access', 'Define who can enter and what they can do', 'Map customer, partner, and administrator roles to sign-in requirements and permissions for each portal action.'),
    area('Self-service tasks', 'Build around recurring user requests', 'Organize account updates, document exchange, and service requests into clear journeys with visible status.'),
    area('System connections', 'Connect portal activity with internal records', 'Define how approved data moves between the portal and existing business systems, including validation and error handling.'),
    area('Activity review', 'Keep important actions traceable', 'Plan access reviews, change history, and administrative oversight around the sensitivity of the information being shared.'),
  ]),
  '/services/digital-transformation/': section('Connect People, Processes, and Business Systems', 'Start with how work moves today, then identify practical changes to forms, approvals, records, and reporting.', 'Discuss your transformation priorities', [
    area('Process discovery', 'Find the handoffs that slow work down', 'Map teams, tools, and manual steps so the scope addresses a defined operational problem.'),
    area('Digital workflows', 'Give recurring tasks a clear path', 'Translate paper forms and spreadsheet handoffs into structured requests, approvals, and status updates.'),
    area('System integration', 'Keep shared records connected', 'Plan data ownership and interfaces between existing applications and new workflow tools.'),
    area('Operational review', 'Support adoption and ongoing improvement', 'Define useful reporting, user guidance, and review points so teams can assess how the changed process works.'),
  ]),
  '/crm-engineering/': section('Keep Customer Context Connected', 'Design a CRM around the relationships, sales stages, and service handoffs your team actually manages.', 'Discuss your CRM workflow', [
    area('Customer records', 'Build a shared view of each relationship', 'Bring account details, contacts, and interaction history into structured records with clear ownership.'),
    area('Sales pipeline', 'Match stages to your sales process', 'Define opportunities, follow-up tasks, and qualification rules around the way your team moves a deal forward.'),
    area('Service handoffs', 'Carry context from sales into delivery', 'Connect requests and account history so service teams can see the information needed for the next action.'),
    area('CRM reporting', 'Make follow-up and pipeline activity visible', 'Choose reports for open opportunities, task ownership, and customer activity using agreed field definitions.'),
  ]),
  '/computer-vision/': section('Design Visual Inspection Around Real Conditions', 'Connect image capture, model evaluation, and inspection review to the environment where a vision system will operate.', 'Discuss your visual inspection use case', [
    area('Image capture', 'Start with representative visual inputs', 'Consider lighting, camera position, object variation, and image quality when collecting inspection examples.'),
    area('Vision models', 'Define what the system needs to recognize', 'Scope detection, classification, or segmentation tasks and prepare labels that reflect the inspection criteria.'),
    area('Inspection review', 'Handle uncertain detections deliberately', 'Evaluate missed and incorrect detections, then define when an operator should review a result.'),
    area('Workflow integration', 'Connect inspection outputs to the next action', 'Plan how findings reach production records, quality review queues, or other operational systems.'),
  ]),
  '/services/machine-learning/': section('Build Machine Learning Around a Defined Task', 'Choose a useful prediction or classification problem, validate it against real data, and plan how the output fits into daily work.', 'Discuss your machine learning use case', [
    area('Problem definition', 'Specify the decision a model will support', 'Agree on the target outcome, available inputs, and a baseline before selecting an algorithm.'),
    area('Training data', 'Prepare examples that reflect the task', 'Review data quality and labeling, and separate training and evaluation records to support meaningful testing.'),
    area('Model evaluation', 'Assess the errors that matter in practice', 'Compare candidate models using criteria that reflect the cost of missed predictions and incorrect classifications.'),
    area('Workflow delivery', 'Put predictions where people can use them', 'Plan application interfaces, review steps, and feedback collection around the model output.'),
  ]),
  '/services/software-modernization/': section('Modernize Legacy Software in Manageable Steps', 'Map existing dependencies and business rules before deciding what to retain, replace, or move to a cloud architecture.', 'Plan your modernization roadmap', [
    area('System assessment', 'Understand the application before changing it', 'Review business-critical functions, integrations, data structures, and constraints in the current system.'),
    area('Target architecture', 'Choose a practical modernization path', 'Compare incremental refactoring, replacement, and migration options against the needs of the application.'),
    area('Data migration', 'Plan how records move and reconcile', 'Define mappings, validation checks, and recovery steps for transferring data between old and new systems.'),
    area('Phased rollout', 'Verify each release with the teams using it', 'Stage changes around testing, operational handovers, and a defined rollback approach.'),
  ]),
  '/services/ai-development/': section('Engineer AI Features from Input to Action', 'Define the enterprise task first, then connect data preparation, model behavior, and application logic into a reviewable workflow.', 'Scope your AI development project', [
    area('Task requirements', 'Set a clear boundary for the AI feature', 'Document the inputs, expected outputs, and situations that require a person to make the final decision.'),
    area('Data and models', 'Choose an approach suited to your inputs', 'Assess available records and model options for the analytical or automation task being built.'),
    area('Application logic', 'Connect model output to business rules', 'Validate outputs before they update records, trigger workflows, or appear in an operational interface.'),
    area('Evaluation loop', 'Review behavior with representative cases', 'Test expected and unusual inputs, collect feedback, and track changes to the model and surrounding code.'),
  ]),
  '/services/artificial-intelligence/': section('Connect AI Capabilities to Operational Rules', 'Plan cloud model use, text interpretation, and automation around the information and decisions your business process requires.', 'Explore your AI workflow', [
    area('Cloud model use', 'Define the model’s role in the process', 'Identify what information the model receives, what it returns, and which tasks remain under human control.'),
    area('Text interpretation', 'Turn business text into structured inputs', 'Define the fields, categories, and exceptions needed when interpreting messages or documents.'),
    area('Automation rules', 'Apply explicit checks before taking action', 'Connect interpreted outputs to validation rules, approval steps, and defined exception handling.'),
    area('Output review', 'Make AI-assisted decisions inspectable', 'Preserve relevant context and feedback so teams can investigate unexpected outputs and refine the process.'),
  ]),
  '/data-science-ops/': section('Keep Analytical Work Reproducible and Usable', 'Connect record preparation, repeatable computations, and predictive model operations so analytical outputs can be maintained over time.', 'Discuss your data operations', [
    area('Record quality', 'Resolve inconsistent source records', 'Define validation, deduplication, and missing-value handling before data enters analytical workflows.'),
    area('Repeatable analysis', 'Make computations traceable', 'Organize transformations and calculations with versioned logic, defined inputs, and repeatable execution.'),
    area('Model operations', 'Prepare predictive outputs for regular use', 'Plan model packaging, scheduled runs, and interfaces for the systems consuming predictions.'),
    area('Data monitoring', 'Review changes in inputs and outputs', 'Track pipeline failures and data shifts so the team can investigate when an analytical result changes.'),
  ]),
  '/ml-engineering/': section('Take Models Through Training, Testing, and Release', 'Build the engineering path around a model: reproducible training, evaluation, application serving, and ongoing operational checks.', 'Plan your ML engineering workflow', [
    area('Training pipelines', 'Make training runs reproducible', 'Version datasets, configuration, and training code so candidate models can be compared and rebuilt.'),
    area('Evaluation gates', 'Define what a release must satisfy', 'Test models with held-out examples and task-specific acceptance criteria before promoting a version.'),
    area('Model serving', 'Connect inference to application requirements', 'Plan interfaces, resource use, failure handling, and version selection for production predictions.'),
    area('Release monitoring', 'Keep deployed model behavior visible', 'Review inference errors, input changes, and feedback with a process for updating or reverting model versions.'),
  ]),
  '/saas-architecture/': section('Build a Clear Foundation for Multi-Tenant SaaS', 'Define tenant boundaries, shared platform services, and operational controls before expanding the application.', 'Discuss your SaaS architecture', [
    area('Tenant boundaries', 'Keep each organization’s access explicit', 'Map tenant identity and permissions through application requests, background tasks, and administrative tools.'),
    area('Data partitioning', 'Choose how tenant records are organized', 'Evaluate database and schema boundaries, query scoping, and migration needs for your tenancy model.'),
    area('Platform services', 'Structure shared application capabilities', 'Plan common services and interfaces while accounting for tenant-specific settings and resource demands.'),
    area('Operations', 'Make tenant-aware maintenance practical', 'Define deployment, backup, monitoring, and support workflows with visibility into the tenant affected.'),
  ]),
  '/adobe-commerce-tech/': section('Connect the Adobe Commerce Buying Journey', 'Plan catalog structure, cart behavior, checkout, and order integration as parts of one storefront workflow.', 'Discuss your Adobe Commerce project', [
    area('Catalog structure', 'Organize products for the storefront', 'Map attributes, categories, variants, and inventory sources to the way customers browse and select items.'),
    area('Cart behavior', 'Keep pricing and availability understandable', 'Define how product options, promotions, shipping estimates, and stock checks affect the cart.'),
    area('Checkout flow', 'Guide customers through the transaction', 'Plan address entry, payment integration, validation, and clear recovery from checkout errors.'),
    area('Order connections', 'Carry completed orders into business systems', 'Define order status, payment references, and fulfillment data exchanges with connected services.'),
  ]),
  '/custom-erp/': section('Connect Department Workflows Through Shared Records', 'Design ERP modules around the financial, logistics, and material records that need to move between teams.', 'Map your ERP requirements', [
    area('Shared records', 'Agree on the records departments rely on', 'Define items, suppliers, accounts, and ownership rules so modules refer to consistent business entities.'),
    area('Materials and logistics', 'Trace stock movements through operations', 'Connect receiving, transfers, consumption, and shipment records to the relevant locations and documents.'),
    area('Financial workflows', 'Link operational events with bookkeeping', 'Map approved purchases, invoices, and other transactions to the financial records your process requires.'),
    area('Controls and reporting', 'Give each team a useful view of activity', 'Plan permissions, approvals, reconciliation checks, and reports around department responsibilities.'),
  ]),
  '/transportation-management/': section('Connect Freight Planning with Transit Visibility', 'Bring shipment requirements, vehicle capacity, route decisions, and transit updates into a shared transportation workflow.', 'Discuss your transportation workflow', [
    area('Load planning', 'Match cargo requirements with available capacity', 'Organize shipment dimensions, handling needs, and vehicle availability before assigning a load.'),
    area('Routes and schedules', 'Plan journeys around operational constraints', 'Consider delivery windows, stops, driver availability, and route choices when building a transport schedule.'),
    area('Dispatch coordination', 'Keep dispatchers and drivers aligned', 'Connect assignments, trip documents, and status changes so teams can follow the current plan and handle exceptions.'),
    area('Transit records', 'Trace a shipment through delivery', 'Capture milestones, delays, and delivery confirmation with references back to the load and trip.'),
  ]),
  '/supply-chain-tech/': section('Trace Supply from Purchasing to Fulfillment', 'Connect procurement records, inventory movements, and warehouse handoffs so teams can follow how an order is supplied.', 'Discuss your supply chain systems', [
    area('Procurement links', 'Connect incoming supply to purchasing records', 'Associate supplier orders and expected receipts with the items and quantities operations are waiting for.'),
    area('Inventory tracing', 'Follow materials across locations', 'Record receipts, transfers, and allocations with the item references needed to trace availability.'),
    area('Warehouse handoffs', 'Carry order context into fulfillment', 'Connect stock allocation, picking, and packing activity to the requests that triggered the work.'),
    area('Exception visibility', 'Surface gaps that need attention', 'Define views for shortages, late receipts, and unmatched movements so teams can investigate the underlying records.'),
  ]),
  '/wms-solutions/': section('Give Every Warehouse Movement a Clear Record', 'Connect bin locations, item quantities, picking activity, and packing checks in a warehouse workflow built around traceable stock movements.', 'Plan your warehouse workflow', [
    area('Receiving and bins', 'Place incoming stock with a location reference', 'Record received quantities and put-away destinations so warehouse teams can find the items they need.'),
    area('Inventory matching', 'Reconcile recorded stock with warehouse counts', 'Support stock checks, discrepancy review, and approved adjustments using item and bin records.'),
    area('Picking tasks', 'Guide fulfillment from the correct locations', 'Connect order lines to allocated stock, picking instructions, and confirmation of the quantities collected.'),
    area('Packing verification', 'Check the shipment before dispatch', 'Match packed items and quantities against the order and packing slip, with a path for resolving differences.'),
  ]),
  '/enterprise-asset-management/': section('Keep Asset History Connected to Maintenance', 'Bring equipment records, operating observations, and scheduled work together across the asset lifecycle.', 'Discuss your asset management system', [
    area('Asset register', 'Give each asset a dependable identity', 'Organize equipment details, location, ownership, and supporting documents in a shared asset record.'),
    area('Operating records', 'Capture the observations that inform upkeep', 'Associate usage readings, condition notes, and reported faults with the equipment they describe.'),
    area('Maintenance plans', 'Turn service requirements into scheduled work', 'Define recurring tasks, responsible teams, and the parts or instructions needed to complete maintenance.'),
    area('Lifecycle review', 'Preserve the history behind asset decisions', 'Connect work orders, repairs, and retirement records so teams can review the full equipment history.'),
  ]),
  '/procurement/': section('Make Purchase Decisions Traceable', 'Connect requisitions, supplier comparisons, approvals, and purchase orders without losing the context behind a buying decision.', 'Discuss your procurement process', [
    area('Purchase requests', 'Capture the need before sourcing begins', 'Collect requested items, quantities, budget context, and the team responsible for the requirement.'),
    area('Supplier comparison', 'Review bids against consistent criteria', 'Compare supplier pricing, terms, availability, and supporting information in a structured evaluation.'),
    area('Approval routing', 'Send decisions to the right owners', 'Define approval paths around department responsibilities, purchase categories, and your spending rules.'),
    area('Purchase orders', 'Carry approved decisions into ordering', 'Create purchase order records linked to the request, selected supplier, and subsequent receipt checks.'),
  ]),
  '/enterprise-pm/': section('Connect Project Plans Across Business Units', 'Give project teams a shared structure for milestones, dependencies, ownership, and progress reporting.', 'Discuss your project management workflow', [
    area('Project structure', 'Break delivery into owned pieces of work', 'Organize programs, projects, and tasks with clear scope, responsible teams, and agreed milestones.'),
    area('Schedules', 'Make dependencies part of the plan', 'Connect task dates, handoffs, and resource availability so teams can understand the effect of a schedule change.'),
    area('Progress updates', 'Keep status tied to the work being done', 'Collect task updates, blockers, and decisions with the project references needed to follow up.'),
    area('Portfolio reporting', 'Compare progress using shared definitions', 'Build views of milestones, risks, and workload across business units without hiding project-level context.'),
  ]),
  '/enterprise-commerce/': section('Build B2B Ordering Around Commercial Agreements', 'Connect company accounts, negotiated pricing, contract checkout, and invoice records throughout the wholesale buying process.', 'Plan your B2B commerce workflow', [
    area('Company accounts', 'Represent the buyer’s organization', 'Map company users, purchasing roles, account details, and the approvals required before an order is placed.'),
    area('Contract pricing', 'Apply the right terms to each account', 'Define company price tiers, product access, order quantities, and negotiated conditions in the buying interface.'),
    area('Wholesale checkout', 'Support the way business buyers order', 'Plan purchase references, billing terms, delivery details, and validation for account-based checkout.'),
    area('Invoice matching', 'Keep orders and billing records connected', 'Link order lines, contract terms, and invoice references so finance teams can review discrepancies.'),
  ]),
  '/corporate-intranets/': section('Create a Clear Home for Internal Information', 'Organize employee resources, shared documents, and company communications around the teams that need them.', 'Plan your corporate intranet', [
    area('Employee access', 'Match access to employee responsibilities', 'Define sign-in and role-based permissions for departments, administrators, and restricted internal resources.'),
    area('Document resources', 'Make internal guidance easier to locate', 'Structure document libraries with clear categories, ownership, and review responsibilities.'),
    area('Company updates', 'Give communications a defined audience', 'Plan publishing and distribution for leadership announcements, team news, and operational notices.'),
    area('People directory', 'Connect employees with the right contacts', 'Organize directory profiles, departments, and resource links with appropriate visibility and maintenance rules.'),
  ]),
  '/transaction-systems/': section('Keep Payment Events and Settlement Records Aligned', 'Design transaction workflows around traceable events, controlled access, and clear handling of incomplete or mismatched records.', 'Discuss your transaction system requirements', [
    area('Event recording', 'Capture each transaction with a stable reference', 'Define event identifiers, timestamps, statuses, and duplicate-handling rules for incoming payment activity.'),
    area('Ledger matching', 'Connect events with the records they affect', 'Map payment references to ledger entries and define reconciliation checks for missing or conflicting information.'),
    area('Security review', 'Control access to sensitive transaction actions', 'Plan permissions, audit history, and exception review around the operations performed by users and services.'),
    area('Settlement tracking', 'Follow funds through the settlement process', 'Track provider references, currencies, fees, and settlement statuses with a review path for unmatched records.'),
  ]),
  '/applied-ai/': section('Bring Document and Conversation Tools into Daily Work', 'Integrate AI-assisted text processing and conversational features into the business interfaces your teams already use.', 'Discuss your applied AI use case', [
    area('Document intake', 'Prepare business documents for processing', 'Define accepted inputs, file handling, and the context needed before text extraction begins.'),
    area('Text extraction', 'Map extracted text to useful fields', 'Specify document fields and validation rules, with review steps for ambiguous or incomplete information.'),
    area('Conversation flows', 'Give users a clear way to request help', 'Scope supported questions and actions, approved context sources, and handoffs when the interface cannot resolve a request.'),
    area('Application actions', 'Keep assisted workflows under control', 'Connect reviewed outputs to business records with permission checks and a record of the action taken.'),
  ]),
  '/hris-software/': section('Connect Hiring and Employee Administration', 'Bring recruitment, employee profiles, payroll inputs, and leave records into a structured HR workflow.', 'Discuss your HRIS requirements', [
    area('Recruitment tracking', 'Follow candidates through the hiring process', 'Organize applications, interview stages, and hiring decisions with access suited to recruiting responsibilities.'),
    area('Employee records', 'Maintain a consistent employee profile', 'Connect role, department, employment details, and documents with clear rules for updates and access.'),
    area('Payroll inputs', 'Prepare the records payroll needs', 'Structure approved employee changes and payroll profile fields for review or transfer to your payroll system.'),
    area('Leave management', 'Make requests and balances understandable', 'Define leave types, accrual rules, approvals, and balance adjustments around your organization’s policies.'),
  ]),
  '/corporate-lms/': section('Connect Training Paths with Qualification Records', 'Organize employee learning around assigned courses, visible progress, and documented completion criteria.', 'Plan your corporate learning platform', [
    area('Training paths', 'Arrange courses around roles and goals', 'Build learning tracks with prerequisites, required modules, and a defined audience for each assignment.'),
    area('Course delivery', 'Give learners a clear route through materials', 'Organize lessons, resources, and assessments with navigation suited to the training format.'),
    area('Progress tracking', 'Keep learners and coordinators informed', 'Record enrollment, activity, and completion status so teams can follow outstanding training requirements.'),
    area('Qualification records', 'Connect completion with agreed criteria', 'Define assessment rules, qualification evidence, and renewal dates where your training policy requires them.'),
  ]),
};

export function getMarketIntelligenceContent(path: string, pageTitle?: string | null): MarketIntelligenceContent {
  const normalized = `/${path.split('/').filter(Boolean).join('/')}/`;
  const title = pageTitle?.trim() || 'Your software project';
  return marketIntelligenceContent[normalized] ?? section(`${title}: Plan the Connected Workflow`, `Define the information, tasks, and system connections needed for ${title.toLowerCase()}.`, `Discuss ${title.toLowerCase()}`, [
    area('Requirements', 'Start with the work this page describes', `Identify the users, inputs, and desired outcomes for ${title.toLowerCase()}.`),
    area('Records', 'Agree on the information the workflow needs', 'Define source records, ownership, and validation before designing the application flow.'),
    area('Connections', 'Plan the handoffs between people and systems', 'Map interfaces and review steps around the responsibilities of each team.'),
    area('Review', 'Define how the workflow will be checked', 'Choose acceptance criteria and exception handling before releasing the implementation.'),
  ]);
}
