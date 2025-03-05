// ConnectSection.jsx
import React from "react";
import Image from "next/image";
import styles from "./connectSection.module.css";

const ConnectSection = ({
  // Default props with undefined values to use CSS defaults when not specified
  iconBackgroundColor,
  textColor,
  buttonBackgroundColor,
  buttonTextColor,
  containerPadding,
  containerStyle,
  contentStyle,
  iconSize,
  customText
}) => {
  return (
    <div 
      className={styles.container}
      style={{ 
        padding: containerPadding,
        ...containerStyle 
      }}
    >
      <div 
        className={styles.content}
        style={{ ...contentStyle }}
      >
        <div className={styles.containerLeft}>
          <div className={styles.iconWrapper}>
            <span 
              className={styles.text} 
              style={{ color: textColor || "" }}
            >
              {customText || "Connect with me!"}
            </span>
            <div className={styles.socialLinks}>
              <a
                href="https://www.behance.net/holdenbudiman"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBackground}
                style={{ backgroundColor: iconBackgroundColor || "" }}
              >
                <Image
                  src="/behance-logo.svg"
                  alt="behance"
                  width={iconSize || 30}
                  height={iconSize || 30}
                  className={styles.icon}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/holden-budiman"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBackground}
                style={{ backgroundColor: iconBackgroundColor || "" }}
              >
                <Image
                  src="/linkedIn.svg"
                  alt="LinkedIn"
                  width={iconSize ? (iconSize * 0.8) : 24}
                  height={iconSize ? (iconSize * 0.8) : 24}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <a href="mailto:holdenmmbudiman@gmail.com">
            <button 
              className={styles.contactButton} 
              style={{ 
                color: buttonTextColor || "",
                backgroundColor: buttonBackgroundColor || ""
              }}
            >
              CONTACT ME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;