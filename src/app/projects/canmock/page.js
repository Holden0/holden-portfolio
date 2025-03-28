"use client";

/* Optimize Image imports with better sizes */
import Image from "next/image";
import styles from "./canmock.module.css";
import NavbarSpecialBlue from "../../../components/NavbarSpecialBlue";
import FooterSpecialBlue from "../../../components/FooterSpecialBlue";
import ConnectSection from "../../../components/ConnectSection.js";
import ProjectCard from "../../../components/ProjectCard";
import CanMockSkillCard from "../../../components/CanMockSkillCard"; 
import { TransitionLink } from "../../../components/utils/TransitionLink";
import dynamic from 'next/dynamic';

const CanMock3D = dynamic(() => import('../../../components/CanMock3D'), { ssr: false });

export default function CanMock() {
  return (
    <div className={styles.pageWrapper}>
      <NavbarSpecialBlue />

      <div className={styles.content}>
        {/* Introduction paragraphs */}
        <div className={styles.paragraphRow}>
          <div className={styles.paragraphColumn}>
            <p className={`${styles.sectionText} ${styles.objectiveText}`}>
              The project objective was to create business ready mockups
              followed by packaged designs and consistent branding.
            </p>
          </div>
          <div className={styles.paragraphColumn}>
            <p className={`${styles.sectionText} ${styles.inspirationText}`}>
              Project drew inspiration from my dog Scoot, a naughty boy that
              always keeps me entertained with his behaviour. Mixing this with
              my love for craft beer Naughty Dog brewing was born
            </p>
          </div>
          <div className={styles.paragraphColumn}>
            <p className={`${styles.sectionText} ${styles.detailsText}`}>
              Project Role: Designer <br />
              Date: November 2024 <br />
              Deliverables: Print Files / Product Mockups <br />
            </p>
          </div>
        </div>

        <div className={styles.mainVisualSection}>
          <div className={styles.textImageContainer}>
            <Image
              src="/naughty-dog-text.webp"
              alt="NAUGHTY DOG"
              width={1200}
              height={300}
              sizes="100vw" 
              className={styles.textImage}
              priority
            />
          </div>

          <div className={styles.canImageContainer}>
            <CanMock3D />
          </div>
        </div>

        {/* New text section below the can mockup */}
        <div className={styles.infoSectionContainer}>
          <div className={styles.infoSection}>
            <h2 className={styles.infoHeading}>
              Craft Beer Branding & Can Mockups
            </h2>
            <p className={styles.infoText}>
              This product design project focused on creating a client-ready
              beverage can mockup, balancing aesthetics, functionality, and
              regulatory compliance. The objective was to design a visually
              appealing and market-ready can while adhering to Canadian beverage
              mandates. Key considerations included label requirements, printing measurements and
              bilingual packaging.
              <br />
              <br />
              The final design
              optimized branding, usability, and manufacturability, ensuring the
              can met both consumer appeal and industry standards for successful
              market placement.
            </p>

            {/* Project info lines with aligned label-value pairs */}
            <div className={styles.projectDetailsContainer}>
              <div className={styles.detailLine}>
                <span className={styles.detailLabel}>Project Role:</span>
                <span className={styles.detailValue}>Designer</span>
              </div>
              <div className={styles.detailLine}>
                <span className={styles.detailLabel}>Date:</span>
                <span className={styles.detailValue}>November 2024</span>
              </div>
              <div className={styles.detailLine}>
                <span className={styles.detailLabel}>Deliverables:</span>
                <span className={styles.detailValue}>
                  Print Files / Product Mockups
                </span>
              </div>
            </div>

            {/* Skills showcase section using the SkillCard component */}
            <h3 className={styles.skillsHeading}>Tools Used</h3>
            <div className={styles.skillCardsContainer}>
              <div className={styles.skillCards}>
                <div className={styles.card}>
                  <CanMockSkillCard
                    logoSrc="/psIcon.png"
                    title="Adobe Photoshop"
                  />
                </div>
                <div className={styles.card}>
                  <CanMockSkillCard
                    logoSrc="/aiIcon.png"
                    title="Adobe Illustrator"
                  />
                </div>
              </div>
            </div>

            {/* Full-width image below skill cards using Next.js Image component */}
            <div className={styles.fullWidthImageContainer}>
              <Image
                src="/dog-mockup01.webp"
                alt="Dog Mockup"
                width={1500}
                height={1500} // Assuming a 16:9 aspect ratio, adjust as needed
                sizes="100vw"
                className={styles.fullWidthImage}
              />
            </div>

            {/* Content section beneath the mockup image */}
            <div className={styles.mockupContentSection}>
              <h2 className={styles.mockupHeading}>Brand Development</h2>
              <h3 className={styles.mockupSubheading}>
                Playful yet Serious Design
              </h3>
              <p className={styles.mockupText}>
                Naughty Dog combines a playful spirit with a clean, modern
                design to attract beer drinkers who appreciate both fun and
                quality. The branding features bold yet minimalistic visuals,
                ensuring strong shelf appeal while maintaining a refined
                aesthetic. With simple typography and engaging imagery, Naughty
                Dog creates a memorable identity that stands out in the
                competitive beer market.
              </p>
            </div>
          </div>
        </div>

        {/* Move the all-can-design image outside the infoSection for full-width styling */}
        <div className={styles.fullWidthImageContainer}>
          <Image
            src="/all-can-design.webp"
            alt="All Can Design"
            width={3000}
            height={1200}
            sizes="100vw"
            className={styles.fullWidthImage}
          />
        </div>

        {/* Keep the can falling mockup inside infoSection with reduced top spacing */}
        <div
          className={styles.infoSectionContainer}
          style={{ marginTop: "4rem" }}
        >
          <div className={styles.infoSection}>
            <div className={styles.fullWidthImageContainer}>
              <Image
                src="/can-falling-mockup.webp"
                alt="Can Falling Mockup"
                width={2732}
                height={2972}
                sizes="100vw"
                className={styles.fullWidthImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add an ending section similar to Onward */}
      <div className={styles.endingSection}>
        <p>Enjoy? Check out my other projects</p>
      </div>

      <div className={styles.connectSection}>
        {/* <ConnectSection iconBackgroundColor="#535F7C" textColor="#8D8D93" /> */}
        <ConnectSection
          iconBackgroundColor="#535F7C"
          textColor="#ffffff"
          buttonBackgroundColor="#ffffff"
          buttonTextColor="#535F7C"
          customText="Connect with me!"
          containerStyle={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        />
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
      </div>

      <FooterSpecialBlue />
    </div>
  );
}
