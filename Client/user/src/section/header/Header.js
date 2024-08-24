import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Button from "../../component/atoms/button/Button";

const Navbar = () => {
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
                                src="path/to/logo.png" // Ensure this path points to your logo
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <ul className={styles.navLink}>
                        <Link to="/for-work">
                            <li>For Work <span className={styles.dropdown_arrow}>▾</span></li>
                        </Link>

                        <Link to="/for-nhs">
                            <li>For NHS <span className={styles.dropdown_arrow}>▾</span></li>
                        </Link>

                        <Link to="/chronic-care">
                            <li>Chronic Care</li>
                        </Link>

                        <Link to="/clinical-evidence">
                            <li>Clinical Evidence</li>
                        </Link>

                        <Link to="/case-studies">
                            <li>Case Studies & Reports</li>
                        </Link>

                        <Link to="/about-us">
                            <li>About Us <span className={styles.dropdown_arrow}>▾</span></li>
                        </Link>
                    </ul>

                    <div className={styles.button_div}>
                        <Button
                            bgColor={"#FF7A00"}
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
