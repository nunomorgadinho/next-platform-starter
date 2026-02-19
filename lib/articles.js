import articlesData from '../data/articles.json';

const categories = [
    { slug: 'world', name: 'World' },
    { slug: 'technology', name: 'Technology' },
    { slug: 'business', name: 'Business' },
    { slug: 'sports', name: 'Sports' },
    { slug: 'entertainment', name: 'Entertainment' }
];

export function getCategories() {
    return categories;
}

export function getAllArticles() {
    return articlesData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getFeaturedArticles() {
    return getAllArticles().filter((a) => a.featured);
}

export function getArticlesByCategory(categorySlug) {
    return getAllArticles().filter((a) => a.category === categorySlug);
}

export function getArticleBySlug(slug) {
    return articlesData.find((a) => a.slug === slug) || null;
}

export function getLatestArticles(count = 6) {
    return getAllArticles().slice(0, count);
}

export function getCategoryName(slug) {
    const cat = categories.find((c) => c.slug === slug);
    return cat ? cat.name : slug;
}

export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
