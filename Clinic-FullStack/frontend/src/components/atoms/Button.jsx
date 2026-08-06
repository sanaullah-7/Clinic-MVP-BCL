import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

const variantStyles = {
  primary:
    'bg-primary text-text-primary hover:bg-primary-hover focus-visible:ring-primary shadow-orange font-semibold',
  secondary:
    'bg-white text-text-primary hover:bg-accent-light border border-border focus-visible:ring-primary shadow-sm',
  ghost: 'text-text-primary hover:bg-accent-light focus-visible:ring-primary',
  danger: 'bg-error text-white hover:brightness-110 focus-visible:ring-error shadow-sm',
  outline:
    'border-2 border-text-primary bg-white text-text-primary hover:bg-[#fafafa] focus-visible:ring-primary',
};

const sizeStyles = {
  sm: 'h-9 px-4 text-body-sm gap-1.5',
  md: 'h-10 px-5 text-body-sm gap-2',
  lg: 'h-12 px-8 text-body gap-2',
};

export const Button = forwardRef(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    pill = false,
    loading = false,
    fullWidth = false,
    disabled,
    children,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        pill ? 'rounded-full' : 'rounded-lg',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
});
