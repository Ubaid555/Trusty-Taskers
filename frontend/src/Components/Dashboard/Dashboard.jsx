// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import './Dashboard.css';

// const Dashboard = () => {
//   return (
//     <>
//     <Navbar />
//     <div className="dashboard">
//       <div className="sidebar">
//         <div className="items">
//         <Dropdown className="icon" title={<><i class="fa-solid fa-file"></i> Overview</>}>
//           <DropdownItem text="Summary of services" link="/summary" />
//           <DropdownItem text="Bookings" link="/bookings" />
//         </Dropdown>

//         <Dropdown title={<><i class="fa-solid fa-screwdriver-wrench"></i> My Services</>}>
//           <DropdownItem text="List of services offered" link="/services" />
//           <DropdownItem text="Add New Service" link="/add-service" />
//         </Dropdown>

//         <Dropdown title={<><i className="fa fa-book"></i> Manage Bookings</>}>
//           <DropdownItem text="My Bookings" link="/my-bookings" />
//           <DropdownItem text="Pending Requests" link="/pending-requests" />
//           <DropdownItem text="Booking Requests" link="/booking-requests" />
//         </Dropdown>
        
//         <Dropdown title={<><i className="fa fa-user"></i> Profile Management</>}>
//           <DropdownItem text="View Profile" link="/profile" />
//           <DropdownItem text="Account Settings" link="/account-settings" />
//         </Dropdown>

//         <Link to="/notifications" className="menu-item">
//         <i className="fa fa-bell"></i>Notifications
//         </Link>
//         </div>
//       </div>
//       <div className="content">
//         <h1>Welcome to your Dashboard</h1>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// const Dropdown = ({ title, children }) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <div className="dropdown">
//       <button className={`dropdown-btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
//         {title}
//       </button>
//       {open && <div className="dropdown-content">{children}</div>}
//     </div>
//   );
// };

// const DropdownItem = ({ text, link }) => {
//   return (
//     <Link to={link} className="dropdown-item">
//       {text}
//     </Link>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import './Dashboard.css';

// const Dashboard = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="dashboard">
//         <div className="sidebar">
//           <div className="items">
//             <Dropdown title={<><i className="fa-solid fa-file"></i> Overview</>}>
//               <DropdownItem text="Summary of services" link="/summary" />
//               <DropdownItem text="Bookings" link="/bookings" />
//             </Dropdown>

//             <Dropdown title={<><i className="fa-solid fa-screwdriver-wrench"></i> My Services</>}>
//               <DropdownItem text="List of services offered" link="/services" />
//               <DropdownItem text="Add New Service" link="/add-service" />
//             </Dropdown>

//             <Dropdown title={<><i className="fa fa-book"></i> Manage Bookings</>}>
//               <DropdownItem text="My Bookings" link="/my-bookings" />
//               <DropdownItem text="Pending Requests" link="/pending-requests" />
//               <DropdownItem text="Booking Requests" link="/booking-requests" />
//             </Dropdown>

//             <Dropdown title={<><i className="fa fa-user"></i> Profile Management</>}>
//               <DropdownItem text="View Profile" link="/profile" />
//               <DropdownItem text="Account Settings" link="/account-settings" />
//             </Dropdown>

//             <Link to="/notifications" className="menu-item">
//               <i className="fa fa-bell"></i>Notifications
//             </Link>
//           </div>
//         </div>
//         <div className="content">
//           <h1>Welcome to your Dashboard</h1>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const Dropdown = ({ title, children }) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <div className="dropdown">
//       <button className={`dropdown-btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
//         {title} <i className={`fa ${open ? 'fa-angle-up' : 'fa-angle-down'}`} style={{ marginLeft: 'auto' }}></i>
//       </button>
//       {open && <div className="dropdown-content">{children}</div>}
//     </div>
//   );
// };

// const DropdownItem = ({ text, link }) => {
//   return (
//     <Link to={link} className="dropdown-item">
//       {text}
//     </Link>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Dashboard.module.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar />
       
      <div className={styles.dashboard}>
        <nav className={`${styles.navbar} ${showMenu ? styles.showMenu : ''}`}>
          {/* Toggle button for small screens */}
          <button className={styles.menuButton} onClick={toggleMenu}>
          {showMenu ? (
              <>
                <i className="fa fa-times" style={{ marginRight: '10px' }}></i> CLOSE
              </>
            ) : (
              <>
                <i className="fa fa-bars" style={{ marginRight: '10px' }}></i> MENU
              </>
            )}
          </button>

          {/* Dropdown menus */}
          <Dropdown className={styles.dropbtn} variant="link">
            <Dropdown.Toggle
              className={styles.mainbtn}
              style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
            >
              <i className="fa fa-file" style={{ marginRight: '10px' }}></i> Overview
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenuCustom}>
              <Dropdown.Item as={NavLink} to='/summary-services' className={styles.dropdown_item}>
                Summary of services
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/mybookings' className={styles.dropdown_item}>
                Bookings
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className={styles.dropbtn} variant="link">
            <Dropdown.Toggle
              className={styles.mainbtn}
              style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
            >
              <i className="fa fa-screwdriver-wrench" style={{ marginRight: '10px' }}></i> My Services
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenuCustom}>
              <Dropdown.Item as={NavLink} to='/services' className={styles.dropdown_item}>
                List of services offered
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/addservice' className={styles.dropdown_item}>
                Add new services
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className={styles.dropbtn} variant="link">
            <Dropdown.Toggle
              className={styles.mainbtn}
              style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
            >
              <i className="fa fa-book" style={{ marginRight: '10px' }}></i> Manage Bookings
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenuCustom}>
            <Dropdown.Item as={NavLink} to='/mybookings' className={styles.dropdown_item}>
                Booking Requests
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to='/managerequests' className={styles.dropdown_item}>
                Pending Requests
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to='/confirmedbookings' className={styles.dropdown_item}>
                Confirmed Bookings
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to='/completedbookings' className={styles.dropdown_item}>
                Completed Bookings
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className={styles.dropbtn} variant="link">
            <Dropdown.Toggle
              className={styles.mainbtn}
              style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
            >
              <i className="fa fa-user" style={{ marginRight: '10px' }}></i> Manage Profile 
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenuCustom}>
              <Dropdown.Item as={NavLink} to='/profile' className={styles.dropdown_item}>
                View Profile
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/account-settings' className={styles.dropdown_item}>
                Account Settings
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Notification link inside the menu */}
          <NavLink to='/notifications' className={`${styles.navbarItem} ${styles.notificationLink}`}>
            <i className="fa fa-bell" style={{ marginRight: '10px' }}></i> Notifications
          </NavLink>
        </nav>
        {/* <h1 className={styles.main_heading}>{userName}'s DASHBOARD</h1> */}
      </div>
    </>
  );
};

export default Dashboard;