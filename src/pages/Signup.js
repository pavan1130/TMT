import React, { useState } from "react";
import styles from "../Styles/Signup.module.css"; // Import the CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful registration, you can redirect or show a success message
        console.log("Registration successful!");
        alert("Successfully Signup!!!");
        window.location.href = "/";

        return;
      } else {
        // Registration failed, handle errors here
        console.error("Registration failed");
        alert("SignUp Failed!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = () => {
    // Perform Google sign-in logic here
    // You might use a library like Firebase for this purpose
    console.log("Google sign-in clicked");
    // You can implement Google sign-in using Firebase or another library
  };

  return (
    <div className={styles.App}>
      {/* Background Image */}
      <div className={styles["background-image"]}></div>

      {/* Signup Container */}
      <div className={styles["signup-container"]}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles["input-field"]}
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles["input-field"]}
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
              className={styles["input-field"]}
            />
          </div>
          <button
            type="submit"
            className={styles["submit-button"]}
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <div className={styles["horizontal-line-container"]}>
          <div className={styles["horizontal-line"]}></div>
          <div className={styles.or}>
            <span>OR</span>
          </div>
          <div className={styles["horizontal-line"]}></div>
        </div>
        <div className={styles["google-button"]}>
          <button
            type="button"
            className={styles["google-button-inner"]}
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" color="#4285F4" />{" "}
            Continue with Google
          </button>
          <div className={styles["Signin-text"]}>
            <p className={styles["Signin-text"]}>
              Don’t have an account? <a href="/">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
