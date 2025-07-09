// App Constants and Configuration
const APP_CONSTANTS = {
    // Animation Timings
    ANIMATION: {
        PAGE_TRANSITION: 300,
        PROCESSING_STEP_DURATION: 3000,
        PROCESSING_FINAL_DELAY: 1500,
        INSIGHT_CYCLE_DURATION: 1000,
        SKELETON_DELAY: 100,
        TOAST_DURATION: 3000,
        FILTER_MENU_TRANSITION: 300
    },

    // UI Limits
    LIMITS: {
        OUTFITS_PER_PAGE: 8,
        INFINITE_SCROLL_THRESHOLD: 100,
        MAX_AESTHETIC_SELECTIONS: 4,
        MIN_AESTHETIC_SELECTIONS: 1,
        MAX_EVENT_SELECTIONS: 3,
        MIN_EVENT_SELECTIONS: 1,
        MAX_BRAND_SELECTIONS: 5,
        MIN_BRAND_SELECTIONS: 1
    },

    // Error Messages
    ERRORS: {
        PROCESSING_ERROR: 'Oops! Something went\'t quite right.',
        NETWORK_ERROR: 'Network connection issue. Please try again.',
        SHARE_ERROR: 'Unable to share at this time.',
        CAMERA_ERROR: 'Camera not available.'
    },

    // Success Messages
    SUCCESS: {
        LINK_COPIED: 'Link copied to clipboard!',
        SAVED_TO_WISHLIST: 'Saved to wishlist',
        ADDED_TO_CART: 'Added to cart'
    },

    // Processing Configuration
    PROCESSING: {
        ERROR_PROBABILITY: 0.1, // 10% chance of demo error
        STEPS: [
            'Analyzing your style...',
            'Understanding your preferences...',
            'Generating your looks...',
            'Adding finishing touches...'
        ],
        SUBTITLES: [
            'Understanding your preferences and body type',
            'Learning from your style choices',
            'Creating personalized outfit suggestions',
            'Preparing your style profile'
        ],
        INSIGHTS: [
            'Learning your color preferences...',
            'Mapping your brand affinity...',
            'Understanding your lifestyle...',
            'Personalizing recommendations...',
            'Calibrating style confidence...',
            'Finalizing your profile...'
        ]
    },

    // Social Platforms
    SOCIAL: {
        FACEBOOK: 'https://www.facebook.com/sharer/sharer.php?u=',
        TWITTER: 'https://twitter.com/intent/tweet?url=',
        INSTAGRAM: 'Instagram',
        WHATSAPP: 'https://api.whatsapp.com/send?text='
    },

    // Storage Keys
    STORAGE: {
        THEME: 'fitpic-theme',
        USER_PROFILE: 'fitpic-user-profile',
        USER_RATINGS: 'fitpic-user-ratings',
        CART: 'fitpic-cart',
        WISHLIST: 'fitpic-wishlist'
    },

    // Default Values
    DEFAULTS: {
        THEME: 'light',
        COUNTRY_CODE: 'US',
        CURRENCY: 'USD',
        CONFIDENCE_THRESHOLD: 90
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONSTANTS;
}