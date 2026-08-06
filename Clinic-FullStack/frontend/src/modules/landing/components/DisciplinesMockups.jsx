import clinicImage from '@/assets/tendo-busy-clinic.webp';
import { cn } from '@/lib/cn';

function Wrap({ children, className }) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[620px] lg:max-w-none lg:scale-[1.08] lg:origin-left xl:scale-[1.15]',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Hero — large multidisciplinary clinic photo left */
export function DisciplinesHeroVisual() {
  return (
    <Wrap>
      <div className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute inset-y-[6%] left-0 w-[94%] overflow-hidden rounded-[999px] shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
          <img
            src={clinicImage}
            alt="Multidisciplinary clinic team at work"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/15 to-transparent" />
        </div>

        <div className="absolute bottom-6 right-0 z-10 w-[44%] max-w-[220px] overflow-hidden rounded-2xl border border-[#e8ecea] bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.14)]">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[#00a3ad]">
            Any discipline
          </p>
          <div className="space-y-2">
            {['Physical Therapy', 'Chiropractic', 'Massage Therapy', 'Mental Health'].map((label) => (
              <div
                key={label}
                className="rounded-lg bg-gradient-to-r from-baby-blue/40 to-soft-pink/30 px-3 py-2 text-[11px] font-semibold text-[#1a1a1a]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}
