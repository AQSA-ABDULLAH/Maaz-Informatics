import "./signup.module.css";
import Form from "../../../atoms/signup-form/Form";

function Signup() {
  return (
    <>
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
    </>
  );
}

export default Signup;

