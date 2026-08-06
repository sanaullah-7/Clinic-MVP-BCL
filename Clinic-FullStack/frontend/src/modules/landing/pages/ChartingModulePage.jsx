import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import { ChartingIntegrationsSection } from '../components/ChartingIntegrationsSection';
import {
  ChartingHeroVisual,
  ChartingTemplatesMockup,
  ChartingSecurityMockup,
  ChartingSimpleMockup,
  ChartingRecordsMockup,
} from '../components/ChartingMockups';

const CHECK_COLOR = '#00a3ad';

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
      <span className="text-body leading-relaxed text-[#666666]">{children}</span>
    </li>
  );
}

function Subsection({ title, items }) {
  return (
    <div className="mb-6 last:mb-0">
      {title && (
        <h4 className="mb-3 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">{title}</h4>
      )}
      <ul className="space-y-3">
        {items.map((item) => (
          <CheckItem key={item.key ?? item.text}>{item.content ?? item.text}</CheckItem>
        ))}
      </ul>
    </div>
  );
}

function FeatureRow({ title, intro, sections, visual, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="order-2 flex items-center justify-center lg:order-1">{visual}</div>
      <div className="order-1 lg:order-2">
        <h3 className="mb-4 font-heading text-[1.35rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem]">
          {title}
        </h3>
        {intro && (
          <p className="mb-6 text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>
        )}
        {sections.map((section) => (
          <Subsection key={section.title ?? section.items[0]?.key} title={section.title} items={section.items} />
        ))}
      </div>
    </FadeIn>
  );
}

function CapterraTestimonialCard() {
  return (
    <FadeIn>
      <div className="mx-auto max-w-[820px] rounded-2xl bg-baby-blue/35 px-6 py-10 text-center md:px-12 md:py-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#044767] px-4 py-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#ff9d28" />
            <path d="M14 8.5a4 4 0 1 0 0 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="text-[12px] font-semibold text-white">Reviewed on Capterra</span>
        </div>
        <blockquote className="mb-6 text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
          &ldquo;My biggest issue with other EMR software systems is that they are very restrictive. The
          ability to modify, deny, allow, and create through Tendo is exceptional. Overall, a very
          versatile platform.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white">
            NN
          </div>
          <div className="text-left">
            <p className="text-body-sm font-semibold text-[#1a1a1a]">Sarah</p>
            <p className="text-caption text-[#666]">Operations Manager</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function InlineTestimonial() {
  return (
    <FadeIn>
      <div className="mx-auto max-w-[680px] text-center">
        <blockquote className="mb-6 text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
          &ldquo;The online portal and the reception flow is excellent. Charting is very customizable.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-baby-blue to-soft-pink text-sm font-bold text-text-primary">
            RB
          </div>
          <div className="text-left">
            <p className="text-body-sm font-semibold text-[#1a1a1a]">Russell Baron</p>
            <p className="text-caption text-[#666]">Sun Chiropractic (Manitoba, CA)</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function DisciplineCTA() {
  return (
    <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
      <FadeIn>
        <h2 className="mx-auto mb-8 max-w-[780px] text-balance font-heading text-[1.5rem] font-bold leading-snug text-white md:text-[1.875rem] lg:text-[2rem]">
          Tailored for Physiotherapy, Chiropractic Medicine, Massage Therapy, Mental Health, and more
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

export function ChartingModulePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#00a3ad]">
                Charting &amp; EMR
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Work smarter with AI charting &amp; leading-edge EMR tools
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Secure, versatile, and now smarter with AI-enhanced charting, in-app patient messaging,
                HD Telehealth, and home exercise programs.
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
              <ChartingHeroVisual />
            </FadeIn>
          </div>
        </SectionShell>

        {/* Transition heading */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <SectionHeading
            title="Charting that's simple, private, and puts you in control—now enhanced with AI to save you hours"
            className="mb-0"
          />
        </SectionShell>

        {/* Feature blocks */}
        <SectionShell className="space-y-20 bg-white py-14 md:space-y-28 md:py-20 lg:py-24">
          <FeatureRow
            title="Enjoy charting again with AI & personalized templates"
            intro="Simplify forms, charting, and electronic medical records for your entire team."
            sections={[
              {
                items: [
                  {
                    key: 'library',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Pre-Built Library:</strong>{' '}
                        Explore a library of multi-disciplinary templates designed by industry experts.
                      </>
                    ),
                  },
                  {
                    key: 'builder',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Drag-and-Drop Builder:</strong>{' '}
                        Customize charts &amp; forms to perfectly match your preferences and workflows.
                      </>
                    ),
                  },
                ],
              },
              {
                title: 'Streamlined Patient Intake: Accelerate the intake process with automation.',
                items: [
                  {
                    key: 'forms',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Automated Forms &amp; Surveys:</strong>{' '}
                        Send automated surveys and intake forms before appointments.
                      </>
                    ),
                  },
                  {
                    key: 'booking',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Booking Prompts:</strong>{' '}
                        Prompt patients to complete forms during the online booking process.
                      </>
                    ),
                  },
                ],
              },
              {
                title: 'AI-Powered Charting: Everything about charting is more efficient with Tendo AI.',
                items: [
                  {
                    key: 'summaries',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">AI-Powered Summaries:</strong>{' '}
                        Tendo AI instantly summarizes patient charts, saving you hours of time.
                      </>
                    ),
                  },
                  {
                    key: 'scribe',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">AI Scribe:</strong>{' '}
                        Transcribe your notes and instantly generate SOAP notes and telehealth meeting
                        transcripts.
                      </>
                    ),
                  },
                ],
              },
            ]}
            visual={<ChartingTemplatesMockup />}
          />

          <FeatureRow
            delay={0.06}
            title="Tendo uses industry-leading security practices to safeguard patient data"
            intro="Tendo always prioritizes the security of your data and meets the highest standards of compliance, including HIPAA, PIPEDA, PHIPA and PCI."
            sections={[
              {
                title: 'Packed with security features such as:',
                items: [
                  { text: 'Two-Step Verification' },
                  { text: '99.99% Uptime Guarantee' },
                  { text: '256-bit Encryption' },
                ],
              },
              {
                title: 'Control who sees what for confidentiality and simplicity:',
                items: [
                  {
                    key: 'permissions',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Set Permissions:</strong>{' '}
                        With customizable permissions, you can decide who on your team can access
                        features, patient records, documentation, reports, and more.
                      </>
                    ),
                  },
                ],
              },
            ]}
            visual={<ChartingSecurityMockup />}
          />

          <FeatureRow
            delay={0.1}
            title="Tendo makes charting simpler"
            intro="Say goodbye to busywork with innovative charting features in Tendo:"
            sections={[
              {
                title: 'Fast and Efficient',
                items: [
                  { text: 'Begin a new chart with just a click' },
                  { text: 'Duplicate and edit charts in seconds' },
                  { text: 'Auto-phrases save you time typing' },
                  { text: 'Everything saves automatically; no need to worry' },
                ],
              },
              {
                title: 'Easy to Use Anywhere',
                items: [
                  { text: 'Personalized charting dashboard for quick access' },
                  { text: 'Work seamlessly on any device, anywhere' },
                ],
              },
              {
                title: 'Patient Information at Your Fingertips',
                items: [
                  { text: 'Access full patient history from any chart view' },
                  { text: 'View allergies, medications, and alerts while charting' },
                ],
              },
            ]}
            visual={<ChartingSimpleMockup />}
          />

          <FeatureRow
            delay={0.14}
            title="Effortlessly manage patient information"
            intro="Find, share, and export electronic medical records in seconds, all within a secure and compliant platform."
            sections={[
              {
                items: [
                  {
                    key: 'search',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Quick Search &amp; Filter:</strong>{' '}
                        Easily sort patient notes by date, practitioner, complaint, or keyword.
                      </>
                    ),
                  },
                ],
              },
              {
                title: 'Easy to Share Information',
                items: [
                  {
                    key: 'share',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Securely Share Charts:</strong>{' '}
                        Make co-treating easier while maintaining data privacy based on the user access
                        permissions you&apos;ve set.
                      </>
                    ),
                  },
                  {
                    key: 'convert',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Automatic Conversion:</strong>{' '}
                        Convert charts to referral and consult letters automatically.
                      </>
                    ),
                  },
                  {
                    key: 'fax',
                    content: (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">Fax Directly from Charts:</strong>{' '}
                        No need to switch apps. Export letters and patient notes to PDF and fax directly
                        in-app.
                      </>
                    ),
                  },
                ],
              },
            ]}
            visual={<ChartingRecordsMockup />}
          />
        </SectionShell>

        {/* Testimonial 1 */}
        <SectionShell className="bg-white py-14 md:py-16">
          <CapterraTestimonialCard />
        </SectionShell>

        <ChartingIntegrationsSection />

        {/* Testimonial 2 */}
        <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-16">
          <InlineTestimonial />
        </SectionShell>

        <DisciplineCTA />
      </main>

      <MarketingFooter />
    </div>
  );
}
