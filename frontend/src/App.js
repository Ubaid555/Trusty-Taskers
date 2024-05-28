import './App.css';
import { Signup } from './Components/Signup Component/Signup';
import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Herosec from './Components/Herosec/Herosec';
import ContactUs from './Components/Contact Us/ContactUs';
import Services from './Components/Services/Services';
import { AboutUs } from './Components/About Us/AboutUs';
import { Login } from './Components/Login component/Login';
import Paymentform from './Components/Payment Form/Paymentform';
import AddCard from './Components/Add Card/AddCard';
import NotFound from './Components/NotFound/NotFound';
import PaymentConfirmation from './Components/Confirmation Page/PaymentConfirmation';
import Partnerships from './Components/Partnerships/Partnerships';
import BookingForm from './Components/Booking Form/BookingForm';
import { PrivateComponent } from './Components/Private Component/PrivateComponent';
import { Profile } from './Components/Profile/Profile';
import { ForgotPassword } from './Components/Forgot Password/ForgotPassword';
import AllUsers from './Components/All Users/AllUsers';
import AddServices from './Components/Add Services/AddServices';
import UpdateProfile from './Components/Update Profile/UpdateProfile';
//import { Logout } from './Components/Logout component/Logout';

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
           {/* Wrap the protected routes with the PrivateComponent */}
           <Route element={<PrivateComponent />}>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/paymentform' element={<Paymentform/>}/>
            <Route path='/addcard' element={<AddCard/>}/>
            <Route path='/confirmation' element={<PaymentConfirmation/>}/>
            <Route path='/bookingform' element={<BookingForm/>}/>
            <Route path='/partnerships' element={<Partnerships/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/addservice' element={<AddServices/>}/>
            <Route path='/allusers' element={<AllUsers/>}/>
            <Route path="/updateprofile" element={<UpdateProfile/>} />
           </Route>

            <Route path='/' exact element={<Herosec/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='*' element={<NotFound />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        </Routes>
    </BrowserRouter>
  </>
  );                        
}

export default App;