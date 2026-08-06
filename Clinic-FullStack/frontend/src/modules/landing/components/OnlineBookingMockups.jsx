import {
  Bell,
  Calendar,
  CreditCard,
  Mail,
  MousePointer2,
  Palette,
  RefreshCw,
  Smartphone,
  User,
} from 'lucide-react';
import { cn } from '@/lib/cn';

function TendoAppChrome({ children, className, compact }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)]',
        className,
      )}
    >
      {!compact && (
        <div className="flex h-7 items-center gap-1.5 border-b border-[#eee] bg-[#f5f5f5] px-3">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
      )}
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
      <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold text-text-primary">
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

/** Hero — portal + booking mockups + phone lifestyle */
export function OnlineBookingHeroVisual() {
  return (
    <MockupContainer className="max-w-[600px]">
      <div className="relative h-[320px] sm:h-[360px] md:h-[400px]">
        <div className="absolute right-0 top-8 z-[1] h-48 w-28 overflow-hidden rounded-[2rem] border-4 border-white bg-gradient-to-br from-baby-blue/25 to-soft-pink/35 shadow-lg sm:h-56 sm:w-32">
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
            <Smartphone className="h-10 w-10 text-baby-blue-700/40" strokeWidth={1.5} />
            <User className="h-8 w-8 text-baby-blue-700/30" strokeWidth={1} />
          </div>
        </div>

        <TendoAppChrome className="absolute left-0 top-0 z-10 w-[70%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <p className="text-[10px] font-bold text-text-primary">Patient Profile — Keisha M.</p>
          </div>
          <div className="p-3">
            <div className="mb-2 rounded bg-baby-blue/30 px-2 py-1 text-[9px]">Upcoming: May 22 · Massage</div>
            <div className="rounded border border-[#eee] p-2 text-[8px] text-text-muted">Intake Forms · Approved</div>
          </div>
        </TendoAppChrome>

        <TendoAppChrome className="absolute bottom-0 right-0 z-20 w-[65%]">
          <div className="flex items-center gap-1.5 border-b border-[#eee] px-2 py-1">
            <Calendar className="h-3 w-3" />
            <span className="text-[10px] font-semibold">Online Booking</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5 p-2 text-center text-[7px]">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'rounded p-0.5',
                  i === 10 ? 'bg-primary font-bold text-text-primary' : 'text-text-muted',
                )}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </TendoAppChrome>
      </div>
    </MockupContainer>
  );
}

/** Step 1 — Portal style + branded mobile */
export function Step1CustomizeMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[28%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Portal Style</span>
          </div>
          <div className="p-3">
            <p className="mb-2 text-[9px] font-semibold">Brand Colors</p>
            <div className="mb-2 flex gap-1">
              <div className="h-5 w-5 rounded bg-primary" />
              <div className="h-5 w-5 rounded bg-baby-blue" />
              <div className="h-5 w-5 rounded bg-soft-pink" />
            </div>
            <div className="rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">
              <Palette className="inline h-3 w-3" /> Custom logo upload
            </div>
          </div>
        </TendoAppChrome>
        <PhoneFrame className="absolute -right-1 top-6 z-20 w-[38%]">
          <div className="p-2 text-center">
            <div className="mx-auto mb-2 h-6 w-6 rounded bg-primary" />
            <p className="text-[8px] font-bold">Your Clinic</p>
            <div className="mt-2 rounded bg-baby-blue/40 py-1 text-[7px]">Book Now</div>
          </div>
        </PhoneFrame>
      </div>
    </MockupContainer>
  );
}

/** Step 2 — Multi-column schedule + mobile booking */
export function Step2BookMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[26%]">
          <div className="flex border-b border-[#eee] bg-[#fafafa] text-[8px] font-semibold">
            {['Mon', 'Tue', 'Wed'].map((d) => (
              <div key={d} className="flex-1 border-r border-[#eee] p-1.5 last:border-r-0">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1 p-2 text-[7px]">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={cn(
                  'rounded p-1',
                  i % 3 === 0 ? 'bg-[#1e3a5f] text-white' : i % 2 ? 'bg-baby-blue/60' : 'bg-soft-pink/70',
                )}
              >
                Appt
              </div>
            ))}
          </div>
        </TendoAppChrome>
        <PhoneFrame className="absolute -right-1 top-4 z-20 w-[40%]">
          <div className="p-2">
            <p className="mb-1 text-[8px] font-bold">Review your booking</p>
            <p className="mb-2 text-[7px] text-text-muted">60 Min Massage · May 22</p>
            <div className="rounded-lg bg-baby-blue py-1 text-center text-[7px] font-semibold">Book Appointment</div>
          </div>
        </PhoneFrame>
        <MousePointer2 className="absolute bottom-6 right-[18%] z-30 h-5 w-5 text-[#1a1a1a]" fill="white" strokeWidth={1.5} />
      </div>
    </MockupContainer>
  );
}

/** Step 3 — Welcome email + create email modal */
export function Step3WelcomeMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <PhoneFrame className="absolute left-0 top-4 z-10 w-[34%]">
          <div className="p-2">
            <Mail className="mb-1 h-4 w-4 text-primary" />
            <p className="text-[8px] font-bold">Welcome, Ryan!</p>
            <p className="mt-1 text-[7px] text-text-muted">We look forward to your visit...</p>
          </div>
        </PhoneFrame>
        <TendoAppChrome className="relative ml-[30%] mr-0">
          <div className="absolute -right-2 -top-2 z-20 w-32 rounded-lg border border-[#eee] bg-white p-2 shadow-lg">
            <p className="text-[8px] font-bold">Patient Lookup</p>
            <p className="text-[7px] text-text-muted">Ryan Coleman</p>
          </div>
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Create Welcome Email</span>
          </div>
          <div className="space-y-2 p-3">
            <div className="rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">Subject line</div>
            <div className="h-12 rounded border border-[#eee] px-2 py-1 text-[8px] text-text-muted">Message...</div>
            <div className="rounded-lg bg-[#28c840] py-1 text-center text-[8px] font-semibold text-white">Send</div>
          </div>
        </TendoAppChrome>
      </div>
    </MockupContainer>
  );
}

/** Step 4 — Add card + intake form */
export function Step4ConsentMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[38%] opacity-90">
          <div className="p-3">
            <p className="text-[9px] font-semibold">Booking Summary</p>
            <p className="text-[8px] text-text-muted">60 Min RMT · $77.52</p>
          </div>
        </TendoAppChrome>
        <div className="absolute left-[28%] top-6 z-20 w-[44%] rounded-lg border border-[#eee] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <p className="mb-2 text-[9px] font-bold">Add A Card</p>
          <div className="mb-1 rounded border border-[#eee] px-2 py-1 text-[7px] text-text-muted">Card number</div>
          <div className="rounded bg-primary py-1 text-center text-[7px] font-semibold text-text-primary">Save Card</div>
        </div>
        <PhoneFrame className="absolute -right-1 top-2 z-10 w-[36%]">
          <div className="p-2">
            <p className="mb-1 text-[7px] font-bold">Physician Patient Intake Form</p>
            {['Full Name', 'Email', 'Phone #'].map((f) => (
              <div key={f} className="mb-1 rounded border border-[#eee] px-2 py-0.5 text-[6px] text-text-muted">
                {f}
              </div>
            ))}
          </div>
        </PhoneFrame>
        <MousePointer2 className="absolute bottom-4 right-[8%] z-30 h-5 w-5" fill="white" strokeWidth={1.5} />
      </div>
    </MockupContainer>
  );
}

/** Step 5 — Book again + notification */
export function Step5RebookMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-4 pt-2">
        <div className="absolute -top-1 left-4 z-30 flex items-center gap-1 rounded-full border border-[#eee] bg-white px-2 py-1 shadow-md">
          <Bell className="h-3 w-3 text-primary" />
          <span className="text-[7px] font-semibold">Tendo App · Time to rebook!</span>
        </div>
        <PhoneFrame className="absolute left-0 top-8 z-10 w-[34%]">
          <div className="p-2">
            <p className="text-[8px] font-bold">Review your booking</p>
            <div className="mt-1 rounded bg-baby-blue/40 py-1 text-center text-[7px]">Confirm</div>
          </div>
        </PhoneFrame>
        <TendoAppChrome className="relative ml-[28%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Upcoming Appointments</span>
          </div>
          <div className="p-3">
            <div className="mb-2 rounded bg-baby-blue/30 px-2 py-1 text-[9px]">May 22 · 60 Min Massage</div>
            <p className="mb-1 text-[9px] font-bold">Book Again</p>
            {['Zoe Friesen', 'Mike Smith'].map((name) => (
              <div key={name} className="mb-1 flex items-center justify-between rounded border border-[#eee] px-2 py-1 text-[8px]">
                <span>{name}</span>
                <span className="rounded bg-primary px-1.5 py-0.5 text-[7px] font-semibold">Rebook</span>
              </div>
            ))}
          </div>
        </TendoAppChrome>
        <MousePointer2 className="absolute bottom-6 right-[12%] z-30 h-5 w-5" fill="white" strokeWidth={1.5} />
      </div>
    </MockupContainer>
  );
}

/** Engagement — transactions + mobile payment */
export function EngagementMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[24%]">
          <div className="border-b border-[#eee] px-3 py-1.5">
            <span className="text-[10px] font-semibold">Invoices</span>
          </div>
          <div className="p-2">
            <div className="grid grid-cols-3 border-b border-[#eee] pb-1 text-[8px] font-semibold text-text-muted">
              <span>ID</span>
              <span>Patient</span>
              <span>Date</span>
            </div>
            {[
              { id: '1042', name: 'Keisha M.', date: 'May 20' },
              { id: '1041', name: 'Ryan C.', date: 'May 18' },
            ].map((row) => (
              <div key={row.id} className="grid grid-cols-3 border-b border-[#f5f5f5] py-1 text-[8px]">
                <span>{row.id}</span>
                <span>{row.name}</span>
                <span>{row.date}</span>
              </div>
            ))}
          </div>
        </TendoAppChrome>
        <PhoneFrame className="absolute -right-1 top-6 z-20 w-[38%]">
          <div className="p-2">
            <CreditCard className="mb-1 h-4 w-4 text-primary" />
            <p className="text-[8px] font-bold">Submit Payment</p>
            <div className="mt-1 rounded border border-[#eee] px-2 py-1 text-[7px] text-text-muted">Card details</div>
            <div className="mt-2 rounded-lg bg-primary py-1 text-center text-[7px] font-semibold">Pay $77.52</div>
          </div>
        </PhoneFrame>
      </div>
    </MockupContainer>
  );
}

/** Patient portal dashboard — Hi Keisha */
export function PortalDashboardMockup() {
  return (
    <MockupContainer className="max-w-[720px]">
      <TendoAppChrome>
        <div className="flex min-h-[280px]">
          <aside className="hidden w-16 border-r border-[#eee] bg-[#fafafa] p-2 sm:block">
            <div className="mb-3 h-6 w-6 rounded bg-primary" />
            {['Dashboard', 'Book', 'Forms'].map((item, i) => (
              <div
                key={item}
                className={cn(
                  'mb-1 rounded px-1 py-0.5 text-[7px]',
                  i === 0 ? 'bg-baby-blue/40 font-semibold' : 'text-text-muted',
                )}
              >
                {item}
              </div>
            ))}
          </aside>
          <div className="flex-1 p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-baby-blue to-soft-pink text-sm font-bold">
                K
              </div>
              <p className="text-[14px] font-bold text-text-primary">Hi, Keisha</p>
              <div className="ml-auto hidden rounded-lg bg-baby-blue px-3 py-1.5 text-[9px] font-semibold sm:block">
                Book An Appointment
              </div>
            </div>
            <div className="mb-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-[#eee] bg-[#fafafa] p-3">
                <p className="mb-1 text-[9px] font-bold">Upcoming Appointments</p>
                <p className="text-[10px] font-semibold">60 Min Therapeutic Massage</p>
                <p className="text-[8px] text-text-muted">May 22 · Approved</p>
              </div>
              <div className="rounded-lg border border-[#eee] p-3">
                <p className="mb-1 text-[9px] font-bold">At A Glance</p>
                <p className="text-[8px] text-text-muted">3 visits · 120 loyalty pts</p>
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-[#eee] p-2 text-[9px]">
                <p className="font-semibold">Intake Forms</p>
                <p className="text-[8px] text-[#28c840]">Complete</p>
              </div>
              <div className="rounded-lg border border-[#eee] p-2 text-[9px]">
                <p className="font-semibold">Book Again</p>
                <RefreshCw className="mt-1 h-3 w-3 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </TendoAppChrome>
    </MockupContainer>
  );
}
