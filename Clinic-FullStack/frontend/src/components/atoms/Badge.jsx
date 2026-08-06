import { cn } from '@/lib/cn';

const variantStyles = {
  default: 'bg-accent-light text-text-primary',
  primary: 'bg-primary text-white',
  success: 'bg-success-light text-success',
  warning: 'bg-warning-light text-text-primary',
  error: 'bg-error-light text-error',
  info: 'bg-secondary-light text-text-primary',
};

export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
