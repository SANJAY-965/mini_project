// import React, { useState } from 'react';
// import './ReservationForm.css';
// import { useNavigate } from 'react-router';

// const ReservationForm = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [partySize, setPartySize] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Reservation submitted');
//     console.log('Name:', name);
//     console.log('Party Size:', partySize);
//     console.log('Date:', date);
//     console.log('Time:', time);
//     navigate('/terms');
//   };

//   return (
//     <div className='res'>
//       <div style={{paddingTop:"140px"}}>
//         <form onSubmit={handleSubmit} className='form1'>
//           <div className='res1'>
//             <h2 className='hh2'>Table Reservation </h2>
//             {/* <br/> */}
//             <label htmlFor="name" className='lable1'>Name:</label>
//             <input className='input'
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <label htmlFor="partySize" className='lable1'>Party Size:</label>
//             <input className='input'
//               type="number"
//               id="partySize"
//               value={partySize}
//               onChange={(e) => setPartySize(e.target.value)}
//             />

//             <label htmlFor="date" className='lable1'>Date:</label>
//             <input className='input'
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />

//             <label htmlFor="time" className='lable1'>Time:</label>
//             <input className='input'
//               type="time"
//               id="time"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//             <nav>
//             <button type="submit" className='butt' style={{ backgroundColor: 'dodgerblue' }}>Submit</button>
//             </nav>
//             <br />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReservationForm;


import React, { useState } from 'react';
import './ReservationForm.css';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router';

const ReservationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!partySize.trim()) {
      validationErrors.partySize = 'Party Size is required';
    } else if (isNaN(partySize) || +partySize <= 0) {
      validationErrors.partySize = 'Party Size must be a positive number';
    }
    if (!date.trim()) {
      validationErrors.date = 'Date is required';
    }
    if (!time.trim()) {
      validationErrors.time = 'Time is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If all validations pass, submit the form
    console.log('Reservation submitted');
    console.log('Name:', name);
    console.log('Party Size:', partySize);
    console.log('Date:', date);
    console.log('Time:', time);

    navigate('/terms');
  };

  return (
<div>


      <Navbar/> 
    <div className="res">
      <div style={{ paddingTop: '140px' }}>
        <form onSubmit={handleSubmit} className="form1">
          <div className="res1">
            <h2 className="hh2">Table Reservation </h2>
            {/* <br/> */}
            <label htmlFor="name" className="lable1">
              Name:
            </label>
            <input
              className="input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="partySize" className="lable1">
              Party Size:
            </label>
            <input
              className="input"
              type="number"
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            />
            {errors.partySize && <p className="error">{errors.partySize}</p>}

            <label htmlFor="date" className="lable1">
              Date:
            </label>
            <input
              className="input"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <p className="error">{errors.date}</p>}

            <label htmlFor="time" className="lable1">
              Time:
            </label>
            <input
              className="input"
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            {errors.time && <p className="error">{errors.time}</p>}

            <nav>
              <button type="submit" className="butt" style={{ backgroundColor: 'dodgerblue' }}>
                Submit
              </button>
            </nav>
            <br />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ReservationForm;

