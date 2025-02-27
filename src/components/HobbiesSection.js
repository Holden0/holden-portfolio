import Link from 'next/link';
import styles from './hobbiesSection.module.css';

export default function HobbiesCard() {
  return (
    <div className={styles.cardContainer}>
        <h1>HOBBIES AND INTERESTS</h1>
        <div className={styles.row01}>
        <div className={styles.card01}>
                <p>PAINTING</p>
            </div>
            <div className={styles.card}>
                <p>SKIING</p>
            </div>
            <div className={styles.card}>
                <p>FASHION</p>
            </div>
        </div>
        <div className={styles.row02}>
        <div className={styles.card}>
                <p>SURFING</p>
            </div>
            <div className={styles.card}>
                <p>DIGITAL DESIGN</p>
            </div>
            <div className={styles.card02}>
                <p>TRAVELING</p>
            </div>
        </div>
        <div className={styles.row03}>
            <div className={styles.card04}>
                <p>MY DOG ULU</p>
            </div>
            <div className={styles.card03}>
                <p>WILDLIFE</p>
            </div>
            <div className={styles.card}>
                <p>CHESS</p>
            </div>
        </div>


    </div>
  );
}
