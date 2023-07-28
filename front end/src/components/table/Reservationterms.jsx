import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservationterms.css'; // Import the CSS file for styling
// import
const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      console.log('Reservation submitted!');
      navigate('/pay'); 
    } 
    else {
      // Display an error message or prompt the user to accept the terms
      console.log('Please accept the terms and conditions.');
      // You can show an error message or perform any other action to notify the user
    }
  };

  return (
    <div className="reservation-terms">
      <h1 className="title">Table Reservation Terms and Conditions</h1>
      <p className="description">
        Please read the following terms and conditions carefully before making a table reservation:
      </p>

      <h3 className="section-title">Reservation Policy</h3>
      <p>
        1. Reservations are subject to availability. We recommend making a reservation in advance to secure your table.
      </p>
      <p>
        2. The reservation will be held for a maximum of 15 minutes past the reserved time. After that, the table may be given to other waiting customers.
      </p>
      
      <h3 className="section-title">Cancellation Policy</h3>
      <p>
        1. If you need to cancel or modify your reservation, please notify us at least 24 hours in advance.
      </p>
      <p>
        2. Failure to cancel or modify your reservation within the specified time may result in a penalty or loss of reservation privileges.
      </p>

      <label className="accept-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="accept-text" >I accept the terms and conditions</span>
      </label>

      <button className="submit-button" onClick={handleSubmit} disabled={!isChecked}>
        Submit
      </button>
    </div>
  );
};

export default Terms;