'use client';
import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Provider({ children }: { children: React.ReactNode }) {
  const DELAY_TIME = 500;

  const handleResize = useDebouncedCallback(() => {
    const windowHeight = window.innerHeight;
    document.documentElement.style.setProperty(
      '--fullHeight',
      `${windowHeight.toString()}px`
    );
  }, DELAY_TIME);

  useEffect(() => {
    handleResize();
    addEventListener('resize', handleResize);
    return () => {
      removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
}
