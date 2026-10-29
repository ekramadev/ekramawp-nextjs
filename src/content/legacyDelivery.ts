export type LegacyRoute = "/headless-wordpress-front-end" | "/wep-app-front-end";
export interface LegacyTabCopy { readonly title: string; readonly segments: readonly string[]; }
export interface LegacyPageCopy { readonly heading: string; readonly subheading: string; readonly tabs: readonly LegacyTabCopy[]; }
export type LegacyElementsCopy = Readonly<Record<LegacyRoute, LegacyPageCopy>>;
// Segments follow the existing paragraph and inline-element slots; they do not supply markup.
export const legacyElementsCopy: LegacyElementsCopy = {
  "/headless-wordpress-front-end": {
    heading: "The Headless Architecture",
    subheading: "Review the content models, interfaces and operating choices behind a decoupled WordPress front end.",
    tabs: [
      { title: "Content Modeling", segments: [
        "Content modeling defines the information a WordPress front end needs to present. In a decoupled setup, editors manage content in WordPress while application components determine how that information is displayed.",
        "Plan fields, relationships and reusable content around the actual publishing workflow:",
        "Content Fields:", "Define the fields and content types required by each page. Record validation needs and the information editors must supply.",
        "API Exposure:", "Check which fields and relationships the chosen content interface exposes, including the access rules for unpublished or restricted records.",
        "Reusable Blocks:", "Identify content that belongs in more than one page or channel, then define how its fields and presentation requirements relate.",
        "Document the model with the people maintaining the content. A model change should be reviewed against the components and publishing tasks that depend on it."
      ]},
      { title: "GraphQL APIs", segments: [
        "A WordPress front end can use the REST API or a GraphQL interface such as WPGraphQL. The choice depends on the available schema, application queries and operating requirements; neither approach guarantees a performance outcome.",
        "When GraphQL is selected, define the query and access contract around the application's content needs:",
        "Requested Fields:", "Specify the fields required by each view and check how related records are represented in the schema.",
        "Query Boundaries:", "Review pagination, query complexity and the server work required to resolve related content rather than assuming one request is always sufficient.",
        "Schema Review:", "Keep schema definitions and representative queries available to the teams maintaining the WordPress integration.",
        "Test representative responses, unavailable content and authorization failures. The application still needs explicit loading, error and recovery behavior around its content requests."
      ]},
      { title: "Next.js Frontend", segments: [
        "Next.js can provide the presentation layer for WordPress content while React components organize page behavior. The rendering and caching approach should match the content's update requirements and the interactions users need.",
        "Choose rendering boundaries and publishing behavior as part of the application design:",
        "Static Rendering:", "Identify content suitable for pre-rendering and define when the application should produce a revised page.",
        "Content Revalidation:", "Configure time-based or on-demand revalidation where appropriate, then check the path from an editorial update to the refreshed front-end response.",
        "Interactive Components:", "Define the client-side state and user events needed by interactive controls, alongside the content supplied by the server.",
        "Review the resulting pages with representative content and connection conditions. Framework selection alone does not establish page speed, content freshness or accessibility."
      ]},
      { title: "Access Boundaries", segments: [
        "Decoupling the front end changes system boundaries but does not remove the need to protect WordPress, application endpoints and administrative access. Review each part of the deployment and the information it exposes.",
        "Define access and recovery arrangements for the actual environment:",
        "Administrative Access:", "Specify who can reach WordPress administration and how accounts, permissions and access changes are managed.",
        "Endpoint Review:", "Review the exposure and intended use of endpoints such as", "wp-login.php", "and", "xmlrpc.php", "within the deployment's access policy.",
        "Hosting Controls:", "Identify the network and hosting controls configured for the application, and assign responsibility for reviewing those settings.",
        "Plan what users see when the content service is unavailable and which cached information may still be served. Availability depends on the implemented rendering, cache and recovery arrangements."
      ]},
      { title: "Content Channels", segments: [
        "A shared WordPress repository can supply content to more than one application. Each consuming website or application still needs a defined content contract, access rules and presentation behavior.",
        "Review the requirements of the channels that are actually included in the project:",
        "Shared Definitions:", "Agree the fields and identifiers that should mean the same thing across the selected content channels.",
        "Publishing Ownership:", "Define which editors maintain shared information and how channel-specific changes are reviewed before publication.",
        "Consumer Requirements:", "Document the formatting, media and update needs of each consuming application rather than assuming every channel uses identical content.",
        "Introduce new channels through an explicit compatibility review. Shared content can support reuse, but it still requires maintenance when models or consumer requirements change."
      ]}
    ]
  },
  "/wep-app-front-end": {
    heading: "Web App Front End Architecture",
    subheading: "Review component behavior, application state and service connections for an interactive web application.",
    tabs: [
      { title: "React & Next.js Ecosystem", segments: ["Modern Component UI", "React components can organize interactive screens into reusable interface elements. Define the actions, information and feedback each component needs before choosing how its behavior is implemented.", "Where Next.js is used, review server and client component boundaries against data access and interaction requirements. Check the resulting application behavior rather than assuming a particular rendering choice guarantees a faster experience."] },
      { title: "Complex State Management", segments: ["Handling Application State", "Application state includes form values, selections, user-session context and records received from services. Decide which part of the application owns each value and when it should change.", "Local State:", "Keep state close to the component that owns the related interaction when other screens do not need it.", "Shared State:", "Define how information shared by multiple views is updated and how competing changes are handled.", "Server State:", "Plan request status, cached records, refresh behavior and failure feedback around the application's service calls."] },
      { title: "API Integrations", segments: ["Connecting the Web", "Web applications exchange information with the services needed by their business workflows. Identify those dependencies and the operations each interface needs to support.", "Define request and response fields, permission rules and failure behavior for each connection. Types can describe expected data shapes, while runtime validation and representative integration checks address the responses actually received."] },
      { title: "Authentication & Security", segments: ["Access and Session Boundaries", "Define sign-in, session renewal and account removal around the roles using the application. Review which records and operations each role is allowed to access.", "Authorization must be enforced at the relevant service boundaries. Review client feedback, input handling and request protections as separate concerns, with checks appropriate to the selected identity and application design."] },
      { title: "Real-Time Data", segments: ["Live Synchronization", "Some applications need users to see updates from other sessions or connected systems while a screen remains open. Define which events matter and how the interface should reflect them.", "Compare polling, server-sent events or WebSocket connections against the application's requirements. Plan reconnection, delayed or repeated events and unavailable-service feedback; an event-driven connection does not guarantee zero latency or lower operating costs."] },
      { title: "PWA Capabilities", segments: ["Progressive Web App Behavior", "A progressive web app can offer selected installation and offline capabilities where the browser and application configuration support them. Define the supported tasks and devices before including these features in scope.", "Offline Tasks:", "Choose which resources and records may be cached, and explain which actions still require a connection.", "Installation:", "Review installation requirements and behavior on the browsers and devices included in the delivery scope.", "Deferred Updates:", "Define how pending actions are retried or reviewed when connectivity returns, including a fallback when background synchronization is unavailable."] }
    ]
  }
};
export function getLegacyElementsCopy(path: string | null | undefined): LegacyPageCopy { const clean=(path||"/").trim().split(/[?#]/,1)[0];const normalized=clean==="/"?"/":clean.replace(/\/$/,"");return legacyElementsCopy[normalized as LegacyRoute]||legacyElementsCopy["/headless-wordpress-front-end"]; }

export interface AudienceCardCopy { readonly badge: string; readonly rows: readonly [readonly [string,string],readonly [string,string],readonly [string,string]]; readonly cue: string; readonly cueLabel: string; }
export interface AudienceCarouselCopy { readonly heading: string; readonly accent: string; readonly intro: string; readonly cards: readonly [AudienceCardCopy,AudienceCardCopy,AudienceCardCopy,AudienceCardCopy]; readonly sideHeading: string; readonly sideAccent: string; readonly sideBody: string; readonly placeholder: string; readonly button: string; }
export const audienceCarouselCopy: Readonly<Record<string,AudienceCarouselCopy>> = {
  "/": { heading: "Software Delivery for", accent: "Different Business Needs", intro: "Review application scope, system connections and delivery responsibilities around the work your organization needs to complete.", cards: [
    {badge:"Digital Agencies",rows:[["Scope:","Reusable interface components."],["Context:","Existing design and content rules."],["Review:","Handoffs and editing needs."]],cue:"UI",cueLabel:"Interface scope"},
    {badge:"Enterprise & B2B",rows:[["Scope:","Connected business workflows."],["Context:","Records, roles and integrations."],["Review:","Operating and change ownership."]],cue:"Data",cueLabel:"System boundaries"},
    {badge:"Commerce Teams",rows:[["Scope:","Catalog and ordering workflows."],["Context:","Product and transaction records."],["Review:","Checkout and order exceptions."]],cue:"Flow",cueLabel:"Commerce journeys"},
    {badge:"SaaS & Startups",rows:[["Scope:","A defined application release."],["Context:","Users, services and constraints."],["Review:","Acceptance and follow-up work."]],cue:"Plan",cueLabel:"Release priorities"}
  ],sideHeading:"Start with Your",sideAccent:"Application Context",sideBody:"Outline the users, systems and decisions a proposed software project needs to address.",placeholder:"Website or application context",button:"Project Context" }
};
export function getAudienceCarouselCopy(path: string | null | undefined): AudienceCarouselCopy { const normalized=(path||"/").trim().split(/[?#]/,1)[0];return audienceCarouselCopy[normalized]||audienceCarouselCopy["/"]; }
