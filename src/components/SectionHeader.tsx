import React, { forwardRef } from 'react';

export type SectionHeaderSize = 'lg' | 'md';

type NativeProps = Omit<React.HTMLAttributes<HTMLHeadingElement>, 'className'>;

export interface SectionHeaderProps extends NativeProps {
  /** Font size variant — lg=30px (default), md=20px */
  size?: SectionHeaderSize;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses: Record<SectionHeaderSize, string> = {
  lg: 'text-[30px] leading-[1.4]',
  md: 'text-xl leading-[1.4]',
};

export const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>(
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

SectionHeader.displayName = 'SectionHeader';
