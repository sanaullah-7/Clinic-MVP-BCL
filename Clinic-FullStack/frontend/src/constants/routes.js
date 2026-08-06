const APP_NAME = "Tendo";
const ROUTES = {
  landing: {
    home: "/",
    features: "/features",
    pricing: "/pricing",
    security: "/security",
    about: "/about",
    blog: "/blog",
    careers: "/careers",
    terms: "/terms",
    privacy: "/privacy",
    sitemap: "/sitemap",
    contact: "/contact",
    support: "/support",
    developers: "/developers",
    telehealth: "/telehealth",
    integrationsPage: "/integrations",
    scheduling: "/scheduling",
    billingModule: "/billing-module",
    chartingModule: "/charting-module",
    onlineBooking: "/online-booking",
    communicationsModule: "/communications-module",
    reporting: "/reporting",
    disciplines: "/disciplines",
    roles: "/roles",
    disciplinePt: "/disciplines/physical-therapy",
    disciplineChiro: "/disciplines/chiropractic",
    disciplineRmt: "/disciplines/massage-therapy",
    disciplineMh: "/disciplines/mental-health",
    roleOwner: "/roles/clinic-owner",
    roleAdmin: "/roles/administrator",
    rolePractitioner: "/roles/practitioner"
  },
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password"
  },
  dashboard: {
    home: "/dashboard",
    designSystem: "/design-system",
    schedule: "/appointments",
    patients: "/patients",
    charting: "/charting",
    billing: "/billing",
    communications: "/communications",
    reports: "/reports",
    settings: "/settings",
    onboarding: "/onboarding"
  },
  portal: {
    home: "/portal",
    book: "/portal/book",
    appointments: "/portal/appointments",
    intake: "/portal/intake",
    invoices: "/portal/invoices",
    profile: "/portal/profile",
    login: "/portal/login"
  }
};
const USER_ROLES = {
  OWNER: "owner",
  ADMIN: "admin",
  PRACTITIONER: "practitioner",
  FRONT_DESK: "front_desk"
};
const APPOINTMENT_STATUS = {
  SCHEDULED: "scheduled",
  CONFIRMED: "confirmed",
  CHECKED_IN: "checked_in",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  NO_SHOW: "no_show"
};
export {
  APPOINTMENT_STATUS,
  APP_NAME,
  ROUTES,
  USER_ROLES
};
