import React from 'react';
import style from "./ourteam.module.css";

export default function OurTeam() {
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

        <div className={style.teamMember}>
          
        </div>
        
      </div>
    </div>
  )
}