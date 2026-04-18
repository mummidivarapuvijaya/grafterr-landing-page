import styles from './Skeleton.module.css';

export function PageSkeleton() {
  return (
    <div data-testid="page-skeleton">
      <section className={styles.hero} aria-hidden="true">
        <div className={styles.heroInner}>
          <div className={`${styles.block} ${styles.lineLg}`} />
          <div className={`${styles.block} ${styles.lineMd}`} />
          <div className={`${styles.block} ${styles.btn}`} />
        </div>
      </section>
      <section className={styles.features} aria-hidden="true">
        <div className={styles.featuresInner}>
          <div className={`${styles.block} ${styles.title}`} />
          <div className={`${styles.block} ${styles.sub}`} />
          <div className={`${styles.block} ${styles.divider}`} />
          <div className={styles.cards}>
            <div className={`${styles.block} ${styles.card}`} />
            <div className={`${styles.block} ${styles.card}`} />
            <div className={`${styles.block} ${styles.card}`} />
          </div>
        </div>
      </section>
    </div>
  );
}
