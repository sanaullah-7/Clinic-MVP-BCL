import { useState } from 'react';
import { Check, ChevronDown, Cog, LineChart, Target, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import {
  ReportingHeroVisual,
  CentralizeDataMockup,
  PatientInsightsMockup,
  DataProtectionMockup,
  ReportingScaleMockup,
  PartnershipMockup,
} from '../components/ReportingMockups';
import { cn } from '@/lib/cn';

const CHECK_COLOR = '#00a3ad';
const ACCENT_LINE = '#00a3ad';

const FEATURE_SECTIONS = [
  {
    title: 'Centralize your clinic data and see the big picture',
    items: [
      'Access all your data in one secure location.',
      "Get a holistic view of your clinic's performance from every angle.",
      'Monitor key metrics like patient flow, revenue, and expenses in real time.',
      "Generate in-depth reports on every aspect of your clinic's operations.",
    ],
    visual: CentralizeDataMockup,
  },
  {
    title: 'Discover actionable patient insights with advanced analytics',
    items: [
      'Drill down into patient, financial, and operational data in granular detail.',
      'Create highly specific patient segments for targeted marketing.',
      'Filter and customize your reports to focus on what matters most.',
      'Save custom reports for easy access and future analysis.',
    ],
    visual: PatientInsightsMockup,
  },
  {
    title: 'Protect your data, empower your team',
    items: [
      'Customize data and report access by user, role, or location.',
      'Secure sensitive patient information with robust admin controls.',
      'Maintain data integrity with detailed audit logs of user activity.',
    ],
    visual: DataProtectionMockup,
  },
];

const GROWTH_PILLARS = [
  {
    icon: Wallet,
    title: 'Financial Performance',
    description:
      'Track income, expenses, and profitability with comprehensive financial reports that give you a clear picture of your clinic\'s financial health.',
  },
  {
    icon: Cog,
    title: 'Operational Excellence',
    description:
      'Monitor patient flow, staff performance, and clinic productivity to identify bottlenecks and optimize your operations.',
  },
  {
    icon: Target,
    title: 'Patient Insights',
    description:
      'Create customized patient reports to understand behavior patterns and drive targeted marketing and retention strategies.',
  },
  {
    icon: LineChart,
    title: 'Key Day-to-Day Reports',
    description:
      'Access day-end summaries, sales details, patient analytics, and more — over 90 downloadable reports at your fingertips.',
  },
];

const SCALE_ITEMS = [
  {
    id: 'dashboard',
    title: 'Personalized Practitioner Dashboard',
    description:
      'View your personal key performance indicators from a single dashboard — patient visits, revenue, new patients, and more at a glance.',
  },
  {
    id: 'export',
    title: 'Easily Export & Share Data',
    description:
      'Export reports to CSV or PDF and share insights with stakeholders securely and efficiently.',
  },
  {
    id: 'commissions',
    title: 'Commissions Tracking',
    description:
      'Track practitioner commissions and compensation with detailed, customizable commission reports.',
  },
  {
    id: 'integrations',
    title: 'Integrations Optional',
    description:
      'Connect with third-party tools and extend your reporting capabilities as your practice grows.',
  },
];

const TRUST_LOGOS = ['Optimum', 'Healthy Kids IA', 'Closing the Gap', 'Sun Chiropractic', 'Mindler'];

function CheckList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li key={text} className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
          <span className="text-body leading-relaxed text-[#666666]">{text}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureRow({ title, items, visual: Visual, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="order-2 flex items-center justify-center lg:order-1">
        <Visual />
      </div>
      <div className="order-1 lg:order-2">
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem]">
          {title}
        </h3>
        <CheckList items={items} />
      </div>
    </FadeIn>
  );
}

function AwardBadge({ label, year, color }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-[#eee] bg-white px-4 py-3 shadow-sm">
      <span className="text-[10px] font-bold" style={{ color }}>
        {label}
      </span>
      <span className="text-[9px] text-[#666]">{year}</span>
    </div>
  );
}

function ScaleAccordionItem({ item, isOpen, onToggle }) {
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
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-400 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className={cn('pb-6 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0')}>
            <p className="text-body leading-relaxed text-[#666666]">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <SectionShell className="bg-primary py-10 md:py-12" innerClassName="text-center">
      <FadeIn>
        <p className="mb-6 font-heading text-[1.125rem] font-bold text-white md:text-[1.25rem]">
          Trusted by small &amp; enterprise clinics across North America
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {TRUST_LOGOS.map((name) => (
            <span key={name} className="text-sm font-semibold text-white/90 md:text-base">
              {name}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function ReportingPage() {
  const [openScaleId, setOpenScaleId] = useState(SCALE_ITEMS[0].id);

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#00a3ad]">
                Reporting &amp; Analytics
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Make smarter decisions with enterprise-level data insights
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Unify your clinic data. Drill deeper, gain insights from every angle, and uncover hidden
                opportunities to drive your health practice forward.
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
              <ReportingHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Transition */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <SectionHeading
            title="Unleash the power of your data with Tendo"
            className="mb-0"
          />
        </SectionShell>

        {/* Feature blocks */}
        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          {FEATURE_SECTIONS.map((section, i) => (
            <FeatureRow key={section.title} {...section} delay={i * 0.05} />
          ))}
        </SectionShell>

        {/* Testimonial + awards */}
        <SectionShell className="bg-baby-blue/25 py-14 md:py-16">
          <FadeIn className="mx-auto max-w-[820px] text-center">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <AwardBadge label="Software Advice" year="Front Runners 2024" color="#5b2d8e" />
              <AwardBadge label="Capterra" year="Shortlist 2024" color="#044767" />
              <AwardBadge label="GetApp" year="Category Leaders 2024" color="#2d2d2d" />
            </div>
            <blockquote className="text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
              &ldquo;Amazing! Reports are clear and helpful. Our patient retention has improved. Our time
              management has improved, and overall operations have improved.&rdquo;
            </blockquote>
            <p className="mt-4 text-body-sm font-semibold text-[#1a1a1a]">Stephanie M., Clinic Manager</p>
          </FadeIn>
        </SectionShell>

        {/* Growth pillars */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20">
          <SectionHeading
            title="All the data and reporting you need to grow your practice."
            subtitle="We cover the metrics that matter with 90+ downloadable reports."
            className="mb-10 md:mb-14"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {GROWTH_PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.04}>
                <div className="text-center lg:text-left">
                  <pillar.icon className="mx-auto mb-4 h-10 w-10 text-[#1a1a1a] lg:mx-0" strokeWidth={1.5} />
                  <h3 className="mb-2 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">
                    {pillar.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-[#666666] md:text-body">{pillar.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        {/* Partnership */}
        <SectionShell className="bg-[#f5f5f5] py-14 md:py-16">
          <div className="grid items-center gap-8 rounded-2xl bg-[#f0f0f0] p-6 md:grid-cols-2 md:gap-12 md:p-10">
            <FadeIn>
              <PartnershipMockup />
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mb-2 font-heading text-[1.25rem] font-bold text-[#1a1a1a] md:text-[1.5rem]">
                Proud partner of Clinic Accelerator
              </p>
              <p className="text-body leading-relaxed text-[#666666]">
                Tendo partners with Clinic Accelerator to deliver integrated KPIs and benchmarking tools
                that help clinic owners measure performance and accelerate growth.
              </p>
            </FadeIn>
          </div>
        </SectionShell>

        {/* Scale accordion */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
          <SectionHeading title="Built for scale, designed for you." className="mb-10 md:mb-14" />
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <FadeIn>
              <ReportingScaleMockup />
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="lg:pt-4">
                {SCALE_ITEMS.map((item) => (
                  <ScaleAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openScaleId === item.id}
                    onToggle={() => setOpenScaleId((current) => (current === item.id ? null : item.id))}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </SectionShell>

        <TrustBar />
      </main>

      <MarketingFooter />
    </div>
  );
}
