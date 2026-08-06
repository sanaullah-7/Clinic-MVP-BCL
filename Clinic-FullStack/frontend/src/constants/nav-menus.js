import { ROUTES } from './routes';

/** Shared nav + footer menu items */
export const CLINIC_SOFTWARE_ITEMS = [
  { label: 'Scheduling', to: ROUTES.landing.scheduling },
  { label: 'Billing', to: ROUTES.landing.billingModule },
  { label: 'Charting & EMR', to: ROUTES.landing.chartingModule },
  { label: 'Online Booking', to: ROUTES.landing.onlineBooking },
  { label: 'Communications', to: ROUTES.landing.communicationsModule, starred: true },
  { label: 'Reporting & Analytics', to: ROUTES.landing.reporting },
  { label: 'Telehealth', to: ROUTES.landing.telehealth },
  { label: 'Integrations', to: ROUTES.landing.integrationsPage },
  { label: 'Developers & API', to: ROUTES.landing.developers },
];

export const DISCIPLINES_ITEMS = [
  { label: 'Physical Therapy', to: ROUTES.landing.disciplinePt },
  { label: 'Chiropractic', to: ROUTES.landing.disciplineChiro },
  { label: 'Massage Therapy', to: ROUTES.landing.disciplineRmt },
  { label: 'Mental Health', to: ROUTES.landing.disciplineMh },
  { label: 'View All Disciplines', to: ROUTES.landing.disciplines },
];

export const ROLES_ITEMS = [
  { label: 'Clinic Owner', to: ROUTES.landing.roleOwner },
  { label: 'Administrator', to: ROUTES.landing.roleAdmin },
  { label: 'Practitioner', to: ROUTES.landing.rolePractitioner },
];

export const NAV_ITEMS = [
  { id: 'clinic-software', label: 'Clinic Software', items: CLINIC_SOFTWARE_ITEMS },
  { id: 'pricing', label: 'Pricing', to: ROUTES.landing.pricing },
  { id: 'disciplines', label: 'Disciplines', items: DISCIPLINES_ITEMS },
  { id: 'roles', label: 'Roles', items: ROLES_ITEMS },
];
