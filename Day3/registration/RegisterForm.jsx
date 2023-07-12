import React, { useState } from 'react';
import './RegisterForm.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Handle registration logic here
    console.log('Registering with firstname:', firstName, 'lastname:', lastName, 'email:', email, 'and password:', password);
    // Redirect or perform other actions upon successful registration
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
      <h2>SignUp</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        {error && <div className="error">{error}</div>}
        <nav>
        <Link to="/Home1">
         <button type="submit" className="register-button">Submit</button>
        </Link>
        </nav>
        <br/>

        <nav>
            <Link to="/li" style={{textDecoration: 'none'}}>
                <a>already have an account</a>
            </Link>
        </nav>
      </form>
    </div>
  );
};

export default RegisterForm;