import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  User,
  Bell,
  Mail,
} from 'lucide-react';
import { cn } from '@/lib/cn';

const SIDEBAR_W = 'w-9';

function TendoAppChrome({ children, className, showDots = true }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)]',
        className,
      )}
    >
      {showDots && (
        <div className="flex h-7 items-center gap-1.5 border-b border-[#eee] bg-[#f5f5f5] px-3">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
      )}
      <div className="flex h-8 items-center gap-2 bg-gradient-to-r from-baby-blue to-soft-pink/60 px-3">
        <span className="text-[10px] font-bold tracking-[0.12em] text-text-primary">TENDO</span>
      </div>
      {children}
    </div>
  );
}

function ScheduleDayView({ compact = false }) {
  const rows = [
    { time: '9:00', name: 'Zoe Friesen', color: 'bg-[#1e3a5f] text-white' },
    { time: '10:30', name: 'Mike Smith', color: 'bg-[#2d4a6f] text-white' },
    { time: '1:00', name: 'Sarah Lee', color: 'bg-baby-blue text-text-primary' },
    { time: '2:30', name: 'James Park', color: 'bg-soft-pink text-text-primary' },
  ];

  return (
    <div className={compact ? 'p-2' : 'p-3'}>
      <div className="mb-2 flex items-center justify-between">
        <span className={cn('font-semibold text-text-primary', compact ? 'text-[8px]' : 'text-[11px]')}>
          Wed, May 24
        </span>
        <div className="flex gap-0.5 text-text-muted">
          <ChevronLeft className={compact ? 'h-2.5 w-2.5' : 'h-3 w-3'} />
          <ChevronRight className={compact ? 'h-2.5 w-2.5' : 'h-3 w-3'} />
        </div>
      </div>
      <div className="space-y-1">
        {rows.slice(0, compact ? 3 : 4).map((row) => (
          <div key={row.time} className="flex items-stretch gap-1.5">
            <span className={cn('w-7 pt-0.5 text-text-muted', compact ? 'text-[7px]' : 'text-[9px]')}>
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

function DashboardBody({ compact = false }) {
  return (
    <div className="flex min-h-0">
      <aside className={cn('flex-shrink-0 border-r border-[#eee] bg-[#fafafa]', SIDEBAR_W, compact && 'hidden')}>
        <div className="flex flex-col items-center gap-2 py-2">
          {[Calendar, User, Search].map((Icon, i) => (
            <div
              key={i}
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded',
                i === 0 ? 'bg-baby-blue/50 text-text-primary' : 'text-text-muted',
              )}
            >
              <Icon className="h-3 w-3" />
            </div>
          ))}
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        {!compact && (
          <div className="flex items-center gap-2 border-b border-[#eee] px-2 py-1.5">
            <Search className="h-3 w-3 text-text-muted" />
            <span className="truncate text-[9px] text-text-muted">Search patients...</span>
            <Bell className="ml-auto h-3 w-3 text-text-muted" />
            <Mail className="h-3 w-3 text-text-muted" />
          </div>
        )}
        <div className={cn('grid gap-2', compact ? 'p-2' : 'grid-cols-5 gap-0 p-0')}>
          <div className={cn(compact ? '' : 'col-span-3 border-r border-[#eee]')}>
            <ScheduleDayView compact={compact} />
          </div>
          {!compact && (
            <div className="col-span-2 p-2">
              <p className="mb-1 text-[9px] font-bold text-text-primary">Zoe Friesen</p>
              <p className="text-[8px] text-text-muted">60 Min RMT · Confirmed</p>
              <div className="mt-2 rounded bg-[#fafafa] p-1.5 text-[8px] text-text-muted">Chart notes</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Wrapper keeps mockups aligned in the feature grid */
export function MockupContainer({ children, className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[540px] lg:max-w-none', className)}>
      {children}
    </div>
  );
}

/** Hero — desktop schedule + mobile + lifestyle circle */
export function SchedulingHeroVisual() {
  return (
    <MockupContainer className="max-w-[560px]">
      <div className="relative h-[300px] sm:h-[340px] md:h-[380px]">
        <div className="absolute right-0 top-6 h-44 w-44 rounded-full bg-gradient-to-br from-soft-pink/40 to-baby-blue/30 sm:h-52 sm:w-52" />
        <div className="absolute right-4 top-10 z-[1] flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-baby-blue/25 to-soft-pink/30 shadow-md sm:h-32 sm:w-32">
          <User className="h-14 w-14 text-baby-blue-700/35" strokeWidth={1} />
        </div>

        <TendoAppChrome className="absolute left-0 top-0 z-10 w-[82%]">
          <div className="flex items-center gap-1.5 border-b border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3 text-text-primary" />
            <span className="text-[10px] font-semibold text-text-primary">Schedule</span>
          </div>
          <DashboardBody />
        </TendoAppChrome>

        <div className="absolute bottom-0 right-0 z-20 w-[36%] overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[8px] font-bold text-text-primary">
            TENDO
          </div>
          <ScheduleDayView compact />
        </div>
      </div>
    </MockupContainer>
  );
}

/** Context menu + desktop + mobile */
export function SchedulingActionMockup() {
  const menuItems = ['Book Appointment', 'Create Invoice', 'Send Reminder', 'View Chart', 'Process Payment'];

  return (
    <MockupContainer>
      <div className="relative pb-4 pt-2">
        <TendoAppChrome className="relative mr-[18%]">
          <DashboardBody />
          <div className="absolute left-[42%] top-[38%] z-10 min-w-[150px] overflow-hidden rounded-lg border border-[#e8e8e8] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            {menuItems.map((item, i) => (
              <div
                key={item}
                className={cn(
                  'px-3 py-1.5 text-[10px]',
                  i === 0 ? 'bg-baby-blue/35 font-medium text-text-primary' : 'text-[#666]',
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </TendoAppChrome>

        <div className="absolute -right-1 bottom-0 z-20 w-[34%] overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[8px] font-bold">
            My Day
          </div>
          <ScheduleDayView compact />
        </div>
      </div>
    </MockupContainer>
  );
}

/** Multi-practitioner schedule + patient warnings popup */
export function SchedulingAlertsMockup() {
  const practitioners = ['Dr. Chen', 'Sarah RMT', 'Mike PT'];
  const times = ['9:00', '10:00', '11:00', '12:00'];

  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="flex border-b border-[#eee] bg-[#fafafa] text-[9px] font-semibold text-text-muted">
          <div className="w-11 flex-shrink-0 border-r border-[#eee] p-2">Time</div>
          {practitioners.map((p) => (
            <div key={p} className="min-w-0 flex-1 border-r border-[#eee] p-2 last:border-r-0">
              {p}
            </div>
          ))}
        </div>
        {times.map((time, ti) => (
          <div key={time} className="flex border-b border-[#eee] text-[9px] last:border-b-0">
            <div className="w-11 flex-shrink-0 border-r border-[#eee] p-2 text-text-muted">{time}</div>
            {practitioners.map((_, pi) => (
              <div key={pi} className="min-w-0 flex-1 border-r border-[#eee] p-1.5 last:border-r-0">
                {(ti + pi) % 2 === 0 && (
                  <div
                    className={cn(
                      'rounded px-1 py-0.5 font-medium',
                      pi === 0 ? 'bg-[#1e3a5f] text-white' : pi === 1 ? 'bg-baby-blue/70' : 'bg-soft-pink/80',
                    )}
                  >
                    Appt
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="absolute bottom-4 right-4 w-44 rounded-lg border border-[#e8e8e8] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <p className="mb-1.5 text-[10px] font-bold text-text-primary">Patient Warnings</p>
          <p className="text-[9px] text-[#666]">⚠ Allergy: Latex</p>
          <p className="text-[9px] text-[#666]">⚠ Outstanding balance</p>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

/** My Dashboard + to-do popup */
export function SchedulingDashboardMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="flex items-center gap-2 border-b border-[#eee] px-3 py-1.5">
          <span className="text-[10px] font-semibold text-text-primary">My Dashboard</span>
        </div>
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-2 border-r border-[#eee] p-3">
            <p className="mb-2 text-[9px] font-semibold text-text-primary">Today</p>
            <div className="space-y-1.5">
              <div className="rounded bg-[#1e3a5f] px-2 py-1 text-[8px] font-medium text-white">9:00 AM</div>
              <div className="rounded bg-baby-blue/60 px-2 py-1 text-[8px]">1:00 PM</div>
            </div>
          </div>
          <div className="col-span-3 p-3">
            <p className="text-[10px] font-bold text-text-primary">Zoe Friesen</p>
            <p className="text-[8px] text-text-muted">60 Min RMT · Confirmed</p>
            <div className="mt-2 flex items-center gap-1 text-[8px] text-text-muted">
              <Clock className="h-3 w-3" />
              Next in 45 min
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 w-48 rounded-lg border border-[#e8e8e8] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <p className="mb-2 text-[10px] font-bold text-text-primary">To-Do</p>
          <label className="flex items-center gap-2 text-[9px] text-[#666]">
            <input type="checkbox" readOnly checked className="accent-primary" />
            Chart entry — Zoe F.
          </label>
          <label className="mt-1.5 flex items-center gap-2 text-[9px] text-[#666]">
            <input type="checkbox" readOnly className="accent-primary" />
            Follow up — Mike S.
          </label>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

function GoogleCalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
      <path fill="#FFC107" d="M43 11H5v26h38V11z" />
      <path fill="#F44336" d="M43 11H5V5h38v6z" />
      <path fill="#4CAF50" d="M43 37H5v6h38v-6z" />
      <path fill="#2196F3" d="M24 11v32" />
      <path fill="#fff" d="M14 19h8v8h-8z" opacity="0.9" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
      <rect width="48" height="48" rx="6" fill="#0078D4" />
      <path fill="#fff" d="M14 14h12v20H14z" opacity="0.9" />
      <path fill="#28A8EA" d="M26 14h12v20H26z" />
      <ellipse cx="20" cy="24" rx="5" ry="6" fill="#0078D4" />
    </svg>
  );
}

function ICalIcon() {
  return (
    <div className="flex h-14 w-11 flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-md">
      <div className="bg-[#d93025] py-0.5 text-center text-[8px] font-bold uppercase tracking-wide text-white">
        Jul
      </div>
      <div className="flex flex-1 items-center justify-center text-2xl font-light text-[#3c4043]">17</div>
    </div>
  );
}

/** Tailor section — dashboard + mobile + calendar sync icons */
export function SchedulingTailorMockup() {
  return (
    <MockupContainer className="max-w-[580px]">
      <div className="relative pb-8 pt-2">
        <TendoAppChrome className="mr-[22%]">
          <div className="flex items-center gap-2 border-b border-[#eee] px-3 py-1.5">
            <Search className="h-3 w-3 text-text-muted" />
            <span className="text-[9px] text-text-muted">Search patients, appointments...</span>
          </div>
          <DashboardBody />
        </TendoAppChrome>

        <div className="absolute -right-1 top-6 z-20 w-[38%] overflow-hidden rounded-[1.35rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold text-text-primary">
            TENDO
          </div>
          <ScheduleDayView compact />
        </div>

        <div className="absolute -bottom-2 left-2 z-30 flex items-end gap-3 sm:left-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
            <GoogleCalendarIcon />
          </div>
          <ICalIcon />
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
            <OutlookIcon />
          </div>
        </div>
      </div>
    </MockupContainer>
  );
}
