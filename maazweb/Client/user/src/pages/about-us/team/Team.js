import React from 'react';
import styles from "./team.module.css";
import OurTeam from '../../../component/sections/about-us/team/OurTeam';

function Team() {
    return (
        <>
        <div className={styles.homeContainer}>
                <OurTeam />
            </div>
        </>
    )
}

export default Team;