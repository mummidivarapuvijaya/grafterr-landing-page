import styles from './Header.module.css';

export function Header({ navigation }) {
  const { logo, links, cta } = navigation;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/">
          <img className={styles.logo} src={logo.src} alt={logo.alt} />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.id} id={link.id} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a id={cta.id} className={styles.cta} href={cta.href}>
          {cta.label}
        </a>
      </div>
    </header>
  );
}
