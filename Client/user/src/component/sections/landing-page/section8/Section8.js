import React from 'react';
import styles from './section8.module.css';

export default function Section8() {
  return (
    <div className={styles.section}>
      <h2>Awards and Certifications</h2>
      <div className={styles.certifications}>
        <img src="path-to-your-certification1.png" alt="Certification 1" />
        <img src="path-to-your-certification2.png" alt="Certification 2" />
        <img src="path-to-your-certification3.png" alt="Certification 3" />
        <img src="path-to-your-certification4.png" alt="Certification 4" />
        <img src="path-to-your-certification5.png" alt="Certification 5" />
      </div>
    </div>
  );
}

