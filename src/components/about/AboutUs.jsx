import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.leftSide}>
        {/* Decorative green image */}
        <img
          src="./images/green.png"
          alt="Decoration"
          className={styles.decor}
        />

        {/* Main Girl Image */}
        <img
          src="./images/stu-1.png"
          alt="Student Standing"
          className={styles.mainImage}
        />

        {/* Right two blocks */}
        <div className={styles.rightBlocks}>
          <div className={styles.yearsBox}>
            <h2>30+</h2>
            <p>Years Experience</p>
          </div>
          <div className={styles.studentsImg}>
            <img src="./images/stu-2.png" alt="Group of Students" />
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <span className={styles.aboutTag}>ABOUT US</span>
        <h2 className={styles.heading}>
          History of <span className={styles.highlight}>MSMS</span>
        </h2>
        <p className={styles.desc}>
        About Morning Star Matriculation School (MSMS)
Established in 1994 in Thanjavur, Morning Star Matriculation School (MSMS) has grown into a respected institution committed to academic excellence and holistic development. We combine traditional values with modern educational practices to foster integrity, creativity, and critical thinking in every student.
Our experienced faculty, supportive environment, and dynamic curriculum ensure that students are not only academically strong but also morally grounded and future-ready. MSMS continues to inspire young minds to become confident, compassionate, and capable leaders in a changing world.
        </p>
        <div className={styles.missions}>
          <div>
            <h4>OUR VISION:</h4>
            <p>
              To empower every child to unlock their full potential, excel
              academically and personally, and grow into responsible global
              citizens who lead with integrity, empathy, and purpose.
            </p>
          </div>
          <div>

            <h4>OUR MISSION:</h4>
            <p>
              At Morning Star Matriculation School, our mission is to provide a
              safe, inclusive, and intellectually enriching environment where
              students flourish through a well-balanced curriculum and
              passionate educators. We aim to cultivate innovation, leadership,
              compassion, and resilience, ensuring every learner is prepared to
              succeed in life and contribute meaningfully to society.
            </p>
          </div>

        </div>
        <button className={styles.btn}>Admission Open ➔</button>
      </div>
    </section>
  );
};

export default AboutUs;
