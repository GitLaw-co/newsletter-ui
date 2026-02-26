import React, { forwardRef } from 'react';

export type TemplateCardPosition = 'standalone' | 'left' | 'right';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface TemplateCardProps extends NativeProps {
  /** Document title displayed on the card */
  title: string;
  /** Generated-in caption (e.g. "Generated in 1.2s") */
  generatedIn?: string;
  /** Card border position — standalone=full border, left/right=shared border for pairs */
  position?: TemplateCardPosition;
  /** Additional CSS classes */
  className?: string;
}

export const TemplateCard = forwardRef<HTMLDivElement, TemplateCardProps>(
  (
    {
      title,
      generatedIn,
      position = 'standalone',
      className = '',
      ...nativeProps
    },
    ref
  ) => {
    const borderClass =
      position === 'right'
        ? 'border-r border-t border-b border-email-green-border border-dashed'
        : 'border border-email-green-border border-dashed';

    return (
      <div
        ref={ref}
        className={`w-[300px] h-[300px] bg-white flex items-center justify-center ${borderClass} p-[36px] ${className}`}
        {...nativeProps}
      >
        <div className="flex flex-col justify-between w-[156px] h-[219px]">
          {/* Document title */}
          <p className="text-[21px] leading-[1.4] text-email-green-text font-georgia">
            {title}
          </p>

          {/* Skeleton label bars */}
          <div className="flex flex-col gap-[7px]">
            <div className="h-[6px] w-[109px] bg-email-green-muted opacity-30 rounded-[1px]" />
            <div className="h-[6px] w-[79px] bg-email-green-muted opacity-30 rounded-[1px]" />
          </div>

          {/* Generated-in caption */}
          {generatedIn && (
            <p className="text-[9px] font-medium leading-[1.4] tracking-[0.9px] uppercase text-email-green-caption opacity-50">
              {generatedIn}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TemplateCard.displayName = 'TemplateCard';
