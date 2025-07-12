import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '../../types';

const variantStyles = {
  primary: 'bg-primary-blue text-white hover:bg-blue-600 active:bg-blue-700',
  secondary: 'bg-bg-secondary text-text-primary border border-border hover:bg-gray-50 active:bg-gray-100',
  ghost: 'bg-transparent text-text-primary hover:bg-nav-hover active:bg-gray-100',
  danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
};

const sizeStyles = {
  sm: 'px-3 py-2 text-sm min-h-[36px]',
  md: 'px-4 py-3 text-base min-h-touch',
  lg: 'px-6 py-4 text-lg min-h-[52px]',
};

/**
 * Button - Primary button component with iOS-optimized touch targets
 * Supports multiple variants, sizes, and loading states
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  className = '',
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-lg',
    'font-medium',
    'transition-colors',
    'duration-150',
    'cursor-pointer',
    'select-none',
    'touch-target', // Ensures 44px minimum for iOS
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary-blue',
    'focus:ring-opacity-50',
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    variantStyles[variant],
    sizeStyles[size],
  ].join(' ');

  const combinedClasses = `${baseClasses} ${className}`.trim();

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
};