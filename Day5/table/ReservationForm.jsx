import React, { useState } from 'react';
import './ReservationForm.css';
const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation and submit logic here
    console.log('Form submitted');
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Party Size:', partySize);
    // Reset the form after submission
    setName('');
    setDate('');
    setTime('');
    setPartySize('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Table Reservation Form</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Party Size:
        <input
          type="number"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;