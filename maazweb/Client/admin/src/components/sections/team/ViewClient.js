import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./viewclient.module.css";
import { API_URL } from "../../../constants/WebsiteConstants";

function ViewClient() {
  const [clients, setClients] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/teams/get-partners`);
        if (response.data && response.data.status === 'success') {
          setClients(response.data.data); // Assuming the data is an array of client details
        } else {
          console.error("Failed to fetch client data");
        }
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className={styles.clientContainer}>
        <h2>OUR TEAM</h2>
        <p>The Wysa team is over 150 people strong, from around three continents. It is an impact-driven group of specialists of all flavors: clinicians with thousands of hours of experience spanning from psychological therapy to medicine, Wysa's brilliant tech and UX leads, freelance clinicians, and a team of dedicated support staff who ensure that Wysa's services run smoothly and effectively every day. Here are some of the senior executives, board members, and advisors.</p>
      <div className={styles.clientGrid}>
        {clients.length > 0 ? (
          clients.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <img src={client.image} alt={client.name} className={styles.clientImage} />
            </div>
          ))
        ) : (
          <p>Loading clients...</p> // Optional: Add a loading state here
        )}
      </div>
    </div>
  );
}

export default ViewClient;
