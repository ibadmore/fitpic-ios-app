import React from 'react';
import { motion } from 'framer-motion';

interface HStackProps {
  children: React.ReactNode;
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alignment?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
  animate?: boolean;
}

const spacingMap = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

const alignmentMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const paddingMap = {
  none: 'p-0',
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

/**
 * HStack - Horizontal stack layout component (mirrors SwiftUI HStack)
 * Arranges children horizontally with configurable spacing and alignment
 */
export const HStack: React.FC<HStackProps> = ({
  children,
  spacing = 'md',
  alignment = 'center',
  justify = 'start',
  className = '',
  padding = 'none',
  wrap = false,
  animate = false,
}) => {
  const baseClasses = [
    'flex',
    'flex-row',
    spacingMap[spacing],
    alignmentMap[alignment],
    justifyMap[justify],
    paddingMap[padding],
    wrap ? 'flex-wrap' : 'flex-nowrap',
  ].join(' ');

  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (animate) {
    return (
      <motion.div
        className={combinedClasses}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};