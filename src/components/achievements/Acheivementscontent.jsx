import React from "react";
import styles from "./Acheivementscontent.module.css";
import circleHighlight from '../../assets/images/circle.png';

const Acheivementscontent = () => {
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.content}>
         <span className={styles.label}>CHECKOUT OUR ACHIEVEMENTS</span>
          <h2 className={styles.title}>
                       Celebrating Academic <span className={styles.highlight}>Excellence<img src={circleHighlight} alt="circle highlight" /></span><br />
                    </h2>
        {/* <h2 className={styles.heading}>Celebrating Academic Excellence</h2> */}
        <p className={styles.description}>
          MSMS has consistently set benchmarks in academic and co-curricular excellence that outshine other institutions:
        </p>
        <ul className={styles.list}>
          <li>100% Pass Results in Board Exams for the last [X] consecutive years.</li>
          <li>Top Ranks in District-Level Exams, with students securing State and National level scholarships.</li>
          <li>Winners of Inter-School Competitions in Science Expo, Math Olympiad, and Cultural Events.</li>
          <li>Certified Smart Classrooms with digital learning tools in all classrooms.</li>
          <li>National-Level Sports Achievements – Our students have brought home medals in athletics, kabaddi, and chess.</li>
          <li>Strong Alumni Network – MSMS graduates have secured placements in top colleges across India and abroad.</li>
          <li>Community Outreach Programs that promote student involvement in social service, leadership, and sustainability.</li>
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <img src="./images/msms achievements.webp" alt="MSMS Achievements" className={styles.image} />
      </div>
    </section>
  );
};

export default Acheivementscontent;
