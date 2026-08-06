import {
  Calendar,
  FileText,
  Headphones,
  MousePointer2,
  Shield,
  Upload,
  User,
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

export function ChartingHeroVisual() {
  return (
    <MockupContainer className="max-w-[600px]">
      <div className="relative h-[320px] sm:h-[360px] md:h-[400px]">
        <div className="absolute right-0 top-6 z-[1] h-52 w-52 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-baby-blue/30 to-soft-pink/40 shadow-lg sm:h-60 sm:w-60">
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
            <Headphones className="h-8 w-8 text-baby-blue-700/50" strokeWidth={1.5} />
            <User className="h-14 w-14 text-baby-blue-700/35" strokeWidth={1} />
          </div>
        </div>

        <TendoAppChrome className="absolute left-0 top-0 z-10 w-[62%]">
          <div className="flex items-center gap-1.5 border-b border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3 text-text-primary" />
            <span className="text-[10px] font-semibold">Schedule</span>
          </div>
          <div className="p-2">
            {['9:00 Zoe F.', '10:30 Mike S.', '1:00 Sarah L.'].map((row) => (
              <div key={row} className="mb-1 rounded bg-[#1e3a5f] px-2 py-1 text-[8px] font-medium text-white">
                {row}
              </div>
            ))}
          </div>
        </TendoAppChrome>

        <TendoAppChrome className="absolute bottom-0 right-0 z-20 w-[72%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <p className="text-[10px] font-bold text-text-primary">Zoe Friesen — Patient Chart</p>
          </div>
          <div className="p-3">
            {['Subjective', 'Objective', 'Assessment', 'Plan'].map((section, i) => (
              <div key={section} className="mb-2 rounded border border-[#eee] p-2">
                <p className="text-[8px] font-bold text-text-muted">{section}</p>
                {i === 1 && (
                  <p className="mt-1 text-[8px] text-[#666]">ROM improved. Patient reports less pain...</p>
                )}
                {i !== 1 && <div className="mt-1 h-2 rounded bg-[#f5f5f5]" />}
              </div>
            ))}
          </div>
        </TendoAppChrome>
      </div>
    </MockupContainer>
  );
}

export function ChartingTemplatesMockup() {
  const forms = ['Standard Consent', 'Intake Form', 'SOAP Template', 'Privacy Agreement', 'Waiver'];

  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[22%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold text-text-primary">Forms</span>
          </div>
          <div className="p-3">
            {forms.map((form, i) => (
              <div
                key={form}
                className={cn(
                  'mb-1 flex items-center gap-2 rounded border px-2 py-1.5 text-[9px]',
                  i === 0 ? 'border-baby-blue/50 bg-baby-blue/20' : 'border-[#eee]',
                )}
              >
                <FileText className="h-3 w-3 text-text-muted" />
                {form}
              </div>
            ))}
          </div>
        </TendoAppChrome>

        <div className="absolute -right-1 top-10 z-20 w-[40%] overflow-hidden rounded-[1.35rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[7px] font-bold">
            Patient Intake
          </div>
          <div className="space-y-1.5 p-2">
            <p className="text-[8px] font-bold">Clinic Patient Intake Form</p>
            {['Name', 'Date of Birth', 'Insurance'].map((field) => (
              <div key={field} className="rounded border border-[#eee] px-2 py-1 text-[7px] text-text-muted">
                {field}
              </div>
            ))}
            <div className="rounded bg-primary py-1 text-center text-[7px] font-semibold text-text-primary">
              Submit
            </div>
          </div>
        </div>
      </div>
    </MockupContainer>
  );
}

function ComplianceBadge({ label, color }) {
  return (
    <div
      className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 bg-white text-center shadow-md"
      style={{ borderColor: color }}
    >
      <Shield className="h-4 w-4" style={{ color }} strokeWidth={2} />
      <span className="mt-0.5 text-[6px] font-bold leading-tight" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

export function ChartingSecurityMockup() {
  const permissions = ['View Charts', 'Edit Charts', 'Export Data', 'Manage Users'];

  return (
    <MockupContainer>
      <div className="relative pt-6">
        <div className="absolute -top-2 left-4 z-20 flex gap-3">
          <ComplianceBadge label="HIPAA" color="#1e3a5f" />
          <ComplianceBadge label="PIPEDA" color="#00a3ad" />
          <ComplianceBadge label="PHIPA" color="#5b2d8e" />
        </div>

        <TendoAppChrome className="relative mt-8">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold text-text-primary">User Types</span>
          </div>
          <div className="p-3">
            <p className="mb-2 text-[9px] font-semibold text-text-primary">Practitioner Permissions</p>
            {permissions.map((perm, i) => (
              <div key={perm} className="mb-2 flex items-center justify-between text-[9px]">
                <span className="text-[#666]">{perm}</span>
                <div className={cn('h-4 w-8 rounded-full', i < 3 ? 'bg-[#00a3ad]' : 'bg-[#ddd]')}>
                  <div className={cn('h-4 w-4 rounded-full bg-white shadow', i < 3 ? 'ml-4' : '')} />
                </div>
              </div>
            ))}
          </div>
        </TendoAppChrome>
      </div>
    </MockupContainer>
  );
}

export function ChartingSimpleMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="border-b border-[#eee] px-3 py-1.5">
          <span className="text-[10px] font-semibold text-text-primary">Patient Chart — Zoe Friesen</span>
        </div>
        <div className="p-3">
          <div className="mb-2 rounded bg-baby-blue/30 px-2 py-1 text-[9px] font-medium">
            Copy From Last Chart
          </div>
          {['Subjective', 'Objective'].map((s) => (
            <div key={s} className="mb-2 rounded border border-[#eee] p-2">
              <p className="text-[8px] font-bold text-text-muted">{s}</p>
              <div className="mt-1 h-3 rounded bg-[#f5f5f5]" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 w-44 rounded-lg border border-[#e8e8e8] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <p className="mb-2 text-[10px] font-bold text-text-primary">Appointment Details</p>
          <p className="text-[9px] text-[#666]">Zoe Friesen · 60 Min RMT</p>
          <div className="mt-2 space-y-1">
            {['Edit Chart', 'Add Note', 'Send Reminder'].map((action) => (
              <div key={action} className="rounded bg-[#fafafa] px-2 py-1 text-[8px] text-text-primary">
                {action}
              </div>
            ))}
          </div>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

export function ChartingRecordsMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative">
          <div className="grid grid-cols-5 gap-0">
            <div className="col-span-2 border-r border-[#eee] p-3">
              <p className="mb-2 text-[10px] font-bold text-text-primary">Generate A Letter</p>
              <div className="mb-2 rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">
                Referral Letter
              </div>
              <div className="mb-2 rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">
                To: Dr. Smith
              </div>
              <div className="rounded-lg bg-[#00a3ad] py-1.5 text-center text-[9px] font-semibold text-white">
                Send Fax
              </div>
            </div>
            <div className="col-span-3 bg-[#fafafa] p-3">
              <p className="mb-2 text-[9px] font-bold text-text-muted">PREVIEW</p>
              <div className="rounded border border-[#eee] bg-white p-2">
                <p className="text-[10px] font-bold text-text-primary">MOTION</p>
                <div className="mt-2 space-y-1">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="h-2 rounded bg-[#f0f0f0]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TendoAppChrome>

        <MousePointer2
          className="absolute bottom-8 left-[28%] z-20 h-5 w-5 text-[#1a1a1a] drop-shadow-md"
          fill="white"
          strokeWidth={1.5}
        />
      </div>
    </MockupContainer>
  );
}

export function ChartingIntegrationsMockup() {
  const files = ['Lab Results.pdf', 'X-Ray Report.pdf', 'Referral Letter.pdf'];

  return (
    <MockupContainer className="max-w-[580px]">
      <div className="relative pb-4 pt-2">
        <TendoAppChrome className="relative mr-[24%] opacity-95">
          <div className="flex min-h-[180px]">
            <aside className="w-20 border-r border-[#eee] bg-[#fafafa] p-2">
              <p className="mb-2 text-[8px] font-bold">Files</p>
              {files.map((f, i) => (
                <div
                  key={f}
                  className={cn(
                    'mb-1 truncate rounded px-1 py-0.5 text-[7px]',
                    i === 0 ? 'bg-baby-blue/40' : 'text-text-muted',
                  )}
                >
                  {f}
                </div>
              ))}
            </aside>
            <div className="flex-1 p-3">
              <p className="text-[9px] text-text-muted">Document preview</p>
              <div className="mt-2 h-24 rounded bg-[#f0f0f0]" />
            </div>
          </div>
        </TendoAppChrome>

        <div className="absolute -right-1 top-8 z-20 w-[38%] overflow-hidden rounded-[1.35rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold">
            Documents
          </div>
          <div className="space-y-1 p-2">
            {files.map((f) => (
              <div key={f} className="flex items-center gap-1 rounded border border-[#eee] px-2 py-1 text-[7px]">
                <FileText className="h-2.5 w-2.5" />
                {f.replace('.pdf', '')}
              </div>
            ))}
            <div className="flex items-center justify-center gap-1 rounded-lg bg-primary py-1.5 text-[8px] font-semibold text-text-primary">
              <Upload className="h-3 w-3" />
              Upload Document
            </div>
          </div>
        </div>
      </div>
    </MockupContainer>
  );
}
