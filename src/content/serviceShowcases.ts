export interface TraditionalHeroCard {
  metric: string;
  label: string;
  title: string;
  body: string;
}

export interface TraditionalHeroContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  ctaLabel: string;
  leftLabel: string;
  leftBadge: string;
  rightLabel: string;
  centerTitle: string;
  centerBody: string;
  footerMark: string;
  cards: readonly [TraditionalHeroCard, TraditionalHeroCard, TraditionalHeroCard];
}

export interface CheatsheetItem {
  tag: string;
  desc: string;
}

export interface HtmlCheatsheetContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  firstTitle: string;
  firstIntro: string;
  firstItems: readonly CheatsheetItem[];
  secondTitle: string;
  secondIntro: string;
  secondItems: readonly CheatsheetItem[];
}

const card = (metric: string, label: string, title: string, body: string): TraditionalHeroCard => ({ metric, label, title, body });

export const traditionalHeroContent = {
  "/services/digital-transformation/": {
    titleLead: "Digital Operations", titleAccent: "Designed to Connect.",
    intro: "We connect workflows, data, and customer touchpoints so teams can replace disconnected manual steps with maintainable digital operations.",
    ctaLabel: "Explore Digital Transformation", leftLabel: "workflow", leftBadge: "Ops", rightLabel: "Data", centerTitle: "Connected Change\nArchitecture",
    centerBody: "Map the current operation, define practical target workflows, and introduce systems that teams can adopt without losing essential controls.", footerMark: "D",
    cards: [card("Clear", "Processes", "Workflow Map", "Document handoffs, decisions, and system boundaries before automating the work."), card("Linked", "Systems", "Integration", "Connect operational tools and data flows around accountable ownership."), card("Phased", "Delivery", "Adoption", "Release changes in manageable stages with feedback from the people using them.")],
  },
  "/services/web-development/": {
    titleLead: "Web Experiences", titleAccent: "Built Around Users.",
    intro: "We build responsive websites and web applications with clear information architecture, accessible interfaces, and maintainable frontend and backend foundations.",
    ctaLabel: "Explore Web Development", leftLabel: "frontend", leftBadge: "UI", rightLabel: "Backend", centerTitle: "Responsive Web\nDelivery",
    centerBody: "Combine semantic page structure, reusable interface components, dependable application logic, and device-aware testing in one delivery workflow.", footerMark: "W",
    cards: [card("Usable", "Interfaces", "Responsive UI", "Shape navigation, content, and controls for desktop, tablet, and mobile use."), card("Stable", "Services", "Application Logic", "Organize server workflows, data access, and integrations for maintainable releases."), card("Ready", "Quality", "Release Checks", "Review accessibility, browser behavior, content states, and key user journeys.")],
  },
  "/digital-retail/": {
    titleLead: "Digital Retail", titleAccent: "Across Every Channel.",
    intro: "We develop connected retail experiences that coordinate product discovery, catalog content, checkout flows, and operational data across customer channels.",
    ctaLabel: "Explore Digital Retail", leftLabel: "catalog", leftBadge: "SKU", rightLabel: "Orders", centerTitle: "Omnichannel Retail\nFoundation",
    centerBody: "Align storefront journeys with catalog, inventory, order, and customer-service workflows so each channel works from consistent information.", footerMark: "R",
    cards: [card("Unified", "Catalog", "Product Data", "Structure product attributes and content for reliable discovery across channels."), card("Joined", "Journeys", "Commerce Flow", "Connect browsing, cart, checkout, and account steps without fragmented handoffs."), card("Visible", "Operations", "Order Context", "Present fulfillment and service teams with the order details needed to act.")],
  },
  "/telecom-tech/": {
    titleLead: "Telecom Software", titleAccent: "For Reliable Operations.",
    intro: "We engineer software for service operations, network-facing workflows, customer support, and the data exchanges telecommunications teams depend on.",
    ctaLabel: "Explore Telecom Technology", leftLabel: "network", leftBadge: "OSS", rightLabel: "Support", centerTitle: "Telecom Operations\nArchitecture",
    centerBody: "Model service events, operational queues, and system integrations so teams can trace issues and coordinate work across complex telecom environments.", footerMark: "T",
    cards: [card("Aware", "Networks", "Service Context", "Bring relevant network and service information into operational workflows."), card("Tracked", "Incidents", "Issue Flow", "Route incidents through clear states, owners, and resolution information."), card("Joined", "Platforms", "System Exchange", "Integrate operational and customer systems through governed interfaces.")],
  },
  "/retail-banking-it/": {
    titleLead: "Retail Banking", titleAccent: "With Controlled Journeys.",
    intro: "We build digital banking interfaces and supporting workflows that keep customer actions, account data, and operational controls clearly connected.",
    ctaLabel: "Explore Banking Technology", leftLabel: "accounts", leftBadge: "Core", rightLabel: "Controls", centerTitle: "Digital Banking\nExperience",
    centerBody: "Design customer journeys around verified data, explicit permissions, dependable service integrations, and reviewable operational steps.", footerMark: "B",
    cards: [card("Clear", "Journeys", "Customer Tasks", "Organize account, payment, and service actions into understandable digital steps."), card("Guarded", "Access", "Permission Design", "Apply role and session controls around sensitive banking functions."), card("Tracked", "Operations", "Review Trail", "Keep important actions and state changes available for operational review.")],
  },
  "/services/software-modernization/": {
    titleLead: "Legacy Systems", titleAccent: "Moved Forward Carefully.",
    intro: "We modernize aging applications through staged architecture, interface, data, and deployment changes that preserve essential business behavior.",
    ctaLabel: "Explore Software Modernization", leftLabel: "legacy", leftBadge: "Map", rightLabel: "Modern", centerTitle: "Practical Modernization\nPath",
    centerBody: "Assess dependencies, isolate valuable capabilities, and sequence replacements or migrations around operational risk and real release constraints.", footerMark: "M",
    cards: [card("Known", "Dependencies", "System Map", "Identify integrations, data ownership, and critical behavior before changing the platform."), card("Staged", "Changes", "Migration Plan", "Break modernization into testable increments instead of one disruptive replacement."), card("Stable", "Platform", "Delivery Base", "Improve deployment, observability, and maintenance alongside application changes.")],
  },
  "/saas-architecture/": {
    titleLead: "SaaS Foundations", titleAccent: "Ready for Multiple Tenants.",
    intro: "We design multi-tenant application foundations with explicit data boundaries, configurable workflows, and operational patterns suited to shared cloud services.",
    ctaLabel: "Explore SaaS Architecture", leftLabel: "tenants", leftBadge: "SaaS", rightLabel: "Platform", centerTitle: "Multi-Tenant SaaS\nArchitecture",
    centerBody: "Define tenancy, authorization, configuration, data partitioning, and service responsibilities before product features create hard-to-change coupling.", footerMark: "S",
    cards: [card("Apart", "Tenants", "Data Boundaries", "Choose tenant-aware storage and access patterns for the product's actual risk model."), card("Varied", "Product", "Configuration", "Separate shared behavior from tenant-level settings and controlled variation."), card("Visible", "Operations", "Service Health", "Expose tenant context in logs, support workflows, and operational diagnostics.")],
  },
  "/javascript-devs/": {
    titleLead: "JavaScript Systems", titleAccent: "Across Client and Server.",
    intro: "We develop interactive interfaces and server workflows with reusable JavaScript modules, clear state handling, and maintainable service boundaries.",
    ctaLabel: "Explore JavaScript Engineering", leftLabel: "browser", leftBadge: "JS", rightLabel: "Server", centerTitle: "Full-Stack JavaScript\nDelivery",
    centerBody: "Coordinate components, events, asynchronous work, APIs, and tests so browser and server code evolve as one understandable system.", footerMark: "J",
    cards: [card("Modular", "Interfaces", "Component Logic", "Keep rendering, state, and user events organized around clear responsibilities."), card("Defined", "Services", "API Workflows", "Model validation, asynchronous tasks, and errors at dependable server boundaries."), card("Checked", "Releases", "Runtime Quality", "Test important states and integrations across the client-server journey.")],
  },
  "/react-native-experts/": {
    titleLead: "Mobile Experiences", titleAccent: "Shared Across Platforms.",
    intro: "We build React Native applications with shared product logic and platform-aware interfaces for iOS and Android devices.",
    ctaLabel: "Explore React Native Development", leftLabel: "iOS", leftBadge: "RN", rightLabel: "Android", centerTitle: "Cross-Platform Mobile\nDelivery",
    centerBody: "Compose native controls, navigation, data flows, device integrations, and platform checks around a maintainable shared application foundation.", footerMark: "N",
    cards: [card("Native", "Controls", "Mobile UI", "Use platform-backed components for readable, touch-friendly application screens."), card("Shared", "Logic", "Application State", "Reuse domain and data logic while keeping platform differences explicit."), card("Tested", "Devices", "Platform Checks", "Review behavior, accessibility, and edge states on supported iOS and Android targets.")],
  },
  "/adobe-commerce-tech/": {
    titleLead: "Adobe Commerce", titleAccent: "For Complex Catalogs.",
    intro: "We develop Adobe Commerce storefront and operational extensions around catalog, cart, checkout, customer, and transaction workflows.",
    ctaLabel: "Explore Adobe Commerce", leftLabel: "catalog", leftBadge: "AC", rightLabel: "Checkout", centerTitle: "Commerce Platform\nEngineering",
    centerBody: "Connect merchandising and customer journeys to dependable commerce services without obscuring the platform's operational responsibilities.", footerMark: "A",
    cards: [card("Ordered", "Catalog", "Product Model", "Organize attributes, categories, and content for maintainable merchandising."), card("Joined", "Checkout", "Purchase Flow", "Coordinate cart, address, payment, and confirmation states across the journey."), card("Linked", "Operations", "Commerce Exchange", "Connect orders and customer events to the systems that process them.")],
  },
  "/med-devices-software/": {
    titleLead: "Medical Device Software", titleAccent: "With Explicit Controls.",
    intro: "We develop software around device instructions, diagnostic calculations, data capture, and review workflows with clear requirements and traceability.",
    ctaLabel: "Explore Medical Device Software", leftLabel: "device", leftBadge: "Med", rightLabel: "Review", centerTitle: "Device Software\nWorkflow",
    centerBody: "Translate device behavior and user tasks into testable software responsibilities, documented states, and reviewable data handling.", footerMark: "D",
    cards: [card("Defined", "Behavior", "Requirements", "Connect software behavior to documented device and user requirements."), card("Checked", "Calculations", "Validation Flow", "Make diagnostic inputs, transformations, and exceptional states reviewable."), card("Logged", "Evidence", "Traceability", "Link implementation and tests to the requirements they address.")],
  },
  "/behavioral-health-it/": {
    titleLead: "Behavioral Health", titleAccent: "Workflows That Stay Connected.",
    intro: "We build patient, scheduling, treatment, and staff workflows that organize sensitive behavioral-health information around appropriate access.",
    ctaLabel: "Explore Behavioral Health IT", leftLabel: "patients", leftBadge: "Care", rightLabel: "Teams", centerTitle: "Behavioral Health\nCoordination",
    centerBody: "Connect appointment, milestone, communication, and clinical-support tasks while keeping responsibilities and data visibility explicit.", footerMark: "H",
    cards: [card("Private", "Access", "Role Boundaries", "Limit sensitive information and actions according to the user's care role."), card("Visible", "Progress", "Milestone Context", "Present treatment milestones and relevant updates in a coherent timeline."), card("Joined", "Scheduling", "Care Workflow", "Link appointments, follow-up steps, and team responsibilities.")],
  },
  "/lab-info-systems/": {
    titleLead: "Laboratory Systems", titleAccent: "From Specimen to Result.",
    intro: "We develop laboratory information workflows for specimen tracking, experimental records, instrument exchanges, and result review.",
    ctaLabel: "Explore Laboratory Systems", leftLabel: "samples", leftBadge: "Lab", rightLabel: "Results", centerTitle: "Laboratory Information\nFlow",
    centerBody: "Model identifiers, custody states, instrument data, and review steps so laboratory records remain coherent through the process.", footerMark: "L",
    cards: [card("Tracked", "Specimens", "Chain of State", "Record specimen identity, location, and processing status through each step."), card("Linked", "Instruments", "Data Exchange", "Connect analytical output to the right run, sample, and review context."), card("Checked", "Records", "Result Workflow", "Organize observations, approvals, and corrections around an auditable result history.")],
  },
  "/pharma-biotech/": {
    titleLead: "Pharma and Biotech", titleAccent: "Data With Clear Lineage.",
    intro: "We build software for study data, compound records, trial-stage workflows, and controlled collaboration across scientific teams.",
    ctaLabel: "Explore Pharma Technology", leftLabel: "studies", leftBadge: "Bio", rightLabel: "Data", centerTitle: "Scientific Data\nOperations",
    centerBody: "Structure research and trial information around identifiers, permissions, review states, and reproducible exchanges between systems.", footerMark: "P",
    cards: [card("Ordered", "Studies", "Record Model", "Organize study entities and observations around consistent identifiers."), card("Guarded", "Compounds", "Data Access", "Apply explicit permissions to sensitive compound and program information."), card("Tracked", "Phases", "Review History", "Preserve status changes, decisions, and supporting records across trial stages.")],
  },
  "/medtech-startups/": {
    titleLead: "Medtech Products", titleAccent: "Built for Early Decisions.",
    intro: "We help medtech teams turn product requirements into interoperable interfaces and focused software increments that can be tested and refined.",
    ctaLabel: "Explore Medtech Development", leftLabel: "product", leftBadge: "MVP", rightLabel: "Clinical", centerTitle: "Medtech Product\nFoundation",
    centerBody: "Prioritize essential workflows, define integration boundaries, and document the product decisions that influence later validation and scale.", footerMark: "M",
    cards: [card("Focused", "Scope", "Core Workflow", "Center the first release on essential users, tasks, and data exchanges."), card("Open", "Interfaces", "Interoperability", "Define external system boundaries and data contracts early in the product."), card("Ready", "Evidence", "Decision Record", "Keep requirements, assumptions, and test outcomes connected as the product evolves.")],
  },
  "/public-health-systems/": {
    titleLead: "Public Health Systems", titleAccent: "For Shared Insight.",
    intro: "We develop public-health software for community indicators, reporting workflows, diagnostic records, and access to distributed health information.",
    ctaLabel: "Explore Public Health Systems", leftLabel: "community", leftBadge: "PH", rightLabel: "Reports", centerTitle: "Public Health Data\nCoordination",
    centerBody: "Bring reporting sources into governed structures that help teams interpret community trends and trace the records behind them.", footerMark: "P",
    cards: [card("Joined", "Sources", "Data Intake", "Normalize incoming records while retaining source and reporting context."), card("Mapped", "Trends", "Community View", "Present indicators by relevant place, period, and population dimensions."), card("Shared", "Reporting", "Information Flow", "Route approved information to the people and systems that need it.")],
  },
  "/wellness-apps/": {
    titleLead: "Wellness Apps", titleAccent: "Built Around Daily Use.",
    intro: "We build mobile wellness experiences for activity, habit, biometric, and progress records with understandable controls and feedback.",
    ctaLabel: "Explore Wellness App Development", leftLabel: "habits", leftBadge: "Fit", rightLabel: "Progress", centerTitle: "Everyday Wellness\nExperience",
    centerBody: "Shape tracking, reminders, summaries, and privacy choices around realistic routines rather than disconnected data-entry screens.", footerMark: "W",
    cards: [card("Simple", "Tracking", "Daily Input", "Keep repeated activity and habit recording clear and easy to revisit."), card("Useful", "Signals", "Progress Context", "Present trends with enough context for users to understand their records."), card("Private", "Data", "Privacy Choice", "Make collection and sharing choices visible within the wellness journey.")],
  },
  "/insurtech/": {
    titleLead: "Insurance Technology", titleAccent: "From Intake to Resolution.",
    intro: "We develop insurance workflows for claims intake, document review, risk inputs, calculations, and reconciliation across operational teams.",
    ctaLabel: "Explore Insurance Technology", leftLabel: "claims", leftBadge: "Ins", rightLabel: "Risk", centerTitle: "Insurance Workflow\nEngineering",
    centerBody: "Connect policy and claim context to explicit rules, review queues, and recorded decisions without hiding exceptions from operators.", footerMark: "I",
    cards: [card("Full", "Intake", "Claim Context", "Capture parties, events, documents, and policy references in one case flow."), card("Clear", "Rules", "Decision Logic", "Make validation and calculation inputs understandable to reviewers."), card("Aligned", "Records", "Reconciliation", "Track adjustments and settlement states through a clear operational history.")],
  },
  "/wealth-management-tech/": {
    titleLead: "Wealth Platforms", titleAccent: "With Portfolio Context.",
    intro: "We build wealth-management interfaces and workflows for holdings, allocations, tax records, and advisor-client collaboration.",
    ctaLabel: "Explore Wealth Technology", leftLabel: "holdings", leftBadge: "WM", rightLabel: "Advice", centerTitle: "Wealth Management\nWorkspace",
    centerBody: "Bring balances, portfolio changes, planning information, and review tasks into a coherent experience with controlled access.", footerMark: "W",
    cards: [card("Visible", "Holdings", "Portfolio View", "Organize balances and positions with the context needed for review."), card("Planned", "Allocation", "Change Workflow", "Record proposed redistribution and the decisions surrounding it."), card("Linked", "Records", "Tax Context", "Keep relevant tax information alongside portfolio and client workflows.")],
  },
  "/digital-lending/": {
    titleLead: "Digital Lending", titleAccent: "With Clear Application States.",
    intro: "We develop lending journeys for applicant data, document collection, credit inputs, repayment schedules, and servicing workflows.",
    ctaLabel: "Explore Digital Lending", leftLabel: "applications", leftBadge: "Loan", rightLabel: "Service", centerTitle: "Digital Lending\nWorkflow",
    centerBody: "Guide borrowers and operations teams through defined application, review, decision, and servicing states with visible requirements.", footerMark: "L",
    cards: [card("Guided", "Applications", "Borrower Flow", "Show required information, documents, and progress throughout the application."), card("Checked", "Credit", "Decision Inputs", "Present assessment inputs and exceptions clearly to authorized reviewers."), card("Current", "Repayment", "Servicing View", "Keep schedule, balance, document, and support context connected after approval.")],
  },
  "/fintech-engineering/": {
    titleLead: "Fintech Systems", titleAccent: "For Controlled Transactions.",
    intro: "We engineer financial interfaces, ledger-connected services, and transaction workflows with explicit validation and operational visibility.",
    ctaLabel: "Explore Fintech Engineering", leftLabel: "ledgers", leftBadge: "Fin", rightLabel: "Checks", centerTitle: "Fintech Transaction\nArchitecture",
    centerBody: "Define money movement, state transitions, authorization, and reconciliation at clear boundaries across financial services.", footerMark: "F",
    cards: [card("Defined", "Transactions", "State Model", "Represent initiation, authorization, completion, and exception states explicitly."), card("Guarded", "Access", "Control Layer", "Apply identity and permission checks around sensitive financial actions."), card("Matched", "Ledgers", "Record Alignment", "Compare operational events with ledger records and expose mismatches for review.")],
  },
  "/payment-gateways/": {
    titleLead: "Payment Gateways", titleAccent: "With Traceable Processing.",
    intro: "We develop merchant payment flows around token handling, authorization states, clearing exchanges, and operational reconciliation.",
    ctaLabel: "Explore Payment Engineering", leftLabel: "merchant", leftBadge: "Pay", rightLabel: "Clearing", centerTitle: "Payment Processing\nFlow",
    centerBody: "Connect checkout requests to gateway and processor responses while keeping transaction state and operational exceptions understandable.", footerMark: "P",
    cards: [card("Tokens", "Inputs", "Payment Data", "Handle payment references without spreading sensitive card details through the application."), card("Clear", "States", "Authorization Flow", "Track pending, approved, declined, reversed, and exceptional outcomes clearly."), card("Matched", "Records", "Settlement Review", "Align merchant, processor, and clearing records for operational follow-up.")],
  },
  "/smart-manufacturing/": {
    titleLead: "Smart Manufacturing", titleAccent: "Connected to the Shop Floor.",
    intro: "We build manufacturing software for sensor data, production states, equipment conditions, and operational alerts across plant workflows.",
    ctaLabel: "Explore Manufacturing Technology", leftLabel: "machines", leftBadge: "IIoT", rightLabel: "Teams", centerTitle: "Manufacturing Data\nOperations",
    centerBody: "Translate equipment and assembly signals into contextual information that production and maintenance teams can review and act on.", footerMark: "M",
    cards: [card("Live", "Signals", "Machine Context", "Associate sensor readings with equipment, process stage, and operating state."), card("Visible", "Production", "Assembly Flow", "Present work status and exceptions across connected production steps."), card("Useful", "Maintenance", "Fault Alerts", "Route condition changes with enough context for investigation and response.")],
  },
  "/logistics-software/": {
    titleLead: "Logistics Software", titleAccent: "Across Every Handoff.",
    intro: "We develop logistics systems for cargo planning, supplier handoffs, transport status, fulfillment activity, and operational exceptions.",
    ctaLabel: "Explore Logistics Software", leftLabel: "cargo", leftBadge: "TMS", rightLabel: "Fulfill", centerTitle: "Logistics Operations\nVisibility",
    centerBody: "Connect movement plans and status events across modes, suppliers, facilities, and fulfillment teams in one operational flow.", footerMark: "L",
    cards: [card("Planned", "Loads", "Cargo Flow", "Organize cargo, capacity, route, and handling information for each movement."), card("Tracked", "Handoffs", "Delivery Events", "Record supplier and carrier transitions with useful status context."), card("Visible", "Fulfillment", "Exception View", "Surface delays and mismatches alongside the orders and tasks they affect.")],
  },
  "/energy-utilities/": {
    titleLead: "Utility Systems", titleAccent: "From Meter to Field Team.",
    intro: "We build software for usage data, meter communications, field work, maintenance coordination, and operational monitoring.",
    ctaLabel: "Explore Energy and Utilities", leftLabel: "meters", leftBadge: "Grid", rightLabel: "Field", centerTitle: "Utility Operations\nPlatform",
    centerBody: "Link transmission records, asset context, work orders, and field updates so operational teams can follow changing conditions.", footerMark: "E",
    cards: [card("Intake", "Meters", "Usage Data", "Associate readings and transmission states with the correct service and asset."), card("Routed", "Field Work", "Crew Dispatch", "Coordinate location, priority, task detail, and progress for field teams."), card("Visible", "Assets", "Maintenance Context", "Bring condition and work history together for operational review.")],
  },
  "/professional-services-it/": {
    titleLead: "Professional Services", titleAccent: "Organized Around Delivery.",
    intro: "We develop systems for project work, time records, case or engagement tracking, resource planning, and client-facing operations.",
    ctaLabel: "Explore Professional Services IT", leftLabel: "projects", leftBadge: "PS", rightLabel: "Teams", centerTitle: "Services Delivery\nWorkspace",
    centerBody: "Connect engagements, responsibilities, activity records, and utilization context without forcing every practice into the same workflow.", footerMark: "P",
    cards: [card("Ordered", "Engagements", "Project Context", "Keep scope, client, matter, milestone, and ownership information together."), card("Logged", "Activity", "Time and Work", "Capture professional activity with the detail needed for delivery and review."), card("Aligned", "Capacity", "Resource View", "Compare assignments and availability across teams and active engagements.")],
  },
  "/construction-it/": {
    titleLead: "Construction Software", titleAccent: "For Field and Office Teams.",
    intro: "We build construction systems for plans, estimates, resource records, inspections, site updates, and project coordination.",
    ctaLabel: "Explore Construction Technology", leftLabel: "sites", leftBadge: "Build", rightLabel: "Plans", centerTitle: "Construction Project\nCoordination",
    centerBody: "Connect drawing and estimate context to field observations, resource decisions, and safety tasks across project stages.", footerMark: "C",
    cards: [card("Current", "Plans", "Project Records", "Keep relevant drawings, changes, and site references connected to the work."), card("Based", "Estimates", "Resource Context", "Organize quantities and resource assumptions for review as conditions change."), card("Logged", "Safety", "Inspection Flow", "Capture checklist findings, ownership, and follow-up actions from the field.")],
  },
  "/hospitality-tech/": {
    titleLead: "Hospitality Technology", titleAccent: "Across the Guest Journey.",
    intro: "We develop hospitality systems for reservations, property operations, dining service, guest profiles, and multi-site coordination.",
    ctaLabel: "Explore Hospitality Technology", leftLabel: "guests", leftBadge: "Stay", rightLabel: "Sites", centerTitle: "Hospitality Operations\nExperience",
    centerBody: "Connect booking and guest context to property, dining, and service workflows while respecting permissions across locations.", footerMark: "H",
    cards: [card("Joined", "Bookings", "Reservation Flow", "Coordinate availability, guest details, changes, and stay status across properties."), card("Prompt", "Service", "Guest Context", "Give service teams relevant preferences and requests at the right point in the journey."), card("Joined", "Locations", "Multi-Site View", "Share controlled operational information without erasing property-level responsibilities.")],
  },
} as const satisfies Readonly<Record<string, TraditionalHeroContent>>;

const webInline = [
  ["<a>", "Connects a meaningful link destination"], ["<img>", "Embeds an image with alternative text"], ["<span>", "Groups phrasing content when no semantic element fits"], ["<em>", "Marks stress emphasis in a sentence"], ["<i>", "Offsets text such as a term or alternate voice"], ["<b>", "Draws attention without adding importance"], ["<strong>", "Identifies content with strong importance"], ["<mark>", "Highlights text relevant to the current context"], ["<s>", "Shows information that is no longer accurate"], ["<sub>", "Places inline text below the baseline"], ["<sup>", "Places inline text above the baseline"], ["<small>", "Represents side comments or fine print"], ["<address>", "Provides contact information for its article or page"], ["<cite>", "Names a referenced creative work"], ["<q>", "Marks a short inline quotation"], ["<br>", "Creates a line break where the break is meaningful"], ["<wbr>", "Offers an optional line-break opportunity"], ["<time>", "Represents a machine-readable date or time"], ["<code>", "Marks a fragment of computer code"], ["<audio>", "Embeds an audio player and sources"], ["<video>", "Embeds video content and fallback options"],
] as const;
const webBlock = [
  ["<p>", "Groups one paragraph of related prose"], ["<blockquote>", "Contains an extended quotation from another source"], ["<details>", "Provides a disclosure users can open and close"], ["<ul>", "Groups items whose order is not significant"], ["<ol>", "Groups items that follow a meaningful sequence"], ["<dl>", "Pairs terms with descriptions or values"], ["<hr>", "Marks a thematic break between topics"], ["<h1>-<h6>", "Defines the hierarchy of section headings"],
] as const;
const javascriptInline = [
  ["const", "Declares a block-scoped binding that cannot be reassigned"], ["let", "Declares a block-scoped binding that may change"], ["function", "Defines reusable executable behavior"], ["=>", "Creates an arrow function expression"], ["import", "Loads exported values from another module"], ["export", "Exposes module values to other files"], ["async", "Marks a function whose result is a promise"], ["await", "Pauses an async function for a settled result"], ["Promise", "Represents a future completion or failure"], ["?.", "Reads through a nullable chain safely"], ["??", "Uses a fallback only for null or undefined"], ["...", "Spreads or collects iterable and object values"], ["map()", "Transforms each array item into a new value"], ["filter()", "Keeps array items that match a condition"], ["reduce()", "Combines array items into one accumulated result"], ["Set", "Stores unique values"], ["Map", "Stores keyed values with any key type"], ["class", "Defines a class and its methods"], ["try/catch", "Handles exceptions around fallible work"], ["fetch()", "Starts an HTTP request in supported runtimes"], ["JSON", "Parses and serializes JSON data"],
] as const;
const javascriptBlock = [
  ["modules", "Separate public interfaces from internal implementation"], ["components", "Compose interactive UI behavior from focused units"], ["events", "Respond to user, network, and runtime signals"], ["state", "Represent changing data with explicit update paths"], ["APIs", "Validate requests and return predictable responses"], ["workers", "Move suitable tasks outside the main execution path"], ["tests", "Exercise expected behavior and important edge states"], ["build", "Bundle, configure, and release the intended runtime output"],
] as const;
const nativeInline = [
  ["<View>", "Groups layout and native interaction surfaces"], ["<Text>", "Renders every visible text node"], ["<Image>", "Displays local or remote image sources"], ["<TextInput>", "Accepts keyboard input from the user"], ["<Pressable>", "Responds to stages of a press interaction"], ["<ScrollView>", "Scrolls a bounded set of child views"], ["<FlatList>", "Renders a performant scrolling data list"], ["<SectionList>", "Renders data divided into named sections"], ["<Modal>", "Presents content above the enclosing view"], ["<Switch>", "Renders a boolean input control"], ["<ActivityIndicator>", "Shows an indeterminate loading indicator"], ["<Button>", "Provides a basic platform button"], ["<RefreshControl>", "Adds pull-to-refresh behavior to a scroll view"], ["<InputAccessoryView>", "Places custom content above the iOS keyboard"], ["<KeyboardAvoidingView>", "Adjusts layout around the software keyboard"], ["<StatusBar>", "Controls the application status-bar presentation"], ["<VirtualizedList>", "Supports large lists with custom data access"], ["<TouchableOpacity>", "Provides legacy opacity feedback for a touch"], ["<TouchableHighlight>", "Provides legacy underlay feedback for a touch"], ["<TouchableWithoutFeedback>", "Handles a touch without visual feedback"], ["<View>", "Carries accessibility roles and focus settings"],
] as const;
const nativeBlock = [
  ["StyleSheet", "Creates named style objects for native components"], ["Platform", "Selects behavior for the current operating system"], ["Dimensions", "Reads window and screen dimensions"], ["PixelRatio", "Reads device pixel-density information"], ["Keyboard", "Observes and controls keyboard events"], ["Linking", "Opens and handles supported application links"], ["Alert", "Shows a platform alert dialog"], ["AccessibilityInfo", "Queries and observes accessibility-service state"],
] as const;

const items = (rows: readonly (readonly [string, string])[]): readonly CheatsheetItem[] => rows.map(([tag, desc]) => ({ tag, desc }));

export const htmlCheatsheetContent = {
  "/services/web-development/": {
    titleLead: "Semantic HTML", titleAccent: "Reference", intro: "Choose elements for their meaning and document role. CSS controls presentation while semantic markup gives pages a dependable structure for browsers and assistive technology.",
    firstTitle: "Phrasing and Embedded Elements", firstIntro: "These elements usually sit within a larger flow of text or embed media without defining a full page section by themselves.", firstItems: items(webInline),
    secondTitle: "Document and Flow Elements", secondIntro: "These elements organize paragraphs, grouped content, disclosures, lists, thematic breaks, and heading structure across a responsive page.", secondItems: items(webBlock),
  },
  "/javascript-devs/": {
    titleLead: "JavaScript", titleAccent: "Working Reference", intro: "Use language features deliberately so browser and server code stays readable across modules, asynchronous work, data transformations, and error paths.",
    firstTitle: "Language and Runtime Building Blocks", firstIntro: "These concise forms cover bindings, functions, modules, asynchronous operations, safe property access, collections, requests, and data serialization.", firstItems: items(javascriptInline),
    secondTitle: "Application Structure", secondIntro: "These larger concerns organize JavaScript into maintainable UI, service, worker, testing, and delivery responsibilities.", secondItems: items(javascriptBlock),
  },
  "/react-native-experts/": {
    titleLead: "React Native", titleAccent: "Component Reference", intro: "Compose mobile screens from platform-backed components, then account for scrolling, keyboard behavior, accessibility, device differences, and native application services.",
    firstTitle: "Core Interface Components", firstIntro: "These components cover native layout, text, images, input, touch interaction, scrolling lists, feedback, overlays, and platform chrome.", firstItems: items(nativeInline),
    secondTitle: "Platform and Device APIs", secondIntro: "These APIs support styling, platform selection, screen density, keyboard events, links, alerts, and accessibility-aware behavior.", secondItems: items(nativeBlock),
  },
} as const satisfies Readonly<Record<string, HtmlCheatsheetContent>>;

const normalizePath = (path?: string) => {
  const clean = (path || "/").split(/[?#]/, 1)[0].toLowerCase();
  return clean === "/" ? clean : `/${clean.replace(/^\/+|\/+$/g, "")}/`;
};

const fallbackTraditional = traditionalHeroContent["/services/web-development/"];
const fallbackCheatsheet = htmlCheatsheetContent["/services/web-development/"];

export const getTraditionalHeroContent = (path?: string, pageTitle?: string): TraditionalHeroContent => {
  const exact = traditionalHeroContent[normalizePath(path) as keyof typeof traditionalHeroContent];
  if (exact) return exact;
  if (!pageTitle) return fallbackTraditional;
  return { ...fallbackTraditional, titleLead: pageTitle, titleAccent: "Built for the Work.", intro: `Explore ${pageTitle.toLowerCase()} through a clear, maintainable software delivery approach.` };
};

export const getHtmlCheatsheetContent = (path?: string): HtmlCheatsheetContent =>
  htmlCheatsheetContent[normalizePath(path) as keyof typeof htmlCheatsheetContent] || fallbackCheatsheet;
