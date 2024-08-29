import React from 'react';
import styles from "./caresection1.module.css";

function CareSection1() {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.textContainer}>
                <h1>Chronic Care <br /> Management Service</h1>
                <p>Reimbursable under CPT</p>
                <button className={styles.learnMoreButton}>Get Started Today</button>
            </div>
        </div>
    )
}

export default CareSection1