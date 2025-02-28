import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import SocialConnect from "../components/ConnectSection";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { TransitionLink } from "../components/utils/TransitionLink";

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.headingSection}>
          <div className={styles.heading01}>
            <div className={styles.text}>
              <h1>MOBILE & WEB</h1>
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
              I'm Holden Budiman - a ux designer specializing in creating
              seamless user experience for modern web and mobile applications
            </h5>
          </div>
          {/* <div className={styles.pointer}>
            <Image
              src="/pointer.svg"
              alt="Figma Pointer"
              width={115}
              height={75.96}
              className={styles.pointer_icon}
            />
          </div> */}
        </div>
        <SocialConnect />
      </div>
      <div className={styles.projectSection}>
        <div className={styles.project}>
          <TransitionLink href="/projects/fairshare">
            <ProjectCard
              title="Bill Splitting App"
              date="2024/2025"
              info="Mobile/Tablet"
              imageSrc="/fairshare-mockup02.webp"
              backgroundColor="#252323"
              titleColor="#FFFFFF"
              dateColor="#8D8D93"
              infoColor="#8D8D93"
            />
          </TransitionLink>
        </div>
        <div className={styles.project}>
          <TransitionLink href="/projects/onward">
            <ProjectCard
              title="Mock Interview App"
              date="2024/2025"
              info="Web"
              imageSrc="/onward-mockup.webp"
              backgroundColor="#FAFAFA"
              titleColor="#000000"
              dateColor="#8D8D93"
              infoColor="#8D8D93"
            />
          </TransitionLink>
        </div>
        <div className={styles.project}>
          <ProjectCard
            title="In Development"
            date="XXXX"
            info="XXXX, XXXXX"
            imageSrc="/neighbourly-mockup.webp"
            backgroundColor="#252323"
            titleColor="#FFFFFF"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
        </div>
        <div className={styles.project}>
          <TransitionLink href="/projects/drawings">
          <ProjectCard
            title="Other Work"
            date="2024/2025"
            info="Product Design, Graphic Design"
            imageSrc="/otherWork.webp"
            backgroundColor="#FFFFFF"
            // backgroundColor="#FAFAFA"
            titleColor="#000000"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
          </TransitionLink>
        </div>
        
        {/* <div className={styles.project}>
          <ProjectCard
            title="Other Work"
            date="2024/2025"
            info="Product Design, Graphic Design"
            imageSrc="/otherWork.webp"
            backgroundColor="#FFFFFF"
            // backgroundColor="#FAFAFA"
            titleColor="#000000"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
        </div> */}
        {/* <div className={styles.project}>
          <ProjectCard
            title="Naughty Dog Brewing"
            date="2024/2025"
            info="Product Design, Graphic Design"
            imageSrc="/naughty-dog-mockup.webp"
            backgroundColor="#45516C"
            // backgroundColor="#FAFAFA"
            titleColor="#F9F9F9"
            dateColor="#DDDDE1"
            infoColor="#DDDDE1"
          />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
