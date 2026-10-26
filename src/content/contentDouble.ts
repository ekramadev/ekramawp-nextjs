export interface ContentDoubleContent {
  titleLines: readonly [string, string];
  intro: string;
  approach: string;
  checks: readonly [string, string, string, string, string, string, string];
  closing: string;
  cardTitle: string;
  cardIntro: string;
  tips: readonly [readonly [string, string], readonly [string, string], readonly [string, string]];
}

export const contentDoubleContent: Record<string, ContentDoubleContent> = {
  '/node-js-experts/': {
    titleLines: ['Node.js Engineering', 'for Connected Apps'],
    intro: 'Build server-side JavaScript services around the requests, records, and integrations your application needs. Define API boundaries and data ownership before extending the backend.',
    approach: 'Node.js engineers can work on application endpoints, real-time messages, database connections, and background processing. Scope the work around clear interfaces and the operating conditions each service must handle:',
    checks: ['Defined API inputs and response contracts', 'Database access and record validation', 'Real-time message and connection handling', 'Background jobs for longer-running tasks', 'Integration with existing application services', 'Authentication and permission checks', 'Logging, testing, and operational handover'],
    closing: 'Keep implementation decisions tied to the application workflow, with reviewable code, documented interfaces, and checks for both expected requests and failure cases.',
    cardTitle: 'Plan the Service Boundaries',
    cardIntro: 'A Node.js engagement needs more than a list of endpoints. Clarify how services share data, handle asynchronous work, and remain understandable to the team maintaining them.',
    tips: [
      ['Application contracts', 'Define request formats, validation rules, response shapes, and error handling so application consumers know what each backend interface provides.'],
      ['Asynchronous workflows', 'Decide which tasks run within a request and which move to background processing, including retry behavior and handling of duplicate work.'],
      ['Operational responsibilities', 'Plan logs, meaningful tests, configuration ownership, and deployment handover around the service’s actual dependencies and failure scenarios.'],
    ],
  },
  '/headless-cms/': {
    titleLines: ['Headless CMS', 'Content Architecture'],
    intro: 'Separate content editing from the interfaces that present it. Model reusable entries in the CMS, then deliver approved content through APIs to websites and other application channels.',
    approach: 'Plan the connection between editors, content records, media assets, and frontend applications. Choose delivery and rendering behavior around how often content changes and how each channel needs to consume it:',
    checks: ['Reusable content types and field definitions', 'Media records with descriptive metadata', 'REST or GraphQL delivery contracts', 'Frontend rendering and cache update rules', 'Preview paths for unpublished content', 'Publishing roles and access boundaries', 'Integrations with connected content channels'],
    closing: 'A clear content contract lets editors manage information while frontend teams evolve presentation without changing the meaning of the underlying records.',
    cardTitle: 'Plan the Content Contract',
    cardIntro: 'A headless CMS architecture should connect editorial needs with delivery rules, rather than assuming that separating the frontend automatically solves performance or security concerns.',
    tips: [
      ['Content modeling', 'Define entries, relationships, required fields, and validation so the same information can be reused without losing the context each channel needs.'],
      ['Delivery behavior', 'Specify API queries, rendering choices, caching, and update handling for each frontend. Verify how published changes reach the interfaces that consume them.'],
      ['Editorial controls', 'Plan preview access, publishing permissions, media handling, and failure recovery across the CMS and its connected applications.'],
    ],
  },
};

export function getContentDoubleContent(path: string, pageTitle?: string | null): ContentDoubleContent {
  const segments = path.split('/').filter(Boolean);
  const route = segments.length ? `/${segments.join('/').toLowerCase()}/` : '/';
  const title = pageTitle?.trim() || 'Application Planning';
  return contentDoubleContent[route] ?? {
    titleLines: [title, 'Connected Workflows'],
    intro: `Define the users, information, and interfaces needed for ${title.toLowerCase()}.`,
    approach: 'Start with the application’s responsibilities and the records moving between teams:',
    checks: ['Defined user tasks', 'Consistent source records', 'Validated application inputs', 'Clear interface contracts', 'Role-based access rules', 'Reviewable exception handling', 'Documented release responsibilities'],
    closing: 'Keep implementation choices tied to the work the application needs to support.',
    cardTitle: 'Plan the Application Boundaries',
    cardIntro: 'Agree how records, connected services, and review steps fit together before implementation.',
    tips: [['Requirements', 'Define the inputs, outputs, and users for the workflow.'], ['Interfaces', 'Map record exchanges and validation between applications.'], ['Verification', 'Agree on acceptance checks and operational handover.']],
  };
}
