import React from 'react';
import styles from "./caresection3.module.css";
import Button from '../../../atoms/button/Button';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function CareSection3() {
  return (
    <div className={styles.careSection}>
      <h2 className={styles.title}>Delivered by Our Clinical Staff</h2>
      <p className={styles.subtitle}>
        Powered by our evidence-based digital solution, this service creates the ability to:
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <img src="/assest/images/chronic-care/16551177-466170_447071.png" alt="Record Health Information" className={styles.icon} />
          <h3>Record Health Information and Care Plans</h3>
          <p>
            {WEBSITE_NAME} records and shares comprehensive electronic care plans with care teams.
          </p>
        </div>
        <div className={styles.feature}>
          <img src="/assest/images/chronic-care/16551177-861562_699955.png" alt="Monitor Care Plans" className={styles.icon} />
          <h3>Monitor Care Plans Regularly</h3>
          <p>
            Regular calls with {WEBSITE_NAME}’s MAs and NPs, ensuring continuous patient support and care continuity.
          </p>
        </div>
        <div className={styles.feature}>
          <img src="/assest/images/chronic-care/16551177-973521_798882.png" alt="Complete Comprehensive Needs Assessment" className={styles.icon} />
          <h3>Complete Comprehensive Needs Assessment</h3>
          <p>
            The team assesses medical, functional, and psychosocial needs, ensuring timely preventive services.
          </p>
        </div>
        <div className={styles.feature}>
          <img src="/assest/images/chronic-care/16551177-911857_540192.png" alt="Enable Data Sharing and Billing" className={styles.icon} />
          <h3>Enable Data Sharing and Billing</h3>
          <p>
            {WEBSITE_NAME} provides detailed care plan notes and logs to PCPs for the completion of billing.
          </p>
        </div>
      </div>
      <div className={styles.button_div}>
          <Button
            bgColor={"#61AC8A"}
            btnText={"Book a Demo"}
            textColor={"white"}
            radius={"30px"}
            size={"20px"}
            fontWeight={"500"}
          />
        </div>
    </div>
  )
}

export default CareSection3;

