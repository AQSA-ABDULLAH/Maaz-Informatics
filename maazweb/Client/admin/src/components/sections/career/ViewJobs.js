import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './jobs.module.css';
import { API_URL } from "../../../constants/WebsiteConstants";

// Modal component
const JobModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>✖</button>
                <h2>{job.title}</h2>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Category:</strong> {job.category}</p>
                <p><strong>Status:</strong> {job.status}</p>
                <p><strong>Description:</strong> {job.description}</p>
            </div>
        </div>
    );
};

export default function ViewJob() {
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        // Fetch jobs from the API
        axios.get(`${API_URL}/api/career/get-jobs`)
            .then(response => {
                const data = response.data.data;
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

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    return (
        <div className={styles.jobSection}>
            <div className={styles.jobContainer}>
                {/* <div className={styles.header}>
                    <h2>Available Jobs</h2>
                    <div className={styles.locationFilter}>
                        <button>All Locations <span className={styles.dropdownArrow}>▾</span></button>
                    </div>
                </div> */}

                {categories.map((category) => (
                    <div key={category} className={styles.jobCategory}>
                        <h3>{category}</h3>
                        <ul>
                            {groupedJobs[category] && groupedJobs[category].length > 0 ? (
                                groupedJobs[category].map((job) => (
                                    <li key={job._id} onClick={() => handleJobClick(job)} className={styles.jobItem}>
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
            {selectedJob && <JobModal job={selectedJob} onClose={handleCloseModal} />}
        </div>
    );
}