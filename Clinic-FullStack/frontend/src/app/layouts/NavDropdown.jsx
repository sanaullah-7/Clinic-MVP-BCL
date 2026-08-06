import { Link } from 'react-router-dom';
import { ChevronDown, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

/** Juvonno-style active nav / dropdown accent */
export const NAV_ACCENT = '#00a3ad';
export const NAV_DROPDOWN_BG = '#221e1e';

/**
 * Desktop nav dropdown — click to open, smooth slide + fade (Juvonno style).
 */
export function NavDropdown({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          'flex items-center gap-1.5 text-[0.875rem] font-medium transition-colors duration-200',
          isOpen ? 'text-[#00a3ad]' : 'text-white/90 hover:text-white',
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-300 ease-out',
            isOpen ? 'rotate-180 text-[#00a3ad]' : 'opacity-80',
          )}
          strokeWidth={2.5}
        />
      </button>

      <div
        className={cn(
          'absolute left-0 top-[calc(100%+12px)] z-50 min-w-[240px] overflow-hidden rounded-b-xl shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0',
        )}
        style={{ backgroundColor: NAV_DROPDOWN_BG }}
      >
        <ul className="py-3">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-2.5 text-[0.875rem] font-normal text-white transition-colors hover:bg-white/5"
              >
                <span>{item.label}</span>
                {item.starred && (
                  <Star className="h-3 w-3 fill-white text-white" aria-label="Featured" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Mobile nav accordion — smooth expand for dropdown sections.
 */
export function MobileNavDropdown({ label, items, isOpen, onToggle, onNavigate }) {
  return (
    <div className="border-b border-white/10 pb-2">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'flex w-full items-center justify-between py-3 text-left text-body font-medium transition-colors',
          isOpen ? 'text-[#00a3ad]' : 'text-white',
        )}
      >
        {label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform duration-300 ease-out', isOpen && 'rotate-180')}
        />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <ul
            className={cn(
              'space-y-0.5 rounded-lg pb-2 pl-2 transition-opacity duration-300',
              isOpen ? 'opacity-100' : 'opacity-0',
            )}
            style={{ backgroundColor: NAV_DROPDOWN_BG }}
          >
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="flex items-center gap-2 px-4 py-2.5 text-body-sm text-white/90 hover:text-white"
                >
                  {item.label}
                  {item.starred && <Star className="h-3 w-3 fill-white text-white" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
