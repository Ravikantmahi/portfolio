import React from "react";
import styles from "./Projects.module.css";
import project from "../../data/projects.json";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.project}>
          {project.map((projectItem, id) => {
            return (
              <li key={id} className={styles.projectItem}>
                <div className={styles.projectItemDetails}>
                  <h3>{projectItem.project}</h3>
                  <ul className={styles.projectDetails}>
                    {projectItem.detail.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  {/* Add the Demo link */}
                  {projectItem.demoLink && (
                    <a
                      href={projectItem.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
