import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../component/sections/header/Header";
import styles from './routes.module.css';
import Home from "../pages/landing-page/Home";
import Footer from "../component/sections/footer/Footer";
import ChronicCare from "../pages/chronic-care/ChronicCare";
import ClinicalEvidence from "../pages/clinical-evidence/ClinicalEvidence";
// import About from "../pages/home/About";

function AppRoutes() {
    const location = useLocation();
    const noHeaderPaths = ["/404"];
    return (
        <>
            <div className={styles.header_container}>
                {!noHeaderPaths.includes(location.pathname) && <Header />}
            </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chronic-care" element={<ChronicCare />} />
                    <Route path="/clinical-evidence" element={<ClinicalEvidence />} />
                </Routes>

                {!noHeaderPaths.includes(location.pathname) && <Footer/>}
        </>
    )
}

export default AppRoutes;