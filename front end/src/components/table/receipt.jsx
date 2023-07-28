
import React from 'react';
import './ReceiptPage.css';
const ReceiptPage = ({ receiptData }) => {
  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <p>Card Number: {receiptData.cardNumber}</p>
      <p>Expiration Date: {receiptData.expirationDate}</p>
      <p>Amount: {receiptData.amount}</p>
      <p>Timestamp: {receiptData.timestamp}</p>
    </div>
  );
};

export default ReceiptPage;