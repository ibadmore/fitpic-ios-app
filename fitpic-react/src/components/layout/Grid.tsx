import React from 'react';
import { motion } from 'framer-motion';

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 'auto';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  responsive?: boolean;
  animate?: boolean;
}

const columnMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  auto: 'grid-cols-auto-fit',
};

const gapMap = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-6',
};

const responsiveColumns = {
  // Mobile-first responsive grid
  default: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3',
};

/**
 * Grid - CSS Grid layout component (mirrors SwiftUI LazyVGrid)
 * Provides responsive grid layouts for outfit galleries and card displays
 */
export const Grid: React.FC<GridProps> = ({
  children,
  columns = 2,
  gap = 'md',
  className = '',
  responsive = true,
  animate = false,
}) => {
  const baseClasses = [
    'grid',
    responsive ? responsiveColumns.default : columnMap[columns],
    gapMap[gap],
    'w-full',
  ].join(' ');

  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (animate) {
    return (
      <motion.div
        className={combinedClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1,
              ease: 'easeOut' 
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};