import { ArticleCard } from 'components/article-card';
import { CategoryNav } from 'components/category-nav';
import { getFeaturedArticles, getLatestArticles } from 'lib/articles';

export default function HomePage() {
    const featured = getFeaturedArticles();
    const latest = getLatestArticles(12);
    const nonFeatured = latest.filter((a) => !a.featured);

    return (
        <div className="flex flex-col gap-12">
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold tracking-wider uppercase text-neutral-300">Top Stories</h2>
                    <CategoryNav />
                </div>

                {featured.length > 0 && (
                    <div className="grid gap-6 lg:grid-cols-2">
                        {featured.map((article) => (
                            <ArticleCard key={article.id} article={article} size="featured" />
                        ))}
                    </div>
                )}
            </section>

            <section>
                <h2 className="mb-6 text-lg font-semibold tracking-wider uppercase text-neutral-300">Latest News</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {nonFeatured.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>
        </div>
    );
}
