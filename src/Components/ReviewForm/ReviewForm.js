import React, { useState } from 'react';
import './ReviewForm.css'
// import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../../config';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ReviewForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, review });
        setName('');
        setReview('');
    };

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
                            <Popup trigger={<button className="btn">Click Here</button>} 
                            modal nested>
                            {close => (
                                <div className='modal'>
                                    <div className='content'>
                                        <h2>Give Your review</h2>
                                    </div>
                                    <form onSubmit={handleFormSubmit} className="appointment-form">
                                        <div className="form-group">
                                            <label htmlFor="name">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Review:</label>
                                            <textarea 
                                                id="review" 
                                                name="review" 
                                                rows="4" 
                                                cols="50"
                                                value={review}
                                                onChange={(e) => setReview(e.target.value)}
                                                required >
                                            </textarea>
                                        </div>
                                        <button onClick={() => close()}>Submit</button>
                                    </form>
                                </div>
                            )}
                            </Popup>
                        </h1>
                    </div>
                    <div className="list"></div>
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
                        <Popup trigger={<button className="btn">Click Here</button>} 
                            modal nested>
                            {close => (
                                <div className='modal'>
                                    <div className='content'>
                                        <h2>Give Your review</h2>
                                    </div>
                                    <form onSubmit={handleFormSubmit} className="appointment-form">
                                        <div className="form-group">
                                            <label htmlFor="name">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Review:</label>
                                            <textarea 
                                                id="review" 
                                                name="review" 
                                                rows="4" 
                                                cols="50"
                                                value={review}
                                                onChange={(e) => setReview(e.target.value)}
                                                required >
                                            </textarea>
                                        </div>
                                        <button onClick={() => close()}>Submit</button>
                                    </form>
                                </div>
                            )}
                            </Popup>
                        </h1>
                    </div>
                    <div className="list"></div>
                </div>
            </div>
    );
};

export default ReviewForm;