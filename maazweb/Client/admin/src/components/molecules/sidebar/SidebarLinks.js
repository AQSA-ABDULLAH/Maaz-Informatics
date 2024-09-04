// SidebarLinks.js

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarStyles.module.css";

// Inside SidebarLinks.js
const SidebarLinks = ({ data, handleLinkClick }) => {
  return (
    <div className={styles.linksContainer}>
      {data.map((item, index) => (
        <NavLink
          to={item.route}
          className={styles.sideLink}
          key={index}
          onClick={() => {
            console.log(`Clicked on ${item.route}`);
            handleLinkClick();
          }}
        >
          <div className={styles.icon}>{item.icon}</div>
          <p className={styles.linkText}>{item.text}</p>
        </NavLink>
      ))}
    </div>
  );
};


export default SidebarLinks;
