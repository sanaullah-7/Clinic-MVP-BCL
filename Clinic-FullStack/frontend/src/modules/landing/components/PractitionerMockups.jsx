import {
  Bell,
  Calendar,
  FileText,
  Handshake,
  MessageSquare,
  Monitor,
  Smartphone,
  Sparkles,
  User,
  Users,
  Video,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import clinicImage from '@/assets/tendo-busy-clinic.webp';

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

/** Hero — laptop + tablet + phone + lifestyle circle */
export function PRHeroVisual() {
  return (
    <Wrap className="lg:scale-110 xl:scale-[1.15]">
      <div className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute right-[2%] top-[8%] z-[1] h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-48 sm:w-48">
          <img src={clinicImage} alt="Practitioner assisting a patient in clinic" className="h-full w-full object-cover" />
        </div>

        <TendoChrome className="absolute left-0 top-0 z-10 w-[88%]">
          <div className="flex items-center gap-1.5 border-b border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3" />
            <span className="text-[10px] font-semibold">My Day</span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {[
              { label: 'Appts Today', value: '178' },
              { label: 'Confirmed', value: '23' },
              { label: 'Show Rate', value: '92%' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
                <p className="text-[7px] text-[#999]">{kpi.label}</p>
                <p className="text-[11px] font-bold">{kpi.value}</p>
              </div>
            ))}
          </div>
          <div className="mx-3 mb-3 space-y-1">
            {['9:00 Zoe F.', '10:30 Mike S.', '1:00 Sarah L.'].map((row) => (
              <div key={row} className="rounded bg-[#1e3a5f] px-2 py-1 text-[8px] font-medium text-white">
                {row}
              </div>
            ))}
          </div>
        </TendoChrome>

        <div className="absolute bottom-[10%] right-[6%] z-20 w-[32%] max-w-[140px] overflow-hidden rounded-xl border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="flex aspect-[3/4] items-center justify-center bg-[#e6f7f5] p-2">
            <User className="h-8 w-8 text-[#00a3ad]/50" strokeWidth={1} />
          </div>
        </div>

        <div className="absolute bottom-[4%] left-[12%] z-[15] w-[28%] max-w-[120px] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-0.5 text-center text-[6px] font-bold">
            TENDO
          </div>
          <div className="flex aspect-[9/14] items-center justify-center bg-[#fafafa]">
            <Smartphone className="h-5 w-5 text-[#999]" />
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** AI charting — summary + scribe + telehealth phone */
export function PRAIChartingMockup() {
  return (
    <Wrap>
      <div className="relative pb-4">
        <div className="absolute left-2 top-2 z-20 flex items-center gap-1 rounded-full bg-[#00a3ad] px-2.5 py-1 shadow-md">
          <Sparkles className="h-3 w-3 text-white" />
          <span className="text-[8px] font-bold text-white">Scribe AI</span>
        </div>

        <TendoChrome className="relative mr-[22%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">AI Summary — Patient Chart</span>
          </div>
          <div className="p-3">
            <div className="mb-2 rounded-lg bg-baby-blue/30 p-2">
              <p className="text-[8px] font-bold text-[#00a3ad]">AI Chart Summary</p>
              <p className="mt-1 text-[7px] leading-snug text-[#666]">
                Patient presents with improved ROM. Continue current treatment plan...
              </p>
            </div>
            {['Subjective', 'Objective', 'Plan'].map((s) => (
              <div key={s} className="mb-1 rounded border border-[#eee] p-1.5">
                <p className="text-[7px] font-bold text-[#999]">{s}</p>
                <div className="mt-0.5 h-2 rounded bg-[#f5f5f5]" />
              </div>
            ))}
          </div>
        </TendoChrome>

        <div className="absolute -right-1 bottom-0 z-10 w-[36%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="flex aspect-[9/14] items-center justify-center bg-[#1e3a5f]">
            <Video className="h-6 w-6 text-white/80" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Personalized practitioner dashboard */
export function PRDashboardMockup() {
  return (
    <Wrap>
      <TendoChrome>
        <div className="flex items-center gap-2 border-b border-[#eee] px-3 py-1.5">
          <span className="text-[10px] font-semibold">My Dashboard</span>
          <div className="ml-auto flex gap-1">
            {['Schedule', 'Agenda', 'Statistics'].map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  'rounded px-1.5 py-0.5 text-[7px]',
                  i === 0 ? 'bg-baby-blue/40 font-semibold' : 'text-[#999]',
                )}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3">
          {[
            { label: 'Appts Today', value: '178' },
            { label: 'Confirmed', value: '23' },
            { label: 'Show Rate', value: '92.4%' },
            { label: 'Drop-Offs', value: '12' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
              <p className="text-[6px] text-[#999]">{kpi.label}</p>
              <p className="text-[10px] font-bold">{kpi.value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-0 border-t border-[#eee]">
          <div className="col-span-3 border-r border-[#eee] p-2">
            <div className="space-y-1">
              {['9:00 Zoe F.', '10:30 Mike S.', '1:00 Sarah L.'].map((row) => (
                <div key={row} className="rounded bg-[#1e3a5f] px-2 py-1 text-[8px] font-medium text-white">
                  {row}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 p-2">
            <p className="mb-1 text-[8px] font-bold">Patient Drop-Offs</p>
            {['Alex M. — 45 days', 'Jordan K. — 62 days'].map((p) => (
              <div key={p} className="mb-1 rounded border border-[#eee] bg-[#fafafa] px-1.5 py-1 text-[7px]">
                {p}
              </div>
            ))}
          </div>
        </div>
      </TendoChrome>
    </Wrap>
  );
}

/** Patient experience — chart + telehealth + mobile */
export function PRPatientExperienceMockup() {
  return (
    <Wrap>
      <div className="relative flex items-end gap-3 pb-2">
        <TendoChrome className="min-w-0 flex-[1.1]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <p className="text-[10px] font-bold">Patient Chart — Exercise Plan</p>
          </div>
          <div className="p-3">
            <div className="mb-2 grid grid-cols-3 gap-1">
              {['Squat', 'Lunge', 'Bridge'].map((ex) => (
                <div key={ex} className="rounded bg-baby-blue/40 p-1 text-center text-[6px] font-medium">
                  {ex}
                </div>
              ))}
            </div>
            <div className="h-16 rounded border border-[#eee] bg-[#fafafa]" />
          </div>
        </TendoChrome>

        <TendoChrome className="absolute left-[6%] top-[6%] z-10 w-[52%] shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
          <div className="relative aspect-video bg-[#1e3a5f]">
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="h-10 w-10 text-white/40" strokeWidth={1} />
            </div>
            <div className="absolute bottom-2 right-2 h-12 w-16 rounded border-2 border-white bg-[#333]">
              <div className="flex h-full items-center justify-center">
                <User className="h-4 w-4 text-white/60" />
              </div>
            </div>
          </div>
        </TendoChrome>

        <div className="absolute -right-1 bottom-0 z-20 w-[34%] overflow-hidden rounded-[1.1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <MessageSquare className="mb-1 h-4 w-4 text-[#00a3ad]" />
            <p className="text-[7px] font-bold">New message</p>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Benefit — mobile file sharing */
export function PRImagingMockup() {
  return (
    <div className="relative mx-auto flex max-w-[200px] items-end justify-center gap-2 px-4">
      <div className="w-[42%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-lg">
        <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[6px] font-bold">
          TENDO
        </div>
        <div className="p-2">
          <FileText className="mb-1 h-4 w-4 text-[#00a3ad]" />
          <p className="text-[7px] font-bold">Lab Results</p>
        </div>
      </div>
      <div className="w-[48%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
        <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
          TENDO
        </div>
        <div className="p-2">
          <p className="text-[8px] font-bold">Attach Photo</p>
          <div className="mt-1 h-12 rounded bg-[#f0f0f0]" />
        </div>
      </div>
    </div>
  );
}

/** Benefit — patient retention */
export function PRRetentionMockup() {
  return (
    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-soft-pink/30 to-baby-blue/40 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex min-h-[140px] items-center justify-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
          <Users className="h-8 w-8 text-[#00a3ad]" strokeWidth={1.5} />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
          <Handshake className="h-7 w-7 text-primary" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

/** Benefit — charting interface */
export function PRChartingBenefitMockup() {
  return (
    <TendoChrome>
      <div className="border-b border-[#eee] px-3 py-1.5">
        <span className="text-[10px] font-semibold">Patient Chart — SOAP</span>
      </div>
      <div className="p-3">
        <div className="mb-2 flex items-center gap-1 rounded bg-primary/25 px-2 py-1 text-[7px] font-semibold">
          <Sparkles className="h-3 w-3" />
          AI Auto-phrase
        </div>
        {['Subjective', 'Objective', 'Assessment', 'Plan'].map((s) => (
          <div key={s} className="mb-1 rounded border border-[#eee] p-1.5">
            <p className="text-[7px] font-bold text-[#999]">{s}</p>
            <div className="mt-0.5 h-2 rounded bg-[#f5f5f5]" />
          </div>
        ))}
      </div>
    </TendoChrome>
  );
}

export { LaptopScheduleMockup } from './PhysicalTherapyMockups';
