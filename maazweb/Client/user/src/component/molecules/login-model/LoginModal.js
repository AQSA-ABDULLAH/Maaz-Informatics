import { useEffect, useState } from "react";
import Button from "../atoms/button/Button";
import { useDispatch } from "react-redux";
import { signUpWithEmail } from "../../redux/containers/auth/actions";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./LoginModal.css";
import OAuth from "./googleAuth/OAuth";

function LoginModal({ onClose }) {
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signUpWithEmail(loginData));
  };

  useEffect(() => {
    if (reduxState.isSignedIn) {
      navigate('/');
    }
  }, [reduxState.isSignedIn, navigate]);



  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    // Get the DOM body element
    const bodyElement = document.body;

    // Add the "overflow: hidden" style
    bodyElement.style.overflow = "hidden";

    // Cleanup function: Remove the "overflow: hidden" style on component unmount
    return () => {
      bodyElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {onClose ? (
        <div onClick={() => onClose()} className="modal-conatainer1"></div>
      ) : (
        ""
      )}

      <div
        style={{
          backgroundImage: `url("/assets/images/Intro/deal1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="modal-content1"
      >
        <div className="logo-container">
          <img
            height={"60px"}
            alt=""
            src={process.env.PUBLIC_URL + "/assets/logo/LogoLight.png"}
          ></img>
        </div>

        <div className="login-form-container">
          <form className="login-form">
            <div>Login</div>

            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
              required
            ></input>
            <div id="passwordInput">
              <input
                onChange={handleChange}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              ></input>
              <img
                alt=""
                onPointerDown={togglePasswordVisibility}
                id="toggleIcon"
                src={
                  process.env.PUBLIC_URL + "/assets/image/login/View_icon.png"
                }
              ></img>
            </div>
            <label>
              <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" />
              Keep me logged in
              <span>
                <Link>Forgot Password?</Link>
              </span>
            </label>
            <Button
              btnClick={handleSubmit}
              bgColor={"rgb(247, 131, 18)"}
              radius={"0px"}
              btnText={"LOGIN"}
            />
            <small>
              {reduxState.isSignedIn
                ? "You are logged in."
                : "Please log in to continue."}
              <br />
              Don't have an account? <Link to="/signup">Register.</Link>
            </small>

            <OAuth />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginModal;