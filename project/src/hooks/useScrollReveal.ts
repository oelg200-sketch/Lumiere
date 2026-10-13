import { useEffect, useRef, useState } from 'react';

/**
 * Reveals elements with the `.reveal-*` classes when they scroll into view.
 * Add `data-reveal` to any element with a `.reveal-*` class so the observer
 * picks it up. The element receives `.is-visible` once it enters the viewport.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
}

export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
