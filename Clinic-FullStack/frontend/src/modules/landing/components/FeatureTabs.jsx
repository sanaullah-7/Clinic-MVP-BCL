import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components';
import { PLATFORM_FEATURES } from '../data/features';
import { FeatureMockup } from './FeatureMockup';
import { SectionShell, SectionHeading } from './SectionShell';
import { cn } from '@/lib/cn';

import { BRAND_COLORS } from '@/constants/design-tokens';

const ACCENT = BRAND_COLORS.orange;

export function FeatureTabs() {
  const [activeId, setActiveId] = useState(PLATFORM_FEATURES[0].id);
  const active = PLATFORM_FEATURES.find((f) => f.id === activeId) ?? PLATFORM_FEATURES[0];

  return (
    <SectionShell className="bg-white py-14 md:py-20 lg:py-24">
      <SectionHeading title="Grow your practice faster with one platform" className="mb-8 md:mb-10" />

      <FadeIn delay={0.05} className="mb-10 md:mb-14">
        <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            className="mx-auto flex w-max min-w-full items-center justify-start gap-1 rounded-full bg-[#f0f0f0] p-1.5 sm:justify-center md:p-2"
            aria-label="Platform features"
          >
            {PLATFORM_FEATURES.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveId(feature.id)}
                className={cn(
                  'whitespace-nowrap rounded-full px-3 py-2 text-body-sm font-medium transition-all duration-200 md:px-4 md:py-2.5',
                  activeId === feature.id
                    ? 'bg-white shadow-sm'
                    : 'text-[#1a1a1a] hover:opacity-80',
                )}
                style={activeId === feature.id ? { color: ACCENT } : undefined}
              >
                {feature.title}
                {feature.starred && (
                  <span className="ml-0.5 text-caption" aria-hidden="true">
                    ★
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </FadeIn>

      <FadeIn key={activeId} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="order-2 lg:order-1">
          {active.premium && (
            <span
              className="mb-4 inline-block rounded-md px-3 py-1 text-caption font-semibold text-[#1a1a1a]"
              style={{ backgroundColor: BRAND_COLORS.babyBlue }}
            >
              Premium Feature
            </span>
          )}

          <h3 className="mb-6 text-[1.25rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.5rem]">
            {active.subtitle}
          </h3>

          <ul className="mb-8 space-y-3.5">
            {active.bullets.map((bullet) => {
              const isRich = typeof bullet === 'object';
              return (
                <li key={isRich ? bullet.title : bullet} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={2.5} />
                  <span className="text-body leading-relaxed text-[#444444]">
                    {isRich ? (
                      <>
                        <strong className="font-semibold text-[#1a1a1a]">{bullet.title}:</strong>{' '}
                        {bullet.desc}
                      </>
                    ) : (
                      bullet
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          <Link to="/dashboard">
            <button
              type="button"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#1a1a1a] bg-white px-6 py-3 text-body-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
            >
              {active.cta}
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1a1a1a] transition-colors group-hover:bg-[#1a1a1a] group-hover:text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <FeatureMockup featureId={active.id} />
        </div>
      </FadeIn>
    </SectionShell>
  );
}
