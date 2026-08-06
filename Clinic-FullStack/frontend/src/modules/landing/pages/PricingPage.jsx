import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Star,
} from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import {
  AddOnIcon,
  EducationVisual,
  OnboardingProgressGraphic,
  OnboardingServiceCard,
  PricingCalculator,
  StartupVisual,
  TestimonialSlide,
} from '../components/PricingMockups';
import {
  CHECK_COLOR,
  COMPARE_PLANS_ROWS,
  ONBOARDING_SERVICES,
  PRICING_ADDONS,
  PRICING_FAQ_ITEMS,
  PRICING_PLANS,
  PRICING_TESTIMONIALS,
  PROMO_CARDS,
} from '../data/pricing-data';
import { cn } from '@/lib/cn';

const ADDON_ROUTES = {
  communications: ROUTES.landing.communicationsModule,
  billing: ROUTES.landing.billingModule,
  telehealth: ROUTES.landing.telehealth,
};

function BillingToggle({ isAnnual, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          'rounded-full px-5 py-2.5 text-body-sm font-semibold transition-colors md:text-body',
          isAnnual ? 'bg-[#00a3ad] text-white' : 'bg-[#f0f0f0] text-[#666666] hover:bg-[#e8e8e8]',
        )}
      >
        Pay Annually
      </button>
      {isAnnual && (
        <span className="rounded-full bg-[#00a3ad]/15 px-3 py-1 text-caption font-semibold text-[#00a3ad]">
          Save 10%
        </span>
      )}
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          'rounded-full px-5 py-2.5 text-body-sm font-semibold transition-colors md:text-body',
          !isAnnual ? 'bg-[#00a3ad] text-white' : 'bg-[#f0f0f0] text-[#666666] hover:bg-[#e8e8e8]',
        )}
      >
        Pay Monthly
      </button>
    </div>
  );
}

function PlanColumn({ plan, isAnnual }) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-7',
        plan.popular ? 'border-[#00a3ad] ring-2 ring-[#00a3ad]/20' : 'border-[#e8ecea]',
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#00a3ad] px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}

      <h3 className="mb-2 font-heading text-[1.35rem] font-bold text-[#1a1a1a]">{plan.name}</h3>
      <p className="mb-5 min-h-[3rem] text-body-sm leading-relaxed text-[#666666] md:text-body">
        {plan.description}
      </p>

      <div className="mb-1">
        <span className="font-heading text-[2.5rem] font-bold leading-none text-[#1a1a1a]">${price}</span>
        <span className="text-body text-[#666666]"> /location</span>
      </div>
      <p className="mb-1 text-body-sm text-[#999999]">
        {isAnnual ? 'billed yearly' : 'billed monthly'}
      </p>
      <p className="mb-4 text-body-sm font-medium text-[#666666]">{plan.licenseFeeLabel}</p>

      <ul className="mb-5 space-y-1.5">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-body-sm font-semibold text-[#1a1a1a]">
            <Check className="h-4 w-4 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
            {h}
          </li>
        ))}
      </ul>

      <Link
        to={plan.ctaVariant === 'quote' ? ROUTES.landing.contact : ROUTES.auth.register}
        className="mb-6"
      >
        <Button variant="primary" fullWidth pill className="shadow-orange">
          {plan.cta}
        </Button>
      </Link>

      {plan.includesPrevious && (
        <p className="mb-4 text-body-sm font-bold text-[#1a1a1a]">
          Everything in {plan.includesPrevious}, plus:
        </p>
      )}

      <div className="flex-1 space-y-5">
        {plan.featureGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 text-body-sm font-bold text-[#1a1a1a]">{group.title}</p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                    style={{ color: CHECK_COLOR }}
                    strokeWidth={2.5}
                  />
                  <span className="text-body-sm text-[#666666]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-[#eee] pt-5">
        <p className="mb-2 flex items-center gap-1.5 text-body-sm font-bold text-[#1a1a1a]">
          <DollarSign className="h-4 w-4 text-[#1a5fb4]" strokeWidth={2.5} />
          Add-On Features
        </p>
        <ul className="space-y-1">
          {plan.addOns.map((addon) => (
            <li key={addon} className="flex items-start gap-2 text-body-sm text-[#666666]">
              <DollarSign className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#1a5fb4]" strokeWidth={2.5} />
              {addon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const testimonial = PRICING_TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-[900px]">
      <button
        type="button"
        onClick={() => setIndex((i) => (i === 0 ? PRICING_TESTIMONIALS.length - 1 : i - 1))}
        className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#00a3ad] text-white shadow-md transition-colors hover:bg-[#00a3ad]/90 md:-translate-x-6"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <TestimonialSlide testimonial={testimonial} />

      <button
        type="button"
        onClick={() => setIndex((i) => (i === PRICING_TESTIMONIALS.length - 1 ? 0 : i + 1))}
        className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#00a3ad] text-white shadow-md transition-colors hover:bg-[#00a3ad]/90 md:translate-x-6"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {PRICING_TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-[#00a3ad]' : 'bg-[#ddd]',
            )}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function AddOnCard({ addon }) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-8',
        addon.highlighted ? 'border-[#00a3ad] border-2' : 'border-[#e8ecea]',
      )}
    >
      <AddOnIcon type={addon.icon} />
      <h3 className="mb-2 text-center font-heading text-body-lg font-bold text-[#1a1a1a] md:text-left md:text-[1.125rem]">
        {addon.title}
      </h3>
      <p className="mb-5 text-center md:text-left">
        <span className="font-heading text-[1.75rem] font-bold text-[#1a1a1a]">{addon.price}</span>
        <span className="text-body text-[#666666]">{addon.period}</span>
      </p>

      {addon.sections.map((section) => (
        <div key={section.title ?? 'default'} className="mb-4">
          {section.title && (
            <p className="mb-2 text-body-sm font-bold text-[#1a1a1a]">{section.title}</p>
          )}
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
                <span className="text-body-sm text-[#666666]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {addon.footnote && (
        <p className="mb-4 text-[10px] leading-relaxed text-[#999999]">{addon.footnote}</p>
      )}

      {addon.link && (
        <Link
          to={ADDON_ROUTES[addon.link.to]}
          className="group mt-auto inline-flex items-center gap-2.5 text-body-sm font-semibold text-primary hover:underline"
        >
          {addon.link.label}
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      )}
    </div>
  );
}

function ComparePlansAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[960px]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-[#e8ecea] bg-[#f5f5f5] px-6 py-4 text-left shadow-sm transition-colors hover:bg-[#f0f0f0] md:px-8 md:py-5"
        aria-expanded={open}
      >
        <span className="font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">
          Compare our plans
        </span>
        <ChevronDown
          className={cn('h-5 w-5 text-[#1a1a1a] transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-400 ease-in-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#e8ecea] bg-white">
            <table className="w-full min-w-[540px] text-left text-body-sm">
              <thead>
                <tr className="border-b border-[#eee] bg-[#fafafa]">
                  <th className="px-4 py-3 font-bold text-[#1a1a1a] md:px-6">Feature</th>
                  <th className="px-4 py-3 font-bold text-[#1a1a1a]">Launch</th>
                  <th className="px-4 py-3 font-bold text-[#1a1a1a]">Grow</th>
                  <th className="px-4 py-3 font-bold text-[#1a1a1a]">Scale</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_PLANS_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-[#f0f0f0] last:border-0">
                    <td className="px-4 py-3 text-[#666666] md:px-6">{row.feature}</td>
                    {['launch', 'grow', 'scale'].map((plan) => (
                      <td key={plan} className="px-4 py-3">
                        {row[plan] ? (
                          <Check className="h-4 w-4" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
                        ) : (
                          <span className="text-[#ccc]">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
      <div className={cn('grid transition-[grid-template-rows] duration-400', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <p className="border-t border-[#f0f0f0] px-5 pb-5 pt-4 text-body leading-relaxed text-[#666666] md:px-6">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function PromoCardRow({ card }) {
  const Visual = card.image === 'education' ? EducationVisual : StartupVisual;

  return (
    <FadeIn className="grid items-center gap-8 overflow-hidden rounded-2xl border border-[#e8ecea] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
      <div className="p-4 lg:p-6">
        <Visual />
      </div>
      <div className="px-6 pb-8 lg:px-10 lg:py-10">
        <h3 className="mb-3 font-heading text-[1.25rem] font-bold text-[#1a1a1a] md:text-[1.35rem]">
          {card.title}
        </h3>
        <p className="mb-6 text-body leading-relaxed text-[#666666]">{card.description}</p>
        <Link
          to={ROUTES.landing.contact}
          className="group inline-flex items-center gap-2.5 text-body font-semibold text-primary hover:underline"
        >
          {card.linkLabel}
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </FadeIn>
  );
}

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [calcPlan, setCalcPlan] = useState('launch');
  const [calcLocations, setCalcLocations] = useState(1);
  const [calcLicenses, setCalcLicenses] = useState(1);
  const [openFaqId, setOpenFaqId] = useState(null);

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Tier cards + calculator */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <FadeIn className="mb-8 text-center md:mb-10">
            <h1 className="mb-4 font-heading text-[2rem] font-bold leading-tight tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
              Pricing that scales with your practice
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-[#666666]">
              Pay monthly or annually, add features as you grow, and only pay for the maximum number
              of users accessing the system at the same time.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f7f5] px-5 py-2.5">
              <Star className="h-4 w-4 fill-[#00a3ad] text-[#00a3ad]" />
              <span className="text-body-sm font-semibold text-[#1a1a1a] md:text-body">
                All plans include AI Charting — for your entire clinic.
              </span>
            </div>
          </FadeIn>

          <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />

          <div className="grid gap-8 xl:grid-cols-[1fr_280px] xl:gap-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">
              {PRICING_PLANS.map((plan, i) => (
                <FadeIn key={plan.id} delay={i * 0.05}>
                  <PlanColumn plan={plan} isAnnual={isAnnual} />
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.15} className="xl:order-last">
              <PricingCalculator
                planId={calcPlan}
                locations={calcLocations}
                licenses={calcLicenses}
                isAnnual={isAnnual}
                onPlanChange={setCalcPlan}
                onLocationsChange={setCalcLocations}
                onLicensesChange={setCalcLicenses}
              />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Testimonial + add-ons */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20">
          <FadeIn className="mb-14 md:mb-16">
            <TestimonialSlider />
          </FadeIn>

          <SectionHeading
            title="Enhance your plan with optional clinic-wide add-ons"
            subtitle="Enhance your clinic software with advanced features"
            className="mb-10 md:mb-12"
          />

          <div className="mx-auto mb-14 grid max-w-[1060px] gap-6 md:grid-cols-3 md:gap-8">
            {PRICING_ADDONS.map((addon, i) => (
              <FadeIn key={addon.id} delay={i * 0.05}>
                <AddOnCard addon={addon} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mb-14 md:mb-16">
            <TestimonialSlide testimonial={PRICING_TESTIMONIALS[0]} />
          </FadeIn>

          <FadeIn className="mb-14">
            <ComparePlansAccordion />
          </FadeIn>

          <FadeIn>
            <div className="mx-auto max-w-[960px] rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] px-8 py-10 text-center md:px-12 md:py-12">
              <h2 className="mb-6 font-heading text-[1.35rem] font-bold leading-snug text-white md:text-[1.5rem]">
                Are you a recent grad or opening your first clinic? Start free with Tendo Lite!
              </h2>
              <Link to={ROUTES.landing.contact}>
                <Button variant="primary" size="lg" pill className="min-w-[160px] bg-primary shadow-orange hover:bg-primary/90">
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>
        </SectionShell>

        {/* Concierge onboarding */}
        <SectionShell className="bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-4 text-center">
            <p className="mb-2 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
              Concierge Onboarding
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              We&apos;ve helped thousands of clinics make the switch.
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-[#666666]">
              When you switch to Tendo, you don&apos;t have to do it alone. Getting you from signup
              to fully launched and thriving is where our 20+ years of experience really makes the
              difference.
            </p>
          </FadeIn>

          <OnboardingProgressGraphic />

          <div className="mx-auto grid max-w-[1060px] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {ONBOARDING_SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.04}>
                <OnboardingServiceCard service={service} index={i} />
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        {/* Contact sales banner */}
        <SectionShell className="bg-[#f5f5f5] pb-14 md:pb-20">
          <FadeIn>
            <div className="mx-auto max-w-[960px] rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] px-8 py-10 text-center md:px-12 md:py-12">
              <h2 className="mb-6 font-heading text-[1.35rem] font-bold text-white md:text-[1.5rem]">
                Need help choosing the right plan?
              </h2>
              <Link to={ROUTES.landing.contact}>
                <Button
                  variant="primary"
                  size="lg"
                  pill
                  className="min-w-[180px] bg-primary shadow-orange hover:bg-primary/90"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </FadeIn>
        </SectionShell>

        {/* Promo cards — large image LEFT */}
        <SectionShell className="space-y-8 bg-white py-14 md:space-y-10 md:py-20">
          {PROMO_CARDS.map((card) => (
            <PromoCardRow key={card.id} card={card} />
          ))}
        </SectionShell>

        {/* FAQ */}
        <SectionShell className="bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-12">
            <h2 className="font-heading text-[1.75rem] font-bold text-[#1a1a1a] md:text-[2rem]">FAQ</h2>
            <p className="mt-2 text-body-lg text-[#666666]">Common Questions, Clear Answers</p>
          </FadeIn>

          <div className="mx-auto max-w-[820px] space-y-3">
            {PRICING_FAQ_ITEMS.map((item, i) => (
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

        {/* Get in touch CTA */}
        <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
          <FadeIn>
            <h2 className="mx-auto mb-3 max-w-[640px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
              Have questions? We&apos;re here to help.
            </h2>
            <p className="mx-auto mb-8 max-w-[520px] text-body-lg text-white/95">
              Send us an email or give us a call to discuss your clinic software needs.
            </p>
            <Link
              to={ROUTES.landing.contact}
              className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-primary shadow-md transition-colors hover:bg-white/95"
            >
              Get In Touch
            </Link>
          </FadeIn>
        </SectionShell>
      </main>

      <MarketingFooter />
    </div>
  );
}
