// import React from 'react';
// import styles from "./section2.module.css";

// function Section2() {
//   return (
//     <div></div>
//   )
// }

// export default Section2










import React from 'react';
import styles from "../../../chronic-care/section2/caresection2.module.css";
import { WEBSITE_NAME } from '../../../../constant/WebsiteConstants';
import Button from '../../../../atoms/button/Button';

function Section2() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          
        </div>

        <div className={styles.stepContainer}>
          <div className={styles.textContainer}>
            <h3>24/7 confidential support </h3>
            <p>Our safe, therapeutic AI chatbot is available around the clock, providing instant, confidential support whenever employees need it most. Research shows that people open up about their worries to Wysa three times faster than to a human therapist.
            </p>
          </div>

          <img src="/assest/images/for-work/for-employers/16551177-616856_969601.png" alt="Step 1 image" className={styles.image} />
        </div>

        <div className={`${styles.stepContainer} ${styles.stepReverse}`}>
          <img src="/assest/images/for-work/for-employers/16551177-969382_400382.png" alt="Step 2 image" className={styles.image} />
          <div className={styles.textContainer}>
            <h3>High engagement and utilization </h3>
            <p>
            Wysa not only gets more people talking about their mental health, but it also encourages those who need further help to seek it—whether it's through a crisis helpline, your Employee Assistance Program (EAP), or our trained coaches. One of our corporate clients saw EAP uptake improve from 2% to 12% after introducing Wysa!
            </p>
          </div>
        </div>

        <div className={styles.stepContainer}>
          <div className={styles.textContainer}>
            <h3>Proven to improve mental health</h3>
            <p>
            Wysa significantly improves mood, reduces depression, and relieves anxiety, with symptom improvements of 31% to 40% from AI alone. We support people at all levels of need—mild, moderate, and severe. The UK’s NHS uses Wysa to help patients reduce symptoms before they even start therapy!
            </p>
          </div>
          <img src="/assest/images/for-work/for-employers/16551177-49479_414190.png" alt="Step 3 image" className={styles.image} />
        </div>

        <div className={`${styles.stepContainer} ${styles.stepReverse}`}>
          <img src="/assest/images/for-work/for-employers/16551177-903742_832666.png" alt="Step 4 image" className={styles.image} />
          <div className={styles.textContainer}>
            <h3>Data-driven insights for ROI </h3>
            <p>
            Gain valuable insights into your organization’s mental health needs with data-driven analytics. This enables you to make informed decisions on where to focus your budget and efforts, proving the ROI of your wellbeing investments.
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

export default Section2;