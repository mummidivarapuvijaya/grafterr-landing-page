import styles from './FloatingShape.module.css';

const variantClass = {
  blob: styles.blob,
  bar: styles.bar,
};

const colorClass = {
  teal: styles.teal,
  coral: styles.coral,
};

export function FloatingShape({ variant, color }) {
  return (
    <span
      className={`${styles.shape} ${variantClass[variant]} ${colorClass[color]}`}
      aria-hidden="true"
    />
  );
}
