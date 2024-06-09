import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard">
      <Navbar />
      <div className="sidebar">
        <div className="items">
        <Dropdown className="icon" title={<><i class="fa-solid fa-file"></i> Overview</>}>
          <DropdownItem text="Summary of services" link="/summary" />
          <DropdownItem text="Bookings" link="/bookings" />
        </Dropdown>

        <Dropdown title={<><i class="fa-solid fa-screwdriver-wrench"></i> My Services</>}>
          <DropdownItem text="List of services offered" link="/services" />
          <DropdownItem text="Add New Service" link="/add-service" />
        </Dropdown>

        <Dropdown title={<><i className="fa fa-book"></i> Manage Bookings</>}>
          <DropdownItem text="My Bookings" link="/my-bookings" />
          <DropdownItem text="Pending Requests" link="/pending-requests" />
          <DropdownItem text="Booking Requests" link="/booking-requests" />
        </Dropdown>
        
        <Dropdown title={<><i className="fa fa-user"></i> Profile Management</>}>
          <DropdownItem text="View Profile" link="/profile" />
          <DropdownItem text="Account Settings" link="/account-settings" />
        </Dropdown>

        <Link to="/notifications" className="menu-item">
        <i className="fa fa-bell"></i>Notifications
        </Link>
        </div>
      </div>
      <div className="content">
        <h1>Welcome to your Dashboard</h1>
      </div>
    </div>
    </>
  );
};

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="dropdown">
      <button className={`dropdown-btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

const DropdownItem = ({ text, link }) => {
  return (
    <Link to={link} className="dropdown-item">
      {text}
    </Link>
  );
};

export default Dashboard;


// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import styles from './Dashboard.module.css';
// import { NavLink } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';

// const Dashboard = () => {
    
//     const user = JSON.parse(localStorage.getItem("loginusers"));
//     const userName = user ? user.name : "User";
//   return (
//     <>
//         <Navbar/>
//         <h1 className={styles.main_heading}>{userName}'s DASHBOARD</h1>
//         <div className={styles.dashboard}>
//         <nav className={styles.navbar}>
//             <Dropdown className={styles.dropbtn} variant="link">
//             <Dropdown.Toggle
//                 className={styles.mainbtn}
//                 style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
//             >
//                 Overview
//             </Dropdown.Toggle>
//             <Dropdown.Menu className={styles.dropdownMenuCustom}>
//                 <NavLink to='/summary-services'><Dropdown.Item className={styles.dropdown_item}>Summary of services</Dropdown.Item></NavLink>
//                 <NavLink to='/bookings'><Dropdown.Item className={styles.dropdown_item}>Bookings</Dropdown.Item></NavLink>
//             </Dropdown.Menu>
//             </Dropdown>

//             <Dropdown className={styles.dropbtn} variant="link">
//             <Dropdown.Toggle
//                 className={styles.mainbtn}
//                 style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
//             >
//                 My Services
//             </Dropdown.Toggle>
//             <Dropdown.Menu className={styles.dropdownMenuCustom}>
//                 <NavLink to='/list-services'><Dropdown.Item className={styles.dropdown_item}>List of services offered</Dropdown.Item></NavLink>
//                 <NavLink to='/add-service'><Dropdown.Item className={styles.dropdown_item}>Add new services</Dropdown.Item></NavLink>
//             </Dropdown.Menu>
//             </Dropdown>

//             <Dropdown className={styles.dropbtn} variant="link">
//             <Dropdown.Toggle
//                 className={styles.mainbtn}
//                 style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
//             >
//                 Manage Bookings
//             </Dropdown.Toggle>
//             <Dropdown.Menu className={styles.dropdownMenuCustom}>
//                 <NavLink to='/pending-requests'><Dropdown.Item className={styles.dropdown_item}>Pending Requests</Dropdown.Item></NavLink>
//                 <NavLink to='/booking-requests'><Dropdown.Item className={styles.dropdown_item}>Booking Requests</Dropdown.Item></NavLink>
//             </Dropdown.Menu>
//             </Dropdown>

//             <Dropdown className={styles.dropbtn} variant="link">
//             <Dropdown.Toggle
//                 className={styles.mainbtn}
//                 style={{ backgroundColor: '#d01c28', color: 'white', border: 'none' }}
//             >
//                 Profile Management
//             </Dropdown.Toggle>
//             <Dropdown.Menu className={styles.dropdownMenuCustom}>
//                 <NavLink to='/profile'><Dropdown.Item className={styles.dropdown_item}>View Profile</Dropdown.Item></NavLink>
//                 <NavLink to='/account-settings'><Dropdown.Item className={styles.dropdown_item}>Account Settings</Dropdown.Item></NavLink>
//             </Dropdown.Menu>
//             </Dropdown>

//             <button className={styles.navbarItem}>Notifications</button>
//         </nav>
//         </div>
//     </>
//   );
// };

// export default Dashboard;