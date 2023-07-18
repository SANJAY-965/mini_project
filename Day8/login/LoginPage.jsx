import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = (props) => {     
     const navigate = useNavigate();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState([]);  
     const handleEmailChange = (e) => {
       setEmail(e.target.value);
     }
     
     const handlePasswordChange = (e) => {
       setPassword(e.target.value);
     }
     
     const handleSubmit = (e) => {
       e.preventDefault();   
       if (email === '' || password ==='  ') {
         setError('Please enter your email and password.');
         <br/>
         return;
       }
     
       if (!validateEmail(email)) {
         setError('Please enter a valid email address.');
         <br/>
         return;
       }
     
       // Handle login logic here
       console.log('Logging in with email:', email, 'and password:', password);    
       // Navigate to the home page upon successful login
       navigate('/home');
      };

      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };


    return (
    <center>

    
        <div className="auth-form-container" style={{marginTop:'100px'}}>
          <center>
            <h2 style={{color:'white'}}>Login</h2>
          </center>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="loginlabel">email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

                <input value={email}  className='logininput' onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br/>
                <label htmlFor="password" className="loginlabel">password&nbsp;&nbsp;</label>
                <input value={password} className='logininput' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <nav>
            <center>
              {error && <div className="error1">{error}</div>}
              <br/>
                <button type="submit" >Log In</button>
            </center>
                </nav>
            </form>
            <nav>
              <Link to='/Sign'>
            <button style={{color:'white'}}className="link-btn" >Don't have an account? Register here.</button> 
              </Link>
            </nav>
        </div>
        </center>
    )
  }

export default LoginPage;


// onClick={() => props.onFormSwitch('register')}