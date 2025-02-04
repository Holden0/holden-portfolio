import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/hb-logo.svg" alt="Logo" className={styles.logoImage} /> 
      </div>
      
      <div className={styles.navLinks}>
        <Link href="/about">ABOUT</Link>
        <a href="mailto:your@email.com">CONTACT ME</a> 
        <a href="/resume.pdf" download>RESUME</a> 
      </div>
    </nav>
  );
}
