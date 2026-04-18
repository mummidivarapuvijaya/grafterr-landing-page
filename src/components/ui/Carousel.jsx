import { useRef, useCallback, useLayoutEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { ProductCard } from './ProductCard';
import styles from './Carousel.module.css';

function ChevronLeft() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.5 19.5 8 12l7.5-7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m8.5 4.5 7.5 7.5-7.5 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Carousel({ products, carouselConfig }) {
  const itemCount = products.length;
  const {
    itemsPerView,
    showArrows,
    transitionMs,
    previousLabel,
    nextLabel,
  } = carouselConfig;

  const { index, visible, next, prev, canNext, canPrev } = useCarousel(
    itemCount,
    itemsPerView
  );

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const duration = transitionMs ?? 300;

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const apply = () => {
      const vw = viewport.offsetWidth;
      if (vw === 0) return;
      const v = Math.max(visible, 1);
      const itemWidth = vw / v;
      track.style.setProperty('--item-width', `${itemWidth}px`);
      const offset = -index * itemWidth;
      track.style.setProperty('--tx', `${offset}px`);
      track.style.setProperty('--carousel-duration', `${duration}ms`);
    };

    apply();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(apply);
      ro.observe(viewport);
      return () => ro.disconnect();
    }

    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [index, visible, itemCount, duration]);

  const touchStartX = useRef(null);

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const threshold = 50;
      if (dx > threshold && canPrev) prev();
      if (dx < -threshold && canNext) next();
      touchStartX.current = null;
    },
    [canNext, canPrev, next, prev]
  );

  return (
    <div className={styles.root}>
      <div
        ref={viewportRef}
        className={styles.viewport}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div ref={trackRef} className={styles.track}>
          {products.map((product) => (
            <div key={product.id} className={styles.item}>
              <ProductCard title={product.title} image={product.image} />
            </div>
          ))}
        </div>
      </div>

      {showArrows ? (
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.arrow}
            onClick={prev}
            disabled={!canPrev}
            aria-label={previousLabel}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={next}
            disabled={!canNext}
            aria-label={nextLabel}
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );
}
