// Import necessary modules from React library
import React from 'react';
// import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import LandingPage from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Login from './Login';
import SignUp from './Sign_Up';
import './App.css';

// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Login.html" element={<Login/>}/>
            <Route path="/Sign_Up.html" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
