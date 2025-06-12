import React from 'react';
import styles from './HeroSection.module.css';
import heroPattern from '../../assets/images/pattern.png';

import { Link } from 'react-router-dom';
import dotPattern from '../../assets/images/dots.png';
import heroImage from '../../assets/images/students.jpg';
import dashedArrow from '../../assets/images/arrow.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={heroPattern} alt="pattern background" className={styles.pattern} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>WELCOME TO MORNING STAR SCHOOL</span>
          <h1 className={styles.title}>
            Achieving Your Dreams<br />
            Through Education
          </h1>
          <p className={styles.text}>
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>
          <Link to="/contact">
            <button className={styles.cta}>
              Admissions Open
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
          <img src={dashedArrow} alt="dashed arrow" className={styles.dashedArrow} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={heroImage} alt="students group" className={styles.heroImage} />
          <img src={dotPattern} alt="dot pattern" className={styles.dotPattern} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
