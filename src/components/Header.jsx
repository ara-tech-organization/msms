import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* ✅ Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span>📞 +91 98765 43210</span>
          <span>✉️ info@msmschool.edu.in</span>
        </div>
        <div className={styles.topRight}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* ✅ Main Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./images/MSMS.png" alt="MSMS Logo" />
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>About</NavLink>
              </li>
              <li>
                <NavLink to="/academics" className={({ isActive }) => (isActive ? styles.active : undefined)}>Academics</NavLink>
              </li>
              <li>
                <NavLink to="/achievements" className={({ isActive }) => (isActive ? styles.active : undefined)}>Achievements</NavLink>
              </li>
              <li>
                <NavLink to="/facilities" className={({ isActive }) => (isActive ? styles.active : undefined)}>Facilities</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.active : undefined)}>Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>Contact</NavLink>
              </li>
              <li className={styles.ctaButton}>
                <NavLink to="/contact">Enroll Now</NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.hamburger} onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
