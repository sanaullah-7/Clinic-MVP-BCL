import { FadeIn } from '@/components';
import {
  Search,
  Bell,
  Mail,
  Plus,
  Calendar,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
} from 'lucide-react';

const SIDEBAR_ICONS = [Calendar, Users, FileText, CreditCard, BarChart3, Settings];

const APPOINTMENTS = [
  { time: '9:00', name: 'Zoe Friesen', service: '60 Min RMT', color: 'bg-baby-blue-400' },
  { time: '10:30', name: 'Mike Smith', service: '45 Min Massage', color: 'bg-soft-pink' },
  { time: '1:00', name: 'Sarah Lee', service: '90 Min Deep Tissue', color: 'bg-primary/80' },
  { time: '2:30', name: 'James Park', service: '30 Min Consult', color: 'bg-baby-blue-300' },
];

export function ProductShowcase() {
  return (
    <FadeIn delay={0.15} className="relative mx-auto max-w-content px-4 pb-16 md:px-8">
      {/* Lifestyle hero card — Outlier pink/blue gradient */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-soft-pink/60 via-white to-baby-blue/50 p-5 shadow-card md:rounded-[2.5rem] md:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-soft-pink/40 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-baby-blue/50 blur-3xl"
          aria-hidden
        />

        {/* Floating notification */}
        <div className="absolute right-6 top-6 z-20 hidden rounded-full border border-border bg-white px-4 py-2 text-body-sm shadow-md md:right-10 md:top-10 md:block">
          <span className="text-text-muted">Next Appointment in 10min:</span>{' '}
          <span className="font-medium text-text-primary">Patricia M.</span>
        </div>

        <div className="relative mx-auto max-w-4xl pt-4 md:pt-6">
          {/* Dashboard mockup — rounded full frame */}
          <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-laptop md:rounded-3xl">
            <div className="flex min-h-[380px] bg-white md:min-h-[420px]">
              {/* Sidebar */}
              <aside className="hidden w-14 flex-shrink-0 flex-col items-center gap-4 border-r border-border bg-soft-pink/20 py-4 sm:flex">
                {SIDEBAR_ICONS.map((Icon, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${i === 0 ? 'bg-baby-blue text-text-primary' : 'text-text-muted'}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </aside>

              <div className="flex flex-1 flex-col">
                {/* Top bar gradient */}
                <div className="flex h-12 items-center gap-3 bg-gradient-to-r from-baby-blue to-soft-pink px-4">
                  <div className="flex flex-1 items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5">
                    <Search className="h-4 w-4 text-text-muted" />
                    <span className="text-body-sm text-text-muted">Search patients, appointments...</span>
                  </div>
                  <Bell className="h-4 w-4 text-text-primary" />
                  <Mail className="h-4 w-4 text-text-primary" />
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-caption font-bold text-text-primary">
                    SC
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 border-b border-border bg-white px-4 pt-3">
                  {['My Day', 'Schedule', 'Agenda', 'Statistics'].map((tab, i) => (
                    <button
                      key={tab}
                      type="button"
                      className={`rounded-t-lg px-4 py-2 text-body-sm font-medium ${i === 0 ? 'bg-baby-blue/40 text-text-primary' : 'text-text-muted'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Schedule grid */}
                <div className="flex flex-1 gap-4 p-4">
                  <div className="flex-1">
                    <p className="mb-3 text-body-sm font-semibold text-text-primary">Wednesday, May 24</p>
                    <div className="space-y-2">
                      {APPOINTMENTS.map((appt) => (
                        <div key={appt.time} className="flex items-stretch gap-2">
                          <span className="w-12 flex-shrink-0 pt-2 text-caption text-text-muted">{appt.time}</span>
                          <div className={`flex-1 rounded-lg ${appt.color} px-3 py-2`}>
                            <p className="text-body-sm font-semibold text-text-primary">{appt.name}</p>
                            <p className="text-caption text-text-muted">{appt.service}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="hidden w-52 flex-shrink-0 space-y-3 md:block">
                    <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
                      <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-text-muted">
                        Uncharted
                      </p>
                      <p className="text-body-sm font-medium text-text-primary">Zack Hughes</p>
                      <p className="text-caption text-text-muted">Needs chart entry</p>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
                      <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-text-muted">
                        Patient
                      </p>
                      <p className="text-body-sm font-medium text-text-primary">Zoe Friesen</p>
                      <button
                        type="button"
                        className="mt-2 w-full rounded-lg bg-primary py-1.5 text-caption font-semibold text-text-primary"
                      >
                        Add Chart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating appointment card */}
          <div className="absolute -bottom-3 left-2 z-10 max-w-xs rounded-xl bg-brand-nav px-4 py-3 text-white shadow-lg md:-bottom-4 md:left-6">
            <p className="text-body-sm font-semibold">Zoe Friesen — 60 Min RMT Treatment</p>
            <p className="text-caption text-white/70">9:00 AM · Confirmed</p>
          </div>

          {/* Portal style floating card */}
          <div className="absolute -right-1 top-1/3 z-10 hidden w-48 rounded-xl border border-border bg-white p-4 shadow-card lg:block">
            <p className="mb-3 text-body-sm font-semibold text-text-primary">Portal Style</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-caption">
                <span className="text-text-muted">Buttons</span>
              </div>
              <div className="h-6 rounded bg-baby-blue" />
              <div className="h-6 rounded bg-primary" />
            </div>
          </div>

          {/* Booked Appointments speech bubble */}
          <div className="relative mx-auto mt-8 w-fit">
            <div className="rounded-2xl border border-border bg-white px-6 py-3 text-body-sm font-semibold text-text-primary shadow-md">
              Booked Appointments
            </div>
            <div className="mx-auto h-0 w-0 border-x-[10px] border-t-[12px] border-x-transparent border-t-white drop-shadow-sm" />
          </div>
        </div>
      </div>

      {/* Date picker pill */}
      <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-body-sm shadow-md">
        <Calendar className="h-4 w-4 text-primary" />
        <span className="font-medium text-text-primary">May 01, 2026 — May 07, 2026</span>
        <Plus className="h-4 w-4 text-text-muted" />
      </div>
    </FadeIn>
  );
}
