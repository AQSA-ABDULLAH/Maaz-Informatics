// import { useEffect, useState } from "react";
// import Button from "../../atoms/button/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { signUpWithEmail } from "../../../redux/containers/auth/actions";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginModal.css";
// import Signup from "./signup/Signup";

// function LoginModal({ onClose }) {
//   const navigate = useNavigate();
//   const reduxState = useSelector((state) => state.signIn);
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });
//   const [alertMessage, setAlertMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(signUpWithEmail(loginData));
//       if (reduxState.isSignedIn) {
//         setAlertMessage("Login successful!");
//         setTimeout(() => {
//           setAlertMessage("");
//         }, 2000);
//       }
//     } catch (error) {
//       setAlertMessage("Login failed. Please check your credentials.");
//     }
//   };

//   useEffect(() => {
//     if (reduxState.isSignedIn) {
//       navigate("/");
//     }
//   }, [reduxState.isSignedIn, navigate]);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   useEffect(() => {
//     const bodyElement = document.body;
//     bodyElement.style.overflow = "hidden";
//     return () => {
//       bodyElement.style.overflow = "auto";
//     };
//   }, []);

//   const handleSignupClick = () => {
//     setIsSignupModalOpen(true);
//     console.log("Opening Signup Modal:", isSignupModalOpen);
//   };

//   const handleCloseSignupModal = () => {
//     setIsSignupModalOpen(false);
//     console.log("Closing Signup Modal");
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div className="modal-overlay" onClick={onClose}></div>

//       {/* Login Modal */}
//       <div className="modal-content1">
//         <div className="logo-container">
//           <img
//             height={"60px"}
//             alt="Logo"
//             src={process.env.PUBLIC_URL + "/assest/logo/logo.jpg"}
//           />
//         </div>
//         <div className="login-form-container">
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div>WELCOME BACK !</div>
//             <p className="subtitle">
//               Stay up-to-date with the latest Wysa news, case studies, by signing in for our newsletter.
//             </p>
//             <input
//               onChange={handleChange}
//               name="email"
//               type="text"
//               placeholder="Email"
//               required
//             />
//             <div id="passwordInput">
//               <input
//                 onChange={handleChange}
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 required
//               />
//               <img
//                 alt="Toggle visibility"
//                 onPointerDown={togglePasswordVisibility}
//                 id="toggleIcon"
//                 src={process.env.PUBLIC_URL + "/assest/images/login-model/View_icon.png"}
//               />
//             </div>
//             <label>
//               <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" />
//               Keep me logged in
//               <span>
//                 <Link to="/forgot-password">Forgot Password?</Link>
//               </span>
//             </label>
//             <Button
//               btnClick={handleSubmit}
//               primary
//               radius={"0px"}
//               btnText={"LOGIN"}
//             />
//             <small>
//               {reduxState.isSignedIn
//                 ? "You are logged in."
//                 : "Please log in to continue."}
//               <br />
//               Don't have an account? <Button
//                 btnText={"Signup"}
//                 textColor={"#9f29bd"}
//                 size={"14px"}
//                 btnClick={handleSignupClick}
//               />
//             </small>
//           </form>
//         </div>
//       </div>

//       {/* Signup Modal rendered separately */}
//       {isSignupModalOpen && <Signup onClose={handleCloseSignupModal} />}

//       {/* Alert Message */}
//       {alertMessage && (
//         <div className="alert-message">
//           {alertMessage}
//         </div>
//       )}
//     </>
//   );
// }

// export default LoginModal;
















import React, { useState, useEffect } from 'react'; 
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithEmail } from "../../../redux/containers/auth/actions";
import { Link, useNavigate } from "react-router-dom";
import "./LoginModal.css";
import Signup from "./signup/Signup"
import Login from "./login/Login";  // Ensure this import is correct

function LoginModal({ onClose }) {
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
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
        setAlertMessage("Login successful!");
        setTimeout(() => {
          setAlertMessage("");
        }, 2000);
      }
    } catch (error) {
      setAlertMessage("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    if (reduxState.isSignedIn) {
      navigate("/");
    }
  }, [reduxState.isSignedIn, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignupClick = () => {
    setIsSignupMode(true);
  };

  const handleLoginClick = () => {
    setIsSignupMode(false);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content1">
        <div className="logo-container">
          <img height="60px" alt="Logo" src={process.env.PUBLIC_URL + "/assest/logo/logo.jpg"} />
        </div>
        <div className="login-form-container">
          {isSignupMode ? (
            <>
              <Signup />
            </>
          ) : (
            <Login
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              togglePasswordVisibility={togglePasswordVisibility}
              loginData={loginData}
              showPassword={showPassword}
              handleSignupClick={handleSignupClick}
              onClose={onClose} 
            />
          )}
        </div>
      </div>
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
    </>
  );
}

export default LoginModal;

