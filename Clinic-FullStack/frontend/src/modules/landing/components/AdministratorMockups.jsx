import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Search,
  Smartphone,
  Tablet,
  User,
} from 'lucide-react';
import { cn } from '@/lib/cn';

function TendoChrome({ children, className, title = 'TENDO' }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)]',
        className,
      )}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-[#eee] bg-[#f5f5f5] px-3">
        <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <div className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex h-8 items-center bg-gradient-to-r from-baby-blue to-soft-pink/60 px-3">
        <span className="text-[10px] font-bold tracking-[0.12em] text-[#1a1a1a]">{title}</span>
      </div>
      {children}
    </div>
  );
}

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

function ScheduleGrid({ compact = false }) {
  const rows = [
    { time: '9:00', name: 'Zoe Friesen', color: 'bg-[#1e3a5f] text-white' },
    { time: '10:30', name: 'Mike Smith', color: 'bg-[#2d4a6f] text-white' },
    { time: '1:00', name: 'Sarah Lee', color: 'bg-baby-blue text-[#1a1a1a]' },
    { time: '2:30', name: 'James Park', color: 'bg-soft-pink text-[#1a1a1a]' },
  ];

  return (
    <div className={compact ? 'p-2' : 'p-3'}>
      <div className="mb-2 flex items-center justify-between">
        <span className={cn('font-semibold text-[#1a1a1a]', compact ? 'text-[8px]' : 'text-[11px]')}>
          Wed, May 24
        </span>
        <div className="flex gap-0.5 text-[#999]">
          <ChevronLeft className={compact ? 'h-2.5 w-2.5' : 'h-3 w-3'} />
          <ChevronRight className={compact ? 'h-2.5 w-2.5' : 'h-3 w-3'} />
        </div>
      </div>
      <div className="space-y-1">
        {rows.slice(0, compact ? 3 : 4).map((row) => (
          <div key={row.time} className="flex items-stretch gap-1.5">
            <span className={cn('w-7 pt-0.5 text-[#999]', compact ? 'text-[7px]' : 'text-[9px]')}>
              {row.time}
            </span>
            <div
              className={cn(
                'flex-1 truncate rounded px-1.5 py-0.5 font-medium',
                row.color,
                compact ? 'text-[7px]' : 'text-[9px]',
              )}
            >
              {row.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Hero — laptop + tablet + phone cluster */
export function ADHeroVisual() {
  return (
    <Wrap className="lg:scale-110 xl:scale-[1.15]">
      <div className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px]">
        <TendoChrome className="absolute left-0 top-0 z-10 w-[88%]">
          <div className="flex items-center gap-1.5 border-b border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3 text-[#1a1a1a]" />
            <span className="text-[10px] font-semibold">Schedule</span>
          </div>
          <div className="grid grid-cols-5 gap-0">
            <div className="col-span-3 border-r border-[#eee]">
              <ScheduleGrid />
            </div>
            <div className="col-span-2 p-2">
              <p className="mb-1 text-[9px] font-bold">Zoe Friesen</p>
              <p className="text-[8px] text-[#999]">60 Min · Confirmed</p>
              <div className="mt-2 rounded bg-[#fafafa] p-1.5 text-[8px] text-[#666]">Insurance verified</div>
            </div>
          </div>
        </TendoChrome>

        <div className="absolute bottom-[6%] right-[2%] z-20 w-[34%] max-w-[160px] overflow-hidden rounded-xl border-[3px] border-[#333] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <ScheduleGrid compact />
        </div>

        <div className="absolute bottom-[18%] right-[28%] z-[15] flex h-14 w-14 items-center justify-center rounded-xl border border-[#e8ecea] bg-white shadow-lg">
          <Tablet className="h-7 w-7 text-[#00a3ad]" strokeWidth={1.5} />
        </div>

        <div className="absolute right-[8%] top-[12%] z-[12] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-baby-blue/40 to-soft-pink/30">
          <User className="h-5 w-5 text-[#1a1a1a]/40" strokeWidth={1.25} />
        </div>
      </div>
    </Wrap>
  );
}

/** Centered patient lookup — calendar + profile */
export function ADPatientLookupMockup() {
  return (
    <Wrap className="mx-auto max-w-[900px] lg:scale-100 xl:scale-105">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
        <TendoChrome className="rounded-2xl">
          <div className="flex items-center gap-2 border-b border-[#eee] px-3 py-2">
            <Search className="h-3.5 w-3.5 text-[#999]" />
            <span className="text-[10px] text-[#999]">Patient Lookup</span>
          </div>
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">
            <div className="border-r border-[#eee] bg-[#fafafa] p-4">
              <div className="mb-3 grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'aspect-square rounded text-[7px]',
                      i % 7 === 3 || i % 7 === 5
                        ? 'bg-[#1e3a5f]'
                        : i % 11 === 0
                          ? 'bg-baby-blue/70'
                          : 'bg-[#eee]',
                    )}
                  />
                ))}
              </div>
              <ScheduleGrid compact />
            </div>
            <div className="p-4">
              <p className="mb-1 text-[11px] font-bold text-[#1a1a1a]">Zoe Friesen</p>
              <p className="mb-3 text-[9px] text-[#666]">Patient since 2021 · DOB Jan 12, 1988</p>
              {['Contact Info', 'Appointments', 'Charts', 'Billing', 'Forms'].map((tab, i) => (
                <div
                  key={tab}
                  className={cn(
                    'mb-1 rounded px-2 py-1.5 text-[9px]',
                    i === 0 ? 'bg-baby-blue/35 font-semibold' : 'text-[#666]',
                  )}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </TendoChrome>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </Wrap>
  );
}

/** Schedule with context menu */
export function ADScheduleMockup() {
  const menuItems = [
    'Appointment Details',
    'Reschedule',
    'Check-in',
    'Check Coverage',
    'Send Reminder',
  ];

  return (
    <Wrap>
      <div className="relative pb-2 pt-2">
        <TendoChrome className="relative">
          <div className="grid grid-cols-7 gap-1 p-3">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-7 rounded text-[6px]',
                  i % 5 === 1 || i % 5 === 3 ? 'bg-[#1e3a5f]' : 'bg-[#f0f0f0]',
                )}
              />
            ))}
          </div>
          <div className="absolute left-[38%] top-[32%] z-10 min-w-[148px] overflow-hidden rounded-lg border border-[#e8e8e8] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            {menuItems.map((item, i) => (
              <div
                key={item}
                className={cn(
                  'px-3 py-1.5 text-[10px]',
                  i === 0 ? 'bg-baby-blue/35 font-medium text-[#1a1a1a]' : 'text-[#666]',
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </TendoChrome>
      </div>
    </Wrap>
  );
}

/** Multi-device patient portal */
export function ADPortalDevicesMockup() {
  return (
    <Wrap>
      <div className="relative min-h-[280px] pb-4">
        <TendoChrome className="relative mr-[22%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <p className="text-[10px] font-bold">Patient Portal</p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3">
            <div className="rounded border border-[#eee] bg-[#fafafa] p-2">
              <p className="text-[8px] font-bold">Intake Forms</p>
              <div className="mt-1 h-8 rounded bg-baby-blue/30" />
            </div>
            <div className="rounded border border-[#eee] bg-[#fafafa] p-2">
              <p className="text-[8px] font-bold">Book Online</p>
              <div className="mt-1 h-8 rounded bg-soft-pink/40" />
            </div>
          </div>
        </TendoChrome>

        <div className="absolute -right-1 top-4 z-20 w-[36%] overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-1 text-[8px] font-bold">Reminder</p>
            <p className="text-[7px] text-[#666]">Appt tomorrow 9:00 AM</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-[8%] z-10 flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md">
            <Monitor className="h-6 w-6 text-[#00a3ad]" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md">
            <Tablet className="h-6 w-6 text-[#00a3ad]" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md">
            <Smartphone className="h-6 w-6 text-[#00a3ad]" />
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Campaign overview dashboard */
export function ADCampaignOverviewMockup() {
  const metrics = [
    { label: 'Sent', value: '1,248' },
    { label: 'Opens', value: '892' },
    { label: 'Responded', value: '312' },
    { label: 'Clicks', value: '156' },
  ];

  return (
    <Wrap>
      <TendoChrome>
        <div className="border-b border-[#eee] px-3 py-1.5">
          <span className="text-[10px] font-semibold">Campaign Overview</span>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-[#eee] bg-[#fafafa] p-2 text-center">
              <p className="text-[7px] text-[#999]">{m.label}</p>
              <p className="text-[11px] font-bold text-[#1a1a1a]">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 px-3 pb-3">
          {['Email Campaign', 'Text Campaign'].map((label) => (
            <div key={label} className="rounded-lg border border-[#eee] p-3">
              <p className="mb-2 text-[8px] font-bold">{label}</p>
              <div className="mx-auto h-14 w-14 rounded-full border-[6px] border-[#00a3ad] border-r-baby-blue/40 border-b-soft-pink/50" />
              <p className="mt-2 text-center text-[7px] text-[#666]">71% delivered</p>
            </div>
          ))}
        </div>
      </TendoChrome>
    </Wrap>
  );
}

/** Reports checklist */
export function ADReportsMockup() {
  const reports = [
    'Client Registrations',
    'Practitioner Appointment List',
    'Revenue Summary',
    'Accounts Receivable',
    'Patient Visit History',
    'Insurance Claims',
  ];

  return (
    <Wrap>
      <TendoChrome>
        <div className="border-b border-[#eee] px-3 py-1.5">
          <span className="text-[10px] font-semibold">Reports</span>
        </div>
        <div className="space-y-2 p-4">
          {reports.map((report, i) => (
            <label key={report} className="flex items-center gap-2 text-[10px] text-[#666]">
              <input type="checkbox" readOnly checked={i < 3} className="accent-[#00a3ad]" />
              {report}
            </label>
          ))}
          <div className="mt-4 rounded-lg bg-[#00a3ad] py-2 text-center text-[10px] font-semibold text-white">
            Create
          </div>
        </div>
      </TendoChrome>
    </Wrap>
  );
}

export { CheckoutMockup as ADBillingMockup } from './PhysicalTherapyMockups';
