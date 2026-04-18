import { GradientText } from '../ui/GradientText';
import { GradientButton } from '../ui/GradientButton';
import { FloatingShape } from '../ui/FloatingShape';
import { EmphasisText } from '../ui/EmphasisText';
import styles from './HeroSection.module.css';

export function HeroSection({ hero }) {
  const {
    headlinePrefix,
    headlineGradient,
    subheadline,
    cta,
    decorativeShapes,
  } = hero;

  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      {decorativeShapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          variant={shape.variant}
          color={shape.color}
        />
      ))}
      <div className={styles.inner}>
        <h1 className={styles.headline} id="hero-heading">
          {headlinePrefix}
          <GradientText>{headlineGradient}</GradientText>
        </h1>
        <p className={styles.subheadline}>
          <EmphasisText text={subheadline} />
        </p>
        <div className={styles.ctaRow}>
          <GradientButton id={cta.id} label={cta.label} href={cta.href} />
        </div>
      </div>
    </section>
  );
}
