import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { HeroSection } from '../components/HeroSection';
import { TrustSlider } from '../components/TrustSlider';
import { FeatureTabs } from '../components/FeatureTabs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PracticeSizesSection } from '../components/PracticeSizesSection';
import { TailorSection } from '../components/TailorSection';
import { SecuritySection } from '../components/SecuritySection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';

/** Landing page — Tendo marketing sections in product order */
export function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />
      <main>
        <HeroSection />
        <TrustSlider />
        <FeatureTabs />
        <TestimonialsSection />
        <PracticeSizesSection />
        <TailorSection />
        <SecuritySection />
        <IntegrationsSection />
        <FAQSection />
        <CTASection />
      </main>
      <MarketingFooter />
    </div>
  );
}
