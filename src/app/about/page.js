import Image from "next/image";
import styles from "./about.module.css";
import Navbar from "../../components/Navbar";
import ConnectSection from "../../components/ConnectSection";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import SkillCard from "../../components/SkillCard";
import HobbiesCard from "../../components/HobbiesSection";



export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.headingSection01}>
            <div className={styles.pfp}>
            <Image 
                src="/face-shot.png" 
                alt="Headshot"
                width={90} 
                height={90}
                className={styles.heroImage}
              />
            </div>
            <div className={styles.headingText}>
                <h1>
                    <span className={styles.name}>HOLDEN</span> BUDIMAN
                </h1>
                <p>
                    Vancouver, Canada
                </p>
            </div>
            </div>
            <div className={styles.bio}>
                <p>
                    Hi, I’m Holden Budiman! I’m a UX designer from Vancouver, Canada, with a passion for creating meaningful digital experiences. My design journey began with fashion and painting, where I developed a strong creative foundation and an eye for aesthetics.
                </p>
                <p>
                    When I entered college, I discovered UX design and found my calling in crafting apps and interfaces that make life easier for others. I have strong leadership skills and thrive in collaborative team environments. From brainstorming ideas to designing, coding, and managing timelines, I’ve gained hands-on experience bringing projects to life from scratch.
                </p>
            </div>
            <div className={styles.educationSection}>
                <h1>EDUCATION</h1>
                <div className={styles.school}>
                    <p>British Columbia Institute of Technology</p>
                </div>
                <div className={styles.program}>
                    <p>Digital Design & Development Diploma</p>
                </div>
                <div className={styles.date}>
                    <p>2023-2025</p>
                </div>
            </div>
            <div className={styles.skillsSection}>
                <div className={styles.skillsTitle}>
                    <h1>MY TECH STACK</h1>
                    <p>Technology I actively use and am comfortable with </p>
                </div>
                <div className={styles.skillCardsContainers}>
                    <p>Design Tech</p>
                    <div className={styles.skillCards}>
                        <div className={styles.card}><SkillCard logoSrc="/psIcon.png" title="Adobe Photoshop" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/aiIcon.png" title="Adobe Illustrator" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/idIcon.png" title="Adobe Indesign" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/aeIcon.svg" title="Adobe After Effects" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/figmaIcon.svg" title="Figma" /></div>
                    </div>
                    <p>Development Tech</p>
                    <div className={styles.skillCards}>
                        <div className={styles.card}><SkillCard logoSrc="/jsIcon.png" title="Javascript" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/cssIcon.png" title="CSS" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/htmlIcon.png" title="HTML" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/ghIcon.png" title="GitHub" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/nextjsIcon.svg" title="Next.js" /></div>
                        <div className={styles.card}><SkillCard logoSrc="/rjsIcon.svg" title="React js" /></div>
                    </div>
                </div>
            </div>
            <div className={styles.hobbiesContainer}>
            <HobbiesCard />
            </div>
        <ConnectSection />
      </div>
      <Footer />
    </div>
  );
}
