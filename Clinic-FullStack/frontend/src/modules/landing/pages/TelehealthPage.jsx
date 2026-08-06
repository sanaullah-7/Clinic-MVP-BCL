import { Link } from 'react-router-dom';
import { ArrowRight, Check, Infinity } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import {
  TelehealthHeroVisual,
  TelehealthSecurityMockup,
  TelehealthNoAppsMockup,
  TelehealthExperienceMockup,
  TelehealthLifestyleVisual,
  UserCheck,
  Users,
} from '../components/TelehealthMockups';

const CHECK_COLOR = '#00a3ad';

const FEATURE_SECTIONS = [
  {
    title: 'Enterprise-grade telehealth security',
    intro:
      "We're committed to protecting your data on all levels and at all times. Our software uses Advanced Encryption Standard (AES) encryption and is fully compliant with HIPAA, PIPEDA, and PHIPA. Additionally:",
    items: [
      'No sessions are recorded or stored locally',
      'Built-in access controls for the meeting host help you maximize the security and safety of all your meetings',
    ],
    visual: TelehealthSecurityMockup,
  },
  {
    title: 'No third-party apps needed',
    intro:
      'No downloads, no plugins, nothing to install. Run your sessions on all major desktop and mobile browsers from the comfort of Tendo — having to flip between software is a thing of the past.',
    items: [],
    visual: TelehealthNoAppsMockup,
  },
  {
    title: 'Deliver a quality patient experience',
    intro:
      "HD-quality video, microphone and screen share participation — you'll be able to connect with patients like you would in person and create a comfortable setting for virtual sessions.",
    items: [],
    visual: TelehealthExperienceMockup,
  },
];

const PIVOT_FEATURES = [
  {
    icon: UserCheck,
    title: 'Simple to Use',
    description: 'Accessible to clinicians and clients alike—all it takes is one click to join a secure session.',
  },
  {
    icon: Users,
    title: 'Group Sessions',
    badge: 'New',
    description:
      'Facilitate group telehealth sessions of up to 25 participants and treat related patients like couples or families virtually.',
  },
  {
    icon: Infinity,
    title: 'Unlimited Access',
    description: 'Run unlimited sessions per month with no time limits to worry about.',
  },
];

function CheckList({ intro, items }) {
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

/** Image left (large), text right */
function FeatureRow({ title, intro, items, visual: Visual, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="flex items-center justify-center">
        <Visual />
      </div>
      <div>
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem]">
          {title}
        </h3>
        <CheckList intro={intro} items={items} />
      </div>
    </FadeIn>
  );
}

function PivotCard({ icon: Icon, title, badge, description }) {
  return (
    <div className="text-center lg:text-left">
      <Icon className="mx-auto mb-4 h-10 w-10 text-[#1a1a1a] lg:mx-0" strokeWidth={1.5} />
      <div className="mb-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        <h3 className="font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">{title}</h3>
        {badge && (
          <span className="rounded bg-[#00a3ad] px-2 py-0.5 text-[11px] font-semibold text-white">{badge}</span>
        )}
      </div>
      <p className="text-body-sm leading-relaxed text-[#666666] md:text-body">{description}</p>
    </div>
  );
}

function TelehealthCTA() {
  return (
    <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
      <FadeIn>
        <h2 className="mx-auto mb-8 max-w-[640px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
          Simple, seamless, and secure.
        </h2>
        <Link
          to={ROUTES.auth.register}
          className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-primary shadow-md transition-colors hover:bg-white/95"
        >
          Book a Demo
        </Link>
      </FadeIn>
    </SectionShell>
  );
}

export function TelehealthPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Tendo Telehealth
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Secure virtual appointments for improved patient care
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Offer secure and private online consultations including seamless interactive
                screen-sharing and high-definition video.
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
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <TelehealthHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* HD free forever */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <SectionHeading
            title="1:1 high-definition video calls are free forever"
            subtitle="All our plans include one-on-one HD telehealth appointments so you can see your patients wherever they are."
            className="mb-0"
          />
        </SectionShell>

        {/* Large left-image feature blocks */}
        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          {FEATURE_SECTIONS.map((section, i) => (
            <FeatureRow key={section.title} {...section} delay={i * 0.05} />
          ))}
        </SectionShell>

        {/* Large lifestyle visual — photo left emphasis */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20">
          <FadeIn>
            <TelehealthLifestyleVisual />
          </FadeIn>
        </SectionShell>

        {/* Pivot to virtual */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20">
          <SectionHeading title="Seamlessly pivot to virtual appointments" className="mb-10 md:mb-14" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {PIVOT_FEATURES.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.05}>
                <PivotCard {...feature} />
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <TelehealthCTA />
      </main>

      <MarketingFooter />
    </div>
  );
}
