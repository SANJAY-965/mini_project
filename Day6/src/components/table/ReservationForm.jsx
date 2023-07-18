import React, { useState } from 'react';
import './ReservationForm.css'

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Reservation submitted');
    console.log('Name:', name);
    console.log('Party Size:', partySize);
    console.log('Date:', date);
    console.log('Time:', time);
  };

  return (
    <div className='res'>
      <div style={{paddingTop:"140px"}}>
        <form onSubmit={handleSubmit} className='form1'>
          <div className='res1'>
            <h2 className='hh2'>Table Reservation </h2>
            {/* <br/> */}
            <label htmlFor="name" className='lable1'>Name:</label>
            <input className='input'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="partySize" className='lable1'>Party Size:</label>
            <input className='input'
              type="number"
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            />

            <label htmlFor="date" className='lable1'>Date:</label>
            <input className='input'
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="time" className='lable1'>Time:</label>
            <input className='input'
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button type="submit" className='butt' style={{ backgroundColor: 'dodgerblue' }}>Submit</button>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
