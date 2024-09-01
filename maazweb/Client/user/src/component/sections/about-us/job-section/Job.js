import React from 'react';
import styles from './job.module.css';

export default function Job() {
    return (
        <div className={styles.jobSection}>
            <div className={styles.jobContainer}>
                <div className={styles.header}>
                    <h2>Available Jobs</h2>
                    <div className={styles.locationFilter}>
                        <button>All Locations <span className={styles.dropdownArrow}>▾</span></button>
                    </div>
                </div>

                <div className={styles.jobCategory}>
                    <h3>Marketing</h3>
                    <ul>
                        <li>
                            <div className={styles.jobTitle}>Senior Group Design Manager</div>
                            <div className={styles.jobLocation}>Sydney - Australia</div>
                            <div className={styles.jobPosted}>Posted 13 days ago</div>
                        </li>
                        <li>
                            <div className={styles.jobTitle}>Campaign Manager</div>
                            <div className={styles.jobLocation}>Remote</div>
                            <div className={styles.jobPosted}>Posted 13 days ago</div>
                        </li>
                        <li>
                            <div className={styles.jobTitle}>Director Demand Generation</div>
                            <div className={styles.jobLocation}>California - San Francisco</div>
                            <div className={styles.jobPosted}>Posted 13 days ago</div>
                        </li>
                    </ul>
                </div>

                <div className={styles.jobCategory}>
                    <h3>Product & Technology</h3>
                    <ul>
                        <li>
                            <div className={styles.jobTitle}>Associate Software Engineer</div>
                            <div className={styles.jobLocation}>Posted 13 days ago</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

