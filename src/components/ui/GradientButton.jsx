import styles from './GradientButton.module.css';

export function GradientButton({ label, href, id }) {
  return (
    <a id={id} className={styles.button} href={href}>
      {label}
    </a>
  );
}
