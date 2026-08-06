import { ROUTES } from '@/constants/routes';

export const AD_HERO = {
  eyebrow: 'Administrator',
  title: 'Administrators, you do a million things at once. Now your software can too.',
  subtitle:
    'Our clever tools for booking, billing, patient engagement, EMR, and reporting make your workday a whole lot easier — tools that anyone can use, no matter their technical experience.',
};

export const AD_PATIENT_LOOKUP = {
  title: 'Find and edit patient details — fast',
  subtitle:
    'Meet the needs of your patients and colleagues without losing time. Our customizable patient look-up pane makes sure you’re always a click away from finding the information you need.',
};

export const AD_FEATURE_ROWS = [
  {
    id: 'scheduling',
    title: 'See everything at a glance',
    intro:
      'Get a bird’s eye view of all your appointments for the day or week and accomplish everyday tasks right from the schedule. With a couple of clicks you can book appointments, invoice, and message patients. Imagine being able to check a patient’s insurance coverage and trigger an appointment reminder in 3 clicks. You can with Tendo.',
    link: { label: 'Explore Scheduling', to: ROUTES.landing.scheduling },
    bg: 'white',
  },
  {
    id: 'billing',
    title: 'Go from scheduling to split-billing in seconds',
    intro:
      'Every step of your billing workflow is easier (and paperless) with our quick check-out process, split-invoicing, batch billing feature, customizable accounting reports, and best of all, seamless integrations to HCAI, TELUS Health eClaims and more.',
    link: { label: 'Explore Billing', to: ROUTES.landing.billingModule },
    bg: 'gray',
  },
  {
    id: 'portal',
    title: 'Leave the patient reminders and forms to us',
    intro:
      'Automated email and text message appointment reminders are just the start. Everything from intake forms, consent forms, bookings, cancellations, program registrations and payments can be done online, 24/7, with our patient portal.',
    bg: 'white',
  },
  {
    id: 'communications',
    title: 'Replace your call list with a single email or text campaign',
    intro:
      'Rather than reaching out to patients one by one, send a single personalized text or email message with Tendo Communications. Think patient follow-ups, welcome emails, AR reminders, Google reviews, and one-time messages for big announcements. It’s smart, easy, and your first campaign can be set up in minutes using our pre-made templates.',
    link: { label: 'Explore Communications', to: ROUTES.landing.communicationsModule },
    bg: 'gray',
  },
  {
    id: 'reports',
    title: 'Download easy-to-read reports',
    intro:
      'Tendo keeps track of everything happening in your clinic and compiles crystal clear reports so you can balance your books, stay organized, and make it home for dinner.',
    bg: 'white',
  },
];

export const AD_TESTIMONIALS = [
  {
    quote: 'I love how beautifully the program is laid out and how simple it is to use.',
    name: 'Celina W.',
    role: 'Winkler Massage Therapy (Winkler, MB)',
  },
  {
    quote:
      'I must say I love Tendo. It is a fantastic program and I’m so glad to have switched over to it. The patient portal is exceptional!',
    name: 'Karen Proctor',
    role: 'Back on Track Chiropractic and Massage Clinic (Etobicoke, ON)',
  },
];
