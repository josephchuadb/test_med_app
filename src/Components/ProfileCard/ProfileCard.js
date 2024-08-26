import React, { useState } from 'react';
// import './ProfileCard.css'
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ProfileForm from '../ProfileForm/ProfileForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Defining the Function component ProfileCard
const ProfileCard = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    );
};

export default ProfileCard;