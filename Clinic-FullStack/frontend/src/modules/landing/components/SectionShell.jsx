import { cn } from '@/lib/cn';

/**
 * Shared section container — max-width + horizontal padding for landing sections.
 */
export function SectionShell({ as: Tag = 'section', id, className, innerClassName, children, ...rest }) {
  return (
    <Tag id={id} className={cn('w-full overflow-x-hidden', className)} {...rest}>
      <div className={cn('section-inner', innerClassName)}>{children}</div>
    </Tag>
  );
}

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn('mx-auto mb-12 max-w-3xl text-center md:mb-14', className)}>
      <h2 className="text-balance font-heading text-[1.65rem] font-bold leading-snug tracking-tight text-[#1a1a1a] md:text-[2rem] lg:text-[2.25rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-body-lg leading-relaxed text-[#666666]">{subtitle}</p>
      )}
    </div>
  );
}
