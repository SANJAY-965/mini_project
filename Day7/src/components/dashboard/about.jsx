import React from 'react';
import {Link } from 'react-router-dom';
import './about.css';
import './HomePage.css';
function AboutPage() {
  return (
    <div className="home-page" >
      {/* <nav className="navbar"> 
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" style={{textDecoration: 'none', color:'black'}}>Home</Link>
        </li>
      </ul>
    </nav>   */}
      <h1 className='h8'>About</h1>
      <center>
      <img className="image-about" src='logo2.jpg' alt='abt1' ></img><br></br>
      </center>
      <div className='aboutp'>

      <p>Welcome to our restaurant management system! We are dedicated to providing an</p> <p>efficient and seamless experience for both restaurant staff and customers.</p>
      <p>Our system allows restaurant owners to manage reservations, track orders, manage menus, </p><p>and analyze sales data. Customers can easily make reservations, browse menus, and provide feedback.</p>
      <p>We strive to enhance the dining experience and streamline operations</p><p> to ensure customer satisfaction and business success.</p>
      <p>A restaurant is a business that prepares and serves food and </p><p>drinks to customers.  </p>
      </div>
      
    </div>
    
  );
}

export default AboutPage;