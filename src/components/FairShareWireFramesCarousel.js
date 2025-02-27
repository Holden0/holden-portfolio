import { useState } from "react";
import styles from "./fairShareWireFramesCarousel.module.css"; // Import CSS module

const images = [
    "/fairshareCaraselImg01.png",
    "/fairshareCaraselImg02.png",
    "/fairshareCaraselImg03.png",
    "/fairshareCaraselImg04.png",
    "/fairshareCaraselImg05.png",
    "/fairshareCaraselImg06.png",
    "/fairshareCaraselImg07.png",
    "/fairshareCaraselImg08.png",
];

const Carousel = () => {
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

export default Carousel;
