import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import {
  ADCampaignOverviewMockup,
  ADBillingMockup,
  ADHeroVisual,
  ADPatientLookupMockup,
  ADPortalDevicesMockup,
  ADReportsMockup,
  ADScheduleMockup,
} from '../components/AdministratorMockups';
import {
  AD_FEATURE_ROWS,
  AD_HERO,
  AD_PATIENT_LOOKUP,
  AD_TESTIMONIALS,
} from '../data/administrator-data';
import { cn } from '@/lib/cn';

const FEATURE_MOCKUPS = {
  scheduling: ADScheduleMockup,
  billing: ADBillingMockup,
  portal: ADPortalDevicesMockup,
  communications: ADCampaignOverviewMockup,
  reports: ADReportsMockup,
};

function MockupWrap({ children }) {
  return (
    <div className="flex items-center justify-center lg:justify-start">{children}</div>
  );
}

function FeatureRow({ title, intro, link, visual: Visual, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20"
    >
      <MockupWrap>
        <Visual />
      </MockupWrap>
      <div className="lg:pl-2">
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem] lg:text-[1.65rem]">
          {title}
        </h3>
        <p className="text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>
        {link && (
          <Link
            to={link.to}
            className="group mt-6 inline-flex items-center gap-2.5 text-body font-semibold text-[#1a1a1a] hover:text-primary"
          >
            {link.label}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1a1a1a] transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        )}
      </div>
    </FadeIn>
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
            title={row.title}
            intro={row.intro}
            link={row.link}
            visual={Visual}
            delay={(startIndex + i) * 0.05}
          />
        </div>
      </div>
    );
  });
}

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const visible = [AD_TESTIMONIALS[index], AD_TESTIMONIALS[(index + 1) % AD_TESTIMONIALS.length]];

  return (
    <SectionShell className="bg-white py-14 md:py-20">
      <FadeIn>
        <div className="relative mx-auto max-w-[960px] rounded-2xl bg-baby-blue px-6 py-10 md:px-10 md:py-12">
          <span className="mb-6 block text-5xl font-serif leading-none text-[#00a3ad]/40">&ldquo;</span>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {visible.map((item) => (
              <div key={item.name}>
                <blockquote className="mb-4 text-[1rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.05rem]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="text-body-sm font-semibold text-[#1a1a1a]">{item.name}</p>
                <p className="text-caption text-[#666666]">{item.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00a3ad]/30 text-[#00a3ad] hover:bg-[#00a3ad]/10"
              onClick={() => setIndex((i) => (i === 0 ? AD_TESTIMONIALS.length - 1 : i - 1))}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00a3ad]/30 text-[#00a3ad] hover:bg-[#00a3ad]/10"
              onClick={() => setIndex((i) => (i + 1) % AD_TESTIMONIALS.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function AdministratorPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <ADHeroVisual />
            </FadeIn>
            <FadeIn delay={0.08} className="order-1 lg:order-2 lg:pl-4 xl:pl-8">
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                {AD_HERO.eyebrow}
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                {AD_HERO.title}
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">{AD_HERO.subtitle}</p>
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
            </FadeIn>
          </div>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-14">
            <h2 className="mx-auto mb-4 max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              {AD_PATIENT_LOOKUP.title}
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-[#666666]">{AD_PATIENT_LOOKUP.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <ADPatientLookupMockup />
          </FadeIn>
        </SectionShell>

        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureBlock rows={AD_FEATURE_ROWS} />
        </SectionShell>

        <TestimonialCarousel />

        <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
          <FadeIn>
            <h2 className="mx-auto mb-8 max-w-[720px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
              See how Tendo makes every admin task faster and easier.
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
