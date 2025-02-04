import React from "react";
import Image from "next/image";
import styles from "./connectSection.module.css"; 

const ConnectSection = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Connect with me!</span>
      <div className={styles.iconWrapper}>
        <a
          href="https://twitter.com/yourTwitterHandle" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.iconBackground}
        >
          <Image
            src="/twitter.svg"
            alt="Twitter"
            width={26}
            height={26}
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/holden-budiman" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.iconBackground}
        >
          <Image
            src="/linkedInLogo.svg"
            alt="LinkedIn"
            width={30}
            height={30}
            className={styles.icon}
          />
        </a>
      </div>
      <button className={styles.contactButton}>CONTACT ME</button>
    </div>
  );
};

export default ConnectSection;

