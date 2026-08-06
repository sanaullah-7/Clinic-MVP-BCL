import { ROUTES } from '@/constants/routes';

export const DISCIPLINES_HERO = {
  title: 'Disciplines',
  subtitle:
    'Clinic software built for growth-minded organizations, multidisciplinary teams, and multi-location clinics.',
};

export const DISCIPLINE_CARDS = [
  {
    id: 'pt',
    title: 'Physical Therapists',
    description:
      'Empower your physical therapy practice with flexible tools to streamline operations, enhance care, and grow seamlessly.',
    to: ROUTES.landing.disciplinePt,
    live: true,
  },
  {
    id: 'chiro',
    title: 'Chiropractors',
    description:
      'Scale your business faster, create real efficiencies, and make more time for patients with Tendo’s all-in-one chiropractic software.',
    to: ROUTES.landing.disciplineChiro,
    live: true,
  },
  {
    id: 'rmt',
    title: 'Massage Therapists',
    description:
      'Explore Tendo’s complete suite of clinic management tools designed to grow your massage therapy practice.',
    to: ROUTES.landing.disciplineRmt,
    live: true,
  },
  {
    id: 'mh',
    title: 'Mental Health Counselors',
    description:
      'Tendo delivers all the tools, privacy, and security you need to run your mental health practice with confidence.',
    to: ROUTES.landing.disciplineMh,
    live: true,
  },
  {
    id: 'np',
    title: 'Nurse Practitioners',
    description:
      'From booking to notes to billing, Tendo delivers the tools to simplify operations and fuel growth—all in one platform.',
    live: false,
  },
  {
    id: 'psych',
    title: 'Clinical Psychologists',
    description:
      'Run your practice confidently with secure, efficient clinic software designed to support mental health services.',
    live: false,
  },
  {
    id: 'speech',
    title: 'Speech Therapists',
    description:
      'Enhance patient experience with scheduling, billing, and patient management tools designed to keep your practice running smoothly.',
    live: false,
  },
  {
    id: 'nutrition',
    title: 'Nutritionists & Dieticians',
    description:
      'Enjoy seamless appointment scheduling, billing, and data management from our all-in-one clinic software.',
    live: false,
  },
  {
    id: 'naturopath',
    title: 'Naturopaths',
    description:
      'Deliver holistic care with ease using flexible clinic software to manage scheduling, patient files, and billing.',
    live: false,
  },
  {
    id: 'ot',
    title: 'Occupational Therapists',
    description:
      'Equip your practice with Tendo’s essential tools to simplify case management and optimize daily workflows.',
    live: false,
  },
  {
    id: 'acupuncture',
    title: 'Acupuncturists',
    description:
      'Manage appointments, records, and billing seamlessly with intuitive tools tailored for clinic efficiency.',
    live: false,
  },
  {
    id: 'osteopath',
    title: 'Osteopaths',
    description:
      'Run and grow your practice with clinic software that keeps every aspect of clinic management at your fingertips.',
    live: false,
  },
  {
    id: 'physician',
    title: 'Physicians',
    description:
      'Tendo’s complete clinic management software helps you stay organized and patient-focused, with tools for scheduling, billing, and more.',
    live: false,
  },
  {
    id: 'medspa',
    title: 'Medical Spas',
    description:
      'Elevate patient experience and simplify operations with all-in-one clinic software for smooth management.',
    live: false,
  },
];
