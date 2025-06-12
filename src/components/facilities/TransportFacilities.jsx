import React from "react";
import styles from "./TransportFacilities.module.css";
import transport1 from "../../assets/images/Transport.webp"; // Only one image

const TransportFacilities = () => {
  return (
    <section className={styles.transportSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Transport Facilities</h2>
          <p className={styles.description}>
            Our school provides a safe, reliable, and well-organized transportation service to ensure that students have a smooth trip. Our well-maintained bus fleet runs many routes, making it convenient for students from various places.
          </p>
          <p className={styles.description}>
            Each bus is fitted with GPS tracking, CCTV cameras, and first-aid kits to provide real-time surveillance and student safety. Our professional drivers and trained attendants prioritize students' well-being by maintaining discipline and providing support throughout the ride.
          </p>

          <h3 className={styles.tableHeading}>Available Routes</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.routesTable}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Boarding Point</th>
                  <th>Stops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Old Bus Stand - New Bus Stand</td>
                  <td>Railway Junction, R.R Nagar, Cauvery Nagar</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>New Bus Stand - Vallam</td>
                  <td>Devaram Nagar, CG Vila Nagar</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Old Bus Stand - Medical</td>
                  <td>Rohini Hospital, EB Colony</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Old Bus Stand - Thiruvaiyaru</td>
                  <td>Karanthai, Palliagraharam, Kandiyur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.rightImage}>
          <img src={transport1} alt="School Bus" className={styles.singleImage} />
        </div>
      </div>
    </section>
  );
};

export default TransportFacilities;
