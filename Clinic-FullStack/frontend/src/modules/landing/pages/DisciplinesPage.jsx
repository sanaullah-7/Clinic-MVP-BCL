import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import { DisciplinesHeroVisual } from '../components/DisciplinesMockups';
import { DISCIPLINE_CARDS, DISCIPLINES_HERO } from '../data/disciplines-data';
import { cn } from '@/lib/cn';

function DisciplineCard({ card, delay = 0 }) {
  const inner = (
    <div
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-[#e8ecea] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 md:p-7',
        card.live && 'hover:-translate-y-1 hover:border-[#00a3ad]/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]',
      )}
    >
      <h3 className="mb-3 font-heading text-[1.125rem] font-bold text-[#1a1a1a] md:text-[1.25rem]">
        {card.title}
      </h3>
      <p className="mb-5 flex-1 text-body leading-relaxed text-[#666666]">{card.description}</p>
      {card.live ? (
        <span className="inline-flex items-center gap-2 text-body-sm font-semibold text-[#00a3ad] group-hover:gap-3">
          Learn more
          <ArrowRight className="h-4 w-4" />
        </span>
      ) : (
        <span className="text-body-sm font-medium text-[#999999]">Coming soon</span>
      )}
    </div>
  );

  return (
    <FadeIn delay={delay}>
      {card.live ? (
        <Link to={card.to} className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </FadeIn>
  );
}

export function DisciplinesPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <DisciplinesHeroVisual />
            </FadeIn>
            <FadeIn delay={0.08} className="order-1 lg:order-2 lg:pl-4 xl:pl-8">
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Solutions by discipline
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                {DISCIPLINES_HERO.title}
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                {DISCIPLINES_HERO.subtitle}
              </p>
              <Link to={ROUTES.auth.register}>
                <Button variant="primary" size="lg" pill className="min-w-[160px] shadow-orange">
                  Book a Demo
                </Button>
              </Link>
            </FadeIn>
          </div>
        </SectionShell>

        <SectionShell className="border-t border-[#eeeeee] bg-[#f5f5f5] py-14 md:py-20 lg:py-24">
          <FadeIn className="mb-10 text-center md:mb-14">
            <h2 className="mx-auto mb-4 max-w-3xl font-heading text-[1.65rem] font-bold text-[#1a1a1a] md:text-[2rem]">
              Clinic software for every allied health discipline
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-[#666666]">
              Whether you run a solo practice or a multi-location clinic, Tendo adapts to how you work.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {DISCIPLINE_CARDS.map((card, i) => (
              <DisciplineCard key={card.id} card={card} delay={i * 0.03} />
            ))}
          </div>
        </SectionShell>

        <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
          <FadeIn>
            <h2 className="mx-auto mb-8 max-w-[720px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
              See the difference more freedom, flexibility, and choice can make.
            </h2>
            <Link to={ROUTES.auth.register}>
              <Button
                variant="secondary"
                size="lg"
                pill
                className="min-w-[180px] border-0 bg-white text-primary shadow-md hover:bg-white/95"
              >
                Book a Demo
              </Button>
            </Link>
          </FadeIn>
        </SectionShell>
      </main>

      <MarketingFooter />
    </div>
  );
}
