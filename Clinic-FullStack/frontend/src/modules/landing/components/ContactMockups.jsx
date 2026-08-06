import clinicImage from '@/assets/tendo-busy-clinic.webp';
import { cn } from '@/lib/cn';

function Wrap({ children, className }) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[620px] lg:max-w-none lg:scale-[1.05] lg:origin-left xl:scale-[1.1]',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Large clinic photo for contact page left column */
export function ContactHeroVisual() {
  return (
    <Wrap>
      <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
        <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[440px]">
          <img
            src={clinicImage}
            alt="Friendly Tendo clinic team ready to help"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/35 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-body-sm font-semibold uppercase tracking-wide text-white/90">
              We&apos;re here to help
            </p>
            <p className="mt-1 font-heading text-[1.25rem] font-bold text-white md:text-[1.5rem]">
              Real people. Real support.
            </p>
          </div>
        </div>
      </div>
    </Wrap>
  );
}
