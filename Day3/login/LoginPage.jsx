import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    // Handle login logic here
    console.log('Logging in with email:', email, 'and password:', password);
    // Redirect or perform other actions upon successful login
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
                <h1>Login</h1>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {error && <div className="error">{error}</div>}
        <nav>
        <Link to="/Home">
        <button type="submit" className="login-button" >Login</button>
        </Link>
        
        </nav>

        <br />
        <Link style={{textDecoration: 'none'}}>
            Forgot password?
        </Link>
            <br/>
            <div className='h'>

        <nav>
            <Link to="/fp" style={{textDecoration: 'none'}}>
                <a>signup</a>
            </Link>
        </nav>
            </div>
   
      </form>
    </div>
  );
};

export default LoginPage;