// Core application types for FitPic

export interface AppState {
  navigation: NavigationState;
  userProfile: UserProfile;
  commerce: CommerceState;
  scroll: ScrollState;
  processing: ProcessingState;
  ui: UIState;
  interactions: InteractionState;
  collections: CollectionState;
}

export interface NavigationState {
  currentPage: string;
  currentStep: number;
  currentOutfitId: number;
}

export interface UserProfile {
  name: string;
  age: string;
  gender: string;
  location: string;
  brands: string[];
  aesthetics: string[];
  events: string[];
  styleProfile: StyleProfile | null;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  currency: string;
}

export interface StyleProfile {
  id: string;
  name: string;
  description: string;
  aesthetics: string[];
  brands: string[];
  events: string[];
}

export interface CommerceState {
  shoppingCart: CartItem[];
  wishlist: OutfitItem[];
}

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface ScrollState {
  currentOutfitPage: number;
  outfitsPerPage: number;
  isLoading: boolean;
  hasMoreOutfits: boolean;
}

export interface ProcessingState {
  processingIndex: number;
  insightIndex: number;
}

export interface UIState {
  isNavigationExpanded: boolean;
  selectedScheduleDay: string;
  selectedOccasion: string;
}

export interface InteractionState {
  userRatings: Record<string, number>;
  profileDraft: Partial<UserProfile>;
}

export interface CollectionState {
  userCollections: Collection[];
  savedOutfits: OutfitItem[];
  scheduledOutfits: ScheduledOutfit[];
  userRemixes: RemixOutfit[];
}

export interface Collection {
  id: string;
  name: string;
  outfits: OutfitItem[];
  createdAt: string;
}

export interface ScheduledOutfit {
  id: string;
  outfitId: string;
  date: string;
  occasion: string;
}

export interface RemixOutfit {
  id: string;
  originalOutfitId: string;
  modifications: string[];
  createdAt: string;
}

// Outfit data types
export interface OutfitItem {
  id: number;
  image: string;
  tags: string[];
  tagLabels: string[];
  filterCategories: string[];
  filterLocation: string[];
  filterStyle: string[];
  filterEvent: string[];
  filterSeason: string[];
  title: string;
  description: string;
  confidence: number;
  chips: string[];
  products: Product[];
  weatherSuitability: WeatherSuitability;
  rating: number;
  reviews: number;
  savedBy: number;
  dateAdded: string;
  occasionTags: string[];
  styleNotes: string[];
  socialMetrics: SocialMetrics;
}

export interface Product {
  name: string;
  brand: string;
  price: number;
  image?: string;
  url?: string;
}

export interface WeatherSuitability {
  temperature: string;
  conditions: string[];
  icon: string;
}

export interface SocialMetrics {
  likes: number;
  shares: number;
  saves: number;
  comments: number;
}

// Country data types
export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

// Filter types
export interface FilterOptions {
  location: string[];
  style: string[];
  event: string[];
  season: string[];
}

export interface ActiveFilters {
  location: string[];
  style: string[];
  event: string[];
  season: string[];
}

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

// Animation types
export interface GestureHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onTap?: () => void;
  onLongPress?: () => void;
}

export interface AnimationConfig {
  duration?: number;
  easing?: string;
  delay?: number;
}

// Hook types
export interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export interface UseLazyLoadingReturn {
  ref: React.RefObject<HTMLElement>;
  inView: boolean;
  entry: IntersectionObserverEntry | undefined;
}

export interface UseAppStateReturn {
  state: AppState;
  updateState: (path: string, value: any) => void;
  resetState: () => void;
}

// Router types
export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  private?: boolean;
}

export type PageTransition = 'slide' | 'fade' | 'scale';

export interface PageProps {
  transition?: PageTransition;
  children: React.ReactNode;
}