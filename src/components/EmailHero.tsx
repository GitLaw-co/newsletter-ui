import React, { forwardRef } from 'react';
import { EmailButton } from './EmailButton';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface EmailHeroProps extends NativeProps {
  /** The main headline text */
  headline: string;
  /** Optional word or phrase within the headline to highlight in yellow */
  highlightText?: string;
  /** Body paragraph content */
  body: React.ReactNode;
  /** CTA button label — omit to hide the button */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Additional CSS classes */
  className?: string;
}

export const EmailHero = forwardRef<HTMLDivElement, EmailHeroProps>(
  (
    {
      headline,
      highlightText,
      body,
      ctaLabel,
      ctaHref = '#',
      className = '',
      ...nativeProps
    },
    ref
  ) => {
    const renderHeadline = () => {
      if (!highlightText || !headline.includes(highlightText)) {
        return <>{headline}</>;
      }
      const idx = headline.indexOf(highlightText);
      const before = headline.slice(0, idx);
      const after = headline.slice(idx + highlightText.length);
      return (
        <>
          {before}
          <span className="relative inline whitespace-nowrap">
            <span
              className="absolute inset-0 bg-input-yellow"
              aria-hidden="true"
            />
            <span className="relative">{highlightText}</span>
          </span>
          {after}
        </>
      );
    };

    return (
      <div
        ref={ref}
        className={`flex flex-col gap-gitlaw-3xl ${className}`}
        {...nativeProps}
      >
        <div className="flex flex-col gap-gitlaw-2xl">
          <h1 className="font-georgia text-[52px] leading-[1.2] text-foreground not-italic">
            {renderHeadline()}
          </h1>
          <p className="text-lg leading-[1.4] text-foreground">{body}</p>
        </div>
        {ctaLabel && (
          <div>
            <EmailButton href={ctaHref}>{ctaLabel}</EmailButton>
          </div>
        )}
      </div>
    );
  }
);

EmailHero.displayName = 'EmailHero';
