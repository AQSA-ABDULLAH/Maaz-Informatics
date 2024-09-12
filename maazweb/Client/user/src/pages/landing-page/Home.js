import React from 'react';
import styles from './home.module.css';
import Section1 from '../../component/sections/landing-page/section1/Section1';
import Section2 from '../../component/sections/landing-page/section2/Section2';
import Section3 from '../../component/sections/landing-page/section3/Section3';
import Section4 from '../../component/sections/landing-page/section4/Section4';
import Section5 from '../../component/sections/landing-page/section5/Section5';
import Section6 from '../../component/sections/landing-page/section6/Section6';
import Section7 from '../../component/sections/landing-page/section7/Section7';
import Section8 from '../../component/sections/landing-page/section8/Section8';
import Hero from '../../component/molecules/hero/Hero';

function Home() {
    return (
        <>
            <div className={styles.homeContainer}>
                {/* <Section1 /> */}
                <Hero />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </div>
        </>
    )
}

export default Home