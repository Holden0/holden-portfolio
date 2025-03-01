// ConnectSection.jsx
import React from "react";
import Image from "next/image";
import styles from "./connectSection.module.css";

const ConnectSection = ({ iconBackgroundColor, textColor }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.containerLeft}>
          <div className={styles.iconWrapper}>
            <span className={styles.text} style={{ color: textColor }}>Connect with me!</span>
            <div className={styles.socialLinks}>
              <a
                href="https://www.behance.net/holdenbudiman"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBackground}
                style={{ backgroundColor: iconBackgroundColor }}
              >
                <Image
                  src="/behance-logo.svg"
                  alt="behance"
                  width={30}
                  height={30}
                  className={styles.icon}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/holden-budiman"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBackground}
                style={{ backgroundColor: iconBackgroundColor }}
              >
                <Image
                  src="/linkedIn.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
        <a href="mailto:holdenmmbudiman@gmail.com">
          <button className={styles.contactButton} style={{ color: textColor }}>
         CONTACT ME
          </button>
        </a> 
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;