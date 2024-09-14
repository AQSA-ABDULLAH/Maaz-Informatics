import axios from 'axios';
import React, { useEffect, useState } from "react";
import Questions from "../../molecules/faqs/Questions";
import styles from "./faqs.module.css";
import { API_URL } from '../../../constants/WebsiteConstants';

const ViewFAQs = () => {
    const [faqs, setFAQs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/faqs/get-faqs`);
                if (response.data && response.data.status === "success") {
                    setFAQs(response.data.data);  
                    setLoading(false); 
                } else {
                    setError("Failed to fetch data");
                    setLoading(false);
                }
            } catch (err) {
                setError("Error fetching data");
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    if (loading) {
        return <p>Loading FAQs...</p>;
    }

    if (error) {
        return <p>Error fetching FAQs: {error}</p>;
    }

    return (
        <div className={styles.FAQ}>
            <div className={styles.iconContainer}>
                <div className={styles.circle}></div>
            </div>
            <h1>Frequently Asked Questions</h1>
            <p>Our design team helps clients achieve their marketing and business goals through user-friendly designs.</p>

            <Questions faqs={faqs} />
        </div>
    );
};

export default ViewFAQs;