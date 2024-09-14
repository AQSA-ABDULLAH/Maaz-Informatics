import axios from 'axios';
import React, { useEffect, useState } from "react";
import Questions from "../../atoms/questions/Questions";
import styles from "./faqs.module.css";
import { API_URL } from '../../constant/WebsiteConstants';

const FAQs = () => {
    const [faqs, setFAQs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/faqs/get-faqs`);
                if (response.data && response.data.status === "success") {
                    setFAQs(response.data.data);  // Assuming the slider images array is in response.data.data
                    setLoading(false); // Set loading to false when data is fetched
                } else {
                    setError("Failed to fetch data");
                    setLoading(false); // Set loading to false even if there's an error
                }
            } catch (err) {
                setError("Error fetching data");
                setLoading(false);  // Set loading to false in case of an error
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

            <Questions faqs={faqs} /> {/* Changed prop name to faqs */}
        </div>
    );
};

export default FAQs;

