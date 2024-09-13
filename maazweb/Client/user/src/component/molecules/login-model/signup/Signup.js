import "./signup.module.css";
import Form from "../../../atoms/signup-form/Form";

function Signup({ onClose }) {
  return (
    <>
      {/* Overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal */}
      <div className="modal-content1">
        <div className="logo-container">
          <img
            height={"60px"}
            alt="Logo"
            src={process.env.PUBLIC_URL + "/assest/logo/logo.jpg"}
          ></img>
        </div>

        {/* Signup Form */}
        <div className="login-form-container">
          <form className="login-form">
            <div>Be the first to hear!</div>
            <p className="subtitle">
              Stay up-to-date with the latest Wysa news, case studies, research,
              reports, and more by signing up for our newsletter.
            </p>
            <Form />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

