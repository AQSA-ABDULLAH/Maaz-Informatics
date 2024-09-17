import React from 'react';
import styles from "./contactus.module.css";
import ContactUsForm from '../../../component/molecules/contact-us/ContactUsForm';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function ContactUs() {
    return (
        <div className={styles.contactUSContainer}>
            <div className={styles.header}>
                <h1>CONTACT US</h1>
                <p>Any question or remarks? Just write us a message!</p>
            </div>
            <div className={styles.contactus}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <h2>Contact Information</h2>
                        <p>Say something to start a live chat!</p>
                        <ul>
                            <li>
                                <span>📞</span> +1012 3456 789
                            </li>
                            <li>
                                <span>📧</span> demo@gmail.com
                            </li>
                            <li>
                                <span>📍</span> 132 Dartmouth Street Boston, Massachusetts 02156
                                United States
                            </li>
                        </ul>

                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>

                    </div>

                    <ContactUsForm />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
