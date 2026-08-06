import { Link } from 'react-router-dom';
import { Play, Cloud, Monitor, Smartphone, Apple } from 'lucide-react';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { ProductShowcase } from './ProductShowcase';
import { SectionShell } from './SectionShell';

export function HeroSection() {
  return (
    <SectionShell
      as="section"
      className="bg-gradient-hero pb-4 pt-10 md:pb-6 md:pt-14 lg:pt-16"
      innerClassName="text-center"
    >
      <FadeIn>
        <h1 className="mx-auto mb-5 max-w-[820px] text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.75rem] lg:text-[3.25rem]">
          Flexible clinic management software for your{' '}
          <span className="hero-accent">growing</span> practice
        </h1>

        <p className="mx-auto mb-8 max-w-[640px] text-body-lg font-normal leading-[1.65] text-[#666666] md:mb-10">
          Simplify workflows, improve the patient experience, and manage your entire allied health
          practice with Tendo, all-in-one EMR &amp; clinic software.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link to={ROUTES.demo.book}>
            <Button
              variant="primary"
              size="lg"
              pill
              className="min-w-[180px] text-base font-semibold shadow-orange"
            >
              Book a Demo
            </Button>
          </Link>
          <Link to={ROUTES.landing.features}>
            <Button
              variant="outline"
              size="lg"
              pill
              className="min-w-[160px] gap-2 border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] hover:bg-white/90"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Video
            </Button>
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-body-sm text-[#666666] md:mb-10">
          <span className="flex items-center gap-1.5">
            <Cloud className="h-4 w-4" /> Cloud-based
          </span>
          <span className="hidden text-[#cccccc] sm:inline">|</span>
          <span className="flex items-center gap-2">
            Runs on
            <Monitor className="h-4 w-4" aria-label="Windows" />
            <Apple className="h-4 w-4" aria-label="Mac" />
            <Smartphone className="h-4 w-4" aria-label="Mobile" />
          </span>
        </div>
      </FadeIn>

      <ProductShowcase />
    </SectionShell>
  );
}
