import React, { forwardRef } from 'react';

export type EmailFeatureBlockVariant = 'purple' | 'light-purple' | 'green';
export type EmailFeatureBlockHeight = 'default' | 'tall';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface EmailFeatureBlockProps extends NativeProps {
  /** Background colour theme */
  variant?: EmailFeatureBlockVariant;
  /** Bold headline text overlaid on the block */
  text: string;
  /** Position of the text within the block */
  textPosition?: 'left' | 'right';
  /** Optional caption displayed beneath the block */
  caption?: string;
  /** Optional visual content (image, mock UI) placed inside the block */
  children?: React.ReactNode;
  /** Block height — default=220px, tall=320px */
  height?: EmailFeatureBlockHeight;
  /** Additional CSS classes */
  className?: string;
}

const variantBg: Record<EmailFeatureBlockVariant, string> = {
  purple: 'bg-primary',
  'light-purple': 'bg-email-light-purple',
  green: 'bg-email-green',
};

const variantTextColor: Record<EmailFeatureBlockVariant, string> = {
  purple: 'text-negative',
  'light-purple': 'text-negative',
  green: 'text-primary',
};

const heightClasses: Record<EmailFeatureBlockHeight, string> = {
  default: 'h-[220px]',
  tall: 'h-[320px]',
};

export const EmailFeatureBlock = forwardRef<HTMLDivElement, EmailFeatureBlockProps>(
  (
    {
      variant = 'purple',
      text,
      textPosition = 'left',
      caption,
      children,
      height = 'default',
      className = '',
      ...nativeProps
    },
    ref
  ) => (
    <div ref={ref} className={`flex flex-col gap-gitlaw-m ${className}`} {...nativeProps}>
      <div
        className={`relative w-full rounded-[12px] overflow-hidden ${variantBg[variant]} ${heightClasses[height]}`}
      >
        {/* Text overlay */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-10 w-[280px] ${
            textPosition === 'left' ? 'left-gitlaw-4xl' : 'right-gitlaw-4xl'
          }`}
        >
          <p
            className={`text-2xl font-bold leading-[1.4] ${variantTextColor[variant]}`}
          >
            {text}
          </p>
        </div>
        {/* Optional visual content (images, mock UI etc.) */}
        {children && (
          <div className="absolute inset-0 pointer-events-none">{children}</div>
        )}
      </div>
      {caption && (
        <p className="text-base leading-[1.4] text-subtle">{caption}</p>
      )}
    </div>
  )
);

EmailFeatureBlock.displayName = 'EmailFeatureBlock';
