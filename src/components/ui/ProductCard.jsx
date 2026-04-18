import styles from './ProductCard.module.css';

export function ProductCard({ title, image }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={image.src}
          alt={image.alt}
          loading="lazy"
        />
      </div>
    </article>
  );
}
