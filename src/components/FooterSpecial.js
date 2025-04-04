import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footerSpecial.module.css";
import { TransitionLink } from "./utils/TransitionLink";

const FooterSpecial = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
        <TransitionLink href="/">
            <img src="/hb-logo-dark.svg" alt="Logo" className={styles.logoImage} />
          </TransitionLink>
        </div>
        <nav className={styles.navLinks}>
          <TransitionLink href="/about" className={styles.link}>ABOUT</TransitionLink>
          <Link href="mailto:holdenmmbudiman@gmail.com" className={styles.link}>CONTACT ME </Link>
          <a href="/Holden_Budiman_Resume.pdf" download className={styles.link}>RESUME</a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterSpecial;
