import React from 'react';
import styles from './ConnectSection.module.css';

export default function SocialConnect() {
  return (
    <div className={styles.connectSection}>
      <div className={styles.socialLinks}>
        <a 
          href="mailto:hello@holdenbudiman.com" 
          className={styles.socialLink}
        >
          <div className={styles.linkContent}>
            <span className={styles.linkIcon}>✉️</span>
            <span className={styles.linkText}>Email</span>
          </div>
        </a>
        <a 
          href="https://www.linkedin.com/in/holdenbudiman/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <div className={styles.linkContent}>
            <span className={styles.linkIcon}>🔗</span>
            <span className={styles.linkText}>LinkedIn</span>
          </div>
        </a>
        <a 
          href="https://www.instagram.com/holdenbudiman/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <div className={styles.linkContent}>
            <span className={styles.linkIcon}>📸</span>
            <span className={styles.linkText}>Instagram</span>
          </div>
        </a>
        <a 
          href="https://read.cv/holdenbudiman" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <div className={styles.linkContent}>
            <span className={styles.linkIcon}>📄</span>
            <span className={styles.linkText}>CV</span>
          </div>
        </a>
      </div>
    </div>
  );
}
