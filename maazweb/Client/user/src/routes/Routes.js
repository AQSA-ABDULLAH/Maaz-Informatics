import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../component/sections/header/Header";
import styles from './routes.module.css';
import Home from "../pages/landing-page/Home";
import Footer from "../component/sections/footer/Footer";
import ChronicCare from "../pages/chronic-care/ChronicCare";
import ClinicalEvidence from "../pages/clinical-evidence/ClinicalEvidence";
import BlogsNews from "../pages/blogs&News/BlogsNews";
import BlogsDetails from "../pages/blogs&News/BlogsDetails"
import Team from "../pages/about-us/team/Team";
import FAQ from "../pages/about-us/faq/FAQ";
import ContactUs from "../pages/about-us/contact-us/ContactUs";
import Career from "../pages/about-us/careers/Career";

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
                <Route path="/blog&news" element={<BlogsNews />} />
                <Route path="/blog&news/:id" element={<BlogsDetails />} />
                <Route path="/about-us/team" element={<Team />} />
                <Route path="/about-us/faq" element={<FAQ />} />
                <Route path="/about-us/contact-us" element={<ContactUs />} />
                <Route path="/about-us/careers" element={<Career />} />
            </Routes>
            {!noHeaderPaths.includes(location.pathname) && <Footer />}
        </>
    )
}

export default AppRoutes;