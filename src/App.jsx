import { useContent } from './hooks/useContent';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { PageSkeleton } from './components/ui/Skeleton';
import styles from './App.module.css';

function ErrorState({ message, retryLabel, onRetry }) {
  return (
    <div className={styles.error} role="alert">
      <p className={styles.errorText}>{message}</p>
      <button type="button" className={styles.retry} onClick={onRetry}>
        {retryLabel}
      </button>
    </div>
  );
}

export default function App() {
  const { status, heroBundle, features, retry, ui } = useContent();

  if (status === 'loading') {
    return <PageSkeleton />;
  }

  if (status === 'error') {
    return (
      <ErrorState
        message={ui.errorMessage}
        retryLabel={ui.retryLabel}
        onRetry={retry}
      />
    );
  }

  return (
    <div className={styles.app}>
      <Header navigation={heroBundle.navigation} />
      <main className={styles.main}>
        <HeroSection hero={heroBundle.hero} />
        <FeaturesSection data={features} />
      </main>
      <footer id="contact" className={styles.footer} />
    </div>
  );
}
