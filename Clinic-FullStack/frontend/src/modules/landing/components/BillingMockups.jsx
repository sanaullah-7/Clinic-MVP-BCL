import {
  CheckCircle2,
  CreditCard,
  MousePointer2,
  BarChart3,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/cn';

function TendoAppChrome({ children, className, showDots = true }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)]',
        className,
      )}
    >
      {showDots && (
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

export function MockupContainer({ children, className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[580px] lg:max-w-none', className)}>
      {children}
    </div>
  );
}

/** Compact trust badges for hero */
export function BillingTrustBadges() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#044767] px-4 py-2 shadow-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="4" fill="#ff9d28" />
          <path d="M14 8.5a4 4 0 1 0 0 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="text-[12px] font-semibold text-white">Capterra</span>
        <span className="text-[12px] font-bold text-white">4.7</span>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="h-3 w-3 text-[#ff9d28]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 80 96" className="h-[72px] w-[58px]" aria-label="GetApp Category Leaders 2025">
        <polygon points="40,4 76,28 76,68 40,92 4,68 4,28" fill="#2d2d2d" />
        <polygon points="40,12 68,32 68,64 40,84 12,64 12,32" fill="#3a3a3a" />
        <text x="40" y="38" textAnchor="middle" fill="#48b2e0" fontSize="8" fontWeight="700">
          GetApp
        </text>
        <text x="40" y="50" textAnchor="middle" fill="white" fontSize="6" fontWeight="600">
          Category
        </text>
        <text x="40" y="58" textAnchor="middle" fill="white" fontSize="6" fontWeight="600">
          Leaders
        </text>
        <text x="40" y="72" textAnchor="middle" fill="#f7803c" fontSize="7" fontWeight="700">
          2025
        </text>
      </svg>

      <svg viewBox="0 0 80 96" className="h-[72px] w-[58px]" aria-label="Software Advice Front Runners 2025">
        <path d="M40 4 L68 22 V74 L40 92 L12 74 V22 Z" fill="#5b2d8e" />
        <path d="M40 10 L62 25 V71 L40 86 L18 71 V25 Z" fill="#6b3fa0" />
        <text x="40" y="32" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600">
          Software
        </text>
        <text x="40" y="42" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600">
          Advice
        </text>
        <text x="40" y="56" textAnchor="middle" fill="white" fontSize="5" fontWeight="600">
          Front Runners
        </text>
        <text x="40" y="72" textAnchor="middle" fill="#ffd700" fontSize="6" fontWeight="700">
          2025
        </text>
      </svg>
    </div>
  );
}

/** Hero — payment terminal + checkout + success screens */
export function BillingHeroVisual() {
  return (
    <MockupContainer className="max-w-[600px]">
      <div className="relative h-[320px] sm:h-[360px] md:h-[400px]">
        <div className="absolute right-2 top-8 z-[1] h-52 w-52 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] shadow-lg sm:h-60 sm:w-60">
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6">
            <div className="rounded-xl bg-white p-4 shadow-md">
              <CreditCard className="h-10 w-10 text-primary" strokeWidth={1.5} />
            </div>
            <div className="h-16 w-24 rounded-lg bg-[#333] p-2">
              <div className="mb-1 h-2 w-full rounded bg-[#555]" />
              <div className="h-6 w-full rounded bg-[#444]" />
            </div>
          </div>
        </div>

        <TendoAppChrome className="absolute left-0 top-0 z-10 w-[68%]">
          <div className="p-3">
            <p className="mb-2 text-[11px] font-bold text-text-primary">Appointment Checkout</p>
            <div className="mb-2 space-y-0.5 text-[9px] text-text-muted">
              <p>Patient: Crystal Zane</p>
              <p>Practitioner: Dr. Lee</p>
            </div>
            <div className="rounded border border-[#eee]">
              <div className="grid grid-cols-3 border-b border-[#eee] bg-[#fafafa] px-2 py-1 text-[8px] font-semibold">
                <span>Service</span>
                <span>Qty</span>
                <span>Total</span>
              </div>
              <div className="grid grid-cols-3 px-2 py-1.5 text-[9px]">
                <span>60 Min RMT</span>
                <span>1</span>
                <span>$77.52</span>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <span className="rounded-lg bg-primary px-3 py-1 text-[9px] font-semibold text-text-primary">
                Checkout
              </span>
            </div>
          </div>
        </TendoAppChrome>

        <div className="absolute bottom-0 right-0 z-20 w-[42%] overflow-hidden rounded-[1.25rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold">
            Payment
          </div>
          <div className="p-3 text-center">
            <CheckCircle2 className="mx-auto mb-1 h-8 w-8 text-[#28c840]" strokeWidth={1.5} />
            <p className="text-[10px] font-bold text-text-primary">Payment Success</p>
            <p className="text-[8px] text-text-muted">$77.52 received</p>
          </div>
        </div>
      </div>
    </MockupContainer>
  );
}

/** Transactions table + mobile submit payment */
export function BillingPaymentsMockup() {
  const rows = [
    { date: 'May 24', patient: 'Zoe Friesen', amount: '$77.52', status: 'Paid' },
    { date: 'May 24', patient: 'Mike Smith', amount: '$65.00', status: 'Paid' },
    { date: 'May 23', patient: 'Sarah Lee', amount: '$120.00', status: 'Pending' },
  ];

  return (
    <MockupContainer>
      <div className="relative pb-2 pt-2">
        <TendoAppChrome className="relative mr-[20%]">
          <div className="flex items-center gap-2 border-b border-[#eee] px-3 py-1.5">
            <DollarSign className="h-3 w-3 text-text-muted" />
            <span className="text-[10px] font-semibold text-text-primary">Transactions</span>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-4 border-b border-[#eee] pb-1 text-[8px] font-semibold text-text-muted">
              <span>Date</span>
              <span>Patient</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            {rows.map((row) => (
              <div key={`${row.patient}-${row.date}`} className="grid grid-cols-4 border-b border-[#f5f5f5] py-1.5 text-[9px]">
                <span className="text-text-muted">{row.date}</span>
                <span>{row.patient}</span>
                <span>{row.amount}</span>
                <span className={row.status === 'Paid' ? 'font-medium text-[#28c840]' : 'text-primary'}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </TendoAppChrome>

        <div className="absolute -right-1 top-8 z-20 w-[38%] overflow-hidden rounded-[1.35rem] border-[3px] border-[#333] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
          <div className="bg-gradient-to-r from-baby-blue to-soft-pink/50 py-1.5 text-center text-[8px] font-bold">
            Submit Payment
          </div>
          <div className="space-y-2 p-3">
            <div className="rounded border border-[#eee] px-2 py-1.5 text-[8px] text-text-muted">Card number</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded border border-[#eee] px-2 py-1.5 text-[8px] text-text-muted">MM/YY</div>
              <div className="rounded border border-[#eee] px-2 py-1.5 text-[8px] text-text-muted">CVC</div>
            </div>
            <div className="rounded-lg bg-primary py-1.5 text-center text-[9px] font-semibold text-text-primary">
              Pay $77.52
            </div>
          </div>
        </div>

        <MousePointer2
          className="absolute bottom-6 right-[28%] z-30 h-6 w-6 rotate-[-20deg] text-[#1a1a1a] drop-shadow-md"
          fill="white"
          strokeWidth={1.5}
        />
      </div>
    </MockupContainer>
  );
}

/** Appointment checkout + coverage overlay + Claim.MD */
export function BillingDirectMockup() {
  return (
    <MockupContainer>
      <div className="relative pb-6 pt-2">
        <TendoAppChrome className="relative">
          <div className="flex items-center justify-between border-b border-[#eee] bg-[#1e3a5f] px-3 py-2">
            <span className="text-[11px] font-bold text-white">Appointment Checkout</span>
            <span className="text-[9px] text-white/70">Crystal Zane</span>
          </div>
          <div className="grid grid-cols-5 gap-0">
            <div className="col-span-3 border-r border-[#eee] p-3">
              <div className="mb-2 grid grid-cols-3 border-b border-[#eee] pb-1 text-[8px] font-semibold text-text-muted">
                <span>Service</span>
                <span>Qty</span>
                <span>Total</span>
              </div>
              {['60 Min RMT — $77.52', 'Product — $24.99'].map((line) => (
                <div key={line} className="border-b border-[#f5f5f5] py-1.5 text-[9px]">
                  {line}
                </div>
              ))}
              <div className="mt-3 flex justify-between text-[10px] font-bold">
                <span>Total</span>
                <span>$102.51</span>
              </div>
              <div className="mt-2 rounded-lg bg-primary py-1.5 text-center text-[9px] font-semibold text-text-primary">
                Submit Claim
              </div>
            </div>
            <div className="col-span-2 p-2">
              <p className="mb-1 text-[9px] font-semibold text-text-primary">Insurance</p>
              <div className="space-y-1">
                <div className="rounded bg-baby-blue/40 px-2 py-1 text-[8px]">Sun Life — Active</div>
                <div className="rounded bg-soft-pink/50 px-2 py-1 text-[8px]">Direct Bill</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 w-40 rounded-lg border border-[#e8e8e8] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <p className="mb-1.5 text-[10px] font-bold text-text-primary">Coverage</p>
            <p className="text-[9px] text-[#666]">Eligible: $65.00</p>
            <p className="text-[9px] text-[#666]">Patient owes: $12.52</p>
          </div>
        </TendoAppChrome>

        <div className="absolute -bottom-1 left-2 z-20 rounded-lg border border-[#eee] bg-white px-3 py-2 shadow-md">
          <span className="text-[11px] font-black tracking-tight text-[#1a5fb4]">CLAIM.MD</span>
        </div>
      </div>
    </MockupContainer>
  );
}

/** Reports sidebar + dashboard KPIs */
export function BillingInsightsMockup() {
  const kpis = [
    { label: 'Patient Visits', value: '248', change: '+12%' },
    { label: 'New Appointments', value: '86', change: '+8%' },
    { label: 'Revenue', value: '$42.5k', change: '+15%' },
  ];

  return (
    <MockupContainer>
      <div className="relative pb-4 pt-2">
        <TendoAppChrome className="relative opacity-90">
          <div className="flex min-h-[220px]">
            <aside className="w-28 flex-shrink-0 border-r border-[#eee] bg-[#fafafa] p-2">
              <p className="mb-2 text-[9px] font-bold text-text-primary">Reports</p>
              {['Overview', 'Billing Detail', 'Receivables', 'Claims'].map((item, i) => (
                <div
                  key={item}
                  className={cn(
                    'mb-1 rounded px-2 py-1 text-[8px]',
                    i === 1 ? 'bg-baby-blue/50 font-semibold text-text-primary' : 'text-text-muted',
                  )}
                >
                  {item}
                </div>
              ))}
            </aside>
            <div className="flex-1 p-3">
              <p className="text-[10px] font-semibold text-text-muted">Billing Detail Report</p>
              <div className="mt-3 space-y-2">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-3 rounded bg-[#f0f0f0]" />
                ))}
              </div>
            </div>
          </div>
        </TendoAppChrome>

        <TendoAppChrome className="absolute -bottom-2 right-0 z-20 w-[78%] shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-2 border-b border-[#eee] px-3 py-1.5">
            <BarChart3 className="h-3 w-3 text-text-muted" />
            <span className="text-[10px] font-semibold text-text-primary">My Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-[#eee] bg-[#fafafa] p-2">
                <p className="text-[8px] text-text-muted">{kpi.label}</p>
                <p className="text-[12px] font-bold text-text-primary">{kpi.value}</p>
                <p className="flex items-center gap-0.5 text-[8px] font-medium text-[#28c840]">
                  <TrendingUp className="h-2.5 w-2.5" />
                  {kpi.change}
                </p>
              </div>
            ))}
          </div>
        </TendoAppChrome>

        <MousePointer2
          className="absolute left-[22%] top-[32%] z-30 h-5 w-5 text-[#1a1a1a] drop-shadow-md"
          fill="white"
          strokeWidth={1.5}
        />
      </div>
    </MockupContainer>
  );
}
