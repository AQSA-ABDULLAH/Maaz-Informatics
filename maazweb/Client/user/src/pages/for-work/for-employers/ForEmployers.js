import React from 'react';
import styles from "../forwork.module.css"
import Hero from '../../../component/molecules/hero/Hero';
import Section1 from "../../../component/sections/for-work/for-employers/section1/Section1"
import Section2 from "../../../component/sections/for-work/for-employers/section2/Section2"
import Section3 from "../../../component/sections/for-work/for-employers/section3/Section3"
import Section4 from '../../../component/sections/for-work/for-employers/section4/Section4';

export default function ForEmployers() {
    return (
        <div className={styles.work_container}>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}
