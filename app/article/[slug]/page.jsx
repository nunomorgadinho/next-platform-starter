import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllArticles, getArticleBySlug, getCategoryName, formatDate } from 'lib/articles';

export function generateStaticParams() {
    return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
    const article = getArticleBySlug(params.slug);
    if (!article) return {};
    return {
        title: article.title,
        description: article.excerpt
    };
}

export default function ArticlePage({ params }) {
    const article = getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    const paragraphs = article.content.split('\n\n');

    return (
        <article className="max-w-3xl mx-auto">
            <div className="mb-6">
                <Link href={`/category/${article.category}`} className="category-badge no-underline">
                    {getCategoryName(article.category)}
                </Link>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8 text-neutral-400">
                <span className="font-medium text-neutral-200">{article.author}</span>
                <span>·</span>
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                <span>·</span>
                <span>{article.readTime} min read</span>
            </div>

            <div className="mb-10 overflow-hidden rounded-lg aspect-video">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="article-body">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="pt-8 mt-12 border-t border-neutral-800">
                <Link href="/" className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300">
                    &larr; Back to all stories
                </Link>
            </div>
        </article>
    );
}
