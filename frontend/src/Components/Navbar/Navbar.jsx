// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import logo from './logo1.jpeg';
// import './Navbar.css'

// const Navbar = () => {    
//     const auth = localStorage.getItem("loginusers");
//     const navigate  = useNavigate();
    
//     const logout = () =>{
//         localStorage.clear();
//         navigate('/signup');
//       }
//     const isAuthenticated = false;
//     const [clicked, setClicked] = useState(false);

//     const handleClick = () => {
//         setClicked(!clicked);
//     };
//     return (
//         <>
//        <nav>
//        <div className="nav">
//        <NavLink className="logo item inActiveStyle">
//                     <NavLink to="/"><img src={logo} alt="My Logo" width="85" height="41"/></NavLink>
//             </NavLink>
//             <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>    
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to='/'>Home</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/about">About</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/contact">Contact Us</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/addservice">Add Services</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/services">Services</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/profile">Profile</NavLink>
//             </ul>   
//             {auth ? 
//             <div>
//                 <NavLink onClick={logout} to="/signup">
//                     <button className="signoutbtn">Log out ({JSON.parse(auth).name})</button>
//                 </NavLink>
//             </div> :
//             <div className='both_btn'>
//                 <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/login">
//                     <a href='http://localhost:3000/login' className="loginbtn">Log in</a>
//                 </NavLink>
                
//                 <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/signup">
//                     <a href='http://localhost:3000/signup' className="signbtn">Sign up</a>
//                 </NavLink>
//             </div>}
//     </div>

//     <div id="mobile" onClick={handleClick}>
//         <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
//     </div>
// </nav>

//         </>
//     );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import logo from './logo1.jpeg';
// import './Navbar.css'

// const Navbar = () => {    
//     const auth = localStorage.getItem("loginusers");
//     const navigate  = useNavigate();
    
//     const logout = () =>{
//         localStorage.clear();
//         navigate('/signup');
//       }
//     const isAuthenticated = false;
//     const [clicked, setClicked] = useState(false);

//     const handleClick = () => {
//         setClicked(!clicked);
//     };
//     return (
//         <>
//        <nav>
//        <div className="nav">
//        <NavLink className="logo item inActiveStyle">
//                     <NavLink to="/"><img src={logo} alt="My Logo" width="85" height="41"/></NavLink>
//             </NavLink>
//             <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>    
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to='/'>Home</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/about">About</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/contact">Contact Us</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/addservice">Add Services</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/services">Services</NavLink>
//                     <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/profile">Profile</NavLink>
//             </ul>   
//             {auth ? 
//             <div>
//                 <NavLink onClick={logout} to="/signup">
//                     <button className="signoutbtns">Log out ({JSON.parse(auth).name})</button>
//                 </NavLink>
//             </div> :
//             <div className='both_btn'>
//                 <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/login">
//                     <Link to='http://localhost:3000/login' className="loginbtns">Log in</Link>
//                 </NavLink>
                
//                 <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/signup">
//                     <Link to='http://localhost:3000/signup' className="signbtns">Sign up</Link>
//                 </NavLink>
//             </div>}
//     </div>

//     <div id="mobile" onClick={handleClick}>
//         <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
//     </div>
// </nav>

//         </>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './logo1.jpeg';
import './Navbar.css';

const Navbar = () => {    
    const auth = localStorage.getItem("loginusers");
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

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
    
                        <Dropdown className="dropbtn" variant="link">
                        <Dropdown.Toggle 
                                className="mainbtn"
                                style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
                            >
                                Services
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-custom">
                                <NavLink to='/services'><Dropdown.Item href="#/action-1">View Services</Dropdown.Item></NavLink>
                                <NavLink to="/addservice"><Dropdown.Item href="#/action-2">Add Services</Dropdown.Item></NavLink>
                            </Dropdown.Menu>
                        </Dropdown>

                        <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/profile">Profile</NavLink>
                    </ul>   
                    {auth ? 
                        <div>
                            <NavLink onClick={logout} to="/signup">
                                <button className="signoutbtns">Log out ({JSON.parse(auth).name})</button>
                            </NavLink>
                        </div> :
                        <div className='both_btn'>
                            <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/login">
                                <Link to='/login' className="loginbtns">Log in</Link>
                            </NavLink>
                            
                            <NavLink className={isAuthenticated ? "item inActiveStyle" : "item activeStyle"} to="/signup">
                                <Link to='/signup' className="signbtns">Sign up</Link>
                            </NavLink>
                        </div>
                    }
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
};

export default Navbar;