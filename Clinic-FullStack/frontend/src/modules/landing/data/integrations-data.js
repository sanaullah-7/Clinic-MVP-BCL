export const INTEGRATION_CATEGORIES = [
  { id: 'billing', label: 'Billing & Payments' },
  { id: 'communication', label: 'Communication & Treatment' },
  { id: 'administration', label: 'Administration' },
  { id: 'marketing', label: 'Marketing' },
];

export const INTEGRATIONS_BY_CATEGORY = {
  billing: {
    title: 'Billing',
    items: [
      {
        name: 'Telus Health eClaims',
        description: 'Submit electronic claims directly to insurers through seamless eClaims integration.',
        color: '#4a90a4',
      },
      {
        name: 'Claim.MD',
        description: 'Streamline claim submission and tracking with real-time eligibility and status updates.',
        color: '#1a5fb4',
      },
      {
        name: 'HCAI',
        description: 'Automate auto insurance billing and compliance for Ontario clinics.',
        color: '#2d4a6f',
      },
      {
        name: 'OHIP',
        description: 'Direct billing integration for Ontario Health Insurance Plan claims.',
        color: '#0066cc',
      },
      {
        name: 'Manitoba Health',
        description: 'Submit and manage Manitoba health claims directly from Tendo.',
        color: '#0057a8',
      },
      {
        name: 'Alberta Health',
        description: 'Integrated Alberta health billing for streamlined provincial claims.',
        color: '#0072ce',
      },
      {
        name: 'Teleplan',
        description: 'British Columbia medical billing integration for faster reimbursements.',
        color: '#003366',
      },
      {
        name: 'eHealth Saskatchewan',
        description: 'Connect with Saskatchewan health billing systems from your EMR.',
        color: '#006341',
      },
      {
        name: 'Stripe',
        description: 'Accept credit card payments online with PCI-compliant secure processing.',
        color: '#635bff',
      },
      {
        name: 'TD Merchant Services',
        description: 'Process in-clinic and online payments through TD payment gateway.',
        color: '#34a853',
      },
    ],
  },
  communication: {
    title: 'Communication & Treatment',
    items: [
      {
        name: 'Wibbi',
        description: 'Deliver home exercise programs to patients through the patient portal.',
        color: '#00a3ad',
      },
      {
        name: 'Physitrack',
        description: 'Push personalized exercise plans and track patient adherence in-app.',
        color: '#5b2d8e',
      },
      {
        name: 'Aquity Solutions',
        description: 'Medical transcription services integrated directly into your charting workflow.',
        color: '#1e3a5f',
      },
      {
        name: 'Doxy.me',
        description: 'Launch secure HD telehealth sessions directly from the patient portal.',
        color: '#ffc107',
      },
      {
        name: 'Careplan',
        description: 'Create and share treatment plans with patients for better outcomes.',
        color: '#28c840',
      },
      {
        name: 'Talk to MEDI',
        description: 'AI-powered clinical documentation assistance for faster charting.',
        color: '#f7803c',
        comingSoon: true,
      },
    ],
  },
  administration: {
    title: 'Administration',
    items: [
      {
        name: 'Google Calendar',
        description: 'Sync appointments two-way with Google Calendar for seamless scheduling.',
        color: '#4285f4',
      },
      {
        name: 'Outlook Calendar',
        description: 'Keep your Outlook calendar in sync with your clinic schedule.',
        color: '#0078d4',
      },
      {
        name: 'Apple Calendar',
        description: 'Sync with iCal and Apple Calendar using standard calendar feeds.',
        color: '#333333',
      },
      {
        name: 'SRFax',
        description: 'Send and receive faxes directly from patient charts — no extra apps needed.',
        color: '#e74c3c',
      },
      {
        name: 'Xero',
        description: 'Export financial data to Xero for simplified accounting and bookkeeping.',
        color: '#13b5ea',
      },
    ],
  },
  marketing: {
    title: 'Marketing',
    items: [
      {
        name: 'Google Tag Manager',
        description: 'Track online booking conversions and marketing funnel performance.',
        color: '#4285f4',
      },
      {
        name: 'Clinic Accelerator',
        description: 'Benchmark KPIs and accelerate clinic growth with integrated analytics.',
        color: '#1e3a5f',
      },
      {
        name: 'Medimap',
        description: 'List your clinic on Medimap to drive new patient bookings online.',
        color: '#00a3ad',
      },
      {
        name: 'DemandHub',
        description: 'Manage online reputation and patient reviews from one dashboard.',
        color: '#5b2d8e',
      },
    ],
  },
};

/** Partner logos shown in hero hub */
export const HERO_PARTNER_LOGOS = [
  { label: 'Stripe', color: '#635bff' },
  { label: 'OHIP', color: '#0066cc' },
  { label: 'GTM', color: '#4285f4' },
  { label: 'TD', color: '#34a853' },
  { label: 'Physitrack', color: '#5b2d8e' },
  { label: 'Moneris', color: '#003366' },
  { label: 'Claim.MD', color: '#1a5fb4' },
  { label: 'Doxy', color: '#ffc107' },
];
