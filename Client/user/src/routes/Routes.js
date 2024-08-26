import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../component/sections/header/Header";
import styles from './routes.module.css';
import Home from "../pages/landing-page/Home";
// import About from "../pages/home/About";

function AppRoutes() {
    const location = useLocation();
    const noHeaderPaths = ["/404"];
    return (
        <>
            <div className={styles.header_container}>
                {!noHeaderPaths.includes(location.pathname) && <Header />}
            </div>
            <div className={styles.routes}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default AppRoutes;