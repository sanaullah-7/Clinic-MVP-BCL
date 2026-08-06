import { HousePlus, Stethoscope, Building2, Check } from 'lucide-react';
import { FadeIn } from '@/components';
import { SectionShell, SectionHeading } from './SectionShell';

import { BRAND_COLORS } from '@/constants/design-tokens';

const PRACTICE_SEGMENTS = [
  {
    icon: HousePlus,
    title: 'Small Practices',
    items: ['Sole Practitioners', '2-4 Staff', 'Simple Workflows'],
  },
  {
    icon: Stethoscope,
    title: 'Any Discipline',
    items: [
      'Physical Therapists',
      'Chiropractors',
      'Massage Therapists',
      'Doctors',
      'Surgeons',
      'Psychologists',
      'Family Therapists',
      'Speech Pathologists',
      'Naturopaths',
      'Occupational Therapists',
      'Nurse Practitioners',
    ],
  },
  {
    icon: Building2,
    title: 'Enterprise',
    items: [
      'Multiple Clinic Locations',
      '50+ Staff',
      'Multi-Disciplinary Clinics',
      'Specialized Workflows',
      'Strict Compliance Requirements',
      'Surgical Centers',
    ],
  },
];

function SegmentIcon({ Icon }) {
  return (
    <div
      className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl shadow-md"
      style={{ background: `linear-gradient(180deg, ${BRAND_COLORS.orange} 0%, ${BRAND_COLORS.babyBlueDeep} 100%)` }}
    >
      <Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-left">
      <span
        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: BRAND_COLORS.orange }}
      >
        <Check className="h-3 w-3 text-white" strokeWidth={3} />
      </span>
      <span className="text-body text-[#333333]">{children}</span>
    </li>
  );
}

export function PracticeSizesSection() {
  return (
    <SectionShell className="bg-white py-14 md:py-20 lg:py-24">
      <SectionHeading
        title="Built for growing practices with multiple practitioners, locations, and disciplines"
        subtitle="As your business evolves, so does Tendo. Whether you want to expand or simplify your processes, we have a clinic management solution to help."
        className="mb-10 md:mb-14"
      />

      <div className="grid gap-12 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {PRACTICE_SEGMENTS.map((segment, i) => {
          const Icon = segment.icon;
          return (
            <FadeIn key={segment.title} delay={i * 0.08}>
              <div className="mx-auto flex max-w-xs flex-col items-center sm:max-w-none">
                <SegmentIcon Icon={Icon} />
                <h3 className="mb-6 text-center font-heading text-h4 font-bold text-[#1a1a1a]">
                  {segment.title}
                </h3>
                <ul className="w-full max-w-[260px] space-y-3">
                  {segment.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
