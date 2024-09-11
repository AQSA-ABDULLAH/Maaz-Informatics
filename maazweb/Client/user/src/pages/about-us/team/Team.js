import React from 'react';
import styles from "./team.module.css";
import OurTeam from '../../../component/molecules/team/OurTeam';

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