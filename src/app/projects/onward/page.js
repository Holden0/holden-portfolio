"use client";

import Image from "next/image";
import styles from "./onward.module.css";
import NavbarSpecial from "../../../components/NavbarSpecial";
import FooterSpecial from "../../../components/FooterSpecial";
import ProjectInfo from "../../../components/ProjectInfo.js";
import OnwardCarousel from "../../../components/OnwardCarousel";
import { useState } from "react";
import Link from "next/link";
import ConnectSection from "../../../components/ConnectSection.js";
import ProjectCard from "../../../components/ProjectCard.js";
import SideNavigation from "../../../components/SideNavigation.js";
import { TransitionLink } from "../../../components/utils/TransitionLink";

export default function Onward() {
  return (
    <div className={styles.pageWrapper}>
      <NavbarSpecial />
      <div className={styles.content}>
        <h3 className={styles.projectName}>Onward</h3>
        <div className={styles.caseStudyIntro}>
          <div className={styles.leftColumn}>
            <Image
              src="/onward-logo-main.svg"
              alt="Project Logo"
              width={86.15}
              height={83.96}
              className={styles.logo}
            />
            <h1 className={styles.title}>
              AI Powered Interview <br /> Coach for Immigrant Nurses
            </h1>
            <p className={styles.description}>
              Onwards is a web application tailored to immigrant nurses
              preparing for interviews in North America. It offers AI-driven
              mock interviews, tailored questions based on job listing and
              resume, customizable question sets, and insightful feedback to
              build confidence and bridge cultural and language gaps.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <Image
              src="/onward-mockup02.png"
              alt="Mockup"
              width={5282}
              height={5099}
              className={styles.mockup}
            />
          </div>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descContent}>
            <Image
              src="/onward-Desc.svg"
              alt="description table"
              width={860}
              height={290}
            />
          </div>
        </div>
        <SideNavigation
          activeColor="#201E1E"
          inactiveColor="#BEBEBE"
          textColor="#555555"
          numberColor="#ffffff"
          circleBackgroundColor="#BEBEBE"
        />
        <div className={styles.projectContent}>
          <div className={styles.my_role_column}>
            <div className={styles.heading_inter_24_medium01}>
              <p>My Role & Responsibility</p>
            </div>
            <div className={styles.body_inter_16_regular01}>
              <p>
                I led the development of Onward, collaborating closely with a
                team of seven to bring the project from ideation to completion.
                As Project Lead, I managed timelines, sprints, and weekly
                objectives, fostering collaboration and ensuring alignment at
                every stage.
              </p>
              <p className={styles.paragraph_text_top_spacing}>
                In addition to leadership responsibilities, I contributed to
                UI/UX design and frontend development, prioritizing an intuitive
                and accessible user experience. By addressing challenges such as
                underemployment and interview anxiety, the app empowers
                underrepresented communities to confidently pursue roles in the
                Canadian healthcare system.
              </p>
            </div>
          </div>
          <div className={styles.mockup_top01}>
            <Image
              src="/onward-mockup-top.png"
              alt="Project Logo"
              width={5232}
              height={2820}
            />
          </div>
          <div
            id="problem-statment"
            className={styles.heading_degular_36_light_problem}
          >
            <p>PROBLEM STATMENT</p>
          </div>
          <div className={styles.problem_section}>
            <div className={styles.problem_section_left}>
              <div className={styles.heading_inter_24_medium_problem}>
                <p>Why Immigrant Nurses Struggle in the Hiring Process</p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>Understanding User Pain Points</p>
              </div>
            </div>
            <div className={styles.problem_section_right}>
              <div className={styles.body_inter_16_regular}>
                <p>
                  Securing employment in Canada’s healthcare sector is
                  challenging for internationally educated nurses (IENs).
                  Despite strong qualifications and experience, these nurses
                  face significant hurdles often due to communication barriers.
                  Our survey found that over 60% of IENs identified
                  communication skills as a major barrier to employment. This
                  highlights the need for targeted resources to help these
                  nurses navigate the Canadian healthcare system and improve
                  their communication abilities.
                </p>
                <p className={styles.paragraph_text_top_spacing}>
                  Research indicates that immigrants comprise 25% of the
                  Canadian nursing workforce, yet nearly 50% of IENs are
                  overqualified for their current roles. These nurses often find
                  it difficult to adapt to Canadian healthcare protocols and
                  properly represent themselves. There is a pressing need for an
                  application that addresses these challenges and supports these
                  nurses in successfully entering the workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quote}>
          <p>
            <span className={styles.quotation01}>"</span>
            "44% of internationally educated healthcare workers are
            overqualified for their current position"
            <span className={styles.quotation02}>"</span>
          </p>
        </div>
        <div className={styles.mockup_top02}>
          <Image
            src="/onward-brochure-grey.png"
            alt="Project Logo"
            width={4500}
            height={3000}
          />
        </div>
        <div className={styles.projectContent}>
          <div
            id="research-phase"
            className={styles.heading_degular_36_light_research}
          >
            <p>RESEARCH</p>
          </div>
          <div className={styles.research_section_container}>
            <div className={styles.research_section_column_left}>
              <div className={styles.heading_inter_24_medium_research}>
                <p>Research Phase</p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>Exploring User Insights to Shape Design Choices</p>
              </div>
            </div>
            <div className={styles.research_section_column_right}>
              <div className={styles.body_inter_20_semibold_research}>
                <p>User Surveys</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  In the research phase, we conducted user surveys to gather
                  insights from healthcare professionals regarding their
                  interview preparation needs. The surveys targeted a diverse
                  group, including both immigrant and non-immigrant nurses,
                  focusing on their experiences and challenges faced during job
                  interviews. Participants highlighted common issues such as the
                  unpredictability of interview questions and the lack of
                  structured preparation resources. This feedback is crucial as
                  it helps us identify key pain points and informs the design of
                  our interview preparation tool, ensuring it effectively
                  addresses the specific needs and concerns of these users.
                </p>
                <p>
                  <a
                    href="https://docs.google.com/document/d/1ZqR6Jtu2dRZvhLB1_ZXcYQwP4pJcqlPItAxPrDCyNLY/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Research Paper
                  </a>
                </p>
              </div>
              <div className={styles.body_inter_20_semibold}>
                <p>Competitor Analysis</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  In our competitor analysis, we conducted secondary research to
                  uncover the key pain points immigrants face when seeking
                  employment in Canada, particularly during the job interview
                  process. We evaluated existing competitors like Yoodli, VMock,
                  and InterviewMe, identifying gaps we could fill with our
                  solution. Our research focused on sectors where immigrants
                  struggle the most, such as trades, IT, and healthcare,
                  allowing us to refine our target audience. Utilizing academic
                  studies, government reports, and social media insights, we
                  gathered valuable data on immigrant experiences, ensuring our
                  solution stands out by providing tailored support for
                  immigrant job seekers.
                </p>
              </div>
              <div className={styles.body_inter_20_semibold}>
                <p>User Personas</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  We developed primary and secondary user personas to capture
                  the experiences of immigrant job seekers. The primary persona
                  is a nurse currently seeking employment in Canada, navigating
                  credential recognition and communication challenges. The
                  secondary persona is a registered nurse already employed,
                  facing issues related to adapting to the Canadian healthcare
                  system. These personas guide our solution development to
                  effectively address their specific needs.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.personas}>
            <div className={styles.personaLeft}>
              <p>Persona: Primary</p>
              <Image
                src="/onward-userPersonaLeft.png"
                alt="Persona 1"
                width={1400}
                height={1812}
              />
            </div>
            <div className={styles.personaRight}>
              <p>Persona: Primary</p>
              <Image
                src="/onward-userPersonaRight.png"
                alt="Persona 1"
                width={1400}
                height={1812}
              />
            </div>
          </div>
          <div className={styles.personas}>
            <div className={styles.personaLeft}>
              <p>Persona: Secondary</p>
              <Image
                src="/onward-userPersonaLeft02.png"
                alt="Persona 1"
                width={1400}
                height={1812}
              />
            </div>
            <div className={styles.personaRight}>
              <p>Persona: Secondary</p>
              <Image
                src="/onward-userPersonaRight02.png"
                alt="Persona 1"
                width={1400}
                height={1812}
              />
            </div>
          </div>
          <div className={styles.key_findings_container}>
            <div className={styles.key_findings_container_left}>
              <div className={styles.heading_inter_24_medium_no_margin}>
                <p>Key Findings</p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>3 Key Insights from Our Survey</p>
              </div>
            </div>
            <div className={styles.key_findings_container_right}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>1. Communication Barriers </p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  respondents identified communication as a significant obstacle
                  during the job interview process. Immigrants often face
                  challenges in articulating their qualifications and
                  experiences, particularly when English is not their first
                  language. This difficulty can hinder their ability to
                  effectively respond to interview questions, impacting their
                  overall confidence and performance.
                </p>
              </div>
              <div className={styles.body_inter_20_semibold}>
                <p>2. Lack of Familiarity with Canadian Interview Norms</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  Survey participants highlighted their unfamiliarity with
                  Canadian interview expectations and cultural norms. Many
                  expressed uncertainty about what employers prioritize during
                  interviews, such as soft skills and self-promotion. This lack
                  of knowledge can lead to misunderstandings and missed
                  opportunities during the job application process.
                </p>
              </div>
              <div className={styles.body_inter_20_semibold}>
                <p>3. Need for Tailored Support and Resources</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  Respondents emphasized the need for targeted resources to
                  assist them in navigating the job market. Many expressed
                  interest in interview coaching, resume writing support, and
                  access to platforms that provide tailored feedback. This
                  indicates a strong demand for solutions that cater
                  specifically to the unique challenges faced by immigrant job
                  seekers in Canada.
                </p>
              </div>
            </div>
          </div>
          <div
            id="design-ideation"
            className={styles.heading_degular_36_light_design}
          >
            <p>Design & Ideation</p>
          </div>
          <div className={styles.design_section_container}>
            <div className={styles.design_section_column_left}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>Converting Research to Design</p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>Turning Research Insights into a Seamless User Experience</p>
              </div>
            </div>
            <div className={styles.design_section_column_right}>
              <div className={styles.body_inter_16_regular}>
                <p>
                  {/* Based on survey insights, we identified four key features to
                  address user pain points */}
                  4 key features to address user pain points (based on survey
                  results)
                </p>
                <p></p>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Personalized Interview Preparation <br /> (upload job
                    listings and resumes for tailored questions)
                  </li>
                  <li>
                    Customizable Practice Sessions <br />
                    (select the number of questions and question type)
                  </li>
                  <li>
                    Flexible Answering Options <br />
                    (respond to questions through speech or text)
                  </li>
                  <li>
                    Constructive Feedback <br />
                    (receive critiques based on answers)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.wireframe_section_container}>
            <div className={styles.heading_inter_24_medium_left}>
              <p>Early Design & Variations</p>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                In the early design and iteration phase, we explored various
                design concepts and variations to shape our user interface.
                These initial designs were influenced not only by our research
                findings but also by our development capabilities and the time
                constraints we faced. By focusing on enhancing user experience
                through the integration of key features identified during our
                research, we ensured that our designs aligned with user needs
                while remaining feasible for implementation
              </p>
              <p className={styles.body_inter_16_regular_right_margin}>
                This iterative process enabled us to refine our designs based on
                feedback, ultimately leading to a more user-centered and
                effective final product.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.caraouselContainer}>
          <OnwardCarousel />
        </div>
        <div className={styles.projectContent}>
          <div className={styles.wireframe_section_container}>
            <div className={styles.heading_inter_24_medium_left}>
              <p>Visual Design & Style Guide</p>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                The style guide outlines essential design elements for the
                application, including the color scheme with specific HEX codes,
                typography with defined fonts and sizes, and a UI kit featuring
                buttons and navigation elements. It also includes an icon
                library for common actions, a logo explanation that reinforces
                brand identity, and a watermark to enhance branding without
                compromising user experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.styleGuide}>
          <Image
            src="/onward-styleguide.png"
            alt="Wireframes"
            width={1395}
            height={908}
          />
        </div>
        <div className={styles.styleGuideLink}>
          <Link href="/projects/fairshare/styleguide">
            View Full Style Guide
          </Link>
        </div>
        <div className={styles.projectContent01}>
          <div className={styles.wireframe_section_container}>
            <div className={styles.heading_inter_24_medium_left}>
              <p>Site Map</p>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                The Site Map was instrumental in organizing the app’s structure
                for clear navigation, allowing users to easily access key
                features such as job listing uploads, tailored question
                selection, and feedback mechanisms. This thoughtful organization
                ensures an intuitive user experience that meets the needs of our
                target audience effectively.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.siteMap}>
          <div className={styles.siteMapContent}>
            <div className={styles.siteMapText}>
              <p>Site Map</p>
            </div>
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "24px",
              }} // ✅ Corrected
              width="100%"
              height="450"
              src="https://embed.figma.com/board/YXokSmhn04W467ewgjJC4P/Onward-Sitemap-Embed?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className={styles.userFlowContent}>
            <div className={styles.siteMapText}>
              <p>User Story Map</p>
            </div>
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1);",
                borderRadius: "24px",
              }}
              width="100%"
              height="450"
              src="https://embed.figma.com/design/nWrI4GcvRL0V8zgI9HGB9K/User-Story-Map?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
        <div className={styles.projectContent}>
          <div
            id="final-project"
            className={styles.heading_degular_36_light_design}
          >
            <p>FINAL PROJECT</p>
          </div>
          <div className={styles.design_section_container}>
            <div className={styles.design_section_column_left}>
              <div className={styles.heading_inter_24_medium_design}>
                <p> App Overview </p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>Creating a Seamless Experience: The Final App Design</p>
              </div>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                In this section, we will unveil the fully realized app, focusing
                on the primary features and design choices that emerged from our
                iterative development process.
              </p>
              <p className={styles.body_inter_16_regular_right_margin}>
                Here we will highlight how user feedback and research guided the
                final design, ensuring the final product meets the needs of our
                target users.
              </p>
            </div>
          </div>
          <div className={styles.appMockup01}>
            <Image
              src="/final-mockup01.png"
              alt="Mockup"
              width={3200}
              height={1508.98}
              className={styles.mockup}
            />
          </div>
          <div className={styles.implementation_section_container}>
            <div className={styles.design_section_column_left_implementation}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>
                  {" "}
                  <span className={styles.number_yellow}>1</span>
                  <br />
                  Upload Resume & Job Listing
                </p>
              </div>
            </div>
            <div className={styles.design_section_column_right_implementation}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>Personalized Interview Preparation</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  The Personalized Interview Preparation feature tailors the
                  interview experience by allowing users to upload job listings
                  and resumes, generating customized questions relevant to their
                  specific roles. By focusing on situational and behavioral
                  questions pertinent to their target jobs, this feature helps
                  users practice effectively, boosting their confidence and
                  readiness for real interviews. This personalization is crucial
                  for addressing the unique challenges faced by immigrants
                  seeking employment in Canada, bridging the gap between their
                  previous experiences and Canadian employer expectations.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mockup_bottom01}>
            <Image
              src="/onward-imp01.png"
              alt="Project Logo"
              width={2369}
              height={1333}
            />
          </div>
          <div className={styles.implementation_section_container}>
            <div className={styles.design_section_column_left_implementation}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>
                  {" "}
                  <span className={styles.number_yellow}>2</span>
                  <br />
                  Customize your Interview
                </p>
              </div>
            </div>
            <div className={styles.design_section_column_right_implementation}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>Customizable Practice Sessions</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  The Customize Your Interview feature empowers users to select
                  the number of questions and the type of inquiries they want to
                  practice, such as situational or behavioral questions. This
                  flexibility allows users to tailor their preparation sessions
                  according to their individual needs and comfort levels,
                  enhancing their learning experience. By giving users control
                  over their interview practice, this feature addresses specific
                  pain points, enabling them to focus on areas where they may
                  need the most improvement and ensuring they feel more prepared
                  and confident when facing real interview scenarios.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mockup_bottom01}>
            <Image
              src="/onward-imp05.png"
              alt="Project Logo"
              width={3840}
              height={2160}
            />
          </div>
          <div className={styles.implementation_section_container}>
            <div className={styles.design_section_column_left_implementation}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>
                  {" "}
                  <span className={styles.number_yellow}>3</span>
                  <br />
                  Tailored Interview Questions
                </p>
              </div>
            </div>
            <div className={styles.design_section_column_right_implementation}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>Optimized Questions</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  The Tailored Interview Questions feature provides users with
                  personalized queries that align with their specific job
                  applications and experiences. By analyzing user-uploaded
                  resumes and job listings, the app generates relevant questions
                  that reflect the skills and competencies required for the
                  position. This dynamic approach ensures that users are
                  well-prepared for interviews by practicing questions that
                  resonate with their career aspirations, ultimately boosting
                  their confidence and readiness.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mockup_bottom01}>
            <Image
              src="/onward-imp02.png"
              alt="Project Logo"
              width={2407}
              height={1355}
            />
          </div>

          <div className={styles.implementation_section_container}>
            <div className={styles.design_section_column_left_implementation}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>
                  {" "}
                  <span className={styles.number_yellow}>4</span>
                  <br />
                  Practice with Text or speech
                </p>
              </div>
            </div>
            <div className={styles.design_section_column_right_implementation}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>Flexible Answering Options</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  The Practice with Text or Speech feature provides users with
                  the option to respond to interview questions either through
                  text input or voice recording. This dual approach accommodates
                  different learning styles and preferences, allowing users to
                  choose the method that feels most comfortable for them. By
                  enabling speech responses, the feature helps users improve
                  their verbal communication skills and become more articulate
                  in their answers. This flexibility not only enhances the user
                  experience but also prepares candidates for the dynamic nature
                  of real interview settings, where clear and confident
                  communication is key.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mockup_bottom01}>
            <Image
              src="/onward-imp03.png"
              alt="Project Logo"
              width={2406}
              height={1354}
            />
          </div>

          <div className={styles.implementation_section_container}>
            <div className={styles.design_section_column_left_implementation}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>
                  {" "}
                  <span className={styles.number_yellow}>5</span>
                  <br />
                  Instant Feedback
                </p>
              </div>
            </div>
            <div className={styles.design_section_column_right_implementation}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>Constructive Feedback</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  The Instant Feedback feature offers users real-time
                  evaluations of their responses, focusing on areas such as
                  filler words, relevance, and overall clarity rather than
                  assigning a score. By providing constructive insights on their
                  answers, users can understand where improvements can be made,
                  emphasizing that there is always room for growth in their
                  communication skills. This feedback not only fosters a
                  learning mindset but also enhances users' confidence and
                  readiness for actual interviews, reinforcing the idea that
                  every practice session is an opportunity for improvement.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mockup_bottom01}>
            <Image
              src="/onward-styleguide04.png"
              alt="assests img"
              width={2406}
              height={1771}
            />
          </div>
          <div className={styles.mockup_top01}>
            <Image
              src="/Business-Card-Mockup.png"
              alt="assests img"
              width={4500}
              height={3200}
            />
          </div>
        </div>
        <div className={styles.endingSection}>
          <p>Enjoy? Check out my other projects</p>
        </div>
        <div className={styles.connectSection}>
          <ConnectSection
            iconBackgroundColor="#E5E5E5"
            textColor="#8D8D93"
            buttonBackgroundColor="#EDAF53"
            buttonTextColor="#201E1E"
            customText="Connect with me!"
            // textColor="#8D8D93"
          />
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.project}>
          <TransitionLink href="/projects/fairshare">
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
          </TransitionLink>
        </div>
        <div className={styles.project}>
          <ProjectCard
            title="In Development"
            date="XXXX"
            info="XXXXX, XXXXXX"
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
