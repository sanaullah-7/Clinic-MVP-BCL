import {
  Calendar,
  Monitor,
  MousePointer2,
  Share2,
  Shield,
  User,
  UserCheck,
  Users,
  Video,
} from 'lucide-react';
import { cn } from '@/lib/cn';

function TendoAppChrome({ children, className, darkHeader }) {
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
      <div
        className={cn(
          'flex h-8 items-center gap-2 px-3',
          darkHeader ? 'bg-[#1e3a5f] text-white' : 'bg-gradient-to-r from-baby-blue to-soft-pink/60 text-text-primary',
        )}
      >
        <span className={cn('text-[10px] font-bold tracking-[0.12em]', darkHeader && 'text-white')}>TENDO</span>
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({ children, className }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[1.35rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]',
        className,
      )}
    >
      <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold text-text-primary">
        TENDO
      </div>
      {children}
    </div>
  );
}

function VideoFeed({ label, className }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] text-white',
        className,
      )}
    >
      <div className="text-center">
        <User className="mx-auto mb-1 h-8 w-8 opacity-60" strokeWidth={1} />
        {label && <p className="text-[8px] opacity-80">{label}</p>}
      </div>
    </div>
  );
}

function ComplianceBadge({ label, color }) {
  return (
    <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 bg-white text-center shadow-md">
      <Shield className="h-4 w-4" style={{ color }} strokeWidth={1.75} />
      <span className="mt-0.5 text-[5px] font-bold leading-tight" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

export function MockupContainer({ children, className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[620px] lg:max-w-none', className)}>
      {children}
    </div>
  );
}

/** Hero — desktop video + mobile join session */
export function TelehealthHeroVisual() {
  return (
    <MockupContainer className="max-w-[640px]">
      <div className="relative h-[300px] sm:h-[340px] md:h-[380px]">
        <TendoAppChrome className="absolute right-0 top-0 z-10 w-[78%]" darkHeader>
          <VideoFeed className="h-[180px] sm:h-[200px]" label="Video Session" />
          <div className="flex items-center justify-center gap-3 border-t border-[#eee] bg-[#fafafa] py-2">
            <Video className="h-3.5 w-3.5 text-text-muted" />
            <Monitor className="h-3.5 w-3.5 text-text-muted" />
            <Share2 className="h-3.5 w-3.5 text-text-muted" />
          </div>
        </TendoAppChrome>

        <PhoneFrame className="absolute bottom-0 left-0 z-20 w-[42%]">
          <div className="p-3 text-center">
            <Video className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="mb-1 text-[8px] font-bold leading-tight">Join Your Telehealth Session</p>
            <p className="mb-2 text-[7px] text-text-muted">Dr. Lee · May 22, 2:00 PM</p>
            <div className="rounded-lg bg-[#28c840] py-1.5 text-[8px] font-bold text-white">JOIN</div>
          </div>
        </PhoneFrame>
      </div>
    </MockupContainer>
  );
}

/** Security — large video + badges + share screen */
export function TelehealthSecurityMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="relative">
          <VideoFeed className="h-[220px] sm:h-[260px] md:h-[280px]" label="Practitioner" />
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            <ComplianceBadge label="PIPEDA" color="#d52b1e" />
            <ComplianceBadge label="HIPAA" color="#1e3a5f" />
            <ComplianceBadge label="PHIPA" color="#0057a8" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#eee] bg-[#fafafa] px-4 py-2.5">
          <div className="flex gap-3">
            <Video className="h-4 w-4 text-text-muted" />
            <Monitor className="h-4 w-4 text-text-muted" />
          </div>
          <div className="relative rounded-lg bg-baby-blue/50 px-3 py-1 text-[9px] font-semibold text-text-primary">
            Share Screen
            <MousePointer2
              className="absolute -bottom-3 -right-3 h-5 w-5 text-[#1a1a1a]"
              fill="white"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

/** No third-party — calendar + mobile video */
export function TelehealthNoAppsMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-4 pt-2">
        <TendoAppChrome className="relative mr-[30%]">
          <div className="flex border-b border-[#eee] bg-[#fafafa] text-[8px] font-semibold">
            {['Mon', 'Tue', 'Wed', 'Thu'].map((d) => (
              <div key={d} className="flex-1 border-r border-[#eee] p-1.5 last:border-r-0">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-1 p-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'rounded p-1.5 text-[7px]',
                  i === 2 ? 'bg-[#1e3a5f] text-white' : i % 2 ? 'bg-baby-blue/60' : 'bg-soft-pink/70',
                )}
              >
                {i === 2 ? 'Telehealth' : 'Appt'}
              </div>
            ))}
          </div>
          <div className="absolute left-[30%] top-[35%] z-10 min-w-[120px] rounded-lg border border-[#eee] bg-white py-1 shadow-lg">
            {['Start Telehealth', 'Reschedule', 'Cancel'].map((item, i) => (
              <div
                key={item}
                className={cn(
                  'px-3 py-1.5 text-[9px]',
                  i === 0 ? 'bg-baby-blue/30 font-medium' : 'text-[#666]',
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </TendoAppChrome>

        <PhoneFrame className="absolute -right-1 top-6 z-20 w-[38%]">
          <VideoFeed className="h-[140px]" label="Patient" />
        </PhoneFrame>
      </div>
    </MockupContainer>
  );
}

/** Screen share — exercise doc + small video feed */
export function TelehealthExperienceMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="flex min-h-[260px] sm:min-h-[280px]">
          <aside className="w-14 border-r border-[#eee] bg-[#fafafa] p-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className={cn('mb-1 h-10 rounded border border-[#eee] bg-white', n === 1 && 'ring-2 ring-baby-blue/50')} />
            ))}
          </aside>
          <div className="relative flex-1 p-3">
            <p className="mb-2 text-[10px] font-bold text-text-primary">Home Exercise Plan</p>
            <div className="mb-2 rounded border border-[#eee] bg-[#fafafa] p-2">
              <p className="text-[9px] font-semibold">Squat Instructions</p>
              <div className="mt-2 flex gap-2">
                <div className="h-12 w-12 rounded bg-baby-blue/30" />
                <div className="flex-1 space-y-1">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-2 rounded bg-[#eee]" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 h-16 w-24 overflow-hidden rounded-lg border-2 border-white shadow-lg">
              <VideoFeed className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-[#eee] bg-[#fafafa] px-3 py-2 text-[8px] text-text-muted">
          <Share2 className="h-3.5 w-3.5" />
          Screen sharing active
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

/** Pivot section — lifestyle-style large left image */
export function TelehealthLifestyleVisual() {
  return (
    <MockupContainer className="max-w-[640px]">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-soft-pink/40 via-white to-baby-blue/50 shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
        <div className="grid min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:grid-cols-5">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-[#1e3a5f]/90 to-baby-blue/60 p-8 lg:col-span-3">
            <div className="relative w-full max-w-[340px]">
              <TendoAppChrome className="shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
                <VideoFeed className="h-[200px] sm:h-[240px]" label="Virtual Appointment" />
                <div className="flex justify-center gap-4 border-t border-[#eee] bg-[#fafafa] py-3">
                  <Video className="h-5 w-5 text-primary" />
                  <Share2 className="h-5 w-5 text-text-muted" />
                  <Monitor className="h-5 w-5 text-text-muted" />
                </div>
              </TendoAppChrome>
              <PhoneFrame className="absolute -bottom-6 -right-4 w-[38%] sm:-right-8">
                <VideoFeed className="h-[100px] sm:h-[120px]" label="Patient view" />
              </PhoneFrame>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 lg:col-span-2 lg:p-8">
            <Calendar className="mb-3 h-8 w-8 text-primary" />
            <p className="font-heading text-[1.125rem] font-bold text-[#1a1a1a] md:text-[1.25rem]">
              Virtual care, in-person quality
            </p>
            <p className="mt-2 text-body-sm leading-relaxed text-[#666666] md:text-body">
              HD video, screen sharing, and secure sessions — all built into Tendo with no extra apps
              to install.
            </p>
          </div>
        </div>
      </div>
    </MockupContainer>
  );
}

export { UserCheck, Users, Video };
