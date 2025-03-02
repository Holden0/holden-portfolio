"use client";

/* Optimize Image imports with better sizes */
import Image from "next/image";
import styles from "./canmock.module.css";
import NavbarSpecialBlue from "../../../components/NavbarSpecialBlue";
import FooterSpecial from "../../../components/FooterSpecial";
import ConnectSection from "../../../components/ConnectSection.js";
import ProjectCard from "../../../components/ProjectCard";

export default function CanMock() {
  return (
    <div className={styles.pageWrapper}>
      <NavbarSpecialBlue />

      <div className={styles.content}>
        {/* Introduction paragraphs */}
        <div className={styles.paragraphRow}>
          <div className={styles.paragraphColumn}>
            <p className={styles.sectionText}>
              The project objective was to create business ready mockups
              followed by packaged designs and consistent branding.
            </p>
          </div>
          <div className={styles.paragraphColumn}>
            <p className={styles.sectionText}>
              Project drew inspiration from my dog Scoot, a naughty boy that
              always keeps me entertained with his behaviour. Mixing this with
              my love for craft beer Naughty Dog brewing was born
            </p>
          </div>
          <div className={styles.paragraphColumn}>
            <p className={styles.sectionText}>
              Project Role: Designer <br/>
              Date: November 2024  <br/>
              Deliverables: Print Files / Product Mockups  <br/>
            </p>
          </div>
        </div>

        {/* Main visual section - optimized image sizes */}
        <div className={styles.mainVisualSection}>
          <div className={styles.textImageContainer}>
            <Image
              src="/naughty-dog-text.webp"
              alt="NAUGHTY DOG"
              width={1200}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px" // Add responsive sizing
              className={styles.textImage}
              priority
            />
          </div>

          <div className={styles.canImageContainer}>
            <Image
              src="/can_mock.png"
              alt="CanMock Product"
              width={1350} // Match the max-width in CSS
              height={1350} // Maintain aspect ratio
              sizes="(max-width: 480px) 80vw, (max-width: 768px) 85vw, (max-width: 992px) 90vw, (max-width: 1200px) 95vw, 1350px" // Add responsive sizing
              className={styles.canImage}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.connectSection}>
        <ConnectSection iconBackgroundColor="#E2E2E200" textColor="#8D8D93" />
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.project}>
          <a href="/projects/fairshare">
            <ProjectCard
              title="Bill Splitting App"
              date="2024/2025"
              info="Web"
              imageSrc="/fairshare-mockup02.webp"
              backgroundColor="#252323"
              titleColor="#FFFFFF"
              dateColor="#8D8D93"
              infoColor="#8D8D93"
            />
          </a>
        </div>
        <div className={styles.project}>
          <a href="/projects/drawings">
            <ProjectCard
              title="Artwork Collection"
              date="2020-2023"
              info="Digital Art"
              imageSrc="/anatomy-face.webp"
              backgroundColor="#252323"
              titleColor="#FFFFFF"
              dateColor="#8D8D93"
              infoColor="#8D8D93"
            />
          </a>
        </div>
      </div>

      <FooterSpecial />
    </div>
  );
}
