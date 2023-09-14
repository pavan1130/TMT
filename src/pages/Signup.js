import React, { useState } from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
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
    console.log('Google sign-in clicked');
    // You can implement Google sign-in using Firebase or another library
  };

  return (
    <div className="App">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Signup Container */}
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" 
          className="submit-button"
          onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
        <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="or">
          <span>OR</span>
        </div>
        <div className="horizontal-line"></div>
        </div>
        <div className="google-button">
          <button
            type="button"
            className="google-button-inner"
            onClick={handleGoogleSignIn}
          >
              <FontAwesomeIcon icon={faGoogle} size="2x" color="#4285F4" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
