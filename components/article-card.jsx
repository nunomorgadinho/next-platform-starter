import Link from 'next/link';
import { formatDate, getCategoryName } from '../lib/articles';

export function ArticleCard({ article, size = 'default' }) {
    const isFeatured = size === 'featured';

    return (
        <article className={isFeatured ? 'article-card-featured' : 'article-card'}>
            <Link href={`/article/${article.slug}`} className="block no-underline group">
                <div className={`overflow-hidden ${isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'} rounded-lg`}>
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className={isFeatured ? 'mt-5' : 'mt-3'}>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="category-badge">{getCategoryName(article.category)}</span>
                        <span className="text-sm text-neutral-400">{formatDate(article.publishedAt)}</span>
                    </div>
                    <h3
                        className={`font-bold leading-tight text-white group-hover:text-rose-400 transition-colors ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}
                    >
                        {article.title}
                    </h3>
                    <p className={`mt-2 text-neutral-300 leading-relaxed ${isFeatured ? 'text-base' : 'text-sm'}`}>
                        {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-sm text-neutral-400">
                        <span>{article.author}</span>
                        <span>·</span>
                        <span>{article.readTime} min read</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}
