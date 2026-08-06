import { useState } from 'react';
import { Check, ChevronDown, CreditCard, Monitor, PersonStanding } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import { CTASection } from '../components/CTASection';
import {
  OnlineBookingHeroVisual,
  Step1CustomizeMockup,
  Step2BookMockup,
  Step3WelcomeMockup,
  Step4ConsentMockup,
  Step5RebookMockup,
  EngagementMockup,
  PortalDashboardMockup,
} from '../components/OnlineBookingMockups';
import { cn } from '@/lib/cn';

const CHECK_COLOR = '#00a3ad';
const ACCENT_LINE = '#00a3ad';

const BOOKING_STEPS = [
  {
    number: 1,
    title: 'Customize your online booking page',
    intro: 'We respect how you do business.',
    items: [
      'Add your logo and design elements',
      'Use our flexible design tools and custom settings to put your brand colors, messaging, and workflows into action for a seamless transition through your marketing funnel.',
    ],
    visual: Step1CustomizeMockup,
  },
  {
    number: 2,
    title: 'Book appointments around the clock',
    items: [
      'Sign up new patients and accept appointments or appointment requests while you sleep',
      'Your clinic software updates instantly so you can manage appointments in real time with no risk of double booking',
    ],
    visual: Step2BookMockup,
  },
  {
    number: 3,
    title: 'Email your patient welcome packet',
    intro: 'Use the patient welcome packet to:',
    items: [
      'Send a welcome email with a custom message and let patients know what to expect during their visit',
      'Assign intake forms based on the service that was booked',
      'Let patients complete their intake forms and profiles online before their appointment',
    ],
    visual: Step3WelcomeMockup,
  },
  {
    number: 4,
    title: 'Collect consent forms and pre-payments',
    items: [
      'Collect digital signatures for consent forms before the visit',
      'Reduce no-shows by collecting pre-payments or deposits at the time of booking',
    ],
    visual: Step4ConsentMockup,
  },
  {
    number: 5,
    title: 'Make rebooking fast and easy',
    items: [
      'Use the Book Again feature so returning patients can rebook in seconds',
      'Drive engagement with automated mobile app notifications and reminders',
    ],
    visual: Step5RebookMockup,
  },
];

const ENGAGEMENT_ITEMS = [
  {
    id: 'invoices',
    title: 'Share invoices and take payments',
    description:
      'At tax time, or anytime, let patients search, view, download, and pay all invoices securely at their convenience from the Portal.',
  },
  {
    id: 'gift',
    title: 'Sell gift cards and offer special programs',
    description:
      'Offer gift cards and promotional packages directly through the patient portal to boost revenue and patient loyalty.',
  },
  {
    id: 'exercise',
    title: 'Share home exercise plans and files',
    description:
      'Push treatment plans, exercise programs, and educational files to patients for on-demand access anytime.',
  },
];

const INTEGRATIONS = [
  {
    icon: 'G',
    title: 'Google Tag Manager',
    description:
      'Gather insights on how well your online booking page converts website visits into booked appointments. Simply connect your Google Tag Manager account to Tendo to get started.',
  },
  {
    icon: CreditCard,
    title: 'Secure Online Payments',
    description:
      'Store cardholder information and accept payments from Apple Pay, Google Pay, and all major debit and credit cards using our PCI certified payment gateways including Stripe, Moneris, and TD Merchant Services.',
  },
  {
    icon: Monitor,
    title: 'Telehealth',
    description:
      'Expand the reach of your services. With our seamless integrations to Doxy.me you can have a secure telehealth call set up in just a few clicks. Patients can launch the call directly from the Portal using any device.',
  },
  {
    icon: PersonStanding,
    title: 'Home Exercise Plans',
    description:
      'Push home exercise programs to the Portal for patients to access on-demand using our treatment integrations to Physitrack and Wize.',
  },
];

function CheckList({ intro, items }) {
  return (
    <div>
      {intro && <p className="mb-4 text-body leading-relaxed text-[#666666]">{intro}</p>}
      <ul className="space-y-3">
        {items.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
            <span className="text-body leading-relaxed text-[#666666]">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookingStepRow({ step, delay }) {
  const Visual = step.visual;
  return (
    <FadeIn delay={delay} className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="order-2 flex items-center justify-center lg:order-1">
        <Visual />
      </div>
      <div className="order-1 lg:order-2">
        <div className="mb-4 flex items-start gap-4">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#e8e8e8] text-sm font-bold text-[#666]">
            {step.number}
          </span>
          <h3 className="pt-1 font-heading text-[1.25rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.4rem]">
            {step.title}
          </h3>
        </div>
        <div className="lg:pl-[52px]">
          <CheckList intro={step.intro} items={step.items} />
        </div>
      </div>
    </FadeIn>
  );
}

function EngagementAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e8e8e8]">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-5 text-left md:py-6"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="min-w-0 flex-1">
          <div
            className={cn('mb-0 h-0.5 w-10 transition-all duration-300', isOpen ? 'opacity-100' : 'opacity-0')}
            style={{ backgroundColor: ACCENT_LINE }}
          />
          <span className="font-heading text-[1.05rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.125rem]">
            {item.title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'mt-1 h-5 w-5 flex-shrink-0 text-[#1a1a1a] transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
          strokeWidth={2}
        />
      </button>
      <div className={cn('grid transition-[grid-template-rows] duration-400 ease-in-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <div className={cn('pb-6 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0')}>
            <p className="text-body leading-relaxed text-[#666666]">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationCard({ item }) {
  const Icon = typeof item.icon === 'string' ? null : item.icon;
  return (
    <div className="text-center lg:text-left">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] text-white lg:mx-0">
        {Icon ? (
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        ) : (
          <span className="text-lg font-bold">{item.icon}</span>
        )}
      </div>
      <h3 className="mb-2 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">{item.title}</h3>
      <p className="text-body-sm leading-relaxed text-[#666666] md:text-body">{item.description}</p>
    </div>
  );
}

export function OnlineBookingPage() {
  const [openEngagementId, setOpenEngagementId] = useState(ENGAGEMENT_ITEMS[0].id);

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Online Booking &amp; Patient Portal
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Make online booking and beyond, easy.
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                From intake forms to invoices, our mobile-friendly Portal is there for your patients at
                every step of their journey.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to={ROUTES.auth.register}>
                  <Button variant="primary" size="lg" pill className="min-w-[160px] shadow-orange">
                    Book a Demo
                  </Button>
                </Link>
                <Link
                  to={ROUTES.landing.contact}
                  className="inline-flex items-center gap-2 text-body font-semibold text-[#1a1a1a] hover:text-primary"
                >
                  Contact Us
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1a1a1a]">
                    →
                  </span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <OnlineBookingHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Steps intro */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <SectionHeading title="A great patient experience starts here" className="mb-0" />
        </SectionShell>

        {/* Numbered steps with dashed connector */}
        <SectionShell className="relative bg-white py-14 md:py-20 lg:py-24">
          <div className="absolute left-8 top-24 bottom-24 hidden w-px border-l-2 border-dashed border-[#00a3ad]/25 lg:left-[calc(25%-8px)] lg:block" />
          <div className="space-y-20 md:space-y-28">
            {BOOKING_STEPS.map((step, i) => (
              <BookingStepRow key={step.number} step={step} delay={i * 0.04} />
            ))}
          </div>
        </SectionShell>

        {/* Engagement accordion */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <SectionHeading
            title="All steps lead to happier, more engaged patients"
            subtitle="By making patient resources more accessible, we've made it easier than ever for patients to stay engaged throughout their treatment plan."
            className="mb-10 md:mb-14"
          />
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <FadeIn>
              <EngagementMockup />
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="lg:pt-4">
                {ENGAGEMENT_ITEMS.map((item) => (
                  <EngagementAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openEngagementId === item.id}
                    onToggle={() =>
                      setOpenEngagementId((current) => (current === item.id ? null : item.id))
                    }
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </SectionShell>

        {/* Portal dashboard */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <SectionHeading
            title="Make the most of every interaction"
            subtitle="Tendo makes it easy to stay connected to patients with automated mobile app notifications and real-time updates to the patient's dashboard in the Portal."
            className="mb-10 md:mb-14"
          />
          <FadeIn>
            <PortalDashboardMockup />
          </FadeIn>
        </SectionShell>

        {/* Integrations grid */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <SectionHeading
            title="Integrations that help you scale"
            subtitle="Add features and apps to your Portal as your business grows."
            className="mb-10 md:mb-14"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {INTEGRATIONS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <IntegrationCard item={item} />
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <CTASection />
      </main>

      <MarketingFooter />
    </div>
  );
}
