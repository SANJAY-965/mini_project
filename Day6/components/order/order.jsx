import React, { useState } from 'react';
import './order.css';

const Order = () => {
  const [selectedItems, setSelectedItems] = useState([]);

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

  const menuItems = [
    { name: 'Burger', image: 'burger.jpg', price: 8.99 },
    { name: 'Pizza', image: 'pizza.jpg  ', price: 10.99 },
    { name: 'Fries', image: 'fries.jpg', price: 3.99 },
    { name: 'Salad', image: 'salad.jpg', price: 6.99 },
    { name: 'Sushi', image: 'sushi.jpg', price: 12.99 },
    { name: 'Pasta', image: 'pasta.jpg', price: 9.99 },
  ];

  return (
    <div className="food-menu-container1">
      <h2 className='h22'>Food Order</h2>
      <div className="menu-items1">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="menu-item11"
            onClick={() => handleItemClick(menuItem)}
          >
            <img src={menuItem.image} alt={menuItem.name} />
            <p>{menuItem.name}</p>
            <p>${menuItem.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="selected-items1">
        <h3>Selected Items:</h3>
        {selectedItems.length === 0 ? (
          <p>No items selected</p>
        ) : (
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <div className="quantity-controls">
                  <button onClick={() => handleDecrementQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(item)}>+</button>
                </div>
                <button onClick={() => handleRemoveItemClick(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <center>

      <button type="submit">Submit</button>
      </center>
    </div>
  );
};

export default Order;