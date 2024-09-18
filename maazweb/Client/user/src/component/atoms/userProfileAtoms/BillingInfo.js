import React from "react";
import styles from "./userProfileAtoms.module.css";
const BillingInfo = () => {
  return (
    <>
      <section className={styles.sideAtom}>
        <div className={styles.sideAtomTop}>
          <h4>Billing Information</h4>
          <p>...</p>
        </div>
        <div className={styles.sideAtomBottom}>
          <div className={styles.row}>
            <p>cardholder name</p>
            <p>cardholder number</p>
          </div>
          <hr />
          <div className={styles.row}>
            <p>james</p>
            <p>123456789</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BillingInfo;
