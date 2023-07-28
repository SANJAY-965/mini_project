// // src/DebitCreditPage.js
// import React, { useState } from 'react';
// import './debit.css'
// const DebitCreditPage = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Implement your payment processing logic here
//     // For demonstration purposes, just log the entered data
//     console.log('Card Number:', cardNumber);
//     console.log('Card Holder:', cardHolder);
//     console.log('Expiry Date:', expiryDate);
//     console.log('CVV:', cvv);
//     console.log('Amount:', amount);

//     // Clear form fields after submission (optional)
//     setCardNumber('');
//     setCardHolder('');
//     setExpiryDate('');
//     setCvv('');
//     setAmount('');
//   };

//   return (
//     <div>
//       <h1>Debit/Credit Card Payment Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Card Number:
//           <input
//             type="text"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             maxLength="16"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Card Holder:
//           <input
//             type="text"
//             value={cardHolder}
//             onChange={(e) => setCardHolder(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Expiry Date:
//           <input
//             type="text"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             maxLength="5"
//             placeholder="MM/YY"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           CVV:
//           <input
//             type="text"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             maxLength="3"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Amount:
//           <input
//             type="text"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Pay Now</button>
//       </form>
//     </div>
//   );
// };

// export default DebitCreditPage;


import React, { useState } from 'react';
import './debit.css';
import './receipt.css';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [receiptData, setReceiptData] = useState(null);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate card number, expiration date, and CVV format
    const cardNumberRegex = /^\d{16}$/;
    const expirationDateRegex = /^\d{2}\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;
  
    if (!cardNumberRegex.test(cardNumber) || !expirationDateRegex.test(expirationDate) || !cvvRegex.test(cvv)) {
      alert('Invalid input. Please check the card number, expiration date, and CVV format.');
      return;
    }
  
    setIsSubmitting(true);
  
    // Perform payment processing logic here
    setTimeout(() => {
      // Simulate async processing
      console.log('Payment submitted:', { cardNumber, expirationDate, cvv, amount });
      setIsSubmitting(false);
      setPaymentStatus('success'); // Set the payment status to success
      generateReceipt(); // Generate the receipt
    }, 2000);
  };
  
  const generateReceipt = () => {
    const receipt = {
      cardNumber,
      expirationDate,
      amount,
      timestamp: new Date().toLocaleString(),
    };
    setReceiptData(receipt);
  };

  const handlepayChange = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Perform payment processing logic here
    setTimeout(() => {
      // Simulate async processing
      console.log('Payment submitted:', { cardNumber, expirationDate, cvv, amount });
      setIsSubmitting(false);
      setPaymentStatus('success'); // Set the payment status to success
      generateReceipt(); // Generate the receipt
    }, 2000);
  };

  return (
    <div className="payment-gateway-container">
      <center>

      <h2 style={{color:'white'}}>Payment Gateway</h2>
      </center><br/>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber" className='debitlabel'>Card Number</label>
          <input className='debitinput'
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expirationDate" className='debitlabel'>Expiration Date</label>
            <input className='debitinput'
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={handleExpirationDateChange}
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv" className='debitlabel'>CVV</label>
            <input className='debitinput'
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amount" className='debitlabel'>Amount</label>
          <input className='debitinput'
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter the amount"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting} onChange={handlepayChange} className='debitbutt' >
          {isSubmitting ? 'Processing...' : 'Paid'}
        </button>
      </form>
      {paymentStatus === 'success' && receiptData && (
        <div className="receipt" style={{color:'white'}}>
          <h3>Receipt</h3>
          <p>Card Number: {receiptData.cardNumber}</p>
          <p>Expiration Date: {receiptData.expirationDate}</p>
          <p>Amount: {receiptData.amount}</p>
          <p>Timestamp: {receiptData.timestamp}</p>
          <p className="success-message">Payment Successfully Completed!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
