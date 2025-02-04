// import React from "react";
// import Image from "next/image";
// import styles from "./projectCard.module.css"; // Import CSS module

// export default function ProjectCard() {
//     return (
//         <div className={styles.cardContainer}>
//             <div className={styles.card}>
//                 <div className={styles.textContent}>
//                     <div className={styles.textTop}>
//                         <div className={styles.title}><h3>Project Title</h3></div>
//                         <div className={styles.desc}><p>2024/2025</p></div>
//                     </div>
//                     <div className={styles.textBottom}>
//                         <p>Info</p>
//                     </div>
//                 </div>
//                 <div className={styles.imageContainer}>
//                     <Image
//                         src="/fairshare-mockup01.png"
//                         alt="Project Image"
//                         width={484}
//                         height={433}
//                         layout="responsive"
//                     />
//                 </div>
//             </div>
//         </div>

//     )
// };

import React from "react";
import Image from "next/image";
import styles from "./projectCard.module.css";

export default function ProjectCard({
    title = "Project Title",
    date = "2024/2025",
    info = "Info",
    imageSrc = "/fairshare-mockup01.png",
    backgroundColor = "#252323",
    titleColor = "#FFFFFF",
    dateColor = "#8D8D93",
    infoColor = "#C4C4C4"
}) {
    return (
        <div className={styles.cardContainer} style={{ backgroundColor }}>
            <div className={styles.card}>
                <div className={styles.textContent}>
                    <div className={styles.textTop}>
                        <div className={styles.title} style={{ color: titleColor }}>
                            <h3>{title}</h3>
                        </div>
                        <div className={styles.desc} style={{ color: dateColor }}>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className={styles.textBottom} style={{ color: infoColor }}>
                        <p>{info}</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt="Project Image"
                        width={484}
                        height={433}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
