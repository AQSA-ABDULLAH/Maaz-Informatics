import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./ourteam.module.css";
import { API_URL } from "../../constant/WebsiteConstants";  // Adjust the path as per your project structure

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch team members when the component mounts
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/teams/get-partners`);
        if (response.data && response.data.status === "success") {
          setTeamMembers(response.data.data); // Assuming the API returns an array of team members in `data`
        } else {
          console.error("Failed to fetch team members");
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className={style.teamContainer}>
      <h2>Our Team</h2>
      <p>
        The Wysa team is over 150 people strong, from around three continents. It is an impact-driven group of specialists
        of all flavors: clinicians with thousands of hours of experience spanning from psychological therapy to medicine, Wysa's
        brilliant tech and UX leads, freelance clinicians, and a team of dedicated support staff who ensure that Wysa's services
        run smoothly and effectively every day. Here are some of the senior executives, board members, and advisors.
      </p>

      <div className={style.teamGrid}>
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <div key={index} className={style.teamMember}>
              <img src={member.image} alt={member.name} className={style.teamImage} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.description}</p>
            </div>
          ))
        ) : (
          <p>Loading team members...</p> // You can add a loading spinner here if desired
        )}
      </div>
    </div>
  );
}
