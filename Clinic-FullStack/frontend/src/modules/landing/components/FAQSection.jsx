import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components';
import { FAQ_ITEMS } from '../data/faq';
import { SectionShell } from './SectionShell';
import { cn } from '@/lib/cn';

function FAQAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)] transition-shadow duration-300',
        isOpen && 'shadow-[0_4px_20px_rgba(0,0,0,0.09)]',
      )}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-[1.125rem] text-left md:px-6 md:py-5"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-[0.9375rem] font-semibold leading-snug text-[#1a1a1a] md:text-body">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            'h-[18px] w-[18px] flex-shrink-0 text-[#1a1a1a] transition-transform duration-500 ease-in-out',
            isOpen && 'rotate-180 text-primary',
          )}
          strokeWidth={2}
        />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-500 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              'border-t border-[#f0f0f0] px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-4',
              'transition-opacity duration-500 ease-in-out',
              isOpen ? 'opacity-100' : 'opacity-0',
            )}
          >
            <p className="text-[0.9375rem] leading-relaxed text-[#666666] md:text-body">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <SectionShell className="bg-gradient-section py-14 md:py-20 lg:py-24">
      <FadeIn className="mb-10 text-center md:mb-12">
        <h2 className="font-heading text-[1.75rem] font-bold text-[#1a1a1a] md:text-[2rem]">FAQ</h2>
        <p className="mt-2 text-body-lg text-[#666666]">Common Questions, Clear Answers</p>
      </FadeIn>

      <div className="mx-auto max-w-[820px] space-y-3 md:space-y-3.5">
        {FAQ_ITEMS.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.04}>
            <FAQAccordionItem
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
