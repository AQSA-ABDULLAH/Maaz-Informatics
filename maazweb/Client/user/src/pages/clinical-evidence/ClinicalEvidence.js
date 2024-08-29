import React from 'react';
import styles from './clinicalevidence.module.css';
import ClinicalSection1 from '../../component/sections/clinical-evidence/section1/ClinicalSection1';
import ClinicalSection2 from '../../component/sections/clinical-evidence/section2/ClinicalSection2';

export default function ClinicalEvidence() {
    return (
        <>
            <div className={styles.homeContainer}>
                <ClinicalSection1 />
                <ClinicalSection2 />
            </div>
        </>
    )
}
