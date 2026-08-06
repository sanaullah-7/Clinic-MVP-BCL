import {
  BookOpen,
  Flag,
  Headphones,
  MapPin,
  Megaphone,
  Monitor,
  Server,
  Sprout,
  Users,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { calculateMonthlyRate, PRICING_PLANS } from '../data/pricing-data';

const ONBOARDING_ICONS = [Wrench, Server, Headphones, Megaphone, BookOpen, Users];

export function PricingCalculator({ planId, locations, licenses, isAnnual, onPlanChange, onLocationsChange, onLicensesChange }) {
  const total = calculateMonthlyRate(planId, locations, licenses, isAnnual);

  return (
    <div className="sticky top-28 rounded-2xl border border-[#e8ecea] bg-[#f5f5f5] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-7">
      <h3 className="mb-6 font-heading text-body-lg font-bold text-[#1a1a1a] md:text-[1.125rem]">
        Calculate your monthly rate
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="calc-plan" className="mb-1.5 block text-body-sm font-semibold text-[#1a1a1a]">
            Clinic Plan
          </label>
          <select
            id="calc-plan"
            value={planId}
            onChange={(e) => onPlanChange(e.target.value)}
            className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-body text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            {PRICING_PLANS.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="calc-locations" className="mb-1.5 block text-body-sm font-semibold text-[#1a1a1a]">
            Number of Locations
          </label>
          <input
            id="calc-locations"
            type="number"
            min={1}
            value={locations}
            onChange={(e) => onLocationsChange(Math.max(1, Number(e.target.value) || 1))}
            className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-body text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div>
          <label htmlFor="calc-licenses" className="mb-1.5 block text-body-sm font-semibold text-[#1a1a1a]">
            Number of Licenses
          </label>
          <input
            id="calc-licenses"
            type="number"
            min={1}
            value={licenses}
            onChange={(e) => onLicensesChange(Math.max(1, Number(e.target.value) || 1))}
            className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-body text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div className="mt-8 border-t border-[#ddd] pt-6">
        <p className="text-body-sm text-[#666666]">Estimated cost to get started:</p>
        <p className="mt-1 font-heading text-[2rem] font-bold text-primary md:text-[2.25rem]">
          ${total}
          <span className="text-body-lg font-semibold text-[#666666]">/mo</span>
        </p>
      </div>
    </div>
  );
}

export function OnboardingProgressGraphic() {
  return (
    <div className="mx-auto mb-12 max-w-[640px] md:mb-14">
      <div className="relative flex items-center justify-between px-4">
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-md">
            <MapPin className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <span className="text-body-sm font-bold text-primary">Sign Up</span>
        </div>

        <div className="absolute left-[15%] right-[15%] top-6 h-1 overflow-hidden rounded-full bg-[#e0e0e0]">
          <div className="h-full w-full bg-gradient-to-r from-primary via-[#00a3ad] to-[#00a3ad]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#00a3ad] shadow-md">
            <Flag className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <span className="text-body-sm font-bold text-[#00a3ad]">Glow Up</span>
        </div>
      </div>
    </div>
  );
}

export function OnboardingServiceCard({ service, index }) {
  const Icon = ONBOARDING_ICONS[index] ?? Wrench;

  return (
    <div className="flex h-full flex-col rounded-xl border border-[#e8ecea] bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <Icon className="mb-4 h-8 w-8 text-[#1a1a1a]" strokeWidth={1.5} />
      <h3 className="mb-2 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">
        {service.title}
      </h3>
      <p className="mb-4 flex-1 text-body-sm leading-relaxed text-[#666666] md:text-body">
        {service.description}
      </p>
      {service.price && (
        <p className="text-body-sm font-bold text-[#1a1a1a]">{service.price}</p>
      )}
    </div>
  );
}

/** Large left image — education classroom mockup */
export function EducationVisual() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl bg-gradient-to-br from-baby-blue/40 via-white to-soft-pink/30 md:min-h-[280px] lg:min-h-[320px]">
      <div className="absolute inset-0 flex items-end justify-center p-6">
        <div className="grid w-full max-w-[340px] grid-cols-3 gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-col items-center rounded-lg bg-white/90 p-3 shadow-md">
              <Monitor className="mb-2 h-6 w-6 text-[#00a3ad]" strokeWidth={1.5} />
              <div className="h-2 w-full rounded bg-[#eee]" />
              <div className="mt-1 h-2 w-3/4 rounded bg-[#f0f0f0]" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold text-white">
        Clinical Training
      </div>
    </div>
  );
}

/** Large left image — startup sprout mockup */
export function StartupVisual() {
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#87CEEB]/30 to-[#8B7355]/40 md:min-h-[280px] lg:min-h-[320px]">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#4a7c59]/20">
          <Sprout className="h-12 w-12 text-[#4a7c59]" strokeWidth={1.5} />
        </div>
        <p className="text-body-sm font-semibold text-[#1a1a1a]">Grow your practice</p>
      </div>
    </div>
  );
}

export function TestimonialSlide({ testimonial, className }) {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-[#e6f7f5] px-8 py-10 md:px-12 md:py-12',
        className,
      )}
    >
      <span className="mb-4 block font-serif text-[4rem] leading-none text-[#00a3ad]">&ldquo;</span>
      <blockquote className="mb-8 text-center text-[1.05rem] font-medium leading-relaxed text-[#1a1a1a] md:text-[1.125rem]">
        {testimonial.quote}
      </blockquote>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-baby-blue to-soft-pink text-sm font-bold text-[#1a1a1a]">
            {testimonial.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div className="text-left">
            <p className="text-body-sm font-semibold text-[#1a1a1a]">{testimonial.name}</p>
            <p className="text-caption text-[#666666]">{testimonial.clinic}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-[#ddd] bg-white px-3 py-1.5">
          <span className="text-body-sm font-bold text-[#1a1a1a]">Capterra</span>
          <span className="text-body-sm font-bold text-[#00a3ad]">{testimonial.rating}</span>
          <span className="text-primary">★</span>
        </div>
      </div>
    </div>
  );
}

export function AddOnIcon({ type }) {
  const base = 'mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl md:mx-0';

  if (type === 'megaphone') {
    return (
      <div className={cn(base, 'bg-[#e6f7f5]')}>
        <Megaphone className="h-8 w-8 text-[#00a3ad]" strokeWidth={1.5} />
      </div>
    );
  }
  if (type === 'servers') {
    return (
      <div className={cn(base, 'bg-[#f0f4f8]')}>
        <Server className="h-8 w-8 text-[#1a5fb4]" strokeWidth={1.5} />
      </div>
    );
  }
  return (
    <div className={cn(base, 'bg-[#f5f0ff]')}>
      <Monitor className="h-8 w-8 text-[#5b2d8e]" strokeWidth={1.5} />
    </div>
  );
}
