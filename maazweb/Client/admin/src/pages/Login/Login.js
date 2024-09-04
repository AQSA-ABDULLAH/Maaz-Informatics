import LoginModal from "../../components/LoginModel/LoginModal";
import { useRedirectIfAuthenticated } from "../../utils/useRedirect";
import styles from  './login.module.css'

const Login = ({ isauth }) => {
  useRedirectIfAuthenticated(isauth);
  return (
    <div
      style={{
        backgroundImage: `url(
            "/assets/images/cars/image1.jpg"
            )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={styles.login}
    >
      <LoginModal />
    </div>
  );
};

export default Login;