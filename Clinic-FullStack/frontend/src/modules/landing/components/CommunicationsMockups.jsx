import {
  Megaphone,
  MessageSquare,
  Play,
  Send,
  Shield,
  User,
  Users,
  Handshake,
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

function PhoneFrame({ children, className }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]',
        className,
      )}
    >
      <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold">
        TENDO
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

/** Hero — dashboard + compose modal + play button */
export function CommunicationsHeroVisual() {
  return (
    <MockupContainer className="max-w-[620px]">
      <div className="relative pt-2">
        <TendoAppChrome className="relative">
          <div className="grid grid-cols-3 gap-0 border-b border-[#eee] bg-[#fafafa] p-2 text-[8px]">
            <span className="font-semibold">Campaigns</span>
            <span className="text-text-muted">Messages</span>
            <span className="text-text-muted">Insights</span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-16 rounded bg-[#f0f0f0]" />
            ))}
          </div>
          <div className="absolute left-1/2 top-1/2 z-10 w-[55%] -translate-x-1/2 -translate-y-1/3 rounded-lg border border-[#eee] bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
            <p className="mb-2 text-[10px] font-bold text-text-primary">Compose Message</p>
            <div className="mb-1 rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">To: Patient</div>
            <div className="mb-2 h-10 rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">Message...</div>
            <div className="rounded bg-primary py-1 text-center text-[8px] font-semibold text-text-primary">Send</div>
          </div>
        </TendoAppChrome>
        <button
          type="button"
          className="absolute left-1/2 top-[42%] z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_8px_24px_rgba(247,128,60,0.45)]"
          aria-label="Play demo video"
        >
          <Play className="ml-0.5 h-6 w-6 fill-text-primary text-text-primary" />
        </button>
      </div>
    </MockupContainer>
  );
}

function ComplianceLogo({ label, color }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-[#eee] bg-white px-4 py-3">
      <Shield className="h-6 w-6" style={{ color }} strokeWidth={1.75} />
      <span className="text-[10px] font-bold" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

export function SecurityComplianceBar() {
  return (
    <div className="rounded-2xl bg-[#f5f5f5] p-6 md:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <ComplianceLogo label="PIPEDA" color="#d52b1e" />
          <ComplianceLogo label="HIPAA" color="#1e3a5f" />
          <ComplianceLogo label="PHIPA" color="#0057a8" />
        </div>
        <div>
          <h3 className="mb-3 font-heading text-[1.15rem] font-bold text-[#1a1a1a] md:text-[1.25rem]">
            Enterprise-grade security &amp; data protection
          </h3>
          <p className="text-body leading-relaxed text-[#666666]">
            Send messages with confidence knowing all your data is encrypted at rest and in transit.
            Tendo meets compliance &amp; regulatory requirements for PIPEDA, HIPAA, and PHIPA.
          </p>
        </div>
      </div>
    </div>
  );
}

/** SMS chat with patient */
export function TextPatientsMockup() {
  const messages = [
    { from: 'clinic', text: 'Hi Crystal, reminder for your appt tomorrow at 9am.' },
    { from: 'patient', text: 'Thanks! See you then.' },
  ];
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="border-b border-[#eee] px-3 py-1.5">
          <p className="text-[10px] font-bold">Crystal Zane — Profile</p>
        </div>
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-3 border-r border-[#eee] p-3">
            <div className="space-y-1">
              {['Contact', 'Appointments', 'Charts'].map((tab, i) => (
                <div key={tab} className={cn('rounded px-2 py-1 text-[8px]', i === 0 ? 'bg-baby-blue/30' : 'text-text-muted')}>
                  {tab}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 p-2">
            <p className="mb-2 text-[9px] font-bold">SMS Chat</p>
            {messages.map((msg) => (
              <div
                key={msg.text}
                className={cn(
                  'mb-1 rounded px-2 py-1 text-[7px]',
                  msg.from === 'clinic' ? 'bg-baby-blue/40 ml-0 mr-2' : 'bg-[#f0f0f0] ml-2 mr-0',
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

/** Campaign creator + mobile preview */
export function CampaignsMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[28%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Campaign Creator</span>
          </div>
          <div className="p-3">
            <div className="mb-2 rounded-lg bg-gradient-to-br from-soft-pink/60 via-baby-blue/40 to-primary/30 p-4 text-center">
              <p className="text-[11px] font-bold text-text-primary">Happy Birthday!</p>
              <p className="text-[8px] text-text-muted">🎉 🎂 🎈</p>
            </div>
            <p className="text-[8px] text-text-muted">Template: Birthday Campaign</p>
          </div>
        </TendoAppChrome>
        <PhoneFrame className="absolute -right-1 top-6 z-20 w-[36%]">
          <div className="p-2 text-center">
            <p className="text-[8px] font-bold">Happy Birthday!</p>
            <p className="mt-1 text-[7px] text-text-muted">Book your next visit today</p>
          </div>
        </PhoneFrame>
      </div>
    </MockupContainer>
  );
}

/** Instant chat sidebar */
export function InstantChatMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="flex min-h-[200px]">
          <div className="flex-1 border-r border-[#eee] p-2">
            <p className="mb-2 text-[9px] font-semibold">Schedule</p>
            <div className="space-y-1">
              {['9:00', '10:30', '1:00'].map((t) => (
                <div key={t} className="rounded bg-baby-blue/40 px-2 py-0.5 text-[8px]">{t}</div>
              ))}
            </div>
          </div>
          <div className="w-32 p-2">
            <p className="mb-2 text-[9px] font-bold">Team Chat</p>
            <div className="mb-1 rounded bg-[#00a3ad]/20 px-2 py-1 text-[8px] font-medium">Ella Smith · online</div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 w-40 rounded-lg border border-[#eee] bg-white p-2 shadow-lg">
          <p className="mb-1 text-[9px] font-bold">Ella Smith</p>
          <div className="mb-1 rounded bg-baby-blue/30 px-2 py-1 text-[7px]">Can you cover my 2pm?</div>
          <div className="rounded bg-[#f0f0f0] px-2 py-1 text-[7px]">Sure, no problem!</div>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

/** Team mail inbox + new mail modal */
export function TeamMessagingMockup() {
  return (
    <MockupContainer>
      <TendoAppChrome className="relative">
        <div className="border-b border-[#eee] px-3 py-1.5">
          <span className="text-[10px] font-semibold">Team Mail</span>
        </div>
        <div className="p-2">
          {['Re: Patient referral', 'Urgent: Room change', 'Weekly summary'].map((subj, i) => (
            <div key={subj} className={cn('mb-1 rounded border px-2 py-1 text-[8px]', i === 1 ? 'border-primary/50 bg-soft-pink/20' : 'border-[#eee]')}>
              {subj}
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 w-44 rounded-lg border border-[#eee] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <p className="mb-2 text-[10px] font-bold">New Mail</p>
          <div className="mb-1 rounded border border-[#eee] px-2 py-0.5 text-[7px] text-text-muted">Subject</div>
          <span className="mb-2 inline-block rounded bg-red-100 px-1.5 py-0.5 text-[7px] font-semibold text-red-600">Immediate</span>
          <div className="h-8 rounded border border-[#eee] px-2 py-1 text-[7px] text-text-muted">Message...</div>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}

/** Compose message + mobile patient chat */
export function MobileAppMessagingMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[32%] opacity-95">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Compose Message</span>
          </div>
          <div className="space-y-2 p-3">
            <div className="rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">To: Patient</div>
            <div className="h-12 rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">Your appointment is confirmed...</div>
          </div>
        </TendoAppChrome>
        <PhoneFrame className="absolute -right-1 top-4 z-20 w-[38%]">
          <div className="space-y-1.5 p-2">
            <p className="text-[8px] font-bold">Dr. Jaxon</p>
            <div className="rounded bg-baby-blue/40 px-2 py-1 text-[7px]">Your appt is tomorrow at 2pm</div>
            <div className="rounded bg-[#f0f0f0] px-2 py-1 text-[7px]">Perfect, thank you!</div>
          </div>
        </PhoneFrame>
      </div>
    </MockupContainer>
  );
}

export { Megaphone, Users, User, Handshake, MessageSquare, Send };
