// "use client";

// import Image from "next/image";
// import styles from "./fairshare.module.css";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../components/Footer";
// import ProjectInfo from "../../../components/ProjectInfo.js";
// import Carousel from "../../../components/FairShareWireFramesCarousel.js";
// import { useState } from "react";
// import Link from "next/link";
// import ConnectSection from "../../../components/ConnectSection.js";
// import ProjectCard from "../../../components/ProjectCard.js";
// import SideNavigation from "../../../components/SideNavigation.js";

// export default function Fairshare() {
//   return (
//     <div className={styles.pageWrapper}>
//       <Navbar />
//       <div className={styles.content}>
//         <h3 className={styles.projectName}>FairShare</h3>
//         <div className={styles.caseStudyIntro}>
//           <div className={styles.leftColumn}>
//             <Image
//               src="/fairShare-logo.svg"
//               alt="Project Logo"
//               width={66.27}
//               height={83.32}
//               className={styles.logo}
//             />
//             <h1 className={styles.title}>
//               Simplifying Bill Splitting <br /> & Group Expenses
//             </h1>
//             <p className={styles.description}>
//               FairShare is a mobile application designed to simplify group
//               expense management. Users can easily scan receipts, split bills
//               among friends, and even connect their banks to track
//               transactions—all in one seamless platform.
//             </p>
//           </div>
//           <div className={styles.rightColumn}>
//             <Image
//               src="/fairshare-mockup06.png"
//               alt="Mockup"
//               width={5605}
//               height={4537}
//               className={styles.mockup}
//             />
//           </div>
//         </div>
//         <div className={styles.descContainer}>
//           <div className={styles.descContent}>
//             <Image
//               src="/fairShare-Desc.svg"
//               alt="Project Logo"
//               width={860}
//               height={290}
//             />
//           </div>
//         </div>
//         <SideNavigation />
//         <div className={styles.projectContent}>
//           <div className={styles.my_role_column}>
//             <div className={styles.heading_inter_24_medium01}>
//               <p>My Role & Responsibility</p>
//             </div>
//             <div className={styles.body_inter_16_regular01}>
//               <p>
//                 As the project lead, I managed the app's design from concept to
//                 execution, prioritizing a seamless user experience. I conducted
//                 research to understand user needs and pain points, which guided
//                 the design direction. I developed wireframes, progressing from
//                 low to high fidelity, and conducted iterative testing to
//                 optimize the design based on user feedback.
//               </p>
//               <p className={styles.paragraph_text_top_spacing}>
//                 I facilitated collaboration with the development team by
//                 scheduling and leading meetings, ensuring that design objectives
//                 were aligned with technical feasibility for effective
//                 implementation.
//               </p>
//             </div>
//           </div>
//           <div className={styles.mockup_top01}>
//             <Image
//               src="/fairshare-mockup-top08.png"
//               alt="Project Logo"
//               width={5232}
//               height={2820}
//             />
//           </div>
//           <div
//             id="problem-statment"
//             className={styles.heading_degular_36_light_problem}
//           >
//             <p>PROBLEM STATMENT</p>
//           </div>
//           <div className={styles.problem_section}>
//             <div className={styles.problem_section_left}>
//               <div className={styles.heading_inter_24_medium_problem}>
//                 <p>
//                   The Challenge: <br /> Simplifying Group Finances
//                 </p>
//               </div>
//               <div className={styles.subheading_inter_20__medium}>
//                 <p>Understanding User Pain Points</p>
//               </div>
//             </div>
//             <div className={styles.problem_section_right}>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   Managing expenses and splitting bills with groups remains a
//                   frustrating experience for many young adults, especially
//                   students.
//                 </p>
//                 <p className={styles.paragraph_text_top_spacing}>
//                   Current apps often have uninspiring designs, confusing
//                   interfaces, and manual processes that make tracking expenses
//                   feel like a chore. Users struggle with staying consistent,
//                   prefer flexible solutions for managing personal and shared
//                   expenses, and want tools like receipt scanning and
//                   personalized budgeting options.
//                 </p>
//                 <p className={styles.paragraph_text_top_spacing}>
//                   There’s a clear need for an intuitive, engaging app that
//                   simplifies expense tracking and group bill-splitting while
//                   adapting to diverse user preferences.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.quote}>
//           <p>
//             <span className={styles.quotation01}>"</span>
//             Users want a solution that simplifies group expenses, tracks
//             spending effortlessly, and adapts to their unique financial goals
//             <span className={styles.quotation02}>"</span>
//           </p>
//         </div>
//         <div className={styles.mockup_top02}>
//           <Image
//             src="/fairshare-mockup-top06.png"
//             alt="Project Logo"
//             width={5232}
//             height={2708}
//           />
//         </div>
//         <div className={styles.projectContent}>
//           <div
//             id="research-phase"
//             className={styles.heading_degular_36_light_research}
//           >
//             <p>RESEARCH</p>
//           </div>
//           <div className={styles.research_section_container}>
//             <div className={styles.research_section_column_left}>
//               <div className={styles.heading_inter_24_medium_research}>
//                 <p>Research Phase</p>
//               </div>
//               <div className={styles.subheading_inter_20__medium}>
//                 <p>Uncovering User Needs to Inform Design Decisions</p>
//               </div>
//             </div>
//             <div className={styles.research_section_column_right}>
//               <div className={styles.body_inter_20_semibold_research}>
//                 <p>Key Survey Findings</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   We surveyed a group of young adults, mainly students and peers to
//                   gather insights on pain points and preferences when it
//                   comes to expense tracking and splitting group bills. This is
//                   what we found.
//                 </p>
//               </div>
//               <div className={styles.body_inter_20_semibold_key_findings}>
//                 <p>1. Frustration with Manual Expense Tracking </p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   A significant portion of respondents (over 60%) expressed
//                   frustration with manually entering expenses. Users were
//                   looking for an app that could automatically track spending
//                   through features like bank account integration or receipt
//                   scanning.{" "}
//                 </p>
//               </div>
//               <div className={styles.body_inter_20_semibold_key_findings}>
//                 <p>2. Need for Personalization</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   More than 70% of respondents mentioned that they would prefer
//                   the app to offer customizable budgeting tools, such as
//                   envelope systems or visual spending analysis, to cater to
//                   their unique financial habits and preferences.
//                 </p>
//               </div>
//               <div className={styles.body_inter_20_semibold_key_findings}>
//                 <p>3. Importance of Group Bill-Splitting</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   50% of survey participants highlighted difficulties with
//                   splitting group bills accurately, especially when sharing
//                   expenses with friends. Simplifying this process was a critical
//                   need for users, as it would save time and reduce confusion.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* <div className={styles.key_findings_container}>
//             <div className={styles.key_findings_container_right}>
//               <div className={styles.body_inter_20_semibold_no_margin}>
//                 <p>1. Frustration with Manual Expense Tracking </p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   A significant portion of respondents (over 60%) expressed
//                   frustration with manually entering expenses. Users were
//                   looking for an app that could automatically track spending
//                   through features like bank account integration or receipt
//                   scanning.{" "}
//                 </p>
//               </div>
//               <div className={styles.body_inter_20_semibold}>
//                 <p>2. Need for Personalization</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   More than 70% of respondents mentioned that they would prefer
//                   the app to offer customizable budgeting tools, such as
//                   envelope systems or visual spending analysis, to cater to
//                   their unique financial habits and preferences.
//                 </p>
//               </div>
//               <div className={styles.body_inter_20_semibold}>
//                 <p>3. Importance of Group Bill-Splitting</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   50% of survey participants highlighted difficulties with
//                   splitting group bills accurately, especially when sharing
//                   expenses with friends. Simplifying this process was a critical
//                   need for users, as it would save time and reduce confusion.
//                 </p>
//               </div>
//             </div>
//           </div> */}
//           <div className={styles.research_section_container_margin}>
//             <div className={styles.research_section_column_left}>
//               <div className={styles.heading_inter_24_medium_research}>
//                 <p>Research Phase</p>
//               </div>
//             </div>
//             <div className={styles.research_section_column_right}>
//               <div className={styles.body_inter_20_semibold_no_margin}>
//                 <p>Competitor Analysis</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   We analyzed popular expense tracking apps (e.g., Mint, Ramp,
//                   QuickBooks) to identify common features and shortcomings. This
//                   analysis highlighted opportunities for our app to offer a more
//                   user-friendly, flexible solution.
//                 </p>
//               </div>
//               <div className={styles.styleGuideLink}>
//                 <Link href="/projects/fairshare/styleguide">
//                   View Competitor Analysis
//                 </Link>
//               </div>
//               <div className={styles.body_inter_20_semibold}>
//                 <p>User Personas</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   Based on the survey responses, we created three distinct user
//                   personas to represent the needs of our target demographic.
//                   These personas helped us better understand the frustrations,
//                   motivations, and goals of our users, guiding our design
//                   decisions:
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.personas}>
//             <div className={styles.personaLeft}>
//               <p>User Persona: Primary</p>
//               <Image
//                 src="/fairShare-userPersonaLeft.png"
//                 alt="Persona 1"
//                 width={1400}
//                 height={1760.31}
//               />
//             </div>
//             <div className={styles.personaRight}>
//               <p>User Persona: Seconday</p>
//               <Image
//                 src="/fairShare-userPersonaRight.png"
//                 alt="Persona 1"
//                 width={1400}
//                 height={1760.31}
//               />
//             </div>
//           </div>
//           <div
//             id="design-ideation"
//             className={styles.heading_degular_36_light_design}
//           >
//             <p>Design & Ideation</p>
//           </div>
//           <div className={styles.design_section_container}>
//             <div className={styles.design_section_column_left}>
//               <div className={styles.heading_inter_24_medium_design}>
//                 <p>4 key features to address user pain points</p>
//               </div>
//               <div className={styles.subheading_inter_20__medium}>
//                 <p>Turning Research Insights into a Seamless User Experience</p>
//               </div>
//             </div>
//             <div className={styles.design_section_column_right}>
//               <div className={styles.list}>
//                 <ul>
//                   <li>Automated Expense Tracking (bank account linking)</li>
//                   <li>Group Bill Splitting (easy division of shared costs)</li>
//                   <li>Seamless documentation uploads (receipt scanning)</li>
//                   <li>Notifications and reminders for repayments</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className={styles.wireframe_section_container}>
//             <div className={styles.heading_inter_24_medium_left}>
//               <p>Wireframing & Interaction Design</p>
//             </div>
//             <div className={styles.body_inter_16_regular_right}>
//               <p>
//                 We created wireframes to visualize the app's structure and
//                 ensure intuitive navigation. These wireframes served as the
//                 foundation for the app’s interaction flow.
//               </p>
//               <p className={styles.body_inter_16_regular_right_margin}>
//                 You will notice the apps orginal wireframes focused more
//                 budgeting and expense tracking features. Something that would
//                 eventually become secondary to bill splitting feaures in later
//                 iterations.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={styles.caraouselContainer}>
//           <Carousel />
//         </div>
//         <div className={styles.projectContent}>
//           <div className={styles.wireframe_section_container}>
//             <div className={styles.heading_inter_24_medium_left}>
//               <p>Visual Design & Style Guide</p>
//             </div>
//             <div className={styles.body_inter_16_regular_right}>
//               <p>
//                 The Style Guide ensures a consistent visual identity
//                 across the app. The simplified version includes key elements
//                 such as the color scheme, typography, and guidelines for the
//                 logo and wordmark, maintaining a cohesive and professional
//                 design.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={styles.styleGuide}>
//           <Image
//             src="/fairshare-styleguide01.svg"
//             alt="Wireframes"
//             width={1395}
//             height={908}
//           />
//           <div className={styles.styleGuideLink}>
//             <Link href="/projects/fairshare/styleguide">
//               View Full Style Guide
//             </Link>
//           </div>
//         </div>
//         <div className={styles.projectContent01}>
//           <div className={styles.wireframe_section_container}>
//             <div className={styles.heading_inter_24_medium_left}>
//               <p>Site Map & User Story Map</p>
//             </div>
//             <div className={styles.body_inter_16_regular_right}>
//               <p>
//                 The Site Map helped us structure the app for clear navigation
//                 and organization, while the User Story Map allowed us to
//                 prioritize key features like expense tracking, bill splitting,
//                 and goal setting. This ensured a smooth and intuitive user
//                 experience.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={styles.siteMap}>
//           <div className={styles.siteMapContent}>
//             <div className={styles.siteMapText}>
//               <p>Site Map</p>
//             </div>
//             <iframe
//               style={{
//                 border: "1px solid rgba(0, 0, 0, 0.1)",
//                 borderRadius: "24px",
//               }} // ✅ Corrected
//               width="100%"
//               height="450"
//               src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/qEM3fiGmz3Cbdk9sVrkGPD/Untitled"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <div className={styles.userFlowContent}>
//             <div className={styles.siteMapText}>
//               <p>User Story Map</p>
//             </div>
//             <iframe
//               style={{
//                 border: "1px solid rgba(0, 0, 0, 0.1);",
//                 borderRadius: "24px",
//               }}
//               width="100%"
//               height="450"
//               src="https://embed.figma.com/design/nWrI4GcvRL0V8zgI9HGB9K/User-Story-Map?node-id=0-1&embed-host=share"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//         <div className={styles.projectContent}>
//           <div
//             id="final-project"
//             className={styles.heading_degular_36_light_design}
//           >
//             <p>FINAL PROJECT</p>
//           </div>
//           <div className={styles.design_section_container}>
//             <div className={styles.design_section_column_left}>
//               <div className={styles.heading_inter_24_medium_design}>
//                 <p> App Overview </p>
//               </div>
//               <div className={styles.subheading_inter_20__medium}>
//                 <p>
//                   Bringing the App to Life: A Polished, User-Centered Solution
//                 </p>
//               </div>
//             </div>
//             <div className={styles.body_inter_16_regular_right}>
//               <p>
//                 The final implementation showcases the app’s key features and
//                 design elements, bringing the concept to life. These features
//                 were identified and prioritized as mandatory elements to solve
//                 our users’ problems, ensuring the app effectively addresses
//                 their needs.
//               </p>
//               {/* <p className={styles.body_inter_16_regular_right_margin}>
//                 Here we will highlight how user feedback and research guided the
//                 final design, ensuring the finla product meets the needs of our
//                 target users.
//               </p> */}
//             </div>
//           </div>
//           <div className={styles.appMockup01}>
//             <Image
//               src="/fairshare-mockup-01.png"
//               alt="Mockup"
//               width={532}
//               height={739}
//               className={styles.mockup}
//             />
//           </div>
//           <div className={styles.implementation_section_container}>
//             <div className={styles.design_section_column_left_implementation}>
//               <div className={styles.heading_inter_24_medium_design}>
//                 <p>
//                   {" "}
//                   Implementations
//                   <br />
//                   <span className={styles.number_yellow}>#1</span>
//                 </p>
//               </div>
//             </div>
//             <div className={styles.design_section_column_right_implementation}>
//               <div className={styles.body_inter_20_semibold_no_margin}>
//                 <p>Automated Expense Tracking</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   Users can easily track their expenses by connecting their bank
//                   accounts, allowing automatic updates of transactions within
//                   the app. Alternatively, for those who prefer not to link their
//                   bank accounts, the app includes a receipt scanning feature,
//                   where users can take a photo of receipts and have them
//                   automatically categorized. This ensures a seamless experience,
//                   reducing manual input and offering real-time insights into
//                   spending.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.new_imp_mockup01}>
//             <Image
//               src="/fairshare-imp-row01.webp"
//               alt="assests img"
//               width={5232}
//               height={2820}
//             />
//           </div>
//           <div className={styles.implementation_section_container}>
//             <div className={styles.design_section_column_left_implementation}>
//               <div className={styles.heading_inter_24_medium_design}>
//                 <p>
//                   {" "}
//                   Implementations{" "}
//                   <br />
//                   <span className={styles.number_yellow}>#2</span>
//                 </p>
//               </div>
//             </div>
//             <div className={styles.design_section_column_right_implementation}>
//               <div className={styles.body_inter_20_semibold_no_margin}>
//                 <p>Group Bill Splitting</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   Simplifying shared expenses, the app allows users to split
//                   group bills easily. It calculates how much each person owes
//                   and ensures everyone pays their fair share. Whether it's a
//                   dinner with friends or a shared household expense, this
//                   feature reduces the headache of tracking who paid what and who
//                   owes whom.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.new_imp_mockup02}>
//             <Image
//               src="/fairshare-imp-row02.webp"
//               alt="Project Logo"
//               width={3000}
//               height={1791}
//             />
//           </div>
//           <div className={styles.implementation_section_container}>
//             <div className={styles.design_section_column_left_implementation}>
//               <div className={styles.heading_inter_24_medium_design}>
//                 <p>
//                   {" "}
//                   Implementations
//                   <br />
//                   <span className={styles.number_yellow}>#3</span>
//                 </p>
//               </div>
//             </div>
//             <div className={styles.design_section_column_right_implementation}>
//               <div className={styles.body_inter_20_semibold_no_margin}>
//                 <p>Receipt Uploading by Photo</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   The app makes expense tracking even easier by enabling users
//                   to upload receipts simply by taking a photo. The app then
//                   scans the receipt, automatically extracting the relevant
//                   information, such as the amount and date, making it a quick
//                   and hassle-free process for users to record their expenses.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.new_imp_mockup02}>
//             <Image
//               src="/fairshare-imp-row03.webp"
//               alt="Mockup"
//               width={3000}
//               height={2250}
//               className={styles.mockup}
//             />
//           </div>

//           {/* <div className={styles.implementation_section_container}>
//             <div className={styles.design_section_column_left_implementation}>
//               <div className={styles.heading_inter_24_medium_design}>
//                 <p>
//                   {" "}
//                   Implementations
//                   <br />
//                   <span className={styles.number_yellow}>#4</span>
//                 </p>
//               </div>
//             </div>
//             <div className={styles.design_section_column_right_implementation}>
//               <div className={styles.body_inter_20_semibold_no_margin}>
//                 <p>Automated Reminders</p>
//               </div>
//               <div className={styles.body_inter_16_regular}>
//                 <p>
//                   To help users stay on top of their finances, the app includes
//                   automated reminders. These notifications prompt users to log
//                   their expenses, follow up on upcoming bills, and remind them
//                   of budget limits or savings goals. This ensures users stay
//                   consistent with tracking their spending and avoid
//                   forgetfulness, a common pain point for many.
//                 </p>
//               </div>
//             </div>
//           </div> */}
//           <div className={styles.mockup_top01}>
//             <Image
//               src="/fairshare-mockup-bottom01.png"
//               alt="assests img"
//               width={5232}
//               height={2820}
//             />
//           </div>
//         </div>
//         <div className={styles.endingSection}>
//           <p>Enjoy? Check out my other projects</p>
//         </div>
//         <div className={styles.connectSection}>
//           <ConnectSection />
//         </div>
//       </div>
//       <div className={styles.projectContainer}>
//         <div className={styles.project}>
//           <ProjectCard
//             title="Mock Interview App"
//             date="2024/2025"
//             info="Mobile, Web, Tablet"
//             imageSrc="/onward-mockup01.png"
//             backgroundColor="#FAFAFA"
//             titleColor="#000000"
//             dateColor="#8D8D93"
//             infoColor="#8D8D93"
//           />
//         </div>
//         <div className={styles.project}>
//           <ProjectCard
//             title="Community Marketplace"
//             date="2023"
//             info="Mobile, Web, Tablet"
//             imageSrc="/neighbourly-mock.png"
//             backgroundColor="#252323"
//             titleColor="#FFFFFF"
//             dateColor="#8D8D93"
//             infoColor="#8D8D93"
//           />
//         </div>
//       </div>
//       {/* <div className={styles.styleGuide}>
//         <Image src="/fairshare-styleguide-full.svg" alt="Wireframes" width={1395} height={908}/>
//         </div> */}
//       <Footer />
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import styles from "./fairshare.module.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Carousel from "../../../components/FairShareWireFramesCarousel.js";
import Link from "next/link";
import ConnectSection from "../../../components/ConnectSection.js";
import ProjectCard from "../../../components/ProjectCard.js";
import SideNavigation from "../../../components/SideNavigation.js";
import { TransitionLink} from "../../../components/utils/TransitionLink";

export default function Fairshare() {
  // Common image props object to reduce repetition
  const imageProps = {
    priority: true, // For better LCP performance
    loading: "eager", // For critical above-the-fold images
  };
  
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.content}>
        <h3 className={styles.projectName}>FairShare</h3>
        <div className={styles.caseStudyIntro}>
          <div className={styles.leftColumn}>
            <Image
              src="/fairShare-logo.svg"
              alt="Project Logo"
              width={66.27}
              height={83.32}
              className={styles.logo}
              {...imageProps}
            />
            <h1 className={styles.title}>
              Simplifying Bill Splitting <br /> & Group Expenses
            </h1>
            <p className={styles.description}>
              FairShare is a mobile application designed to simplify group
              expense management. Users can easily scan receipts, split bills
              among friends, and even connect their banks to track
              transactions—all in one seamless platform.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <Image
              src="/fairshare-mockup06.png"
              alt="Mockup"
              width={5605}
              height={4537}
              className={styles.mockup}
              {...imageProps}
            />
          </div>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descContent}>
            <Image
              src="/fairShare-Desc.svg"
              alt="Project Description"
              width={860}
              height={290}
            />
          </div>
        </div>
        <SideNavigation />
        <div className={styles.projectContent}>
          <div className={styles.my_role_column}>
            <div className={styles.heading_inter_24_medium01}>
              <p>My Role & Responsibility</p>
            </div>
            <div className={styles.body_inter_16_regular01}>
              <p>
                As the project lead, I managed the app's design from concept to
                execution, prioritizing a seamless user experience. I conducted
                research to understand user needs and pain points, which guided
                the design direction. I developed wireframes, progressing from
                low to high fidelity, and conducted iterative testing to
                optimize the design based on user feedback.
              </p>
              <p className={styles.paragraph_text_top_spacing}>
                I facilitated collaboration with the development team by
                scheduling and leading meetings, ensuring that design objectives
                were aligned with technical feasibility for effective
                implementation.
              </p>
            </div>
          </div>
          <div className={styles.mockup_top01}>
            <Image
              src="/fairshare-mockup-top08.png"
              alt="Mockup Top"
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
                <p>
                  The Challenge: <br /> Simplifying Group Finances
                </p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>Understanding User Pain Points</p>
              </div>
            </div>
            <div className={styles.problem_section_right}>
              <div className={styles.body_inter_16_regular}>
                <p>
                  Managing expenses and splitting bills with groups remains a
                  frustrating experience for many young adults, especially
                  students.
                </p>
                <p className={styles.paragraph_text_top_spacing}>
                  Current apps often have uninspiring designs, confusing
                  interfaces, and manual processes that make tracking expenses
                  feel like a chore. Users struggle with staying consistent,
                  prefer flexible solutions for managing personal and shared
                  expenses, and want tools like receipt scanning and
                  personalized budgeting options.
                </p>
                <p className={styles.paragraph_text_top_spacing}>
                  There's a clear need for an intuitive, engaging app that
                  simplifies expense tracking and group bill-splitting while
                  adapting to diverse user preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quote}>
          <p>
            {/* <span className={styles.quotation01}>"</span> */}
            "Users want a solution that simplifies group expenses, tracks
            spending effortlessly, and adapts to their unique financial goals"
            {/* <span className={styles.quotation02}>"</span> */}
          </p>
        </div>
        <div className={styles.mockup_top02}>
          <Image
            src="/fairshare-mockup-top06.png"
            alt="Mockup"
            width={5232}
            height={2708}
          />
        </div>
        
        {/* Research section */}
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
                <p>Uncovering User Needs to Inform Design Decisions</p>
              </div>
            </div>
            <div className={styles.research_section_column_right}>
              <div className={styles.body_inter_20_semibold_research}>
                <p>Key Survey Findings</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  We surveyed a group of young adults, mainly students and peers to
                  gather insights on pain points and preferences when it
                  comes to expense tracking and splitting group bills. This is
                  what we found.
                </p>
              </div>
              
              {/* Key findings */}
              {[
                {
                  title: "1. Frustration with Manual Expense Tracking",
                  content: "A significant portion of respondents (over 60%) expressed frustration with manually entering expenses. Users were looking for an app that could automatically track spending through features like bank account integration or receipt scanning."
                },
                {
                  title: "2. Need for Personalization",
                  content: "More than 70% of respondents mentioned that they would prefer the app to offer customizable budgeting tools, such as envelope systems or visual spending analysis, to cater to their unique financial habits and preferences."
                },
                {
                  title: "3. Importance of Group Bill-Splitting",
                  content: "50% of survey participants highlighted difficulties with splitting group bills accurately, especially when sharing expenses with friends. Simplifying this process was a critical need for users, as it would save time and reduce confusion."
                }
              ].map((finding, index) => (
                <div key={index}>
                  <div className={styles.body_inter_20_semibold_key_findings}>
                    <p>{finding.title}</p>
                  </div>
                  <div className={styles.body_inter_16_regular}>
                    <p>{finding.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.research_section_container_margin}>
            <div className={styles.research_section_column_left}>
              <div className={styles.heading_inter_24_medium_research}>
                <p>Research Phase</p>
              </div>
            </div>
            <div className={styles.research_section_column_right}>
              <div className={styles.body_inter_20_semibold_no_margin}>
                <p>Competitor Analysis</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  We analyzed popular expense tracking apps (e.g., Mint, Ramp,
                  QuickBooks) to identify common features and shortcomings. This
                  analysis highlighted opportunities for our app to offer a more
                  user-friendly, flexible solution.
                </p>
              </div>
              <div className={styles.styleGuideLink}>
                <Link href="/projects/fairshare/styleguide">
                  View Competitor Analysis
                </Link>
              </div>
              <div className={styles.body_inter_20_semibold}>
                <p>User Personas</p>
              </div>
              <div className={styles.body_inter_16_regular}>
                <p>
                  Based on the survey responses, we created three distinct user
                  personas to represent the needs of our target demographic.
                  These personas helped us better understand the frustrations,
                  motivations, and goals of our users, guiding our design
                  decisions:
                </p>
              </div>
            </div>
          </div>
          
          {/* Personas section */}
          <div className={styles.personas}>
            {[
              { title: "User Persona: Primary", src: "/fairShare-userPersonaLeft.png" },
              { title: "User Persona: Secondary", src: "/fairShare-userPersonaRight.png" }
            ].map((persona, index) => (
              <div key={index} className={index === 0 ? styles.personaLeft : styles.personaRight}>
                <p>{persona.title}</p>
                <Image
                  src={persona.src}
                  alt={`Persona ${index + 1}`}
                  width={1400}
                  height={1760.31}
                />
              </div>
            ))}
          </div>
          
          {/* Design & Ideation */}
          <div
            id="design-ideation"
            className={styles.heading_degular_36_light_design}
          >
            <p>Design & Ideation</p>
          </div>
          <div className={styles.design_section_container}>
            <div className={styles.design_section_column_left}>
              <div className={styles.heading_inter_24_medium_design}>
                <p>4 key features to address user pain points</p>
              </div>
              <div className={styles.subheading_inter_20__medium}>
                <p>Turning Research Insights into a Seamless User Experience</p>
              </div>
            </div>
            <div className={styles.design_section_column_right}>
              <div className={styles.list}>
                <ul>
                  <li>Automated Expense Tracking (bank account linking)</li>
                  <li>Group Bill Splitting (easy division of shared costs)</li>
                  <li>Seamless documentation uploads (receipt scanning)</li>
                  <li>Notifications and reminders for repayments</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Wireframing section */}
          <div className={styles.wireframe_section_container}>
            <div className={styles.heading_inter_24_medium_left}>
              <p>Wireframing & Interaction Design</p>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                We created wireframes to visualize the app's structure and
                ensure intuitive navigation. These wireframes served as the
                foundation for the app's interaction flow.
              </p>
              <p className={styles.body_inter_16_regular_right_margin}>
                You will notice the apps original wireframes focused more
                budgeting and expense tracking features. Something that would
                eventually become secondary to bill splitting features in later
                iterations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Carousel section */}
        <div className={styles.caraouselContainer}>
          <Carousel />
        </div>
        
        {/* Style guide section */}
        <div className={styles.projectContent}>
          <div className={styles.wireframe_section_container}>
            <div className={styles.heading_inter_24_medium_left}>
              <p>Visual Design & Style Guide</p>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                The Style Guide ensures a consistent visual identity
                across the app. The simplified version includes key elements
                such as the color scheme, typography, and guidelines for the
                logo and wordmark, maintaining a cohesive and professional
                design.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.styleGuide}>
          <Image
            src="/fairshare-styleguide01.svg"
            alt="Style Guide"
            width={1395}
            height={908}
          />
          <div className={styles.styleGuideLink}>
            <Link href="/projects/fairshare/styleguide">
              View Full Style Guide
            </Link>
          </div>
        </div>
        
        {/* Site map section */}
        <div className={styles.projectContent01}>
          <div className={styles.wireframe_section_container}>
            <div className={styles.heading_inter_24_medium_left}>
              <p>Site Map & User Story Map</p>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                The Site Map helped us structure the app for clear navigation
                and organization, while the User Story Map allowed us to
                prioritize key features like expense tracking, bill splitting,
                and goal setting. This ensured a smooth and intuitive user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.siteMap}>
          {[
            {
              title: "Site Map",
              src: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/qEM3fiGmz3Cbdk9sVrkGPD/Untitled"
            },
            {
              title: "User Story Map",
              src: "https://embed.figma.com/design/nWrI4GcvRL0V8zgI9HGB9K/User-Story-Map?node-id=0-1&embed-host=share"
            }
          ].map((item, index) => (
            <div key={index} className={index === 0 ? styles.siteMapContent : styles.userFlowContent}>
              <div className={styles.siteMapText}>
                <p>{item.title}</p>
              </div>
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "24px",
                }}
                width="100%"
                height="450"
                src={item.src}
                allowFullScreen
                title={item.title}
              />
            </div>
          ))}
        </div>
        
        {/* Final project section */}
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
                <p>
                  Bringing the App to Life: A Polished, User-Centered Solution
                </p>
              </div>
            </div>
            <div className={styles.body_inter_16_regular_right}>
              <p>
                The final implementation showcases the app's key features and
                design elements, bringing the concept to life. These features
                were identified and prioritized as mandatory elements to solve
                our users' problems, ensuring the app effectively addresses
                their needs.
              </p>
            </div>
          </div>
          <div className={styles.appMockup01}>
            <Image
              src="/fairshare-mockup-01.png"
              alt="Mockup"
              width={532}
              height={739}
              className={styles.mockup}
            />
          </div>
          
          {/* Implementation sections */}
          {[
            {
              number: 1,
              title: "Automated Expense Tracking",
              description: "Users can easily track their expenses by connecting their bank accounts, allowing automatic updates of transactions within the app. Alternatively, for those who prefer not to link their bank accounts, the app includes a receipt scanning feature, where users can take a photo of receipts and have them automatically categorized. This ensures a seamless experience, reducing manual input and offering real-time insights into spending.",
              image: "/fairshare-imp-row01.webp",
              imageWidth: 5232,
              imageHeight: 2820,
              mockupClass: styles.new_imp_mockup01,
              imageAlt: "Automated Expense Tracking screens"
            },
            {
              number: 2,
              title: "Group Bill Splitting",
              description: "Simplifying shared expenses, the app allows users to split group bills easily. It calculates how much each person owes and ensures everyone pays their fair share. Whether it's a dinner with friends or a shared household expense, this feature reduces the headache of tracking who paid what and who owes whom.",
              image: "/fairshare-imp-row02.webp",
              imageWidth: 3000,
              imageHeight: 1791,
              mockupClass: styles.new_imp_mockup02,
              imageAlt: "Group Bill Splitting screens"
            },
            {
              number: 3,
              title: "Receipt Uploading by Photo",
              description: "The app makes expense tracking even easier by enabling users to upload receipts simply by taking a photo. The app then scans the receipt, automatically extracting the relevant information, such as the amount and date, making it a quick and hassle-free process for users to record their expenses.",
              image: "/fairshare-imp-row03.webp",
              imageWidth: 3000,
              imageHeight: 2250,
              mockupClass: styles.new_imp_mockup02,
              imageAlt: "Receipt Uploading screens"
            }
          ].map((implementation, index) => (
            <div key={index}>
              <div className={styles.implementation_section_container}>
                <div className={styles.design_section_column_left_implementation}>
                  <div className={styles.heading_inter_24_medium_design}>
                    <p>
                      Implementations
                      <br />
                      <span className={styles.number_yellow}>#{} {implementation.number}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.design_section_column_right_implementation}>
                  <div className={styles.body_inter_20_semibold_no_margin}>
                    <p>{implementation.title}</p>
                  </div>
                  <div className={styles.body_inter_16_regular}>
                    <p>{implementation.description}</p>
                  </div>
                </div>
              </div>
              <div className={implementation.mockupClass}>
                <Image
                  src={implementation.image}
                  alt={implementation.imageAlt}
                  width={implementation.imageWidth}
                  height={implementation.imageHeight}
                />
              </div>
            </div>
          ))}
          
          {/* <div className={styles.mockup_top01}>
            <Image
              src="/fairshare-mockup-bottom01.png"
              alt="Final mockup"
              width={5232}
              height={2820}
            />
          </div> */}
        </div>
        
        {/* Ending section */}
        <div className={styles.endingSection}>
          <p>Enjoy? Check out my other projects</p>
        </div>
        <div className={styles.connectSection}>
          <ConnectSection />
        </div>
      </div>
      
      {/* Project cards */}
      <div className={styles.projectContainer}>
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
            info="XXXXX, XXXXXX"
            imageSrc="/neighbourly-mock.png"
            backgroundColor="#252323"
            titleColor="#FFFFFF"
            dateColor="#8D8D93"
            infoColor="#8D8D93"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}