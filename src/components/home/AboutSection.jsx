import React from "react";
import styles from "./AboutSection.module.css";
import starIcon from "../../assets/images/patterndots.png";
import dotPattern from "../../assets/images/patterndots.png";
import circleHighlight from "../../assets/images/circle.png";
import img1 from "../../assets/images/img-3.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-1.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <img src={starIcon} alt="star" className={styles.starIcon} />
      <div className={styles.container}>
        <div className={styles.imageGrid}>
          <img src={img1} alt="Top Left" className={styles.imgTopLeft} />
          <img src={img2} alt="Top Right" className={styles.imgTopRight} />
          <img src={img3} alt="Bottom" className={styles.imgBottom} />

          <div className={styles.experienceBadge}>
            30+
            <br />
            <span>
              Years Of
              <br />
              Experiences
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.label}>ABOUT US</span>
          <h2 className={styles.title}>
            History of{" "}
            <span className={styles.highlight}>
              MSMS
              <img src={circleHighlight} alt="circle highlight" />
            </span>
            <br />
          </h2>
          <p className={styles.description}>
          About Morning Star Matriculation School (MSMS)
Established in 1994 in Thanjavur, Morning Star Matriculation School (MSMS) has grown into a respected institution committed to academic excellence and holistic development. We combine traditional values with modern educational practices to foster integrity, creativity, and critical thinking in every student.
Our experienced faculty, supportive environment, and dynamic curriculum ensure that students are not only academically strong but also morally grounded and future-ready. MSMS continues to inspire young minds to become confident, compassionate, and capable leaders in a changing world.
          </p>
          <div className={styles.features}>
            <div>
              <h4>Vision</h4>
              <p>
                To empower every child to unlock their full potential, excel
                academically and personally, and grow into responsible global
                citizens who lead with integrity, empathy, and purpose.
              </p>
            </div>
            <div>
              <h4>Mission</h4>
              <p>
                At Morning Star Matriculation School, our mission is to provide
                a safe, inclusive, and intellectually enriching environment
                where students flourish through a well-balanced curriculum and
                passionate educators. We aim to cultivate innovation,
                leadership, compassion, and resilience, ensuring every learner
                is prepared to succeed in life and contribute meaningfully to
                society.
              </p>
            </div>
          </div>
          <Link to="/about" className={styles.cta}>
            Learn More <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
