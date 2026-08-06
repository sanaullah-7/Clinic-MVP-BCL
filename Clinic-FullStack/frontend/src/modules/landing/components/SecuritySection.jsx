import { Award } from 'lucide-react';
import { FadeIn } from '@/components';
import { SectionShell } from './SectionShell';

import { BRAND_COLORS } from '@/constants/design-tokens';

const BADGES = [
  'HIPAA, PIPEDA & PCI Compliance',
  'Two-Factor Authentication',
  '99.99% Uptime SLA',
  '256-Bit Encryption',
];

export function SecuritySection() {
  return (
    <SectionShell className="bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        <FadeIn className="flex justify-center md:justify-start">
          <img
            src="/security-shield.png"
            alt=""
            width={280}
            height={280}
            className="h-auto w-[220px] max-w-full sm:w-[250px] md:w-[280px]"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="mb-6 text-left font-heading text-[1.3rem] font-bold leading-[1.38] tracking-tight text-[#1a1a1a] sm:text-[1.4rem] md:mb-8 md:text-[1.5rem] lg:text-[1.625rem] lg:leading-[1.35]">
            Be confident knowing that all our practice management solutions are aligned with global
            security and performance standards
          </h2>

          <ul className="space-y-4 md:space-y-[1.125rem]">
            {BADGES.map((label) => (
              <li key={label} className="flex items-center gap-3">
                <Award
                  className="h-5 w-5 flex-shrink-0 md:h-[22px] md:w-[22px]"
                  style={{ color: BRAND_COLORS.babyBlueDeep }}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-[0.9375rem] font-medium leading-snug text-[#1a1a1a] md:text-[1rem]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
