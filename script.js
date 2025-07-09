// App State
let currentPage = 'entry-page';
let currentStep = 1;
let currentOutfitId = 1;

// Country Data
const countries = [
    { name: "United States", code: "US", flag: "🇺🇸", dialCode: "+1" },
    { name: "United Kingdom", code: "GB", flag: "🇬🇧", dialCode: "+44" },
    { name: "Canada", code: "CA", flag: "🇨🇦", dialCode: "+1" },
    { name: "Australia", code: "AU", flag: "🇦🇺", dialCode: "+61" },
    { name: "Germany", code: "DE", flag: "🇩🇪", dialCode: "+49" },
    { name: "France", code: "FR", flag: "🇫🇷", dialCode: "+33" },
    { name: "Italy", code: "IT", flag: "🇮🇹", dialCode: "+39" },
    { name: "Spain", code: "ES", flag: "🇪🇸", dialCode: "+34" },
    { name: "Netherlands", code: "NL", flag: "🇳🇱", dialCode: "+31" },
    { name: "Switzerland", code: "CH", flag: "🇨🇭", dialCode: "+41" },
    { name: "Sweden", code: "SE", flag: "🇸🇪", dialCode: "+46" },
    { name: "Norway", code: "NO", flag: "🇳🇴", dialCode: "+47" },
    { name: "Denmark", code: "DK", flag: "🇩🇰", dialCode: "+45" },
    { name: "Finland", code: "FI", flag: "🇫🇮", dialCode: "+358" },
    { name: "Belgium", code: "BE", flag: "🇧🇪", dialCode: "+32" },
    { name: "Austria", code: "AT", flag: "🇦🇹", dialCode: "+43" },
    { name: "Ireland", code: "IE", flag: "🇮🇪", dialCode: "+353" },
    { name: "New Zealand", code: "NZ", flag: "🇳🇿", dialCode: "+64" },
    { name: "Japan", code: "JP", flag: "🇯🇵", dialCode: "+81" },
    { name: "China", code: "CN", flag: "🇨🇳", dialCode: "+86" },
    { name: "South Korea", code: "KR", flag: "🇰🇷", dialCode: "+82" },
    { name: "India", code: "IN", flag: "🇮🇳", dialCode: "+91" },
    { name: "Brazil", code: "BR", flag: "🇧🇷", dialCode: "+55" },
    { name: "Mexico", code: "MX", flag: "🇲🇽", dialCode: "+52" },
    { name: "Argentina", code: "AR", flag: "🇦🇷", dialCode: "+54" },
    { name: "Russia", code: "RU", flag: "🇷🇺", dialCode: "+7" },
    { name: "Turkey", code: "TR", flag: "🇹🇷", dialCode: "+90" },
    { name: "South Africa", code: "ZA", flag: "🇿🇦", dialCode: "+27" },
    { name: "Egypt", code: "EG", flag: "🇪🇬", dialCode: "+20" },
    { name: "Israel", code: "IL", flag: "🇮🇱", dialCode: "+972" },
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", dialCode: "+966" },
    { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", dialCode: "+971" },
    { name: "Singapore", code: "SG", flag: "🇸🇬", dialCode: "+65" },
    { name: "Malaysia", code: "MY", flag: "🇲🇾", dialCode: "+60" },
    { name: "Thailand", code: "TH", flag: "🇹🇭", dialCode: "+66" },
    { name: "Indonesia", code: "ID", flag: "🇮🇩", dialCode: "+62" },
    { name: "Philippines", code: "PH", flag: "🇵🇭", dialCode: "+63" },
    { name: "Vietnam", code: "VN", flag: "🇻🇳", dialCode: "+84" },
    { name: "Poland", code: "PL", flag: "🇵🇱", dialCode: "+48" },
    { name: "Portugal", code: "PT", flag: "🇵🇹", dialCode: "+351" },
    { name: "Greece", code: "GR", flag: "🇬🇷", dialCode: "+30" },
    { name: "Czech Republic", code: "CZ", flag: "🇨🇿", dialCode: "+420" },
    { name: "Hungary", code: "HU", flag: "🇭🇺", dialCode: "+36" },
    { name: "Romania", code: "RO", flag: "🇷🇴", dialCode: "+40" },
    { name: "Ukraine", code: "UA", flag: "🇺🇦", dialCode: "+380" },
    { name: "Chile", code: "CL", flag: "🇨🇱", dialCode: "+56" },
    { name: "Colombia", code: "CO", flag: "🇨🇴", dialCode: "+57" },
    { name: "Peru", code: "PE", flag: "🇵🇪", dialCode: "+51" }
];

// Shopping Cart State
let shoppingCart = [];
let wishlist = [];
let userProfile = {
    name: '',
    age: '',
    gender: '',
    location: '',
    brands: [],
    aesthetics: [],
    events: [],
    styleProfile: null,
    preferences: {
        theme: 'light',
        notifications: true,
        currency: 'USD'
    }
};

// Infinite Scroll State
let currentOutfitPage = 1;
let outfitsPerPage = 8;
let isLoading = false;
let hasMoreOutfits = true;

// Outfit Data
const outfitData = [
    {
        id: 1,
        image: 'outfit images/fitpic_1.webp',
        tags: ['boho', 'warm', 'temp'],
        tagLabels: ['Boho', 'Warm & Humid', '20°C - 25°C'],
        filterCategories: ['date-night'],
        title: 'Boho Date Night',
        description: 'A romantic and free-spirited look perfect for warm evening dates',
        confidence: 94,
        chips: ['Date Ready', 'Warm Weather', 'Your Style'],
        products: [
            { name: 'Flowy Blouse', brand: 'Free People', price: 88 },
            { name: 'High-Waist Jeans', brand: 'Madewell', price: 128 },
            { name: 'Block Heels', brand: 'Everlane', price: 168 }
        ],
        weatherSuitability: {
            temperature: '20-25°C',
            conditions: ['sunny', 'warm'],
            icon: '☀️'
        },
        rating: 4.5,
        reviews: 24,
        savedBy: 156
    },
    {
        id: 2,
        image: 'outfit images/fitpic_2.webp',
        tags: ['casual', 'cool', 'temp'],
        tagLabels: ['Casual', 'Cool & Breezy', '15°C - 20°C'],
        filterCategories: ['cold-days'],
        title: 'Casual Cool',
        description: 'Effortless everyday style that keeps you comfortable and chic',
        confidence: 89,
        chips: ['Weekend Ready', 'Cool Weather', 'Comfortable'],
        products: [
            { name: 'Cashmere Sweater', brand: 'Everlane', price: 100 },
            { name: 'Straight Leg Jeans', brand: 'Levi\'s', price: 98 },
            { name: 'White Sneakers', brand: 'Veja', price: 150 }
        ]
    },
    {
        id: 3,
        image: 'outfit images/fitpic_3.webp',
        tags: ['elegant', 'moderate', 'temp'],
        tagLabels: ['Elegant', 'Moderate', '18°C - 22°C'],
        filterCategories: ['wedding-guest'],
        title: 'Effortless Elegance',
        description: 'A sophisticated look that balances comfort with professional polish',
        confidence: 96,
        chips: ['Meeting Ready', 'Perfect Weather', 'Your Style'],
        products: [
            { name: 'Linen Blazer', brand: 'Everlane', price: 148 },
            { name: 'Silk Camisole', brand: 'Reformation', price: 88 },
            { name: 'Wide Leg Trousers', brand: 'COS', price: 135 }
        ]
    },
    {
        id: 4,
        image: 'outfit images/fitpic_4.webp',
        tags: ['streetwear', 'cold', 'temp'],
        tagLabels: ['Streetwear', 'Cold Days', '10°C - 15°C'],
        filterCategories: ['cold-days'],
        title: 'Urban Edge',
        description: 'Bold streetwear that makes a statement while keeping you warm',
        confidence: 91,
        chips: ['City Ready', 'Cold Weather', 'Statement Look'],
        products: [
            { name: 'Oversized Hoodie', brand: 'Stussy', price: 120 },
            { name: 'Cargo Pants', brand: 'Dickies', price: 85 },
            { name: 'High-Top Sneakers', brand: 'Converse', price: 75 }
        ]
    },
    {
        id: 5,
        image: 'outfit images/fitpic_5.webp',
        tags: ['casual', 'warm', 'temp'],
        tagLabels: ['Casual', 'Warm Weather', '22°C - 28°C'],
        filterCategories: ['date-night'],
        title: 'Summer Vibes',
        description: 'Light and breezy outfit perfect for warm weather adventures',
        confidence: 87,
        chips: ['Summer Ready', 'Warm Weather', 'Relaxed'],
        products: [
            { name: 'Cotton T-Shirt', brand: 'Uniqlo', price: 15 },
            { name: 'Linen Shorts', brand: 'J.Crew', price: 65 },
            { name: 'Canvas Sneakers', brand: 'Allbirds', price: 98 }
        ]
    },
    {
        id: 6,
        image: 'outfit images/fitpic_6.webp',
        tags: ['elegant', 'cool', 'temp'],
        tagLabels: ['Elegant', 'Cool Evening', '16°C - 20°C'],
        filterCategories: ['wedding-guest'],
        title: 'Evening Grace',
        description: 'Sophisticated elegance perfect for special occasions',
        confidence: 93,
        chips: ['Event Ready', 'Cool Evening', 'Sophisticated'],
        products: [
            { name: 'Wrap Dress', brand: 'Diane von Furstenberg', price: 368 },
            { name: 'Block Heels', brand: 'Mansur Gavriel', price: 495 },
            { name: 'Clutch Bag', brand: 'Polene', price: 250 }
        ]
    }
];
let processingSteps = [
    'Analyzing your style...',
    'Understanding your preferences...',
    'Generating your looks...',
    'Adding finishing touches...'
];
let processingSubtitles = [
    'Understanding your preferences and body type',
    'Learning from your style choices',
    'Creating personalized outfit suggestions',
    'Preparing your style profile'
];
let processingInsights = [
    'Learning your color preferences...',
    'Mapping your brand affinity...',
    'Understanding your lifestyle...',
    'Personalizing recommendations...',
    'Calibrating style confidence...',
    'Finalizing your profile...'
];
let processingIndex = 0;
let insightIndex = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    updateContextualGreeting();
    applySmartDefaults();
    addAdvancedTouchFeedback();
    initializeCountryDropdown();
    initializeTagSelections();
    
    // Update greeting every minute
    setInterval(updateContextualGreeting, 60000);
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('fitpic-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('fitpic-theme', newTheme);
    
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
    
    // Update theme toggle button icon if exists
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    }
    
    // Update both dark mode toggles
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.checked = newTheme === 'dark';
    }
    
    const navDarkModeToggle = document.getElementById('nav-dark-mode-toggle');
    if (navDarkModeToggle) {
        navDarkModeToggle.checked = newTheme === 'dark';
    }
}

function initializeApp() {
    // Initialize theme
    initializeTheme();
    
    // Initialize stored data
    initializeStoredData();
    
    // Load user ratings
    loadUserRatings();
    
    // Set up event listeners
    setupOnboardingInteractions();
    setupTabNavigation();
    setupFilterTags();
    
    // Add touch feedback to buttons
    addTouchFeedback();
    
    // Initialize cart badge
    updateCartBadge();
    
    // Hide navigation by default (show only on home/detail pages)
    hideNavigation();
    
    // Start processing animation if on processing page
    if (currentPage === 'processing-page') {
        startProcessingAnimation();
    }
}

// Navigation Functions
function navigateToOnboarding() {
    console.log('Navigating to onboarding');
    showPage('onboarding-page');
    hideNavigation();
    currentStep = 1;
    updateProgress();
    
    // Initialize step 1 visibility
    setTimeout(() => {
        const step1 = document.getElementById('step-1');
        if (step1) {
            step1.classList.add('active');
            step1.style.opacity = '1';
            step1.style.transform = 'translateX(0)';
        }
    }, 200);
}

function navigateToEntry() {
    showPage('entry-page');
    hideNavigation();
}

function navigateToProcessing() {
    showPage('processing-page');
    hideNavigation();
    startProcessingAnimation();
}

function navigateToHome() {
    showPage('home-page');
    showNavigation();
    setTimeout(() => {
        initializeOutfitFeed();
    }, 200);
}

function navigateToOutfitDetail(outfitId = 1) {
    currentOutfitId = outfitId;
    showPage('outfit-detail-page');
    showNavigation();
    updateOutfitDetailPage(outfitId);
}

// Navigation State
let isNavigationExpanded = false;

// Navigation Visibility Functions
function showNavigation() {
    const nav = document.querySelector('.collapsible-nav');
    if (nav) {
        nav.classList.add('visible');
    }
}

function hideNavigation() {
    const nav = document.querySelector('.collapsible-nav');
    if (nav) {
        nav.classList.remove('visible');
    }
}

// Collapsible Navigation Functions
function toggleNavigation() {
    const nav = document.querySelector('.collapsible-nav');
    const overlay = document.querySelector('.nav-overlay');
    
    if (!nav || !overlay) return;
    
    isNavigationExpanded = !isNavigationExpanded;
    
    if (isNavigationExpanded) {
        nav.classList.add('expanded');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when nav is open
    } else {
        nav.classList.remove('expanded');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

function expandNavigation() {
    if (!isNavigationExpanded) {
        toggleNavigation();
    }
}

function collapseNavigation() {
    if (isNavigationExpanded) {
        toggleNavigation();
    }
}

// Navigate to specific tab and close navigation
function navigateToTab(tabName) {
    // Close navigation first
    collapseNavigation();
    
    // Map tab names to page navigation functions
    switch(tabName) {
        case 'outfits':
            navigateToHome();
            break;
        case 'favs':
            navigateToFavs();
            break;
        case 'cart':
            navigateToCartPage();
            break;
        case 'settings':
            navigateToSettings();
            break;
        case 'profile':
            navigateToProfile();
            break;
        default:
            console.warn('Unknown tab name:', tabName);
    }
}

// Update active navigation item based on current page
function updateActiveNavItem(pageId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Map page IDs to navigation data-page attributes
    const pageMap = {
        'home-page': 'home',
        'favs-page': 'wishlist',
        'settings-page': 'settings',
        'profile-page': 'profile',
        'cart-page': 'shopping-bag'
    };
    
    const navPage = pageMap[pageId];
    if (navPage) {
        const activeItem = document.querySelector(`.nav-item[data-page="${navPage}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
}

function showPage(pageId) {
    // Add exit animation to current page
    const currentPageEl = document.getElementById(currentPage);
    if (currentPageEl) {
        currentPageEl.classList.add('exiting');
    }
    
    // Always collapse navigation when changing pages
    collapseNavigation();
    
    setTimeout(() => {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active', 'exiting');
        });
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            currentPage = pageId;
            
            // Update active navigation item
            updateActiveNavItem(pageId);
        } else {
            console.error('Page not found:', pageId);
        }
    }, 150);
}

// Onboarding Functions
function nextStep() {
    if (currentStep < 7) {
        // Hide current step with fade out
        const currentStepEl = document.getElementById(`step-${currentStep}`);
        currentStepEl.style.opacity = '0';
        currentStepEl.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            currentStepEl.classList.remove('active');
            
            // Show next step with fade in
            currentStep++;
            const nextStepEl = document.getElementById(`step-${currentStep}`);
            nextStepEl.classList.add('active');
            nextStepEl.style.opacity = '0';
            nextStepEl.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                nextStepEl.style.opacity = '1';
                nextStepEl.style.transform = 'translateX(0)';
            }, 50);
            
            updateProgress();
            
            // Update profile preview when reaching final step
            if (currentStep === 7) {
                setTimeout(updateProfilePreview, 300);
            }
        }, 300);
    }
}

function updateProgress() {
    const progress = (currentStep / 7) * 100;
    document.getElementById('onboarding-progress').style.width = `${progress}%`;
    document.getElementById('current-step').textContent = currentStep;
}

function capturePhoto() {
    // Simulate photo capture
    const captureButton = event.target.closest('.capture-button');
    captureButton.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        captureButton.style.transform = 'scale(1)';
        // Add haptic feedback simulation
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Auto advance after photo capture
        setTimeout(() => {
            nextStep();
        }, 500);
    }, 200);
}

// Enhanced Processing Animation with Systematic Sequence
function startProcessingAnimation() {
    processingIndex = 0;
    insightIndex = 0;
    
    // Hide error state if visible
    document.getElementById('processing-error').style.display = 'none';
    document.querySelector('.processing-animation').style.display = 'flex';
    document.querySelector('.processing-status').style.display = 'block';
    
    updateProcessingText();
    startInsightCycle();
    
    // Simulate random error for demo (10% chance)
    const shouldError = Math.random() < 0.1;
    
    const interval = setInterval(() => {
        processingIndex++;
        if (processingIndex < processingSteps.length) {
            updateProcessingText();
        } else {
            clearInterval(interval);
            
            if (shouldError) {
                // Show error state
                setTimeout(() => {
                    showProcessingError();
                }, 1000);
            } else {
                // Navigate to home after processing with confident timing
                setTimeout(() => {
                    navigateToHome();
                }, 1500);
            }
        }
    }, 3000);
}

function showProcessingError() {
    document.querySelector('.processing-animation').style.display = 'none';
    document.querySelector('.processing-status').style.display = 'none';
    document.getElementById('processing-error').style.display = 'block';
}

function retryProcessing() {
    startProcessingAnimation();
}

function updateProcessingText() {
    const processingText = document.getElementById('processing-text');
    const processingSubtitle = document.getElementById('processing-subtitle');
    
    processingText.textContent = processingSteps[processingIndex];
    processingSubtitle.textContent = processingSubtitles[processingIndex];
    
    // Add gentle animation to text changes
    processingText.style.opacity = '0';
    processingSubtitle.style.opacity = '0';
    
    setTimeout(() => {
        processingText.style.opacity = '1';
        processingSubtitle.style.opacity = '1';
    }, 300);
}

function startInsightCycle() {
    const insightElement = document.getElementById('processing-insight');
    if (!insightElement) return;
    
    const insightInterval = setInterval(() => {
        insightElement.style.opacity = '0';
        
        setTimeout(() => {
            insightIndex = (insightIndex + 1) % processingInsights.length;
            insightElement.textContent = processingInsights[insightIndex];
            insightElement.style.opacity = '1';
        }, 300);
    }, 2000);
    
    // Clear insight interval when processing is done
    setTimeout(() => {
        clearInterval(insightInterval);
    }, 12000);
}

// Onboarding Interactions
function setupOnboardingInteractions() {
    // Gender selection
    document.querySelectorAll('.selection-card').forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from siblings
            this.parentNode.querySelectorAll('.selection-card').forEach(sibling => {
                sibling.classList.remove('selected');
            });
            // Add selected class to clicked card
            this.classList.add('selected');
        });
    });
    
    // Brand selection
    document.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
    
    // Aesthetic selection
    document.querySelectorAll('.aesthetic-card').forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from siblings
            this.parentNode.querySelectorAll('.aesthetic-card').forEach(sibling => {
                sibling.classList.remove('selected');
            });
            // Add selected class to clicked card
            this.classList.add('selected');
        });
    });
}

// Tab Navigation
function setupTabNavigation() {
    // Setup floating tab bar for old design
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Handle tab navigation (for demo purposes, they all stay on home)
            const tabType = this.getAttribute('data-tab');
            if (tabType !== 'home') {
                // Show coming soon for other tabs
                showComingSoon(tabType);
            }
        });
    });
    
    // Bottom navigation is now handled by the collapsible navigation system
}

function showComingSoon(tabType) {
    // Simple alert for demo
    const tabNames = {
        'closet': 'Closet',
        'calendar': 'Calendar',
        'profile': 'Profile'
    };
    
    alert(`${tabNames[tabType]} coming soon!`);
    
    // Reset home tab as active
    document.querySelector('[data-tab="home"]').classList.add('active');
}


// Filter functionality
function setupFilterTags() {
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // If this tag is already active, deactivate it and show all
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                showAllOutfits();
            } else {
                // Remove active from all other tags
                document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
                // Activate this tag
                this.classList.add('active');
                // Apply filter
                filterOutfits(filter);
            }
        });
    });
}

function filterOutfits(filter) {
    const outfitCards = document.querySelectorAll('.outfit-card-full');
    
    outfitCards.forEach(card => {
        const categories = card.getAttribute('data-filter-categories');
        
        if (categories && categories.includes(filter)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show all outfits when no filter is active
function showAllOutfits() {
    const outfitCards = document.querySelectorAll('.outfit-card-full');
    outfitCards.forEach(card => {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.3s ease-in';
    });
}

function toggleFilterMenu() {
    // For demo purposes, show a message
    alert('Filter menu with more style options coming soon!');
}

// Like button functionality
function toggleLike(button) {
    button.classList.toggle('liked');
    
    // Add animation
    button.style.transform = 'scale(1.2)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// Save button functionality
function showSaveOptions(button) {
    // For demo purposes
    alert('Save to collections: Casual, Work, Date Night, or create new collection');
}

// Dynamic outfit card generation
function generateOutfitCard(outfit) {
    const tagsHtml = outfit.tags.map((tag, index) => 
        `<span class="outfit-tag ${tag}">${outfit.tagLabels[index]}</span>`
    ).join('');

    return `
        <div class="outfit-card-full" data-filter-categories="${outfit.filterCategories.join(' ')}">
            <div class="outfit-image-container">
                <img src="${outfit.image}" alt="Outfit" class="outfit-image">
                <div class="outfit-actions">
                    <button class="action-button like-button" onclick="toggleLike(this); event.stopPropagation();">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.5487 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="action-button shop-button" onclick="event.stopPropagation(); navigateToOutfitDetail(${outfit.id});">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 2L3 9V22H21V9L15 2H9Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 9H21" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 13C8 14.6569 9.34315 16 11 16C12.6569 16 14 14.6569 14 13" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="action-button save-button" onclick="showSaveOptions(this); event.stopPropagation();">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 7H7V9" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 7H17V9" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 17H7V15" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 17H17V15" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="outfit-tags">
                ${tagsHtml}
            </div>
        </div>
    `;
}

// Rating System Functions
function generateStarRating(currentRating, outfitId) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= Math.floor(currentRating);
        const isHalf = i === Math.ceil(currentRating) && currentRating % 1 !== 0;
        
        starsHtml += `
            <button class="star-button" onclick="rateOutfit(${outfitId}, ${i})" data-rating="${i}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                          stroke="#FFD700" 
                          stroke-width="1.5" 
                          fill="${isFilled ? '#FFD700' : isHalf ? 'url(#halfFill)' : 'none'}" 
                          class="star-icon"/>
                </svg>
            </button>
        `;
    }
    
    return `
        <svg width="0" height="0" style="position: absolute;">
            <defs>
                <linearGradient id="halfFill">
                    <stop offset="50%" stop-color="#FFD700"/>
                    <stop offset="50%" stop-color="transparent"/>
                </linearGradient>
            </defs>
        </svg>
        ${starsHtml}
    `;
}

function rateOutfit(outfitId, rating) {
    // Find the outfit and update its rating
    const outfit = outfitData.find(o => o.id === outfitId);
    if (!outfit) return;
    
    // Save user's rating to localStorage
    let userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
    const previousRating = userRatings[outfitId];
    userRatings[outfitId] = rating;
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
    
    // Update outfit data
    if (!previousRating) {
        outfit.reviews = (outfit.reviews || 0) + 1;
    }
    
    // Recalculate average rating (simplified - in real app would be server-side)
    const allRatings = Object.values(userRatings).filter(r => r !== undefined);
    outfit.rating = allRatings.reduce((sum, r) => sum + r, outfit.rating * (outfit.reviews - allRatings.length)) / outfit.reviews;
    
    // Update the display
    updateOutfitRatingDisplay(outfitId, outfit.rating, outfit.reviews);
    
    // Show feedback
    showToast(`Rated ${rating} star${rating > 1 ? 's' : ''}!`);
}

function updateOutfitRatingDisplay(outfitId, newRating, reviewCount) {
    const ratingContainer = document.querySelector(`[data-outfit-id="${outfitId}"]`);
    if (ratingContainer) {
        ratingContainer.innerHTML = generateStarRating(newRating, outfitId);
        
        const countElement = ratingContainer.parentElement.querySelector('.rating-count');
        if (countElement) {
            countElement.textContent = `(${reviewCount})`;
        }
    }
}

// Load user ratings on initialization
function loadUserRatings() {
    const userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
    
    // Apply user ratings to outfit data
    Object.keys(userRatings).forEach(outfitId => {
        const outfit = outfitData.find(o => o.id === parseInt(outfitId));
        if (outfit) {
            // Mark as user-rated for highlighting
            outfit.userRated = true;
            outfit.userRating = userRatings[outfitId];
        }
    });
}

// Skeleton Loading Functions
function createSkeletonOutfitCard() {
    return `
        <div class="skeleton-outfit-card">
            <div class="skeleton-image skeleton"></div>
            <div class="skeleton-tags">
                <div class="skeleton-tag skeleton"></div>
                <div class="skeleton-tag skeleton"></div>
                <div class="skeleton-tag skeleton"></div>
            </div>
        </div>
    `;
}

function createSkeletonProductCard() {
    return `
        <div class="skeleton-product-card">
            <div class="skeleton-product-image skeleton"></div>
            <div class="skeleton-product-info">
                <div class="skeleton-text title skeleton"></div>
                <div class="skeleton-text subtitle skeleton"></div>
                <div class="skeleton-text price skeleton"></div>
            </div>
        </div>
    `;
}

function showSkeletonLoading(container, count = 3, type = 'outfit') {
    let skeletonHTML = '';
    for (let i = 0; i < count; i++) {
        skeletonHTML += type === 'outfit' ? createSkeletonOutfitCard() : createSkeletonProductCard();
    }
    container.innerHTML = `<div class="loading-container">${skeletonHTML}</div>`;
}

// Initialize outfit feed with infinite scroll
function initializeOutfitFeed() {
    const outfitFeed = document.querySelector('.outfit-feed');
    if (outfitFeed && currentPage === 'home-page') {
        // Reset infinite scroll state
        currentOutfitPage = 1;
        hasMoreOutfits = true;
        
        // Show skeleton loading first
        showSkeletonLoading(outfitFeed, 3, 'outfit');
        
        // Simulate loading delay then show real content
        setTimeout(() => {
            // Clear skeleton and show real content
            outfitFeed.innerHTML = '';
            
            // Load initial batch of outfits
            loadMoreOutfits();
            
            // Initialize infinite scroll
            setupInfiniteScroll();
        }, 800); // Simulate loading time
    }
}

// Load more outfits for infinite scroll
function loadMoreOutfits() {
    if (isLoading || !hasMoreOutfits) return;
    
    isLoading = true;
    const outfitFeed = document.querySelector('.outfit-feed');
    
    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = `
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading more outfits...</p>
    `;
    outfitFeed.appendChild(loadingIndicator);
    
    // Simulate API call delay
    setTimeout(() => {
        const startIndex = (currentOutfitPage - 1) * outfitsPerPage;
        const endIndex = startIndex + outfitsPerPage;
        const outfitsToLoad = outfitData.slice(startIndex, endIndex);
        
        // Remove loading indicator
        loadingIndicator.remove();
        
        // Add new outfits
        outfitsToLoad.forEach(outfit => {
            outfitFeed.innerHTML += generateOutfitCard(outfit);
        });
        
        // Update pagination state
        currentOutfitPage++;
        hasMoreOutfits = endIndex < outfitData.length;
        isLoading = false;
        
        // Initialize lazy loading for new images
        setTimeout(() => {
            initializeLazyLoading();
        }, 100);
        
        // If no more outfits, show end message
        if (!hasMoreOutfits) {
            const endMessage = document.createElement('div');
            endMessage.className = 'feed-end-message';
            endMessage.innerHTML = `
                <p class="caption-text">You've seen all available outfits!</p>
                <button class="secondary-button" onclick="refreshOutfitFeed()">Refresh Feed</button>
            `;
            outfitFeed.appendChild(endMessage);
        }
    }, 1000);
}

// Setup infinite scroll listener
function setupInfiniteScroll() {
    const outfitFeed = document.querySelector('.outfit-feed');
    const scrollContainer = document.querySelector('.scrollable-content') || document.body;
    
    scrollContainer.addEventListener('scroll', () => {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        
        // Load more when user is near bottom (within 200px)
        if (scrollTop + clientHeight >= scrollHeight - 200) {
            loadMoreOutfits();
        }
    });
}

// Refresh outfit feed
function refreshOutfitFeed() {
    const outfitFeed = document.querySelector('.outfit-feed');
    currentOutfitPage = 1;
    hasMoreOutfits = true;
    isLoading = false;
    
    // Show skeleton loading
    showSkeletonLoading(outfitFeed, 3, 'outfit');
    
    // Reload initial batch
    setTimeout(() => {
        outfitFeed.innerHTML = '';
        loadMoreOutfits();
    }, 500);
}

// Share outfit functionality
function shareOutfit(outfitId) {
    const outfit = outfitData.find(o => o.id === outfitId);
    if (!outfit) return;
    
    // Create share modal
    const shareModal = document.createElement('div');
    shareModal.className = 'share-modal';
    shareModal.innerHTML = `
        <div class="share-modal-content">
            <div class="share-modal-header">
                <h3>Share Outfit</h3>
                <button class="close-button" onclick="closeShareModal()">×</button>
            </div>
            <div class="share-preview">
                <img src="${outfit.image}" alt="Outfit" class="share-preview-image">
                <div class="share-preview-info">
                    <h4>${outfit.title}</h4>
                    <p>${outfit.description}</p>
                </div>
            </div>
            <div class="share-options">
                <button class="share-option" onclick="copyOutfitLink(${outfitId})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.0779 16.987 2.0665C15.676 2.0551 14.4130 2.55918 13.47 3.47L11.75 5.18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 11C13.5705 10.4259 13.0226 9.9509 12.3934 9.60712C11.7643 9.26334 11.0685 9.05892 10.3533 9.00773C9.63818 8.95653 8.92037 9.05972 8.24860 9.31026C7.57683 9.5608 6.96687 9.95303 6.46000 10.46L3.46000 13.46C2.54918 14.4031 2.04511 15.6661 2.05651 16.9770C2.06790 18.2880 2.59383 19.5421 3.52087 20.4691C4.44791 21.3962 5.70198 21.9221 7.01296 21.9335C8.32394 21.9449 9.58695 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Copy Link
                </button>
                <button class="share-option" onclick="shareToSocial('instagram', ${outfitId})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M17.5 6.5H17.51" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Instagram
                </button>
                <button class="share-option" onclick="shareToSocial('twitter', ${outfitId})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.957 14.8821 3.28445C14.0247 3.6119 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61553 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Twitter
                </button>
                <button class="share-option" onclick="shareToSocial('pinterest', ${outfitId})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 11.5C8.5 12.3 9.24264 13 10 13.5C11.25 14.5 12.5 14 13 12.5C13.5 11 13 9.5 12 8.5C11 7.5 9.5 7 8 7.5C6.5 8 6 9.5 6.5 11C7 12.5 8 11.5 8 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Pinterest
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(shareModal);
    
    // Add fade-in animation
    setTimeout(() => {
        shareModal.classList.add('active');
    }, 10);
}

function closeShareModal() {
    const shareModal = document.querySelector('.share-modal');
    if (shareModal) {
        shareModal.classList.remove('active');
        setTimeout(() => {
            shareModal.remove();
        }, 300);
    }
}

function copyOutfitLink(outfitId) {
    const url = `${window.location.origin}${window.location.pathname}?outfit=${outfitId}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Link copied to clipboard!');
    }
    
    closeShareModal();
}

function shareToSocial(platform, outfitId) {
    const outfit = outfitData.find(o => o.id === outfitId);
    const url = `${window.location.origin}${window.location.pathname}?outfit=${outfitId}`;
    const text = `Check out this amazing outfit: ${outfit.title}`;
    
    let shareUrl = '';
    
    switch (platform) {
        case 'instagram':
            // Instagram doesn't support direct URL sharing, so we show a message
            showToast('Save the image and share it on Instagram!');
            return;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(outfit.image)}&description=${encodeURIComponent(text)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    closeShareModal();
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('active');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Schedule Modal Functions
function openScheduleModal() {
    const outfit = outfitData.find(o => o.id === currentOutfitId);
    if (!outfit) return;
    
    const today = new Date();
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Generate next 7 days
    const upcomingDays = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        upcomingDays.push({
            date: date,
            dayName: weekDays[date.getDay()],
            dayNumber: date.getDate(),
            month: months[date.getMonth()],
            isToday: i === 0
        });
    }
    
    const scheduleModal = document.createElement('div');
    scheduleModal.className = 'schedule-modal';
    scheduleModal.innerHTML = `
        <div class="schedule-modal-content">
            <div class="schedule-modal-header">
                <h3>Schedule Outfit</h3>
                <button class="close-button" onclick="closeScheduleModal()">×</button>
            </div>
            <div class="schedule-outfit-preview">
                <img src="${outfit.image}" alt="Outfit" class="schedule-outfit-image">
                <div class="schedule-outfit-info">
                    <h4>${outfit.title}</h4>
                    <p>Confidence: ${outfit.confidence}%</p>
                </div>
            </div>
            <div class="schedule-days">
                <h4>Choose a day</h4>
                <div class="days-grid">
                    ${upcomingDays.map(day => `
                        <button class="day-option ${day.isToday ? 'today' : ''}" onclick="selectScheduleDay('${day.date.toISOString()}')">
                            <span class="day-name">${day.dayName}</span>
                            <span class="day-number">${day.dayNumber}</span>
                            <span class="day-month">${day.month}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="schedule-occasions">
                <h4>Occasion</h4>
                <div class="occasions-grid">
                    <button class="occasion-option" onclick="selectOccasion('work')">
                        <span class="occasion-icon">💼</span>
                        Work
                    </button>
                    <button class="occasion-option" onclick="selectOccasion('casual')">
                        <span class="occasion-icon">☕</span>
                        Casual
                    </button>
                    <button class="occasion-option" onclick="selectOccasion('date')">
                        <span class="occasion-icon">💕</span>
                        Date
                    </button>
                    <button class="occasion-option" onclick="selectOccasion('event')">
                        <span class="occasion-icon">🎉</span>
                        Event
                    </button>
                </div>
            </div>
            <div class="schedule-actions">
                <button class="schedule-cancel" onclick="closeScheduleModal()">Cancel</button>
                <button class="schedule-confirm" onclick="confirmSchedule()">Schedule Outfit</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(scheduleModal);
    
    setTimeout(() => {
        scheduleModal.classList.add('active');
    }, 10);
}

let selectedScheduleDay = null;
let selectedOccasion = null;

function selectScheduleDay(dateString) {
    selectedScheduleDay = dateString;
    
    // Update visual selection
    document.querySelectorAll('.day-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.day-option').classList.add('selected');
    
    updateScheduleButton();
}

function selectOccasion(occasion) {
    selectedOccasion = occasion;
    
    // Update visual selection
    document.querySelectorAll('.occasion-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.occasion-option').classList.add('selected');
    
    updateScheduleButton();
}

function updateScheduleButton() {
    const confirmButton = document.querySelector('.schedule-confirm');
    if (selectedScheduleDay && selectedOccasion) {
        confirmButton.disabled = false;
        confirmButton.classList.remove('disabled');
    } else {
        confirmButton.disabled = true;
        confirmButton.classList.add('disabled');
    }
}

function confirmSchedule() {
    if (!selectedScheduleDay || !selectedOccasion) {
        showToast('Please select a day and occasion');
        return;
    }
    
    const outfit = outfitData.find(o => o.id === currentOutfitId);
    const date = new Date(selectedScheduleDay);
    const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
    });
    
    // Save to localStorage (in a real app, this would go to a backend)
    let scheduledOutfits = JSON.parse(localStorage.getItem('scheduledOutfits') || '[]');
    scheduledOutfits.push({
        outfitId: currentOutfitId,
        date: selectedScheduleDay,
        occasion: selectedOccasion,
        scheduledAt: new Date().toISOString()
    });
    localStorage.setItem('scheduledOutfits', JSON.stringify(scheduledOutfits));
    
    showToast(`Outfit scheduled for ${formattedDate} (${selectedOccasion})`);
    closeScheduleModal();
}

function closeScheduleModal() {
    const scheduleModal = document.querySelector('.schedule-modal');
    if (scheduleModal) {
        scheduleModal.classList.remove('active');
        setTimeout(() => {
            scheduleModal.remove();
        }, 300);
    }
    
    // Reset selections
    selectedScheduleDay = null;
    selectedOccasion = null;
}

// Remix/Modify Tools Functions
function openRemixModal() {
    const outfit = outfitData.find(o => o.id === currentOutfitId);
    if (!outfit) return;
    
    const remixModal = document.createElement('div');
    remixModal.className = 'remix-modal';
    remixModal.innerHTML = `
        <div class="remix-modal-content">
            <div class="remix-modal-header">
                <h3>Modify Outfit</h3>
                <button class="close-button" onclick="closeRemixModal()">×</button>
            </div>
            <div class="remix-outfit-preview">
                <img src="${outfit.image}" alt="Outfit" class="remix-outfit-image">
                <div class="remix-outfit-info">
                    <h4>${outfit.title}</h4>
                    <p>Create your own version</p>
                </div>
            </div>
            <div class="remix-options">
                <h4>Modification Options</h4>
                <div class="remix-grid">
                    <button class="remix-option" onclick="modifyOutfit('colors')">
                        <div class="remix-icon">🎨</div>
                        <span>Change Colors</span>
                        <p>Adjust color palette</p>
                    </button>
                    <button class="remix-option" onclick="modifyOutfit('style')">
                        <div class="remix-icon">✨</div>
                        <span>Change Style</span>
                        <p>Switch to different style</p>
                    </button>
                    <button class="remix-option" onclick="modifyOutfit('formality')">
                        <div class="remix-icon">👔</div>
                        <span>Adjust Formality</span>
                        <p>More casual or formal</p>
                    </button>
                    <button class="remix-option" onclick="modifyOutfit('season')">
                        <div class="remix-icon">🌡️</div>
                        <span>Change Season</span>
                        <p>Adapt for weather</p>
                    </button>
                    <button class="remix-option" onclick="modifyOutfit('accessories')">
                        <div class="remix-icon">💍</div>
                        <span>Add Accessories</span>
                        <p>Jewelry, bags, shoes</p>
                    </button>
                    <button class="remix-option" onclick="modifyOutfit('budget')">
                        <div class="remix-icon">💰</div>
                        <span>Change Budget</span>
                        <p>Higher or lower price</p>
                    </button>
                </div>
            </div>
            <div class="remix-actions">
                <button class="remix-cancel" onclick="closeRemixModal()">Cancel</button>
                <button class="remix-generate" onclick="generateRemix()">Generate Remix</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(remixModal);
    
    setTimeout(() => {
        remixModal.classList.add('active');
    }, 10);
}

let selectedModifications = [];

function modifyOutfit(modificationType) {
    const button = event.target.closest('.remix-option');
    
    if (selectedModifications.includes(modificationType)) {
        // Remove if already selected
        selectedModifications = selectedModifications.filter(m => m !== modificationType);
        button.classList.remove('selected');
    } else {
        // Add if not selected
        selectedModifications.push(modificationType);
        button.classList.add('selected');
    }
    
    // Update generate button state
    const generateButton = document.querySelector('.remix-generate');
    if (selectedModifications.length > 0) {
        generateButton.disabled = false;
        generateButton.classList.remove('disabled');
    } else {
        generateButton.disabled = true;
        generateButton.classList.add('disabled');
    }
}

function generateRemix() {
    if (selectedModifications.length === 0) {
        showToast('Please select at least one modification');
        return;
    }
    
    const outfit = outfitData.find(o => o.id === currentOutfitId);
    
    // Create remix variation
    const remixId = Date.now(); // Simple ID generation
    const remixOutfit = {
        ...outfit,
        id: remixId,
        title: `${outfit.title} (Remix)`,
        description: `Modified version with ${selectedModifications.join(', ')} changes`,
        confidence: Math.floor(Math.random() * 20) + 80, // 80-100%
        modifications: selectedModifications,
        originalId: outfit.id,
        isRemix: true
    };
    
    // Add to outfit data
    outfitData.unshift(remixOutfit);
    
    // Save remix to localStorage
    let userRemixes = JSON.parse(localStorage.getItem('userRemixes') || '[]');
    userRemixes.push(remixOutfit);
    localStorage.setItem('userRemixes', JSON.stringify(userRemixes));
    
    showToast('Remix generated! Check your feed for the new version.');
    closeRemixModal();
    
    // Refresh the outfit feed to show the new remix
    setTimeout(() => {
        refreshOutfitFeed();
    }, 1000);
}

function closeRemixModal() {
    const remixModal = document.querySelector('.remix-modal');
    if (remixModal) {
        remixModal.classList.remove('active');
        setTimeout(() => {
            remixModal.remove();
        }, 300);
    }
    
    // Reset selections
    selectedModifications = [];
}

// Collections/Boards System
function showSaveOptions(button) {
    const outfitCard = button.closest('.outfit-card-full');
    const outfitId = parseInt(outfitCard.querySelector('[data-outfit-id]').getAttribute('data-outfit-id'));
    
    const saveModal = document.createElement('div');
    saveModal.className = 'save-modal';
    saveModal.innerHTML = `
        <div class="save-modal-content">
            <div class="save-modal-header">
                <h3>Save to Collection</h3>
                <button class="close-button" onclick="closeSaveModal()">×</button>
            </div>
            <div class="save-collections">
                <h4>Choose a collection</h4>
                <div class="collections-list" id="collections-list">
                    <!-- Collections will be loaded here -->
                </div>
                <button class="create-collection-btn" onclick="showCreateCollection()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Create New Collection
                </button>
            </div>
            <div class="create-collection-form" id="create-collection-form" style="display: none;">
                <h4>Create Collection</h4>
                <input type="text" class="collection-name-input" placeholder="Collection name..." maxlength="30">
                <div class="collection-form-actions">
                    <button class="collection-cancel" onclick="hideCreateCollection()">Cancel</button>
                    <button class="collection-create" onclick="createCollection(${outfitId})">Create</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(saveModal);
    loadCollections(outfitId);
    
    setTimeout(() => {
        saveModal.classList.add('active');
    }, 10);
}

function loadCollections(outfitId) {
    const userCollections = JSON.parse(localStorage.getItem('userCollections') || '[]');
    const collectionsList = document.getElementById('collections-list');
    
    // Add default collections if none exist
    if (userCollections.length === 0) {
        const defaultCollections = [
            { id: 'favorites', name: 'Favorites', icon: '❤️', outfits: [] },
            { id: 'work', name: 'Work Outfits', icon: '💼', outfits: [] },
            { id: 'weekend', name: 'Weekend Casual', icon: '☕', outfits: [] }
        ];
        localStorage.setItem('userCollections', JSON.stringify(defaultCollections));
        userCollections.push(...defaultCollections);
    }
    
    collectionsList.innerHTML = userCollections.map(collection => {
        const isOutfitInCollection = collection.outfits.includes(outfitId);
        return `
            <button class="collection-item ${isOutfitInCollection ? 'selected' : ''}" 
                    onclick="toggleOutfitInCollection('${collection.id}', ${outfitId})">
                <div class="collection-icon">${collection.icon}</div>
                <div class="collection-info">
                    <span class="collection-name">${collection.name}</span>
                    <span class="collection-count">${collection.outfits.length} outfits</span>
                </div>
                <div class="collection-check ${isOutfitInCollection ? 'checked' : ''}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>
        `;
    }).join('');
}

function toggleOutfitInCollection(collectionId, outfitId) {
    let userCollections = JSON.parse(localStorage.getItem('userCollections') || '[]');
    const collection = userCollections.find(c => c.id === collectionId);
    
    if (!collection) return;
    
    const outfitIndex = collection.outfits.indexOf(outfitId);
    if (outfitIndex > -1) {
        // Remove from collection
        collection.outfits.splice(outfitIndex, 1);
        showToast(`Removed from ${collection.name}`);
    } else {
        // Add to collection
        collection.outfits.push(outfitId);
        showToast(`Added to ${collection.name}`);
    }
    
    localStorage.setItem('userCollections', JSON.stringify(userCollections));
    loadCollections(outfitId); // Refresh the display
}

function showCreateCollection() {
    document.querySelector('.save-collections').style.display = 'none';
    document.getElementById('create-collection-form').style.display = 'block';
    document.querySelector('.collection-name-input').focus();
}

function hideCreateCollection() {
    document.querySelector('.save-collections').style.display = 'block';
    document.getElementById('create-collection-form').style.display = 'none';
    document.querySelector('.collection-name-input').value = '';
}

function createCollection(outfitId) {
    const nameInput = document.querySelector('.collection-name-input');
    const name = nameInput.value.trim();
    
    if (!name) {
        showToast('Please enter a collection name');
        return;
    }
    
    let userCollections = JSON.parse(localStorage.getItem('userCollections') || '[]');
    
    // Check if name already exists
    if (userCollections.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        showToast('Collection name already exists');
        return;
    }
    
    const newCollection = {
        id: Date.now().toString(),
        name: name,
        icon: '📁',
        outfits: [outfitId],
        createdAt: new Date().toISOString()
    };
    
    userCollections.push(newCollection);
    localStorage.setItem('userCollections', JSON.stringify(userCollections));
    
    showToast(`Created "${name}" collection`);
    hideCreateCollection();
    loadCollections(outfitId);
}

function closeSaveModal() {
    const saveModal = document.querySelector('.save-modal');
    if (saveModal) {
        saveModal.classList.remove('active');
        setTimeout(() => {
            saveModal.remove();
        }, 300);
    }
}

// Shopping Cart Functions
function addToCart(product, outfitId) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.productName === product.name && item.productBrand === product.brand);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showToast('Quantity updated in cart');
    } else {
        const cartItem = {
            id: Date.now(),
            outfitId: outfitId,
            productName: product.name,
            productBrand: product.brand,
            price: product.price,
            quantity: 1,
            addedAt: new Date().toISOString()
        };
        cart.push(cartItem);
        showToast('Added to cart');
    }
    
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartBadge();
}

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    
    updateCartDisplay();
    updateCartBadge();
    showToast('Removed from cart');
}

function updateCartQuantity(itemId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartBadge();
        }
    }
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function openCartSlideout() {
    const cartSlideout = document.getElementById('cart-slideout');
    cartSlideout.classList.add('active');
    updateCartDisplay();
}

function closeCartSlideout() {
    const cartSlideout = document.getElementById('cart-slideout');
    cartSlideout.classList.remove('active');
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const cartEmpty = document.getElementById('cart-empty');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'block';
        cartFooter.style.display = 'block';
        
        // Render cart items
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.productName}</h4>
                    <p class="cart-item-brand">${item.productBrand}</p>
                    <p class="cart-item-price">$${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    }
}

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simulate checkout process
    showToast(`Redirecting to checkout for $${total.toFixed(2)}...`);
    
    setTimeout(() => {
        // Clear cart after "checkout"
        localStorage.setItem('shoppingCart', '[]');
        updateCartBadge();
        updateCartDisplay();
        showToast('Order placed successfully! (Demo)');
        closeCartSlideout();
    }, 2000);
}

// Simple lazy loading implementation
function initializeLazyLoading() {
    const images = document.querySelectorAll('.outfit-card-full .outfit-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Ensure the image fills the container properly
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.objectPosition = 'center';
                img.style.display = 'block';
                
                img.style.transition = 'opacity 0.3s ease-in-out';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                // If image is already loaded
                if (img.complete) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0';
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Touch Feedback
function addTouchFeedback() {
    // Add touch feedback to buttons and interactive elements
    const interactiveElements = document.querySelectorAll('button, .outfit-card, .hero-card, .product-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('.phone-input');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
            }
            e.target.value = value;
        });
    }
});

// Simulate weather data
function getWeatherData() {
    const weatherOptions = [
        { temp: '72°F', condition: 'Sunny', icon: '☀️' },
        { temp: '68°F', condition: 'Cloudy', icon: '☁️' },
        { temp: '75°F', condition: 'Partly Cloudy', icon: '⛅' },
        { temp: '70°F', condition: 'Light Rain', icon: '🌧️' }
    ];
    
    return weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
}

// Simulate outfit recommendations
function generateOutfitRecommendations() {
    const occasions = ['Work', 'Casual', 'Date Night', 'Weekend', 'Gym', 'Travel'];
    const styles = ['Minimalist', 'Classic', 'Trendy', 'Boho', 'Streetwear', 'Elegant'];
    
    return occasions.map(occasion => ({
        occasion,
        style: styles[Math.floor(Math.random() * styles.length)],
        confidence: Math.floor(Math.random() * 20) + 80 // 80-100%
    }));
}

// Smooth scrolling for outfit detail
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    document.querySelectorAll('.outfit-card, .product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Cart Management Functions
function addToCart(product, outfitId) {
    const cartItem = {
        ...product,
        outfitId: outfitId,
        quantity: 1,
        addedAt: new Date().toISOString()
    };
    
    // Check if item already exists
    const existingIndex = shoppingCart.findIndex(item => 
        item.name === product.name && item.brand === product.brand
    );
    
    if (existingIndex > -1) {
        shoppingCart[existingIndex].quantity += 1;
    } else {
        shoppingCart.push(cartItem);
    }
    
    saveToLocalStorage('shoppingCart', shoppingCart);
    updateCartCount();
    showCartNotification(product.name);
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    saveToLocalStorage('shoppingCart', shoppingCart);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function showCartNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `✓ ${productName} added to cart`;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Wishlist Functions
function toggleWishlist(outfitId) {
    const index = wishlist.findIndex(id => id === outfitId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(outfitId);
    }
    
    saveToLocalStorage('wishlist', wishlist);
    updateWishlistUI(outfitId);
}

function updateWishlistUI(outfitId) {
    const heartButtons = document.querySelectorAll(`[data-outfit-id="${outfitId}"] .like-button`);
    const isWishlisted = wishlist.includes(outfitId);
    
    heartButtons.forEach(button => {
        if (isWishlisted) {
            button.classList.add('liked');
        } else {
            button.classList.remove('liked');
        }
    });
}

// Local Storage Functions
function saveToLocalStorage(key, data) {
    localStorage.setItem(`fitpic-${key}`, JSON.stringify(data));
}

function loadFromLocalStorage(key) {
    const saved = localStorage.getItem(`fitpic-${key}`);
    return saved ? JSON.parse(saved) : null;
}

function saveUserProfile() {
    saveToLocalStorage('userProfile', userProfile);
}

function loadUserProfile() {
    const saved = loadFromLocalStorage('userProfile');
    if (saved) {
        userProfile = { ...userProfile, ...saved };
    }
    return userProfile;
}

// Initialize data from localStorage
function initializeStoredData() {
    // Load shopping cart
    const savedCart = loadFromLocalStorage('shoppingCart');
    if (savedCart) {
        shoppingCart = savedCart;
        updateCartCount();
    }
    
    // Load wishlist
    const savedWishlist = loadFromLocalStorage('wishlist');
    if (savedWishlist) {
        wishlist = savedWishlist;
    }
    
    // Load user profile
    loadUserProfile();
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('FitPic Error:', e.error);
    // In production, send to error tracking service
});

// Performance monitoring
function trackPageLoad() {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });
}

// Initialize performance tracking
trackPageLoad();

// Update outfit detail page with dynamic content
function updateOutfitDetailPage(outfitId) {
    const outfit = outfitData.find(o => o.id === outfitId);
    if (!outfit) return;

    // Update hero image
    const heroImage = document.querySelector('.outfit-image-large');
    if (heroImage) {
        heroImage.style.backgroundImage = `url("${outfit.image}")`;
    }

    // Update description
    const descriptionElement = document.querySelector('.outfit-description');
    if (descriptionElement) {
        descriptionElement.textContent = outfit.description;
    }

    // Update context chips
    const chipsContainer = document.querySelector('.context-chips');
    if (chipsContainer) {
        chipsContainer.innerHTML = outfit.chips.map((chip, index) => 
            `<span class="chip ${index === 0 ? 'primary' : ''}">${chip}</span>`
        ).join('');
    }

    // Update hero tags overlay
    const heroTagsContainer = document.querySelector('.hero-tags');
    if (heroTagsContainer) {
        const tagsHtml = outfit.tags.map((tag, index) => 
            `<span class="hero-tag ${tag}">${outfit.tagLabels[index]}</span>`
        ).join('');
        heroTagsContainer.innerHTML = tagsHtml;
    }

    // Update weather indicator
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherTemp = document.querySelector('.weather-temp');
    const weatherConditions = document.querySelector('.weather-conditions');
    const scoreValue = document.querySelector('.score-value');
    
    if (outfit.weatherSuitability) {
        if (weatherIcon) weatherIcon.textContent = outfit.weatherSuitability.icon || '☀️';
        if (weatherTemp) weatherTemp.textContent = outfit.weatherSuitability.temperature || '20°C - 25°C';
        if (weatherConditions) weatherConditions.textContent = outfit.weatherSuitability.conditions?.join(', ') || 'Sunny, Warm';
        if (scoreValue) scoreValue.textContent = outfit.confidence || '94';
    }

    // Update wishlist button state
    const wishlistButton = document.querySelector('.wishlist-button');
    const wishlistText = document.querySelector('.wishlist-text');
    const isWishlisted = wishlist.includes(outfitId);
    
    if (wishlistButton) {
        wishlistButton.classList.toggle('active', isWishlisted);
        if (wishlistText) {
            wishlistText.textContent = isWishlisted ? 'In Wishlist' : 'Add to Wishlist';
        }
    }

    // Update product cards
    const productCards = document.querySelectorAll('.product-card');
    outfit.products.forEach((product, index) => {
        if (productCards[index]) {
            const nameElement = productCards[index].querySelector('h4');
            const brandElement = productCards[index].querySelector('.brand');
            const priceElement = productCards[index].querySelector('.price');
            
            if (nameElement) nameElement.textContent = product.name;
            if (brandElement) brandElement.textContent = product.brand;
            if (priceElement) priceElement.textContent = `$${product.price}`;
        }
    });

    // Update total price in button
    const totalPrice = outfit.products.reduce((sum, product) => sum + product.price, 0);
    const buttonText = document.querySelector('#outfit-detail-page .button-text');
    if (buttonText) {
        buttonText.textContent = `Add to Cart - $${totalPrice}`;
    }
}

// Fullscreen Image Modal Functions
function openFullscreenModal(imageSrc) {
    const modal = document.getElementById('fullscreen-modal');
    const modalImage = document.getElementById('modal-image');
    
    modalImage.src = imageSrc;
    modal.classList.add('active');
    
    // Add escape key listener
    document.addEventListener('keydown', handleModalKeydown);
    
    // Add zoom functionality
    modalImage.addEventListener('click', toggleImageZoom);
}

function closeFullscreenModal() {
    const modal = document.getElementById('fullscreen-modal');
    const modalImage = document.getElementById('modal-image');
    
    modal.classList.remove('active');
    modalImage.classList.remove('zoomed');
    
    // Remove event listeners
    document.removeEventListener('keydown', handleModalKeydown);
    modalImage.removeEventListener('click', toggleImageZoom);
}

function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        closeFullscreenModal();
    }
}

function toggleImageZoom() {
    const modalImage = document.getElementById('modal-image');
    modalImage.classList.toggle('zoomed');
}

// Helper function to get current outfit image
function getCurrentOutfitImage() {
    const outfit = outfitData.find(o => o.id === currentOutfitId);
    return outfit ? outfit.image : 'outfit images/fitpic_1.webp';
}

// Prevent zoom on iOS
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Prevent pull-to-refresh
document.body.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) { return; }
    const scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollY === 0) {
        e.preventDefault();
    }
});

// Add to home screen prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

function showInstallPrompt() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Enhanced Contextual Intelligence
function showProfile() {
    // For demo purposes, show a contextual message
    alert('Profile settings with style insights, fit feedback, and personalization options coming soon!');
}

function updateContextualGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.querySelector('.headline-text');
    
    if (greetingElement) {
        let greeting;
        if (hour < 12) greeting = 'Good morning';
        else if (hour < 17) greeting = 'Good afternoon';
        else greeting = 'Good evening';
        
        greetingElement.textContent = greeting;
    }
}

// Contextual Outfit Intelligence
function getContextualRecommendation() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    const weather = getWeatherData();
    
    let context = '';
    
    if (hour >= 7 && hour <= 9 && day >= 1 && day <= 5) {
        context = 'Perfect for your morning commute';
    } else if (hour >= 12 && hour <= 14) {
        context = 'Great for lunch meetings';
    } else if (hour >= 17 && hour <= 19) {
        context = 'Ideal for after-work plans';
    } else if (day === 0 || day === 6) {
        context = 'Perfect for weekend relaxation';
    } else {
        context = 'Matches your personal style';
    }
    
    return context;
}

// Smart Default Selection
function applySmartDefaults() {
    // Apply popular brand selections by default
    const smartDefaults = document.querySelectorAll('.smart-default');
    smartDefaults.forEach(card => {
        card.classList.add('selected');
    });
}

// Enhanced Micro-interactions
function addAdvancedTouchFeedback() {
    const cards = document.querySelectorAll('.outfit-card, .product-card, .brand-card');
    
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.96) translateY(1px)';
            this.style.transition = 'transform 0.1s ease-out';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}


// Country Dropdown Functions
function initializeCountryDropdown() {
    const countryList = document.getElementById('country-list');
    if (!countryList) return;
    
    // Populate country list
    countries.forEach(country => {
        const countryItem = document.createElement('div');
        countryItem.className = 'country-item';
        countryItem.innerHTML = `
            <div class="country-item-left">
                <span class="country-flag">${country.flag}</span>
                <span class="country-name">${country.name}</span>
            </div>
            <span class="country-dial-code">${country.dialCode}</span>
        `;
        countryItem.onclick = () => selectCountry(country);
        countryList.appendChild(countryItem);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('country-dropdown');
        const countryButton = document.querySelector('.country-code');
        if (!dropdown.contains(event.target) && !countryButton.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
}

function toggleCountryDropdown() {
    const dropdown = document.getElementById('country-dropdown');
    dropdown.classList.toggle('active');
    
    if (dropdown.classList.contains('active')) {
        const searchInput = dropdown.querySelector('.country-search');
        searchInput.focus();
        searchInput.value = '';
        filterCountries('');
    }
}

function selectCountry(country) {
    const selectedCountryEl = document.getElementById('selected-country');
    selectedCountryEl.textContent = `${country.flag} ${country.dialCode}`;
    
    const dropdown = document.getElementById('country-dropdown');
    dropdown.classList.remove('active');
    
    // Focus phone input
    document.getElementById('phone-input').focus();
}

function filterCountries(searchTerm) {
    const countryItems = document.querySelectorAll('.country-item');
    const search = searchTerm.toLowerCase();
    
    countryItems.forEach(item => {
        const countryName = item.querySelector('.country-name').textContent.toLowerCase();
        const dialCode = item.querySelector('.country-dial-code').textContent;
        
        if (countryName.includes(search) || dialCode.includes(search)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Enhanced Phone Validation
function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone-input');
    const phoneNumber = phoneInput.value.replace(/\D/g, '');
    
    // Basic validation - at least 7 digits
    if (phoneNumber.length >= 7) {
        return true;
    }
    
    return false;
}

// Location Autocomplete
const popularLocations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
    "Austin, TX",
    "Jacksonville, FL",
    "Fort Worth, TX",
    "Columbus, OH",
    "Indianapolis, IN",
    "Charlotte, NC",
    "San Francisco, CA",
    "Seattle, WA",
    "Denver, CO",
    "Boston, MA",
    "Miami, FL",
    "Atlanta, GA",
    "Las Vegas, NV",
    "Portland, OR",
    "Nashville, TN"
];

function handleLocationInput(value) {
    const suggestions = document.getElementById('location-suggestions');
    
    if (value.length < 2) {
        suggestions.classList.remove('active');
        return;
    }
    
    const filtered = popularLocations.filter(location => 
        location.toLowerCase().includes(value.toLowerCase())
    );
    
    if (filtered.length > 0) {
        suggestions.innerHTML = filtered.map(location => `
            <div class="location-item" onclick="selectLocation('${location}')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.79086 1 4 2.79086 4 5C4 8.5 8 15 8 15C8 15 12 8.5 12 5C12 2.79086 10.2091 1 8 1Z" stroke="#6B6B6B" stroke-width="1.5"/>
                    <circle cx="8" cy="5" r="1.5" stroke="#6B6B6B" stroke-width="1.5"/>
                </svg>
                <span>${location}</span>
            </div>
        `).join('');
        suggestions.classList.add('active');
    } else {
        suggestions.classList.remove('active');
    }
}

function selectLocation(location) {
    document.getElementById('location-input').value = location;
    document.getElementById('location-suggestions').classList.remove('active');
}

// Tag Selection Handlers
function initializeTagSelections() {
    // Brand tags
    const brandTags = document.querySelectorAll('.brand-tag');
    brandTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateProfilePreview();
        });
    });
    
    // Event tags
    const eventTags = document.querySelectorAll('.event-tag');
    eventTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateProfilePreview();
        });
    });
    
    // Aesthetic tags
    const aestheticTags = document.querySelectorAll('.aesthetic-tag');
    aestheticTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateProfilePreview();
        });
    });
    
    // Selection cards (for gender selection)
    const selectionCards = document.querySelectorAll('.selection-card');
    selectionCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected from siblings
            const siblings = this.parentElement.querySelectorAll('.selection-card');
            siblings.forEach(sibling => sibling.classList.remove('selected'));
            // Add selected to clicked
            this.classList.add('selected');
        });
    });
}

// Update profile preview on final step
function updateProfilePreview() {
    // Get selected items
    const selectedBrands = Array.from(document.querySelectorAll('.brand-tag.selected')).map(tag => tag.textContent);
    const selectedEvents = Array.from(document.querySelectorAll('.event-tag.selected')).map(tag => tag.textContent);
    const selectedAesthetics = Array.from(document.querySelectorAll('.aesthetic-tag.selected')).map(tag => tag.textContent);
    
    // Update profile preview if on step 7
    if (currentStep === 7) {
        const brandsContainer = document.getElementById('profile-brands');
        const eventsContainer = document.getElementById('profile-events');
        const aestheticsContainer = document.getElementById('profile-aesthetics');
        
        if (brandsContainer) {
            brandsContainer.innerHTML = selectedBrands.slice(0, 3).map(brand => 
                `<span class="profile-tag">${brand}</span>`
            ).join('');
        }
        
        if (eventsContainer) {
            eventsContainer.innerHTML = selectedEvents.slice(0, 3).map(event => 
                `<span class="profile-tag">${event}</span>`
            ).join('');
        }
        
        if (aestheticsContainer) {
            aestheticsContainer.innerHTML = selectedAesthetics.slice(0, 3).map(aesthetic => 
                `<span class="profile-tag">${aesthetic}</span>`
            ).join('');
        }
    }
}

// Profile actions
function editProfile() {
    alert('Edit profile functionality would open a modal to edit preferences');
}

function saveForLater() {
    // Save profile data to localStorage
    const profileData = {
        brands: Array.from(document.querySelectorAll('.brand-tag.selected')).map(tag => tag.textContent),
        events: Array.from(document.querySelectorAll('.event-tag.selected')).map(tag => tag.textContent),
        aesthetics: Array.from(document.querySelectorAll('.aesthetic-tag.selected')).map(tag => tag.textContent),
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('fitpic-profile-draft', JSON.stringify(profileData));
    alert('Profile saved! You can continue later.');
}

function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'My FitPic Style Profile',
            text: 'Check out my personalized style profile on FitPic!',
            url: window.location.href
        });
    } else {
        alert('Share functionality would generate a shareable link');
    }
}

// Photo upload placeholder
function uploadPhoto() {
    alert('Photo upload functionality would open file picker');
}

// Wishlist functionality
function toggleWishlist() {
    const isWishlisted = wishlist.includes(currentOutfitId);
    const wishlistButton = document.querySelector('.wishlist-button');
    const wishlistText = document.querySelector('.wishlist-text');
    
    if (isWishlisted) {
        // Remove from wishlist
        wishlist = wishlist.filter(id => id !== currentOutfitId);
        wishlistButton.classList.remove('active');
        wishlistText.textContent = 'Add to Wishlist';
    } else {
        // Add to wishlist
        wishlist.push(currentOutfitId);
        wishlistButton.classList.add('active');
        wishlistText.textContent = 'In Wishlist';
    }
    
    // Save to localStorage
    localStorage.setItem('fitpic-wishlist', JSON.stringify(wishlist));
    
    // Show feedback
    showToast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
}

// Add entire outfit to cart
function addAllToCart() {
    const outfit = outfitData.find(o => o.id === currentOutfitId);
    if (!outfit) return;
    
    const addButton = document.querySelector('.add-to-cart-btn');
    const buttonText = addButton.querySelector('.button-text');
    const buttonLoading = addButton.querySelector('.button-loading');
    
    // Show loading state
    addButton.classList.add('loading');
    buttonText.style.display = 'none';
    buttonLoading.style.display = 'flex';
    
    // Simulate API call
    setTimeout(() => {
        // Add each product to cart
        outfit.products.forEach(product => {
            addToCart(product, currentOutfitId);
        });
        
        // Show success state
        addButton.classList.remove('loading');
        buttonText.style.display = 'flex';
        buttonLoading.style.display = 'none';
        
        // Update button text temporarily
        const originalText = buttonText.textContent;
        buttonText.textContent = 'Added to Cart!';
        addButton.style.background = '#10B981';
        
        // Revert after 2 seconds
        setTimeout(() => {
            buttonText.textContent = originalText;
            addButton.style.background = '';
        }, 2000);
        
        // Show cart slideout
        setTimeout(() => {
            openCartSlideout();
        }, 500);
        
    }, 1500);
}

// Show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
}

// Initialize wishlist from localStorage
function initializeWishlist() {
    const savedWishlist = localStorage.getItem('fitpic-wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

// Navigation functions for new pages
function navigateToFavs() {
    showPage('favs-page');
    showNavigation();
    populateFavsPage();
}

function navigateToSettings() {
    showPage('settings-page');
    showNavigation();
    populateSettingsPage();
}

function navigateToProfile() {
    showPage('profile-page');
    hideNavigation();
    populateProfilePage();
}

function navigateToCartPage() {
    showPage('cart-page');
    hideNavigation();
    populateCartPage();
}

// Populate Fav's page with collections and wishlisted outfits
function populateFavsPage() {
    // Populate collections
    const collectionsGrid = document.getElementById('collections-grid');
    const collections = JSON.parse(localStorage.getItem('fitpic-collections') || '[]');
    
    if (collections.length === 0) {
        // Add default collections
        collections.push(
            { id: 'work', name: 'Work Outfits', count: 8 },
            { id: 'casual', name: 'Casual Wear', count: 12 },
            { id: 'date-night', name: 'Date Night', count: 5 },
            { id: 'summer', name: 'Summer Vibes', count: 15 }
        );
        localStorage.setItem('fitpic-collections', JSON.stringify(collections));
    }
    
    collectionsGrid.innerHTML = collections.map(collection => `
        <div class="collection-card" onclick="openCollection('${collection.id}')">
            <div class="collection-name">${collection.name}</div>
            <div class="collection-count">${collection.count} items</div>
        </div>
    `).join('');
    
    // Populate wishlisted outfits
    const wishlistGrid = document.getElementById('wishlisted-outfits-grid');
    const wishlistedOutfits = outfitData.filter(outfit => wishlist.includes(outfit.id));
    
    if (wishlistedOutfits.length === 0) {
        wishlistGrid.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                <p>No wishlisted outfits yet</p>
                <button class="browse-outfits-btn" onclick="navigateToHome()" style="margin-top: 16px;">Browse Outfits</button>
            </div>
        `;
    } else {
        wishlistGrid.innerHTML = wishlistedOutfits.map(outfit => generateOutfitCard(outfit)).join('');
    }
}

// Populate Settings page
function populateSettingsPage() {
    // Set dark mode toggle based on current theme
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (darkModeToggle) {
        darkModeToggle.checked = currentTheme === 'dark';
    }
    
    // Load other preferences from localStorage
    const preferences = JSON.parse(localStorage.getItem('fitpic-preferences') || '{}');
    
    const outfitAlertsToggle = document.getElementById('outfit-alerts-toggle');
    const weeklyReportsToggle = document.getElementById('weekly-reports-toggle');
    const shareDataToggle = document.getElementById('share-data-toggle');
    
    if (outfitAlertsToggle) outfitAlertsToggle.checked = preferences.outfitAlerts !== false;
    if (weeklyReportsToggle) weeklyReportsToggle.checked = preferences.weeklyReports !== false;
    if (shareDataToggle) shareDataToggle.checked = preferences.shareData === true;
}

// Populate Profile page
function populateProfilePage() {
    // Update stats based on user data
    const savedOutfitsCount = (JSON.parse(localStorage.getItem('fitpic-saved-outfits') || '[]')).length;
    const collectionsCount = (JSON.parse(localStorage.getItem('fitpic-collections') || '[]')).length;
    const styleScore = calculateStyleScore();
    
    const statItems = document.querySelectorAll('#profile-page .stat-value');
    if (statItems[0]) statItems[0].textContent = savedOutfitsCount || 47;
    if (statItems[1]) statItems[1].textContent = collectionsCount || 12;
    if (statItems[2]) statItems[2].textContent = styleScore || '8.2';
}

// Populate Cart page
function populateCartPage() {
    const cartEmpty = document.getElementById('cart-page-empty');
    const cartItems = document.getElementById('cart-page-items');
    const cartFooter = document.getElementById('cart-page-footer');
    
    if (shoppingCart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'block';
        cartFooter.style.display = 'block';
        
        // Populate cart items (reuse existing cart functionality)
        cartItems.innerHTML = shoppingCart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.brand}</p>
                    <p class="cart-item-price">$${item.price}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `).join('');
        
        // Update totals
        const subtotal = calculateCartTotal();
        document.getElementById('cart-subtotal').textContent = `$${subtotal}`;
        document.getElementById('cart-page-total').textContent = `$${subtotal}`;
    }
}

// Helper functions
function calculateStyleScore() {
    // Simple algorithm based on user activity
    const baseScore = 7.5;
    const savedOutfits = JSON.parse(localStorage.getItem('fitpic-saved-outfits') || '[]').length;
    const collections = JSON.parse(localStorage.getItem('fitpic-collections') || '[]').length;
    
    const score = baseScore + (savedOutfits * 0.02) + (collections * 0.05);
    return Math.min(10, score).toFixed(1);
}

function openCollection(collectionId) {
    alert(`Opening collection: ${collectionId}. This would show outfits in the collection.`);
}

function toggleFavsFilter() {
    alert('Filter functionality would allow filtering favorites by category, date, etc.');
}

function exportData() {
    const userData = {
        profile: userProfile,
        wishlist: wishlist,
        cart: shoppingCart,
        collections: JSON.parse(localStorage.getItem('fitpic-collections') || '[]'),
        preferences: JSON.parse(localStorage.getItem('fitpic-preferences') || '{}')
    };
    
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'fitpic-data.json';
    link.click();
    
    showToast('Data exported successfully');
}

function deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        // Clear all user data
        localStorage.clear();
        shoppingCart = [];
        wishlist = [];
        userProfile = {};
        
        showToast('Account deleted');
        navigateToEntry();
    }
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        shoppingCart = [];
        localStorage.setItem('fitpic-cart', JSON.stringify(shoppingCart));
        updateCartBadge();
        populateCartPage();
        showToast('Cart cleared');
    }
}

// Add navigation handlers to collapsible nav
document.addEventListener('DOMContentLoaded', function() {
    // Initialize wishlist
    initializeWishlist();
    
    // Initialize theme on body element
    const savedTheme = localStorage.getItem('fitpic-theme') || 'light';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    
    // Add click handler to navigation toggle button
    const navToggle = document.querySelector('#nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNavigation);
    }
    
    // Add click handler to navigation overlay
    const navOverlay = document.querySelector('.nav-overlay');
    if (navOverlay) {
        navOverlay.addEventListener('click', collapseNavigation);
    }
    
    // Add click handler to close button
    const closeButton = document.querySelector('.nav-close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', toggleNavigation);
    }
    
    // Add dark mode toggle handlers
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            toggleTheme();
        });
        // Set initial state
        darkModeToggle.checked = savedTheme === 'dark';
    }
    
    const navDarkModeToggle = document.getElementById('nav-dark-mode-toggle');
    if (navDarkModeToggle) {
        navDarkModeToggle.addEventListener('change', function() {
            toggleTheme();
        });
        // Set initial state
        navDarkModeToggle.checked = savedTheme === 'dark';
    }
    
    // Add click handlers to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // Collapse navigation after selection
            collapseNavigation();
            
            // Navigate to appropriate page
            switch(page) {
                case 'home':
                    navigateToHome();
                    break;
                case 'wishlist':
                    navigateToFavs();
                    break;
                case 'settings':
                    navigateToSettings();
                    break;
                case 'profile':
                    navigateToProfile();
                    break;
                case 'shopping-bag':
                    const cartCount = document.querySelector('.cart-count');
                    if (cartCount && parseInt(cartCount.textContent) > 0) {
                        navigateToCartPage();
                    }
                    break;
            }
        });
    });
    
    // Setup category filtering for outfit detail page
    setupCategoryFiltering();
}); 

// Product data for filtering
const productsByCategory = {
    shirts: [
        { name: "Cotton Shirt", brand: "ZARA", price: "$35", image: "https://via.placeholder.com/180x180/4A90E2/FFFFFF?text=Cotton+Shirt" },
        { name: "Linen Shirt", brand: "COS", price: "$65", image: "https://via.placeholder.com/180x180/7ED321/FFFFFF?text=Linen+Shirt" }
    ],
    "t-shirts": [
        { name: "Basic Tee", brand: "H&M", price: "$12", image: "https://via.placeholder.com/180x180/F5A623/FFFFFF?text=Basic+Tee" },
        { name: "Premium Tee", brand: "ZARA", price: "$25", image: "https://via.placeholder.com/180x180/BD10E0/FFFFFF?text=Premium+Tee" }
    ],
    shoes: [
        { name: "Sneakers", brand: "Nike", price: "$120", image: "https://via.placeholder.com/180x180/50E3C2/FFFFFF?text=Sneakers" },
        { name: "Dress Shoes", brand: "COS", price: "$180", image: "https://via.placeholder.com/180x180/B8E986/FFFFFF?text=Dress+Shoes" }
    ],
    jackets: [
        { name: "Denim Jacket", brand: "ZARA", price: "$89", image: "https://via.placeholder.com/180x180/9013FE/FFFFFF?text=Denim+Jacket" },
        { name: "Blazer", brand: "COS", price: "$199", image: "https://via.placeholder.com/180x180/FF6900/FFFFFF?text=Blazer" }
    ],
    pants: [
        { name: "Skyline Chinos", brand: "ZARA", price: "$45", image: "https://via.placeholder.com/180x180/D4A574/FFFFFF?text=Chinos" },
        { name: "Urban Slacks", brand: "ZARA", price: "$120", image: "https://via.placeholder.com/180x180/8B8B8B/FFFFFF?text=Urban+Slacks" },
        { name: "Premium Pants", brand: "COS", price: "$299", image: "https://via.placeholder.com/180x180/2D2D2D/FFFFFF?text=Premium+Pants" },
        { name: "Casual Trousers", brand: "H&M", price: "$75", image: "https://via.placeholder.com/180x180/4A6741/FFFFFF?text=Casual+Trousers" }
    ]
};

// Setup category filtering functionality
function setupCategoryFiltering() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all category items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Filter products based on category
            filterProductsByCategory(category);
        });
    });
}

// Filter and display products by category
function filterProductsByCategory(category) {
    const productGrid = document.querySelector('.product-grid');
    const products = productsByCategory[category] || [];
    
    if (products.length === 0) {
        productGrid.innerHTML = '<div class="no-products">No products available for this category</div>';
        return;
    }
    
    productGrid.innerHTML = products.map(product => `
        <div class="product-card-grid">
            <div class="product-image-grid">
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-info-grid">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-brand">${product.brand}</p>
                <p class="product-price">${product.price}</p>
            </div>
            <button class="product-heart" onclick="toggleProductLike(this)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.5487 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `).join('');
}