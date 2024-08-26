import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ProfileCard.css'

// Defining the Function component ProfileCard
const ProfileCard = () => {
    return (
          <Dropdown>
            <Dropdown.Toggle variant="success" style={{ color: 'black', fontWeight: 500, backgroundColor: 'white' }}>
              Welcome, Joseph
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ marginTop: -2 }}>
              <Dropdown.Item href="/ProfileForm/ProfileForm" style={{ display: 'block', 
                  width: 200, textAlign: 'center', padding: 0 }}>
                Your Profile
              </Dropdown.Item>
              <Dropdown.Item href="/ReportsLayout/ReportsLayout" style={{ display: 'block', 
                  width: 200, textAlign: 'center', padding: 0 }}>
                Your Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      );
};

export default ProfileCard;