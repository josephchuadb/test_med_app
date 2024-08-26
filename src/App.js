// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import LandingPage from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileForm/ProfileForm';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import './App.css';

// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
            <Notification>
            <Navbar/>
            <Routes>
                {/* Define individual Route components for different pages */}
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/Login/Login" element={<Login/>}/>
                <Route path="/Sign_Up/Sign_Up" element={<SignUp/>}/>
                <Route path="/BookingConsultation" element={<BookingConsultation/>}/>
                <Route path="/Notification/Notification" element={<Notification/>}/>
                <Route path="/ReviewForm/ReviewForm" element={<ReviewForm/>}/>
                <Route path="/ProfileForm/ProfileForm" element={<ProfileForm/>}/>
                <Route path="/ReportsLayout/ReportsLayout" element={<ReportsLayout/>}/>
            </Routes>
            </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;
