import { OutfitItem } from '../types';

// Convert outfit images path for public directory
const imagePath = (filename: string) => `/outfit images/${filename}`;

export const OUTFIT_DATA: OutfitItem[] = [
    {
        id: 1,
        image: imagePath('fitpic_1.webp'),
        tags: ['boho', 'warm', 'temp'],
        tagLabels: ['Boho', 'Warm & Humid', '20°C - 25°C'],
        filterCategories: ['date-night'],
        filterLocation: ['new-york', 'los-angeles', 'paris'],
        filterStyle: ['boho', 'casual'],
        filterEvent: ['date-night', 'casual'],
        filterSeason: ['spring', 'summer'],
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
        savedBy: 156,
        dateAdded: '2024-01-15',
        occasionTags: ['date', 'dinner', 'casual'],
        styleNotes: ['Free-spirited', 'Romantic', 'Boho-chic'],
        socialMetrics: {
            likes: 342,
            shares: 28,
            saves: 156,
            comments: 24
        }
    },
    {
        id: 2,
        image: imagePath('fitpic_2.webp'),
        tags: ['business', 'professional', 'temp'],
        tagLabels: ['Business', 'Professional', '18°C - 22°C'],
        filterCategories: ['work'],
        filterLocation: ['new-york', 'chicago', 'london'],
        filterStyle: ['business', 'classic'],
        filterEvent: ['work', 'meeting', 'professional'],
        filterSeason: ['fall', 'winter', 'spring'],
        title: 'Power Professional',
        description: 'Sharp, confident look perfect for important meetings and presentations',
        confidence: 96,
        chips: ['Work Ready', 'Professional', 'Confidence Boost'],
        products: [
            { name: 'Tailored Blazer', brand: 'Theory', price: 295 },
            { name: 'Silk Blouse', brand: 'Equipment', price: 188 },
            { name: 'Trousers', brand: 'J.Crew', price: 118 }
        ],
        weatherSuitability: {
            temperature: '18-22°C',
            conditions: ['mild', 'indoor'],
            icon: '🏢'
        },
        rating: 4.8,
        reviews: 41,
        savedBy: 203,
        dateAdded: '2024-01-12',
        occasionTags: ['work', 'meeting', 'presentation'],
        styleNotes: ['Sharp', 'Professional', 'Confident'],
        socialMetrics: {
            likes: 487,
            shares: 35,
            saves: 203,
            comments: 41
        }
    },
    {
        id: 3,
        image: imagePath('fitpic_3.webp'),
        tags: ['casual', 'weekend', 'comfortable'],
        tagLabels: ['Casual', 'Weekend Vibes', '22°C - 26°C'],
        filterCategories: ['casual'],
        filterLocation: ['los-angeles', 'miami', 'austin'],
        filterStyle: ['casual', 'relaxed'],
        filterEvent: ['casual', 'weekend', 'brunch'],
        filterSeason: ['spring', 'summer'],
        title: 'Weekend Relaxed',
        description: 'Effortless weekend style that\'s comfortable yet put-together',
        confidence: 88,
        chips: ['Weekend Ready', 'Comfortable', 'Effortless'],
        products: [
            { name: 'Cotton Tee', brand: 'Everlane', price: 38 },
            { name: 'Denim Jacket', brand: 'Levi\'s', price: 98 },
            { name: 'Sneakers', brand: 'Allbirds', price: 98 }
        ],
        weatherSuitability: {
            temperature: '22-26°C',
            conditions: ['sunny', 'pleasant'],
            icon: '🌞'
        },
        rating: 4.3,
        reviews: 18,
        savedBy: 89,
        dateAdded: '2024-01-10',
        occasionTags: ['casual', 'weekend', 'brunch'],
        styleNotes: ['Effortless', 'Comfortable', 'Relaxed'],
        socialMetrics: {
            likes: 234,
            shares: 12,
            saves: 89,
            comments: 18
        }
    },
    // Add more outfits as needed...
];

export default OUTFIT_DATA;