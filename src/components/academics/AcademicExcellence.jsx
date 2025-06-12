import React from 'react';
import styles from './AcademicExcellence.module.css';

const AcademicExcellence = () => {
  return (
    <section className={styles.aboutSection}>
      {/* Yellow Rainbow */}
      <img src="./images/star.png" alt="Decoration" className={styles.yellowRainbow} />

      <div className={styles.container}>
        {/* Left Side - Images */}
        <div className={styles.imageGrid}>
          <img
            src="./images/higher.jpg"
            alt="Student Learning"
            className={styles.mainImage}
          />
        </div>

        {/* Right Side - Content */}
        <div className={styles.content}>
          <span className={styles.tagline}>➤ Celebrating Academic Excellence</span>
          <h2 className={styles.heading}>100% Pass for the 10th Consecutive Time!</h2>
          <p className={styles.description}>
            We are incredibly proud to present the Top Achievers of Grade 10 (2023-24), who have demonstrated outstanding academic excellence!
            With a remarkable school average mark of <strong>401</strong>, our students have once again set new benchmarks in performance.
          </p>

          <div className={styles.highlights}>
            <div className={styles.point}>✅ <strong>100% Pass Rate </strong> for the 10th time!</div>
            <div className={styles.point}>✅ <strong>10 Students</strong> Scored Above 475 Marks</div>
            <div className={styles.point}>✅ <strong>28 Students</strong> Scored Above 450 Marks</div>
            <div className={styles.point}>✅ <strong>67 Students</strong> Scored Above 400 Marks</div>
            <div className={styles.point}>✅ <strong>99 & 100 Marks</strong> Achieved in Multiple Subjects</div>
          </div>

          {/* <button className={styles.ctaButton}>Celebrate With Us</button> */}
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
