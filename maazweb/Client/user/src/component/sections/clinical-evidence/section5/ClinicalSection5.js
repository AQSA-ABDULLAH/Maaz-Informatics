import React from 'react';
import styles from './clinicalsection5.module.css';
import {WEBSITE_NAME} from "../../../constant/WebsiteConstants";
import Button from '../../../atoms/button/Button';

function ClinicalSection5() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/assest/images/clinical-evidence/4143764-858197_811348.png" alt="Contact Us" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.heading}>Partner with {WEBSITE_NAME} for Research</h2>
                <p className={styles.description}>
                    We aim to support the innovation and evidence-building within digital mental health and are always looking to connect with researchers.
                </p>
                <div className={styles.button_div}>
                    <Button
                        bgColor={"#61AC8A"}
                        btnText={"Contact Us"}
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

export default ClinicalSection5;
