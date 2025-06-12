import React from 'react';
import styles from './ContactUs.module.css';
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

const Contactus = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
<div className={styles.topContent}>
        <div className={styles.leftPanel}>
          <div className={styles.infoContent}>
            <h2>Get in Touch</h2>
            <p className={styles.description}>
              Suspendisse ultrice gravida dictum fusce placerat ultricles integer
            </p>

            <div className={styles.infoCard}>
              <div className={styles.infoBlock}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <p className={styles.label}>Our Address</p>
                  <p className={styles.bold}>
                    2667, Rajagopalasamy Kovil Street,<br /> Thanjavur, Tamil Nadu 613008
                  </p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <FaClock className={styles.icon} />
                <div>
                  <p className={styles.label}>Hours Of Operation</p>
                  <p className={styles.bold}>Mon - Fri: 9.00am to 5.00pm</p>
                  <p className={styles.subNote}>[2nd Sat Holiday]</p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <FaPhoneAlt className={styles.icon} />
                <div>
                  <p className={styles.label}>Contact</p>
                  <p className={styles.bold}>97896 22422<br />supportyou@info.com</p>
                </div>
              </div>
            </div>

            <div className={styles.customerCare}>&darr; Customer Care</div>

            <div className={styles.socialIcons}>
              <FaFacebookF />
              <FaInstagram />
              <FaPinterestP />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <form className={styles.form}>
            <label>Name*</label>
            <input type="text" placeholder="Name" />

            <label>Email Address*</label>
            <input type="email" placeholder="Email" />

            <label>Phone*</label>
            <input type="tel" placeholder="Phone" />

            <label>Subject*</label>
            <input type="text" placeholder="Subject" />

            <label>Message</label>
            <textarea rows="4" placeholder="Message"></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
</div>
        <div className={styles.iframeWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.758263114554!2d79.12854661480194!3d10.786999992311094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8cccdcd9f29%3A0x45320afdc8f97ac2!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688991739072!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
