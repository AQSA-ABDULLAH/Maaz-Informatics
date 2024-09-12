import React from 'react';
import styles from "./clinicalsection4.module.css";
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function ClinicalSection4() {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.heading}>Research at {WEBSITE_NAME}</h2>
            <p className={styles.description}>
                Our behavioural health evidence consists of independent clinical trials that have sought to examine the solution with scientific rigor, and through the lens of real-world implementation. The studies are strongly guided by the voice of the user through co-design and qualitative methodologies, and document our work across clinical concerns of depression, anxiety, pain and chronic conditions.
            </p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h3 className={styles.gridNumber}>7</h3>
                    <p className={styles.gridText}>Clinical Trials</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.gridNumber}>5</h3>
                    <p className={styles.gridText}>Service Evaluations</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.gridNumber}>9</h3>
                    <p className={styles.gridText}>Real-World Studies</p>
                </div>
            </div>
        </div>
    );
}

export default ClinicalSection4;
