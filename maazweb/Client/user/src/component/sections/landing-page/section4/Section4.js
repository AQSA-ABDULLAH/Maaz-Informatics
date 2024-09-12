import React from 'react';
import styles from './section4.module.css';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

export default function Section4() {
  return (
    <div className={styles.impactSection}>
      <h2>Scale of Impact</h2>
      <div className={styles.impactGrid}>
        <div className={styles.impactItem}>
          <h3>11 million</h3>
          <p>Lives Covered</p>
        </div>
        <div className={styles.impactItem}>
          <h3>91%</h3>
          <p>Users Find {WEBSITE_NAME} Helpful</p>
        </div>
        <div className={styles.impactItem}>
          <h3>500 million</h3>
          <p>Conversations</p>
        </div>
        <div className={styles.impactItem}>
          <h3>95</h3>
          <p>Countries</p>
        </div>
        <div className={styles.impactItem}>
          <h3>5 million</h3>
          <p>People Helped</p>
        </div>
        <div className={styles.impactItem}>
          <h3>2 million</h3>
          <p>CBT Sessions Delivered by AI</p>
        </div>
        <div className={styles.impactItem}>
          <h3>15+</h3>
          <p>Peer-Reviewed Publications</p>
        </div>
        <div className={styles.impactItem}>
          <h3>33%</h3>
          <p>Reduction in Lost-Time Days</p>
        </div>
        <div className={styles.impactItem}>
          <h3>10x</h3>
          <p>Access to Mental Health Support</p>
        </div>
      </div>
    </div>
  );
}



