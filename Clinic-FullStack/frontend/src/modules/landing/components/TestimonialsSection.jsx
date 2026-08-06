import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components';
import { TESTIMONIALS, AWARD_BADGES } from '../data/testimonials';
import { cn } from '@/lib/cn';

import { BRAND_COLORS } from '@/constants/design-tokens';

const CARD_BG = BRAND_COLORS.babyBlue;

function CapterraBadge() {
  return (
    <div className="mb-8 flex justify-center">
      <div className="inline-flex items-center gap-2.5 rounded-full bg-[#044767] px-5 py-2.5 shadow-sm">
        {/* Capterra "C" logo mark */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#ff9d28" />
          <path
            d="M14 8.5a4 4 0 1 0 0 7"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span className="text-body-sm font-semibold text-white">Capterra</span>
        <span className="text-body-sm font-bold text-white">4.7</span>
        <div className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="h-3.5 w-3.5 text-[#ff9d28]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

function GetAppBadge() {
  return (
    <svg viewBox="0 0 80 96" className="h-[88px] w-[72px]" aria-label="GetApp Category Leaders 2025">
      <polygon points="40,4 76,28 76,68 40,92 4,68 4,28" fill="#2d2d2d" />
      <polygon points="40,12 68,32 68,64 40,84 12,64 12,32" fill="#3a3a3a" />
      <text x="40" y="38" textAnchor="middle" fill="#48b2e0" fontSize="8" fontWeight="700">
        GetApp
      </text>
      <text x="40" y="50" textAnchor="middle" fill="white" fontSize="6" fontWeight="600">
        Category
      </text>
      <text x="40" y="58" textAnchor="middle" fill="white" fontSize="6" fontWeight="600">
        Leaders
      </text>
      <text x="40" y="72" textAnchor="middle" fill="#f7803c" fontSize="7" fontWeight="700">
        2025
      </text>
    </svg>
  );
}

function SourceForgeBadge() {
  return (
    <svg viewBox="0 0 80 96" className="h-[88px] w-[72px]" aria-label="SourceForge Leader Winter 2026">
      <path d="M40 4 L72 24 V72 L40 92 L8 72 V24 Z" fill="#1a1a1a" />
      <path d="M40 10 L66 27 V69 L40 86 L14 69 V27 Z" fill="#ff6600" />
      <text x="40" y="36" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">
        Source
      </text>
      <text x="40" y="46" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">
        Forge
      </text>
      <text x="40" y="58" textAnchor="middle" fill="white" fontSize="6" fontWeight="600">
        Leader
      </text>
      <text x="40" y="72" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600">
        Winter 2026
      </text>
    </svg>
  );
}

function CapterraShieldBadge({ label, year, sash }) {
  return (
    <svg viewBox="0 0 80 96" className="h-[88px] w-[72px]" aria-label={`Capterra ${label} ${year}`}>
      <path d="M40 4 C40 4 10 16 10 40 C10 64 40 92 40 92 C40 92 70 64 70 40 C70 16 40 4 40 4Z" fill="#044767" />
      <path d="M40 10 C40 10 16 20 16 40 C16 60 40 86 40 86 C40 86 64 60 64 40 C64 20 40 10 40 10Z" fill="#055a8c" />
      {sash && (
        <>
          <rect x="8" y="42" width="64" height="14" fill="#e74c3c" transform="rotate(-8 40 49)" />
          <text x="40" y="52" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" transform="rotate(-8 40 49)">
            Shortlist
          </text>
        </>
      )}
      <text x="40" y={sash ? '68' : '44'} textAnchor="middle" fill="white" fontSize="6" fontWeight="600">
        Capterra
      </text>
      <text x="40" y={sash ? '78' : '56'} textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600">
        {label}
      </text>
      <text x="40" y={sash ? '86' : '68'} textAnchor="middle" fill="#ff9d28" fontSize="6" fontWeight="700">
        {year}
      </text>
    </svg>
  );
}

function SoftwareAdviceBadge({ label, year }) {
  return (
    <svg viewBox="0 0 80 96" className="h-[88px] w-[72px]" aria-label={`Software Advice ${label} ${year}`}>
      <path d="M40 4 L68 22 V74 L40 92 L12 74 V22 Z" fill="#5b2d8e" />
      <path d="M40 10 L62 25 V71 L40 86 L18 71 V25 Z" fill="#6b3fa0" />
      <text x="40" y="32" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600">
        Software
      </text>
      <text x="40" y="42" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600">
        Advice
      </text>
      <text x="40" y="56" textAnchor="middle" fill="white" fontSize="5" fontWeight="600">
        {label}
      </text>
      <text x="40" y="72" textAnchor="middle" fill="#ffd700" fontSize="6" fontWeight="700">
        {year}
      </text>
    </svg>
  );
}

function AwardBadge({ badge }) {
  switch (badge.type) {
    case 'getapp':
      return <GetAppBadge />;
    case 'sourceforge':
      return <SourceForgeBadge />;
    case 'capterra':
      return <CapterraShieldBadge label={badge.label} year={badge.year} sash={badge.sash} />;
    case 'software-advice':
      return <SoftwareAdviceBadge label={badge.label} year={badge.year} />;
    default:
      return null;
  }
}

function QuoteIcon() {
  return (
    <span className="mb-6 block font-heading text-[4.5rem] leading-none text-primary md:text-[5.5rem]">
      &ldquo;
    </span>
  );
}

function NavArrow({ direction, onClick }) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous testimonial' : 'Next testimonial'}
      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-text-primary shadow-md transition-transform hover:scale-105 md:h-[52px] md:w-[52px]"
    >
      <Icon className="h-6 w-6" strokeWidth={2.5} />
    </button>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-content px-4 md:px-8">
        {/* ── Screenshot 1: trust header ── */}
        <FadeIn className="text-center">
          <CapterraBadge />

          <h2 className="mx-auto mb-12 max-w-[680px] text-balance font-heading text-[1.65rem] font-bold leading-snug tracking-tight text-[#1a1a1a] md:text-[2rem]">
            Join thousands of Allied Health professionals who rely on Tendo as the #1 clinic
            management software
          </h2>

          <div className="mb-16 flex flex-wrap items-end justify-center gap-6 md:gap-10">
            {AWARD_BADGES.map((badge) => (
              <AwardBadge key={`${badge.type}-${badge.label}`} badge={badge} />
            ))}
          </div>
        </FadeIn>

        {/* ── Screenshot 2: arrow slider ── */}
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-[900px]">
            <div className="flex items-center gap-3 md:gap-6">
              <NavArrow direction="left" onClick={prev} />

              <div
                key={testimonial.id}
                className="animate-fade-in min-h-[280px] flex-1 rounded-2xl px-8 py-10 md:min-h-[300px] md:rounded-[1.25rem] md:px-14 md:py-12"
                style={{ backgroundColor: CARD_BG }}
              >
                <QuoteIcon />

                <blockquote className="mb-10 text-[1.05rem] font-semibold leading-relaxed text-[#1a1a1a] md:text-[1.2rem] md:leading-snug">
                  {testimonial.quote}
                </blockquote>

                <div>
                  <p className="font-heading text-body font-bold text-[#1a1a1a]">{testimonial.name}</p>
                  <p className="mt-0.5 text-body-sm text-[#666666]">
                    {testimonial.clinic} ({testimonial.location})
                  </p>
                </div>
              </div>

              <NavArrow direction="right" onClick={next} />
            </div>

            {/* Horizontal bar pagination — screenshot 2 */}
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  className={cn(
                    'h-1.5 w-10 rounded-full bg-primary transition-all duration-300',
                    i === index ? 'opacity-100' : 'opacity-25',
                  )}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
