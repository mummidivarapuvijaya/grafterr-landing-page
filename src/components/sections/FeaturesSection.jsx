import { Carousel } from '../ui/Carousel';
import { EmphasisText } from '../ui/EmphasisText';
import styles from './FeaturesSection.module.css';

export function FeaturesSection({ data }) {
  const { title, titleAccent, subtitle, products, carousel } = data;

  return (
    <section
      id="features"
      className={styles.section}
      aria-labelledby="features-heading"
    >
      <span id="solutions" className="sr-only" />
      <div className={`${styles.inner} ${styles.anchor}`}>
        <h2 className={styles.title} id="features-heading">
          <span className={styles.titleRow}>
            <EmphasisText text={title} />
            <span className={styles.titleAccent}>{titleAccent}</span>
          </span>
        </h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.divider} role="presentation" />
        <div className={styles.carousel}>
          <Carousel products={products} carouselConfig={carousel} />
        </div>
      </div>
    </section>
  );
}
