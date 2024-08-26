import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './ProfileCard.css'
import { Link, useNavigate } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';

// Defining the Function component ProfileCard
const ProfileCard = () => {
    return (
          <Dropdown>
            <Dropdown.Toggle variant="success" style={{ color: 'black', fontWeight: 500, backgroundColor: 'white' }}>
              Welcome, Joseph
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ marginTop: -2 }}>
              <Dropdown.Item href="#" style={{ display: 'block', 
                  width: 200, textAlign: 'center', padding: 0 }}>
                Your Profile
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      );
};

export default ProfileCard;