import React, { forwardRef } from 'react';

export type EmailSectionHeaderSize = 'lg' | 'md';

type NativeProps = Omit<React.HTMLAttributes<HTMLHeadingElement>, 'className'>;

export interface EmailSectionHeaderProps extends NativeProps {
  /** Font size variant — lg=30px (default), md=20px */
  size?: EmailSectionHeaderSize;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses: Record<EmailSectionHeaderSize, string> = {
  lg: 'text-[30px] leading-[1.4]',
  md: 'text-xl leading-[1.4]',
};

export const EmailSectionHeader = forwardRef<HTMLHeadingElement, EmailSectionHeaderProps>(
  ({ size = 'lg', className = '', children, ...nativeProps }, ref) => (
    <h2
      ref={ref}
      className={`font-semibold text-primary ${sizeClasses[size]} ${className}`}
      {...nativeProps}
    >
      {children}
    </h2>
  )
);

EmailSectionHeader.displayName = 'EmailSectionHeader';
