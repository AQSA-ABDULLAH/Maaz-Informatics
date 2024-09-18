import React from "react";
import styles from "./userProfileAtoms.module.css";
const Notifications = () => {
  return (
    <>
      <section className={styles.sideAtom}>
        <div className={styles.sideAtomTop}>
          <h4>Notifications</h4>
          <p>...</p>
        </div>
        <div className={styles.notificationsRow}>
          <p>gift card expiring in days</p>
          <p>...</p>
        </div>
      </section>
    </>
  );
};

export default Notifications;
