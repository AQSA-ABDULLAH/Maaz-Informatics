import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../contact-us/viewcontacts.module.css";
import { API_URL } from "../../../constants/WebsiteConstants";

export default function ViewUsers() {
  const [contacts, setContacts] = useState([]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // GET USER DATA
  useEffect(() => {
    axios.get(`${API_URL}/api/user/get-users`)
      .then(res => {
        console.log(res.data);

        // Ensure API response matches this structure
        const contactUsData = res.data.data || [];
        setContacts(contactUsData);
      })
      .catch(err => {
        console.error("Error fetching contact data: ", err);
      });
  }, []);


  return (
    <div className={styles.contactus_container}>
      <h1 className={styles.heading} >MANAGE USERS</h1>
      <p>List Of Users For Future Reference</p>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone NO.</th>
            <th>Status</th>
            <th>Joined Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((item, index) => (
              <tr key={index}>
                <td className={styles.contactID}>
                  {item._id}
                </td>
                <td>{item.userName}</td>
                <td>{item.country}</td>
                <td>{item.email}</td>
                <td>{item.phoneno}</td>
                <td>{item.status}</td>
                <td>{formatDate(item.createdAt)}</td> {/* Apply the formatDate function */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No user found.</td> {/* Update colSpan to 7 to match columns */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
