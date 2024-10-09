import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.introText}>
        "I completed a Master of Computer Applications (MCA) from Kamla Nehru
        Institute of Technology [KNIT], Sultanpur,in June 2023 and graduated
        with a Bachelor of Science (B.Sc) in PCM from Gochar Mahavidyalaya Rampur Maniharan, Saharanpur in 2021."
      </p>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.arrowImg}
              src={getImageUrl("about/arrow.png")}
              alt="arrow icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Developed responsive web applications using React.js and
                Node.js, focusing on front-end design and functionality. Gained
                experience integrating Moodle with modern web frameworks,
                enhancing skills in educational technology.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.arrowImg}
              src={getImageUrl("about/arrow.png")}
              alt="arrow icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Web Designer</h3>
              <p>
                Gained foundational web design skills in layout, typography, and
                color, creating and refining prototypes for visually appealing,
                user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.arrowImg}
              src={getImageUrl("about/arrow.png")}
              alt="arrow icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Graphics Designer</h3>
              <p>
                Created visually appealing graphics using Canva, Adobe, and
                Figma. Enhanced design elements for digital platforms, ensuring
                a cohesive and professional aesthetic.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
