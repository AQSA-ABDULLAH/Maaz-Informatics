// import React from "react";
// import styles from "./signup.module.css";
// import Form from "../../../atoms/signup-form/Form";
// const Signup = () => {
//   return (
//     <>
//       <section className={styles.signupContainer}>
//         <div className={styles.signup}>
//           <div className={styles.imgContainer}>
//             {/* <img src="./assets/logo/logo.png" alt="logo" /> */}
//           </div>
//           <div className={styles.formContainer}>
//             <div className={styles.formTop}>
//               {/* <img src="./assets/logo/logodark.png" alt="logo" /> */}
//               <h3>join</h3>
//               {/* <div className={styles.btnContainer}>
//                 <div>user info</div>
//                 <div>billing information</div>
//               </div> */}
//             </div>
//             <Form />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Signup;



import "../LoginModal.css";

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
        <div className="login-form-container">
          <form className="login-form">
            <div>WELCOME BACK !</div>
            <p className="subtitle">Stay up -to-date with the latest Wysa news, case studies, by sign in for our newsletter.</p>
            
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
