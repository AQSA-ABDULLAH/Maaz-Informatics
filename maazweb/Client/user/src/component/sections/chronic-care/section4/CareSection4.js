import React from 'react';
import styles from "./caresection4.module.css";
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function CareSection4() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>Program Benefits</h2>
      <div className={styles.benefitsContainer}>
        <div className={styles.imageContainer}>
          <img src="/assest/images/chronic-care/16551177-88766_189097.png" alt="Efficiency and Time-Saving" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.benefit}>
            <h3>Efficiency and Time-Saving</h3>
            <p>Integrate easily with {WEBSITE_NAME} to focus more on patient care while we handle the rest.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Revenue Growth and Scalability</h3>
            <p>Boost your revenue and expand patient monitoring capabilities effortlessly with our advanced technology.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Cost Reduction and Ease of Adoption</h3>
            <p>Enjoy a no upfront cost, straightforward implementation, avoiding complex infrastructure and investment.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Enhanced Patient Wellbeing</h3>
            <p>Improve patient adherence and engagement with comprehensive support that addresses both physical and mental health needs.</p>
          </div>
          <div className={styles.benefit}>
            <h3>Comprehensive Support Services</h3>
            <p>Provide end-to-end care with {WEBSITE_NAME}'s digital and Medical Assistant services for better quality outcomes and patient-centered care.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareSection4;
