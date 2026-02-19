import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | The Daily Wire',
        default: 'The Daily Wire - Breaking News & Analysis'
    },
    description: 'Your trusted source for breaking news, in-depth analysis, and stories that matter.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-neutral-950">
                <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col w-full max-w-6xl mx-auto grow">
                        <Header />
                        <main className="py-8 grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
