import React from "react";
import styles from "./canMockSkillCard.module.css";

const CanMockSkillCard = ({ logoSrc, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logoSrc} alt={title} className={styles.logo} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default CanMockSkillCard;
