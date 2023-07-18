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
const App=() => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<RegisterForm/>}/>
          <Route path='/Log' element={<LoginPage/>} />
          <Route path='/Sign' element={<RegisterForm/>}/>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Home1' element={<LoginPage/>}/>
          <Route path='/fp' element={<RegisterForm/>}/>
          <Route path='/li' element={<LoginPage/>} />
          <Route path='/table' element={<ReservationForm/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/abo' element={<AboutPage/>} />
          <Route path='/con' element={<ContactPage/>} />

        </Routes>

        {/* <HomePage/> */}
    </div>
  );
}

export default App;