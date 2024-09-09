import { useEffect, useState } from "react";
import Button from "../atoms/buttons/Button";
import styles from './loginModal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { signUpWithEmail } from '../../redux/containers/auth/actions'

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('aqsaabdullah5834@gmail.com');
  const [password, setPassword] = useState('qwerty12345');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const { loading, error, payload } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  console.log(loading, error, payload);
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      "email": email,
      "password": password,
    }
    if (email) {
      setEmailValid(true);
      if (password) {
        setPasswordValid(true);
        dispatch(signUpWithEmail(userData))
      }

    } else {
      setEmailValid(false);
      setPasswordValid(false);
    }
  }

  const handleChange = (event, type) => {
    if (type === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.style.overflow = "hidden";
    return () => {
      bodyElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={styles.modal_content} >
        <div className={styles.logo_container}>
      
          <div className={styles.image}>
          <img className={styles.logo_image} src="/assets/logo/LogoDark.png" alt=""></img>
          <img className={styles.login_image} src="/assets/images/cars/image4.png" alt=""></img>
          </div>
        </div>
        <div className={styles.login_form_container}>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <div>Login</div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => handleChange(e, 'email')}
              style={{ border: isEmailValid ? "" : "2px solid red" }}
            ></input>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => handleChange(e, 'password')}
                style={{ border: isPasswordValid ? "" : "2px solid red" }}
              ></input>
              <img
                onPointerDown={togglePasswordVisibility}
                className={styles.toggleIcon}
                src={!showPassword ? (
                  "/assets/images/login/solar_eye-bold.png"
                ) : (
                  "/assets/images/login/solar_eye-closed-bold.png"
                )}
              alt=""></img>
            </div>
            <Button
              type="submit"
              primary
              radius={"0px"}
              hoverColor={"rgb(247, 131, 98)"}
              btnText={"LOGIN"}
              btnClick={handleSubmit}
            />

          </form>
        </div>
      </div>
    </>
  );
}
export default LoginModal;