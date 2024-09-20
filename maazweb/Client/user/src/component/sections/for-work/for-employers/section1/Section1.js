import React from "react";
import styles from "./section1.module.css";

function Section1() {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>
        A new way to deliver mental wellbeing support
      </h1>
      <p className={styles.description}>
        Create a workplace where your team feels supported and engaged. Wysa for
        Employers offers 24/7 mental health resources that help Employees manage
        stress and build resilience, leading to a healthier, more productive
        workforce.
      </p>
      <button className={styles.button}>Learn more</button>
    </div>
  );
}

export default Section1;
