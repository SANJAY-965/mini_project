
import React from 'react';
import Navbar from '../navbar/navbar';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  // const email  = useSelector((state) => state.user); 
  const pets = [
    {
      id: 1,
      name: 'Table Reservation',
      image: 'res.jpg',
      link:'/table'
    },
    {
      id: 2,
      name: 'Combo Offer',
      image: 'i6.jpg',
      link: '/menu'
    },
    {
      id: 3,
      name: 'Order',
      image: 'order.webp',
      link:'/order'
    },
    
  ];

  return (
<div>
 
      <Navbar/> 
      <div>
     
       {/* <p style={{color:'white'}}>Hola,<span className='span1' style={{color:"red"}}>{email}</span></p> */}
    </div>
    <div className='homebody'>
      <h1 className='h11' style={{color:'white'}}>SSS Restaurant</h1>
      <div className="home-list">
        {pets.map(pet => (
          <div key={pet.id} className="home-card">
            <h2 style={{color:'white'}}>{pet.name}</h2>
            <img src={pet.image} alt={pet.name} className="home-image" />
            <br/><br/>
            <nav>
              <Link to={pet.link}>
                  <button>Click</button>
              </Link>
            </nav>
          </div>
        ))}
      </div>
      <br/>
      <br/>

      <br/><br/><br/>
        <center>
      <div className="he1" data-aos="zoom-in-up">
      
        <div className="im1">
          <img className='homeimg' src="res1.jpg" />
        </div>
        <div className="p1" style={{color:'white',fontSize:'26px'}}>
        <br/>
          <p>
            Collaboration is a partnership, a union, the act of producing or
            making something together. Collaboration can<br/><br/> take place between two
            people or many people, strangers or best friends. To collaborate is<br/><br/>
            to commit to the possibility of producing an outcome greater than
            one that would be developed in a silo
          </p>
        </div>
      </div>
        </center>
        <br/><br/><br/><br/>
      <div className="he2" data-aos="zoom-in-up">
        <center>
          
        <div className="im2">
          <img className='homeimg' src="res2.jpg" />
        </div>
        <div className="p2" style={{color:'white',fontSize:'26px'}}>
          <p>
            <b>Communication</b> builds comradeship and a sense of community as
            the young artists move toward a <br/><br/>common goal. Researchers found that
            students working together on an art project participated more in<br/><br/>
            thoughtful discussion than those who were working solo.
          </p>
        </div>
        </center>
        <br/><br/><br/><br/>
      </div>
        
      <center>
        <div className="im3">
          <img className='homeimg' src="res3.jpg" />
        </div>

      <div className="he3" data-aos="zoom-in-up">
        <div className="p3" style={{color:'white',fontSize:'26px'}}>
          <p>
            This is the place where you can find the right teammate and select
            the project and collaborate themselves<br/><br/> and make the <b>project</b>{" "}
            best without depending on their physical location.
          </p>
        </div>
      </div>
      <br/><br/><br/><br/>
      </center>
      {/* data-aos="zoom-out" data-aos-duration="3000" */}
      <div className="he4" data-aos="zoom-in-up">
        <center>

        <div className="im4">
          <img  className='homeimg' src="res4.jpg" />
        </div>
        <div className="p4" style={{color:'white',fontSize:'26px'}}>
          <p>
            "Alone we can do so little; together we can do so much." ...
            <br />
            <br />
            "If everyone is moving forward together, then success takes care of
            itself."
          </p>
        </div>
        </center>
      </div>
      <div className="section">
          <div className="section-content">
            <h2>Product</h2>
            <ul className="list">
              <li className="list-item">Table Reservation</li>
              <li className="list-item">Combo Offer</li>
              <li className="list-item">Order</li>
              <li className="list-item">Home Delivery</li>
            </ul>
          </div>
          <div className="section-content">
            <h2>Support</h2>
            <ul className="list">
              <li className="list-item">Help</li>
              <li className="list-item">need help ?</li>
              <li className="list-item">+91 9361799048</li>
              <li className="list-item">+91 8899334471</li>
            </ul>
          </div>
          <div className="section-content">
            <h2>Contact us on</h2>
            <h6 className="hm">Artistic collab</h6>
            <ul className="list">
              <li className="list-item">1671 Coastal Highway</li>
              <li className="list-item">Lewes Delaware 15576</li>
              <li className="list-item">USA</li>
              <li className="list-item">contact@artisticcollab.com</li>
              <li className="list-item">Privacy Policy</li>
              <li className="list-item">Terms of use</li>
              <li className="list-item">GDPR</li>
            </ul>
          </div>
          </div>

    
    </div>

     
</div>
  );
};

export default HomePage;