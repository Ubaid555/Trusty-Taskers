// import React from "react";
// import { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import styles from "./AllUsers.module.css";

// const AllUsers = () => {
//   const [services, setServices] = useState([]);
//   const [userId,setUserId]=useState("");
//   const location = useLocation();

//   useEffect(() => {
//     getServices();
//   });

//   const getServices = async () => {
//     const getId = JSON.parse(localStorage.getItem("loginusers"))
//     if (getId) {
//       setUserId(getId._id);
//     }
//     try {
//       const queryParams = new URLSearchParams(location.search);
//       const category = queryParams.get('category');
//       let result = await fetch(`http://localhost:4500/services?(category=${category} && userId=${userId}`);
//       result = await result.json();
//       if (Array.isArray(result)) {
//           setServices(result);
//           console.log("Services", result);
//       } else {
//           setServices([]);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./AllUsers.module.css";

const AllUsers = () => {
  const [services, setServices] = useState([]);
  const [userId, setUserId] = useState(null);
  const location = useLocation();

  // Fetch userId from localStorage when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loginusers"));
    if (storedUser && storedUser._id) {
      setUserId(storedUser._id);
    }
  }, []);
  useEffect(() => {
    if (userId !== null) {
      getServices();
    }
  }, [location, userId]);

  const getServices = async () => {
    try {
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get('category');
      const url = new URL("http://localhost:4500/services");
      if (category) {
        url.searchParams.append('category', category);
      }
      if (userId) {
        url.searchParams.append('userId', userId);
      }
      let result = await fetch(url);
      result = await result.json();
      if (Array.isArray(result)) {
          setServices(result);
          console.log("Services", result);
      } else {
          setServices([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
    <Navbar/>
    
    <div className={styles["service-list-container"]}>
      <h3 className={styles.heading_style}>List of Service Providers</h3>
      <div className={styles.cards}>
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service._id} className={styles.card}>
              <img
                src="Images/profile-img.jpg"
                alt="service-img"
                className={styles.card_img}
              />
              <div className={styles.card_info}>
                <span className={styles.card_category}>{service.category}</span>
                <h3 className={styles.card_title}>{service.name}</h3>
                <p><strong>Phone:</strong> {service.phone}</p>
                <p><strong>Price:</strong> {service.price}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <NavLink to="/bookingform">
                  <button className={styles.card_btn}>Book Now</button>
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.no_services}>No services available</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AllUsers;