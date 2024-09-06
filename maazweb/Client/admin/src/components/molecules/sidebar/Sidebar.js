import React from "react";
import SidebarLinks from "./SidebarLinks";
import { Main, GeneralSettting } from "../../../constants/Data";
import { LiaTimesSolid } from "react-icons/lia";
import styles from "./SidebarStyles.module.css";
const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const handleLinkClick = () => {
    if(openSidebar){
    setOpenSidebar(false); 
    } 
  };


  return (
    <>
      <aside
        className={`${styles.sidebar} ${
          openSidebar ? `${styles.activeSidebar}` : ""
        } `}
      >
        {/* <div className={styles.logo}>
         <img src="/assets/logo/LogoDark.png" alt=""/>
        </div> */}

        {/* <div className={styles.spaceY}>
          <NavLink to={"/"} className={styles.sideLink} onClick={handleLinkClick}>
            <div className={styles.icon}>
              <AiFillHome size={20} />
            </div>
            <p className={styles.linkText}>Dashboard</p>
          </NavLink>
        </div> */}

        <div className={styles.logo}>
          <img src="/logo/logo.png" alt="Logo" />
        </div>

        {/* Data.js->Main */}
        <div className={` ${styles.linksBlock} `}>
          <SidebarLinks data={Main}  handleLinkClick={handleLinkClick}/>
        </div>

        {/* Data.js->General */}
        <div className={`${styles.spaceY} ${styles.linksBlock} `}>
          <h5 className={styles.headingText}>General Settings</h5>
          <SidebarLinks data={GeneralSettting}   handleLinkClick={handleLinkClick}/>
        </div>
        
        <LiaTimesSolid
          className={styles.closeIcon}
          color="#000"
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      </aside>
    </>
  );
};

export default Sidebar;