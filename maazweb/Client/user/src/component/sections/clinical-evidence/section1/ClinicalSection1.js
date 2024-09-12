import React from 'react';
import styles from "./clinicalsection1.module.css";
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function ClinicalSection1() {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.textContainer}>
                <h1>Clinical Evidence &<br /> Research Publications</h1>
                <p>{ WEBSITE_NAME } has a strong base of clinical evidence in behavioural health, with peer-reviewed
                    trials and efficacy studies across a range of clinical concerns, geographies and age
                    groups.</p>
                <button className={styles.learnMoreButton}>See our Research</button>
            </div>
        </div>
    )
}

export default ClinicalSection1;