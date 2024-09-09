import React from "react";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { LiaBarsSolid } from "react-icons/lia";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { setSignedOut } from "../../redux/containers/auth/actions";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const replaceHyphensWithSpaces = (str) => {
  return str.replace(/-/g, " ");
}; 

const TopHeader = ({ openSidebar, setOpenSidebar, haveButton, ButtonText, onClick }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const getPageName = () => {
    const path = location.pathname;
    if (path === "/") {
      return "";
    } else {
      const pageName = path.split("/")[1];
      return capitalizeFirstLetter(replaceHyphensWithSpaces(pageName));
    }
  };

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of this session!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setSignedOut());
        Swal.fire(
          'Logged Out!',
          'You have been logged out.',
          'success'
        );
      }
    });
  }

  return (
    <>
      <section className={styles.topHeader}>
        <div className={styles.hamburger}>
          <LiaBarsSolid
            color="#000000"
            onClick={() => setOpenSidebar(!openSidebar)}
            size={24}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.navbar}>
            <h3>{getPageName()}</h3>
          </div>
          <div>

            <button className={styles.btn} onClick={() => logout()}>logout</button>

          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;