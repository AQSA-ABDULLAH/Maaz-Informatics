import React from "react";
import styles from "./section3.module.css";

function Section3() {
  return (
    <div className={styles.section3}>
      <div className={styles.section_container}>
        <h1 className={styles.heading}>Wysa Wellbeing Hub</h1>

        <section className={styles.section_layout}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Overcome Loneliness</h2>
              <p>7 EXERCISES</p>
            </div>
            <div className={styles.card}>
              <h2>Improve Self-esteem</h2>
              <p>8 EXERCISES</p>
            </div>
            <div className={styles.card}>
              <h2>Cope with Pain</h2>
              <p>6 EXERCISES</p>
            </div>
            <div className={styles.card}>
              <h2>For LGBTQIA</h2>
              <p>6 EXERCISES</p>
            </div>
            <div className={styles.card}>
              <h2>Relationship Pack</h2>
              <p>8 EXERCISES</p>
            </div>
            <div className={styles.card}>
              <h2>For Breakups</h2>
              <p>9 EXERCISES</p>
            </div>
          </div>

          <div className={styles.description}>
            <p>
              We understand that managing multiple wellbeing benefits for diverse
              teams can be challenging. Employees can often struggle to navigate
              offerings and sometimes wellbeing needs go unmet because employees
              don’t know what’s available to them.
            </p>
            <p>
              Our bespoke wellbeing hub streamlines this process, improving
              engagement with each resource. Wysa’s AI chatbot helps employees find
              the right resource from the benefits available to them.
            </p>
            <p>
              <strong>This approach won our client a <a href="#">Brandon Hall Gold award!</a></strong>
            </p>
          </div>
        </section>

        <button className={styles.button}>Demo Wysa Wellbeing Hub</button>
      </div>
    </div>
  );
}

export default Section3;
