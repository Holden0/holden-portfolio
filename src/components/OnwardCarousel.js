import { useState } from "react";
import styles from "./onwardCarousel.module.css"; // Import CSS module

const images = [
    "/onward-carousel01.png",
    "/onward-carousel02.png",
    "/onward-carousel03.png",
    "/onward-carousel04.png",
    "/onward-carousel05.png",
    "/onward-carousel06.png",

];

const OnwardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>

      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className={`${styles.button} ${styles.prev}`} onClick={prevSlide}>&#10094;</button>
    <button className={`${styles.button} ${styles.next}`} onClick={nextSlide}>&#10095;</button>     
    </div>
  );
};

export default OnwardCarousel;

