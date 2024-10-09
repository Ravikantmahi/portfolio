import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>CERTIFICATE</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className= {styles.certificateImg} src={getImageUrl("certificate/certificate.png")} alt="certificate icon" />
            <div className={styles.aboutItemText}>
              <h3>Website Design Internship, Internship Studio</h3>
              <p>July, 2023</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className= {styles.certificateImg} src={getImageUrl("certificate/certificate.png")} alt="certificate icon" />
            <div className={styles.aboutItemText}>
              <h3>Website Design Training, Internship Studio</h3>
              <p>July, 2023</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className= {styles.certificateImg} src={getImageUrl("certificate/certificate.png")} alt="certificate icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Development Internship, Code Alpha</h3>
              <p>August, 2023</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className= {styles.certificateImg} src={getImageUrl("certificate/certificate.png")} alt="certificate icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development Internship, C-DAC</h3>
              <p>August, 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
