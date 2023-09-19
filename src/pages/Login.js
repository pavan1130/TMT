import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import styles from "../Styles/Login.module.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = () => {
    window.alert("Login successful!");
    const userEmail = formData.email;
    window.location.href = `/welcome?userEmail=${userEmail}`;
  };

  const handleLoginFailure = () => {
    window.alert("Login failed. Please check your email and password.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        handleLoginSuccess();
        onLogin(formData);
      } else {
        handleLoginFailure();
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-image"]}>
        <div className={styles["logo"]}></div>
      </div>
      <div className={styles["login-form"]}>
        <h2>Sign In</h2>
        <form>
          <div className={styles["form-group"]}>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["forgot-password"]}>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className={styles["login-button"]}>
            <Link to="/home">
              <p>Sign In</p>
            </Link>
          </button>
          <div className={styles["horizontal-line-container"]}>
            <div className={styles["horizontal-line"]}></div>
            <div className={styles["or-text"]}>OR</div>
            <div className={styles["horizontal-line"]}></div>
          </div>
          <div className={styles["google-button"]}>
            <button type="button" className={styles["google-button-inner"]}>
              <FontAwesomeIcon icon={faGoogle} size="2x" color="#4285F4" />{" "}
              Continue with Google
            </button>
          </div>
          <p className={styles["signup-text-top"]}>
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
          <p className={styles["signup-text-bottom"]}>
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
