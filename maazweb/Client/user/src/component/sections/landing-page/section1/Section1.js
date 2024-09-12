import React from 'react';
import styles from './section1.module.css';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function Section1() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <h1>Mental health that meets people where they are</h1>
        <h3>Completely anonymous.<br />No stigma. No limits.</h3>
        <p>
        {WEBSITE_NAME}'s clinically validated AI gives immediate support as the first step of care, 
          and human coaching for those who need more. Transform how supported your teams and families feel.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
      <div className={styles.awardContainer}>
        <div className={styles.awardBadge}>
          <p>Google Play</p>
          <h2>Best App</h2>
          <p>2020</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
