import Link from 'next/link';
import { getCategories } from '../lib/articles';

export function CategoryNav({ activeCategory }) {
    const categories = getCategories();

    return (
        <nav className="flex flex-wrap gap-2">
            <Link
                href="/"
                className={`category-link no-underline ${!activeCategory ? 'category-link-active' : ''}`}
            >
                All
            </Link>
            {categories.map((cat) => (
                <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className={`category-link no-underline ${activeCategory === cat.slug ? 'category-link-active' : ''}`}
                >
                    {cat.name}
                </Link>
            ))}
        </nav>
    );
}
