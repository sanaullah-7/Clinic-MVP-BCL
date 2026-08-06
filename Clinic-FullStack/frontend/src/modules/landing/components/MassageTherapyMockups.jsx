import { Calendar, Mail, MousePointer2, Sparkles } from 'lucide-react';
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
        'relative mx-auto w-full max-w-[580px] lg:max-w-none lg:scale-105 lg:origin-left xl:scale-110',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Hero — serene lifestyle photo + tablet charting */
export function RMTHeroVisual() {
  return (
    <Wrap>
      <div className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">
        <div className="absolute left-[8%] top-0 z-10 h-[88%] w-[55%] overflow-hidden rounded-[999px] shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
          <img
            src={clinicImage}
            alt="Massage therapist using Tendo in a calm clinic setting"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4a7c59]/20 to-[#1e3a5f]/30" />
        </div>

        <div className="absolute bottom-2 right-0 z-20 w-[52%] max-w-[240px] overflow-hidden rounded-xl border-[3px] border-[#333] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[8px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-1 text-[8px] font-bold text-[#1a1a1a]">Client Chart</p>
            {['Treatment Notes', 'SOAP Template', 'Home Care'].map((row, i) => (
              <div
                key={row}
                className={cn(
                  'mb-1 rounded px-2 py-1 text-[7px]',
                  i === 0 ? 'bg-baby-blue/30 font-semibold' : 'bg-[#f5f5f5]',
                )}
              >
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** AI charting — patient list + chart modal */
export function RMTChartingMockup() {
  return (
    <Wrap>
      <div className="relative pb-2">
        <TendoChrome>
          <div className="grid grid-cols-3 gap-0">
            <div className="col-span-1 border-r border-[#eee] bg-[#fafafa] p-2">
              <p className="mb-1 text-[7px] font-bold text-[#666]">Clients</p>
              {['Zoe F.', 'Mike S.', 'Sarah L.'].map((name, i) => (
                <div
                  key={name}
                  className={cn(
                    'mb-1 rounded px-1.5 py-1 text-[7px]',
                    i === 0 ? 'bg-baby-blue/40 font-semibold' : 'text-[#666]',
                  )}
                >
                  {name}
                </div>
              ))}
            </div>
            <div className="col-span-2 p-2 opacity-40">
              <div className="h-16 rounded bg-[#f0f0f0]" />
            </div>
          </div>
        </TendoChrome>

        <div className="absolute left-[15%] top-[20%] z-10 w-[75%] rounded-lg border border-[#eee] bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[9px] font-bold">Treatment Chart — Zoe F.</p>
            <span className="flex items-center gap-0.5 rounded-full bg-[#00a3ad] px-1.5 py-0.5 text-[6px] font-bold text-white">
              <Sparkles className="h-2.5 w-2.5" />
              AI
            </span>
          </div>
          {['Subjective', 'Objective', 'Plan'].map((s) => (
            <div key={s} className="mb-1 rounded border border-[#eee] p-1.5">
              <p className="text-[7px] font-bold text-[#999]">{s}</p>
              <div className="mt-0.5 h-2 rounded bg-[#f5f5f5]" />
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/** Online booking — calendar + mobile */
export function RMTBookingMockup() {
  return (
    <Wrap>
      <div className="relative pb-4">
        <TendoChrome title="Schedule">
          <div className="grid grid-cols-7 gap-1 p-2">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-6 rounded text-[5px]',
                  i % 7 === 2 || i % 7 === 4
                    ? 'bg-[#1e3a5f] text-white'
                    : i % 7 === 5
                      ? 'bg-baby-blue/60'
                      : 'bg-[#f0f0f0]',
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-1 border-t border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3 text-[#00a3ad]" />
            <span className="text-[7px] font-semibold">Color-coded daily view</span>
          </div>
        </TendoChrome>

        <div className="absolute -right-1 bottom-0 z-10 w-[36%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-2 text-[8px] font-bold">Book Online</p>
            <div className="mb-1 h-4 rounded border border-[#eee] bg-[#fafafa]" />
            <div className="rounded bg-primary py-1 text-center text-[7px] font-semibold">
              Book Appointment
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Patient intake — mobile welcome + desktop email */
export function RMTIntakeMockup() {
  return (
    <Wrap>
      <div className="relative flex items-end gap-3">
        <div className="w-[38%] flex-shrink-0 overflow-hidden rounded-[1.1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-3 text-center">
            <p className="mb-2 text-[10px] font-bold text-[#1a1a1a]">Welcome!</p>
            <p className="mb-3 text-[7px] text-[#666]">Complete your intake form</p>
            <div className="rounded bg-primary py-1.5 text-[7px] font-semibold">Get Started</div>
          </div>
        </div>

        <TendoChrome className="min-w-0 flex-1">
          <div className="p-3">
            <div className="mb-2 flex items-center gap-1">
              <Mail className="h-3 w-3 text-[#00a3ad]" />
              <p className="text-[9px] font-bold">Create Welcome Email</p>
            </div>
            <div className="mb-1 rounded border border-[#eee] px-2 py-1 text-[7px] text-[#999]">
              Subject: Welcome to our clinic!
            </div>
            <div className="mb-2 h-12 rounded border border-[#eee] bg-[#fafafa] p-1.5">
              <div className="mb-1 h-1.5 w-full rounded bg-[#eee]" />
              <div className="h-1.5 w-4/5 rounded bg-[#f0f0f0]" />
            </div>
            <div className="flex items-center gap-1 text-[7px] text-primary">
              <MousePointer2 className="h-3 w-3" />
              Send welcome
            </div>
          </div>
        </TendoChrome>
      </div>
    </Wrap>
  );
}

export {
  CheckoutMockup,
  LaptopScheduleMockup,
  MessagingPortalMockup,
  WorkflowCard,
} from './PhysicalTherapyMockups';
