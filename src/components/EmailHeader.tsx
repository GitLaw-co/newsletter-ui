import React, { forwardRef } from 'react';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface EmailHeaderProps extends NativeProps {
  /** URL to the logo image. If omitted, renders a text-based GitLaw wordmark. */
  logoSrc?: string;
  /** Alt text for the logo image */
  logoAlt?: string;
  /** Additional CSS classes */
  className?: string;
}

export const EmailHeader = forwardRef<HTMLDivElement, EmailHeaderProps>(
  ({ logoSrc, logoAlt = 'GitLaw', className = '', ...nativeProps }, ref) => (
    <div ref={ref} className={`shrink-0 ${className}`} {...nativeProps}>
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={logoAlt}
          className="h-[34px] w-auto object-contain"
        />
      ) : (
        <span className="text-xl font-semibold text-primary tracking-tight">
          GitLaw
        </span>
      )}
    </div>
  )
);

EmailHeader.displayName = 'EmailHeader';
