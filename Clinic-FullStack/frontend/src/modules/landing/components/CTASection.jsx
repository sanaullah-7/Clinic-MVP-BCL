import { Link } from 'react-router-dom';
import { FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from './SectionShell';

export function CTASection() {
  return (
    <SectionShell className="bg-primary py-16 md:py-20 lg:py-24" innerClassName="text-center">
      <FadeIn>
        <h2 className="mx-auto mb-5 max-w-[720px] text-balance font-heading text-[1.75rem] font-bold leading-snug tracking-tight text-white md:text-[2.125rem] lg:text-[2.375rem]">
          Take your practice to the next level
        </h2>
        <p className="mx-auto mb-10 max-w-[720px] text-[0.9375rem] leading-relaxed text-white/95 md:text-body-lg md:leading-relaxed">
          Streamline workflows, simplify bookings, and deliver exceptional patient care—all with
          unrivaled flexibility and customization using our all-in-one clinic software and EMR.
        </p>
        <Link
          to={ROUTES.auth.register}
          className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-primary shadow-md transition-colors hover:bg-white/95"
        >
          Book a Demo
        </Link>
        <p className="mt-5 text-body-sm text-white/90">
          Get a live tour with one of our Product Experts
        </p>
      </FadeIn>
    </SectionShell>
  );
}
