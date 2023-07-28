

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css'; // Import your CSS file
import Navbar from '../navbar/navbar';

const TakeAway = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleItemClick = (item) => {
    const updatedItems = [...selectedItems];
    const existingItem = updatedItems.find((selectedItem) => selectedItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      updatedItems.push(item);
    }

    setSelectedItems(updatedItems);
  };

  const handleRemoveItemClick = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  const handleIncrementQuantity = (item) => {
    const updatedItems = [...selectedItems];
    const selectedItem = updatedItems.find((selectedItem) => selectedItem.name === item.name);
    selectedItem.quantity += 1;

    setSelectedItems(updatedItems);
  };

  const handleDecrementQuantity = (item) => {
    const updatedItems = [...selectedItems];
    const selectedItem = updatedItems.find((selectedItem) => selectedItem.name === item.name);

    if (selectedItem.quantity > 1) {
      selectedItem.quantity -= 1;
    } else {
      const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
      setSelectedItems(updatedItems);
    }

    setSelectedItems(updatedItems);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    selectedItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };
 

  const menuItems = [
   { name1: 'Burger', image1: 'burger.jpg',name2: 'Fries',image2: 'fries.jpg', name3: 'Pepsi',image3: 'pepsi.jpg',price: 230 },
   { name1: 'Burger', image1: 'burger.jpg',name2: 'Pizza',image2: 'pizza.jpg', name3: 'Sandwich',image3: 'sandwich.jpg',price: 350 },
   { name1: 'Half-Grill', image1: 'chicken.jpg',name2: 'Parotta',image2: 'parotta.png', name3: 'Lemon Juice',image3: 'lemonjuice.jpg',price: 300 },
   { name1: 'Chicken 65', image1: 'chi65.jpeg',name2: 'Biryani',image2: 'bir1.jpg', name3: 'Lemon Mint Juice',image3: 'mint.png',price: 250 },
   { name1: 'Shawarma', image1: 'shawarma.webp',name2: 'Fries',image2: 'fries.jpg', name3: 'Pepsi',image3: 'pepsi.jpg',price: 200},
   { name1: 'Chicken Noodles', image1: 'chinoodle.webp',name2: 'Pasta',image2: 'pasta.jpg', name3: 'Lemon Juice',image3: 'lemonjuice.jpg',price: 300 },
  //  { name: 'Pizza', image: 'pizza.jpg  ', price: 10.99 },
  //  { name: 'Fries', image: 'fries.jpg', price: 3.99 },
  //  { name: 'Salad', image: 'salad.jpg', price: 6.99 },
  //  { name: 'Sushi', image: 'sushi.jpg', price: 12.99 },
  //  { name: 'Pasta', image: 'pasta.jpg', price: 9.99 },
  //  { name: 'Biryani', image: 'bir1.jpg', price: 9.99 },
  //  { name: 'Paneer Tikka', image: 'paneertikka.jpg', price: 9.99 },
  //  { name: 'Chicken Soup', image: 'chickensoup.webp', price: 9.99 },
  //  { name: 'Prawns', image: 'prawn.webp', price: 9.99 },
  //  { name: 'Chicken 65', image: 'chi65.jpeg', price: 9.99 },
  //  { name: 'Mutton Fry', image: 'mutton.jpg', price: 9.99 },
  //  { name: 'Grill', image: 'chicken.jpg', price: 9.99 },
  //  { name: 'Parotta', image: 'parotta.png', price: 9.99 },
  //  { name: 'Shawarma', image: 'shawarma.webp', price: 9.99 },
  //  { name: 'Chicken Noodle', image: 'chinoodle.webp', price: 9.99 },
  //  { name: 'Chicken Rice', image: 'chirice.png', price: 9.99 },
  //  { name: 'Veg Meals', image: 'meals.webp', price: 9.99 },
  //  { name: 'Non Veg Meals', image: 'mealnon.jpg', price: 9.99 },
  //  { name: 'Lemon Juice', image: 'lemonjuice.jpg', price: 9.99 },
  //  { name: 'Lemon Mint Juice', image: 'mint.png', price: 9.99 },
   
  ];
  
  const handleSubmit = () => {
    
    // Perform form submission logic here

    // Check if terms and conditions are accepted
    if (!isTermsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }

    // Check if at least one item is selected
    if (selectedItems.length === 0) {
      alert('Please select a food item before submitting the order.');
      return;
    }

    // Navigate to the next page or perform further actions
    navigate('/pay'); // Replace '/confirmation' with the desired path
  };

  return (
    <div>
      <Navbar/>
   
    <div className="food-menu-container1">
      <center>

      <h1 style={{color:'white'}}>Food Menu</h1>
      </center>
      <br/><br/>
      <div className="menu-items1">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="menu-item1" onClick={() => handleItemClick(menuItem)}>
            <p>{menuItem.name1}</p>
            <img src={menuItem.image1} alt={menuItem.name1}  className='image5'/>
            <p>+</p>
            <p>{menuItem.name2}</p>
            <img src={menuItem.image2} alt={menuItem.name2}  className='image5'/>
            <p>+</p>
            <p>{menuItem.name3}</p>
            <img src={menuItem.image3} alt={menuItem.name3}  className='image5'/>
            <br/>
            <p>₹{menuItem.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <div className="selected-items1">
        <h3 style={{color:'white'}}>Selected Items:</h3>
        {selectedItems.length === 0 ? (
          <p style={{color:'white'}}>No items selected</p>
        ) : (  
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.name1}+{item.name2}+{item.name3} - ₹{item.price.toFixed(2)}
                <div className="quantity-controls1">
                  <button onClick={() => handleDecrementQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(item)}>+</button>
                </div>
                <button onClick={() => handleRemoveItemClick(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {selectedItems.length > 0 && (
          <div className="total">
            <span>Total:</span>
            <span>₹{getTotalPrice()}</span>
          </div>
        )}
      </div>
      <div className="terms-conditions1">

        {/* <div  className='terms'> */}
        <label style={{color:'white'}}>
         
          <input  
            type="checkbox"
            checked={isTermsAccepted}
            onChange={(e) => setIsTermsAccepted(e.target.checked)}
            />
          I accept the terms and conditions:
        </label>
            {/* </div> */}
        <p>
          By placing an order, you agree to the following terms and conditions:
        </p>
        <p>
          1. All orders must be paid in full at the time of pickup.
        </p>
        <p>
          2. Any changes or cancellations to the order must be made at least 24 hours in advance.
        </p>
        <p>
          3. We are not responsible for any allergies or dietary restrictions. Please inform us of any special requests or concerns.
        </p>
        <p>
          4. Prices and availability of menu items are subject to change without notice.
        </p>
      </div>
      <button type="submit" onClick={handleSubmit}>
        <nav>
        Submit Order

        </nav>
      </button>
    </div>
    </div>
  );
};

export default TakeAway;