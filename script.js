// App State
let currentPage = 'entry-page';
let currentStep = 1;

// Outfit Data
const outfitData = [
    {
        id: 1,
        image: 'outfit images/fitpic_1.webp',
        tags: ['boho', 'warm', 'temp'],
        tagLabels: ['Boho', 'Warm & Humid', '20°C - 25°C'],
        filterCategories: ['date-night']
    },
    {
        id: 2,
        image: 'outfit images/fitpic_2.webp',
        tags: ['casual', 'cool', 'temp'],
        tagLabels: ['Casual', 'Cool & Breezy', '15°C - 20°C'],
        filterCategories: ['cold-days']
    },
    {
        id: 3,
        image: 'outfit images/fitpic_3.webp',
        tags: ['elegant', 'moderate', 'temp'],
        tagLabels: ['Elegant', 'Moderate', '18°C - 22°C'],
        filterCategories: ['wedding-guest']
    },
    {
        id: 4,
        image: 'outfit images/fitpic_4.webp',
        tags: ['streetwear', 'cold', 'temp'],
        tagLabels: ['Streetwear', 'Cold Days', '10°C - 15°C'],
        filterCategories: ['cold-days']
    },
    {
        id: 5,
        image: 'outfit images/fitpic_5.webp',
        tags: ['casual', 'warm', 'temp'],
        tagLabels: ['Casual', 'Warm Weather', '22°C - 28°C'],
        filterCategories: ['date-night']
    },
    {
        id: 6,
        image: 'outfit images/fitpic_6.webp',
        tags: ['elegant', 'cool', 'temp'],
        tagLabels: ['Elegant', 'Cool Evening', '16°C - 20°C'],
        filterCategories: ['wedding-guest']
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
});

function initializeApp() {
    // Set up event listeners
    setupOnboardingInteractions();
    setupTabNavigation();
    setupFilterTags();
    
    // Add touch feedback to buttons
    addTouchFeedback();
    
    // Hide navigation by default (show only on home/detail pages)
    hideNavigation();
    
    // Start processing animation if on processing page
    if (currentPage === 'processing-page') {
        startProcessingAnimation();
    }
}

// Navigation Functions
function navigateToOnboarding() {
    showPage('onboarding-page');
    hideNavigation();
    currentStep = 1;
    updateProgress();
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

function navigateToOutfitDetail() {
    showPage('outfit-detail-page');
    showNavigation();
}

// Navigation Visibility Functions
function showNavigation() {
    const nav = document.querySelector('.bottom-nav-bar');
    if (nav) {
        nav.classList.add('visible');
    }
}

function hideNavigation() {
    const nav = document.querySelector('.bottom-nav-bar');
    if (nav) {
        nav.classList.remove('visible');
    }
}

function showPage(pageId) {
    // Add exit animation to current page
    const currentPageEl = document.getElementById(currentPage);
    currentPageEl.classList.add('exiting');
    
    setTimeout(() => {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active', 'exiting');
        });
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        targetPage.classList.add('active');
        currentPage = pageId;
    }, 150);
}

// Onboarding Functions
function nextStep() {
    if (currentStep < 6) {
        // Hide current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Show next step
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        updateProgress();
    }
}

function updateProgress() {
    const progress = (currentStep / 6) * 100;
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
    updateProcessingText();
    startInsightCycle();
    
    const interval = setInterval(() => {
        processingIndex++;
        if (processingIndex < processingSteps.length) {
            updateProcessingText();
        } else {
            clearInterval(interval);
            // Navigate to home after processing with confident timing
            setTimeout(() => {
                navigateToHome();
            }, 1500);
        }
    }, 3000);
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
    
    // Setup bottom navigation bar for new design
    document.querySelectorAll('.nav-item').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.nav-item').forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Handle tab navigation
            const tabType = this.getAttribute('data-tab');
            if (tabType !== 'outfits') {
                // Show coming soon for other tabs
                showComingSoonBottom(tabType);
            }
        });
    });
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

function showComingSoonBottom(tabType) {
    // Simple alert for demo
    const tabNames = {
        'favs': "Fav's",
        'settings': 'Settings'
    };
    
    alert(`${tabNames[tabType]} coming soon!`);
    
    // Reset outfits tab as active
    document.querySelector('[data-tab="outfits"]').classList.add('active');
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
                    <button class="action-button like-button" onclick="toggleLike(this)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.5487 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="action-button shop-button" onclick="navigateToOutfitDetail()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 2L3 9V22H21V9L15 2H9Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 9H21" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 13C8 14.6569 9.34315 16 11 16C12.6569 16 14 14.6569 14 13" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="action-button save-button" onclick="showSaveOptions(this)">
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

// Initialize outfit feed
function initializeOutfitFeed() {
    const outfitFeed = document.querySelector('.outfit-feed');
    if (outfitFeed && currentPage === 'home-page') {
        // Clear existing static cards
        outfitFeed.innerHTML = '';
        
        // Generate cards from outfit data
        outfitData.forEach(outfit => {
            outfitFeed.innerHTML += generateOutfitCard(outfit);
        });
        
        // Initialize lazy loading for images
        setTimeout(() => {
            initializeLazyLoading();
        }, 100);
    }
}

// Simple lazy loading implementation
function initializeLazyLoading() {
    const images = document.querySelectorAll('.outfit-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease-in-out';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                // If image is already loaded
                if (img.complete) {
                    img.style.opacity = '1';
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

// Shopping cart simulation
let shoppingCart = [];

function addToCart(item) {
    shoppingCart.push(item);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = shoppingCart.length;
        cartCount.style.display = shoppingCart.length > 0 ? 'block' : 'none';
    }
}

// Local storage for preferences
function saveUserPreferences(preferences) {
    localStorage.setItem('fitpic-preferences', JSON.stringify(preferences));
}

function loadUserPreferences() {
    const saved = localStorage.getItem('fitpic-preferences');
    return saved ? JSON.parse(saved) : null;
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

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    updateContextualGreeting();
    applySmartDefaults();
    addAdvancedTouchFeedback();
    
    // Update greeting every minute
    setInterval(updateContextualGreeting, 60000);
}); 