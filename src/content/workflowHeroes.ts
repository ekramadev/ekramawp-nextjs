export type WorkflowStep = readonly [label: string, description: string];
type SixSteps = readonly [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep];

export interface WorkflowHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  hubLabel: string;
  hubCaption: string;
  cta: string;
  steps: SixSteps;
}

function hero(eyebrow: string, title: string, description: string, hubLabel: string, cta: string, steps: SixSteps): WorkflowHeroContent {
  return { eyebrow, title, description, hubLabel, hubCaption: 'Connected workflow', cta, steps };
}

// Final website copy, keyed by the full route so reused layouts retain each page's meaning.
export const workflowHeroes: Record<string, WorkflowHeroContent> = {
  '/headless-wordpress-front-end/': {
    ...hero('Headless WordPress Front End', 'Connect WordPress Publishing with Your Front End', 'Plan the link between WordPress editing and the front end that presents its content. Define API access, previews and update handling around the site\'s publishing needs.', 'WP FLOW', 'Discuss your WordPress front end', [
      ['Models', 'Define WordPress fields and relationships for editors.'],
      ['Queries', 'Review the content interface and permitted response fields.'],
      ['Views', 'Map approved records to the front-end components.'],
      ['Preview', 'Check draft content through restricted preview paths.'],
      ['Publish', 'Define how published updates reach rendered pages.'],
      ['Checks', 'Review pages with missing content and service failure cases.'],
    ]),
    hubCaption: 'Publishing flow',
  },
  '/transportation-management/': hero('Transportation Management Software', 'Plan Freight, Routes, and Fleet Operations Together', 'Build a transportation platform that connects load planning, vehicle schedules, route selection, and trip updates. Give dispatchers a clearer view of what is moving, where it is, and what needs attention.', 'TMS', 'Discuss your transportation platform', [
    ['Loads', 'Match shipment requirements with container space and vehicle capacity.'],
    ['Scheduling', 'Coordinate vehicle availability, departure times, and delivery windows.'],
    ['Routes', 'Compare route options against stops, distances, and operating constraints.'],
    ['Dispatch', 'Send trip assignments and shipment instructions to the right teams.'],
    ['Tracking', 'Bring trip events and location updates into one operational view.'],
    ['Delivery', 'Record delivery status and exceptions for follow-up and reporting.'],
  ]),
  '/services/data-science/': hero('Data Science Services', 'Turn Business Questions into Testable Models', 'Connect statistical analysis and predictive modeling with the decisions your team needs to make. Start with a clear question, examine the available data, and evaluate whether a model adds useful evidence.', 'DATA', 'Discuss your data science project', [
    ['Questions', 'Define the decision, target outcome, and limits of the analysis.'],
    ['Sources', 'Identify relevant records and check their quality and coverage.'],
    ['Exploration', 'Examine patterns, missing values, and potential sources of bias.'],
    ['Modeling', 'Compare statistical and predictive approaches against a baseline.'],
    ['Validation', 'Evaluate results on held-out data and explain uncertainty.'],
    ['Decisions', 'Present findings in a form that supports practical business choices.'],
  ]),
  '/secure-portals/': hero('Secure Portal Development', 'Give Every User the Right View of Your Business', 'Build customer, partner, and employee portals around clearly defined roles. Connect the information people need with controlled access, straightforward workflows, and a consistent experience.', 'PORTAL', 'Discuss your portal requirements', [
    ['Identity', 'Define sign-in methods and account verification requirements.'],
    ['Roles', 'Map permissions to the tasks each type of user needs to perform.'],
    ['Workspaces', 'Organize documents, requests, and records around user needs.'],
    ['Workflows', 'Route submissions and approvals to the responsible team.'],
    ['Integration', 'Connect portal activity with the relevant business systems.'],
    ['Audit', 'Record significant actions for access reviews and investigations.'],
  ]),
  '/crm-engineering/': hero('Custom CRM Development', 'Connect Customer Records with the Work Behind Every Relationship', 'Design a CRM around your sales and service processes. Bring contacts, conversations, opportunities, and follow-up tasks into a shared system that reflects how your team actually works.', 'CRM', 'Discuss your CRM workflow', [
    ['Contacts', 'Structure customer profiles, organizations, and relationship history.'],
    ['Leads', 'Capture enquiries with the context needed for qualification.'],
    ['Pipeline', 'Track opportunities through defined sales stages and ownership.'],
    ['Follow-up', 'Assign next actions and keep communication records together.'],
    ['Service', 'Connect customer requests with cases and responsible staff.'],
    ['Reporting', 'Review pipeline movement, activity, and unresolved customer needs.'],
  ]),
  '/computer-vision/': hero('Computer Vision Development', 'Build Visual Inspection into Your Operational Workflow', 'Develop image analysis systems for the visual tasks your business needs to handle. Connect image capture, labeled examples, model evaluation, and human review before putting results into production.', 'VISION', 'Discuss your visual inspection use case', [
    ['Capture', 'Define cameras, image quality, and the conditions the system must handle.'],
    ['Labeling', 'Create consistent examples of objects, conditions, or defects.'],
    ['Detection', 'Choose image classification, object detection, or segmentation as needed.'],
    ['Evaluation', 'Measure missed detections and false alarms on representative images.'],
    ['Review', 'Route uncertain predictions to a person who can verify the result.'],
    ['Integration', 'Send approved results into inspection records and operational tools.'],
  ]),
  '/services/machine-learning/': hero('Machine Learning Services', 'Build Models Around a Clear Operational Task', 'Develop machine learning solutions for prediction, classification, and workflow support. Connect model development with representative data, measurable evaluation, and a practical plan for deployment.', 'ML', 'Discuss your machine learning use case', [
    ['Scope', 'Define the task and how useful model performance will be measured.'],
    ['Data', 'Prepare records with consistent labels and appropriate access controls.'],
    ['Training', 'Compare candidate models and tune them against a baseline.'],
    ['Testing', 'Check generalization, error patterns, and important edge cases.'],
    ['Serving', 'Integrate predictions with the application that needs them.'],
    ['Monitoring', 'Review input changes and performance after the model is deployed.'],
  ]),
  '/services/ai-development/': hero('AI Software Development', 'Build AI Features That Fit Your Business Processes', 'Connect models with your application, business data, and operational tools. Define what the system should do, evaluate its outputs, and design clear human checkpoints for consequential actions.', 'AI', 'Plan an AI development project', [
    ['Use Cases', 'Choose a specific task and define the expected output.'],
    ['Context', 'Connect relevant business information with appropriate permissions.'],
    ['Models', 'Compare model capabilities, costs, and deployment constraints.'],
    ['Tools', 'Give the application controlled access to the actions it needs.'],
    ['Evaluation', 'Test outputs against representative scenarios and failure cases.'],
    ['Operations', 'Monitor quality, latency, usage, and human review requirements.'],
  ]),
  '/services/artificial-intelligence/': hero('Artificial Intelligence Integration', 'Bring AI into the Systems Your Team Already Uses', 'Integrate text analysis, document processing, and model-assisted decisions with existing business software. Keep the data flow, review process, and operational limits clear from the start.', 'AI FLOW', 'Discuss AI integration requirements', [
    ['Processes', 'Identify repetitive information tasks within existing workflows.'],
    ['Documents', 'Extract and structure information from business text and files.'],
    ['Context', 'Supply relevant records while respecting user access rules.'],
    ['Reasoning', 'Apply a suitable model to the defined analysis task.'],
    ['Review', 'Give staff a way to inspect and correct model outputs.'],
    ['Systems', 'Write reviewed results back to the tools the team uses.'],
  ]),
  '/data-science-ops/': hero('Data Science Operations', 'Make Analytical Workflows Repeatable and Traceable', 'Connect data preparation, analytical experiments, and model operations. Organize the dependencies and checks that help teams reproduce results and move useful work into regular operation.', 'DATA OPS', 'Discuss your analytics operations', [
    ['Ingestion', 'Collect source records with clear ownership and refresh rules.'],
    ['Quality', 'Check missing values, schema changes, and inconsistent records.'],
    ['Pipelines', 'Make transformation and feature preparation steps repeatable.'],
    ['Experiments', 'Track datasets, settings, and evaluation results together.'],
    ['Releases', 'Package approved analytical outputs for downstream use.'],
    ['Monitoring', 'Watch pipeline failures, data freshness, and model behavior.'],
  ]),
  '/ml-engineering/': hero('Machine Learning Engineering', 'Take a Trained Model into a Working Application', 'Engineer the pipelines and interfaces needed to serve machine learning models. Connect reproducible training, release management, application integration, and production monitoring.', 'ML OPS', 'Discuss your model deployment', [
    ['Datasets', 'Version the data and transformations used in training.'],
    ['Training', 'Run repeatable experiments with recorded model settings.'],
    ['Validation', 'Test candidate releases against agreed performance checks.'],
    ['Packaging', 'Prepare model artifacts and dependencies for deployment.'],
    ['Inference', 'Serve predictions through an interface the application can use.'],
    ['Feedback', 'Capture errors and changing inputs to guide future model updates.'],
  ]),
  '/custom-erp/': hero('Custom ERP Development', 'Connect Departments Around Shared Operational Records', 'Build enterprise resource software around your finance, purchasing, inventory, and operational processes. Replace disconnected records with workflows that carry information between the teams responsible for it.', 'ERP', 'Discuss your ERP requirements', [
    ['Processes', 'Map departmental handoffs, responsibilities, and approval rules.'],
    ['Finance', 'Connect financial entries with the transactions behind them.'],
    ['Purchasing', 'Track requisitions, supplier orders, and receipt records.'],
    ['Inventory', 'Keep material movements and stock balances linked.'],
    ['Approvals', 'Apply role-based controls to operational decisions.'],
    ['Reporting', 'Build views of activity across departments using shared records.'],
  ]),
  '/supply-chain-tech/': hero('Supply Chain Software Development', 'Connect Procurement, Inventory, and Fulfillment', 'Build a clearer record of how materials and products move through your supply chain. Link purchasing decisions, stock movements, warehouse activity, and order fulfillment in one connected workflow.', 'SCM', 'Discuss your supply chain platform', [
    ['Demand', 'Bring demand signals and planning assumptions into view.'],
    ['Suppliers', 'Connect supplier records with purchase commitments and receipts.'],
    ['Inventory', 'Track stock availability and movements across locations.'],
    ['Warehouses', 'Link receiving, storage, picking, and dispatch events.'],
    ['Fulfillment', 'Connect order status with the goods allocated to it.'],
    ['Exceptions', 'Flag shortages, delayed receipts, and handoffs needing attention.'],
  ]),
  '/wms-solutions/': hero('Warehouse Management Systems', 'Keep Warehouse Work Connected from Receiving to Dispatch', 'Design warehouse software around the way goods arrive, move, and leave. Give teams a consistent record of stock locations, picking tasks, packing checks, and shipment handoffs.', 'WMS', 'Discuss your warehouse workflow', [
    ['Receiving', 'Match incoming goods with expected receipts and quantities.'],
    ['Put-away', 'Assign stock to suitable bins and storage locations.'],
    ['Inventory', 'Record movements and support location-level stock checks.'],
    ['Picking', 'Organize pick tasks against order and availability records.'],
    ['Packing', 'Verify items and quantities before packages are closed.'],
    ['Dispatch', 'Connect packed orders with shipment and handover records.'],
  ]),
  '/enterprise-asset-management/': hero('Enterprise Asset Management', 'Track Assets Throughout Their Working Life', 'Connect equipment records, usage information, and maintenance activity. Build a shared view of asset condition and responsibility to support maintenance planning and replacement decisions.', 'EAM', 'Discuss your asset management system', [
    ['Register', 'Create consistent asset records with location and ownership details.'],
    ['Condition', 'Capture inspections, operating readings, and observed issues.'],
    ['Schedules', 'Plan maintenance against time, usage, and asset requirements.'],
    ['Work Orders', 'Assign maintenance jobs and record work performed.'],
    ['Parts', 'Connect required materials and replacement parts to each job.'],
    ['Lifecycle', 'Review maintenance history before renewal or retirement decisions.'],
  ]),
  '/procurement/': hero('Procurement Software Development', 'Connect Purchase Requests with Supplier Decisions', 'Build purchasing workflows that carry requests through sourcing, approval, ordering, and receipt. Give procurement teams a clear record of what was requested, agreed, ordered, and received.', 'BUYING', 'Discuss your procurement workflow', [
    ['Requests', 'Capture purchase requirements and supporting business context.'],
    ['Sourcing', 'Collect supplier quotations in a comparable format.'],
    ['Evaluation', 'Review price, terms, and requirements before supplier selection.'],
    ['Approvals', 'Route spending decisions through the agreed authority levels.'],
    ['Orders', 'Create purchase orders linked to approved requests and suppliers.'],
    ['Receipts', 'Match received goods or services with order and invoice records.'],
  ]),
  '/enterprise-pm/': hero('Enterprise Project Management', 'Connect Project Plans with Progress Across Teams', 'Build project management software that brings schedules, responsibilities, dependencies, and delivery updates into view. Help teams coordinate work across business units using a consistent reporting structure.', 'PROJECTS', 'Discuss your project management platform', [
    ['Scope', 'Record deliverables, milestones, and acceptance requirements.'],
    ['Planning', 'Organize activities, dependencies, and target dates.'],
    ['Resources', 'Assign responsibilities and review team capacity.'],
    ['Progress', 'Collect status updates against the work being delivered.'],
    ['Risks', 'Track issues, changes, and dependencies requiring decisions.'],
    ['Portfolio', 'Compare project status across departments and initiatives.'],
  ]),
  '/logistics-fleet/': hero('Logistics and Fleet Software', 'Connect Vehicle Activity with the Decisions Behind Every Trip', 'Build fleet tools that bring driver records, vehicle telematics, route changes, and maintenance needs into one operational workflow. Give logistics teams the context to respond to changing conditions.', 'FLEET', 'Discuss your fleet software', [
    ['Vehicles', 'Maintain vehicle details, assignments, and availability records.'],
    ['Drivers', 'Track qualifications, documentation, and driver assignments.'],
    ['Routes', 'Coordinate planned trips and necessary route adjustments.'],
    ['Telematics', 'Connect vehicle location and operating data with trip records.'],
    ['Fuel', 'Review fuel entries and consumption in their operational context.'],
    ['Maintenance', 'Connect vehicle issues with service schedules and work records.'],
  ]),
  '/enterprise-commerce/': hero('B2B Commerce Development', 'Build Wholesale Ordering Around Your Customer Agreements', 'Connect company accounts, contract pricing, order approvals, and invoice records. Design a commerce platform that supports business purchasing requirements across the complete order workflow.', 'B2B', 'Discuss your B2B commerce platform', [
    ['Accounts', 'Organize company users, buyer roles, and purchasing permissions.'],
    ['Catalogs', 'Present the products and availability relevant to each account.'],
    ['Pricing', 'Apply agreed customer price tiers and commercial terms.'],
    ['Checkout', 'Support order approvals and business payment requirements.'],
    ['Fulfillment', 'Connect accepted orders with stock and shipment status.'],
    ['Invoicing', 'Match invoices and payment records with the underlying orders.'],
  ]),
  '/corporate-intranets/': hero('Corporate Intranet Development', 'Give Employees a Clear Place to Find Information and Support', 'Build an internal workspace for company knowledge, employee resources, and team communication. Organize access and ownership so people can find the right information and keep it current.', 'INTRANET', 'Discuss your employee workspace', [
    ['Access', 'Connect employee identity with the resources their role requires.'],
    ['Directory', 'Make departments, responsibilities, and contacts easier to find.'],
    ['Knowledge', 'Organize policies, guides, and shared documentation.'],
    ['Updates', 'Publish relevant company news and team announcements.'],
    ['Requests', 'Route employee enquiries to the appropriate support function.'],
    ['Ownership', 'Assign content owners and review dates for important resources.'],
  ]),
  '/financial-planning-analyses/': hero('Financial Planning and Analysis Software', 'Connect Budgets, Forecasts, and Actual Results', 'Build planning tools around your financial drivers and reporting requirements. Bring assumptions, departmental budgets, scenarios, and actual results into a consistent model that teams can review.', 'FP&A', 'Discuss your financial planning system', [
    ['Drivers', 'Define the operational assumptions behind financial projections.'],
    ['Budgets', 'Collect departmental plans using a consistent structure.'],
    ['Forecasts', 'Update projections as new financial information becomes available.'],
    ['Scenarios', 'Compare the effect of different assumptions on expected results.'],
    ['Variances', 'Review differences between planned and actual performance.'],
    ['Reporting', 'Present traceable financial views for management review.'],
  ]),
  '/transaction-systems/': hero('Transaction Processing Systems', 'Keep Transaction Records Connected from Entry to Reconciliation', 'Design transaction workflows with clear states, traceable records, and defined handling for failures. Connect payment events, ledger entries, and settlement information across the systems involved.', 'LEDGER', 'Discuss your transaction workflow', [
    ['Validation', 'Check transaction inputs and required authorization.'],
    ['Processing', 'Coordinate accepted requests with the relevant payment services.'],
    ['Recording', 'Keep durable event and ledger records for each transaction.'],
    ['Exceptions', 'Handle retries, reversals, and incomplete processing explicitly.'],
    ['Settlement', 'Connect provider settlement information with internal records.'],
    ['Reconcile', 'Investigate mismatches and retain an auditable resolution trail.'],
  ]),
  '/enterprise-accounting/': hero('Enterprise Accounting Software', 'Connect Financial Entries with the Records Behind Them', 'Build accounting workflows that organize bookkeeping, account balances, currency handling, and financial review. Keep supporting records connected so entries can be traced and reconciled.', 'BOOKS', 'Discuss your accounting platform', [
    ['Accounts', 'Structure the chart of accounts and posting rules.'],
    ['Entries', 'Record balanced entries with supporting transaction references.'],
    ['Currencies', 'Track original amounts, exchange rates, and reporting currency.'],
    ['Balances', 'Calculate account movements and period balances consistently.'],
    ['Reconcile', 'Compare financial records with bank and subsidiary information.'],
    ['Audit Trail', 'Retain posting history, approvals, and adjustments for review.'],
  ]),
  '/applied-ai/': hero('Applied AI Solutions', 'Put Document and Conversation Intelligence into Everyday Work', 'Build AI features around practical information tasks. Connect document extraction, search, and conversational interfaces with your business systems and a clear process for reviewing results.', 'APPLIED AI', 'Discuss an applied AI use case', [
    ['Documents', 'Extract relevant fields from the files your process handles.'],
    ['Knowledge', 'Find useful context within approved business information.'],
    ['Dialogue', 'Design conversations that help users complete a defined task.'],
    ['Actions', 'Connect reviewed outputs with controlled application workflows.'],
    ['Review', 'Provide human checks and correction paths where needed.'],
    ['Evaluation', 'Test accuracy and usefulness on representative business examples.'],
  ]),
  '/hris-software/': hero('HR Information Systems', 'Connect Employee Information with the Work of Your HR Team', 'Build HR software that organizes recruitment, employee records, payroll inputs, and leave processes. Give teams a consistent source of information with access appropriate to each role.', 'HRIS', 'Discuss your HR system requirements', [
    ['Recruitment', 'Track applicants and the steps in your hiring workflow.'],
    ['Onboarding', 'Coordinate joining information, documents, and assigned tasks.'],
    ['Records', 'Maintain employee profiles with appropriate access permissions.'],
    ['Leave', 'Connect requests, approvals, and available leave balances.'],
    ['Payroll', 'Prepare reviewed employee and attendance inputs for payroll.'],
    ['Reporting', 'Build workforce views from consistent HR records.'],
  ]),
  '/corporate-lms/': hero('Corporate Learning Platforms', 'Connect Training Content with Employee Learning Progress', 'Build a learning management platform around your training paths, assessments, and qualification requirements. Give learners clear next steps and give administrators a consistent view of participation and completion.', 'LEARNING', 'Discuss your learning platform', [
    ['Courses', 'Organize training materials into clear, maintainable courses.'],
    ['Paths', 'Assign learning sequences based on roles and development needs.'],
    ['Enrollment', 'Manage learner access, cohorts, and course assignments.'],
    ['Assessment', 'Check understanding against defined learning objectives.'],
    ['Progress', 'Record participation, completion, and outstanding requirements.'],
    ['Qualifications', 'Track qualification evidence and renewal requirements.'],
  ]),
};

export function getWorkflowHeroContent(path: string, pageTitle?: string | null): WorkflowHeroContent {
  const normalized = `/${path.split('/').filter(Boolean).join('/')}/`;
  const title = pageTitle?.trim() || 'Business Software Development';
  return workflowHeroes[normalized] ?? hero(title, title, `Discuss the requirements, workflows, and integrations for your ${title.toLowerCase()} project.`, 'WORKFLOW', 'Discuss your project', [
    ['Discovery', 'Clarify the business process and the people who use it.'],
    ['Requirements', 'Agree on the capabilities and constraints the project must address.'],
    ['Design', 'Organize interfaces and information around the intended tasks.'],
    ['Integration', 'Connect the relevant data sources and business systems.'],
    ['Validation', 'Check behavior against the agreed requirements.'],
    ['Delivery', 'Plan release, support, and future improvements.'],
  ]);
}
