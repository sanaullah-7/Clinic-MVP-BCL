import { MessageSquare, MousePointer2, Sparkles, Video } from 'lucide-react';
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

/** Body map diagram for chiro tablet */
function BodyMapDiagram() {
  return (
    <div className="flex justify-center gap-3 p-2">
      <div className="text-center">
        <div className="mx-auto mb-1 h-16 w-10 rounded-full border-2 border-[#00a3ad]/40 bg-[#e6f7f5]" />
        <span className="text-[7px] font-semibold text-[#666]">Front</span>
      </div>
      <div className="text-center">
        <div className="mx-auto mb-1 h-16 w-10 rounded-full border-2 border-[#00a3ad]/40 bg-[#e6f7f5]" />
        <span className="text-[7px] font-semibold text-[#666]">Back</span>
      </div>
    </div>
  );
}

/** Hero — office photo + body map tablet */
export function ChiroHeroVisual() {
  return (
    <Wrap>
      <div className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">
        <div className="absolute right-0 top-0 z-10 h-[85%] w-[72%] overflow-hidden rounded-[50%] shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
          <img
            src={clinicImage}
            alt="Chiropractor using Tendo in a modern clinic office"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 left-0 z-20 w-[48%] max-w-[200px] overflow-hidden rounded-xl border-[3px] border-[#333] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:max-w-[220px]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[8px] font-bold">
            TENDO
          </div>
          <div className="p-2">
            <p className="mb-1 text-center text-[8px] font-bold text-[#1a1a1a]">Spinal Assessment</p>
            <BodyMapDiagram />
            <div className="mt-1 space-y-0.5">
              <div className="h-1.5 w-full rounded bg-[#eee]" />
              <div className="h-1.5 w-3/4 rounded bg-[#f0f0f0]" />
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/** Charting with Scribe AI + telehealth phone */
export function ChiroChartingMockup() {
  return (
    <Wrap>
      <div className="relative pb-4">
        <TendoChrome className="relative mr-[20%]">
          <div className="grid grid-cols-4 gap-0">
            <div className="col-span-1 border-r border-[#eee] bg-[#fafafa] p-2">
              {['Patients', 'Charts', 'Forms'].map((tab, i) => (
                <div
                  key={tab}
                  className={cn(
                    'mb-1 rounded px-1 py-1 text-[7px]',
                    i === 1 ? 'bg-baby-blue/40 font-semibold' : 'text-[#999]',
                  )}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="col-span-3 p-3">
              <p className="mb-2 text-[10px] font-bold">Patient Chart — SOAP</p>
              {['Subjective', 'Objective', 'Assessment'].map((s) => (
                <div key={s} className="mb-1.5 rounded border border-[#eee] p-1.5">
                  <p className="text-[7px] font-bold text-[#999]">{s}</p>
                  <div className="mt-0.5 h-2 rounded bg-[#f5f5f5]" />
                </div>
              ))}
              <div className="flex items-center gap-1 rounded bg-primary/30 px-2 py-1 text-[7px] font-semibold">
                <MousePointer2 className="h-3 w-3" />
                Generate Summary
              </div>
            </div>
          </div>
        </TendoChrome>

        <div className="absolute -right-1 bottom-0 z-10 w-[38%] overflow-hidden rounded-[1rem] border-[3px] border-[#333] bg-white shadow-xl">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1 text-center text-[7px] font-bold">
            TENDO
          </div>
          <div className="flex aspect-[9/14] items-center justify-center bg-[#1e3a5f]">
            <Video className="h-6 w-6 text-white/80" strokeWidth={1.5} />
          </div>
        </div>

        <div className="absolute left-2 top-2 z-20 flex items-center gap-1 rounded-full bg-[#00a3ad] px-2.5 py-1 shadow-md">
          <Sparkles className="h-3 w-3 text-white" />
          <span className="text-[8px] font-bold text-white">Scribe AI</span>
        </div>
      </div>
    </Wrap>
  );
}

/** Intake with exercise program + chat overlay */
export function ChiroIntakeMockup() {
  return (
    <Wrap>
      <div className="relative">
        <TendoChrome title="Patient Portal">
          <div className="grid grid-cols-2 gap-2 p-3">
            <div>
              <p className="mb-1 text-[8px] font-bold">Patient Demographics</p>
              {['Name', 'Phone Number', 'Email'].map((field) => (
                <div key={field} className="mb-1">
                  <p className="text-[7px] text-[#666]">{field}</p>
                  <div className="h-5 rounded border border-[#eee] bg-[#fafafa]" />
                </div>
              ))}
              <div className="mt-1 flex items-center gap-1 text-[7px] text-primary">
                <MousePointer2 className="h-3 w-3" />
                Complete intake
              </div>
            </div>
            <div className="rounded border border-[#eee] bg-[#fafafa] p-2">
              <p className="mb-1 text-[8px] font-bold">Video Exercise Program</p>
              <div className="mb-1 aspect-video rounded bg-[#ddd]" />
              <div className="h-1.5 w-full rounded bg-[#eee]" />
            </div>
          </div>
        </TendoChrome>
        <div className="absolute -bottom-3 -left-2 z-10 w-[50%] rounded-lg border border-[#eee] bg-white p-2 shadow-lg">
          <p className="mb-1 text-[7px] font-bold">Crystal Zane</p>
          <div className="rounded bg-[#e8f4fc] px-2 py-1 text-[6px]">Your exercise program is ready!</div>
        </div>
      </div>
    </Wrap>
  );
}

/** Re-export shared mockups from PT */
export {
  CheckoutMockup,
  CollaborationMockup,
  LaptopScheduleMockup,
  MessagingPortalMockup,
  WorkflowCard,
} from './PhysicalTherapyMockups';
