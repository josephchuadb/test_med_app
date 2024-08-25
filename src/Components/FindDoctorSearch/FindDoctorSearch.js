import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='container'>
            <div className="finddoctor-grid">
                <div className="finddoctor-text">
                    <h1>Find a doctor and Consult instantly</h1>
                    <div>               
                        <i style={{color:'#000000',fontSize:'20rem'}} className="fa fa-user-md"></i>
                    </div> 
                </div>
            </div>
            <div className='finddoctor'>
                <center>               
                    <div className="home-search-container"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div className="doctor-search-box">
                        {/* <p>Perform a search to see the results.</p> */}
                            <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                            <div className="findiconimg">
                                <div className="searchicon"><FaSearch /></div>
                                {/* <img className='findIcon' src={process.env.PUBLIC_URL + '/images/search.png'} alt=""/> */}
                            </div>
                            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                                {
                                    specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                        <span><div><FaSearch /></div></span>
                                        {/*<span><img src={process.env.PUBLIC_URL + '/images/search.png'} alt="" style={{height:"10px", width:"10px"}} width="12" /></span>*/}
                                        <span>{speciality}</span>
                                        <span>SPECIALITY</span>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default FindDoctorSearch;