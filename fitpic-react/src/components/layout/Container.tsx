import React from 'react';
import { VStack } from './VStack';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
}

const sizeMap = {
  sm: 'max-w-sm',     // 320px - minimum mobile
  md: 'max-w-md',     // 390px - iPhone 14 Pro
  lg: 'max-w-lg',     // 440px - larger mobile
  full: 'max-w-none', // No maximum width
};

const paddingMap = {
  none: 'px-0',
  xs: 'px-2',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-10',
};

/**
 * Container - Responsive container component for mobile-first design
 * Provides consistent max-widths and padding for different screen sizes
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'md',
  className = '',
  padding = 'md',
  center = true,
}) => {
  const baseClasses = [
    'w-full',
    sizeMap[size],
    paddingMap[padding],
    center ? 'mx-auto' : '',
    'relative',
  ].join(' ');

  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      <VStack className="min-h-screen">
        {children}
      </VStack>
    </div>
  );
};