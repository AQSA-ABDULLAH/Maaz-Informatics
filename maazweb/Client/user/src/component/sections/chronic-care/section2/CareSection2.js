import React from 'react';
import styles from "./caresection2.module.css";
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';
import Button from '../../../atoms/button/Button';

function CareSection2() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2>Why Our CCM Program?</h2>
          <p>Our 'done for you' Chronic Care Management (CCM) service offers a new revenue stream for providers
            and fills a major care gap for patients. This new telephonic service comes bundled with 24/7 digital
            psychosocial support through {WEBSITE_NAME}.</p>
        </div>

        <div className={styles.stepContainer}>
          <div className={styles.textContainer}>
            <h3>Maximize Revenue Effortlessly</h3>
            <p>CCM services qualify for reimbursement under codes 99490, 99487, and 99489. Our program streamlines this process, reducing administrative workload and enhancing revenue without added stress.
            </p>
          </div>

          <img src="/assest/images/chronic-care/16551177-144257_272497.png" alt="Step 1 image" className={styles.image} />
        </div>

        <div className={`${styles.stepContainer} ${styles.stepReverse}`}>
          <img src="/assest/images/chronic-care/16551177-853714_212521.png" alt="Step 2 image" className={styles.image} />
          <div className={styles.textContainer}>
            <h3>Comprehensive Patient Support</h3>
            <p>
              Chronic patients often lack sufficient mental health support. Partnering with {WEBSITE_NAME} ensures these individuals receive comprehensive care that benefits both their physical and mental health needs. This comes at no cost to you or to the patient.
            </p>
          </div>
        </div>

        <div className={styles.stepContainer}>
          <div className={styles.textContainer}>
            <h3>Hassle-Free Implementation</h3>
            <p>
              Skip the complexity of hiring new staff and managing extra administrative tasks. Our 'done for you' program takes care of everything, making the transition smooth and straightforward for your practice.
            </p>
          </div>
          <img src="/assest/images/chronic-care/16551177-211250_640546.png" alt="Step 3 image" className={styles.image} />
        </div>

        <div className={`${styles.stepContainer} ${styles.stepReverse}`}>
          <img src="/assest/images/chronic-care/16551177-589894_408774.png" alt="Step 4 image" className={styles.image} />
          <div className={styles.textContainer}>
            <h3>Proven Results</h3>
            <p>
              {WEBSITE_NAME} is proven to effectively reduce symptoms of depression and anxiety while also helping patients effectively manage pain and associated mental health challenges, leading to better overall health outcomes.
            </p>
          </div>
        </div>

        <div className={styles.button_div}>
          <Button
            bgColor={"#61AC8A"}
            btnText={"Learn More"}
            textColor={"white"}
            radius={"30px"}
            size={"20px"}
            fontWeight={"500"}
          />
        </div>
      </div>
    </>
  )
}

export default CareSection2;

