import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Logo" className={styles.logoImage} /> {/* Add your logo here */}
      </div>
      
      {/* Navigation on the right */}
      <div className={styles.navLinks}>
        <Link href="/about">About</Link>
        <a href="mailto:your@email.com">Contact Me</a> {/* Opens email client */}
        <a href="/resume.pdf" download>Resume</a> {/* Download Resume */}
      </div>
    </nav>
  );
}
