import React, { forwardRef } from 'react';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface EmailFooterProps extends NativeProps {
  /** Main site URL shown as a link */
  siteUrl?: string;
  /** Unsubscribe link URL */
  unsubscribeHref?: string;
  /** Company address line(s) */
  address?: string;
  /** Additional CSS classes */
  className?: string;
}

export const EmailFooter = forwardRef<HTMLDivElement, EmailFooterProps>(
  (
    {
      siteUrl = 'https://git.law',
      unsubscribeHref = '#',
      address = 'GitLaw Inc.\n28 Geary St Suite 650 San Francisco, CA 94108',
      className = '',
      ...nativeProps
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`w-full border-t border-dashed border-input-border pt-gitlaw-2xl flex flex-col gap-gitlaw-2xl ${className}`}
      {...nativeProps}
    >
      {/* Tagline + site URL */}
      <div className="flex flex-col gap-gitlaw-xs w-full">
        <span className="text-base leading-[1.4] text-subtle">
          Contracts at the speed of AI
        </span>
        <a
          href={siteUrl}
          className="text-base leading-[1.4] text-primary no-underline hover:underline"
        >
          {siteUrl}
        </a>
      </div>

      {/* Company address */}
      <div className="flex flex-col gap-gitlaw-l">
        {address.split('\n').map((line, i) => (
          <span
            key={i}
            className="text-sm font-light leading-none text-subtle"
          >
            {line}
          </span>
        ))}
      </div>

      {/* Unsubscribe */}
      <div>
        <a
          href={unsubscribeHref}
          className="text-base leading-[1.4] text-primary no-underline hover:underline"
        >
          Unsubscribe
        </a>
      </div>
    </div>
  )
);

EmailFooter.displayName = 'EmailFooter';
