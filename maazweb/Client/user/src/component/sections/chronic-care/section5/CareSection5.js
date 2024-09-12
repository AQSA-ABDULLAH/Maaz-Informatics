import React from 'react';
import styles from "./caresection5.module.css";
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function CareSection5() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>{ WEBSITE_NAME }'s Proven Impact</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <h3 className={styles.number}>11</h3>
          <p className={styles.text}>Million lives impacted in 95+ countries</p>
        </div>
        <div className={styles.gridItem}>
          <h3 className={styles.number}>700</h3>
          <p className={styles.text}>Million AI therapy conversations</p>
        </div>
        <div className={styles.gridItem}>
          <h3 className={styles.number}>RCTs</h3>
          <p className={styles.text}>With Harvard and Columbia</p>
        </div>
        <div className={styles.gridItem}>
          <h3 className={styles.number}>91%</h3>
          <p className={styles.text}>User helpfulness, 4.9 star rating</p>
        </div>
        <div className={styles.gridItem}>
          <h3 className={styles.number}>30%</h3>
          <p className={styles.text}>Faster return to work</p>
        </div>
        <div className={styles.gridItem}>
          <h3 className={styles.number}>31-40%</h3>
          <p className={styles.text}>Improvement in mental health symptoms</p>
        </div>
      </div>
      <button className={styles.demoButton}>Schedule a Demo</button>
    </div>
  )
}

export default CareSection5;
