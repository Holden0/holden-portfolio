import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import SocialConnect from "../components/ConnectSection";
import ProjectCard from "../components/ProjectCard";



export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.headingSection}>
          <div className={styles.heading01}>
            <div className={styles.text}>
              <h1>
                  MOBILE & WEB 
              </h1>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/face-shot.png" 
                alt="Headshot"
                width={64} 
                height={64}
                className={styles.heroImage}
              />
            </div>
          </div>
          <div className={styles.heading02}>
          <div className={styles.text}>
            <h1>
               <span className={styles.yellowText}>UX</span> DESIGNER
            </h1>
          </div>
          </div>
          <div className={styles.headingBody}>
            <h5>
              I'm Holden Budiman - a ux designer specializing in creating seamless user expierence for modern web and mobile applications
            </h5>
          </div>
        </div>
        <SocialConnect />
      </div>
      <div className={styles.projectSection}>
          <div className={styles.project}>
          <ProjectCard
            title="Bill Splitting App"
            date="2024/2025"
            info="Web"
            imageSrc="/fairshare-mockup01.png"
            backgroundColor="#252323"
            titleColor="#FFFFFF"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
          </div>
          <div className={styles.project}>
          <ProjectCard
            title="Mock Interview App"
            date="2024/2025"
            info="Mobile, Web, Tablet"
            imageSrc="/onward-mockup.png"
            backgroundColor="#FAFAFA"
            titleColor="#000000"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
          </div>
          <div className={styles.project}>
          <ProjectCard
            title="Community Marketplace"
            date="2023"
            info="Mobile, Web, Tablet"
            imageSrc="/neighbourly-mock.png"
            backgroundColor="#357C77"
            titleColor="#FFFFFF"
            dateColor="#161616"
            infoColor="#161616"
          />
          </div>
          <div className={styles.project}>
          <ProjectCard
            title="Mock Interview App"
            date="2024/2025"
            info="Mobile, Web, Tablet"
            imageSrc="/onward-mockup.png"
            backgroundColor="#FAFAFA"
            titleColor="#000000"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
          </div>
      </div>
    </div>
  );
}
