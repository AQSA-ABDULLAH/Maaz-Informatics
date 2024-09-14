import React from 'react';
import styles from './faq.module.css';  // Assuming CSS module for styling
import FAQs from '../../../component/molecules/faqs/FAQs';  // If you have a pre-built FAQs component

function FAQ() {
    return (
        <>
            <div className={styles.faqContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Shopify FAQ</h1>
                    <p className={styles.subtitle}>
                        If you're new to Shopify or looking to replatform your business,
                        this guide will help you learn more about the platform and its features.
                    </p>
                    <p className={styles.helpLink}>
                        Already have a Shopify store? Get detailed product information in our <a href="#" className={styles.link}>Help Center</a>
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img src={process.env.PUBLIC_URL + "/assets/shopify-faq-image.png"} alt="FAQ Illustration" />
                </div>
            </div>
            <div>
                <FAQs />
            </div>
        </>
    );
}

export default FAQ;
