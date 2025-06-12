import React from "react";
import styles from "./FacilitiesSection.module.css";
import {
  FaChalkboardTeacher,
  FaPalette,
  FaBookReader,
  FaLanguage,
  FaRunning,FaBus
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Smart Classrooms",
    courses: "08 Digital Rooms"
  },
  {
    icon: <FaPalette />,
    title: "Art & Design Studio",
    courses: "15+ Creative Zones"
  },
  {
    icon: <FaBookReader />,
    title: "Library & Resource Center",
    courses: "7,000+ Books"
  },
  {
    icon: <FaLanguage />,
    title: "Language & Communication Lab",
    courses: "15 Interactive Modules"
  },
  {
    icon: <FaRunning />,
    title: "Sports & Athletics",
    courses: "12+ Outdoor & Indoor Games"
  },
  {
    icon: <FaBus />,
    title: "Transport Facilities",
    courses: "Well-connected Routes"
  }
];


const FacilitiesSection = () => {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.facilitiesHeader}>
        <p className={styles.category}>FACILITIES WE OFFER</p>
        <h2>Modern Facilities To Empower Every Learner</h2>
        <div className={styles.arrowAnimation}></div>
        <button className={styles.browseBtn}>At MSMS School, we provide state-of-the-art facilities designed to foster holistic development, creativity, and 21st-century learning. Explore our most loved campus features below.</button>
      </div>
      <div className={styles.facilitiesGrid}>
        {facilities.map((item, index) => (
          <div className={styles.facilityItem} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;