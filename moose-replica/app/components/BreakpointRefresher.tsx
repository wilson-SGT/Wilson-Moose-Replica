'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';

const BREAKPOINT = 767;

export default function BreakpointRefresher({ children }: { children: ReactNode }) {
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINT}px)`);

        const handleChange = () => {
            window.location.reload();
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return children;
}
