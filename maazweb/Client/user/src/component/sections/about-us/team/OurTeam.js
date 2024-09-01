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
          <img src="/assest/images/about-us/team/1.png" alt="Team Member 1" />
          <p>Team Member 1</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/2.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/3.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/4.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/5.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/6.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/7.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>

        <div className={style.teamMember}>
          <img src="/assest/images/about-us/team/2.png" alt="Team Member 2" />
          <p>Team Member 2</p>
          <span>Role</span>
        </div>
        
      </div>
    </div>
  )
}