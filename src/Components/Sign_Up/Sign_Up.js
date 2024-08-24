import React from "react"; // Importing the necessary modules from React library
// import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./Sign_Up.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component SignUp
const SignUp = () => {
  return (
    <div className="container" style={{marginTop: "5%"}}>
        <div className="signup-grid">
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{textAlign: "left"}}>
                Already a member? <span><a href="../Login/Login.html" style={{color: "#2190FF"}}> Login</a></span>
            </div>
            <div className="signup-form">
                <form>

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>

                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>

                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>

                    <div className="form-group">
                        <label for="password">Password</label>
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
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