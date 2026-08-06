import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';

const CHECK_COLOR = '#00a3ad';

export const API_DATA_POINTS = [
  'Patients',
  'Appointments',
  'Transactions',
  'Key Performance Metrics',
  'Reports',
];

export const PARTNER_APPS = [
  { name: 'QuickBooks', color: '#2ca01c', abbr: 'QB' },
  { name: 'HubSpot', color: '#ff7a59', abbr: 'HS' },
  { name: 'Microsoft Dynamics', color: '#002050', abbr: 'MS' },
  { name: 'Google Calendar', color: '#4285f4', abbr: 'GC' },
];

function MockupWrap({ children, className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[560px] lg:max-w-none', className)}>
      {children}
    </div>
  );
}

/** Row 1 — data points checklist */
export function DataPointsMockup() {
  return (
    <MockupWrap>
      <div className="rounded-2xl border border-[#e8ecea] bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-8">
        <ul className="space-y-4">
          {API_DATA_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-4">
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${CHECK_COLOR}18` }}
              >
                <Check className="h-4 w-4" style={{ color: CHECK_COLOR }} strokeWidth={2.5} />
              </span>
              <span className="font-heading text-body font-semibold text-[#1a1a1a] md:text-body-lg">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </MockupWrap>
  );
}

/** Row 2 — third-party app logos */
export function PartnerAppsMockup() {
  return (
    <MockupWrap>
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-[#e8ecea] bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:gap-6 md:p-8 lg:justify-start">
        {PARTNER_APPS.map((app) => (
          <div
            key={app.name}
            className="flex h-16 w-28 flex-col items-center justify-center rounded-xl border border-[#eee] bg-[#fafafa] px-2 md:h-[72px] md:w-32"
          >
            <span
              className="mb-1 text-lg font-bold leading-none"
              style={{ color: app.color }}
            >
              {app.abbr}
            </span>
            <span className="text-center text-[9px] font-semibold leading-tight text-[#666666] md:text-[10px]">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </MockupWrap>
  );
}

function PhoneSmsMockup() {
  return (
    <div className="w-[140px] flex-shrink-0 overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:w-[160px]">
      <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold tracking-wide">
        TENDO
      </div>
      <div className="space-y-2 p-3">
        <div className="rounded-lg bg-[#e8f4fc] px-2 py-1.5 text-[8px] leading-snug text-[#333]">
          Hi Sarah! Your appointment is tomorrow at 2pm. Reply YES to confirm.
        </div>
        <div className="ml-auto w-[80%] rounded-lg bg-primary/20 px-2 py-1.5 text-[8px] leading-snug text-[#333]">
          YES
        </div>
        <div className="rounded-lg bg-[#e8f4fc] px-2 py-1.5 text-[8px] leading-snug text-[#333]">
          Great! See you then. — Tendo Clinic
        </div>
      </div>
    </div>
  );
}

function DesktopCampaignMockup() {
  return (
    <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      <div className="flex h-7 items-center gap-1.5 border-b border-[#eee] bg-[#f5f5f5] px-3">
        <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <div className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex h-8 items-center bg-gradient-to-r from-baby-blue to-soft-pink/60 px-3">
        <span className="text-[10px] font-bold tracking-[0.12em]">TENDO COMM</span>
      </div>
      <div className="grid grid-cols-4 gap-0 border-b border-[#eee] bg-[#fafafa] p-2 text-[8px]">
        <span className="font-semibold text-[#1a1a1a]">Campaigns</span>
        <span className="text-[#999]">Templates</span>
        <span className="text-[#999]">Audience</span>
        <span className="text-[#999]">Reports</span>
      </div>
      <div className="p-3">
        <p className="mb-2 text-[10px] font-bold text-[#1a1a1a]">New Email Campaign</p>
        <div className="mb-2 rounded border border-[#eee] px-2 py-1 text-[8px] text-[#999]">
          Subject: Welcome to our clinic!
        </div>
        <div className="mb-2 h-20 rounded border border-[#eee] bg-[#fafafa] p-2">
          <div className="mb-1 h-1.5 w-3/4 rounded bg-[#ddd]" />
          <div className="mb-1 h-1.5 w-full rounded bg-[#eee]" />
          <div className="mb-1 h-1.5 w-5/6 rounded bg-[#eee]" />
          <div className="h-1.5 w-2/3 rounded bg-[#eee]" />
        </div>
        <div className="flex gap-2">
          <span className="rounded bg-[#f0f0f0] px-2 py-0.5 text-[7px] font-semibold">B</span>
          <span className="rounded bg-[#f0f0f0] px-2 py-0.5 text-[7px] font-semibold italic">I</span>
          <span className="rounded bg-[#f0f0f0] px-2 py-0.5 text-[7px] font-semibold underline">U</span>
          <span className="ml-auto rounded bg-primary px-3 py-0.5 text-[8px] font-semibold text-[#1a1a1a]">
            Send
          </span>
        </div>
      </div>
    </div>
  );
}

/** Row 3 — large phone + desktop composite (left column hero visual) */
export function CommunicationsApiMockup() {
  return (
    <MockupWrap className="lg:scale-105 lg:origin-left xl:scale-110">
      <div className="flex items-end gap-3 sm:gap-4 md:gap-5">
        <PhoneSmsMockup />
        <DesktopCampaignMockup />
      </div>
    </MockupWrap>
  );
}
