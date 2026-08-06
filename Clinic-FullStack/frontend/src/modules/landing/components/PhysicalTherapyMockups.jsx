import {
  CreditCard,
  MessageSquare,
  Monitor,
  MousePointer2,
  PenLine,
  Settings,
  Smartphone,
  Sprout,
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
    <div className={cn('relative mx-auto w-full max-w-[580px] lg:max-w-none lg:scale-105 lg:origin-left xl:scale-110', className)}>
      {children}
    </div>
  );
}

/** Hero — phone schedule + clinic lifestyle photo */
export function PTHeroVisual() {
  return (
    <Wrap>
      <div className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">
        <div className="absolute left-0 top-4 z-20 w-[38%] max-w-[160px] overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:max-w-[180px]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[8px] font-bold">
            TENDO
          </div>
          <div className="space-y-1.5 p-2">
            {['9:00 AM — Zoe F.', '10:30 — Mike S.', '1:00 PM — Sarah L.', '2:30 — James P.'].map(
              (row) => (
                <div key={row} className="rounded bg-[#1e3a5f] px-2 py-1 text-[7px] font-medium text-white">
                  {row}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="absolute right-0 top-0 z-10 h-[88%] w-[78%] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
          <img
            src={clinicImage}
            alt="Physical therapist assisting a patient during treatment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/20 to-transparent" />
        </div>
      </div>
    </Wrap>
  );
}

/** Patient charts dashboard */
export function PatientChartsMockup() {
  return (
    <Wrap>
      <TendoChrome title="Patient Charts">
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-2 border-r border-[#eee] bg-[#fafafa] p-2">
            <p className="mb-2 text-[8px] font-bold text-[#666]">Patients</p>
            {['Zoe Friesen', 'Mike Smith', 'Sarah Lee', 'James Park'].map((name, i) => (
              <div
                key={name}
                className={cn(
                  'mb-1 rounded px-2 py-1.5 text-[8px]',
                  i === 0 ? 'bg-baby-blue/40 font-semibold' : 'bg-white',
                )}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="col-span-3 p-3">
            <p className="mb-2 text-[10px] font-bold">Zoe Friesen — PT Chart</p>
            {['Subjective', 'Objective', 'Assessment', 'Plan'].map((s, i) => (
              <div key={s} className="mb-2 rounded border border-[#eee] p-2">
                <p className="text-[8px] font-bold text-[#999]">{s}</p>
                {i === 1 && (
                  <p className="mt-1 text-[8px] text-[#666]">
                    ROM improved 15° flexion. Patient reports reduced pain...
                  </p>
                )}
                {i !== 1 && <div className="mt-1 h-2 rounded bg-[#f5f5f5]" />}
              </div>
            ))}
          </div>
        </div>
      </TendoChrome>
    </Wrap>
  );
}

/** Dashboard + mobile overlay */
export function CollaborationMockup() {
  return (
    <Wrap>
      <div className="relative pb-4">
        <TendoChrome className="mr-[18%]">
          <div className="grid grid-cols-3 gap-2 p-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-12 rounded bg-[#f0f0f0]" />
            ))}
          </div>
          <div className="border-t border-[#eee] p-3">
            <p className="mb-2 text-[10px] font-bold">Shared Care Plan</p>
            <div className="space-y-1">
              <div className="h-2 w-full rounded bg-[#eee]" />
              <div className="h-2 w-4/5 rounded bg-[#f0f0f0]" />
            </div>
          </div>
        </TendoChrome>
        <div className="absolute -right-2 bottom-0 z-10 w-[42%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-1 text-[8px] font-bold">Treatment Note</p>
            <div className="mb-2 h-8 rounded border border-[#eee] bg-[#fafafa]" />
            <div className="flex items-center gap-1 rounded bg-primary px-2 py-1 text-[7px] font-semibold">
              <MousePointer2 className="h-3 w-3" />
              Save & Share
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Intake form + messaging overlay */
export function IntakeMessagingMockup() {
  return (
    <Wrap>
      <div className="relative">
        <TendoChrome title="Patient Intake">
          <div className="space-y-2 p-3">
            {['Full Name', 'Date of Birth', 'Insurance Provider', 'Reason for Visit'].map((field) => (
              <div key={field}>
                <p className="mb-0.5 text-[8px] font-semibold text-[#666]">{field}</p>
                <div className="h-6 rounded border border-[#eee] bg-[#fafafa]" />
              </div>
            ))}
          </div>
        </TendoChrome>
        <div className="absolute -bottom-4 left-4 z-10 w-[55%] rounded-lg border border-[#eee] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <p className="mb-1 text-[8px] font-bold text-[#1a1a1a]">Secure Message</p>
          <div className="mb-1 rounded bg-[#e8f4fc] px-2 py-1 text-[7px]">
            Hi Zoe! Please complete your intake form before your visit.
          </div>
          <div className="ml-auto w-[70%] rounded bg-primary/20 px-2 py-1 text-[7px]">Will do!</div>
        </div>
      </div>
    </Wrap>
  );
}

/** Appointment checkout modal */
export function CheckoutMockup() {
  return (
    <Wrap>
      <TendoChrome title="Billing">
        <div className="relative p-3">
          <div className="mb-2 grid grid-cols-2 gap-2 opacity-40">
            <div className="h-16 rounded bg-[#f0f0f0]" />
            <div className="h-16 rounded bg-[#f0f0f0]" />
          </div>
          <div className="relative z-10 rounded-lg border border-[#eee] bg-white p-3 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
            <p className="mb-2 text-[10px] font-bold">Appointment Checkout</p>
            <div className="mb-2 space-y-1">
              <div className="flex justify-between text-[8px]">
                <span>PT Session — 60 min</span>
                <span className="font-semibold">$95.00</span>
              </div>
              <div className="flex justify-between text-[8px] text-[#666]">
                <span>Insurance (Claim.MD)</span>
                <span>Direct Bill</span>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-1 rounded border border-[#1a5fb4]/30 bg-[#e8f0fe] px-2 py-1">
              <CreditCard className="h-3 w-3 text-[#1a5fb4]" />
              <span className="text-[7px] font-bold text-[#1a5fb4]">CLAIM.MD</span>
            </div>
            <div className="rounded bg-primary py-1.5 text-center text-[8px] font-semibold text-[#1a1a1a]">
              Collect Payment
            </div>
          </div>
        </div>
      </TendoChrome>
    </Wrap>
  );
}

/** Patient messaging portal */
export function MessagingPortalMockup() {
  return (
    <Wrap>
      <TendoChrome title="Messages">
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-2 border-r border-[#eee] p-2">
            {['Crystal Zane', 'Mike Smith', 'Sarah Lee'].map((name, i) => (
              <div
                key={name}
                className={cn(
                  'mb-1 flex items-center gap-1 rounded px-2 py-1.5 text-[8px]',
                  i === 0 ? 'bg-baby-blue/30 font-semibold' : '',
                )}
              >
                <MessageSquare className="h-3 w-3" />
                {name}
              </div>
            ))}
          </div>
          <div className="col-span-3 p-2">
            <p className="mb-2 text-[9px] font-bold">Crystal Zane</p>
            <div className="mb-1 rounded bg-[#e8f4fc] px-2 py-1 text-[7px] leading-snug">
              Great progress on your exercises! How is your shoulder feeling today?
            </div>
            <div className="mb-1 ml-auto w-[85%] rounded bg-primary/20 px-2 py-1 text-[7px] leading-snug">
              Much better! Less stiffness in the mornings.
            </div>
            <div className="rounded bg-[#e8f4fc] px-2 py-1 text-[7px] leading-snug">
              That&apos;s wonderful — keep up the home program!
            </div>
          </div>
        </div>
      </TendoChrome>
    </Wrap>
  );
}

/** Laptop on desk — features section */
export function LaptopScheduleMockup() {
  return (
    <Wrap>
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8e4df] to-[#d4cfc8] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.1)] md:p-8">
        <div className="mx-auto max-w-[480px]">
          <div className="mb-2 h-3 rounded-t-lg bg-[#ccc]" />
          <TendoChrome title="Schedule">
            <div className="grid grid-cols-7 gap-1 p-2">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-8 rounded text-[6px]',
                    i % 5 === 0 ? 'bg-[#1e3a5f] text-white' : 'bg-[#f0f0f0]',
                  )}
                />
              ))}
            </div>
          </TendoChrome>
          <div className="mx-auto h-2 w-[90%] rounded-b-lg bg-[#bbb]" />
        </div>
      </div>
    </Wrap>
  );
}

const WORKFLOW_ICONS = {
  workflow: Settings,
  personalize: PenLine,
  automate: Monitor,
  scale: Sprout,
};

export function WorkflowCard({ card }) {
  const Icon = WORKFLOW_ICONS[card.icon] ?? Settings;
  return (
    <div className="rounded-xl border border-white/60 bg-white/90 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-6">
      <Icon className="mb-3 h-7 w-7 text-[#1a1a1a]" strokeWidth={1.5} />
      <h3 className="mb-2 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">
        {card.title}
      </h3>
      <p className="text-body-sm leading-relaxed text-[#666666] md:text-body">{card.description}</p>
    </div>
  );
}

export function PhoneFrameIcon() {
  return <Smartphone className="h-6 w-6" strokeWidth={1.5} />;
}
