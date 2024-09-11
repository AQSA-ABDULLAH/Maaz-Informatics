import React from "react";
import styles from "./signup.module.css";
import Form from "../../molecules/Form";
const Signup = () => {
  return (
    <>
      <section className={styles.signupContainer}>
        <div className={styles.signup}>
          <div className={styles.imgContainer}>
            {/* <img src="./assets/logo/logo.png" alt="logo" /> */}
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formTop}>
              {/* <img src="./assets/logo/logodark.png" alt="logo" /> */}
              <h3>join</h3>
              {/* <div className={styles.btnContainer}>
                <div>user info</div>
                <div>billing information</div>
              </div> */}
            </div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
