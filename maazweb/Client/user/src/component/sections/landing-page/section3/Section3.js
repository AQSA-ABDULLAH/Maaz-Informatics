import React from 'react';
import styles from './section3.module.css';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function Section3() {
  return (
    <>
      <div className={styles.section3}>
        <h2>The business case for transforming how we support employees and families</h2>
        <p>{WEBSITE_NAME} has held over half a billion AI chat conversations with more than five million
          people about their mental health across 95 countries. The worrying trend we saw in
          employee mental health led us to conduct in-depth studies of employees in the USA and UK,
          as well as {WEBSITE_NAME}'s user base, to understand why current models aren't working.</p>

        <p>Our findings make a compelling case for employers to create early, anonymous,
          unlimited care and show how starting with {WEBSITE_NAME}'s conversational AI actually saves on
          the total cost of care.</p>

        <div className={styles.section_container}>
          <div className={styles.section_item}>
            <img src="/assest/images/landing-page/4143764-217485_92859.png" alt="Office" className={styles.section_image} />
            <h3>40% of employees need help</h3>
            <p>Our research shows that as many as <strong>4 in 10 employees suffer from symptoms of depression or anxiety</strong>, yet less than 7% access EAP due to stigma, lack of awareness, and time constraints. While talking to {WEBSITE_NAME}, <strong>42% of employees opened up about their declining mental health.</strong></p>
          </div>
          <div className={styles.section_item}>
            <img src="/assest/images/landing-page/250253-379060_525244.png" alt="Documents" className={styles.section_image} />
            <h3>Limited support costs more</h3>
            <p>Limited support means people delay access. Symptoms worsen and recovery takes longer. Every year, unaddressed depression and anxiety cost <strong>$580 per employee in absenteeism, lost productivity, and turnover.</strong> That’s <strong>$30 million a year for an employer with 50,000 people.</strong></p>
          </div>
          <div className={styles.section_item}>
            <img src="/assest/images/landing-page/4143764-566952_205631.png" alt="AI Support" className={styles.section_image} />
            <h3>AI as the first step of care works</h3>
            <p>The emotional bond people build with {WEBSITE_NAME} is as deep as that with a human therapist, and <strong>9 in 10 users find talking to {WEBSITE_NAME} helpful.</strong> AI-led support has been proven to improve symptoms while taking on <strong>80% of the support load</strong>, freeing up human support for where it's really needed.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Section3;
