'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

function getInitialTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    // Avoid hydration mismatch by syncing once mounted
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) {
        return <button aria-label="Toggle theme" className="h-9 w-9 rounded-md border border-black/[.08] dark:border-white/[.12]" />;
    }

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="h-9 w-9 rounded-md border border-black/[.08] dark:border-white/[.12] flex items-center justify-center hover:bg-black/[.04] dark:hover:bg-white/[.06]"
        >
            {theme === 'dark' ? <Icon icon="noto:sun" /> : <Icon icon="noto:crescent-moon" />}
        </button>
    );
}
