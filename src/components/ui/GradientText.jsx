import styles from './GradientText.module.css';

export function GradientText({ children }) {
  return <span className={styles.gradient}>{children}</span>;
}
