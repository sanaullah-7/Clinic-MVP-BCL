import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  MessageSquare,
  Monitor,
  Network,
  User,
  Video,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import clinicImage from '@/assets/tendo-busy-clinic.webp';

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

const TOOL_ICONS = {
  scheduling: Calendar,
  billing: CreditCard,
  charting: FileText,
  analytics: BarChart3,
  communications: MessageSquare,
  booking: Globe,
  telehealth: Video,
  integrations: Network,
};

/** Hero — lifestyle circle + dashboard overlay */
export function COHeroVisual() {
  const kpis = [
    { label: 'Revenue', value: '$42.5k' },
    { label: 'Patients', value: '248' },
    { label: 'Appts', value: '86' },
  ];

  return (
    <Wrap className="lg:scale-110 xl:scale-[1.15]">
      <div className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute right-[4%] top-[10%] z-[1] h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-52 sm:w-52 md:h-56 md:w-56">
          <img src={clinicImage} alt="Clinic owner reviewing practice operations" className="h-full w-full object-cover" />
        </div>

        <TendoChrome className="absolute left-0 top-0 z-10 w-[88%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a]">My Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
                <p className="text-[7px] text-[#999]">{kpi.label}</p>
                <p className="text-[11px] font-bold text-[#1a1a1a]">{kpi.value}</p>
              </div>
            ))}
          </div>
          <div className="mx-3 mb-3 flex h-20 items-end gap-1 rounded-lg bg-gradient-to-r from-baby-blue/40 to-soft-pink/30 p-2">
            {[40, 65, 45, 80, 55, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-[#00a3ad]/70" style={{ height: `${h}%` }} />
            ))}
          </div>
        </TendoChrome>
      </div>
    </Wrap>
  );
}

/** Platform tools wheel — 8 icons around Tendo hub */
export function COPlatformWheel({ tools }) {
  return (
    <div className="relative mx-auto max-w-[720px] py-6 md:py-10">
      <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
        <div className="absolute inset-[28%] z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00a3ad] to-[#1e3a5f] shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          <svg viewBox="0 0 40 40" className="h-12 w-12 md:h-14 md:w-14" fill="none" aria-hidden>
            <path d="M8 22c4-8 8-12 12-12s8 4 12 12" stroke="#f7803c" strokeWidth="3" strokeLinecap="round" />
            <path d="M10 26h20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {tools.map((tool, i) => {
          const Icon = TOOL_ICONS[tool.id] ?? Monitor;
          const angle = (i / tools.length) * 2 * Math.PI - Math.PI / 2;
          const radius = 42;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <div
              key={tool.id}
              className="absolute z-20 flex w-[72px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 sm:w-[80px]"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ecea] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-[#1a1a1a]" strokeWidth={1.75} />
              </div>
              <span className="text-center text-[9px] font-semibold leading-tight text-[#666666] sm:text-[10px]">
                {tool.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Patient experience — telehealth + charting composite */
export function COPatientExperienceMockup() {
  return (
    <Wrap>
      <div className="relative flex items-end gap-3 pb-2">
        <TendoChrome className="min-w-0 flex-[1.1]">
          <div className="relative aspect-video bg-[#1e3a5f]">
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="h-12 w-12 text-white/40" strokeWidth={1} />
            </div>
            <div className="absolute bottom-2 right-2 h-14 w-20 overflow-hidden rounded border-2 border-white bg-[#333]">
              <div className="flex h-full items-center justify-center">
                <User className="h-5 w-5 text-white/60" />
              </div>
            </div>
            <div className="absolute left-2 top-2 rounded bg-[#00a3ad] px-1.5 py-0.5 text-[6px] font-bold text-white">
              Live
            </div>
          </div>
        </TendoChrome>

        <TendoChrome className="absolute left-[8%] top-[8%] z-10 w-[55%] shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
          <div className="p-2">
            <p className="mb-1 text-[8px] font-bold">Patient Chart — Exercise Plan</p>
            <div className="mb-1 grid grid-cols-3 gap-1">
              {['Squat', 'Lunge', 'Bridge'].map((ex) => (
                <div key={ex} className="rounded bg-baby-blue/40 p-1 text-center text-[6px] font-medium">
                  {ex}
                </div>
              ))}
            </div>
            <div className="h-12 rounded border border-[#eee] bg-[#fafafa]" />
          </div>
        </TendoChrome>
      </div>
    </Wrap>
  );
}

/** Benefit card — insights dashboard thumbnail */
export function COInsightsCardMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="border-b border-[#eee] bg-gradient-to-r from-baby-blue to-soft-pink/50 px-3 py-1.5 text-[9px] font-bold">
        TENDO
      </div>
      <div className="p-3">
        <p className="mb-2 text-[9px] font-bold">Patient Flow Report</p>
        <div className="mb-2 flex h-16 items-end gap-1">
          {[35, 55, 40, 70, 50, 65].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-[#00a3ad]/60" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-[7px]">
          <div className="rounded bg-[#fafafa] p-1.5">
            <p className="text-[#999]">Retention</p>
            <p className="font-bold">92%</p>
          </div>
          <div className="rounded bg-[#fafafa] p-1.5">
            <p className="text-[#999]">Revenue</p>
            <p className="font-bold">+18%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Benefit card — onboarding support */
export function COOnboardingMockup() {
  return (
    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-soft-pink/30 to-baby-blue/40 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex min-h-[140px] flex-col items-center justify-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
          <Headphones className="h-8 w-8 text-[#00a3ad]" strokeWidth={1.5} />
        </div>
        <p className="text-center text-[10px] font-semibold text-[#1a1a1a]">7-day support · 1:1 training</p>
      </div>
    </div>
  );
}

export {
  ChartingSecurityMockup as COWorkflowsMockup,
} from './ChartingMockups';

export {
  PatientInsightsMockup as COAnalyticsMockup,
  PartnershipMockup as COPartnershipMockup,
  DataProtectionMockup as COSecurityMockup,
} from './ReportingMockups';

export {
  LaptopScheduleMockup,
} from './PhysicalTherapyMockups';

export { IntegrationsHub as COIntegrationsHub } from './IntegrationsSection';
