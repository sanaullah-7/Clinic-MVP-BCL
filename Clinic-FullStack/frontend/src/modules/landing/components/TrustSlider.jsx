import { FadeIn } from '@/components';
import { SectionShell } from './SectionShell';

const CLINIC_LOGOS = [
  'Regina Speech Centre',
  'Ottawa Physiotherapy and Sports Clinics',
  'University of Alberta',
  'MedRehab Physiotherapy',
  'Optimum Wellness Centres',
  'ClearPoint Health Network',
  'Academy Massage Therapy',
  'South Gaetz Chiropractic Clinic',
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#ffb800] md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TrustSlider() {
  return (
    <SectionShell className="border-y border-[#eeeeee] bg-white py-8 md:py-10">
      <FadeIn>
        <div className="mb-8 flex flex-col items-center justify-center gap-3 px-2 text-center sm:flex-row sm:gap-4 md:mb-10">
          <Stars />
          <p className="max-w-3xl text-body text-[#333333] md:text-body-lg">
            &ldquo;Five-star experience. Patient text messaging feature is phenomenal!&rdquo;{' '}
            <span className="font-medium text-[#1a1a1a]">– Milay, PT</span>
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-10 md:gap-14">
            {[...CLINIC_LOGOS, ...CLINIC_LOGOS].map((name, i) => (
              <span
                key={i}
                className="flex-shrink-0 whitespace-nowrap font-heading text-body-sm font-semibold tracking-wide text-[#999999] md:text-body"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
