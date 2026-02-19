import Link from 'next/link';
import { getCategories } from '../lib/articles';

const categories = getCategories();

export function Header() {
    return (
        <header className="border-b border-neutral-800">
            <div className="flex items-center justify-between py-4">
                <Link href="/" className="no-underline">
                    <span className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                        The <span className="text-rose-500">Daily</span> Wire
                    </span>
                </Link>
                <div className="hidden text-sm text-neutral-400 sm:block">
                    {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>
            <nav className="flex gap-1 pb-3 overflow-x-auto -mx-1">
                <Link href="/" className="nav-link no-underline">
                    Home
                </Link>
                {categories.map((cat) => (
                    <Link key={cat.slug} href={`/category/${cat.slug}`} className="nav-link no-underline">
                        {cat.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
