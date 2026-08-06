import { cn } from '@/lib/cn';
import {
  Calendar,
  Search,
  Bell,
  CreditCard,
  FileText,
  Globe,
  MessageSquare,
  BarChart3,
  Video,
  Check,
  ChevronLeft,
} from 'lucide-react';

function MockupChrome({ children, className }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-border bg-white shadow-card', className)}>
      <div className="flex h-9 items-center gap-2 bg-gradient-to-r from-baby-blue to-soft-pink px-3">
        <span className="text-caption font-bold tracking-wider text-text-primary">TENDO</span>
      </div>
      {children}
    </div>
  );
}

function SchedulingMockup() {
  const slots = ['9:00', '10:30', '1:00', '2:30'];
  const colors = ['bg-baby-blue', 'bg-soft-pink', 'bg-baby-blue-400', 'bg-soft-pink-300'];
  return (
    <div className="relative">
      <MockupChrome>
        <div className="flex min-h-[280px]">
          <div className="hidden w-10 border-r border-border bg-[#fafafa] sm:block" />
          <div className="flex-1 p-3">
            <div className="mb-2 flex items-center gap-2">
              <Search className="h-3 w-3 text-text-muted" />
              <span className="text-caption text-text-muted">Ella Smith — Schedule</span>
            </div>
            <div className="space-y-1.5">
              {slots.map((time, i) => (
                <div key={time} className="flex gap-2">
                  <span className="w-8 text-caption text-text-muted">{time}</span>
                  <div className={cn('flex-1 rounded px-2 py-1.5 text-caption font-medium', colors[i])}>
                    Appointment block
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MockupChrome>
      {/* Context menu overlay */}
      <div className="absolute bottom-8 left-6 z-10 w-44 rounded-lg border border-border bg-white py-1 shadow-lg">
        {['Appointment Details', 'Schedule Next', 'Send Reminder'].map((item, i) => (
          <div
            key={item}
            className={cn(
              'px-3 py-1.5 text-caption',
              i === 0 ? 'bg-baby-blue/30 font-medium text-text-primary' : 'text-text-muted',
            )}
          >
            {item}
          </div>
        ))}
      </div>
      {/* Mobile overlay */}
      <div className="absolute -right-2 top-4 z-10 w-28 rounded-2xl border-4 border-[#333] bg-white p-2 shadow-lg md:-right-6">
        <p className="mb-1 text-center text-[9px] font-semibold">May</p>
        <div className="grid grid-cols-7 gap-0.5 text-[7px] text-center text-text-muted">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={i === 13 ? 'rounded-full bg-baby-blue font-bold text-text-primary' : ''}>
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="relative">
      <MockupChrome>
        <div className="p-4">
          <p className="mb-3 text-body-sm font-bold">$ Appointment Checkout</p>
          <div className="mb-3 space-y-1 text-caption text-text-muted">
            <p>Patient: Crystal Zane</p>
            <p>Practitioner: Dr. Lee</p>
          </div>
          <div className="rounded border border-border">
            <div className="grid grid-cols-3 border-b border-border bg-[#fafafa] px-2 py-1 text-[10px] font-semibold">
              <span>Service</span>
              <span>Qty</span>
              <span>Total</span>
            </div>
            <div className="grid grid-cols-3 px-2 py-1.5 text-caption">
              <span>60 Min RMT</span>
              <span>1</span>
              <span>$77.52</span>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <span className="rounded-lg bg-primary px-4 py-1.5 text-caption font-semibold text-white">
              Checkout
            </span>
          </div>
        </div>
      </MockupChrome>
      <div className="absolute -right-2 top-6 rounded-full border border-border bg-white px-3 py-1 text-[10px] shadow-md">
        HCAI
      </div>
    </div>
  );
}

function ChartingMockup() {
  return (
    <div className="relative">
      <MockupChrome>
        <div className="flex min-h-[260px]">
          <div className="w-8 border-r border-border bg-[#fafafa]" />
          <div className="flex-1 p-3">
            <p className="mb-2 text-caption font-semibold">Patient Chart — Zoe Friesen</p>
            <button type="button" className="mb-3 rounded-lg bg-baby-blue px-3 py-1 text-caption font-semibold">
              Copy From Last Chart
            </button>
            {['Subjective', 'Objective', 'Assessment', 'Plan'].map((section) => (
              <div key={section} className="mb-2 rounded border border-border p-2">
                <p className="text-[10px] font-bold text-text-muted">{section}</p>
                <div className="mt-1 h-4 rounded bg-[#fafafa]" />
              </div>
            ))}
          </div>
        </div>
      </MockupChrome>
      <div className="absolute -right-1 bottom-6 rounded-lg border border-border bg-white px-2 py-1 text-[10px] shadow-md">
        Shoulder Injury
      </div>
    </div>
  );
}

function BookingMockup() {
  return (
    <div className="relative flex items-end justify-center gap-3">
      <MockupChrome className="flex-1">
        <div className="p-4">
          <p className="mb-2 text-body-sm font-bold">Hi, Keisha</p>
          <div className="mb-2 rounded-lg border border-border p-2">
            <p className="text-caption font-semibold">Upcoming Appointments</p>
            <p className="text-[10px] text-text-muted">90 Min Massage — Jun 14</p>
          </div>
          <div className="rounded-lg border border-border p-2">
            <p className="text-caption font-semibold">Intake Forms</p>
            <span className="text-[10px] text-baby-blue-700">Approved</span>
          </div>
        </div>
      </MockupChrome>
      <div className="w-32 flex-shrink-0 rounded-2xl border-4 border-[#333] bg-white p-2 shadow-lg">
        <p className="mb-1 text-[9px] text-text-muted">&lt; Date & Time</p>
        <p className="mb-2 text-center text-[10px] font-bold">June 2026</p>
        <div className="mb-2 grid grid-cols-7 gap-0.5 text-center text-[7px]">
          {Array.from({ length: 21 }).map((_, i) => (
            <span key={i} className={i === 13 ? 'rounded-full bg-baby-blue font-bold' : 'text-text-muted'}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="space-y-1">
          {['11:00 am', '1:00 pm', '3:00 pm'].map((t, i) => (
            <div
              key={t}
              className={cn(
                'rounded px-1 py-0.5 text-center text-[8px]',
                i === 0 ? 'bg-baby-blue font-semibold' : 'border border-border',
              )}
            >
              {t}
            </div>
          ))}
        </div>
        <button type="button" className="mt-2 w-full rounded bg-baby-blue-800 py-1 text-[8px] font-semibold text-white">
          Review Appointment
        </button>
      </div>
    </div>
  );
}

function CommunicationsMockup() {
  return (
    <div className="relative flex items-center justify-center gap-3">
      <MockupChrome className="flex-1">
        <div className="p-4">
          <p className="mb-2 text-body-sm font-bold">Create Campaign</p>
          <div className="mb-2 h-6 rounded border border-border bg-[#fafafa]" />
          <div className="mb-2 h-16 rounded border border-border bg-[#fafafa]" />
          <p className="text-caption text-text-muted">Subject: Your appointment reminder</p>
        </div>
      </MockupChrome>
      <div className="w-28 flex-shrink-0 rounded-2xl border-4 border-[#333] bg-white p-2 shadow-lg">
        <div className="mb-2 rounded-lg bg-[#fafafa] p-2 text-[8px] leading-tight text-text-secondary">
          Hi! Your insurance benefits reset next month. Book your next RMT session today.
        </div>
        <div className="ml-auto w-3/4 rounded-lg bg-baby-blue p-2 text-[8px]">Reply STOP to opt out</div>
      </div>
    </div>
  );
}

function InsightsMockup() {
  return (
    <div className="relative">
      <MockupChrome className="absolute right-0 top-0 z-0 w-[85%] opacity-80">
        <div className="p-4">
          <p className="mb-2 text-caption font-bold">My Dashboard</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Active Patients', val: '962' },
              { label: 'New Patients', val: '178' },
              { label: 'Revenue', val: '$806K' },
              { label: 'No-shows', val: '4.2%' },
            ].map((s) => (
              <div key={s.label} className="rounded border border-border p-2">
                <p className="text-[9px] text-text-muted">{s.label}</p>
                <p className="text-body-sm font-bold">{s.val}</p>
              </div>
            ))}
          </div>
        </div>
      </MockupChrome>
      <MockupChrome className="relative z-10 w-[90%]">
        <div className="p-4">
          <p className="mb-2 text-caption font-bold">Reports</p>
          {['Accounting', 'Sales', 'Day End', 'Payments'].map((item, i) => (
            <div
              key={item}
              className={cn(
                'rounded px-2 py-1.5 text-caption',
                i === 2 ? 'bg-baby-blue/40 font-medium' : 'text-text-muted',
              )}
            >
              {item}
            </div>
          ))}
        </div>
      </MockupChrome>
    </div>
  );
}

function TelehealthMockup() {
  return (
    <div className="relative">
      <MockupChrome>
        <div className="flex min-h-[260px]">
          <div className="flex flex-1 flex-col items-center justify-center bg-[#1a1a1a] p-4">
            <Video className="mb-2 h-10 w-10 text-baby-blue" />
            <p className="text-caption text-white/80">Video session with Zoe Friesen</p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-red-500 px-3 py-1 text-[10px] text-white">End</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] text-white">Mute</span>
            </div>
          </div>
          <div className="hidden w-36 border-l border-border p-3 sm:block">
            <p className="mb-2 text-caption font-semibold">Session Notes</p>
            <div className="space-y-2">
              {['Subjective', 'Plan'].map((s) => (
                <div key={s} className="rounded border border-border p-1.5">
                  <p className="text-[9px] font-bold text-text-muted">{s}</p>
                  <div className="mt-1 h-3 bg-[#fafafa]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </MockupChrome>
      <div className="absolute -left-2 top-8 flex items-center gap-1 rounded-full border border-border bg-white px-3 py-1 text-[10px] shadow-md">
        <Check className="h-3 w-3 text-primary" /> PIPEDA Secure
      </div>
    </div>
  );
}

const MOCKUPS = {
  scheduling: SchedulingMockup,
  billing: BillingMockup,
  charting: ChartingMockup,
  booking: BookingMockup,
  communications: CommunicationsMockup,
  insights: InsightsMockup,
  telehealth: TelehealthMockup,
};

export function FeatureMockup({ featureId }) {
  const Mockup = MOCKUPS[featureId] ?? SchedulingMockup;
  return (
    <div className="relative w-full">
      <Mockup />
    </div>
  );
}
