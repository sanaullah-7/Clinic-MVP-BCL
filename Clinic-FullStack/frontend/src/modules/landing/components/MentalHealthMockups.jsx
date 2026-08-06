import { Calendar, Mail, MousePointer2, Search, Sparkles, User, Video } from 'lucide-react';
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

/** Hero — therapy session oval + patient chart tablet */
export function MHHeroVisual() {
  return (
    <Wrap className="lg:scale-110 xl:scale-[1.15]">
      <div className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[460px]">
        <div className="absolute left-0 top-[8%] z-10 h-[72%] w-[88%] overflow-hidden rounded-[999px] shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
          <img
            src={clinicImage}
            alt="Therapist session in a modern mental health clinic"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/10 to-transparent" />
        </div>

        <div className="absolute bottom-4 right-0 z-20 w-[42%] max-w-[200px] overflow-hidden rounded-xl border-[3px] border-[#333] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[8px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-2 text-[8px] font-bold text-[#1a1a1a]">Patient Chart</p>
            {['Session Date', 'Presenting Issue', 'Treatment Plan', 'Notes'].map((field) => (
              <div key={field} className="mb-1">
                <p className="text-[6px] text-[#999]">{field}</p>
                <div className="h-4 rounded border border-[#eee] bg-[#fafafa]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** AI session notes — patient charts */
export function MHChartingMockup() {
  return (
    <Wrap>
      <div className="relative pb-2">
        <TendoChrome title="Patient Charts">
          <div className="grid grid-cols-3 gap-0">
            <div className="col-span-1 border-r border-[#eee] bg-[#fafafa] p-2">
              {['Alex M.', 'Jordan K.', 'Sam T.'].map((name, i) => (
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
            <div className="col-span-2 p-2 opacity-30">
              <div className="h-20 rounded bg-[#f0f0f0]" />
            </div>
          </div>
        </TendoChrome>

        <div className="absolute left-[12%] top-[18%] z-10 w-[78%] rounded-lg border border-[#eee] bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[9px] font-bold">Session Notes — Alex M.</p>
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
export function MHBookingMockup() {
  return (
    <Wrap>
      <div className="relative pb-4">
        <TendoChrome title="Schedule">
          <div className="grid grid-cols-7 gap-1 p-2">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-6 rounded',
                  i % 6 === 1 || i % 6 === 3 ? 'bg-[#1e3a5f]' : i % 6 === 5 ? 'bg-baby-blue/60' : 'bg-[#f0f0f0]',
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-1 border-t border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3 text-[#00a3ad]" />
            <span className="text-[7px] font-semibold">Weekly calendar view</span>
          </div>
        </TendoChrome>

        <div className="absolute -right-1 bottom-0 z-10 w-[36%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-1 text-[8px] font-bold">Review your booking</p>
            <div className="mb-2 h-6 rounded border border-[#eee] bg-[#fafafa]" />
            <div className="rounded bg-primary py-1 text-center text-[7px] font-semibold">
              Book Appointment
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Patient intake — welcome email + lookup */
export function MHIntakeMockup() {
  return (
    <Wrap>
      <div className="relative flex items-end gap-3">
        <div className="w-[36%] flex-shrink-0 overflow-hidden rounded-[1.1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <Mail className="mb-1 h-4 w-4 text-[#00a3ad]" />
            <p className="mb-1 text-[8px] font-bold">Welcome!</p>
            <div className="h-8 rounded bg-[#f0f0f0]" />
          </div>
        </div>

        <TendoChrome className="min-w-0 flex-1">
          <div className="grid grid-cols-5 gap-0">
            <div className="col-span-2 border-r border-[#eee] bg-[#fafafa] p-2">
              <div className="mb-1 flex items-center gap-1">
                <Search className="h-3 w-3" />
                <span className="text-[7px] font-bold">Patient Lookup</span>
              </div>
              {['Alex M.', 'Jordan K.'].map((n) => (
                <div key={n} className="mb-0.5 rounded bg-white px-1 py-0.5 text-[6px]">
                  {n}
                </div>
              ))}
            </div>
            <div className="col-span-3 p-2">
              <p className="mb-1 text-[8px] font-bold">Create Welcome Email</p>
              <div className="mb-1 h-4 rounded border border-[#eee] bg-[#fafafa]" />
              <div className="flex items-center gap-1 text-[7px] text-primary">
                <MousePointer2 className="h-3 w-3" />
                Send
              </div>
            </div>
          </div>
        </TendoChrome>
      </div>
    </Wrap>
  );
}

/** Telehealth — mobile join + video session */
export function MHTelehealthMockup() {
  return (
    <Wrap>
      <div className="relative flex items-end gap-3">
        <div className="w-[38%] flex-shrink-0 overflow-hidden rounded-[1.1rem] border-[3px] border-[#333] bg-[#1e3a5f] shadow-xl">
          <div className="p-3 text-center">
            <Video className="mx-auto mb-2 h-6 w-6 text-white/80" />
            <p className="mb-2 text-[8px] font-bold leading-snug text-white">
              Join Your Telehealth Session
            </p>
            <div className="rounded bg-primary py-1.5 text-[7px] font-semibold text-[#1a1a1a]">
              Join Now
            </div>
          </div>
        </div>

        <TendoChrome className="min-w-0 flex-1">
          <div className="relative aspect-video bg-[#1e3a5f]">
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="h-10 w-10 text-white/40" strokeWidth={1} />
            </div>
            <div className="absolute bottom-2 right-2 h-12 w-16 overflow-hidden rounded border-2 border-white bg-[#333]">
              <div className="flex h-full items-center justify-center">
                <User className="h-4 w-4 text-white/60" />
              </div>
            </div>
            <div className="absolute left-2 top-2 rounded bg-[#00a3ad] px-1.5 py-0.5 text-[6px] font-bold text-white">
              Live
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
  WorkflowCard,
} from './PhysicalTherapyMockups';
