import React from 'react';
import styles from './clinicalevidence.module.css';
import ClinicalSection1 from '../../component/sections/clinical-evidence/section1/ClinicalSection1';
import ClinicalSection2 from '../../component/sections/clinical-evidence/section2/ClinicalSection2';
import ClinicalSection3 from '../../component/sections/clinical-evidence/section3/ClinicalSection3';
import ClinicalSection4 from '../../component/sections/clinical-evidence/section4/ClinicalSection4';
import ClinicalSection5 from '../../component/sections/clinical-evidence/section5/ClinicalSection5';

export default function ClinicalEvidence() {
    return (
        <>
            <div className={styles.homeContainer}>
                <ClinicalSection1 />
                <ClinicalSection2 />
                <ClinicalSection3 />
                <ClinicalSection4 />
                <ClinicalSection5 />
            </div>
        </>
    )
}
