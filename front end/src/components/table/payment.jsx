// src/PaymentTypes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';
const PaymentTypes = () => {
  const navigate = useNavigate();

  const handlePaymentClick = (paymentType) => {
    // Redirect to the corresponding payment page based on the payment type
    switch (paymentType) {
      case 'debit_credit':
        navigate('/debit-credit');
        break;
      case 'google_pay':
        window.location.href ='https://pay.google.com';
        break;
      case 'phone_pe':
        window.location.href ='https://www.phonepe.com';
        break;
      default:
        break;
    }
  };

  return (
    <div style={{color:'white'}} className='paybody'>
      <h1 className='h12' >Choose a Payment Type:</h1>
      <div className='paydiv'>
        <img className='image1'
          src="debit2.jpg"
          alt="Debit/Credit Card"
          onClick={() => handlePaymentClick('debit_credit')}
        />
        <img className='image1'
          src="gpay1.jpg"
          alt="Google Pay"
          onClick={() => handlePaymentClick('google_pay')}
        /> 
        <img  className='image1'
          src="phonepe.png"
          alt="PhonePe"
          onClick={() => handlePaymentClick('phone_pe')}
        />
      </div>
    </div>
  );
};

export default PaymentTypes;
