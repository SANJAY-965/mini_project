import React from 'react';
import './frontpage.css';
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="front-page">
      <h1>Online Restaurant Management System</h1>
      <div className="button-container">
        <nav>
          <Link to="/LoginPage">
          <button className="login-button">
          Login  </button>
          </Link> 
          </nav>
          <nav>
            <Link to="/RegisterForm">
        <button className="register-button">SignUp</button>
        </Link>
        </nav>
      </div>
    </div>
  );
};

export default FrontPage;