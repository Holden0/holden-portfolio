'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './navBarSpecialBlue.module.css';
import { TransitionLink } from './utils/TransitionLink';

export default function NavbarSpecialBlue() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <TransitionLink href="/">
            <img src="/hb-logo.svg" alt="Logo" className={styles.logoImage} />
          </TransitionLink>
        </div>
        
        <button className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span className={styles.menuIcon}></span>
        </button>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <TransitionLink href="/about">ABOUT</TransitionLink>
          <a href="mailto:holdenmmbudiman@gmail.com">CONTACT ME</a> 
          <a href="/Holden_Budiman_Resume.pdf" download>RESUME</a> 
        </div>
      </div>
    </nav>
  );
}