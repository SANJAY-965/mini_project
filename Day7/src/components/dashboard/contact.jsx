import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './contact.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
const ContactPage = () => {
  return (
    <div className='home-page' >
        {/* <nav className="navbar"> 
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" style={{textDecoration: 'none', color:'black'}}>Home</Link>
        </li>
      </ul>
    </nav> */}
      <h1 className='hh8'>Contact Us</h1>
      <div className='conp'>

      <p>For any inquiries, please feel free to contact us:</p>
        <p>Email: sssrestaurant@gmail.com</p>
        <p>Phone: 975-975-7777</p>
        <p>Address: 123 Main Street, Coimbatore, Tamil Nadu</p>
        <br/><br/>
<div className='butt1'>
        <a href='https://www.instagram.com/'><FaInstagram/></a>
        &nbsp;
        <a href='https://web.telegram.org/k/'><FaTelegram/></a>
        &nbsp;
        <a href='https://web.whatsapp.com/'><FaWhatsapp/></a>
        &nbsp;
        <a href='https://www.facebook.com/'><FaFacebook/></a>

</div>
      </div>
    </div>
  );
};

export default ContactPage;