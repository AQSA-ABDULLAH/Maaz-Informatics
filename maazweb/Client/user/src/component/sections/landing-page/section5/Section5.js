import React from 'react';
import styles from './section5.module.css';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function Section5() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>How Does It Work?</h2>

      <div className={`${styles.stepContainer} ${styles.stepReverse}`}>
        <div className={styles.textContainer}>
          <h3>Step 1: Opening up to an AI coach</h3>
          <ul>
            <li>Conversational AI creates an anonymous, safe space to work through worries and stressors, preventing them from escalating in severity and towards illness.</li>
            <li>{WEBSITE_NAME}'s AI is clinically proven to create a therapeutic alliance equivalent to a human therapist within the first week.</li>
            <li>Most people feel better after their first conversation and lean on {WEBSITE_NAME} for on-demand support, whenever needed.</li>
          </ul>
        </div>

        <img src="/assest/images/landing-page/4143764-518317_890220.png" alt="Step 1 image" className={styles.image} />
      </div>

      <div className={styles.stepContainer}>
        <img src="/assest/images/landing-page/4143764-37576_873512.png" alt="Step 2 image" className={styles.image} />
        <div className={styles.textContainer}>
          <h3>Step 2: Structured programs and on-demand self-care</h3>
          <ul>
            <li>{WEBSITE_NAME}'s AI conversational care guides users through both curated CBT programs and on-demand support.</li>
            <li>In {WEBSITE_NAME}'s Clinical Programs, the AI checks in every morning and evening, and can also be supplemented by a human coach or therapist. The programs are clinically validated to reduce symptoms of depression and anxiety.</li>
            <li>For day-to-day stress, {WEBSITE_NAME} offers on-demand self-care through 150+ evidence-based exercises, including resources for anxiety, sleep, handling difficult conversations, and improving productivity.</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.stepContainer} ${styles.stepReverse}`}>
        <div className={styles.textContainer}>
          <h3>Step 3: Work with a professional</h3>
          <ul>
            <li>{WEBSITE_NAME} coaches offer 1-on-1 sessions, along with unlimited messaging between sessions. If chosen, employees can also be redirected to in-house EAP support through {WEBSITE_NAME}.</li>
            <li>{WEBSITE_NAME}'s conversational AI takes on 80% of the load by supporting people with sub-clinical symptom levels and guiding them through proactive prevention routines.</li>
            <li>Those who need professional support can access it sooner and as much as needed.</li>
          </ul>
        </div>
        <img src="/assest/images/landing-page/4143764-357777_41794.png" alt="Step 3 image" className={styles.image} />
      </div>

      <div className={styles.stepContainer}>
        <img src="/assest/images/landing-page/4143764-91763_524256.png" alt="Step 4 image" className={styles.image} />
        <div className={styles.textContainer}>
          <h3>Step 4: Customized escalation pathways</h3>
          <ul>
            <li>{WEBSITE_NAME}'s SOS feature guides people toward local and national crisis care helplines.</li>
            <li>The SOS feature also offers the ability to create a personal safety plan and practice grounding exercises.</li>
            <li>{WEBSITE_NAME}'s AI continuously screens for people in crisis and facilitates signposting to local helplines.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section5;


