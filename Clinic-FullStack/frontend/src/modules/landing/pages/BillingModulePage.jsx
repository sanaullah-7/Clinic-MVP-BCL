import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import { CTASection } from '../components/CTASection';
import {
  BillingHeroVisual,
  BillingTrustBadges,
  BillingPaymentsMockup,
  BillingDirectMockup,
  BillingInsightsMockup,
} from '../components/BillingMockups';

const CHECK_COLOR = '#f7803c';

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

export function BillingModulePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Billing Software
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Invoice and bill with confidence
              </h1>
              <p className="mb-6 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Tendo helps you improve billing accuracy and get paid faster, with seamless billing
                integrations and end-to-end solutions designed to unify, automate, and maximize your
                clinic&apos;s revenue.
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
              <BillingTrustBadges />
            </FadeIn>
            <FadeIn delay={0.1}>
              <BillingHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Transition heading */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <SectionHeading
            title="Simplify all your billing workflows with Tendo"
            subtitle="Invoice patients, direct bill insurers, pay staff, accept payments and manage inventory from one platform."
            className="mb-0"
          />
        </SectionShell>

        {/* Feature blocks */}
        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureRow
            title="Accept online payments"
            intro="A fast, easy, and secure way to increase your revenue without adding to your workload."
            items={[
              {
                key: 'pci',
                content: (
                  <>
                    <strong className="font-semibold text-[#1a1a1a]">Secure and PCI compliant:</strong>{' '}
                    Tendo&apos;s integrations meet the highest security standards to protect patient
                    payment data.
                  </>
                ),
              },
              { text: 'Accept credit card pre-payments when appointments are booked' },
              { text: 'Safely store cardholder information for a faster checkout' },
              { text: 'Email and text payment requests to your patients and let them pay online' },
              { text: 'Sell online gift cards from your patient portal' },
              { text: 'Set up recurring invoices on a weekly, monthly, or annual billing cycle' },
            ]}
            visual={<BillingPaymentsMockup />}
          />

          <FeatureRow
            delay={0.08}
            title="Tendo is your hub for direct billing"
            intro="Enjoy one unified place to manage and submit claims directly to insurers with our growing list of seamless integrations:"
            items={[
              { text: 'Claim.MD' },
              { text: 'TELUS Health eClaims' },
              { text: 'HCAI' },
              { text: 'OHIP' },
              { text: 'MSI Health' },
              { text: 'eHealth Saskatchewan' },
              { text: 'Alberta Health' },
              { text: 'Teleplan' },
            ]}
            visual={<BillingDirectMockup />}
          />

          <FeatureRow
            delay={0.12}
            title="Gather actionable insights to grow your business"
            items={[
              {
                text: 'Access 110+ customizable reports on every area of your business and export to CSV or PDF',
              },
              { text: 'View your personal key performance indicators from a single dashboard' },
              { text: 'Filter reports by date, location, discipline, service, and practitioner' },
              { text: 'Grant or restrict access to reports and clinic data' },
              { text: 'Track claims and receivables from one dashboard' },
            ]}
            visual={<BillingInsightsMockup />}
          />
        </SectionShell>

        <CTASection />
      </main>

      <MarketingFooter />
    </div>
  );
}
