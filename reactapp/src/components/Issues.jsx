import React, { useState } from 'react';
import './Appointment.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookAppointment = () => {
  const [customerName, setCustomerName] = useState('');
  const [email,setEmail]=useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [issue, setIssue] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 let navigate=useNavigate('');
  const handleSubmit = (e) => {
    const apppoint={
    customerName:customerName,
    email:email,
    mobileModel:mobileModel,
    issue:issue,
   appointmentDate:appointmentDate
  }
axios.post('http://127.0.0.1:8080/aDetails',apppoint);
 
navigate("/")
    if (customerName && mobileModel && issue && appointmentDate) {
      setSuccessMessage('Appointment booked successfully!');
      setCustomerName('');
      setMobileModel('');
      setIssue('');
      setAppointmentDate('');
    } 
    else {
      setErrorMessage('Invalid,Please fill in all fields.');
    }
  };

  return (
    <div className="book-appointment">
      <h2>Problem Details</h2>
      <form onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="mobileModel">Mobile Model:</label>
        <input
          type="text"
          id="mobileModel"
          value={mobileModel}
          onChange={(e) => setMobileModel(e.target.value)}
        />

        <label htmlFor="issue">Issue:</label>
        <textarea style={{height:"100px"}}
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />

        <button type="submit">Book an Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;