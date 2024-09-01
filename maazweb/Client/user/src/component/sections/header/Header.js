import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Button from "../../atoms/button/Button";

const Navbar = () => {
    // State to manage which dropdown is visible
    const [dropdownVisible, setDropdownVisible] = useState("");

    const handleMouseEnter = (menu) => {
        setDropdownVisible(menu);
    };

    const handleMouseLeave = () => {
        setDropdownVisible("");
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
                                    <li><Link to="/for-work/service1">Service 1</Link></li>
                                    <li><Link to="/for-work/service2">Service 2</Link></li>
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
                            <Link to="/case-studies">Case Studies & Reports</Link>
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
                        <Button
                            bgColor={"#61AC8A"}
                            btnText={"Book Demo"}
                            textColor={"white"}
                            radius={"20px"}
                            size={"14px"}
                        />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

