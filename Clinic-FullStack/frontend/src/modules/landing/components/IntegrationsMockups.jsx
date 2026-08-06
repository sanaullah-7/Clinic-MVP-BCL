import { IntegrationsHub } from './IntegrationsSection';

/** Large partner hub visual for integrations page hero (left column) */
export function IntegrationsHeroVisual() {
  return (
    <div className="relative w-full lg:scale-[1.05] lg:origin-left xl:scale-110">
      <IntegrationsHub className="max-w-none px-2 sm:px-0" />
    </div>
  );
}
