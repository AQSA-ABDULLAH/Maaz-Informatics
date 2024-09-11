import React from 'react';
import styles from './career.module.css';
import Job from '../../../component/molecules/career/Job';
import { WEBSITE_NAME } from '../../../component/constant/WebsiteConstants';

export default function Career() {
  return (
    <div className={styles.careerSection}>
      <div className={styles.desContainer}>
        <div className={styles.imageContainer}>
          <img
            src="/assest/images/about-us/career/4143764-368469_537678.jpeg"
            alt="Team working together"
            className={styles.careerImage}
          /> 
        </div>
        <div className={styles.contentContainer}>
          <h2>Why Work at { WEBSITE_NAME }?</h2>
          <ul>
            <li><strong>Take ownership</strong> and be an integral part of a <strong>fast-growing startup</strong>. You will build valuable skills as a professional while also making friends for life.</li>
            <li>We offer <strong>flexible work hours</strong>, a possibility for a <strong>fully remote job</strong>, and a culture where you thrive and are rewarded for being a smart worker.</li>
          </ul>
          <p>Join our team for an exciting, challenging, and fulfilling role!</p>
        </div>
      </div>
      <Job />
    </div >
  )
}

