// Outfit Data
const OUTFIT_DATA = [
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

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OUTFIT_DATA;
}