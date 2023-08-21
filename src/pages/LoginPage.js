import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import image from "./image.jpg";
import { Link } from "react-router-dom";

//axios.defaults.headers.post["Content-Type"] = "application/json";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters including at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailBlur = () => {
    setTouchedEmail(true);
  };

  const handlePasswordBlur = () => {
    setTouchedPassword(true);
  };

  const handleSubmit = async (e) => {
    if (isValidEmail) {
      console.log(email, password);
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/register/", {
          email,
          password,
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Error occurred while registering.");
        console.error(error);
      }
    } else {
    }
  };

  return (
    <div className="register-container">
      <div className="input-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {touchedEmail && !isValidEmail && (
              <p className="error-message">Invalid email format.</p>
            )}
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            {touchedPassword && !isValidPassword && (
              <p className="error-message">
                Password must be at least 8 characters and include at least one
                uppercase letter, one lowercase letter, and one digit.
              </p>
            )}
          </div>
          <button
            type="submit"
            className={!isValidEmail || !isValidPassword ? "disabled" : ""}
            disabled={!isValidEmail || !isValidPassword}
          >
            Login
          </button>
        </form>
        <p className="login-link">
          Don't have an account?{" "}
          <Link to="/register">Create a new account</Link>
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt="Login" />
      </div>
    </div>
  );
};

export default Register;
