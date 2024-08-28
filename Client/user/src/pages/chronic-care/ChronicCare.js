import React from 'react';
import styles from './chroniccare.module.css';
import CareSection1 from '../../component/sections/chronic-care/section1/CareSection1';
import CareSection2 from '../../component/sections/chronic-care/section2/CareSection2';
import CareSection3 from '../../component/sections/chronic-care/section3/CareSection3';
import CareSection4 from '../../component/sections/chronic-care/section4/CareSection4';

function ChronicCare() {
  return (
    <>
            <div className={styles.homeContainer}>
                <CareSection1 />
                <CareSection2 />
                <CareSection3 />
                <CareSection4 />
            </div>
        </>
  )
}

export default ChronicCare;