import React from "react";
import styles from "./userProfileAtoms.module.css";
import Button from "../button/Button";
const UserInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <article className={styles.avatar}>
            <img src="./favicon.ico" alt="avatar" srcset="" />
          </article>
          <article className={styles.information}>
            <p>ID 34567823</p>
            <h4>James</h4>
            <ul className={styles.infoList}>
            <li>
                <span>
                  <img
                    src="./assest/images/profile/user.png"
                    alt="icon"
                  />
                </span>
                <p>James Umair</p>
              </li>
              <li>
                <span>
                  <img
                    src="./assest/images/profile/phone.png"
                    alt="icon"
                  />
                </span>
                <p>123456789</p>
              </li>
              <li>
                <span>
                  <img
                    src="./assest/images/profile/email.png"
                    alt="icon"
                  />
                </span>
                <p>james@gmail.com</p>
              </li>
              <li>
                <span>
                  <img
                    src="./assest/images/profile/location.png"
                    alt="icon"
                  />
                </span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, at.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
