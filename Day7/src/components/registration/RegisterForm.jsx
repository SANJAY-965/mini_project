// import React, { useState } from "react";
// import './RegisterForm.css';
// import { Link, useNavigate } from 'react-router-dom';

// export const LoginPage = (props) => {     
//      const navigate = useNavigate();
//      const [fname, setFName] = useState('');
//      const [lname, setLName] = useState('');
//      const [email, setEmail] = useState('');
//      const [password, setPassword] = useState('');
//      const [cpassword, setCPassword] = useState('');
//      const [error, setError] = useState([]);  
//      const handleEmailChange = (e) => {
//        setEmail(e.target.value);
//      }
     
//      const handlePasswordChange = (e) => {
//        setPassword(e.target.value);
//      }
     
//      const handleSubmit = (e) => {
//        e.preventDefault();   
//        if (fname===''||lname===''||email==='' || password===''||cpassword==='') {
//          setError('Please enter all the fields');
//          return;
//        }
     
//        if (!validateEmail(email)) {
//          setError('Please enter a valid email address.');
//          return;
//        }
//        if(password!==cpassword){
//         setError('password does not match');
//        }
     
//        // Handle login logic here
//        console.log('Logging in with email:', email, 'and password:', password);    
//        // Navigate to the home page upon successful login
//        navigate('/Home1');
//       };

//       const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//       };


//     return (
//     <center>

    
//         <div className="auth-form-container">
//           <center>
//             <h2 style={{color:'white'}}>Sign Up</h2>
//           </center>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="fname" className="loginlabel">FirstName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                 <input value={fname}  className='logininput' onChange={(e) => setFName(e.target.value)}type="fname" placeholder="your FirstName" id="email" name="FirstName" /><br/>
//                 <label htmlFor="lname" className="loginlabel">LastName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                 <input value={lname}  className='logininput' onChange={(e) => setLName(e.target.value)}type="lname" placeholder="your LastName" id="email" name="LastName" /><br/>
//                 <label htmlFor="email" className="loginlabel">email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                 <input value={email}  className='logininput' onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br/>
//                 <label htmlFor="password" className="loginlabel">password&nbsp;&nbsp;</label>
//                 <input value={password} className='logininput' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <label htmlFor="Cpassword" className="loginlabel">Confirm password&nbsp;&nbsp;</label>
//                 <input value={cpassword} className='logininput' onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="********" id="password" name="cpassword" />
//                 <nav>
//             <center>
//               <br/>
//               <nav>
//               {error && <div className="error1">{error}</div>}
//                 <button type="submit" >Sign Up</button>
//               </nav>
//             </center>
//                 </nav>
//             </form>
//             <nav>
//               {/* <Link to='/Sign'>
//             <button style={{color:'white'}}className="link-btn" >Don't have an account? Register here.</button> 
//               </Link> */}
//             </nav>
//         </div>
//         </center>
//     )
//   }

// export default LoginPage;


// // onClick={() => props.onFormSwitch('register')}


import React, { useState } from "react";
import './RegisterForm.css';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = (props) => {     
  const navigate = useNavigate();
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState([]);  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();   

    if (fname === '' || lname === '' || email === '' || password === '' || cpassword === '') {
      setError('Please enter all the fields');
      return;
    }
   
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== cpassword) {
      setError('Passwords do not match');
      return;
    }
   
    // Handle login logic here
    console.log('Logging in with email:', email, 'and password:', password);    
    // Navigate to the home page upon successful login
    navigate('/Home1');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <center>
      <div className="auth-form-container">
        <center>
          <h2 style={{color:'white'}}>Sign Up</h2>
        </center>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="fname" className="loginlabel">FirstName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input value={fname} className='logininput' onChange={(e) => setFName(e.target.value)}type="text" placeholder="Your FirstName" id="fname" name="FirstName" /><br/>
          <label htmlFor="lname" className="loginlabel">LastName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input value={lname} className='logininput' onChange={(e) => setLName(e.target.value)}type="text" placeholder="Your LastName" id="lname" name="LastName" /><br/>
          <label htmlFor="email" className="loginlabel">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input value={email} className='logininput' onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br/>
          <label htmlFor="password" className="loginlabel">Password&nbsp;&nbsp;</label>
          <input value={password} className='logininput' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <label htmlFor="cpassword" className="loginlabel">Confirm password&nbsp;&nbsp;</label>
          <input value={cpassword} className='logininput' onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="********" id="cpassword" name="cpassword" />
          <nav>
            <center>
              <br/>
              {error && <div className="error1">{error}</div>}
              <button type="submit">Sign Up</button>
            </center>
          </nav>
        </form>
      </div>
    </center>
  )
}

export default LoginPage;
