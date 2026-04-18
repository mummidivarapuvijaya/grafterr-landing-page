import { parseBoldSegments } from '../../utils/parseEmphasis';
import styles from './EmphasisText.module.css';

export function EmphasisText({ text, className = '' }) {
  const segments = parseBoldSegments(text);

  return (
    <span className={className}>
      {segments.map((seg, i) =>
        seg.type === 'bold' ? (
          <strong key={i} className={styles.strong}>
            {seg.text}
          </strong>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </span>
  );
}
