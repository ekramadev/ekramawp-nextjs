export interface ArchitectureTabCopy {
  title: string;
  features: readonly [{ title: string; desc: string }, { title: string; desc: string }];
  buttonText: string;
}

export interface ArchitectureTabsContent {
  header: string;
  description: string;
  tabs: readonly [ArchitectureTabCopy, ArchitectureTabCopy, ArchitectureTabCopy, ArchitectureTabCopy, ArchitectureTabCopy];
}

export interface EngineeringChallengeCopy {
  challenge: string;
  solution: string;
  points: readonly [string, string, string];
  statValue: string;
  statLabel: string;
}

export interface EngineeringCarouselContent {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  cards: readonly [EngineeringChallengeCopy, EngineeringChallengeCopy, EngineeringChallengeCopy, EngineeringChallengeCopy, EngineeringChallengeCopy];
}

export const architectureTabsContent: Readonly<Record<string, ArchitectureTabsContent>> = {
  "/node-js-experts/": {
    "header": "Build the Node.js Backend",
    "description": "Connect event-driven JavaScript services, application data and delivery workflows around the needs of your product.",
    "tabs": [
      {
        "title": "Node.js Runtime",
        "features": [
          {
            "title": "Event-driven request handling",
            "desc": "Keep network and database work asynchronous, and move CPU-heavy processing away from the request loop."
          },
          {
            "title": "Service boundaries",
            "desc": "Organize routes, business rules and shared modules so changes have a clear place in the codebase."
          }
        ],
        "buttonText": "Discuss Node.js services"
      },
      {
        "title": "API Design",
        "features": [
          {
            "title": "Contracts for connected clients",
            "desc": "Define request validation, response shapes and error handling for the web, mobile and partner clients using your API."
          },
          {
            "title": "Access-aware endpoints",
            "desc": "Apply authentication and permission checks to service routes, with explicit handling for rejected and expired credentials."
          }
        ],
        "buttonText": "Discuss Node.js APIs"
      },
      {
        "title": "Database Access",
        "features": [
          {
            "title": "Queries that fit the workflow",
            "desc": "Model application records and relationships, then implement database queries around the reads and writes each feature needs."
          },
          {
            "title": "Reliable data changes",
            "desc": "Plan migrations, transaction boundaries and connection handling so schema changes can be reviewed alongside application code."
          }
        ],
        "buttonText": "Discuss database integration"
      },
      {
        "title": "Background Jobs",
        "features": [
          {
            "title": "Work outside the request",
            "desc": "Use queues and workers for scheduled tasks, notifications and imports that should not hold an HTTP response open."
          },
          {
            "title": "Retries with clear limits",
            "desc": "Track job state, handle duplicate messages and define retry rules for external services that may be unavailable."
          }
        ],
        "buttonText": "Discuss Node.js workers"
      },
      {
        "title": "Testing & Delivery",
        "features": [
          {
            "title": "Tests at service boundaries",
            "desc": "Check business rules, API contracts and database integrations with fixtures that cover both accepted and rejected requests."
          },
          {
            "title": "Observable releases",
            "desc": "Combine reviewed builds, environment configuration and application logs so the team can trace behavior after a release."
          }
        ],
        "buttonText": "Discuss Node.js delivery"
      }
    ]
  },
  "/headless-cms/": {
    "header": "Connect Your Content Architecture",
    "description": "Give editors structured content tools while delivering approved records and media to the frontend channels that need them.",
    "tabs": [
      {
        "title": "Content Models",
        "features": [
          {
            "title": "Reusable editorial records",
            "desc": "Define fields, references and validation around articles, landing pages and other content types your team maintains."
          },
          {
            "title": "Ownership and permissions",
            "desc": "Separate authoring, review and publishing responsibilities so editors work within the access their role requires."
          }
        ],
        "buttonText": "Discuss your content model"
      },
      {
        "title": "Content APIs",
        "features": [
          {
            "title": "Contracts between CMS and frontend",
            "desc": "Select REST or GraphQL interfaces around the content relationships, filters and delivery requirements of each consuming application."
          },
          {
            "title": "Controlled delivery access",
            "desc": "Distinguish public published content from draft or restricted records, with API credentials handled on the appropriate server boundary."
          }
        ],
        "buttonText": "Discuss content delivery APIs"
      },
      {
        "title": "Media Records",
        "features": [
          {
            "title": "Assets with editorial context",
            "desc": "Store useful alt text, captions and media references alongside content so each frontend can render the intended asset."
          },
          {
            "title": "Channel-aware asset use",
            "desc": "Plan image variants and file references around the sizes and formats supported by the consuming websites and applications."
          }
        ],
        "buttonText": "Discuss media distribution"
      },
      {
        "title": "Editorial Preview",
        "features": [
          {
            "title": "Review drafts in context",
            "desc": "Connect authenticated preview routes to unpublished records so editors can check content before making it publicly available."
          },
          {
            "title": "Publishing and refresh rules",
            "desc": "Use publication events to refresh affected frontend content, with explicit handling for removed or unpublished records."
          }
        ],
        "buttonText": "Discuss editorial workflows"
      },
      {
        "title": "Frontend Channels",
        "features": [
          {
            "title": "Components mapped to content",
            "desc": "Match the CMS field model to typed React props so each page receives its own headings, text and media rather than shared placeholder copy."
          },
          {
            "title": "Delivery across applications",
            "desc": "Document how each channel consumes the same source records while preserving its own layout and release process."
          }
        ],
        "buttonText": "Discuss CMS frontend integration"
      }
    ]
  },
  "/headless-wordpress-front-end/": {
    "header": "Build Your Decoupled Stack",
    "description": "Connect WordPress authoring with a React frontend, reviewed releases and explicit content delivery rules.",
    "tabs": [
      {
        "title": "Next.js Frontend",
        "features": [
          {
            "title": "Rendering matched to the page",
            "desc": "Choose static, server-rendered or refreshed pages according to how often WordPress content changes and whether a request needs private data."
          },
          {
            "title": "Components backed by content",
            "desc": "Map WordPress blocks and fields to React components while keeping each page’s text and media in its own content records."
          }
        ],
        "buttonText": "Discuss Next.js development"
      },
      {
        "title": "Vercel Deployment",
        "features": [
          {
            "title": "Frontend delivery and caching",
            "desc": "Configure the frontend build and cache rules around your content freshness requirements, checking published changes on the deployed site."
          },
          {
            "title": "Reviewable preview URLs",
            "desc": "Use deployment previews to review code and content integration before promoting an approved change to production."
          }
        ],
        "buttonText": "Discuss frontend deployment"
      },
      {
        "title": "GitHub Workflows",
        "features": [
          {
            "title": "Reviewed changes and checks",
            "desc": "Keep frontend changes in focused branches, with build checks and review before merging into the production branch."
          },
          {
            "title": "Versioned release history",
            "desc": "Record application changes in Git so the team can compare revisions and identify the code associated with a deployment."
          }
        ],
        "buttonText": "Discuss your release workflow"
      },
      {
        "title": "WPGraphQL Backend",
        "features": [
          {
            "title": "WordPress editorial tools",
            "desc": "Keep content creation in WordPress and define the fields, block data and editorial permissions needed by your publishing team."
          },
          {
            "title": "Queries shaped for components",
            "desc": "Request the WordPress fields each view needs, handling missing records and relationships at the frontend boundary."
          }
        ],
        "buttonText": "Discuss WordPress integration"
      },
      {
        "title": "Access & Security",
        "features": [
          {
            "title": "Protect the publishing backend",
            "desc": "Configure WordPress access controls and keep server credentials out of public frontend bundles; decoupling alone does not secure the CMS."
          },
          {
            "title": "Separate public and private data",
            "desc": "Apply appropriate authentication, validation and update procedures to the CMS, content APIs and deployed frontend."
          }
        ],
        "buttonText": "Discuss access boundaries"
      }
    ]
  },
  "/wep-app-front-end/": {
    "header": "Build Your Web Application",
    "description": "Connect React views, application state and backend contracts around the tasks your users need to complete.",
    "tabs": [
      {
        "title": "React Ecosystem",
        "features": [
          {
            "title": "Views built from shared components",
            "desc": "Create reusable React elements around recurring interface patterns while supplying the distinct data and labels each screen requires."
          },
          {
            "title": "Routes with clear responsibilities",
            "desc": "Organize application views around user tasks and handle loading, missing records and errors within the relevant route."
          }
        ],
        "buttonText": "Discuss React application views"
      },
      {
        "title": "State Management",
        "features": [
          {
            "title": "Local and shared state",
            "desc": "Keep temporary interface state close to its component and share data only where multiple views need coordinated updates."
          },
          {
            "title": "Predictable update flows",
            "desc": "Define how edits, server responses and navigation change the interface, including unsaved work and failed requests."
          }
        ],
        "buttonText": "Discuss application state"
      },
      {
        "title": "API Integrations",
        "features": [
          {
            "title": "Typed frontend contracts",
            "desc": "Connect application screens to documented service requests and response shapes, with validation where external data enters the interface."
          },
          {
            "title": "Useful failure feedback",
            "desc": "Handle timeouts, rejected requests and expired sessions so users can understand what happened and what action is available."
          }
        ],
        "buttonText": "Discuss frontend API integration"
      },
      {
        "title": "App Performance",
        "features": [
          {
            "title": "Rendering around actual usage",
            "desc": "Review which components update during common tasks, and load route-specific code and data where the application requires them."
          },
          {
            "title": "Measured loading behavior",
            "desc": "Inspect request timing and browser traces to identify the causes of slow interactions before choosing a targeted change."
          }
        ],
        "buttonText": "Discuss application rendering"
      },
      {
        "title": "Testing & QA",
        "features": [
          {
            "title": "Checks for complete user tasks",
            "desc": "Test important flows across views and API boundaries, including validation messages, loading states and unsuccessful submissions."
          },
          {
            "title": "Review across screen sizes",
            "desc": "Check supported browser and viewport combinations alongside each release, keeping findings tied to reproducible user actions."
          }
        ],
        "buttonText": "Discuss frontend validation"
      }
    ]
  }
};

export const engineeringCarouselContent: Readonly<Record<string, EngineeringCarouselContent>> = {
  "/node-js-experts/": {
    "kicker": "Node.js Engineering",
    "titleLead": "Resolve",
    "titleAccent": "Backend Friction",
    "description": "Plan JavaScript services around request handling, application records and the operational work behind each feature.",
    "cards": [
      {
        "challenge": "Blocked Requests",
        "solution": "Event-loop-aware services",
        "points": [
          "Keep I/O work asynchronous along the request path.",
          "Move expensive processing into workers when required.",
          "Handle timeouts and rejected promises explicitly."
        ],
        "statValue": "Events",
        "statLabel": "Request handling"
      },
      {
        "challenge": "Unclear API Contracts",
        "solution": "Defined service interfaces",
        "points": [
          "Validate incoming payloads before business logic runs.",
          "Document response fields and expected error states.",
          "Check authorization for the requested record or action."
        ],
        "statValue": "Rules",
        "statLabel": "API boundaries"
      },
      {
        "challenge": "Fragile Data Changes",
        "solution": "Planned database integration",
        "points": [
          "Model relations around real application workflows.",
          "Review schema migrations with the service changes.",
          "Use transactions where related writes must agree."
        ],
        "statValue": "Data",
        "statLabel": "Record integrity"
      },
      {
        "challenge": "Untracked Background Work",
        "solution": "Queued jobs and workers",
        "points": [
          "Separate long-running tasks from HTTP responses.",
          "Record job status and define retry limits.",
          "Handle duplicate messages before repeating side effects."
        ],
        "statValue": "Queue",
        "statLabel": "Background work"
      },
      {
        "challenge": "Hard-to-trace Failures",
        "solution": "Tested, observable releases",
        "points": [
          "Test service logic and external integration boundaries.",
          "Record useful context in application logs.",
          "Review build and environment changes before release."
        ],
        "statValue": "Trace",
        "statLabel": "Service diagnostics"
      }
    ]
  },
  "/headless-cms/": {
    "kicker": "Content Delivery Engineering",
    "titleLead": "Resolve",
    "titleAccent": "Content Handoffs",
    "description": "Connect editorial records to consuming applications with clear models, delivery contracts and publication rules.",
    "cards": [
      {
        "challenge": "Inconsistent Content Fields",
        "solution": "Structured content models",
        "points": [
          "Define content types around the records editors maintain.",
          "Validate required fields and linked references.",
          "Map each field to a clear frontend use."
        ],
        "statValue": "Model",
        "statLabel": "Editorial structure"
      },
      {
        "challenge": "Unclear Delivery Contracts",
        "solution": "Purposeful content APIs",
        "points": [
          "Choose the fields each consuming channel requires.",
          "Separate published content from restricted records.",
          "Handle missing entries at the application boundary."
        ],
        "statValue": "API",
        "statLabel": "Content delivery"
      },
      {
        "challenge": "Disconnected Media Assets",
        "solution": "Managed media references",
        "points": [
          "Keep captions and alt text with the asset record.",
          "Define image variants for the intended channels.",
          "Preserve references when content entries are revised."
        ],
        "statValue": "Media",
        "statLabel": "Asset context"
      },
      {
        "challenge": "Drafts Without Context",
        "solution": "Authenticated editorial preview",
        "points": [
          "Read unpublished records through controlled access.",
          "Render drafts in their intended frontend components.",
          "Keep preview content out of public delivery paths."
        ],
        "statValue": "Draft",
        "statLabel": "Review workflow"
      },
      {
        "challenge": "Stale Frontend Content",
        "solution": "Publication-aware refresh rules",
        "points": [
          "Trigger frontend refreshes from publication events.",
          "Track which views depend on changed records.",
          "Handle content removal as well as new publication."
        ],
        "statValue": "Sync",
        "statLabel": "Publishing updates"
      }
    ]
  },
  "/headless-wordpress-front-end/": {
    "kicker": "Decoupled WordPress Engineering",
    "titleLead": "Resolve",
    "titleAccent": "Publishing Friction",
    "description": "Keep WordPress authoring connected to the frontend through deliberate rendering, access and integration choices.",
    "cards": [
      {
        "challenge": "Slow Content Delivery",
        "solution": "Rendering and cache planning",
        "points": [
          "Choose rendering modes around each page’s data needs.",
          "Set refresh rules for published WordPress changes.",
          "Check content freshness on the deployed frontend."
        ],
        "statValue": "Build",
        "statLabel": "Page delivery"
      },
      {
        "challenge": "Exposed Access Boundaries",
        "solution": "CMS and API access controls",
        "points": [
          "Keep WordPress credentials in server-side configuration.",
          "Review editorial roles and API permissions.",
          "Maintain CMS updates alongside frontend releases."
        ],
        "statValue": "Auth",
        "statLabel": "Publishing access"
      },
      {
        "challenge": "Theme-bound Presentation",
        "solution": "Content-driven React views",
        "points": [
          "Read structured fields and block data from WordPress.",
          "Pass each page’s own content to reusable components.",
          "Keep frontend presentation separate from authoring records."
        ],
        "statValue": "React",
        "statLabel": "Frontend views"
      },
      {
        "challenge": "Oversized Data Requests",
        "solution": "Component-shaped queries",
        "points": [
          "Select the fields required by the current view.",
          "Resolve related records through explicit query shapes.",
          "Handle missing fields without assuming every entry is complete."
        ],
        "statValue": "Query",
        "statLabel": "WordPress data"
      },
      {
        "challenge": "Disconnected Publishing Channels",
        "solution": "Shared editorial records",
        "points": [
          "Maintain content in defined WordPress record types.",
          "Expose published entries through documented API contracts.",
          "Adapt record delivery to each consuming application."
        ],
        "statValue": "Feed",
        "statLabel": "Content channels"
      }
    ]
  }
};

function normalizePath(path?: string | null): string {
  return `/${(path || "").split(/[?#]/)[0].replace(/^\/+|\/+$/g, "").toLowerCase()}/`.replace(/^\/\/$/, "/");
}

export function getArchitectureTabsContent(path?: string | null, pageTitle?: string | null): ArchitectureTabsContent {
  const known = architectureTabsContent[normalizePath(path)];
  if (known) return known;
  const subject = pageTitle?.trim() || "Application";
  return {
    ...architectureTabsContent["/wep-app-front-end/"],
    header: `${subject} Architecture`,
    description: `Plan the frontend components, data connections and delivery workflow for ${subject.toLowerCase()}.`,
  };
}

export function getEngineeringCarouselContent(path?: string | null, pageTitle?: string | null): EngineeringCarouselContent {
  const known = engineeringCarouselContent[normalizePath(path)];
  if (known) return known;
  const subject = pageTitle?.trim() || "Application";
  return {
    ...engineeringCarouselContent["/node-js-experts/"],
    kicker: `${subject} Engineering`,
    description: `Review the service boundaries, records and delivery requirements behind ${subject.toLowerCase()}.`,
  };
}
