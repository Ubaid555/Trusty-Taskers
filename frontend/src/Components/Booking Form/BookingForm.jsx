// // import {React, useEffect} from 'react';
// // import Navbar from '../Navbar/Navbar';
// // import Footer from '../Footer/Footer';
// // import styles from './BookingForm.module.css';


// // const BookingForm = () => {
// //   useEffect(() => {
// //     document.title = "Trusty Taskers - Book Service";
// //   }, []);

// //   return (
// //     <>
// //     <Navbar/>
// //     <h1 className={styles.main_heading}>Book your service here</h1>
// //     <section className={styles.book_container}>
// //       <div className={styles.contact_form}>
// //         <form className="form">
// //           <div className={styles.form_control}>
// //             <label htmlFor="phone">Phone number</label>
// //             <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
// //           </div>

// //           <div className={styles.form_control}>
// //             <label htmlFor="address">Address</label>
// //             <input type="text" name="address" />
// //           </div>

// //           <div className={styles.form_control}>
// //             <label htmlFor="text">Enter your problem here</label>
// //             <textarea name="text" rows="5" />
// //           </div>

// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "center",
// //               marginBottom: "20px",
// //             }}
// //           >
// //             <button className={styles.bookbtn} type="submit">Book Service</button>
// //           </div>

// //           {/*<div>{name + " " + email + " " + text}</div>*/}
// //         </form>
// //       </div>
// //       <div className={styles.contact_image}>
// //         <img src="/Images/booking provider.png" alt="Booking" />
// //       </div>
// //     </section>
// //     <Footer/>
// //     </>
// //   );
// // };

// // export default  BookingForm;

// import React from 'react';
// import { useState,useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import styles from './BookingForm.module.css';


// const BookingForm = () => {

//   const [serviceTakerId,setServiceTakerId]= useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const location = useLocation();
//   const { category,serviceProviderId } = location.state || {};

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loginusers"));
//     if (userData) {
      
//       setServiceTakerId(userData._id);
//       setName(userData.name);
//       setPhone(userData.phone);
//       setImage(userData.image);
//     }
//   }, []);

//   const handleBookService= async() =>{
//     let result = await fetch ("http://localhost:4500/bookService",{
//       method: "post",
//       body: JSON.stringify({ name, phone, category, address,description, serviceTakerId,serviceProviderId, image}),
//       headers: { "Content-Type": "application/json" },
//     })
//     result=await result.json();
//       if (result.result === 'You have Already Booked this service with this user') {
//         console.log(result.result);
//         toast.error(result.result);
//       } else {
//         toast.success("Service has been requested successfully!");
//       }
//   }

//   return (
//     <>
//     <Navbar/>
//     <h1 className={styles.main_heading}>Book your service here</h1>
//     <section className={styles.book_container}>
//       <div className={styles.contact_form}>
//         <form className="form">
//           <div className={styles.form_control}>
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" value = {JSON.parse(localStorage.getItem("loginusers")).name} readOnly />
//           </div>

//           <div className={styles.form_control}>
//             <label htmlFor="category">Category</label>
//             <input type="text" id="category" name="category" value={category} readOnly />
//           </div>

//           <div className={styles.form_control}>
//             <label htmlFor="phone">Phone number</label>
//             <input type="tel" name="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}" value={phone}/>
//           </div>

//           <div className={styles.form_control}>
//             <label htmlFor="address">Address</label>
//             <input type="text" name="address" 
//                   onChange={(e) => setAddress(e.target.value)}/>
//           </div>

//           <div className={styles.form_control}>
//             <label htmlFor="text">Enter your problem here</label>
//             <textarea name="text" rows="5" 
//                   onChange={(e) => setDescription(e.target.value)}/>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}
//           >
//             <button onClick={handleBookService} className={styles.bookbtn} type="submit">Book Service</button>
//           </div>

//           {/*<div>{name + " " + email + " " + text}</div>*/}
//         </form>
//       </div>
//       <div className={styles.contact_image}>
//         <img src="/Images/booking provider.png" alt="Booking" />
//       </div>
//     </section>
//     <Footer/>
//     </>
//   );
// };

// export default  BookingForm;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [serviceTakerId, setServiceTakerId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const location = useLocation();
  const { category, serviceProviderId } = location.state || {};

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loginusers"));
    if (userData) {
      setServiceTakerId(userData._id);
      setName(userData.name);
      setPhone(userData.phone);
      setImage(userData.image);
    }
  }, []);

  const handleBookService = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      let response = await fetch("http://localhost:4500/bookService", {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
          category,
          address,
          description,
          serviceTakerId,
          serviceProviderId,
          image
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let result = await response.json();

      if (result.result === 'You have Already Booked this service with this user') {
        toast.error(result.result);
      } else {
        toast.success("Service has been requested successfully!");
      }
    } catch (error) {
      console.error("Error occurred during fetch:", error);
      toast.error("An error occurred while requesting the service.");
    }
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.main_heading}>Book your service here</h1>
      <section className={styles.book_container}>
        <div className={styles.contact_form}>
          <form className="form" onSubmit={handleBookService}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} readOnly />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="category">Category</label>
              <input type="text" id="category" name="category" value={category} readOnly />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phone} readOnly />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Enter your problem here</label>
              <textarea name="text" rows="5" onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <button className={styles.bookbtn} type="submit">Book Service</button>
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/Images/booking provider.png" alt="Booking" />
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default BookingForm;
