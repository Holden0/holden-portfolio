"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavbarSpecial from "../../../components/NavbarSpecial";
import FooterSpecial from "../../../components/FooterSpecial";
import ConnectSection from "../../../components/ConnectSection.js";
import ProjectCard from "../../../components/ProjectCard";
import { useEffect, useState } from "react";

export default function Drawings() {

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.content}>
        <NavbarSpecial />
        <div className={styles.content}>
          <div className={styles.galleryContainer}>
            <h1 className={styles.galleryTitle}>ARTWORK COLLECTION</h1>

            <p className={styles.galleryDescription}>
            A showcase of highlights from my personal digital drawings, offering a glimpse into my design style and creative identity.
            </p>

            <div className={styles.galleryVertical}>
              <div className={styles.artworkItemLarge}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/anatomy-face.webp"
                    alt="Drawing 2"
                    width={900}
                    height={1200}
                    className={styles.artworkImageLarge}
                    quality={90}
                  />
                </div>
                <p className={styles.artworkCaption}>Portrait Study</p>
              </div>

              <div className={styles.artworkItemLarge}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/tribe-drawing.webp"
                    alt="Drawing 3"
                    width={900}
                    height={1200}
                    className={styles.artworkImageLarge}
                    quality={90}
                  />
                </div>
                <p className={styles.artworkCaption}>Landscape Exploration</p>
              </div>
              <div className={styles.artworkItemLarge}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/face-drawing.webp"
                    alt="Drawing 1"
                    width={900}
                    height={1200}
                    className={styles.artworkImageLarge}
                    quality={90}
                  />
                </div>
                <p className={styles.artworkCaption}>Abstract Composition #1</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.endingSection}>
          <p>Enjoy? Check out my other projects</p>
        </div>
        <div className={styles.connectSection}>
          <ConnectSection
            iconBackgroundColor="#E2E2E200"
            textColor="#8D8D93"
          />
        </div>
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
          <ProjectCard
            title="Community Marketplace"
            date="2023"
            info="Mobile, Web, Tablet"
            imageSrc="/neighbourly-mockup.webp"
            backgroundColor="#252323"
            titleColor="#FFFFFF"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
        </div>
      </div>
      <FooterSpecial />
    </div>
  );
}