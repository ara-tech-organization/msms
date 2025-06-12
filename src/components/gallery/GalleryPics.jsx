import React, { useState } from 'react';
import styles from './GalleryPics.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const images = [
  './images/gal-1.jpeg',
  './images/gal-2.jpeg',
  './images/gal-3.jpeg',
  './images/gal-4.jpeg',
  './images/gal-5.jpeg',
  './images/gal-6.jpeg',
  './images/gal-7.jpeg',
  // './images/gal-8.jpeg',
  // './images/gal-9.jpeg',
];

const GalleryPics = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            onClick={() => openModal(index)}
            className={styles.galleryImg}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={`${styles.nav} ${styles.left}`} onClick={showPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Selected ${selectedIndex}`}
            className={styles.modalImg}
          />
          <button className={`${styles.nav} ${styles.right}`} onClick={showNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <button className={styles.closeBtn} onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPics;
