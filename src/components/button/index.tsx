'use client';

import { Images } from '@/src/images';
import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

type ButtonType =
  | 'primary'
  | 'outlined'
  | 'secondary'
  | 'tertiary'
  | 'plainButton'
  | 'customButton';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  isLoading?: boolean;
  widthStyle?: string;
  width?: string;
  height?: string;
  className?: string;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'sm',
      isLoading = false,
      widthStyle = 'w-full',
      width,
      height,
      children,
      className = '',
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'rounded-4 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // Apply default height only if height prop is not provided
    const defaultHeightClass = height ? '' : 'h-[var(--control-height)]';

    const variantStyles: Record<ButtonType, string> = {
      primary:
        'bg-[#1c2b51] text-white hover:bg-[#1c2b51]/90 disabled:bg-disabled-fill disabled:text-disabled-text disabled:opacity-100 cursor-pointer',
      outlined:
        'bg-white border-1 border-[#1c2b51] text-[#1c2b51] hover:bg-[#1c2b51]/5 cursor-pointer',
      secondary:
        'bg-white border-1 border-[#1c2b51] text-[#1c2b51] hover:bg-[#1c2b51]/5 cursor-pointer',
      tertiary:
        'bg-white border-[1.25px] border-[var(--color-navy-100)] text-[var(--color-navy-400)] hover:bg-slate-50 cursor-pointer',
      plainButton: 'bg-transparent cursor-pointer',
      customButton: 'cursor-pointer',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    };

    const combinedClassName = [
      baseStyles,
      defaultHeightClass,
      variantStyles[variant],
      sizeStyles[size],
      !width && widthStyle, // Only apply widthStyle if width prop is not provided
      className,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    const combinedStyle = {
      width,
      height,
      ...style,
    };

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        style={combinedStyle}
        {...props}
      >
        {isLoading && (
          <Image
            src={Images.buttonLoader}
            alt="Loading..."
            className="animate-spin h-4 w-4 mr-2"
          />
        )}
        {children}
      </button>
    );
  }
);

ButtonComponent.displayName = 'Button';

const Button = React.memo(ButtonComponent);
Button.displayName = 'Button';

export default Button;
