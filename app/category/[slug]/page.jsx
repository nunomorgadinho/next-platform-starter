import { notFound } from 'next/navigation';
import { ArticleCard } from 'components/article-card';
import { CategoryNav } from 'components/category-nav';
import { getArticlesByCategory, getCategories, getCategoryName } from 'lib/articles';

export function generateStaticParams() {
    return getCategories().map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({ params }) {
    const { slug } = params;
    const name = getCategoryName(slug);
    return {
        title: `${name} News`
    };
}

export default function CategoryPage({ params }) {
    const { slug } = params;
    const categories = getCategories();
    const isValid = categories.some((c) => c.slug === slug);

    if (!isValid) {
        notFound();
    }

    const articles = getArticlesByCategory(slug);
    const categoryName = getCategoryName(slug);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold sm:text-4xl">{categoryName}</h1>
                </div>
                <CategoryNav activeCategory={slug} />
            </div>

            {articles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <p className="text-neutral-400">No articles found in this category.</p>
            )}
        </div>
    );
}
