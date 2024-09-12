import React from 'react';
import styles from "./contactus.module.css"
import ContactUsForm from '../../../component/molecules/contact-us/ContactUsForm';

function ContactUs() {
    return (
        <>
        <div className={styles.homeContainer}>
               <ContactUsForm />
            </div>
        </>
    )
}

export default ContactUs