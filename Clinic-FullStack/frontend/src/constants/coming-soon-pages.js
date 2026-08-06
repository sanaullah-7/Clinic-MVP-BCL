import { ROUTES } from './routes';

/** Paths that show the Coming Soon page until content is ready */
export const COMING_SOON_PAGES = {
  [ROUTES.landing.blog]: {
    title: 'Campus Blog',
    description: 'Articles, guides, and updates for clinic owners and practitioners are on the way.',
  },
  [ROUTES.landing.careers]: {
    title: 'Careers',
    description: 'Join the Tendo team — open roles and culture stories will be posted here soon.',
  },
  [ROUTES.landing.terms]: {
    title: 'Terms of Service',
    description: 'Our terms of service document is being finalized and will be published here.',
  },
  [ROUTES.landing.privacy]: {
    title: 'Privacy Policy',
    description: 'Our privacy policy is being updated and will be available here shortly.',
  },
  [ROUTES.landing.sitemap]: {
    title: 'Sitemap',
    description: 'A full sitemap of the Tendo website is coming soon.',
  },
  [ROUTES.landing.support]: {
    title: 'Support Request',
    description: 'Submit support tickets directly from this page — available soon.',
  },
  [ROUTES.landing.roles]: {
    title: 'Roles',
    description: 'How Tendo works for owners, admins, and practitioners — details coming soon.',
  },
};

export const COMING_SOON_PATHS = Object.keys(COMING_SOON_PAGES);
