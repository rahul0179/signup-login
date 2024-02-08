import React, { useState } from "react";
import "../LoginSignup/LognSignup.css";
import user_icom from "../Assets/person.png";
import email_icom from "../Assets/email.png";
import password_icom from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Log In" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icom} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icom} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icom} alt="" />
          <input type="password" placeholder="Pass" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forget-pass">
          Lost password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Log In" ? "submit g" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign Up" ? "submit g" : "submit"}
          onClick={() => {
            setAction("Log In");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
