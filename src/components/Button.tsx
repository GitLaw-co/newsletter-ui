import React, { forwardRef } from 'react';

type NativeAnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'className' | 'href'
>;

export interface ButtonProps extends NativeAnchorProps {
  /** Destination URL — renders as an <a> tag for email compatibility */
  href?: string;
  /** Button label */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href = '#', children, className = '', ...nativeProps }, ref) => (
    <a
      ref={ref}
      href={href}
      className={`inline-flex w-fit items-center justify-center bg-primary text-negative text-sm rounded-gitlaw-s p-gitlaw-xl no-underline transition-interactive hover:opacity-90 ${className}`}
      {...nativeProps}
    >
      {children}
    </a>
  )
);

Button.displayName = 'Button';
