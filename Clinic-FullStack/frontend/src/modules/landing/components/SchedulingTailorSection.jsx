import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components';
import { SectionShell, SectionHeading } from './SectionShell';
import { SchedulingTailorMockup } from './SchedulingMockups';
import { cn } from '@/lib/cn';

const CHECK_COLOR = '#00a3ad';
const ACCENT_LINE = '#00a3ad';

const TAILOR_ITEMS = [
  {
    id: 'access',
    title: 'Access your schedule anywhere, anytime',
    description: "Tendo's clinic software works anywhere online so you can too",
    bullets: [
      'Update and view schedules from any device, any time',
      'Sync your appointment schedule seamlessly with our iCal, Google Calendar, or Outlook integrations.',
    ],
  },
  {
    id: 'smart',
    title: 'Simplify your workflow with smart tools',
    description: 'Built-in tools help you manage appointments without switching between apps.',
    bullets: [
      'Drag-and-drop rescheduling with automatic patient notifications',
      'Smart waitlists that fill cancellations automatically',
      'One-click actions for charting, billing, and reminders from the schedule',
    ],
  },
  {
    id: 'customize',
    title: 'Customize your schedule for ultimate flexibility',
    description: 'Configure views, colors, and rules to match how your clinic actually runs.',
    bullets: [
      'Set custom appointment types, durations, and buffer times',
      'Color-code practitioners, rooms, and service types at a glance',
      'Create location-specific schedules with shared or separate calendars',
    ],
  },
];

function TailorAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e8e8e8]">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-5 text-left md:py-6"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="min-w-0 flex-1">
          <div
            className={cn(
              'mb-0 h-0.5 w-10 transition-all duration-300',
              isOpen ? 'opacity-100' : 'opacity-0',
            )}
            style={{ backgroundColor: ACCENT_LINE }}
          />
          <span className="font-heading text-[1.05rem] font-bold leading-snug text-[#1a1a1a] md:text-[1.125rem]">
            {item.title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'mt-1 h-5 w-5 flex-shrink-0 text-[#1a1a1a] transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
          strokeWidth={2}
        />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-400 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              'pb-6 transition-opacity duration-300',
              isOpen ? 'opacity-100' : 'opacity-0',
            )}
          >
            <p className="mb-4 text-body leading-relaxed text-[#666666]">{item.description}</p>
            <ul className="space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    style={{ color: CHECK_COLOR }}
                    strokeWidth={2.5}
                  />
                  <span className="text-body leading-relaxed text-[#666666]">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SchedulingTailorSection() {
  const [openId, setOpenId] = useState(TAILOR_ITEMS[0].id);

  return (
    <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
      <SectionHeading
        title="Tailor your schedule to fit your workday and workflows"
        className="mb-10 md:mb-14"
      />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <FadeIn>
          <SchedulingTailorMockup />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="lg:pt-4">
            {TAILOR_ITEMS.map((item) => (
              <TailorAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
