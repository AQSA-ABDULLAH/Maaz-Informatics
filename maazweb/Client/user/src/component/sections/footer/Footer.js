import React from 'react';
import styles from './footer.module.css';
import {WEBSITE_NAME} from '../../constant/WebsiteConstants';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <>

            <div className={styles.section}>
                <p className={styles.disclaimer}>
                    <strong>Disclaimer:</strong> {WEBSITE_NAME} is not designed to assist with crises such as abuse, severe mental health conditions
                    that may cause feelings of suicide, harm to self, and any other medical emergencies. {WEBSITE_NAME} cannot and will not offer
                    medical or clinical advice. It can only suggest that users seek advanced and professional medical help. Please reach
                    out to your country-specific suicide hotline in case of an emergency.
                </p>
                <p className={styles.disclaimer}>
                    You must be at least 18 years of age to use {WEBSITE_NAME}. If you are between 13 and 18 years of age, please read through the
                    Terms of Service and Privacy Policy along with your parents or legal guardian to understand eligibility before use.
                    {WEBSITE_NAME} is not designed to be used by children under 13.
                </p>
            </div>


            <footer className={styles.footer}>
                <div className={styles.container}>

                    {/* Company Logo and Description */}
                    <div className={styles.logoSection}>
                        <img src="/assest/logo/logo.png" alt="Company Logo" className={styles.logo} />
                        <p className={styles.description}>
                            Your company's short description goes here. Describe your mission, values, or any other important information.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksSection}>
                        <h4>Quick Links</h4>
                        <ul className={styles.linksList}>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className={styles.socialSection}>
                        <h4>Follow Us</h4>
                        {/* <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div> */}



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

                    {/* Contact Information */}
                    <div className={styles.contactSection}>
                        <h4>Contact Us</h4>
                        <p><strong>Address:</strong> 1234 Street Name, City, State, Country</p>
                        <p><strong>Phone:</strong> (+1) 123-456-7890</p>
                        <p><strong>Email:</strong> info@yourcompany.com</p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className={styles.newsletterSection}>
                        <h4>Subscribe to Our Newsletter</h4>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                </div>
                <div className={styles.bottomBar}>
                    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    <div className={styles.terms}>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-conditions">Terms & Conditions</a>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;

