export const CHECK_COLOR = '#00a3ad';

export const PRICING_PLANS = [
  {
    id: 'launch',
    name: 'Launch',
    description: 'Get organized and run your clinic smoothly with essentials that just work.',
    annualPrice: 49,
    monthlyPrice: 55,
    licenseFee: 29,
    licenseFeeLabel: '+ $29 per additional license',
    highlights: ['Clinic-Wide AI Charting'],
    cta: 'Book a Demo',
    ctaVariant: 'demo',
    featureGroups: [
      {
        title: 'Unlimited Usage',
        items: ['Appointments', 'Staff Profiles', '1:1 HD Telehealth', 'Data Storage'],
      },
      { title: 'Scheduling', items: ['Calendar & waitlist management'] },
      {
        title: 'Flexible Clinical Tools',
        items: ['Intake forms & templates', 'SOAP charts & body map'],
      },
      { title: 'Admin & Operations', items: ['Patient records & billing basics'] },
      { title: 'Unlimited Support', items: ['Email, chat & help centre'] },
      { title: 'Integrations', items: ['Calendar sync & open API'] },
    ],
    addOns: ['HCAI & Provincial Health Billing', 'Tendo Comm Messaging', 'Group Telehealth'],
  },
  {
    id: 'grow',
    name: 'Grow',
    description:
      'Stay flexible as you take on more patients, staff, and complexity. Build momentum as your clinic expands.',
    annualPrice: 89,
    monthlyPrice: 99,
    licenseFee: 29,
    licenseFeeLabel: '+ $29 per additional license',
    highlights: ['Clinic-Wide AI Charting', 'Clinic-Wide Insurance Billing'],
    cta: 'Book a Demo',
    ctaVariant: 'demo',
    popular: true,
    includesPrevious: 'Launch',
    featureGroups: [
      {
        title: 'Patient Access',
        items: ['Patient Portal', 'Online Booking', 'Mobile App'],
      },
      {
        title: 'Financial & Growth Tools',
        items: ['Insurance billing', 'Claim.MD & TELUS eClaims'],
      },
      {
        title: 'Advanced Clinical Tools',
        items: ['Custom forms & treatment plans'],
      },
      { title: 'Multi-Location Management', items: ['Shared schedules & reporting'] },
    ],
    addOns: ['HCAI & Provincial Health Billing', 'Tendo Comm Messaging', 'Group Telehealth'],
  },
  {
    id: 'scale',
    name: 'Scale',
    description:
      'Run a world-class clinic with smarter efficiency, automation, and insights on every level.',
    annualPrice: 119,
    monthlyPrice: 132,
    licenseFee: 34,
    licenseFeeLabel: '+ $34 per additional license',
    highlights: ['Clinic-Wide AI Charting', 'Clinic-Wide Insurance Billing'],
    cta: 'Get Quote',
    ctaVariant: 'quote',
    includesPrevious: 'Grow',
    featureGroups: [
      { title: 'Advanced Scheduling', items: ['Complex rules & multi-provider views'] },
      {
        title: 'Patient Retention & Engagement',
        items: ['Follow-up management', 'Subscriptions', 'Gift Cards'],
      },
      { title: 'Marketing Tools', items: ['Google Tag Manager integration'] },
      {
        title: 'Guided Setup & Workflow Implementation',
        items: ['Dedicated onboarding specialist'],
      },
    ],
    addOns: ['HCAI & Provincial Health Billing', 'Tendo Comm Messaging', 'Group Telehealth'],
  },
];

export const PRICING_TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Tendo has transformed how we run our clinic. The pricing scales perfectly as we add practitioners — no surprises on our bill.',
    name: 'Dr. Sarah Chen',
    clinic: 'Peak Performance Physio (Toronto, ON)',
    rating: 4.7,
  },
  {
    id: 2,
    quote:
      'Clients we haven\'t seen in a long time are reaching out and booking appointments. Tendo Comm automatically sends emails to clients who haven\'t been in for more than three months.',
    name: 'Kristen Hudon',
    clinic: 'Body Waves Massage Therapy (La Salle, MB)',
    rating: 4.7,
  },
];

export const PRICING_ADDONS = [
  {
    id: 'tendo-comm',
    title: 'Tendo Comm',
    price: 'From $40',
    period: '/month',
    highlighted: true,
    icon: 'megaphone',
    sections: [
      {
        title: 'Patient Messaging',
        items: ['Automated SMS & email reminders', 'Campaign templates', 'Two-way messaging'],
      },
      {
        title: 'Team Messaging',
        items: ['Internal staff chat', 'Secure file sharing'],
      },
    ],
    link: { label: 'Learn more about Tendo Comm', to: 'communications' },
  },
  {
    id: 'direct-billing',
    title: 'Direct Billing Integrations',
    price: '$99',
    period: '/month',
    icon: 'servers',
    sections: [
      {
        title: 'Direct Billing In-App',
        items: ['HCAI', 'OHIP', 'Manitoba Health'],
      },
    ],
    footnote: 'TELUS Health eClaims available on Grow and Scale plans.',
    link: { label: 'Learn more about Billing', to: 'billing' },
  },
  {
    id: 'group-telehealth',
    title: 'Group Telehealth',
    price: '$20',
    period: '/month',
    icon: 'telehealth',
    sections: [
      {
        items: [
          'HIPAA, PIPEDA and PHIPA-compliant',
          'Up to 25 participants per session',
          'HD video & screen sharing',
          'No third-party apps required',
        ],
      },
    ],
    link: { label: 'Learn more about Telehealth', to: 'telehealth' },
  },
];

export const COMPARE_PLANS_ROWS = [
  { feature: 'Clinic-Wide AI Charting', launch: true, grow: true, scale: true },
  { feature: 'Online Booking & Patient Portal', launch: false, grow: true, scale: true },
  { feature: 'Insurance Billing', launch: false, grow: true, scale: true },
  { feature: 'Multi-Location Management', launch: false, grow: true, scale: true },
  { feature: 'Marketing Tools', launch: false, grow: false, scale: true },
  { feature: 'Guided Workflow Implementation', launch: false, grow: false, scale: true },
  { feature: 'Subscriptions & Gift Cards', launch: false, grow: false, scale: true },
];

export const ONBOARDING_SERVICES = [
  {
    title: 'Free Data Import Tools',
    description:
      'Prepare your patient, appointment, and billing data for import with our guided CSV wizard and validation tools.',
    price: 'Free',
  },
  {
    title: 'Premium Data Import Services',
    description:
      'Our team helps extract, format, and migrate your data from your previous EMR or spreadsheet system.',
    price: 'Starts at $250 /data set',
  },
  {
    title: '1:1 Training',
    description:
      'Personalized training sessions tailored to your clinic workflows, roles, and specialty.',
    price: '$150 /1-hour session',
  },
  {
    title: 'Chat, Phone & Email Support',
    description: 'Reach us for help 7 days a week.',
    price: null,
  },
  {
    title: 'Help Documentation',
    description: 'For immediate answers, browse our library of help articles and how-to videos.',
    price: null,
  },
  {
    title: 'Weekly Product Webinars',
    description: 'Join free weekly webinars led by Tendo product experts.',
    price: null,
  },
];

export const PRICING_FAQ_ITEMS = [
  {
    id: 'ai-charting',
    question: "What's included in AI Charting?",
    answer:
      'All Tendo plans include clinic-wide AI Charting for every practitioner. AI assists with SOAP note drafting, template suggestions, and documentation shortcuts — included at no extra cost.',
  },
  {
    id: 'switch-plans',
    question: 'Can I switch plans as my clinic grows?',
    answer:
      'Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle, and our team can help you choose the right plan as your needs evolve.',
  },
  {
    id: 'per-practitioner',
    question: 'Do I have to pay per practitioner?',
    answer:
      'Each location includes one license. You only pay for additional concurrent user licenses — not every staff member who has an account. Pay for peak simultaneous usage, not headcount.',
  },
  {
    id: 'currency',
    question: 'What currency do you bill in?',
    answer:
      'Tendo bills in Canadian dollars (CAD) for Canadian clinics. US and international pricing is available — contact sales for details.',
  },
  {
    id: 'onboarding',
    question: 'Is there training or onboarding included?',
    answer:
      'Every plan includes unlimited support, help documentation, and weekly webinars. Premium data import and 1:1 training sessions are available as add-on services.',
  },
  {
    id: 'plan-difference',
    question: "What's the difference between the Launch, Grow, and Scale pricing plans?",
    answer:
      'Launch covers core scheduling, charting, and admin essentials. Grow adds patient portal, online booking, insurance billing, and multi-location tools. Scale adds advanced scheduling, marketing, retention features, and guided workflow implementation.',
  },
];

export const PROMO_CARDS = [
  {
    id: 'education',
    title: 'Teach with real-world EMR software',
    description:
      'Support students and educators with free Tendo software for classroom and clinical training environments.',
    image: 'education',
    linkLabel: 'Contact Us',
  },
  {
    id: 'startup',
    title: 'Start-ups start free',
    description:
      'New clinic owners and recent grads can get Tendo Lite for free. Build your practice without software costs holding you back.',
    image: 'startup',
    linkLabel: 'Contact Us',
  },
];

export function calculateMonthlyRate(planId, locations, licenses, isAnnual) {
  const plan = PRICING_PLANS.find((p) => p.id === planId);
  if (!plan) return 0;

  const rate = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const locs = Math.max(1, Number(locations) || 1);
  const lic = Math.max(locs, Number(licenses) || locs);
  const extraLicenses = Math.max(0, lic - locs);

  return rate * locs + extraLicenses * plan.licenseFee;
}
