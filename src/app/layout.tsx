import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeToggle from './theme-toggle';
import Link from 'next/link';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Austin Richburg — Senior Software Engineer',
    description: 'Senior Software Engineer specializing in scalable web platforms, DX, and cloud-native systems.',
    metadataBase: new URL('https://example.com'),
    openGraph: {
        title: 'Austin Richburg — Senior Software Engineer',
        description: 'Senior Software Engineer specializing in scalable web platforms, DX, and cloud-native systems.',
        type: 'website',
        url: 'https://example.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Austin Richburg — Senior Software Engineer',
        description: 'Senior Software Engineer specializing in scalable web platforms, DX, and cloud-native systems.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black`}>
                <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-black/[.08] dark:border-white/[.12]">
                    <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="font-semibold tracking-tight dark:text-white">
                            Austin Richburg
                        </Link>
                        <div className="flex items-center gap-4">
                            <nav className="hidden md:flex items-center gap-6 text-sm">
                                <a href="#experience" className="hover:underline underline-offset-4 dark:text-white">
                                    Experience
                                </a>
                                <a href="#projects" className="hover:underline underline-offset-4 dark:text-white">
                                    Projects
                                </a>
                                <a href="#skills" className="hover:underline underline-offset-4 dark:text-white">
                                    Skills
                                </a>
                            </nav>
                            <ThemeToggle />
                        </div>
                    </div>
                </header>
                <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
                <footer className="border-t border-black/[.08] dark:border-white/[.12]">
                    <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
                        <span>© {new Date().getFullYear()} Austin Richburg</span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
