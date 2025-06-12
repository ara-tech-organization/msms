import React from 'react';
import styles from './StaffPortalSection.module.css';
import { Link } from 'react-router-dom';

const facilitiesList = [
  "Smart Classrooms",
  "Digital Library",
  "Science Labs",
  "Sports Complex",
  "Music Room",
  "Art & Crafts",
];

const Facilities = () => {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2>Limitless Learning,<br />Limitless Possibilities!</h2>
          <p>Discover the facilities that help our students grow in every direction.</p>
          <ul>
            <li><span>✔</span> Engaging academic environment</li>
            <li><span>✔</span> State-of-the-art infrastructure</li>
            <li><span>✔</span> Well-rounded co-curricular programs</li>
          </ul>
          <Link to="/contact">
            <button className={styles.ctaButton}>JOIN US NOW</button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.circleGrid}>
            {facilitiesList.map((item, index) => (
              <div key={index} className={`${styles.circle} ${styles['circle' + (index + 1)]}`}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
