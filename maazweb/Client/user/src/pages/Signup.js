import React from "react";
import Membership from "../component/molecules/login-model/signup/Signup";
import styles from "../component/molecules/login-model/signup/signup.module.css";

const Signup = () => {
  return (
    <div className={styles.background}>
      <Membership />
    </div>
  );
};

export default Signup;
