import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <h2>Admission open!</h2>
        <p>
          Stay connected with Morning Star Matriculation School, Thanjavur for latest news and updates.
        </p>
        <div className={styles.subscribeForm}>
          {/* <input type="email" placeholder="Enter Email Address" /> */}
          <Link to="/contact">
            <button>Enroll Now</button>
          </Link>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <h3 className={styles.schoolName}>Morning Star Matriculation School</h3>
          <p>Empowering students in Thanjavur with knowledge, care, and community. Shaping bright futures together.</p>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/facilities">Facilities</a></li>
          </ul>

        </div>

        <div className={styles.footerCol}>
          <h4>Useful Links</h4>
          <ul>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Parent Community</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>School Hours</h4>
          <p><FaClock className={styles.clockIcon} /> 8 AM - 5 PM, Monday - Saturday</p>
          <p>Visit us at Thanjavur. Excellence starts here!</p>
          {/* <button className={styles.joinBtn}>Join Us Now</button> */}
        </div>
      </div>

      {/* Bottom */}
       {/* Bottom Section */}
<div className={styles.bottomBar}>
  <div className={styles.leftLinks}>
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>
    <a href="/contact">Contact</a>
  </div>

  <div className={styles.centerText}>
    © {new Date().getFullYear()} Morning Star Matriculation School. All rights reserved.
  </div>

  <div className={styles.rightCredit}>
    Developed by <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer">ARA Discoveries</a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
