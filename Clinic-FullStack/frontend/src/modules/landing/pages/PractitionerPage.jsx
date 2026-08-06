import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, GitBranch, Handshake, Megaphone, Shield } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import { BillingTrustBadges } from '../components/BillingMockups';
import {
  LaptopScheduleMockup,
  PRAIChartingMockup,
  PRChartingBenefitMockup,
  PRDashboardMockup,
  PRHeroVisual,
  PRImagingMockup,
  PRPatientExperienceMockup,
  PRRetentionMockup,
} from '../components/PractitionerMockups';
import {
  CHECK_COLOR,
  PR_AI_CHARTING,
  PR_BENEFIT_CARDS,
  PR_CLINIC_LOGOS,
  PR_CTA,
  PR_CTA_LOGOS,
  PR_DASHBOARD,
  PR_FAQ_ITEMS,
  PR_GRID_FEATURES,
  PR_HERO,
  PR_PATIENT_EXPERIENCE,
  PR_POWER_FEATURES,
  PR_POWER_SECTION,
  PR_SECONDARY_TESTIMONIAL,
  PR_TRUST,
} from '../data/practitioner-data';
import { cn } from '@/lib/cn';

const BENEFIT_MOCKUPS = {
  imaging: PRImagingMockup,
  retention: PRRetentionMockup,
  charting: PRChartingBenefitMockup,
};

const GRID_ICONS = {
  0: Shield,
  1: GitBranch,
  2: Megaphone,
  3: Handshake,
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
  return <div className="flex items-center justify-center lg:justify-start">{children}</div>;
}

function FeatureRow({ eyebrow, title, intro, bullets, visual: Visual, delay = 0, bg = 'white' }) {
  return (
    <div
      className={cn(
        bg === 'gray' &&
          'rounded-none bg-[#f5f5f5] -mx-[max(1rem,calc((100vw-100%)/2))] px-[max(1rem,calc((100vw-100%)/2))] py-14 md:py-20',
      )}
    >
      <div className="section-inner">
        <FadeIn
          delay={delay}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20"
        >
          <MockupWrap>
            <Visual />
          </MockupWrap>
          <div className="lg:pl-2">
            {eyebrow && (
              <p className="mb-2 text-body-sm font-semibold uppercase tracking-wide text-primary md:text-body">
                {eyebrow}
              </p>
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
                  <li key={typeof item === 'string' ? item : item.title} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00a3ad]" strokeWidth={2.5} />
                    <span className="text-body leading-relaxed text-[#666666] md:text-body-lg">
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          <strong className="font-semibold text-[#1a1a1a]">{item.title}:</strong>{' '}
                          {item.text}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
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

export function PractitionerPage() {
  const [openFaqId, setOpenFaqId] = useState(null);

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <PRHeroVisual />
            </FadeIn>
            <FadeIn delay={0.08} className="order-1 lg:order-2 lg:pl-4 xl:pl-8">
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                {PR_HERO.eyebrow}
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                {PR_HERO.title}
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">{PR_HERO.subtitle}</p>
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
              {PR_TRUST.heading}
            </h2>
            <div className="mx-auto max-w-[820px] rounded-2xl bg-baby-blue px-8 py-10 md:px-12 md:py-12">
              <div className="mb-6 flex items-center justify-center gap-2">
                <span className="text-body font-bold text-[#1a1a1a]">Capterra</span>
                <span className="text-body font-bold text-[#00a3ad]">{PR_TRUST.rating}</span>
                <Stars />
              </div>
              <blockquote className="mb-8 text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
                &ldquo;{PR_TRUST.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00a3ad] text-sm font-bold text-white">
                  {PR_TRUST.initials}
                </div>
                <div className="text-left">
                  <p className="text-body-sm font-semibold text-[#1a1a1a]">{PR_TRUST.name}</p>
                  <p className="text-caption text-[#666666]">{PR_TRUST.role}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {PR_CLINIC_LOGOS.map((name) => (
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

        <SectionShell className="space-y-0 bg-white py-14 md:py-20 lg:py-24">
          <FeatureRow
            eyebrow={PR_AI_CHARTING.eyebrow}
            title={PR_AI_CHARTING.title}
            intro={PR_AI_CHARTING.intro}
            bullets={PR_AI_CHARTING.bullets}
            visual={PRAIChartingMockup}
            delay={0}
          />
          <FeatureRow
            eyebrow={PR_DASHBOARD.eyebrow}
            title={PR_DASHBOARD.title}
            intro={PR_DASHBOARD.intro}
            visual={PRDashboardMockup}
            delay={0.05}
            bg="gray"
          />
          <FeatureRow
            eyebrow={PR_PATIENT_EXPERIENCE.eyebrow}
            title={PR_PATIENT_EXPERIENCE.title}
            intro={PR_PATIENT_EXPERIENCE.intro}
            bullets={PR_PATIENT_EXPERIENCE.bullets}
            visual={PRPatientExperienceMockup}
            delay={0.1}
          />
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {PR_BENEFIT_CARDS.map((card, i) => {
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
                      <ul className="space-y-2">
                        {card.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-body-sm text-[#666666]">
                            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#00a3ad]" strokeWidth={2.5} />
                            {item}
                          </li>
                        ))}
                      </ul>
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
              &ldquo;{PR_SECONDARY_TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a3ad] text-xs font-bold text-white">
                {PR_SECONDARY_TESTIMONIAL.initials}
              </div>
              <div className="text-left">
                <p className="text-body-sm font-semibold text-[#1a1a1a]">{PR_SECONDARY_TESTIMONIAL.name}</p>
                <p className="text-caption text-[#666666]">{PR_SECONDARY_TESTIMONIAL.role}</p>
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-14">
            <h2 className="mx-auto mb-4 max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              {PR_POWER_SECTION.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-[#666666]">{PR_POWER_SECTION.subtitle}</p>
          </FadeIn>
          <FadeIn className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
            <MockupWrap>
              <LaptopScheduleMockup />
            </MockupWrap>
            <ul className="space-y-4">
              {PR_POWER_FEATURES.map((feature) => (
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

        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {PR_GRID_FEATURES.map((item, i) => {
              const Icon = GRID_ICONS[i] ?? Shield;
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
            {PR_FAQ_ITEMS.map((item, i) => (
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
              {PR_CTA.title}
            </h2>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {PR_CTA_LOGOS.map((name) => (
                <span key={name} className="font-heading text-body-sm font-semibold text-white/80 md:text-body">
                  {name}
                </span>
              ))}
            </div>
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
            <p className="mt-4 text-body-sm text-white/85">{PR_CTA.subtitle}</p>
          </FadeIn>
        </SectionShell>
      </main>

      <MarketingFooter />
    </div>
  );
}
