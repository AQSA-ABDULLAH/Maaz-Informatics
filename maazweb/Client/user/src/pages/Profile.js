import React from "react";

import styles from "../component/molecules/userProfile/UserProfile.module.css";

import UserProfile from "../component/molecules/userProfile/UserProfile";
const Profile = () => {
  return (
    <>
      <section className={styles.profile_container}>
        <UserProfile />
      </section>
    </>
  );
};

export default Profile;
