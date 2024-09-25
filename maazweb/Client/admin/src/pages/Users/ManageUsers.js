import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tab } from "../../constants/ManageTabs";
import styles from "../ContactUs/managecontactus.module.css";
import ViewUsers from "../../components/sections/users/ViewUsers";

const ManageUsers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [setIsActive] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Manage Users"
    }
    if (tabName) {
      const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
      if (tabIndex !== -1) {
        setIsActive(tabIndex);
      }
    }
    else {
      navigate(`?tab=ManageUsers`);
    }
  }, [location, navigate, setIsActive]);

  return (
    <div className={styles.container}>
        <div >
              <ViewUsers />
        </div>
    </div>
  );
};

export default ManageUsers;