import React, { forwardRef } from 'react';

type NativeProps = Omit<React.HTMLAttributes<HTMLHRElement>, 'className'>;

export interface EmailDividerProps extends NativeProps {
  /** Additional CSS classes */
  className?: string;
}

export const EmailDivider = forwardRef<HTMLHRElement, EmailDividerProps>(
  ({ className = '', ...nativeProps }, ref) => (
    <hr
      ref={ref}
      className={`w-full border-0 border-t border-input-border shrink-0 ${className}`}
      {...nativeProps}
    />
  )
);

EmailDivider.displayName = 'EmailDivider';
