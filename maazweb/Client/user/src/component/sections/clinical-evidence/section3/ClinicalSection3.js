import React from 'react';
import styles from "./clinicalsection3.module.css";
import Button from '../../../atoms/button/Button';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function ClinicalSection3() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/assest/images/clinical-evidence/8609156-424878_177970.png" alt="FDA Breakthrough Device Designation" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <h2>{WEBSITE_NAME} Receives FDA Breakthrough Device Designation for AI-led Mental Health Conversational Agent</h2>
                <p>
                    The FDA Breakthrough Device Designation follows an independent peer-reviewed clinical trial, published in JMIR,
                    that found {WEBSITE_NAME} to be effective in the management of chronic pain, and associated depression and anxiety.
                    The device was found to be more effective than standard orthopedic care, and comparable to in-person psychological counseling.
                </p>
                <div className={styles.button_div}>
                    <Button
                        bgColor={"#61AC8A"}
                        btnText={"Read the Article"}
                        textColor={"white"}
                        radius={"5px"}
                        size={"1rem"}
                        fontWeight={"500"}
                    />
                </div>
            </div>
        </div>
    )
}

export default ClinicalSection3;
