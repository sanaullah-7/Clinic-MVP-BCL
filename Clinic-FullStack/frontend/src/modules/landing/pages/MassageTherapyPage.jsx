import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import { BillingTrustBadges } from '../components/BillingMockups';
import {
  CheckoutMockup,
  LaptopScheduleMockup,
  MessagingPortalMockup,
  RMTBookingMockup,
  RMTChartingMockup,
  RMTHeroVisual,
  RMTIntakeMockup,
  WorkflowCard,
} from '../components/MassageTherapyMockups';
import {
  CHECK_COLOR,
  RMT_CLINIC_LOGOS,
  RMT_FAQ_ITEMS,
  RMT_FEATURE_ROWS,
  RMT_PLUS_FEATURES,
  RMT_POWER_FEATURES,
  RMT_POWER_SECTION,
  RMT_SECTION_INTRO,
  RMT_TESTIMONIAL,
  RMT_TRUST_QUOTE,
  RMT_WORKFLOW_CARDS,
} from '../data/massage-therapy-data';
import { cn } from '@/lib/cn';

const MOCKUPS = {
  charting: RMTChartingMockup,
  booking: RMTBookingMockup,
  intake: RMTIntakeMockup,
  billing: CheckoutMockup,
  communication: MessagingPortalMockup,
};

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#ffb800]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FeatureRow({ title, intro, visual: Visual, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20"
    >
      <div className="flex items-center justify-center lg:justify-start">
        <Visual />
      </div>
      <div className="lg:pl-2">
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem] lg:text-[1.65rem]">
          {title}
        </h3>
        <p className="text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>
      </div>
    </FadeIn>
  );
}

function TrustBar() {
  return (
    <SectionShell className="border-y border-[#eeeeee] bg-white py-10 md:py-12">
      <FadeIn className="text-center">
        <h2 className="mb-6 font-heading text-[1.25rem] font-bold text-[#1a1a1a] md:text-[1.5rem]">
          Helping massage therapy clinics work smarter and grow faster
        </h2>
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Stars />
          <p className="text-body text-[#333333] md:text-body-lg">
            &ldquo;{RMT_TRUST_QUOTE.quote}&rdquo; —{' '}
            <span className="font-semibold text-[#1a1a1a]">
              {RMT_TRUST_QUOTE.author}, {RMT_TRUST_QUOTE.role}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {RMT_CLINIC_LOGOS.map((name) => (
            <span
              key={name}
              className="font-heading text-body-sm font-semibold tracking-wide text-[#999999] md:text-body"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}

function FAQAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-body font-semibold text-[#1a1a1a]">{item.question}</span>
        <ChevronDown
          className={cn('h-5 w-5 flex-shrink-0 transition-transform duration-300', isOpen && 'rotate-180')}
        />
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-400',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="border-t border-[#f0f0f0] px-5 pb-5 pt-4 text-body leading-relaxed text-[#666666] md:px-6">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureBlock({ rows, startIndex = 0 }) {
  return rows.map((row, i) => {
    const Visual = MOCKUPS[row.id];
    return (
      <div
        key={row.id}
        className={cn(
          row.bg === 'gray' &&
            'rounded-none bg-[#f5f5f5] -mx-[max(1rem,calc((100vw-100%)/2))] px-[max(1rem,calc((100vw-100%)/2))] py-14 md:py-20',
        )}
      >
        <div className="section-inner">
          <FeatureRow title={row.title} intro={row.intro} visual={Visual} delay={(startIndex + i) * 0.05} />
        </div>
      </div>
    );
  });
}

export function MassageTherapyPage() {
  const [openFaqId, setOpenFaqId] = useState(null);

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Massage Therapy Software
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Run your massage therapy practice with confidence
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Tendo gives massage therapists the tools, privacy, and security to manage every
                aspect of clinic operations — from booking to billing — in one unified platform.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to={ROUTES.auth.register}>
                  <Button variant="primary" size="lg" pill className="min-w-[160px] shadow-orange">
                    Book a Demo
                  </Button>
                </Link>
                <Link
                  to={ROUTES.landing.features}
                  className="inline-flex items-center gap-2 text-body font-semibold text-[#1a1a1a] hover:text-primary"
                >
                  Explore Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <BillingTrustBadges />
            </FadeIn>
            <FadeIn delay={0.08}>
              <RMTHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        <TrustBar />

        <SectionShell className="border-b border-[#eeeeee] bg-white py-12 md:py-14">
          <FadeIn className="text-center">
            <h2 className="mx-auto max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              {RMT_SECTION_INTRO.title}
            </h2>
          </FadeIn>
        </SectionShell>

        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureBlock rows={RMT_FEATURE_ROWS.slice(0, 3)} />
        </SectionShell>

        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureBlock rows={RMT_FEATURE_ROWS.slice(3)} startIndex={3} />
        </SectionShell>

        <SectionShell className="bg-white py-10 md:py-12">
          <FadeIn className="flex flex-wrap items-center justify-center gap-4">
            <Link to={ROUTES.auth.register}>
              <Button variant="primary" size="lg" pill className="min-w-[160px] shadow-orange">
                Book a Demo
              </Button>
            </Link>
            <Link to={ROUTES.landing.pricing}>
              <Button variant="outline" size="lg" pill className="min-w-[160px] border-[#1a1a1a]">
                View Pricing
              </Button>
            </Link>
          </FadeIn>
        </SectionShell>

        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(30,58,95,0.75), rgba(30,58,95,0.85)), url(/images/massage-therapy/rmt-bg-reference.png)',
              backgroundColor: '#1e3a5f',
            }}
          />
          <div className="section-inner relative z-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              {RMT_WORKFLOW_CARDS.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.05}>
                  <WorkflowCard card={card} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SectionShell className="bg-white py-14 md:py-20">
          <FadeIn className="text-center">
            <h2 className="mx-auto mb-10 max-w-3xl font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.65rem]">
              Why Massage Therapists choose Tendo to grow their practice 🧡
            </h2>
            <div className="mx-auto max-w-[820px] rounded-2xl bg-baby-blue px-8 py-10 md:px-12 md:py-12">
              <div className="mb-6 flex items-center justify-center gap-2">
                <span className="text-body font-bold text-[#1a1a1a]">Capterra</span>
                <span className="text-body font-bold text-[#00a3ad]">{RMT_TESTIMONIAL.rating}</span>
                <Stars />
              </div>
              <blockquote className="mb-8 text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
                &ldquo;{RMT_TESTIMONIAL.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-[#1a1a1a]">
                  {RMT_TESTIMONIAL.initials}
                </div>
                <div className="text-left">
                  <p className="text-body-sm font-semibold text-[#1a1a1a]">{RMT_TESTIMONIAL.name}</p>
                  <p className="text-caption text-[#666666]">{RMT_TESTIMONIAL.role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-14">
            <h2 className="mx-auto mb-4 max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              {RMT_POWER_SECTION.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-[#666666]">{RMT_POWER_SECTION.subtitle}</p>
          </FadeIn>
          <FadeIn className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
            <LaptopScheduleMockup />
            <ul className="space-y-4">
              {RMT_POWER_FEATURES.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${CHECK_COLOR}18` }}
                  >
                    <Check className="h-3.5 w-3.5" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
                  </span>
                  <span className="text-body leading-relaxed text-[#666666] md:text-body-lg">
                    <strong className="font-semibold text-[#1a1a1a]">{feature.title}</strong>
                    {' — '}
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </SectionShell>

        <SectionShell className="bg-white py-14 md:py-20">
          <FadeIn>
            <div className="mx-auto max-w-[960px] rounded-2xl border border-[#e8ecea] bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-10">
              <span className="mb-6 inline-block rounded-full bg-[#00a3ad] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                + Plus
              </span>
              <div className="grid gap-4 sm:grid-cols-2 lg:gap-x-12">
                {RMT_PLUS_FEATURES.map((item) => (
                  <div key={item.text} className="flex items-center justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        style={{ color: CHECK_COLOR }}
                        strokeWidth={2.5}
                      />
                      <span className="text-body-sm text-[#666666] md:text-body">{item.text}</span>
                    </div>
                    {item.badge && (
                      <span className="flex-shrink-0 rounded bg-[#00a3ad] px-2 py-0.5 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        <SectionShell className="bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-12">
            <h2 className="font-heading text-[1.75rem] font-bold text-[#1a1a1a] md:text-[2rem]">FAQ</h2>
            <p className="mt-2 text-body-lg text-[#666666]">Common Questions, Clear Answers</p>
          </FadeIn>
          <div className="mx-auto max-w-[820px] space-y-3">
            {RMT_FAQ_ITEMS.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.03}>
                <FAQAccordionItem
                  item={item}
                  isOpen={openFaqId === item.id}
                  onToggle={() => setOpenFaqId(openFaqId === item.id ? null : item.id)}
                />
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
          <FadeIn>
            <h2 className="mx-auto mb-8 max-w-[720px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
              See the difference more freedom, flexibility, and choice can make.
            </h2>
            <Link to={ROUTES.auth.register}>
              <Button
                variant="secondary"
                size="lg"
                pill
                className="min-w-[180px] border-0 bg-white text-primary shadow-md hover:bg-white/95"
              >
                Book a Demo
              </Button>
            </Link>
          </FadeIn>
        </SectionShell>
      </main>

      <MarketingFooter />
    </div>
  );
}
