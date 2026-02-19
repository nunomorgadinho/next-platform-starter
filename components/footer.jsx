import Link from 'next/link';
import { getCategories } from '../lib/articles';

export function Footer() {
    const categories = getCategories();
    const year = new Date().getFullYear();

    return (
        <footer className="pt-12 pb-8 mt-16 border-t border-neutral-800">
            <div className="grid gap-8 sm:grid-cols-3">
                <div>
                    <Link href="/" className="no-underline">
                        <span className="text-xl font-black tracking-tight text-white">
                            The <span className="text-rose-500">Daily</span> Wire
                        </span>
                    </Link>
                    <p className="mt-2 text-sm text-neutral-400">
                        Your trusted source for breaking news, in-depth analysis, and stories that matter.
                    </p>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-neutral-300">Categories</h4>
                    <ul className="space-y-2">
                        {categories.map((cat) => (
                            <li key={cat.slug}>
                                <Link href={`/category/${cat.slug}`} className="text-sm text-neutral-400 hover:text-white no-underline">
                                    {cat.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-neutral-300">About</h4>
                    <ul className="space-y-2">
                        <li>
                            <span className="text-sm text-neutral-400">Contact Us</span>
                        </li>
                        <li>
                            <span className="text-sm text-neutral-400">Privacy Policy</span>
                        </li>
                        <li>
                            <span className="text-sm text-neutral-400">Terms of Service</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 mt-8 text-sm text-center border-t border-neutral-800 text-neutral-500">
                &copy; {year} The Daily Wire. All rights reserved.
            </div>
        </footer>
    );
}
