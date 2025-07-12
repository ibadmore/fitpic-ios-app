import React, { useState } from 'react';
import { Container, VStack, HStack, Grid } from './components/layout';
import { Button } from './components/ui/Button';
import { OutfitCard } from './components/cards/OutfitCard';
import { OUTFIT_DATA } from './data/outfits';

function App() {
  const [likedOutfits, setLikedOutfits] = useState<Set<number>>(new Set());
  const [savedOutfits, setSavedOutfits] = useState<Set<number>>(new Set());
  const [showOutfits, setShowOutfits] = useState(false);

  const handleLike = (outfitId: number) => {
    setLikedOutfits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(outfitId)) {
        newSet.delete(outfitId);
      } else {
        newSet.add(outfitId);
      }
      return newSet;
    });
  };

  const handleSave = (outfitId: number) => {
    setSavedOutfits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(outfitId)) {
        newSet.delete(outfitId);
      } else {
        newSet.add(outfitId);
      }
      return newSet;
    });
  };

  return (
    <Container size="md" padding="md">
      <VStack spacing="lg" className="pb-8">
        {/* Header */}
        <VStack spacing="md" alignment="center" className="py-8">
          <HStack spacing="md" alignment="center">
            <div className="w-16 h-16 bg-primary-blue rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">FP</span>
            </div>
            <VStack spacing="xs">
              <h1 className="text-xl font-bold text-text-primary">FitPic Modernized</h1>
              <p className="text-text-secondary text-sm">
                React + TypeScript + Tailwind + Framer Motion
              </p>
            </VStack>
          </HStack>
        </VStack>

        {!showOutfits ? (
          <VStack spacing="lg" alignment="center">
            {/* Demo Components */}
            <VStack spacing="md" className="w-full max-w-sm">
              <h2 className="text-lg font-semibold text-text-primary text-center">
                Component Demo
              </h2>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setShowOutfits(true)}
              >
                View Outfit Cards
              </Button>
              <Button variant="secondary" size="md">
                Secondary Button
              </Button>
              <Button variant="ghost" size="sm">
                Ghost Button
              </Button>
            </VStack>

            {/* Layout Test */}
            <VStack spacing="md" className="w-full">
              <h3 className="text-md font-semibold text-text-primary text-center">
                Layout Components (SwiftUI-ready)
              </h3>
              <HStack spacing="md" className="w-full">
                <div className="flex-1 h-20 bg-surface-light rounded-lg border border-border flex items-center justify-center">
                  <span className="text-text-secondary text-sm font-medium">VStack</span>
                </div>
                <div className="flex-1 h-20 bg-surface-light rounded-lg border border-border flex items-center justify-center">
                  <span className="text-text-secondary text-sm font-medium">HStack</span>
                </div>
              </HStack>
              <div className="w-full h-16 bg-nav-active rounded-lg border border-primary-blue flex items-center justify-center">
                <span className="text-primary-blue text-sm font-medium">Container + Grid (Ready)</span>
              </div>
            </VStack>

            {/* Progress Status */}
            <div className="text-center p-6 bg-surface-light rounded-xl border border-border">
              <h3 className="font-semibold text-text-primary mb-3">Modernization Progress</h3>
              <VStack spacing="xs" className="text-sm text-text-secondary">
                <div>✅ Vite + React + TypeScript</div>
                <div>✅ Tailwind CSS + Custom Design Tokens</div>
                <div>✅ Framer Motion + Touch Gestures</div>
                <div>✅ Layout Components (VStack, HStack, Grid)</div>
                <div>✅ Button Component + Touch Optimization</div>
                <div>✅ OutfitCard with Swipe Gestures</div>
                <div>🚧 Page Components & Routing</div>
                <div>🚧 State Management & Hooks</div>
              </VStack>
            </div>
          </VStack>
        ) : (
          <VStack spacing="md">
            {/* Header with Back Button */}
            <HStack spacing="md" justify="between" alignment="center">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowOutfits(false)}
              >
                ← Back
              </Button>
              <h2 className="text-lg font-semibold text-text-primary">
                Outfit Gallery
              </h2>
              <div className="w-16" /> {/* Spacer for centering */}
            </HStack>

            {/* Outfit Grid */}
            <Grid columns="auto" gap="md" animate>
              {OUTFIT_DATA.slice(0, 6).map((outfit) => (
                <OutfitCard
                  key={outfit.id}
                  outfit={outfit}
                  isLiked={likedOutfits.has(outfit.id)}
                  isSaved={savedOutfits.has(outfit.id)}
                  onLike={() => handleLike(outfit.id)}
                  onSave={() => handleSave(outfit.id)}
                  onImageClick={() => console.log('Navigate to outfit detail:', outfit.id)}
                />
              ))}
            </Grid>

            {/* Stats */}
            <div className="text-center p-4 bg-surface-light rounded-lg">
              <p className="text-sm text-text-secondary">
                ❤️ {likedOutfits.size} liked • 💾 {savedOutfits.size} saved
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Swipe cards left/right or tap action buttons
              </p>
            </div>
          </VStack>
        )}
      </VStack>
    </Container>
  );
}

export default App;