import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateAppointment, setDateAppointment] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, dateAppointment, selectedSlot });
      setName('');
      setPhoneNumber('');
      setDateAppointment('');
      setSelectedSlot('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateAppointment">Date of Appointment:</label>
          <input
            type="date"
            id="dateAppointment"
            value={dateAppointment}
            onChange={(e) => setDateAppointment(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedSlot">Book Time Slot:</label>
          <select name="selectedSlot" id="selectedSlot" onChange={(e) => setSelectedSlot(e.target.value)} value={selectedSlot}
          required >
            <option>Select a time slot</option>
            <option value="8am to 9am">8am to 9am</option>
            <option value="9am to 10am">9am to 10am</option>
            <option value="10am to 11am">10am to 11am</option>
            <option value="11am to 12pm">11am to 12pm</option>
        </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;
