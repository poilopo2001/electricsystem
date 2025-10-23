// Composant Textarea avec gestion d'erreurs et compteur de caractères

import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  showCharCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      fullWidth = false,
      showCharCount = false,
      required,
      maxLength,
      value,
      ...props
    },
    ref
  ) => {
    const textareaId = props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const currentLength = value ? value.toString().length : 0;

    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-dark-800 flex items-center gap-1"
          >
            {label}
            {required && <span className="text-primary-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'px-4 py-3 rounded-lg border-2 transition-all duration-200',
            'text-dark-800 placeholder:text-dark-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'resize-y min-h-[120px]',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-dark-200 focus:border-primary-500 focus:ring-primary-500',
            'disabled:bg-dark-100 disabled:cursor-not-allowed',
            'hover:border-dark-300',
            fullWidth && 'w-full',
            className
          )}
          required={required}
          maxLength={maxLength}
          value={value}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {error && (
              <p id={`${textareaId}-error`} className="text-sm text-red-600 flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
            {helperText && !error && (
              <p id={`${textareaId}-helper`} className="text-sm text-dark-500">
                {helperText}
              </p>
            )}
          </div>
          {showCharCount && maxLength && (
            <p
              className={cn(
                'text-sm',
                currentLength > maxLength * 0.9 ? 'text-primary-500 font-medium' : 'text-dark-500'
              )}
            >
              {currentLength} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
