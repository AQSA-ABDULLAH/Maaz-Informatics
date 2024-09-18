import React from "react";
import styles from "./userProfileAtoms.module.css";
const Jemes = () => {
  return (
    <>
      <section className={styles.sideAtom}>
        <div className={styles.sideAtomTop}>
          <h4>James</h4>
          <p>...</p>
        </div>
        <div className={styles.sideAtomBottom}>
          <div className={styles.row}>
            <div className={styles.rowText}>
              <img src="./assets/image/profile/jokers_6865904.png" alt="icon" />
              <p>gold membership</p>
            </div>
            <div>...</div>
          </div>
          <hr />
          <div className={styles.row}>
            <div className={styles.rowText}>
              <img src="./assets/image/profile/euro_591978.png" alt="icon" />
              <p>
                account balance:<span className={styles.balance}>$45</span>
              </p>
            </div>
            <div>...</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jemes;
