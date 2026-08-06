import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components';
import { SectionShell, SectionHeading } from './SectionShell';
import { ChartingIntegrationsMockup } from './ChartingMockups';
import { cn } from '@/lib/cn';

const CHECK_COLOR = '#00a3ad';
const ACCENT_LINE = '#00a3ad';

const INTEGRATION_ITEMS = [
  {
    id: 'labs',
    title: 'Labs, Imaging, and File-Sharing',
    bullets: [
      'Attach photos and videos to track patient progress over time',
      'Effortlessly submit lab requisitions and receive results directly in the chart',
      'Foster patient engagement with a secure patient portal for document sharing',
      'Facilitate co-treatment with seamless chart sharing between practitioners',
    ],
  },
  {
    id: 'dashboard',
    title: 'Personalized Dashboard',
    bullets: [
      'Customize your charting dashboard with the tools you use most',
      'Quick access to uncharted visits, to-dos, and upcoming appointments',
      'View key metrics and patient alerts at a glance',
    ],
  },
  {
    id: 'telehealth',
    title: 'HD Telehealth',
    bullets: [
      'Conduct HD video visits directly within Tendo',
      'Auto-generate telehealth meeting transcripts with AI Scribe',
      'Chart during or after sessions without switching apps',
    ],
  },
  {
    id: 'treatment',
    title: 'Treatment Plans',
    bullets: [
      'Create and assign home exercise programs to patients',
      'Track patient adherence and progress over time',
      'Share treatment plans through the patient portal',
    ],
  },
  {
    id: 'intake',
    title: 'Patient Intake Packet',
    bullets: [
      'Bundle intake forms, consents, and surveys into one packet',
      'Send automatically before appointments or during online booking',
      'Review completed forms before the patient arrives',
    ],
  },
  {
    id: 'addons',
    title: 'Integrations & Add-Ons',
    bullets: [
      'Connect with billing, scheduling, and communications modules',
      'Extend functionality with third-party integrations',
      'API access for custom workflows and automations',
    ],
  },
];

function IntegrationAccordionItem({ item, isOpen, onToggle }) {
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

export function ChartingIntegrationsSection() {
  const [openId, setOpenId] = useState(INTEGRATION_ITEMS[0].id);

  return (
    <SectionShell className="border-t border-[#eeeeee] bg-white py-14 md:py-20 lg:py-24">
      <SectionHeading
        title="Treat, chart, e-prescribe, and grow your practice, all in one place"
        className="mb-10 md:mb-14"
      />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <FadeIn>
          <ChartingIntegrationsMockup />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="lg:pt-4">
            {INTEGRATION_ITEMS.map((item) => (
              <IntegrationAccordionItem
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
