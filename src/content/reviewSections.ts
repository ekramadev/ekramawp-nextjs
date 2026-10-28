export type FourStrings = readonly [string, string, string, string];
export interface StatsCardContent { readonly value: string; readonly desc: string; }
export type FourStatsCards = readonly [StatsCardContent, StatsCardContent, StatsCardContent, StatsCardContent];
export interface StatsSectionContent { readonly titleLead: string; readonly titleAccent: string; readonly intro: string; readonly cards: FourStatsCards; }
export type ServicesTabId = "headless" | "performance" | "systems" | "uiux" | "seo" | "edge" | "state" | "api";
export interface ServicesTabContent { readonly id: ServicesTabId; readonly label: string; readonly title: string; readonly image: string; readonly imageAlt: string; readonly bullets: FourStrings; }
export type EightServiceTabs = readonly [ServicesTabContent, ServicesTabContent, ServicesTabContent, ServicesTabContent, ServicesTabContent, ServicesTabContent, ServicesTabContent, ServicesTabContent];
export interface ServicesTabsContent { readonly eyebrow: string; readonly title: string; readonly intro: string; readonly tabs: EightServiceTabs; }

function normalizePath(path: string | null | undefined): string { if (!path) return "/"; const clean=path.trim().split(/[?#]/,1)[0].toLowerCase(); if (!clean || clean === "/") return "/"; return `/${clean.replace(/^\/+|\/+$/g, "")}/`; }

const statsProfiles = {
  "/": {
    "name": "Software Consulting",
    "intro": "Review business goals, technical constraints and delivery responsibilities before software work begins.",
    "checks": [
      ["Business Need", "the operational need and outcome the software should support"],
      ["Technical Context", "the systems, data and constraints that shape the work"],
      ["Delivery Scope", "the capabilities, responsibilities and acceptance checks included"],
      ["Next Decision", "the open choices and evidence needed before implementation"]
    ]
  },
  "/services/it-outsourcing/": {
    "name": "IT Outsourcing",
    "intro": "Review delegated responsibilities, service handoffs and operating controls before moving work outside the internal team.",
    "checks": [
      [
        "Service Scope",
        "which operations remain internal and which move to the delivery partner"
      ],
      [
        "Handoffs",
        "how requests, approvals and escalations move between teams"
      ],
      [
        "Access Control",
        "which systems and records each delivery role may use"
      ],
      [
        "Service Review",
        "how open work, recurring issues and changes are discussed"
      ]
    ]
  },
  "/services/software-development/": {
    "name": "Software Development",
    "intro": "Review product intent, engineering boundaries and release checks before committing a custom application to delivery.",
    "checks": [
      [
        "Product Scope",
        "the workflows and users the application must support"
      ],
      [
        "Architecture",
        "the components, data paths and constraints shaping the build"
      ],
      [
        "Delivery Checks",
        "the review steps for code, behavior and release readiness"
      ],
      [
        "Change Path",
        "how new requirements enter later development cycles"
      ]
    ]
  },
  "/services/it-support/": {
    "name": "IT Support",
    "intro": "Review support channels, incident priorities and ownership rules around the systems people rely on.",
    "checks": [
      [
        "Request Intake",
        "where users report issues and what context support needs"
      ],
      [
        "Priority Rules",
        "how impact and urgency guide the response order"
      ],
      [
        "Resolution Flow",
        "who investigates, updates and closes each support case"
      ],
      [
        "Recurring Issues",
        "which repeated incidents need a broader technical review"
      ]
    ]
  },
  "/services/desktop-development/": {
    "name": "Desktop Applications",
    "intro": "Review workstation needs, local data behavior and deployment constraints before building desktop software.",
    "checks": [
      [
        "User Tasks",
        "the daily desktop workflows the application must support"
      ],
      [
        "Device Context",
        "the operating systems, hardware and local dependencies in use"
      ],
      [
        "Data Handling",
        "where desktop records are stored, exchanged and recovered"
      ],
      [
        "Release Path",
        "how installation, updates and rollback are managed"
      ]
    ]
  },
  "/services/software-consulting/": {
    "name": "Software Consulting",
    "intro": "Review the decision context, current constraints and implementation choices before recommending a software direction.",
    "checks": [
      [
        "Business Need",
        "the decision or operating problem the advisory work should address"
      ],
      [
        "Current Stack",
        "the systems, dependencies and limits already in place"
      ],
      [
        "Options Review",
        "the practical tradeoffs between viable technical approaches"
      ],
      [
        "Next Actions",
        "the evidence and ownership needed to move from advice to delivery"
      ]
    ]
  },
  "/services/application-services/": {
    "name": "Application Services",
    "intro": "Review the application lifecycle from change intake through support so responsibilities stay clear across teams.",
    "checks": [
      [
        "Application Scope",
        "the products, modules and users covered by the service"
      ],
      [
        "Change Intake",
        "how fixes and enhancements enter the delivery queue"
      ],
      [
        "Release Review",
        "what must be checked before an application change is published"
      ],
      [
        "Support Loop",
        "how production findings return to the application backlog"
      ]
    ]
  },
  "/services/mobile-development/": {
    "name": "Mobile Applications",
    "intro": "Review mobile journeys, device conditions and release requirements before building for iOS and Android users.",
    "checks": [
      [
        "Mobile Journeys",
        "the tasks people need to complete from a phone or tablet"
      ],
      [
        "Device Context",
        "the platforms, permissions and connectivity conditions to support"
      ],
      [
        "Data Exchange",
        "how the app reads, updates and protects application records"
      ],
      [
        "Store Release",
        "the testing, review and publishing steps for mobile updates"
      ]
    ]
  },
  "/digital-retail/": {
    "name": "Digital Retail",
    "intro": "Review customer journeys, commerce operations and channel handoffs across the retail experience.",
    "checks": [
      [
        "Shopping Journey",
        "how customers discover, compare and select products"
      ],
      [
        "Order Flow",
        "how carts, checkout, payment and order records connect"
      ],
      [
        "Channel Handoffs",
        "where web, store and service teams share customer context"
      ],
      [
        "Retail Review",
        "which operational findings should shape the next commerce update"
      ]
    ]
  },
  "/services/application-maintenance/": {
    "name": "Application Maintenance",
    "intro": "Review maintenance priorities, technical dependencies and change safeguards for applications already in use.",
    "checks": [
      [
        "Maintenance Scope",
        "the applications, modules and environments covered"
      ],
      [
        "Issue Triage",
        "how defects and support findings are assessed and ordered"
      ],
      [
        "Change Safety",
        "the checks protecting existing behavior during maintenance"
      ],
      [
        "Release Follow-up",
        "how production results inform later maintenance work"
      ]
    ]
  },
  "/telecom-tech/": {
    "name": "Telecom Systems",
    "intro": "Review service operations, network-facing workflows and support records across telecommunications software.",
    "checks": [
      [
        "Service Operations",
        "the telecom workflows and teams the system supports"
      ],
      [
        "Network Events",
        "how service and network events enter operational systems"
      ],
      [
        "Support Records",
        "which cases, changes and outcomes need traceable history"
      ],
      [
        "Operational Review",
        "how recurring findings guide later platform changes"
      ]
    ]
  },
  "/services/managed-it-services/": {
    "name": "Managed IT Services",
    "intro": "Review infrastructure coverage, monitoring responsibilities and escalation paths for ongoing IT operations.",
    "checks": [
      [
        "Managed Scope",
        "the devices, platforms and environments included"
      ],
      [
        "Monitoring Flow",
        "which events are observed and where they are recorded"
      ],
      [
        "Escalation Path",
        "who responds when an issue crosses an agreed threshold"
      ],
      [
        "Service Review",
        "how incidents, changes and maintenance needs are discussed"
      ]
    ]
  },
  "/services/it-staff-augmentation/": {
    "name": "IT Staff Augmentation",
    "intro": "Review role boundaries, team integration and delivery ownership before adding external engineering capacity.",
    "checks": [
      [
        "Role Scope",
        "the skills and responsibilities needed inside the existing team"
      ],
      [
        "Team Handoffs",
        "how augmented roles coordinate with internal owners"
      ],
      [
        "Access Needs",
        "which tools, environments and records each role requires"
      ],
      [
        "Progress Review",
        "how delivery work and open dependencies are reviewed"
      ]
    ]
  },
  "/retail-banking-it/": {
    "name": "Retail Banking IT",
    "intro": "Review customer banking journeys, transaction controls and operational handoffs around digital banking software.",
    "checks": [
      [
        "Customer Journeys",
        "the banking tasks customers and service teams need to complete"
      ],
      [
        "Transaction Flow",
        "how instructions, validations and records move through the system"
      ],
      [
        "Access Rules",
        "which roles may view or change banking information"
      ],
      [
        "Control Review",
        "how exceptions and operational findings are investigated"
      ]
    ]
  },
  "/services/it-consulting/": {
    "name": "IT Consulting",
    "intro": "Review business priorities, current infrastructure and delivery options before setting an IT direction.",
    "checks": [
      [
        "Business Priorities",
        "the outcomes and constraints guiding the advisory work"
      ],
      [
        "Current Environment",
        "the platforms, processes and dependencies already in place"
      ],
      [
        "Option Tradeoffs",
        "the practical implications of each viable IT approach"
      ],
      [
        "Roadmap Review",
        "the sequence, ownership and evidence for later implementation"
      ]
    ]
  },
  "/services/": {
    "name": "Engineering Services",
    "intro": "Review the service need, technical context and delivery responsibilities before selecting an engineering path.",
    "checks": [
      [
        "Service Need",
        "the business workflow or technical problem in scope"
      ],
      [
        "System Context",
        "the applications, data and infrastructure involved"
      ],
      [
        "Delivery Roles",
        "who owns decisions, implementation and review"
      ],
      [
        "Next Review",
        "what must be confirmed before the next delivery stage"
      ]
    ]
  },
  "/services/mvp-development/": {
    "name": "MVP Development",
    "intro": "Review the product assumption, essential workflow and learning plan before building an initial release.",
    "checks": [
      [
        "Product Question",
        "the assumption the first release is intended to examine"
      ],
      [
        "Essential Flow",
        "the smallest complete user journey needed for that review"
      ],
      [
        "Build Boundary",
        "which capabilities belong in the initial release"
      ],
      [
        "Learning Review",
        "how feedback and observed use inform the next decision"
      ]
    ]
  },
  "/services/it-help-desk/": {
    "name": "IT Help Desk",
    "intro": "Review contact channels, triage rules and escalation ownership for day-to-day user support.",
    "checks": [
      [
        "Contact Channels",
        "where users request help and what details they provide"
      ],
      [
        "Triage Rules",
        "how hardware, access and software issues are classified"
      ],
      [
        "Escalation Route",
        "when a case moves to another technical owner"
      ],
      [
        "Knowledge Review",
        "which repeated questions should improve support guidance"
      ]
    ]
  },
  "/logistics-fleet/": {
    "name": "Fleet Operations",
    "intro": "Review vehicle records, driver workflows and dispatch decisions across fleet software.",
    "checks": [
      [
        "Fleet Records",
        "the vehicles, drivers and operating details the system tracks"
      ],
      [
        "Route Updates",
        "how dispatch changes reach drivers and operations teams"
      ],
      [
        "Event Handling",
        "how delays, exceptions and compliance findings are recorded"
      ],
      [
        "Operations Review",
        "which fleet patterns need follow-up or workflow changes"
      ]
    ]
  },
  "/financial-planning-analyses/": {
    "name": "Financial Planning",
    "intro": "Review planning assumptions, calculation ownership and reporting checks around forecasts and budgets.",
    "checks": [
      [
        "Planning Inputs",
        "the source values and assumptions used in the analysis"
      ],
      [
        "Calculation Logic",
        "how projections and comparisons are derived"
      ],
      [
        "Review Controls",
        "which checks identify missing or inconsistent inputs"
      ],
      [
        "Reporting Use",
        "how planning outputs support the intended discussion"
      ]
    ]
  },
  "/enterprise-accounting/": {
    "name": "Enterprise Accounting",
    "intro": "Review ledger flows, calculation rules and audit history across accounting software.",
    "checks": [
      [
        "Ledger Structure",
        "how accounts, currencies and periods are organised"
      ],
      [
        "Posting Flow",
        "how transactions enter and update accounting records"
      ],
      [
        "Calculation Rules",
        "how balances and adjustments are derived"
      ],
      [
        "Audit Review",
        "which changes and approvals require traceable history"
      ]
    ]
  },
  "/med-devices-software/": {
    "name": "Medical Device Software",
    "intro": "Review device workflows, calculation safeguards and traceable verification around diagnostic software.",
    "checks": [
      [
        "Device Workflow",
        "the instructions and user actions the software coordinates"
      ],
      [
        "Calculation Safety",
        "the rules and boundaries applied to diagnostic calculations"
      ],
      [
        "Data Trace",
        "how device inputs and outputs remain attributable"
      ],
      [
        "Verification Review",
        "the evidence used to examine intended software behavior"
      ]
    ]
  },
  "/behavioral-health-it/": {
    "name": "Behavioral Health IT",
    "intro": "Review care workflows, patient access and treatment records across behavioral health systems.",
    "checks": [
      [
        "Care Journey",
        "the scheduling and treatment steps supported by the system"
      ],
      [
        "Patient Access",
        "how people view appointments and relevant care information"
      ],
      [
        "Clinical Records",
        "which milestones and notes need structured history"
      ],
      [
        "Workflow Review",
        "how care teams examine gaps and follow-up needs"
      ]
    ]
  },
  "/lab-info-systems/": {
    "name": "Laboratory Information Systems",
    "intro": "Review specimen tracking, instrument exchanges and analytical records across laboratory operations.",
    "checks": [
      [
        "Specimen Flow",
        "how samples are identified, stored and moved"
      ],
      [
        "Instrument Data",
        "how analytical systems exchange measurements and status"
      ],
      [
        "Result Records",
        "which findings and review steps require traceability"
      ],
      [
        "Lab Review",
        "how exceptions and incomplete records are investigated"
      ]
    ]
  },
  "/pharma-biotech/": {
    "name": "Pharma and Biotech Systems",
    "intro": "Review study records, compound controls and analytical workflows across research operations.",
    "checks": [
      [
        "Study Records",
        "how phases, cohorts and observations are structured"
      ],
      [
        "Compound Control",
        "how materials and access history are tracked"
      ],
      [
        "Analysis Flow",
        "how approved data reaches statistical review"
      ],
      [
        "Research Review",
        "how anomalies and protocol changes are documented"
      ]
    ]
  },
  "/medtech-startups/": {
    "name": "Medtech Product Delivery",
    "intro": "Review product scope, health-system integrations and release evidence for an early medtech platform.",
    "checks": [
      [
        "Product Scope",
        "the clinical or operational workflow the product addresses"
      ],
      [
        "Interoperability",
        "the external records and interfaces the product must exchange"
      ],
      [
        "Release Evidence",
        "the checks needed before a product update is evaluated"
      ],
      [
        "Delivery Review",
        "how learning and constraints shape the next release"
      ]
    ]
  },
  "/public-health-systems/": {
    "name": "Public Health Systems",
    "intro": "Review population records, reporting workflows and access paths across public health platforms.",
    "checks": [
      [
        "Population Data",
        "the community and service records used in reporting"
      ],
      [
        "Reporting Flow",
        "how local findings reach programme and oversight teams"
      ],
      [
        "Access Paths",
        "which roles can view or update health information"
      ],
      [
        "Programme Review",
        "how reporting gaps and trends guide follow-up"
      ]
    ]
  },
  "/wellness-apps/": {
    "name": "Wellness Applications",
    "intro": "Review habit journeys, biometric records and feedback loops across a wellness app.",
    "checks": [
      [
        "User Goals",
        "the habits and activities people choose to track"
      ],
      [
        "Activity Data",
        "how workouts, biometrics and check-ins are recorded"
      ],
      [
        "Feedback Flow",
        "how the app presents progress without overstating meaning"
      ],
      [
        "Product Review",
        "which usage findings inform the next app change"
      ]
    ]
  },
  "/insurtech/": {
    "name": "Insurance Technology",
    "intro": "Review claim workflows, risk inputs and reconciliation controls across insurance software.",
    "checks": [
      [
        "Claim Intake",
        "how evidence and policy context enter a claim"
      ],
      [
        "Risk Inputs",
        "which validated factors support risk evaluation and review"
      ],
      [
        "Decision Trace",
        "how rules, exceptions and outcomes are recorded"
      ],
      [
        "Reconciliation",
        "how claim and financial records are checked for consistency"
      ]
    ]
  },
  "/wealth-management-tech/": {
    "name": "Wealth Management Technology",
    "intro": "Review portfolio records, allocation workflows and reporting controls across wealth software.",
    "checks": [
      [
        "Portfolio Records",
        "the holdings, transactions and account context in scope"
      ],
      [
        "Allocation Flow",
        "how proposed changes move through review and execution"
      ],
      [
        "Tax Records",
        "which events and classifications support later reporting"
      ],
      [
        "Client Review",
        "how portfolio information is presented with relevant context"
      ]
    ]
  },
  "/digital-lending/": {
    "name": "Digital Lending",
    "intro": "Review borrower journeys, calculation inputs and document controls across lending software.",
    "checks": [
      [
        "Borrower Journey",
        "the application and servicing steps people complete"
      ],
      [
        "Credit Inputs",
        "which verified records enter an eligibility review"
      ],
      [
        "Repayment Logic",
        "how schedules and outstanding amounts are calculated"
      ],
      [
        "Document Trace",
        "how loan documents and approvals remain attributable"
      ]
    ]
  },
  "/fintech-engineering/": {
    "name": "Fintech Engineering",
    "intro": "Review transaction paths, ledger boundaries and access controls across financial software.",
    "checks": [
      [
        "Transaction Path",
        "how instructions move through validation and recording"
      ],
      [
        "Ledger Boundary",
        "which system owns each financial balance and event"
      ],
      [
        "Access Control",
        "how roles and services receive limited permissions"
      ],
      [
        "Exception Review",
        "how failed or unusual transactions are investigated"
      ]
    ]
  },
  "/payment-gateways/": {
    "name": "Payment Gateways",
    "intro": "Review payment messages, token handling and reconciliation flows across gateway software.",
    "checks": [
      [
        "Payment Flow",
        "how merchant requests move through authorisation and response"
      ],
      [
        "Token Handling",
        "where payment identifiers are created, used and retired"
      ],
      [
        "Failure Paths",
        "how declined, delayed and duplicate events are handled"
      ],
      [
        "Reconciliation",
        "how gateway and merchant records are compared"
      ]
    ]
  },
  "/smart-manufacturing/": {
    "name": "Smart Manufacturing",
    "intro": "Review sensor records, production workflows and fault-response paths across manufacturing systems.",
    "checks": [
      [
        "Production Data",
        "which machine and assembly records enter the system"
      ],
      [
        "Process Flow",
        "how production events move between stations and teams"
      ],
      [
        "Fault Signals",
        "how unusual conditions are recorded and reviewed"
      ],
      [
        "Operations Review",
        "which findings lead to maintenance or process changes"
      ]
    ]
  },
  "/logistics-software/": {
    "name": "Logistics Software",
    "intro": "Review cargo records, delivery handoffs and fulfilment visibility across logistics systems.",
    "checks": [
      [
        "Cargo Records",
        "the loads, routes and supplier details the system tracks"
      ],
      [
        "Delivery Flow",
        "how shipments move between planning and execution teams"
      ],
      [
        "Exception Handling",
        "how delays and fulfilment issues are recorded"
      ],
      [
        "Operations Review",
        "how delivery findings inform later planning"
      ]
    ]
  },
  "/energy-utilities/": {
    "name": "Energy and Utilities IT",
    "intro": "Review meter records, field workflows and grid-event handling across utility systems.",
    "checks": [
      [
        "Usage Records",
        "how meter and service data enters the platform"
      ],
      [
        "Field Work",
        "how maintenance tasks reach crews and return updates"
      ],
      [
        "Grid Events",
        "how operating changes and exceptions are recorded"
      ],
      [
        "Service Review",
        "how recurring issues and data gaps are examined"
      ]
    ]
  },
  "/professional-services-it/": {
    "name": "Professional Services IT",
    "intro": "Review project records, utilisation workflows and client-service handoffs across professional services software.",
    "checks": [
      [
        "Project Records",
        "the engagements, tasks and time entries in scope"
      ],
      [
        "Work Allocation",
        "how assignments and capacity are planned"
      ],
      [
        "Service Handoffs",
        "how delivery and client teams exchange updates"
      ],
      [
        "Operations Review",
        "how project and utilisation findings are discussed"
      ]
    ]
  },
  "/construction-it/": {
    "name": "Construction IT",
    "intro": "Review site records, estimate inputs and inspection workflows across construction software.",
    "checks": [
      [
        "Site Records",
        "the projects, structures and field updates in scope"
      ],
      [
        "Estimate Inputs",
        "which quantities and assumptions support resource planning"
      ],
      [
        "Inspection Flow",
        "how safety and quality checks are recorded"
      ],
      [
        "Project Review",
        "how site findings and changes enter later plans"
      ]
    ]
  },
  "/hospitality-tech/": {
    "name": "Hospitality Technology",
    "intro": "Review reservation flows, guest records and service handoffs across hospitality systems.",
    "checks": [
      [
        "Reservation Flow",
        "how room and service bookings are created and updated"
      ],
      [
        "Guest Records",
        "which preferences and stay details are retained"
      ],
      [
        "Service Handoffs",
        "how front desk, dining and operations teams share context"
      ],
      [
        "Property Review",
        "how service findings inform later workflow changes"
      ]
    ]
  }
} as const;
const servicesProfiles = {
  "/": {
    "name": "Software Consulting",
    "intro": "Connect product goals, architecture choices and delivery practices through a clear consulting scope.",
    "areas": [
      ["Business context", "Outcome framing", "the business need, users and operating context"],
      ["Delivery path", "Work progression", "how discovery, decisions and implementation connect"],
      ["Engineering review", "Technical checks", "the architecture, quality and acceptance evidence"],
      ["User workflows", "Experience design", "the journeys and tasks the software should support"],
      ["Decision records", "Consulting history", "the assumptions, options and choices retained for context"],
      ["Platform landscape", "Technical environment", "the applications, data and infrastructure involved"],
      ["Roadmap state", "Delivery visibility", "how priorities, dependencies and open decisions remain visible"],
      ["System connections", "Integration context", "the services and handoffs linking the solution"]
    ]
  },
  "/services/it-outsourcing/": {
    "name": "IT Outsourcing",
    "intro": "Organise delegated operations around clear ownership, controlled access and reviewable service handoffs.",
    "areas": [
      [
        "Delegated scope",
        "Service boundaries",
        "responsibilities retained by the internal team and assigned to the partner"
      ],
      [
        "Support flow",
        "Request handling",
        "intake, triage, updates and closure across both teams"
      ],
      [
        "Service standards",
        "Delivery checks",
        "acceptance criteria and working agreements for recurring operations"
      ],
      [
        "User requests",
        "Support journeys",
        "how employees and system owners request and receive help"
      ],
      [
        "Operating records",
        "Service history",
        "tickets, changes and decisions that require traceable records"
      ],
      [
        "Delivery environments",
        "Environment access",
        "approved access to infrastructure, applications and support tools"
      ],
      [
        "Work status",
        "Progress control",
        "open work, dependencies and escalation status"
      ],
      [
        "System handoffs",
        "Integration points",
        "interfaces between internal systems and outsourced operations"
      ]
    ]
  },
  "/services/software-development/": {
    "name": "Software Development",
    "intro": "Connect product intent to architecture, implementation and release checks for custom software delivery.",
    "areas": [
      [
        "Product scope",
        "Product boundaries",
        "users, workflows and outcomes included in the application"
      ],
      [
        "Release checks",
        "Delivery readiness",
        "functional review and release criteria for each increment"
      ],
      [
        "Code standards",
        "Engineering structure",
        "component boundaries, conventions and maintainable implementation"
      ],
      [
        "User journeys",
        "Application experience",
        "the paths people follow through essential product tasks"
      ],
      [
        "Application records",
        "Data behavior",
        "how application information is created, changed and retrieved"
      ],
      [
        "Runtime environments",
        "Deployment context",
        "the environments and configuration used to run the software"
      ],
      [
        "State handling",
        "Application state",
        "how client and server state remains predictable across workflows"
      ],
      [
        "System integrations",
        "External connections",
        "the APIs and services the application needs to exchange data with"
      ]
    ]
  },
  "/services/it-support/": {
    "name": "IT Support",
    "intro": "Structure technical support around clear intake, triage, resolution and recurring-issue review.",
    "areas": [
      [
        "Support scope",
        "Coverage boundaries",
        "users, devices and systems included in technical support"
      ],
      [
        "Response flow",
        "Incident handling",
        "how reported issues move through investigation and updates"
      ],
      [
        "Resolution checks",
        "Closure criteria",
        "evidence needed before a support case is considered complete"
      ],
      [
        "User guidance",
        "Support experience",
        "how people receive clear actions and status information"
      ],
      [
        "Case records",
        "Support history",
        "the context, changes and outcomes recorded for each issue"
      ],
      [
        "Support tools",
        "Working environment",
        "approved consoles and utilities used during investigation"
      ],
      [
        "Issue status",
        "Case state",
        "how priority, ownership and blockers remain visible"
      ],
      [
        "Escalations",
        "Specialist handoffs",
        "when a case moves to another technical team or vendor"
      ]
    ]
  },
  "/services/desktop-development/": {
    "name": "Desktop Application Development",
    "intro": "Shape desktop software around workstation workflows, local dependencies and controlled update paths.",
    "areas": [
      [
        "Desktop scope",
        "Application boundaries",
        "the workstation tasks and users included in the product"
      ],
      [
        "Update checks",
        "Release readiness",
        "installation, compatibility and rollback checks for desktop changes"
      ],
      [
        "Code structure",
        "Desktop architecture",
        "modules, local services and shared application conventions"
      ],
      [
        "User workflows",
        "Desktop experience",
        "how keyboard, window and task flows support daily work"
      ],
      [
        "Local records",
        "Desktop data",
        "how files and local application records are stored and exchanged"
      ],
      [
        "Device environments",
        "Platform context",
        "operating systems, hardware and dependencies in use"
      ],
      [
        "Session state",
        "Application state",
        "how in-progress work and preferences persist safely"
      ],
      [
        "System links",
        "Desktop integrations",
        "connections to devices, services and enterprise systems"
      ]
    ]
  },
  "/services/software-consulting/": {
    "name": "Software Consulting",
    "intro": "Frame software decisions through current-state evidence, practical options and an implementable next-step path.",
    "areas": [
      [
        "Advisory scope",
        "Decision boundaries",
        "the questions, constraints and stakeholders included in the review"
      ],
      [
        "Option review",
        "Tradeoff analysis",
        "how viable technical directions are compared"
      ],
      [
        "Architecture guidance",
        "System direction",
        "the principles and boundaries recommended for the target solution"
      ],
      [
        "Team workflows",
        "Delivery context",
        "how proposed changes affect users and engineering teams"
      ],
      [
        "Evidence base",
        "Current-state records",
        "the systems, findings and assumptions informing the advice"
      ],
      [
        "Target environment",
        "Implementation context",
        "the platforms and constraints affecting later delivery"
      ],
      [
        "Decision status",
        "Advisory outcomes",
        "open questions, decisions and dependencies that remain visible"
      ],
      [
        "Roadmap links",
        "Implementation handoffs",
        "how recommendations connect to programmes, vendors and internal owners"
      ]
    ]
  },
  "/services/application-services/": {
    "name": "Application Services",
    "intro": "Coordinate application changes, releases and support through one reviewable lifecycle.",
    "areas": [
      [
        "Service scope",
        "Application coverage",
        "products, modules and users included in the service"
      ],
      [
        "Change flow",
        "Delivery handling",
        "how fixes and enhancements move from intake to release"
      ],
      [
        "Release standards",
        "Quality checks",
        "the evidence required before application changes are published"
      ],
      [
        "User workflows",
        "Application experience",
        "how planned changes affect essential user tasks"
      ],
      [
        "Application records",
        "Operational history",
        "changes, incidents and decisions retained for review"
      ],
      [
        "Service environments",
        "Lifecycle context",
        "development, test and production environments in scope"
      ],
      [
        "Work state",
        "Lifecycle status",
        "how backlog, release and support work remains visible"
      ],
      [
        "Platform links",
        "Application integrations",
        "the services and data exchanges affected by application changes"
      ]
    ]
  },
  "/services/mobile-development/": {
    "name": "Mobile Application Development",
    "intro": "Plan iOS and Android delivery around mobile journeys, device conditions and store-release checks.",
    "areas": [
      [
        "Mobile scope",
        "Product boundaries",
        "the users, platforms and workflows included in the app"
      ],
      [
        "Release checks",
        "Store readiness",
        "device testing, review and publishing criteria for updates"
      ],
      [
        "App structure",
        "Mobile architecture",
        "screens, services and shared application conventions"
      ],
      [
        "Touch journeys",
        "Mobile experience",
        "how people complete key tasks on smaller screens"
      ],
      [
        "Mobile records",
        "App data",
        "how the app reads, updates and protects application information"
      ],
      [
        "Device context",
        "Platform environments",
        "operating systems, permissions and connectivity conditions"
      ],
      [
        "Session state",
        "Mobile state",
        "how in-progress work and preferences behave across sessions"
      ],
      [
        "Service links",
        "Mobile integrations",
        "the APIs, notifications and device services used by the app"
      ]
    ]
  },
  "/services/application-maintenance/": {
    "name": "Application Maintenance",
    "intro": "Manage defects and planned changes with safeguards for the application behavior already in use.",
    "areas": [
      [
        "Maintenance scope",
        "Coverage boundaries",
        "applications, modules and environments included in maintenance"
      ],
      [
        "Issue flow",
        "Defect handling",
        "how findings move through triage, investigation and repair"
      ],
      [
        "Change safeguards",
        "Regression checks",
        "the evidence protecting existing behavior during a change"
      ],
      [
        "User impact",
        "Maintenance experience",
        "how fixes and downtime affect application users"
      ],
      [
        "Change records",
        "Maintenance history",
        "issues, decisions and releases retained for review"
      ],
      [
        "Support environments",
        "Technical context",
        "the environments and dependencies used to diagnose problems"
      ],
      [
        "Work status",
        "Maintenance state",
        "how priority, blockers and release readiness remain visible"
      ],
      [
        "Dependency links",
        "System handoffs",
        "the services and integrations affected by maintenance work"
      ]
    ]
  },
  "/services/managed-it-services/": {
    "name": "Managed IT Services",
    "intro": "Coordinate monitoring, maintenance and escalation across the infrastructure placed under ongoing management.",
    "areas": [
      [
        "Managed scope",
        "Infrastructure coverage",
        "devices, platforms and environments included in the service"
      ],
      [
        "Event flow",
        "Operational response",
        "how observed events move through review and action"
      ],
      [
        "Service controls",
        "Management checks",
        "the maintenance and change criteria applied to managed systems"
      ],
      [
        "User support",
        "Service experience",
        "how system owners request help and receive updates"
      ],
      [
        "Operations records",
        "Service history",
        "events, changes and decisions retained for review"
      ],
      [
        "Managed environments",
        "Infrastructure context",
        "the production and support environments covered"
      ],
      [
        "Service state",
        "Operational status",
        "how incidents, maintenance and dependencies remain visible"
      ],
      [
        "Provider links",
        "External handoffs",
        "the vendors and systems involved in managed operations"
      ]
    ]
  },
  "/services/it-staff-augmentation/": {
    "name": "IT Staff Augmentation",
    "intro": "Integrate added engineering capacity through defined roles, team handoffs and visible delivery ownership.",
    "areas": [
      [
        "Role scope",
        "Capacity boundaries",
        "skills, responsibilities and outcomes expected from added roles"
      ],
      [
        "Delivery flow",
        "Team coordination",
        "how work moves between augmented and internal team members"
      ],
      [
        "Working standards",
        "Team checks",
        "the conventions and acceptance criteria used by the combined team"
      ],
      [
        "Collaboration paths",
        "Team experience",
        "how contributors communicate and resolve working dependencies"
      ],
      [
        "Work records",
        "Delivery history",
        "tasks, decisions and reviews retained for shared context"
      ],
      [
        "Tool access",
        "Working environment",
        "the repositories, platforms and systems each role may use"
      ],
      [
        "Assignment state",
        "Capacity status",
        "how ownership, progress and blockers remain visible"
      ],
      [
        "Team interfaces",
        "Organisational handoffs",
        "connections between product, engineering and specialist teams"
      ]
    ]
  },
  "/services/it-consulting/": {
    "name": "IT Consulting",
    "intro": "Connect business priorities to current infrastructure evidence, viable options and a staged IT roadmap.",
    "areas": [
      [
        "Advisory scope",
        "Business boundaries",
        "the priorities, systems and stakeholders included in the review"
      ],
      [
        "Option analysis",
        "Direction review",
        "how viable IT approaches and tradeoffs are compared"
      ],
      [
        "Architecture path",
        "Target structure",
        "the principles guiding future platforms and services"
      ],
      [
        "Operating workflows",
        "Team impact",
        "how proposed changes affect users and support teams"
      ],
      [
        "Environment evidence",
        "Current-state records",
        "the assets, constraints and findings informing recommendations"
      ],
      [
        "Target platforms",
        "Implementation context",
        "the infrastructure and tools relevant to the proposed direction"
      ],
      [
        "Roadmap state",
        "Decision status",
        "how dependencies, decisions and next actions remain visible"
      ],
      [
        "Programme links",
        "Implementation handoffs",
        "connections to projects, vendors and internal owners"
      ]
    ]
  },
  "/services/": {
    "name": "Engineering Services",
    "intro": "Map each technical need to a clear service boundary, delivery path and responsible owner.",
    "areas": [
      [
        "Service scope",
        "Capability boundaries",
        "the business need and technical work included in an engagement"
      ],
      [
        "Delivery flow",
        "Work progression",
        "how discovery, implementation and review connect"
      ],
      [
        "Engineering checks",
        "Acceptance standards",
        "the evidence used to review delivered software or infrastructure"
      ],
      [
        "User outcomes",
        "Service experience",
        "how the work supports people and operating workflows"
      ],
      [
        "Project records",
        "Delivery history",
        "decisions, changes and outcomes retained for context"
      ],
      [
        "Technical environments",
        "Platform context",
        "the applications, data and infrastructure involved"
      ],
      [
        "Work state",
        "Delivery status",
        "how priorities, dependencies and ownership remain visible"
      ],
      [
        "Service links",
        "Capability handoffs",
        "connections between consulting, engineering, cloud and support"
      ]
    ]
  },
  "/services/mvp-development/": {
    "name": "MVP Development",
    "intro": "Turn a product assumption into a bounded initial workflow and a clear learning cycle.",
    "areas": [
      [
        "Product question",
        "Validation scope",
        "the assumption the initial release is intended to examine"
      ],
      [
        "Learning flow",
        "Evidence cycle",
        "how observed use and feedback reach the product review"
      ],
      [
        "Build boundary",
        "MVP standards",
        "the capabilities and acceptance checks included in the first release"
      ],
      [
        "Core journey",
        "Initial experience",
        "the smallest complete user path needed for evaluation"
      ],
      [
        "Learning records",
        "Product evidence",
        "feedback, observations and decisions retained for context"
      ],
      [
        "Release environment",
        "Delivery context",
        "where the initial product is tested and reviewed"
      ],
      [
        "Experiment state",
        "MVP status",
        "how open questions, progress and blockers remain visible"
      ],
      [
        "Product links",
        "Essential integrations",
        "the external services needed for the core journey"
      ]
    ]
  },
  "/services/it-help-desk/": {
    "name": "IT Help Desk",
    "intro": "Organise user support through clear contact channels, triage rules, escalation and knowledge review.",
    "areas": [
      [
        "Help scope",
        "Support boundaries",
        "users, devices and common systems covered by the desk"
      ],
      [
        "Case flow",
        "Request handling",
        "how questions and incidents move from intake to closure"
      ],
      [
        "Triage standards",
        "Support checks",
        "the information and priority rules applied to each case"
      ],
      [
        "User guidance",
        "Help experience",
        "how people receive actions, explanations and status updates"
      ],
      [
        "Case history",
        "Support records",
        "requests, changes and outcomes retained for future context"
      ],
      [
        "Desk tools",
        "Working environment",
        "the approved consoles and utilities used by support staff"
      ],
      [
        "Queue state",
        "Request status",
        "how priority, ownership and blockers remain visible"
      ],
      [
        "Escalation links",
        "Specialist handoffs",
        "when work moves to infrastructure, application or vendor teams"
      ]
    ]
  }
} as const;
const SERVICE_IMAGE = "https://admin.wpfedev.com/wp-content/uploads/2026/01/Sampleimage-scaled.webp";
function createStatsContent(profile: { readonly name:string; readonly intro:string; readonly checks: readonly (readonly [string,string])[] }): StatsSectionContent { return { titleLead: `${profile.name} Decisions`, titleAccent:"Worth Reviewing", intro:profile.intro, cards: profile.checks.map(([value,focus])=>({value,desc:`${profile.name} review: ${focus}.`})) as unknown as FourStatsCards }; }
function createServicesContent(profile: { readonly name:string; readonly intro:string; readonly areas: readonly (readonly [string,string,string])[] }): ServicesTabsContent { const lower=profile.name.toLowerCase(); return { eyebrow:`${profile.name} capabilities`, title:`${profile.name} delivery areas`, intro:profile.intro, tabs:profile.areas.map(([label,title,focus],index)=>({id:["headless","performance","systems","uiux","seo","edge","state","api"][index] as ServicesTabId,label,title:`${profile.name}: ${title}`,image:SERVICE_IMAGE,imageAlt:`${profile.name} ${label.toLowerCase()} reference diagram`,bullets:[`Define ${focus} for the agreed ${lower} scope.`,`Document ${profile.name} ${label.toLowerCase()} handoffs, owners and dependencies.`,`Review ${profile.name} ${label.toLowerCase()} changes against the agreed checks.`,`Keep ${profile.name} ${label.toLowerCase()} decisions traceable for the next cycle.`] as FourStrings})) as unknown as EightServiceTabs }; }
export const statsSectionContent: Readonly<Record<string,StatsSectionContent>> = Object.fromEntries(Object.entries(statsProfiles).map(([path,profile])=>[path,createStatsContent(profile)]));
export const servicesTabsContent: Readonly<Record<string,ServicesTabsContent>> = Object.fromEntries(Object.entries(servicesProfiles).map(([path,profile])=>[path,createServicesContent(profile)]));
const fallbackStats=createStatsContent({name:"Service Delivery",intro:"Review scope, responsibilities and delivery checks before work moves into implementation.",checks:[["Scope","the work included"],["Handoffs","ownership between teams"],["Controls","the checks applied"],["Review","open decisions and next actions"]]});
const fallbackServices=createServicesContent({name:"Engineering Services",intro:"Review service boundaries, delivery flow and technical handoffs for the work in scope.",areas:[["Service scope","Capability boundaries","the technical work included"],["Delivery flow","Work progression","how work moves through delivery"],["Engineering checks","Acceptance standards","the evidence used in review"],["User outcomes","Service experience","the workflows supported"],["Project records","Delivery history","the decisions retained"],["Technical environments","Platform context","the systems involved"],["Work state","Delivery status","how progress remains visible"],["Service links","Capability handoffs","the integrations and team connections"]]});
export function getStatsSectionContent(path?:string|null):StatsSectionContent { return statsSectionContent[normalizePath(path)]||fallbackStats; }
export function getServicesTabsContent(path?:string|null):ServicesTabsContent { return servicesTabsContent[normalizePath(path)]||fallbackServices; }
