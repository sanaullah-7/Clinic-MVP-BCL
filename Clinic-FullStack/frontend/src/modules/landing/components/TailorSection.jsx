import { FadeIn } from '@/components';
import { SectionShell } from './SectionShell';
import clinicImage from '@/assets/tendo-busy-clinic.webp';

/** Tendo tailor block — clinic lifestyle with monitor in scene */
const CLINIC_IMAGE = clinicImage;

function TailorCopy() {
  return (
    <div className="w-[92%] max-w-[900px] rounded-2xl border border-white/90 bg-white/[0.92] px-6 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-[10px] sm:px-10 sm:py-9 md:px-14 md:py-10 lg:px-16">
      <h2 className="mb-3 text-center font-heading text-[1.375rem] font-bold leading-[1.28] tracking-[-0.02em] text-black sm:text-[1.625rem] md:mb-4 md:text-[1.875rem] lg:text-[2rem]">
        Tailor Tendo for your practice, staff, and brand
      </h2>
      <p className="mx-auto max-w-[680px] text-center text-[0.9375rem] font-normal leading-[1.68] text-[#2d2d2d] md:text-[1.0625rem] md:leading-[1.72]">
        Your clinic is unique which is why we made Tendo flexible. Custom settings give you the
        freedom to implement your branding and workflows so you feel right at home.
      </p>
    </div>
  );
}

/**
 * Tendo tailor block — compact image + frosted overlay, no extra scroll gap.
 */
export function TailorSection() {
  return (
    <SectionShell
      className="bg-white py-12 md:py-16 lg:py-20"
      aria-label="Tailor Tendo for your practice"
    >
      <FadeIn>
        <div className="image-overlay-block relative mx-auto w-full overflow-hidden rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] md:rounded-2xl">
          <img
            src={CLINIC_IMAGE}
            alt="Tendo clinic software on a desktop in a busy clinic"
            className="aspect-[16/10] w-full object-cover object-center sm:aspect-[16/9]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 py-8 sm:px-6 md:px-8">
            <TailorCopy />
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
