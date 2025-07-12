import React, { useState, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { OutfitItem } from '../../types';
import { VStack, HStack } from '../layout';

interface OutfitCardProps {
  outfit: OutfitItem;
  onImageClick?: () => void;
  onLike?: () => void;
  onSave?: () => void;
  isLiked?: boolean;
  isSaved?: boolean;
  loading?: boolean;
}

/**
 * OutfitCard - Core outfit display component with touch gestures
 * Features lazy loading, swipe actions, and iOS-optimized interactions
 */
export const OutfitCard: React.FC<OutfitCardProps> = ({
  outfit,
  onImageClick,
  onLike,
  onSave,
  isLiked = false,
  isSaved = false,
  loading = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const constraintsRef = useRef(null);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageClick?.();
  };

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  const handleSwipe = (event: any, info: PanInfo) => {
    const swipeThreshold = 100;
    const velocityThreshold = 500;
    
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > velocityThreshold) {
      if (info.offset.x > 0) {
        // Swipe right - like
        onLike?.();
      } else {
        // Swipe left - save
        onSave?.();
      }
    }
  };

  if (loading) {
    return <OutfitCardSkeleton />;
  }

  return (
    <motion.div
      ref={constraintsRef}
      className="relative bg-bg-secondary rounded-xl overflow-hidden shadow-sm border border-border"
      whileTap={{ scale: 0.98 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      dragElastic={0.2}
      onDragEnd={handleSwipe}
      transition={{ duration: 0.2 }}
    >
      {/* Main Image */}
      <div 
        className="relative aspect-[3/4] cursor-pointer"
        onClick={handleImageClick}
      >
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-surface-light animate-pulse" />
        )}
        
        {!imageError ? (
          <img
            src={outfit.image}
            alt={outfit.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-surface-light flex items-center justify-center">
            <span className="text-text-secondary text-sm">Image unavailable</span>
          </div>
        )}

        {/* Confidence Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-bg-overlay rounded-full px-2 py-1">
            <span className="text-white text-xs font-medium">
              {outfit.confidence}% match
            </span>
          </div>
        </div>

        {/* Weather Info */}
        <div className="absolute top-3 right-3">
          <div className="bg-bg-overlay rounded-full px-2 py-1 flex items-center gap-1">
            <span className="text-lg">{outfit.weatherSuitability.icon}</span>
            <span className="text-white text-xs font-medium">
              {outfit.weatherSuitability.temperature}
            </span>
          </div>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute bottom-3 right-3">
          <HStack spacing="xs">
            <motion.button
              className="w-10 h-10 bg-bg-overlay rounded-full flex items-center justify-center touch-target"
              onClick={(e) => handleActionClick(e, () => onLike?.())}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isLiked ? "#FF4458" : "none"}
                stroke={isLiked ? "#FF4458" : "white"}
                strokeWidth="2"
              >
                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.5487 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" />
              </svg>
            </motion.button>

            <motion.button
              className="w-10 h-10 bg-bg-overlay rounded-full flex items-center justify-center touch-target"
              onClick={(e) => handleActionClick(e, () => onSave?.())}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isSaved ? "#0066FF" : "none"}
                stroke={isSaved ? "#0066FF" : "white"}
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </motion.button>
          </HStack>
        </div>
      </div>

      {/* Card Content */}
      <VStack spacing="xs" padding="md">
        <h3 className="font-semibold text-text-primary text-base leading-tight">
          {outfit.title}
        </h3>
        
        <p className="text-text-secondary text-sm line-clamp-2">
          {outfit.description}
        </p>

        {/* Tags */}
        <HStack spacing="xs" wrap className="mt-2">
          {outfit.chips.slice(0, 3).map((chip, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-nav-active text-primary-blue text-xs rounded-full"
            >
              {chip}
            </span>
          ))}
        </HStack>

        {/* Social Metrics */}
        <HStack spacing="md" justify="between" className="mt-2 pt-2 border-t border-border">
          <HStack spacing="xs">
            <span className="text-xs text-text-secondary">
              ❤️ {outfit.socialMetrics.likes}
            </span>
            <span className="text-xs text-text-secondary">
              💾 {outfit.socialMetrics.saves}
            </span>
          </HStack>
          <span className="text-xs text-text-secondary">
            ⭐ {outfit.rating} ({outfit.reviews})
          </span>
        </HStack>
      </VStack>
    </motion.div>
  );
};

/**
 * Skeleton loader for outfit cards
 */
const OutfitCardSkeleton: React.FC = () => {
  return (
    <div className="bg-bg-secondary rounded-xl overflow-hidden shadow-sm border border-border">
      <div className="aspect-[3/4] bg-surface-light animate-pulse" />
      <VStack spacing="xs" padding="md">
        <div className="h-4 bg-surface-light rounded animate-pulse w-3/4" />
        <div className="h-3 bg-surface-light rounded animate-pulse w-full" />
        <div className="h-3 bg-surface-light rounded animate-pulse w-2/3" />
        <HStack spacing="xs" className="mt-2">
          <div className="h-6 bg-surface-light rounded-full animate-pulse w-16" />
          <div className="h-6 bg-surface-light rounded-full animate-pulse w-20" />
        </HStack>
      </VStack>
    </div>
  );
};