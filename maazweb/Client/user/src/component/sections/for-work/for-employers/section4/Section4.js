import React from 'react';
import styles from './section4.module.css';

function Section4() {
  return (
    <>
    <div className={styles.container_heading}>
      <h2>Industry-leading outcomes</h2>
    </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src="/assest/images/for-work/for-employers/16551177-379228_597179.png" alt="Graph" className={styles.icon} />
          <div className={styles.title}>10x Higher Uptake Rate</div>
          <div className={styles.description}>Effective member marketing campaigns achieve uptake and engagement rates ten times higher than traditional EAPs.</div>
        </div>
        <div className={styles.card}>
          <img src="/assest/images/for-work/for-employers/16551177-699520_203668.png" alt="Medal" className={styles.icon} />
          <div className={styles.title}>Over 90% Positive Ratings</div>
          <div className={styles.description}>More than 90% of users find Wysa helpful, with the most commonly used tools among employees being those for managing anxiety and improving sleep.</div>
        </div>
        <div className={styles.card}>
          <img src="/assest/images/for-work/for-employers/16551177-464795_559338.png" alt="Clockwise Arrow" className={styles.icon} />
          <div className={styles.title}>Employees Return to Work Quicker</div>
          <div className={styles.description}>Employees on long-term sick leave after an injury recover one-third faster when they use Wysa.</div>
        </div>
        <div className={styles.card}>
          <img src="/assest/images/for-work/for-employers/16551177-434218_33596.png" alt="Handshake" className={styles.icon} />
          <div className={styles.title}>Establishing Emotional Bonds</div>
          <div className={styles.description}>People form an emotional bond with Wysa faster than a human therapist, creating a safe space for effective mental health care.</div>
        </div>
      </div>
      <div className={styles.learnMore}>Learn more about Wysa for Employers</div>
    </>
  )
}

export default Section4;
