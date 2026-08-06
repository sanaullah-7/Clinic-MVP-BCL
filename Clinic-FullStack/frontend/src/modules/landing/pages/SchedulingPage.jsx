import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import { CTASection } from '../components/CTASection';
import { SchedulingTailorSection } from '../components/SchedulingTailorSection';
import {
  SchedulingHeroVisual,
  SchedulingActionMockup,
  SchedulingAlertsMockup,
  SchedulingDashboardMockup,
} from '../components/SchedulingMockups';

const CHECK_COLOR = '#00a3ad';

function CheckList({ intro, items }) {
  return (
    <div>
      {intro && (
        <p className="mb-4 text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>
      )}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.key ?? item.text} className="flex items-start gap-3">
            <Check
              className="mt-0.5 h-5 w-5 flex-shrink-0"
              style={{ color: CHECK_COLOR }}
              strokeWidth={2.5}
            />
            <span className="text-body leading-relaxed text-[#666666]">{item.content ?? item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureRow({ title, intro, items, visual, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="order-2 flex items-center justify-center lg:order-1">{visual}</div>
      <div className="order-1 lg:order-2">
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem]">
          {title}
        </h3>
        <CheckList intro={intro} items={items} />
      </div>
    </FadeIn>
  );
}

export function SchedulingPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Scheduling
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Seamless scheduling. Happier patients.
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Keep everyone&apos;s day running smoothly. Streamline appointments, customize workflows,
                and effortlessly manage clinic-wide activities with Tendo.
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
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SchedulingHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Transition heading */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <SectionHeading
            title="Easily manage appointments from one organized dashboard"
            subtitle="Get a clear, bird's-eye view of your clinic schedule and accomplish everyday tasks with ease."
            className="mb-0"
          />
        </SectionShell>

        {/* Feature blocks */}
        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureRow
            title="Taking action is simple"
            intro="From the schedule, you're always just a click away from:"
            items={[
              {
                key: 'book',
                content: (
                  <>
                    Booking and managing appointments with our{' '}
                    <strong className="font-semibold text-primary">clinic software</strong>
                  </>
                ),
              },
              { text: 'Switching between multiple clinic location schedules' },
              { text: 'Verifying patient insurance coverage for services' },
              { text: 'Accessing and updating patient medical records in your EMR' },
              { text: 'Generating invoices and processing payments' },
              { text: 'Sending automated reminders to patients' },
            ]}
            visual={<SchedulingActionMockup />}
          />

          <FeatureRow
            delay={0.08}
            title="Stay informed with real-time updates and alerts"
            items={[
              { text: 'Instantly see new online bookings to prevent double-booking mishaps' },
              {
                text: 'Receive private alerts about patient details like allergies, preferences, outstanding invoices, and more',
              },
            ]}
            visual={<SchedulingAlertsMockup />}
          />

          <FeatureRow
            delay={0.12}
            title="One dashboard for complete visibility"
            intro="Practitioners can rely on their personal dashboard to effectively plan their day."
            items={[
              { text: 'Review patient profiles for upcoming appointments in your EMR' },
              { text: 'Update charting with a real-time list of uncharted visits' },
              { text: 'Tackle your to-do list with ease' },
              { text: "Identify patients who haven't rebooked and send them quick reminders" },
              { text: 'Access key metrics like PVA, active patient count, and new patients at a glance' },
            ]}
            visual={<SchedulingDashboardMockup />}
          />
        </SectionShell>

        <SchedulingTailorSection />

        <CTASection />
      </main>

      <MarketingFooter />
    </div>
  );
}
