import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tab } from "../../constants/ManageTabs";
import styles from "./managecontactus.module.css";
import ViewContacts from "../../components/sections/contact-us/ViewContacts";

const ManageContactUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [setIsActive] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabName = params.get("tab");
    if (tabName == null) {
      document.title = "Contact Us"
    }
    if (tabName) {
      const tabIndex = Tab.findIndex(tab => tab.text.toLowerCase() === tabName.toLowerCase());
      if (tabIndex !== -1) {
        setIsActive(tabIndex);
      }
    }
    else {
      navigate(`?tab=ManageContactUs`);
    }
  }, [location, navigate, setIsActive]);

  return (
    <div className={styles.container}>
        <div >
             <ViewContacts />
        </div>
    </div>
  );
};

export default ManageContactUs;