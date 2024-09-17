import React, { useState, useEffect } from 'react';
import Button from "../../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithEmail } from "../../../../redux/containers/auth/actions";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';  // Import SweetAlert2
import styles from "./login.module.css";

function Login({ handleSignupClick, onClose }) {  // Add onClose here
    const navigate = useNavigate();
    const reduxState = useSelector((state) => state.signIn);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(signUpWithEmail(loginData));
            if (reduxState.isSignedIn) {
                Swal.fire(
                    'Login Successful!',
                    'You have successfully logged in.',
                    'success'
                );
                onClose();
            }
        } catch (error) {
            Swal.fire(
                'Login Failed!',
                'Please check your email or password and try again.',
                'error'
            );
        }
    }

        const togglePasswordVisibility = () => {
            setShowPassword((prevShowPassword) => !prevShowPassword);
        };
        

        return (
            <form className="login-form" onSubmit={handleSubmit}>
                <div>Welcome Back!</div>
                <p className="subtitle">Stay up-to-date with the latest news by signing in to our newsletter.</p>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={loginData.email}
                />
                <div id="passwordInput">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        onChange={handleChange}
                        value={loginData.password}
                    />
                    <img
                        className={styles.password_toggle_icon}
                        alt="Toggle visibility"
                        onClick={togglePasswordVisibility}
                        src={process.env.PUBLIC_URL + "/assest/images/login-model/View_icon.png"}
                    />
                </div>
                <label>
                    <input type="checkbox" name="keepLoggedIn" />
                    Keep me logged in
                    <Link to="/forgot-password">Forgot Password?</Link>
                </label>

                {/* Update the button to trigger handleSubmit */}
                <Button btnText="LOGIN" primary radius="0px" type="submit" />

                <small>
                    <br />
                    Don't have an account? <Button
                        btnText={"Signup"}
                        textColor={"#9f29bd"}
                        size={"14px"}
                        btnClick={handleSignupClick}
                    />
                </small>
            </form>
        );
    }

    export default Login;

