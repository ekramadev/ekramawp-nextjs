export interface HomeHeroCopy { readonly intro: string; }
export interface ShutterCardCopy {
  readonly id: 'nextjs' | 'graphql' | 'modeling' | 'infra';
  readonly title: string;
  readonly desc: string;
  readonly features: readonly [
    { readonly icon: string; readonly text: string },
    { readonly icon: string; readonly text: string },
    { readonly icon: string; readonly text: string },
    { readonly icon: string; readonly text: string }
  ];
  readonly bestFor: string;
  readonly useCases: string;
}
export interface ShutterCopy {
  readonly cards: readonly [ShutterCardCopy, ShutterCardCopy, ShutterCardCopy, ShutterCardCopy];
  readonly focusLabel: string;
  readonly contextsLabel: string;
  readonly showLabel: string;
  readonly hideLabel: string;
}
const homeHeroes: Readonly<Record<string, HomeHeroCopy>> = {
  '/': { intro: 'Illustrative interfaces for logistics, healthcare and finance.' }
};
const shutterPages: Readonly<Record<string, ShutterCopy>> = {
  '/headless-wordpress-front-end/': {
    focusLabel: 'Review focus:', contextsLabel: 'Application contexts:', showLabel: 'Show details', hideLabel: 'Hide details',
    cards: [
      {
        id: 'nextjs', title: 'Next.js Frontend',
        desc: 'Plan the presentation and interaction layer that consumes WordPress content.',
        features: [
          { icon: '🚀', text: 'Page rendering requirements' },
          { icon: '⚡', text: 'Representative page checks' },
          { icon: '🧩', text: 'Server and client boundaries' },
          { icon: '📱', text: 'Responsive interface behavior' }
        ],
        bestFor: 'Define content freshness, user actions and the states each screen needs to display.',
        useCases: 'Publishing pages, product catalogs and interactive content views.'
      },
      {
        id: 'graphql', title: 'WPGraphQL API',
        desc: 'Define the content query contract when WPGraphQL is selected for the project.',
        features: [
          { icon: '📡', text: 'Required fields and relationships' },
          { icon: '🔗', text: 'Available custom-field schema' },
          { icon: '🔄', text: 'Content refresh requirements' },
          { icon: '🛡️', text: 'Query access and error cases' }
        ],
        bestFor: 'Review the available schema, pagination and permissions against actual content needs.',
        useCases: 'Article queries, related content and structured records exposed by the schema.'
      },
      {
        id: 'modeling', title: 'Content Modeling',
        desc: 'Organize WordPress fields and relationships around the publishing workflow.',
        features: [
          { icon: '📝', text: 'Content types and taxonomies' },
          { icon: '🧱', text: 'Editorial block requirements' },
          { icon: '🎨', text: 'Reusable field definitions' },
          { icon: '👥', text: 'Editorial roles and permissions' }
        ],
        bestFor: 'Agree which information editors maintain and how front-end components consume it.',
        useCases: 'Resource libraries, modular pages and related publishing records.'
      },
      {
        id: 'infra', title: 'Architecture & Security',
        desc: 'Review deployment boundaries and operating responsibilities for the decoupled system.',
        features: [
          { icon: '🔒', text: 'Administrative access rules' },
          { icon: '☁️', text: 'Hosting and endpoint boundaries' },
          { icon: '💾', text: 'Revalidation and cache behavior' },
          { icon: '🌐', text: 'Content-service recovery planning' }
        ],
        bestFor: 'Document access, cache invalidation and expected behavior when a dependency is unavailable.',
        useCases: 'WordPress administration, application hosting and content delivery connections.'
      }
    ]
  }
};
const normalize = (path: string | null | undefined) => {
  const clean = (path || '/').trim().split(/[?#]/, 1)[0];
  return clean === '/' ? '/' : `/${clean.replace(/^\/+|\/+$/g, '')}/`;
};
export const getHomeHeroCopy = (path: string | null | undefined): HomeHeroCopy => homeHeroes[normalize(path)] || homeHeroes['/'];
export const getShutterCopy = (path: string | null | undefined): ShutterCopy => shutterPages[normalize(path)] || shutterPages['/headless-wordpress-front-end/'];
