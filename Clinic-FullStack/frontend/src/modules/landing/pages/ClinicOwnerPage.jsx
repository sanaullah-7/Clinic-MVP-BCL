import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, LineChart, Megaphone, Shield, Wallet } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import { BillingTrustBadges } from '../components/BillingMockups';
import {
  COAnalyticsMockup,
  COHeroVisual,
  COInsightsCardMockup,
  COIntegrationsHub,
  COOnboardingMockup,
  COPartnershipMockup,
  COPatientExperienceMockup,
  COPlatformWheel,
  COSecurityMockup,
  COWorkflowsMockup,
  LaptopScheduleMockup,
} from '../components/ClinicOwnerMockups';
import {
  CHECK_COLOR,
  CO_BENEFIT_CARDS,
  CO_CLINIC_LOGOS,
  CO_CTA,
  CO_CTA_LOGOS,
  CO_FAQ_ITEMS,
  CO_FEATURE_ROWS,
  CO_GRID_FEATURES,
  CO_HERO,
  CO_INTEGRATIONS,
  CO_PARTNERSHIP,
  CO_PLATFORM_INTRO,
  CO_PLATFORM_TOOLS,
  CO_POWER_FEATURES,
  CO_POWER_SECTION,
  CO_SECONDARY_TESTIMONIAL,
  CO_TRUST,
} from '../data/clinic-owner-data';
import { cn } from '@/lib/cn';

const FEATURE_MOCKUPS = {
  workflows: COWorkflowsMockup,
  analytics: COAnalyticsMockup,
  patient: COPatientExperienceMockup,
};

const BENEFIT_MOCKUPS = {
  insights: COInsightsCardMockup,
  security: COSecurityMockup,
  onboarding: COOnboardingMockup,
};

const GRID_ICONS = {
  0: LineChart,
  1: Wallet,
  2: Megaphone,
  3: Shield,
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

function MockupWrap({ children }) {
  return (
    <div className="flex items-center justify-center lg:justify-start [&_.relative]:lg:scale-[1.08] [&_.relative]:lg:origin-left [&_.relative]:xl:scale-[1.12]">
      {children}
    </div>
  );
}

function FeatureRow({ eyebrow, title, intro, bullets, visual: Visual, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20"
    >
      <MockupWrap>
        <Visual />
      </MockupWrap>
      <div className="lg:pl-2">
        {eyebrow && (
          <p className="mb-2 text-body-sm font-semibold text-primary md:text-body">{eyebrow}</p>
        )}
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem] lg:text-[1.65rem]">
          {title}
        </h3>
        {intro && (
          <p className="text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>
        )}
        {bullets && (
          <ul className="mt-4 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00a3ad]" strokeWidth={2.5} />
                <span className="text-body leading-relaxed text-[#666666] md:text-body-lg">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </FadeIn>
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
    const Visual = FEATURE_MOCKUPS[row.id];
    return (
      <div
        key={row.id}
        className={cn(
          row.bg === 'gray' &&
            'rounded-none bg-[#f5f5f5] -mx-[max(1rem,calc((100vw-100%)/2))] px-[max(1rem,calc((100vw-100%)/2))] py-14 md:py-20',
        )}
      >
        <div className="section-inner">
          <FeatureRow
            eyebrow={row.eyebrow}
            title={row.title}
            intro={row.intro}
            bullets={row.bullets}
            visual={Visual}
            delay={(startIndex + i) * 0.05}
          />
        </div>
      </div>
    );
  });
}

export function ClinicOwnerPage() {
  const [openFaqId, setOpenFaqId] = useState(null);

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <COHeroVisual />
            </FadeIn>
            <FadeIn delay={0.08} className="order-1 lg:order-2 lg:pl-4 xl:pl-8">
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                {CO_HERO.eyebrow}
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                {CO_HERO.title}
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">{CO_HERO.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4">
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
              </div>
              <BillingTrustBadges />
            </FadeIn>
          </div>
        </SectionShell>

        <SectionShell className="border-y border-[#eeeeee] bg-white py-14 md:py-20">
          <FadeIn className="text-center">
            <h2 className="mx-auto mb-10 max-w-3xl font-heading text-[1.35rem] font-bold text-[#1a1a1a] md:text-[1.65rem]">
              {CO_TRUST.heading}
            </h2>
            <div className="mx-auto max-w-[820px] rounded-2xl bg-baby-blue px-8 py-10 md:px-12 md:py-12">
              <div className="mb-6 flex items-center justify-center gap-2">
                <span className="text-body font-bold text-[#1a1a1a]">Capterra</span>
                <span className="text-body font-bold text-[#00a3ad]">{CO_TRUST.rating}</span>
                <Stars />
              </div>
              <blockquote className="mb-8 text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
                &ldquo;{CO_TRUST.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00a3ad] text-sm font-bold text-white">
                  {CO_TRUST.initials}
                </div>
                <div className="text-left">
                  <p className="text-body-sm font-semibold text-[#1a1a1a]">{CO_TRUST.name}</p>
                  <p className="text-caption text-[#666666]">{CO_TRUST.role}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {CO_CLINIC_LOGOS.map((name) => (
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

        <SectionShell className="border-b border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-8 text-center md:mb-12">
            <h2 className="mx-auto mb-4 max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              {CO_PLATFORM_INTRO.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-[#666666]">{CO_PLATFORM_INTRO.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <COPlatformWheel tools={CO_PLATFORM_TOOLS} />
          </FadeIn>
        </SectionShell>

        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureBlock rows={CO_FEATURE_ROWS} />
        </SectionShell>

        <SectionShell className="bg-[#f5f5f5] py-14 md:py-16">
          <FadeIn className="grid items-center gap-8 rounded-2xl bg-[#f0f0f0] p-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:p-10">
            <MockupWrap>
              <COPartnershipMockup />
            </MockupWrap>
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-[#999999]">
                Clinic Accelerator
              </p>
              <h3 className="mb-4 font-heading text-[1.35rem] font-bold text-[#1a1a1a] md:text-[1.5rem]">
                {CO_PARTNERSHIP.title}
              </h3>
              <p className="text-body leading-relaxed text-[#666666] md:text-body-lg">{CO_PARTNERSHIP.intro}</p>
            </div>
          </FadeIn>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {CO_BENEFIT_CARDS.map((card, i) => {
              const Visual = BENEFIT_MOCKUPS[card.id];
              return (
                <FadeIn key={card.id} delay={i * 0.05}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecea] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="p-4 pb-0">
                      <Visual />
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-4 md:p-7">
                      <h3 className="mb-3 font-heading text-[1.05rem] font-bold text-[#1a1a1a] md:text-[1.125rem]">
                        {card.title}
                      </h3>
                      <p className="mb-4 text-body-sm leading-relaxed text-[#666666] md:text-body">{card.intro}</p>
                      {card.bullets && (
                        <ul className="mb-4 space-y-2">
                          {card.bullets.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-body-sm text-[#666666]">
                              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#00a3ad]" strokeWidth={2.5} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {card.footer && (
                        <p className="mt-auto text-body-sm leading-relaxed text-[#666666]">{card.footer}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell className="bg-baby-blue/40 py-12 md:py-14">
          <FadeIn className="mx-auto max-w-[720px] text-center">
            <Stars />
            <blockquote className="mt-4 text-[1.125rem] font-semibold leading-relaxed text-[#1a1a1a] md:text-[1.25rem]">
              &ldquo;{CO_SECONDARY_TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a3ad] text-xs font-bold text-white">
                {CO_SECONDARY_TESTIMONIAL.initials}
              </div>
              <div className="text-left">
                <p className="text-body-sm font-semibold text-[#1a1a1a]">{CO_SECONDARY_TESTIMONIAL.name}</p>
                <p className="text-caption text-[#666666]">{CO_SECONDARY_TESTIMONIAL.role}</p>
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-14">
            <h2 className="mx-auto mb-4 max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              {CO_POWER_SECTION.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-[#666666]">{CO_POWER_SECTION.subtitle}</p>
          </FadeIn>
          <FadeIn className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
            <MockupWrap>
              <LaptopScheduleMockup />
            </MockupWrap>
            <ul className="space-y-4">
              {CO_POWER_FEATURES.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${CHECK_COLOR}18` }}
                  >
                    <Check className="h-3.5 w-3.5" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
                  </span>
                  <span className="text-body leading-relaxed text-[#666666] md:text-body-lg">
                    <strong className="font-semibold text-[#1a1a1a]">{feature.title}</strong>
                    {' '}
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </SectionShell>

        <SectionShell className="bg-white py-14 md:py-20 lg:py-24">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
            <COIntegrationsHub />
            <div className="lg:pl-2">
              <h2 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem] lg:text-[1.65rem]">
                {CO_INTEGRATIONS.title}
              </h2>
              <p className="mb-6 text-body leading-relaxed text-[#666666] md:text-body-lg">
                {CO_INTEGRATIONS.intro}
              </p>
              <Link
                to={ROUTES.landing.integrationsPage}
                className="inline-flex items-center gap-2 text-body font-semibold text-[#1a1a1a] hover:text-primary"
              >
                Explore Integrations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {CO_GRID_FEATURES.map((item, i) => {
              const Icon = GRID_ICONS[i] ?? LineChart;
              return (
                <FadeIn key={item.title} delay={i * 0.04}>
                  <div className="h-full rounded-2xl border border-[#e8ecea] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:p-7">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00a3ad]/15">
                      <Icon className="h-5 w-5 text-[#00a3ad]" strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-3 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">
                      {item.title}
                    </h3>
                    <p className="text-body-sm leading-relaxed text-[#666666] md:text-body">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell className="bg-white py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-12">
            <h2 className="font-heading text-[1.75rem] font-bold text-[#1a1a1a] md:text-[2rem]">FAQ</h2>
            <p className="mt-2 text-body-lg text-[#666666]">Common Questions, Clear Answers</p>
          </FadeIn>
          <div className="mx-auto max-w-[820px] space-y-3">
            {CO_FAQ_ITEMS.map((item, i) => (
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
              {CO_CTA.title}
            </h2>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {CO_CTA_LOGOS.map((name) => (
                <span key={name} className="font-heading text-body-sm font-semibold text-white/80 md:text-body">
                  {name}
                </span>
              ))}
            </div>
            <Link to={CO_CTA.to}>
              <Button
                variant="secondary"
                size="lg"
                pill
                className="min-w-[180px] border-0 bg-white text-primary shadow-md hover:bg-white/95"
              >
                Book a Demo
              </Button>
            </Link>
            <p className="mt-4 text-body-sm text-white/85">{CO_CTA.subtitle}</p>
          </FadeIn>
        </SectionShell>
      </main>

      <MarketingFooter />
    </div>
  );
}
