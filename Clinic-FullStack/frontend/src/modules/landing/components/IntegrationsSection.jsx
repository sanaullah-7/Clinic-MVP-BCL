import { Link } from 'react-router-dom';
import { Shield, DollarSign, GitBranch, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components';
import { SectionShell, SectionHeading } from './SectionShell';
import { APP_NAME, ROUTES } from '@/constants/routes';
import { cn } from '@/lib/cn';

const INTEGRATIONS = [
  {
    icon: Shield,
    title: 'Unified & secure',
    description:
      'Experience the ease of a unified management system that integrates all your tools while ensuring top-notch security.',
    cta: 'Explore Integrations',
    to: ROUTES.landing.features,
  },
  {
    icon: DollarSign,
    title: 'No additional costs',
    description:
      'Connect the tools you already use for direct billing, HEP, EMR, administration and more at no extra cost.',
    cta: 'Explore Integrations',
    to: ROUTES.landing.features,
  },
  {
    icon: GitBranch,
    title: 'Open API',
    description:
      'Easily integrate external apps to tailor your experience and enhance functionality and connectivity.',
    cta: 'Explore Our API',
    to: ROUTES.landing.features,
  },
];

/** Five logo groups — matches hub card layout in reference design */
const LOGO_GROUPS = [
  {
    id: 'billing',
    logos: [
      { label: 'Stripe', className: 'text-[#635bff] font-bold tracking-tight' },
      { label: 'Claim.MD', className: 'text-[#0066cc] font-semibold', sub: '✚' },
    ],
  },
  {
    id: 'claims',
    logos: [
      { label: 'eClaims', className: 'text-[#2d3748] font-semibold italic' },
      { label: 'OHIP', className: 'text-[#1a1a1a] font-bold text-[0.65rem]' },
      { label: 'HCAI', className: 'text-[#0066b3] font-bold' },
      { label: '🦬', className: 'text-lg', aria: 'Telus' },
    ],
  },
  {
    id: 'ops',
    logos: [
      { label: 'GTM', className: 'text-[#4285f4] font-bold text-[0.65rem]' },
      { label: 'Medimap', className: 'text-[#00a3ad] font-bold text-[0.65rem]' },
      { label: 'Xero', className: 'text-[#13b5ea] font-bold italic' },
    ],
  },
  {
    id: 'hep',
    logos: [
      { label: 'Physitrack', className: 'text-[#7cb342] font-semibold text-[0.6rem]' },
      { label: 'Wibbi', className: 'text-[#2196f3] font-bold text-[0.65rem]' },
      { label: 'Doxy.me', className: 'text-[#1565c0] font-semibold text-[0.6rem]' },
    ],
  },
  {
    id: 'comms',
    logos: [
      { label: 'SRFAX', className: 'text-[#e53935] font-bold text-[0.65rem]' },
      { label: 'G Cal', className: 'text-[#4285f4] font-bold text-[0.6rem]' },
      { label: 'Outlook', className: 'text-[#0078d4] font-semibold text-[0.6rem]' },
      { label: '📅', className: 'text-sm', aria: 'Calendar' },
    ],
  },
];

function TendoHubLogo() {
  return (
    <div
      className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-baby-blue-700 to-brand-nav shadow-md md:h-[80px] md:w-[80px]"
      aria-hidden
    >
      <svg viewBox="0 0 40 40" className="h-10 w-10 md:h-11 md:w-11" fill="none">
        <path
          d="M8 22c4-8 8-12 12-12s8 4 12 12"
          stroke="#f7803c"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10 26h20"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ConnectorLines() {
  const stroke = '#d4d4d4';
  const dash = '5 5';

  return (
    <svg
      viewBox="0 0 1000 130"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 right-0 top-[52px] z-0 hidden h-[110px] w-full lg:block"
      aria-hidden
    >
      <path d="M500 0 L500 35" stroke={stroke} strokeWidth="1.5" strokeDasharray={dash} fill="none" />
      <path d="M500 35 L500 55" stroke={stroke} strokeWidth="1.5" strokeDasharray={dash} fill="none" />
      <path
        d="M100 55 L900 55"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray={dash}
        fill="none"
      />
      {[100, 275, 500, 725, 900].map((x) => (
        <path
          key={x}
          d={`M${x} 55 L${x} 130`}
          stroke={stroke}
          strokeWidth="1.5"
          strokeDasharray={dash}
          fill="none"
        />
      ))}
    </svg>
  );
}

function LogoChip({ logo }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[0.7rem] leading-none md:text-[0.75rem]',
        logo.className,
      )}
      aria-label={logo.aria ?? logo.label}
    >
      {logo.sub && <span className="text-[0.55rem]">{logo.sub}</span>}
      {logo.label}
    </span>
  );
}

function IntegrationLogoCard({ group, index }) {
  return (
    <div
      className={cn(
        'relative z-[1] flex min-h-[88px] flex-col items-center justify-center gap-1.5 rounded-xl border border-[#e8ecea] bg-gradient-to-b from-[#eef8f6] to-[#f4faf9] px-2 py-3 shadow-sm md:min-h-[96px] md:rounded-2xl md:px-3 md:py-4',
        index === 2 && 'lg:-mt-0',
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        {group.logos.map((logo) => (
          <LogoChip key={logo.label} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationsHub({ className }) {
  return (
    <div className={cn('relative mx-auto max-w-[1060px]', className)}>
      <div className="flex flex-col items-center">
        <TendoHubLogo />
        <ConnectorLines />
      </div>

      <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-8 lg:grid-cols-5 lg:gap-5">
        {LOGO_GROUPS.map((group, i) => (
          <IntegrationLogoCard key={group.id} group={group} index={i} />
        ))}
      </div>
    </div>
  );
}

function FeatureColumn({ item, delay }) {
  const Icon = item.icon;

  return (
    <FadeIn delay={delay} className="flex flex-col">
      <Icon className="mb-4 h-7 w-7 text-[#1a1a1a]" strokeWidth={1.5} />
      <h3 className="mb-3 font-heading text-[1.05rem] font-bold text-[#1a1a1a] md:text-[1.125rem]">
        {item.title}
      </h3>
      <p className="mb-6 flex-1 text-[0.9375rem] leading-relaxed text-[#666666] md:text-body">
        {item.description}
      </p>
      <Link
        to={item.to}
        className="group inline-flex items-center gap-2.5 text-body-sm font-semibold text-[#1a1a1a] hover:text-primary"
      >
        {item.cta}
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1a1a1a] transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </FadeIn>
  );
}

export function IntegrationsSection() {
  return (
    <SectionShell className="bg-white py-14 md:py-20 lg:py-24">
      <SectionHeading
        title={`Get more value from your tools with ${APP_NAME} integrations`}
        subtitle={`Connect to industry-leading software and custom apps right from within ${APP_NAME} clinic software.`}
        className="mb-10 md:mb-12"
      />

      <FadeIn>
        <IntegrationsHub className="mb-14 md:mb-16 lg:mb-20" />
      </FadeIn>

      <div className="mx-auto grid max-w-[1060px] gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {INTEGRATIONS.map((item, i) => (
          <FeatureColumn key={item.title} item={item} delay={0.08 + i * 0.06} />
        ))}
      </div>
    </SectionShell>
  );
}
