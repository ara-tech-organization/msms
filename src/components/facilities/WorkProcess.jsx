import React from "react";
import styles from "./WorkProcess.module.css";
import startIcon from "../../assets/images/icon-1.png";
import decisionIcon from "../../assets/images/icon-2.png";
import certificateIcon from "../../assets/images/icon-3.png";

const steps = [
  {
    icon: startIcon,
    title: "Enroll at Morning Star",
    description:
      "Join one of Thanjavur’s most trusted schools to build a strong academic foundation and holistic growth.",
  },
  {
    icon: decisionIcon,
    title: "Choose Your Path",
    description:
      "Explore personalized learning options in academics, arts, and extracurriculars to shape your future.",
    highlight: true,
  },
  {
    icon: certificateIcon,
    title: "Achieve and Graduate",
    description:
      "Earn recognition with academic excellence and strong values—ready for higher education and life.",
  },
];

const WorkProcess = () => {
  return (
    <section className={styles.workProcess}>
      <p className={styles.subHeading}>🌟 OUR APPROACH</p>
      <h2 className={styles.heading}>How We Nurture Young Minds</h2>
      <div className={styles.cardsContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.card} ${step.highlight ? styles.highlight : ""}`}
          >
            <div className={styles.iconWrapper}>
              <img src={step.icon} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
