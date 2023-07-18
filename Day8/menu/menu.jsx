import React from 'react';
import './menu.css';

const Menu = () => {
 
  const menuItems = [
    {
      name: 'Biryani',
      img: "bir1.jpg",
      price: '₹ 200',
      description: ''
    },
    {
        name: 'Chicken Grill',
        img: "chicken.jpg",
        price: 'Half-Grill- ₹200 ',
        description: ' Full-Grill- ₹400  '
    },
    {
        name: 'Shawarma',
        img: "shawarma.webp",
        price: '₹ 100(1)',
        description: ''
    },
    {
        name: 'parotta',
        img: "parotta.png",
        price: '₹ 36(2)',
        description: ''
    },
    // {
    //     name: 'Shawarma',
    //     img: "shawarma.webp",
    //     price: '₹ 100(1 piece)',
    //     description: ''
    // },
    // {
    //     name: 'Shawarma',
    //     img: "shawarma.webp",
    //     price: '₹ 100(1 piece)',
    //     description: ''
    // },
    // {
    //     name: 'Shawarma',
    //     img: "shawarma.webp",
    //     price: '₹ 100(1 piece)',
    //     description: ''
    // },
    // {
    //     name: 'Shawarma',
    //     img: "shawarma.webp",
    //     price: '₹ 100(1 piece)',
    //     description: ''
    // },
    // {
    //     name: 'Shawarma',
    //     img: "shawarma.webp",
    //     price: '₹ 100(1 piece)',
    //     description: ''
    // },
    
  ];
  

  return (
    <div className="menu">
      <h1 className='hhh1'>Restaurant Menu</h1>
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <h2 className="item-name">{item.name}</h2>
          <img className="menu-image" src={item.img}/>
          <p className="item-price">{item.price}</p>
          <p className="item-description">{item.description}</p>
        </div>
      ))}
     
    </div>
  );
};

export default Menu;
