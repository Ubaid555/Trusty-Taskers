import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './logo1.jpeg';
import './Navbar.css'

const Navbar = () => {    
    const auth = localStorage.getItem("loginusers");
    const navigate  = useNavigate();
    
    const logout = () =>{
        localStorage.clear();
        navigate('/signup');
      }
    const isAuthenticated = false;
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <>
       <nav>
       <div className="nav">
       <NavLink className="logo item inActiveStyle">
                    <NavLink to="/"><img src={logo} alt="My Logo" width="85" height="41"/></NavLink>
            </NavLink>
            <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>    
                    <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to='/'>Home</NavLink>
                    <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/about">About</NavLink>
                    <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/contact">Contact Us</NavLink>
                    <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/addservice">Add Services</NavLink>
                    <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/services">Services</NavLink>
                    <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/profile">Profile</NavLink>
            </ul>   
            {auth ? 
            <div>
                <NavLink onClick={logout} to="/signup">
                    <button className="signoutbtn">Log out ({JSON.parse(auth).name})</button>
                </NavLink>
            </div> :
            <div className='both_btn'>
                <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/login">
                    <a href='http://localhost:3000/login' className="loginbtn">Log in</a>
                </NavLink>
                
                <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/signup">
                    <a href='http://localhost:3000/signup' className="signbtn">Sign up</a>
                </NavLink>
            </div>}
    </div>

    <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
</nav>

        </>
    );
};

export default Navbar;