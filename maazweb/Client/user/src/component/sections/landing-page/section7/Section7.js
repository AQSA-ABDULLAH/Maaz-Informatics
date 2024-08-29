import React from 'react';
import styles from './section7.module.css';

export default function Section7() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>Why limit your team's access to mental health resources?</h2>
        <p>
          Help every person in your team be their best self. Give anonymous, unlimited,
          and in-time mental health support to everyone who needs it, and save on costs.
        </p>
        <p>Make the wiser choice.</p>
        <button className={styles.demoButton}>Schedule a Demo</button>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/assest/images/landing-page/9930219-808225_955898.png" alt="Happy person" className={styles.image} />
      </div>
    </div>
  );
}

