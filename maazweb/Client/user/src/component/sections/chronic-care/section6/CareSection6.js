import React from 'react';
import styles from "./caresection6.module.css";
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function CareSection6() {
    return (
        <>
            <div className={styles.sectionContainer}>
                <h1>Security and Privacy</h1>
                <p>{ WEBSITE_NAME } is built to the highest global data protection & security standards and clinical
                    safety and has been recognised as a leader in AI ethics, privacy and clinical safety. </p>
            </div>
        </>
    )
}

export default CareSection6;
