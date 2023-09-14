import React,{useState} from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Login = ({ onLogin }) =>  {
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
    
        const userEmail = formData.email; // Get the user's email
        window.location.href = `/welcome?userEmail=${userEmail}`; // Add email as a query parameter
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
            // Successful login
            handleLoginSuccess();
            onLogin(formData);
          } else {
            // Login failed
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
    <div className="login-container">
      <div className="login-image">
        <div className="logo"></div>
       
      </div>
      <div className="login-form">
        <h2>Sign in</h2>
        <form>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button" >
          <Link to="/home"><p>Login</p></Link>
          </button>
          <div className="horizontal-line-container">
            <div className="horizontal-line"></div>
            <div className="or-text">OR</div>
            <div className="horizontal-line"></div>
          </div>
          <div className="google-button">
            <button type="button" className="google-button-inner">
            <FontAwesomeIcon icon={faGoogle} size="2x" color="#4285F4" /> Continue with Google
            </button>
          </div>
          <p className="signup-text-top">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
          <p className="signup-text-bottom">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;