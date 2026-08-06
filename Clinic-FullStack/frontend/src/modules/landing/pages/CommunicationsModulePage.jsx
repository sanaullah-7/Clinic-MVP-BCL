import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import {
  CommunicationsHeroVisual,
  SecurityComplianceBar,
  TextPatientsMockup,
  CampaignsMockup,
  InstantChatMockup,
  TeamMessagingMockup,
  MobileAppMessagingMockup,
  Megaphone,
  Users,
  User,
  Handshake,
} from '../components/CommunicationsMockups';

const CHECK_COLOR = '#00a3ad';

const PATIENT_FEATURES = [
  'Two-Way Text Messaging (SMS)',
  'Email & SMS Campaigns',
  'Secure Direct Messaging via Patient App',
];

const TEAM_FEATURES = ['Instant Chat', 'Team Messaging'];

const FEATURE_SECTIONS = [
  {
    title: 'Text patients right from Tendo',
    intro: 'A fast, efficient, and reliable way to relay important information and enhance patient satisfaction.',
    items: [
      'Free up phone lines and eliminate hours of phone tag',
      'Improve patient support by sharing links to helpful resources before or after appointments',
      'Increase compliance by reminding patients to adhere to the prescribed medication or treatment',
      'Link your online booking page to help increase your rebooking rate',
      'Get quick responses. Studies show that 90% of texts are opened and read within 3 minutes',
      'Boost engagement. Texts receive 8x the response rate of emails',
    ],
    visual: TextPatientsMockup,
  },
  {
    title: 'Send highly targeted email and text campaigns',
    intro: 'You can have your first campaign set up in minutes.',
    items: [
      'Browse our library of send-ready templates',
      'Send mass emails and texts to the right group of patients using powerful segmentation tools',
      'Create campaigns for holidays, birthdays, insurance reset reminders and more',
      'Increase rebookings with automated time-based reminders to book an appointment online',
      'Send patients automated requests to pay their outstanding balance online through a secure patient portal',
      'See real-time statistics on opens, clicks, and unsubscribes',
    ],
    visual: CampaignsMockup,
  },
  {
    title: 'Replace email with something faster — Instant Chat',
    intro: 'Chat 1-to-1 with your colleagues in the app.',
    items: [
      'Get instant notifications when you receive a new chat message',
      "See who's online at any time",
      'Send and receive chat messages from any device',
      'Easily contact staff at another clinic location to get answers, faster.',
    ],
    visual: InstantChatMockup,
  },
  {
    title: 'Keep correspondence organized and secure with Team Messaging',
    items: [
      'Team mail replaces email with something better organized and more secure',
      'Send, receive, and get notified all in-app',
      'Collaborate, compare notes, link files, and share patient records',
      'Display urgent messages for recipients as soon as they log in',
      'Tendo saves all correspondence so it\'s searchable later',
    ],
    visual: TeamMessagingMockup,
  },
  {
    title: "Securely message patients with Tendo's mobile app",
    intro:
      'Effortlessly deliver timely updates, address patient concerns, and enhance satisfaction — all while safeguarding sensitive health information with utmost privacy and confidentiality.',
    items: [],
    visual: MobileAppMessagingMockup,
  },
];

const PRICING_PLANS = [
  {
    icon: Megaphone,
    title: 'Tendo Comm Essential',
    description: 'Automate the basics — perfect for clinics sending reminders or simple campaigns.',
    price: '$40',
    period: '/month',
    note: '($0.025/msg)',
    includes: [
      '1600 patient messages (email or SMS)',
      'Unlimited team messages',
      'Unlimited direct messages via Patient App',
    ],
    features: [
      'Email & SMS Campaigns',
      'Two-Way Texting',
      'Team Messaging',
      'Team Instant Chat',
      'Patient App Direct Messaging',
    ],
  },
  {
    icon: Users,
    title: 'Tendo Comm Pro',
    description: 'Scale your communication & marketing — ideal for multi-practitioner clinics or higher message volumes.',
    price: '$80',
    period: '/month',
    note: '($0.02/msg)',
    badge: 'Save 20%',
    includes: [
      '4000 patient messages (email or SMS)',
      'Unlimited team messages',
      'Unlimited direct messages via Patient App',
    ],
    features: [
      'Email & SMS Campaigns',
      'Two-Way Texting',
      'Team Messaging',
      'Team Instant Chat',
      'Patient App Direct Messaging',
    ],
  },
  {
    icon: Handshake,
    title: 'Expert-Led Implementation',
    description: 'Launch with confidence.',
    price: '$150',
    period: '',
    note: '',
    optional: true,
    includes: [
      '60-minute expert-led training session',
      'Set up targeted automated campaigns',
      'Train your key staff',
      'Optimize workflows across teams/locations',
      'Ensure correct access & permissions',
    ],
    features: [],
  },
];

function CheckList({ intro, items }) {
  if (!items.length && !intro) return null;
  return (
    <div>
      {intro && <p className="mb-4 text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>}
      {items.length > 0 && (
        <ul className="space-y-3">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
              <span className="text-body leading-relaxed text-[#666666]">{text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FeatureRow({ title, intro, items, visual: Visual, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="order-2 flex items-center justify-center lg:order-1">
        <Visual />
      </div>
      <div className="order-1 lg:order-2">
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem]">
          {title}
        </h3>
        <CheckList intro={intro} items={items} />
      </div>
    </FadeIn>
  );
}

function AudienceCard({ icon: Icon, title, description, features }) {
  return (
    <div className="rounded-2xl border border-[#eee] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f5]">
        <Icon className="h-6 w-6 text-[#1a1a1a]" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 font-heading text-[1.125rem] font-bold text-[#1a1a1a] md:text-[1.25rem]">{title}</h3>
      <p className="mb-5 text-body leading-relaxed text-[#666666]">{description}</p>
      <ul className="space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
            <span className="text-body-sm text-[#666666] md:text-body">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ plan }) {
  const Icon = plan.icon;
  return (
    <div className="relative flex flex-col rounded-2xl border border-[#eee] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:p-8">
      {plan.optional && (
        <span className="absolute right-4 top-4 rounded-full bg-baby-blue px-3 py-1 text-[11px] font-semibold text-text-primary">
          Optional Enhancement
        </span>
      )}
      {plan.badge && (
        <span className="absolute right-4 top-4 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold text-primary">
          {plan.badge}
        </span>
      )}
      <Icon className="mb-4 h-8 w-8 text-[#1a1a1a]" strokeWidth={1.5} />
      <h3 className="mb-2 font-heading text-[1.125rem] font-bold text-[#1a1a1a]">{plan.title}</h3>
      <p className="mb-4 text-body-sm leading-relaxed text-[#666666]">{plan.description}</p>
      <div className="mb-4">
        <span className="font-heading text-[2rem] font-bold text-[#1a1a1a]">{plan.price}</span>
        {plan.period && <span className="text-body text-[#666]">{plan.period}</span>}
        {plan.note && <p className="text-caption text-[#999]">{plan.note}</p>}
      </div>
      <p className="mb-2 text-body-sm font-semibold text-[#1a1a1a]">Includes:</p>
      <ul className="mb-6 space-y-2">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
            <span className="text-body-sm text-[#666666]">{item}</span>
          </li>
        ))}
      </ul>
      <Link to={ROUTES.landing.contact} className="mt-auto">
        <Button variant="primary" fullWidth pill className="shadow-orange">
          Contact Sales
        </Button>
      </Link>
      {plan.features.length > 0 && (
        <ul className="mt-5 space-y-1.5 border-t border-[#eee] pt-5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-caption text-[#666666]">
              <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TestimonialBlock() {
  return (
    <FadeIn>
      <div className="grid items-center gap-8 rounded-2xl bg-[#f5f5f5] p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
        <div>
          <blockquote className="mb-6 text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
            &ldquo;Clients we haven&apos;t seen in a long time are reaching out and booking appointments.
            It&apos;s easy marketing. Tendo Comm will automatically send an email to clients that
            haven&apos;t been in for more than three months for example.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-baby-blue to-soft-pink text-sm font-bold text-text-primary">
              KH
            </div>
            <div>
              <p className="text-body-sm font-semibold text-[#1a1a1a]">Kristen Hudon</p>
              <p className="text-caption text-[#666]">Body Waves Massage Therapy (La Salle, MB)</p>
            </div>
          </div>
        </div>
        <div className="flex min-h-[200px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-soft-pink/40 to-baby-blue/50">
          <div className="text-center p-6">
            <User className="mx-auto mb-2 h-12 w-12 text-baby-blue-700/40" strokeWidth={1} />
            <p className="text-body-sm font-medium text-[#666]">Patient treatment session</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function CommunicationsCTA() {
  return (
    <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
      <FadeIn>
        <h2 className="mx-auto mb-4 max-w-[640px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
          There&apos;s power in a simple message
        </h2>
        <p className="mx-auto mb-8 max-w-[560px] text-body-lg text-white/95">
          Keep information flowing, people connected, and build a stronger community.
        </p>
        <Link
          to={ROUTES.auth.register}
          className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-primary shadow-md transition-colors hover:bg-white/95"
        >
          See a Demo
        </Link>
      </FadeIn>
    </SectionShell>
  );
}

export function CommunicationsModulePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                  Communications
                </p>
                <span className="rounded-full bg-[#00a3ad] px-3 py-1 text-[11px] font-semibold text-white">
                  Premium Feature
                </span>
              </div>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Streamline clinic communication with in-app text, email, &amp; chat
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Tendo Comm delivers seamless team &amp; patient messaging—unmatched and exclusively in
                Tendo.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to={ROUTES.auth.register}>
                  <Button variant="primary" size="lg" pill className="min-w-[160px] shadow-orange">
                    Book a Demo
                  </Button>
                </Link>
                <Link
                  to={ROUTES.landing.pricing}
                  className="inline-flex items-center gap-2 text-body font-semibold text-[#1a1a1a] hover:text-primary"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CommunicationsHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Security bar */}
        <SectionShell className="bg-white pb-14 md:pb-16">
          <FadeIn>
            <SecurityComplianceBar />
          </FadeIn>
        </SectionShell>

        {/* Value prop + audience cards */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20">
          <SectionHeading
            title="Timely, meaningful communication for better results."
            subtitle="Tendo Comm, an add-on to your Tendo subscription, delivers unrivalled community communication tools with exceptional security, ease, and efficiency, all within your EMR."
            className="mb-10 md:mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <FadeIn>
              <AudienceCard
                icon={User}
                title="Tendo Comm for Patients"
                description="Send patients the right message at the right time through the right channels."
                features={PATIENT_FEATURES}
              />
            </FadeIn>
            <FadeIn delay={0.06}>
              <AudienceCard
                icon={Users}
                title="Tendo Comm for Teams"
                description="Keep your staff working together and involved in key discussions no matter where they're located."
                features={TEAM_FEATURES}
              />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Featured in */}
        <SectionShell className="bg-[#fafafa] py-10 md:py-12">
          <FadeIn className="text-center">
            <p className="mb-4 text-body-sm font-medium text-[#666666]">Featured in:</p>
            <p className="font-heading text-[1.25rem] font-bold text-[#c8102e] md:text-[1.5rem]">
              Canadian Healthcare Technology
            </p>
          </FadeIn>
        </SectionShell>

        {/* Feature sections */}
        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          {FEATURE_SECTIONS.map((section, i) => (
            <FeatureRow key={section.title} {...section} delay={i * 0.04} />
          ))}
        </SectionShell>

        {/* Testimonial */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <TestimonialBlock />
        </SectionShell>

        {/* Pricing */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <SectionHeading
            title="Choose the plan that's right for your practice"
            subtitle="Add Tendo Comm to your Tendo subscription. Pay by month, and cancel at any time."
            className="mb-10 md:mb-14"
          />
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <FadeIn key={plan.title} delay={i * 0.05}>
                <PricingCard plan={plan} />
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <CommunicationsCTA />
      </main>

      <MarketingFooter />
    </div>
  );
}
