// "use client";

// import { useEffect, useState } from "react";
// import styles from "./sideNavigation.module.css";

// export default function SideNavigation() {
//   const [activeSections, setActiveSections] = useState([]);

//   useEffect(() => {
//     const sections = document.querySelectorAll("div[id]");

//     const handleScroll = () => {
//       let currentSections = new Set();

//       const scrollPosition = window.scrollY + 200; // Adjust for accuracy

//       sections.forEach((section, index) => {
//         const sectionTop = section.offsetTop;
//         const nextSection = sections[index + 1];
//         const nextSectionTop = nextSection ? nextSection.offsetTop : Infinity; // Handles last section

//         if (scrollPosition >= sectionTop) {
//           currentSections.add(section.getAttribute("id")); // Add to active sections
//         }

//         if (scrollPosition < nextSectionTop) {
//           return; // Stop checking once we've found the current section
//         }
//       });

//       setActiveSections(Array.from(currentSections));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = (e, id) => {
//     e.preventDefault();
//     const section = document.getElementById(id);
//     if (section) {
//       const offset = 100; // Adjust alignment
//       const sectionTop = section.offsetTop - offset;
//       window.scrollTo({ top: sectionTop, behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className={styles.sideNav}>
//       <ul>
//         {[
//           {
//             id: "problem-statment",
//             number: "1",
//             text: "Problem <br /> Statement",
//           },
//           { id: "research-phase", number: "2", text: "Research <br /> Phase" },
//           { id: "design-ideation", number: "3", text: "Design <br /> & Ideation" },
//           { 
//             id: "final-project", 
//             number: "4", 
//             text: "Final <br /> Project" 
//         },
//         ].map((item, index) => (
//           <li
//             key={item.id}
//             className={`${styles.navItem} ${
//               activeSections.includes(item.id) ? styles.active : ""
//             }`}
//           >
//             <span className={styles.circle}>{item.number}</span>
//             <a
//               href={`#${item.id}`}
//               onClick={(e) => handleClick(e, item.id)}
//               className={styles.navText}
//               dangerouslySetInnerHTML={{ __html: item.text }} // This allows <br /> to work
//             />
//             {index !== 3 && <div className={styles.connector}></div>}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import styles from "./sideNavigation.module.css";

export default function SideNavigation({ activeColor, inactiveColor, textColor, numberColor, circleBackgroundColor }) {
  const [activeSections, setActiveSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const handleScroll = () => {
      let currentSections = new Set();

      const scrollPosition = window.scrollY + 200; // Adjust for accuracy

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const nextSection = sections[index + 1];
        const nextSectionTop = nextSection ? nextSection.offsetTop : Infinity; // Handles last section

        if (scrollPosition >= sectionTop) {
          currentSections.add(section.getAttribute("id")); // Add to active sections
        }

        if (scrollPosition < nextSectionTop) {
          return; // Stop checking once we've found the current section
        }
      });

      setActiveSections(Array.from(currentSections));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // Adjust alignment
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.sideNav}>
      <ul>
        {[
          {
            id: "problem-statment",
            number: "1",
            text: "Problem <br /> Statement",
          },
          { id: "research-phase", number: "2", text: "Research <br /> Phase" },
          { id: "design-ideation", number: "3", text: "Design <br /> & Ideation" },
          { 
            id: "final-project", 
            number: "4", 
            text: "Final <br /> Product" 
        },
        ].map((item, index) => (
          <li
            key={item.id}
            className={`${styles.navItem} ${
              activeSections.includes(item.id) ? styles.active : ""
            }`}
            style={{
              color: activeSections.includes(item.id) ? activeColor : inactiveColor,
            }}
          >
            <span 
              className={styles.circle} 
              style={{ 
                color: numberColor, 
                backgroundColor: activeSections.includes(item.id) ? activeColor : circleBackgroundColor 
              }}
            >
              {item.number}
            </span>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={styles.navText}
              style={{ color: textColor }}
              dangerouslySetInnerHTML={{ __html: item.text }} // This allows <br /> to work
            />
            {index !== 3 && <div className={styles.connector}></div>}
          </li>
        ))}
      </ul>
    </nav>
  );
}