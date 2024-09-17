import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import styles from "./viewcontacts.module.css";
import { API_URL } from "../../../constants/WebsiteConstants"; // Make sure API_URL is correct

export default function ViewContacts() { // Renamed component for clarity
  const [contacts, setContacts] = useState([]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // GET CONTACT US DATA
  useEffect(() => {
    axios.get(`${API_URL}/api/contactus/get-messages`) // Corrected API URL string
      .then(res => {
        console.log(res.data);

        // Ensure API response matches this structure
        const contactUsData = res.data.data || []; // Added a fallback to avoid errors if data is undefined
        setContacts(contactUsData);
      })
      .catch(err => {
        console.error("Error fetching contact data: ", err);
      });
  }, []);


  return (
    <div className={styles.contactus_container}>
      <h1 className={styles.heading} >CONTACT DETAILS</h1>
      <p>List Of Contacts For Future Reference</p>
      <table className={styles.table}>
        <thead className={styles.table_header} >
          <tr>
            <th>Contact ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone NO.</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((item, index) => (
              <tr key={index}>
                <td className={styles.contactID}>
                  {item._id}
                </td>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.email}</td>
                <td>{item.phoneno}</td>
                <td>{item.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No contact messages found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}