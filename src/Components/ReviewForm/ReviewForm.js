import React, { useState } from 'react';
import './ReviewForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReviewForm = () => {
  return (    
        <div className="container" style={{marginTop: "5%"}}>
            <div className="reviews-text">
                <h1>Reviews</h1>
            </div>
            <div className="reviews__gridtitle">
                <div className="col"><h1>Serial Number</h1></div>
                <div className="col"><h1>Doctor Name</h1></div>
                <div className="col"><h1>Doctor Speciality</h1></div>
                <div className="col"><h1>Provide Feedback</h1></div>
                <div className="col"><h1>Review Given</h1></div>
            </div>
            <div className="reviews__gridlist">
                <div className="list">
                    <h1 className="list__top">1</h1>
                </div>
                <div className="list">
                    <h1 className="list__top">Dr. John Doe</h1>
                    </div>
                <div className="list">
                    <h1 className="list__top">Cardiology</h1>
                    </div>
                <div className="list">
                    <h1>
                        <button className="btn">Click Here</button>
                    </h1>
                </div>
                <div className="list">
                    <h1 className="list__top"></h1>
                    </div>
                <div className="list">
                    <h1 className="list__top">2</h1>
                    </div>
                <div className="list">
                    <h1 className="list__top">Dr. Jane Smith</h1>
                    </div>
                <div className="list">
                    <h1 className="list__top">Dermatology</h1>
                </div>
                <div className="list">
                    <h1>
                        <button className="btn">Click Here</button>
                    </h1>
                </div>
                <div className="list">
                    <h1 className="list__top"></h1>
                </div>
            </div>
        </div>
  );
};

export default ReviewForm;