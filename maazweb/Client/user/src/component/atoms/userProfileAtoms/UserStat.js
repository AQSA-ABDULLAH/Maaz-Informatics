import React from "react";
import styles from "./userProfileAtoms.module.css";
const UserStat = () => {
  return (
    <>
      <div className={styles.statContainer}>
        <article className={styles.stat}>
          <h4>total visits</h4>
          <p>150</p>
          <small>Last visit November 1</small>
        </article>
        <article className={styles.stat}>
          <h4>late cancels</h4>
          <p>3</p>
        </article>
        <article className={styles.stat}>
          <h4>member since</h4>
          <p>2016</p>
        </article>
        <article className={styles.stat}>
          <h4>leave risk</h4>
          <p>low</p>
        </article>
      </div>
    </>
  );
};

export default UserStat;
