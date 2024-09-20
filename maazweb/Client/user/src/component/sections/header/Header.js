import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Button from "../../atoms/button/Button";
import LoginModal from "../../molecules/login-model/LoginModal";
import { FaBars, FaUser, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(() => {

    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleMouseEnter = (menu) => {
    setDropdownVisible(menu);
  };

  const handleMouseLeave = () => {
    setDropdownVisible("");
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.notification_bar}>
          <span>
            Read Wysa’s 2023 Employee Mental Health Report, as launched at World Economic Forum.{" "}
            <Link to="/learn-more" className={styles.learn_more_link}>Learn more</Link>
          </span>
        </div>

        <nav className={styles.navbar}>
          <div className={styles.logo_div}>
            <Link to="/">
              <img
                className={styles.logo}
                src="/assest/logo/logo.jpg"
                alt="Logo"
              />
            </Link>
          </div>

          <ul className={styles.navLink}>
            <li
              onMouseEnter={() => handleMouseEnter("forWork")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/for-work">For Work <span className={styles.dropdown_arrow}>▾</span></Link>
              {dropdownVisible === "forWork" && (
                <ul className={styles.dropdown}>
                  <li><Link to="/for-work/for-employers">For Employers</Link></li>
                  <li><Link to="/for-work/for-team">For Teams</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/chronic-care">Chronic Care</Link>
            </li>

            <li>
              <Link to="/clinical-evidence">Clinical Evidence</Link>
            </li>

            <li>
              <Link to="/blog&news">Case Studies & Reports</Link>
            </li>

            <li
              onMouseEnter={() => handleMouseEnter("aboutUs")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about-us">About Us <span className={styles.dropdown_arrow}>▾</span></Link>
              {dropdownVisible === "aboutUs" && (
                <ul className={styles.dropdown}>
                  <li><Link to="/about-us/team">Team</Link></li>
                  <li><Link to="/about-us/faq">FAQ</Link></li>
                  <li><Link to="/about-us/careers">Careers</Link></li>
                  <li><Link to="/about-us/contact-us">Contact Us</Link></li>
                </ul>
              )}
            </li>
          </ul>

          <div className={styles.button_div}>
            {isLoggedIn ? (
              <Link to="/user-profile"><FaUser className={styles.user_icon} /></Link>
            ) : (
              <Button
                bgColor={"#61AC8A"}
                btnText={"Login"}
                textColor={"white"}
                radius={"20px"}
                size={"14px"}
                btnClick={handleLoginClick}
              />
            )}
          </div>
        </nav>
      </div>

      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
    </>
  );
};

export default Navbar;

