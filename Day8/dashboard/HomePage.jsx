import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
// import 'table.jpg';
import { useState } from 'react';
const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    

    <div className="home-page">
      <nav className="navbar">
        <ul className="navbar-list">
          <nav>
          
            <li>
            <img src='logo2.jpg' className='logo' alt='sss'></img>
            </li>
          </nav>
        <nav>
        <Link to="/log" style={{textDecoration: 'none'}}>
         <li className="navbar-item">Login</li>
        </Link>
        </nav>
        <nav>
        <Link to="/Sign" style={{textDecoration: 'none'}}>
         <li className="navbar-item">SignUp</li>
        </Link>
        </nav>
        {/* <li className="navbar-item">SignUp</li> */}
          {/* <li className="navbar-item">Home</li> */}
          <nav>
        <Link to="/abo" style={{textDecoration: 'none'}}>

          <li className="navbar-item">About</li>
        </Link>
        </nav>
        <nav>
        <Link to="/con" style={{textDecoration: 'none'}}>

          <li className="navbar-item">Contact</li>
        </Link>
        </nav>
      {/* <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div> */}
      <li className="navbar-item dropDown" onClick={toggleDropdown} >
      <img src='pro1.png' className='profile' alt='profile'></img>
            
            {isDropdownOpen && (
              <ul className="dropdown-content" >
                <nav>
                <Link to="/profile" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Profile</li>
                </Link>
                </nav><br></br>

                <nav>
                <Link to="/account" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Account</li>
                </Link>
                </nav><br></br>

                <nav>
                <Link to="/logout" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Logout</li>
                </Link>
                </nav>
              
              </ul>
            )}
       </li>
      
        </ul>
      </nav>

      <h1>Online Restaurant</h1>
      <div className="featured">
        <div className='img-card'>
            <img  className='imghome' src='table.webp' height='300px' width='320px' alt='tab'/>
            <h2>Table Reservation</h2>
            <nav>
            <Link to="/table" style={{textDecoration: 'none',textAlign:'center',}}>
            <button className='click-button'>Click</button>
            </Link>
            </nav>    
        </div>
            

        <div className='img-card'>
            <img className='imghome' src='i6.jpg' height='300px' width='320px' alt='tab'/>
            <h2>Menu Management</h2>
            <nav>
              <Link to='/menu'>
                    <button className='click-button'>Click</button>
              </Link>
            </nav>

        </div>
      {/* </div> */}
      {/* <div className="featured"> */}
        <div className='img-card'>
            <img className='imghome' src='order.webp' height='300px' width='320px' alt='tab'/>
            <h2>Order Management</h2>
            <nav>
            <button className='click-button'>
              <Link to='/order'  style={{textDecoration: 'none'}}>
              Click
              </Link>
              </button>
                
            </nav>

        </div>
       
      </div>
    </div>
  );
};

export default HomePage;