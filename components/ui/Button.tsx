// Composant Button réutilisable avec variants et tailles

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      fullWidth = false,
      loading = false,
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';

    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl',
      accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500 shadow-lg hover:shadow-xl',
      secondary: 'bg-dark-800 text-white hover:bg-dark-700 focus:ring-dark-800 shadow-lg hover:shadow-xl',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
      ghost: 'text-dark-800 hover:bg-dark-100 focus:ring-dark-300',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      loading && 'cursor-wait',
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, (children.props as any)?.className),
      } as any);
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-rotate h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Chargement...</span>
          </>
        ) : (
          <>
            {Icon && iconPosition === 'left' && <Icon className="h-5 w-5" />}
            {children}
            {Icon && iconPosition === 'right' && <Icon className="h-5 w-5" />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
