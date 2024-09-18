import React from "react";
import styles from "./UserProfile.module.css";
import UserInfo from "../../atoms/userProfileAtoms/UserInfo";
import UserStat from "../../atoms/userProfileAtoms/UserStat";
import Jemes from "../../atoms/userProfileAtoms/Jemes";
import Notifications from "../../atoms/userProfileAtoms/Notifications";
import BillingInfo from "../../atoms/userProfileAtoms/BillingInfo";
const UserProfile = () => {
  return (
    <>
      <section className={styles.userProfile}>
        <div className={styles.mainBlock}>
          <UserInfo />
          <UserStat />
        </div>
        <div className={styles.sideBlock}>
          <Jemes />
          <Notifications />
          <BillingInfo />
        </div>
      </section>
    </>
  );
};

export default UserProfile;
