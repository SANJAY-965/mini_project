import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      padding: '20px',
      border: '2px solid black',
      borderRadius: '4px',
      backgroundColor:'white',
      

    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
      color:'black',
      padding:'8px',
      fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      // width:'300px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#33bbff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '90px',
      marginLeft: '30px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    '@media (max-width: 768px)': {
      form: {
        width: '90%', // Adjust the form width on smaller screens
        padding: '10px', // Reduce padding for smaller screens
      },
      input: {
        fontSize: '14px', // Decrease font size on smaller screens
      },
      button: {
        padding: '8px', // Decrease button padding on smaller screens
        fontSize: '14px', // Decrease font size for button on smaller screens
      },
    },
  };

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmit(true);

    // Check if the passwords match
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Clear any previous error messages
        navigate('/Log5');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* <center> */}

      
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.inputContainer}>
          <label style={styles.label}>First Name:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
          
          <button style={styles.button} type="submit">

            Sign Up
          </button>
            
          </nav>
        </div>
        <center>

        <p >
          Already have an account? <Link to="/Log" style={{color:'red',textDecoration:'none'}}>Login</Link>
        </p>
        </center>
      </form>
      {/* </center> */}
    </div>
  );
};

export default Signup;