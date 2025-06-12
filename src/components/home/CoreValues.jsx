import React from "react";
import styles from "./CoreValues.module.css";
// import rainbow from "../../assets/images/rainbow.png";
// import car from "../../assets/images/car.png";
// import birds from "../../assets/images/birds.png";
import splash from "../../assets/images/splash.png";
import lines from "../../assets/images/curved_lines.png";
import rightImage from "../../assets/images/Smart Class.jpg";
import { FaCheck } from "react-icons/fa";

const coreValues = [
  {
    title: "Integrity",
    description: "Fostering honesty and ethical values."
  },
  {
    title: "Excellence",
    description: "Striving for the best in all we do."
  },
  {
    title: "Respect",
    description: "Promoting empathy and kindness."
  },
  {
    title: "Discipline",
    description: "Building focus and responsibility."
  },
  {
    title: "Innovation",
    description: "Encouraging creative learning."
  },
  {
    title: "Responsibility",
    description: "Owning actions and decisions."
  }
];

const CoreValues = () => {
  return (
    <section className={styles.coreValuesSection}>
      {/* <img src={birds} alt="birds" className={styles.birds} /> */}
      {/* <img src={car} alt="car" className={styles.car} /> */}
      <img src={splash} alt="splash" className={styles.splash} />
      <img src={lines} alt="lines" className={styles.lines} />
      {/* <img src={rainbow} alt="rainbow" className={styles.rainbow} /> */}

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.why}>MSMS CORE VALUES</span>
          <h2 className={styles.title}>Guiding Principles That Shape Our Students</h2>
          <p className={styles.description}>
            At Morning Star School, our core values shape students into responsible, respectful, and successful individuals.
          </p>

          <div className={styles.gridValues}>
            {coreValues.map((value, index) => (
              <div className={styles.valueBox} key={index}>
                <FaCheck className={styles.checkIcon} />
                <div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <button className={styles.button}>Explore More</button> */}
        </div>

        <div className={styles.rightImage}>
          <img src={rightImage} alt="MSMS Student" />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;