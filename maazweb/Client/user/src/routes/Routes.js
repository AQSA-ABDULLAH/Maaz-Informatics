import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "../component/sections/header/Header";
import Footer from "../component/sections/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSignedIn } from "../redux/containers/auth/actions";
import styles from './routes.module.css';

// Pages
import Login from "../pages/Login";
import Signup from "../component/molecules/login-model/signup/Signup"
import Home from "../pages/landing-page/Home";
import ChronicCare from "../pages/chronic-care/ChronicCare";
import ClinicalEvidence from "../pages/clinical-evidence/ClinicalEvidence";
import BlogsNews from "../pages/blogs&News/BlogsNews";
import BlogsDetails from "../pages/blogs&News/BlogsDetails";
import Team from "../pages/about-us/team/Team";
import FAQ from "../pages/about-us/faq/FAQ";
import ContactUs from "../pages/about-us/contact-us/ContactUs";
import Career from "../pages/about-us/careers/Career";

function AppRoutes() {
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state.signIn);
    const location = useLocation();

    // Hooks to manage authentication state and scroll behavior
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const noHeaderPaths = ["/404", "/signup", "/login"];

    // Monitor the scroll position to add the "scrolled" class
    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    // Check for access token in localStorage
    const accessToken = localStorage.getItem("access_token");
    if (accessToken && !reduxState.isSignedIn) {
        dispatch(setSignedIn(accessToken));
    }

    return (
        <>
            {/* Add header only if path is not in noHeaderPaths */}
            <div className={`${styles.header_container} ${isScrolled ? 'scrolled' : ''}`}>
    {!noHeaderPaths.includes(location.pathname) && <Header />}
</div>


            {/* Define all routes */}
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

                {/* Authenticated routes */}
                <Route
                    path="/login"
                    element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
                />
                <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Signup />}
        />
            </Routes>

            {/* Add footer only if path is not in noHeaderPaths */}
            {!noHeaderPaths.includes(location.pathname) && <Footer />}
        </>
    );
}

export default AppRoutes;
