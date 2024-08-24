import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from './config';

// Defining the Function component SignUp
const SignUp = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON
        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

  return (
    <div className="container" style={{marginTop: "5%"}}>
        <div className="signup-grid">
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{textAlign: "left"}}>
                Already a member? 
                <span>
                    <Link to="../Login.html" style={{color: "#2190FF"}}> Login
                    </Link>
                </span>
            </div>
            <div className="signup-form">
                <form method="POST" onSubmit={register}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value={name} 
                        type="text" 
                        onChange={(e) => setName(e.target.value)} name="name" id="name" required 
                        className="form-control" 
                        placeholder="Enter your name" aria-describedby="helpId" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input value={phone} 
                        type="tel" 
                        onChange={(e) => setPhone(e.target.value)} 
                        name="phone" 
                        id="phone" 
                        title="Only accepts 10 digits for this phone number." required className="form-control" 
                        placeholder="Enter your phone number" aria-describedby="helpId" 
                        pattern="[1-9]{1}[0-9]{9}" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} name="password"
                        id="password"
                        required className="form-control"
                        placeholder="Enter your password" 
                        autoComplete="on"
                        aria-describedby="helpId" />
                    </div>

                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default SignUp; // Exporting the SignUp component to be used in other parts of the application