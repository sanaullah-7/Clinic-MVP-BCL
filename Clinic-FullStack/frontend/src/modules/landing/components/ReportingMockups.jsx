import {
  BarChart3,
  MousePointer2,
  Shield,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/cn';

function TendoAppChrome({ children, className }) {
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
      <div className="flex h-8 items-center gap-2 bg-gradient-to-r from-baby-blue to-soft-pink/60 px-3">
        <span className="text-[10px] font-bold tracking-[0.12em] text-text-primary">TENDO</span>
      </div>
      {children}
    </div>
  );
}

export function MockupContainer({ children, className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[580px] lg:max-w-none', className)}>
      {children}
    </div>
  );
}

/** Hero — lifestyle circle + My Dashboard overlay */
export function ReportingHeroVisual() {
  const kpis = [
    { label: 'Revenue', value: '$42.5k' },
    { label: 'Patients', value: '248' },
    { label: 'Appts', value: '86' },
  ];

  return (
    <MockupContainer className="max-w-[600px]">
      <div className="relative h-[320px] sm:h-[360px] md:h-[400px]">
        <div className="absolute right-4 top-10 z-[1] h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-baby-blue/30 to-soft-pink/40 shadow-lg sm:h-56 sm:w-56">
          <div className="flex h-full items-center justify-center">
            <User className="h-16 w-16 text-baby-blue-700/35" strokeWidth={1} />
          </div>
        </div>

        <TendoAppChrome className="absolute left-0 top-0 z-10 w-[85%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold text-text-primary">My Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
                <p className="text-[7px] text-text-muted">{kpi.label}</p>
                <p className="text-[11px] font-bold text-text-primary">{kpi.value}</p>
              </div>
            ))}
          </div>
          <div className="mx-3 mb-3 h-16 rounded bg-gradient-to-r from-baby-blue/40 to-soft-pink/30" />
        </TendoAppChrome>
      </div>
    </MockupContainer>
  );
}

/** Clinic Summary Report + export modal */
export function CentralizeDataMockup() {
  const rows = ['Revenue', 'Expenses', 'Net Income', 'Patient Visits'];
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Clinic Summary Report</span>
          </div>
          <div className="p-3">
            <div className="mb-1 grid grid-cols-4 border-b border-[#eee] pb-1 text-[8px] font-semibold text-text-muted">
              <span>Metric</span>
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
            </div>
            {rows.map((row) => (
              <div key={row} className="grid grid-cols-4 border-b border-[#f5f5f5] py-1 text-[8px]">
                <span>{row}</span>
                <span>$12k</span>
                <span>$14k</span>
                <span>$15k</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 w-44 rounded-lg border border-[#eee] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <p className="mb-2 text-[9px] font-bold">Reports | Clinic Summary</p>
            <div className="mb-1 rounded border border-[#eee] px-2 py-0.5 text-[7px] text-text-muted">Start Date</div>
            <div className="mb-2 rounded border border-[#eee] px-2 py-0.5 text-[7px] text-text-muted">End Date</div>
            <div className="rounded-lg bg-[#00a3ad] py-1 text-center text-[8px] font-semibold text-white">Export</div>
          </div>
        </TendoAppChrome>
        <MousePointer2 className="absolute bottom-10 right-[32%] z-20 h-5 w-5 text-[#1a1a1a]" fill="white" strokeWidth={1.5} />
      </div>
    </MockupContainer>
  );
}

/** Patient Insights + Drop-Off Report + filters */
export function PatientInsightsMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="flex min-h-[220px]">
          <aside className="w-24 border-r border-[#eee] bg-[#fafafa] p-2">
            <p className="mb-2 text-[8px] font-bold">Patient Insights</p>
            {['Overview', 'Segments', 'Drop-Off'].map((item, i) => (
              <div
                key={item}
                className={cn(
                  'mb-1 rounded px-1 py-0.5 text-[7px]',
                  i === 2 ? 'bg-baby-blue/40 font-semibold' : 'text-text-muted',
                )}
              >
                {item}
              </div>
            ))}
          </aside>
          <div className="flex-1 p-3">
            <p className="mb-2 text-[9px] font-bold">Drop-Off Report</p>
            <div className="space-y-1">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="grid grid-cols-3 gap-1 text-[7px]">
                  <span>Patient {n}</span>
                  <span>Last visit</span>
                  <span className="text-primary">45 days</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 w-36 rounded-lg border border-[#eee] bg-white p-2 shadow-lg">
          <p className="mb-1 text-[8px] font-bold">Filters List</p>
          <p className="text-[7px] text-text-muted">Schedule · Demographics</p>
        </div>
        <MousePointer2 className="absolute left-[20%] top-3 z-20 h-4 w-4 text-[#1a1a1a]" fill="white" strokeWidth={1.5} />
      </TendoAppChrome>
    </MockupContainer>
  );
}

function ComplianceBadge({ label, color }) {
  return (
    <div className="rounded-lg border border-[#eee] bg-white px-3 py-2 text-center shadow-md">
      <Shield className="mx-auto mb-1 h-5 w-5" style={{ color }} strokeWidth={1.75} />
      <span className="text-[8px] font-bold" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

/** Team at laptop + compliance badges */
export function DataProtectionMockup() {
  return (
    <MockupContainer>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-soft-pink/30 to-baby-blue/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <div className="flex min-h-[200px] items-center justify-center gap-6">
          <Users className="h-16 w-16 text-baby-blue-700/40" strokeWidth={1} />
          <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-md">
            <BarChart3 className="h-8 w-8 text-primary" />
            <p className="mt-2 text-[9px] font-semibold text-text-primary">Audit Logs</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <ComplianceBadge label="PHIPA" color="#0057a8" />
          <ComplianceBadge label="HIPAA" color="#1e3a5f" />
          <ComplianceBadge label="PIPEDA" color="#d52b1e" />
        </div>
      </div>
    </MockupContainer>
  );
}

/** Scale section — dashboard + patient detail layers */
export function ReportingScaleMockup() {
  return (
    <MockupContainer className="max-w-[580px]">
      <div className="relative pb-6 pt-2">
        <TendoAppChrome className="relative mr-[8%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">My Dashboard</span>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3">
            <div className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
              <p className="text-[8px] text-text-muted">New Patients</p>
              <p className="text-[14px] font-bold text-text-primary">178</p>
            </div>
            <div className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
              <p className="text-[8px] text-text-muted">Scheduled Appts</p>
              <p className="text-[14px] font-bold text-text-primary">23</p>
            </div>
          </div>
          <div className="mx-3 mb-3 flex items-end gap-1">
            {[40, 65, 45, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-baby-blue/60" style={{ height: `${h}px` }} />
            ))}
          </div>
        </TendoAppChrome>
        <TendoAppChrome className="absolute -bottom-2 right-0 z-20 w-[72%] shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
          <div className="p-2">
            <p className="text-[9px] font-bold">Zoe Friesen — Records</p>
            <div className="mt-1 space-y-1">
              {['Visit May 20', 'Invoice #1042'].map((r) => (
                <div key={r} className="flex items-center justify-between rounded border border-[#eee] px-2 py-0.5 text-[7px]">
                  <span>{r}</span>
                  <span className="rounded bg-primary/30 px-1 font-semibold">Action</span>
                </div>
              ))}
            </div>
          </div>
        </TendoAppChrome>
      </div>
    </MockupContainer>
  );
}

/** Clinic Accelerator partnership */
export function PartnershipMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#eee] bg-white shadow-md">
      <div className="border-b border-[#eee] bg-[#fafafa] px-3 py-1.5 text-[9px] font-semibold">KPI Report</div>
      <div className="p-3">
        <div className="mb-1 grid grid-cols-3 border-b border-[#eee] pb-1 text-[8px] font-semibold text-text-muted">
          <span>KPI</span>
          <span>Target</span>
          <span>Actual</span>
        </div>
        {['Retention', 'Revenue', 'PVA'].map((k) => (
          <div key={k} className="grid grid-cols-3 border-b border-[#f5f5f5] py-1 text-[8px]">
            <span>{k}</span>
            <span>85%</span>
            <span className="font-medium text-[#28c840]">92%</span>
          </div>
        ))}
        <div className="mt-2 rounded-lg bg-[#28c840] py-1 text-center text-[8px] font-semibold text-white">Export</div>
      </div>
    </div>
  );
}

export { TrendingUp, BarChart3 };
