import React, { forwardRef } from 'react';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface WrapperProps extends NativeProps {
  /** Additional CSS classes */
  className?: string;
}

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ className = '', children, ...nativeProps }, ref) => (
    <div
      ref={ref}
      className={`w-[700px] bg-white rounded-[16px] p-gitlaw-4xl flex flex-col gap-gitlaw-3xl shadow-card ${className}`}
      {...nativeProps}
    >
      {children}
    </div>
  )
);

Wrapper.displayName = 'Wrapper';
