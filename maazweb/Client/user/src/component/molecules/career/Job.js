import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './job.module.css';
import { API_URL } from "../../constant/WebsiteConstants";

export default function Job() {
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch jobs from the API
        axios.get(`${API_URL}/api/career/get-jobs`)
            .then(response => {
                const data = response.data.data;  // Access the jobs array from the API response
                setJobs(data);
                
                // Extract categories from jobs
                const uniqueCategories = [...new Set(data.map(job => job.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => {
                console.error("Error fetching jobs:", error);
            });
    }, []);

    // Group jobs by category
    const groupedJobs = categories.reduce((acc, category) => {
        acc[category] = jobs.filter(job => job.category === category);
        return acc;
    }, {});

    return (
        <div className={styles.jobSection}>
            <div className={styles.jobContainer}>
                <div className={styles.header}>
                    <h2>Available Jobs</h2>
                    <div className={styles.locationFilter}>
                        <button>All Locations <span className={styles.dropdownArrow}>▾</span></button>
                    </div>
                </div>

                {categories.map((category) => (
                    <div key={category} className={styles.jobCategory}>
                        <h3>{category}</h3>
                        <ul>
                            {groupedJobs[category] && groupedJobs[category].length > 0 ? (
                                groupedJobs[category].map((job) => (
                                    <li key={job.id}>
                                        <div className={styles.jobTitle}>{job.title}</div>
                                        <div className={styles.jobLocation}>{job.location}</div>
                                        <div className={styles.jobPosted}>Posted {job.postedDays} days ago</div>
                                    </li>
                                ))
                            ) : (
                                <li>No jobs available</li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}