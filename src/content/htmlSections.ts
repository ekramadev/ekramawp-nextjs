export interface HtmlExpertiseContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  foundationTitle: string;
  foundationIntro: readonly [string, string, string];
  foundationDetail: readonly [string, string, string, string, string];
  foundationCode: readonly [string, string, string, string];
  accessibilityTitle: string;
  accessibilityBody: readonly [string, string];
  deliveryTitle: string;
  deliveryBody: readonly [string, string];
  platformTitle: string;
  platformBody: readonly [string, string, string];
  visualAlt: string;
}

interface FeatureCopy { title: string; description: string; }
interface InlineFeatureCopy {
  title: string;
  beforeCode: string;
  firstCode: string;
  betweenCode: string;
  secondCode: string;
  afterCode: string;
}

export interface HtmlCapabilitiesContent {
  titleLead: string;
  titleAccent: string;
  intro: string;
  features: readonly [FeatureCopy, FeatureCopy, InlineFeatureCopy, FeatureCopy];
  editorFilename: string;
  visualAlt: string;
}

interface HtmlSectionContent {
  expertise: HtmlExpertiseContent;
  capabilities: HtmlCapabilitiesContent;
}

export const htmlSectionContent: Readonly<Record<string, HtmlSectionContent>> = {
  "/services/web-development/": {
    "expertise": {
      "titleLead": "Build Connected",
      "titleAccent": "Web Experiences",
      "intro": "Plan responsive websites and web applications around the content, user tasks and backend services they need to connect.",
      "foundationTitle": "Structure Around User Tasks",
      "foundationIntro": [
        "Start with the pages, records and actions the website must support. A useful web application gives each screen a clear ",
        "purpose",
        " before visual styling and service integrations are added."
      ],
      "foundationDetail": [
        "Use meaningful elements such as ",
        " for standalone content, ",
        " for navigation and ",
        " for related information. Keep ",
        " containers focused on layout, with the document structure reflecting the page’s actual content."
      ],
      "foundationCode": [
        "<article>",
        "<nav>",
        "<aside>",
        "<div>"
      ],
      "accessibilityTitle": "Plan Accessible Interactions",
      "accessibilityBody": [
        "Design forms, navigation and content sections so people can understand the available actions and their outcomes. Include loading, empty and unsuccessful states in the interface plan.",
        "Use clear labels, a logical heading order and visible keyboard focus. Review important journeys with assistive technology and the browsers your audience uses."
      ],
      "deliveryTitle": "Connect Frontend and Backend",
      "deliveryBody": [
        "Define how the website reads and updates records across its CMS, application services and external integrations. Give each request an explicit input, response and failure path.",
        "Keep private credentials on the server, validate submitted data and apply permission checks to protected actions. Review the complete workflow rather than treating the interface and backend as separate deliverables."
      ],
      "platformTitle": "Deliver Responsive Pages",
      "platformBody": [
        "Choose layouts and media around the screens and connection conditions your visitors use. Where appropriate, the ",
        "<picture>",
        " element can provide image alternatives; verify the resulting pages across the supported viewport range."
      ],
      "visualAlt": "Programming illustration accompanying web application planning"
    },
    "capabilities": {
      "titleLead": "Connect the",
      "titleAccent": "Web Delivery Details",
      "intro": "Bring page structure, forms, media and release checks together so the website supports complete user journeys.",
      "features": [
        {
          "title": "Content and Data Structure",
          "description": "Define page types, shared content fields and application records before wiring them into reusable views. Keep each URL’s content distinct while reusing the presentation components."
        },
        {
          "title": "Forms and Service Actions",
          "description": "Connect user inputs to validated service requests, with clear success and error states. Check server-side permissions and validation alongside the feedback shown in the browser."
        },
        {
          "title": "Responsive Media Delivery",
          "beforeCode": "Use ",
          "firstCode": "<picture>",
          "betweenCode": " for suitable image alternatives and ",
          "secondCode": "srcset",
          "afterCode": " where multiple image sizes are available. Select assets for the intended display size and check the rendered result on supported screens."
        },
        {
          "title": "Release and Browser Checks",
          "description": "Review navigation, content states and important submissions before deployment. Record browser support and acceptance checks so the team can assess changes against the website’s actual requirements."
        }
      ],
      "editorFilename": "web-delivery.notes",
      "visualAlt": "Animated code editor beside web development capabilities"
    }
  },
  "/javascript-devs/": {
    "expertise": {
      "titleLead": "Connect Your",
      "titleAccent": "JavaScript Application",
      "intro": "Bring interactive browser views and server-side JavaScript workflows together through clear component, state and API boundaries.",
      "foundationTitle": "Give Components Clear Roles",
      "foundationIntro": [
        "Organize interface code around the tasks each view performs and the data it owns. A component’s ",
        "responsibility",
        " should be clear before state changes and service calls are connected."
      ],
      "foundationDetail": [
        "Use the browser’s ",
        " for user actions, ",
        " for submitted inputs and ",
        " for application navigation. Keep ",
        " groupings focused on presentation while JavaScript handles the behavior required by each task."
      ],
      "foundationCode": [
        "<button>",
        "<form>",
        "<a>",
        "<div>"
      ],
      "accessibilityTitle": "Make State Changes Understandable",
      "accessibilityBody": [
        "Plan how the interface responds to user input, pending requests and server results. Keep temporary view state local and coordinate shared records where multiple screens need them.",
        "Preserve clear labels, keyboard access and useful status messages as JavaScript updates the page. Check that loading, validation and failure states remain understandable during interaction."
      ],
      "deliveryTitle": "Define the Server Workflow",
      "deliveryBody": [
        "Connect browser requests to service logic, record validation and database access through documented API contracts. Treat data from external systems as input that needs checking.",
        "Handle asynchronous operations, request failures and background tasks explicitly. Keep credentials out of browser bundles and apply access checks where the server reads or changes protected records."
      ],
      "platformTitle": "Review the Complete Task",
      "platformBody": [
        "Test the path from the user’s action through the service response and back to the interface. For instance, a ",
        "<form>",
        " needs checks for accepted data, rejected input and an unavailable backend, rather than a click handler alone."
      ],
      "visualAlt": "Programming illustration accompanying full-stack JavaScript planning"
    },
    "capabilities": {
      "titleLead": "Build Beyond",
      "titleAccent": "Individual Scripts",
      "intro": "Coordinate reusable interfaces, asynchronous work and service contracts across the JavaScript application lifecycle.",
      "features": [
        {
          "title": "Components and Shared State",
          "description": "Define which views own each piece of state and how record changes reach other screens. Keep reusable components supplied with the labels and data needed for their current context."
        },
        {
          "title": "API and Async Workflows",
          "description": "Specify request and response shapes, validate external data and handle rejected or delayed operations. Separate background processing from work that must finish within a user request."
        },
        {
          "title": "Events and Interface Updates",
          "beforeCode": "Connect native controls through ",
          "firstCode": "addEventListener",
          "betweenCode": " when working with browser APIs, or the framework’s event model. Handle asynchronous service calls with ",
          "secondCode": "async/await",
          "afterCode": " where appropriate, including clear error paths and updates to the affected view."
        },
        {
          "title": "Testing and Release Handover",
          "description": "Check component behavior, API boundaries and database interactions with cases that reflect real user tasks. Document configuration ownership and diagnostic information needed after the application is deployed."
        }
      ],
      "editorFilename": "javascript.notes",
      "visualAlt": "Animated code editor beside JavaScript delivery capabilities"
    }
  },
  "/react-native-experts/": {
    "expertise": {
      "titleLead": "Plan Shared",
      "titleAccent": "Mobile Experiences",
      "intro": "Build React Native applications around shared screen logic and the platform-specific behavior required by iOS and Android.",
      "foundationTitle": "Compose Native App Screens",
      "foundationIntro": [
        "Define the navigation, records and actions needed for each mobile task. React Native presents ",
        "native controls",
        " through React components, so screen planning should account for each supported platform."
      ],
      "foundationDetail": [
        "Compose interfaces with ",
        " for layout, ",
        " for readable content and ",
        " for user actions. Use ",
        " where a screen needs scrolling, with each component’s behavior reviewed in the context of the mobile task."
      ],
      "foundationCode": [
        "<View>",
        "<Text>",
        "<Pressable>",
        "<ScrollView>"
      ],
      "accessibilityTitle": "Support Mobile Access Needs",
      "accessibilityBody": [
        "Give interactive elements descriptive labels and suitable accessibility roles. Plan touch targets, focus order and status feedback around the actions people perform on the device.",
        "Review important screens with VoiceOver on iOS and TalkBack on Android. Check text scaling, screen orientation and platform differences rather than assuming one layout covers every access need."
      ],
      "deliveryTitle": "Connect Mobile Data Flows",
      "deliveryBody": [
        "Define how the application signs users in, reads service records and submits changes. Plan loading, empty and failure states for the network conditions the app is expected to support.",
        "Keep server secrets outside the mobile client and validate protected operations on the backend. Agree how local state, cached records and remote updates should interact before adding synchronization behavior."
      ],
      "platformTitle": "Check Each Platform Journey",
      "platformBody": [
        "Review navigation, permissions and user input on the supported devices. A ",
        "<TextInput>",
        " needs appropriate keyboard behavior, labels and validation feedback, with checks on both iOS and Android."
      ],
      "visualAlt": "Programming illustration accompanying React Native screen planning"
    },
    "capabilities": {
      "titleLead": "Coordinate the",
      "titleAccent": "Mobile App Lifecycle",
      "intro": "Connect shared React Native components with device behavior, service data and checks for both mobile platforms.",
      "features": [
        {
          "title": "Shared Screens, Platform Behavior",
          "description": "Reuse screen logic and components where the experience is shared, while handling platform-specific navigation, permissions and device capabilities explicitly."
        },
        {
          "title": "Mobile Inputs and Validation",
          "description": "Choose suitable input controls and keyboard options for each task. Provide clear validation and submission feedback, and check how the screen responds when the keyboard opens or a request fails."
        },
        {
          "title": "Images and Record Lists",
          "beforeCode": "Use ",
          "firstCode": "Image",
          "betweenCode": " for the app’s image assets and ",
          "secondCode": "FlatList",
          "afterCode": " for suitable record-list interfaces. Review asset sizing, loading states and scrolling behavior on the devices the application supports."
        },
        {
          "title": "Device and Release Verification",
          "description": "Check complete user journeys on the supported iOS and Android versions. Review build configuration, permission prompts and service connectivity before preparing platform releases."
        }
      ],
      "editorFilename": "mobile-ui.notes",
      "visualAlt": "Animated code editor beside React Native delivery capabilities"
    }
  }
};

function getPageContent(path?: string | null): HtmlSectionContent | undefined {
  const normalized = `/${(path || "").split(/[?#]/)[0].split("/").filter(Boolean).join("/").toLowerCase()}/`;
  return htmlSectionContent[normalized];
}

export function getHtmlExpertiseContent(path?: string | null, pageTitle?: string | null): HtmlExpertiseContent {
  const known = getPageContent(path);
  if (known) return known.expertise;
  const subject = pageTitle?.trim() || "Application";
  return {
    ...htmlSectionContent["/services/web-development/"].expertise,
    titleLead: subject,
    titleAccent: "Development Planning",
    intro: `Plan the interfaces, records and service connections needed for ${subject.toLowerCase()}.`,
  };
}

export function getHtmlCapabilitiesContent(path?: string | null, pageTitle?: string | null): HtmlCapabilitiesContent {
  const known = getPageContent(path);
  if (known) return known.capabilities;
  const subject = pageTitle?.trim() || "Application";
  return {
    ...htmlSectionContent["/services/web-development/"].capabilities,
    titleLead: subject,
    titleAccent: "Delivery Details",
    intro: `Connect interface behavior, service requests and release checks for ${subject.toLowerCase()}.`,
  };
}
