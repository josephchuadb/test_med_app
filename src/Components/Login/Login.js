import React, { useState, useEffect } from 'react';

// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './Login.css';

// Function component for the main App
const Login = () => {
    // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();

    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    // Parse the response JSON
    const json = await res.json();

    try {
      if (json.authtoken) {
        // If authentication token is received, store it in session storage
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('email', email);

        // Redirect to home page and reload the window
        navigate('/');
        window.location.reload();
      } else if (json.errors) {
        // Handle errors if authentication fails
          for (const error of json.errors) {
            alert(error.msg);
          }
      } else {
          alert(json.error);
        }
    } catch (error) {
      console.log('Error parsing LOGIN-JSON:', error, json);
    }
  };

    return (
        <div className="container">
            <div className="login-grid">
                <div className="login-text">
                    <h2>Login</h2>
                </div>
                <div className="login-text">
                  Are you a new member?<span><Link to="/Sign_Up/Sign_Up" style={{color: "#2190FF"}}> Sign Up Here</Link></span>
                </div>
                <br />
                <div className="login-form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            aria-describedby="helpId"
                            pattern=".+@example\.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            aria-describedby="helpId"
                            autoComplete="on"
                            />
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <br />
                        <div className="login-text">
                            Forgot Password?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;