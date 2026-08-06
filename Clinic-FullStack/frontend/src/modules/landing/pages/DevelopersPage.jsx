import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell, SectionHeading } from '../components/SectionShell';
import {
  CommunicationsApiMockup,
  DataPointsMockup,
  PartnerAppsMockup,
} from '../components/DevelopersMockups';

function FeatureRow({ visual: Visual, title, intro, link, delay = 0 }) {
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
        {intro && (
          <p className="mb-5 text-body leading-relaxed text-[#666666] md:text-body-lg">{intro}</p>
        )}
        {link && (
          <Link
            to={link.to}
            className="group inline-flex items-center gap-2.5 text-body font-semibold text-primary hover:underline"
          >
            {link.label}
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        )}
      </div>
    </FadeIn>
  );
}

function DocumentationBar() {
  return (
    <SectionShell className="bg-[#f5f5f5] py-10 md:py-12">
      <FadeIn>
        <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between gap-6 rounded-2xl border border-[#e8ecea] bg-white px-6 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:flex-row md:px-10 md:py-7">
          <p className="text-center text-body font-medium text-[#1a1a1a] sm:text-left md:text-body-lg">
            Learn about Tendo API core concepts, troubleshooting, and more
          </p>
          <a
            href="https://docs.tendo.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-primary px-8 py-3 text-body-sm font-semibold text-white shadow-orange transition-colors hover:bg-primary/90 md:text-body"
          >
            See Documentation
          </a>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

function DeveloperRegistrationForm() {
  const formRef = useRef(null);

  return (
    <SectionShell
      id="get-api"
      className="bg-primary py-14 md:py-16 lg:py-20"
      innerClassName="max-w-[720px]"
    >
      <FadeIn>
        <h2 className="mb-10 text-center font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
          Start building your custom integration today
        </h2>

        <form
          ref={formRef}
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="dev-name" className="mb-1.5 block text-body-sm font-semibold text-white">
                Name
              </label>
              <input
                id="dev-name"
                name="name"
                type="text"
                placeholder="John Smith"
                className="h-11 w-full rounded-lg border-0 bg-white px-4 text-body text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label htmlFor="dev-email" className="mb-1.5 block text-body-sm font-semibold text-white">
                Email
              </label>
              <input
                id="dev-email"
                name="email"
                type="email"
                placeholder="johnsmith@email.com"
                className="h-11 w-full rounded-lg border-0 bg-white px-4 text-body text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="dev-company" className="mb-1.5 block text-body-sm font-semibold text-white">
                Company Name
              </label>
              <input
                id="dev-company"
                name="company"
                type="text"
                placeholder="John Smith Inc."
                className="h-11 w-full rounded-lg border-0 bg-white px-4 text-body text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label htmlFor="dev-website" className="mb-1.5 block text-body-sm font-semibold text-white">
                Website URL
              </label>
              <input
                id="dev-website"
                name="website"
                type="url"
                placeholder="johnsmithinc.com"
                className="h-11 w-full rounded-lg border-0 bg-white px-4 text-body text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="dev-audience" className="mb-1.5 block text-body-sm font-semibold text-white">
              Your Target Audience
            </label>
            <input
              id="dev-audience"
              name="audience"
              type="text"
              placeholder="Who will be using the API?"
              className="h-11 w-full rounded-lg border-0 bg-white px-4 text-body text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label htmlFor="dev-description" className="mb-1.5 block text-body-sm font-semibold text-white">
              Brief description of proposed integration
            </label>
            <textarea
              id="dev-description"
              name="description"
              rows={4}
              placeholder="How do you plan to use our API?"
              className="w-full resize-y rounded-lg border-0 bg-white px-4 py-3 text-body text-[#1a1a1a] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div className="flex justify-center pt-2">
            <div className="flex items-center gap-3 rounded border border-[#ddd] bg-[#f9f9f9] px-4 py-3 shadow-sm">
              <div className="h-6 w-6 rounded border-2 border-[#ccc] bg-white" aria-hidden />
              <span className="text-body-sm text-[#666666]">I&apos;m not a robot</span>
              <div className="ml-4 flex flex-col items-center">
                <div className="h-8 w-8 rounded bg-[#1a73e8]/20" aria-hidden />
                <span className="text-[8px] text-[#999]">reCAPTCHA</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-10 py-3.5 text-base font-semibold text-primary shadow-md transition-colors hover:bg-white/95"
            >
              Get Started
            </button>
          </div>
        </form>
      </FadeIn>
    </SectionShell>
  );
}

export function DevelopersPage() {
  const formSectionRef = useRef(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero — centered per screenshot */}
        <SectionShell className="bg-white py-14 md:py-20 lg:py-24">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-heading text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#1a1a1a] md:text-[2.75rem] lg:text-[3rem]">
              Developer Zone
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-body-lg leading-relaxed text-[#666666] md:text-[1.125rem]">
              Connect to your favourite applications with our open API.
            </p>
            <Button
              variant="primary"
              size="lg"
              pill
              className="min-w-[180px] shadow-orange"
              onClick={scrollToForm}
            >
              Get The API
            </Button>
          </FadeIn>
        </SectionShell>

        {/* Feature section */}
        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <SectionHeading
            title="Easily build integrations specifically designed for your clinic"
            subtitle="Share data across third-party platforms you already use."
            className="mb-14 md:mb-16"
          />

          <div className="mx-auto max-w-[1060px] space-y-16 md:space-y-20 lg:space-y-24">
            <FeatureRow
              visual={DataPointsMockup}
              title="Push and pull a wide selection of data points"
              delay={0}
            />
            <FeatureRow
              visual={PartnerAppsMockup}
              title="Connect accounting and scheduling applications, and more!"
              delay={0.05}
            />
            <FeatureRow
              visual={CommunicationsApiMockup}
              title="Integrate to Tendo Comm for automated patient SMS and email marketing"
              intro="Use the Tendo API to access automated messaging features even if you use a different management platform. Build custom workflows that connect patient communications to your existing tools."
              link={{
                label: 'Explore Tendo Comm',
                to: ROUTES.landing.communicationsModule,
              }}
              delay={0.1}
            />
          </div>
        </SectionShell>

        <DocumentationBar />

        <div ref={formSectionRef}>
          <DeveloperRegistrationForm />
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
