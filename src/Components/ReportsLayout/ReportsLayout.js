import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ReportsLayout.css';

const ReportsLayout = ({onSubmit}) => {
    const [name, setName] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name });
        setName('');
    };

    return (    
            <div className="container" style={{marginTop: "5%"}}>
                <div className="reports-text">
                    <h1>Reports</h1>
                </div>
                <div className="reports__gridtitle">
                    <div className="reports__col"><h1>Serial Number</h1></div>
                    <div className="reports__col"><h1>Doctor Name</h1></div>
                    <div className="reports__col"><h1>Doctor Speciality</h1></div>
                    <div className="reports__col"><h1>View Report</h1></div>
                    <div className="reports__col"><h1>Download Report</h1></div>
                </div>
                <div className="reviews__gridlist">
                    <div className="reports__list">
                        <h1 className="reports__top">1</h1>
                    </div>
                    <div className="reports__list">
                        <h1 className="reports__top">Dr. John Doe</h1>
                        </div>
                    <div className="reports__list">
                        <h1 className="reports__top">Cardiology</h1>
                        </div>
                    <div className="reports__list">
                        <h1>
                            <Popup trigger={<button className="btn btn--view">View Report</button>} 
                            modal nested>
                            {close => (
                                <div className='modal'>
                                    <div className='reports__content'>
                                        <h2>View Report</h2>
                                    </div>
                                    <form className="appointment-form">
                                        <div className="form-group">
                                            <p>No: 1</p>
                                            <p>Doctor: Dr. John Doe</p>
                                            <p>Speciality: Cardiology</p>
                                            <p>Phone Number: 1234567890</p>
                                            <p>Email: john.doe@test.com</p>
                                        </div>
                                        <button onClick={() => close()}>Close</button>
                                    </form>
                                </div>
                            )}
                            </Popup>
                        </h1>
                    </div>
                    <div className="reports__list">
                        <h1>
                            <Popup trigger={<button className="btn btn--download">Download Report</button>} 
                            modal nested>
                            {close => (
                                <div className='modal'>
                                    <div className='reports__content'>
                                        <h2>Download Report</h2>
                                        <div className="form-group">
                                            <p>No: 1</p>
                                            <p>Doctor: Dr. John Doe</p>
                                            <p>Speciality: Cardiology</p>
                                            <p>Phone Number: 1234567890</p>
                                            <p>Email: john.doe@test.com</p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleFormSubmit} className="appointment-form">
                                        <button onClick={() => close()}>Download</button>
                                    </form>
                                </div>
                            )}
                            </Popup>
                        </h1>
                    </div>
                    <div className="reports__list">
                        <h1 className="reports__top">2</h1>
                        </div>
                    <div className="reports__list">
                        <h1 className="reports__top">Dr. Jane Smith</h1>
                        </div>
                    <div className="reports__list">
                        <h1 className="reports__top">Dermatology</h1>
                    </div>
                    <div className="reports__list">
                        <h1>
                        <Popup trigger={<button className="btn btn--view">View Report</button>} 
                            modal nested>
                            {close => (
                                <div className='modal'>
                                    <div className='reports__content'>
                                        <h2>View Report</h2>
                                    </div>
                                    <form className="appointment-form">
                                        <div className="form-group">
                                            <p>No: 2</p>
                                            <p>Doctor: Dr. Jane Smith</p>
                                            <p>Speciality: Dermatology</p>
                                            <p>Phone Number: 1234567890</p>
                                            <p>Email: jane.smith@test.com</p>
                                        </div>
                                        <button onClick={() => close()}>Close</button>
                                    </form>
                                </div>
                            )}
                            </Popup>
                        </h1>
                    </div>
                    <div className="reports__list">
                        <h1>
                            <Popup trigger={<button className="btn btn--download">Download Report</button>} 
                            modal nested>
                            {close => (
                                <div className='modal'>
                                    <div className='reports__content'>
                                        <h2>Download Report</h2>
                                        <div className="form-group">
                                            <p>No: 2</p>
                                            <p>Doctor: Dr. Jane Smith</p>
                                            <p>Speciality: Dermatology</p>
                                            <p>Phone Number: 1234567890</p>
                                            <p>Email: jane.smith@test.com</p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleFormSubmit} className="appointment-form">
                                        <button onClick={() => close()}>Download</button>
                                    </form>
                                </div>
                            )}
                            </Popup>
                        </h1>
                    </div>
                </div>
            </div>
    );
};

export default ReportsLayout;