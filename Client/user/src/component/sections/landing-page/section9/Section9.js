import React from 'react';
import styles from './section9.module.css';

export default function Section9() {
  return (
    <div className={styles.section}>
      <p className={styles.disclaimer}>
        <strong>Disclaimer:</strong> Wysa is not designed to assist with crises such as abuse, severe mental health conditions 
        that may cause feelings of suicide, harm to self, and any other medical emergencies. Wysa cannot and will not offer 
        medical or clinical advice. It can only suggest that users seek advanced and professional medical help. Please reach 
        out to your country-specific suicide hotline in case of an emergency.
      </p>
      <p className={styles.disclaimer}>
        You must be at least 18 years of age to use Wysa. If you are between 13 and 18 years of age, please read through the 
        Terms of Service and Privacy Policy along with your parents or legal guardian to understand eligibility before use. 
        Wysa is not designed to be used by children under 13.
      </p>
    </div>
  );
}

