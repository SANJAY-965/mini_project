     import React from 'react';
     import {Routes, Route} from 'react-router-dom';
     import LoginPage from './components/login/LoginPage';
     import RegisterForm from './components/registration/RegisterForm';
     import HomePage from './components/dashboard/HomePage';
     import ReservationForm from './components/table/ReservationForm';
     import Menu from './components/menu/menu';
     import Order from './components/order/order';
     import AboutPage from './components/dashboard/about';
     import ContactPage from './components/dashboard/contact';
     import Terms from './components/table/Reservationterms';
     import { Provider } from 'react-redux';
    //  import store from './store';
     import PaymentTypes from './components/table/payment';
     import Cart from './components/menu/Cart';
     import { Link } from 'react-router-dom';
     import './App.css';
     import { BrowserRouter as Router} from 'react-router-dom';
     import { Switch } from '@mui/material';
import DebitCreditPage from './components/table/debit';
    import store from './components/login/store';
import FeedForm from './components/dashboard/feedback';
  

     const App=() => {
       return (
         <div>
           <Provider store={store}>
           <Routes>
               <Route path='/' element={<RegisterForm/>}/>
               <Route path='/Log' element={<LoginPage/>} />
               <Route path='/Log5' element={<LoginPage/>} />
               <Route path='/signin5' element={<LoginPage/>} />
               <Route path='/Sign' element={<RegisterForm/>}/>
               <Route path='/signup5' element={<RegisterForm/>}/>
               <Route path='/Home' element={<HomePage/>}/>
               <Route path='/home4' element={<HomePage/>}/>
               <Route path='/Home5' element={<HomePage/>}/>
               <Route path='/Home1' element={<LoginPage/>}/>
               <Route path='/fp' element={<RegisterForm/>}/>
               <Route path='/li' element={<LoginPage/>} />
               <Route path='/table' element={<ReservationForm/>} />
               <Route path='/menu' element={<Menu/>} />
               <Route path='/order' element={<Order/>} />
               <Route path='/abo' element={<AboutPage/>} />
               <Route path='/con' element={<ContactPage/>} />
               <Route path='/terms' element={<Terms/>}/>              
               <Route path="/cart" element={<Cart/>}/>  
               <Route path="/pay" element={<PaymentTypes/>}/>
               <Route path="/pay1" element={<PaymentTypes/>}/>
               <Route path="/pay3" element={<PaymentTypes/>}/>
               <Route path="/debit-credit" element={<DebitCreditPage/>}/>
               <Route path="/feed" element={<FeedForm/>}/>


         </Routes>
              
         </Provider>

     </div>
   );
 }

export default App;
// component={Cart} 

{/* import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './components/menu/menu'; 
import Cart from './components/menu/Cart';
import { Routes } from 'react-router-dom';
import { Switch } from '@mui/material';

function App() {
  return (
    <Routes>
      <div className="App">
        <nav>
          <Link to="/">Menu</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Routes>
  );
}

export default App; */}
