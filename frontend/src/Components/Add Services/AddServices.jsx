// import React from "react";
// import { useState,useEffect } from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import styles from "./AddServices.module.css";
// import { NavLink } from "react-router-dom";

// const AddServices = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loginusers"));
//     if (userData) {
//       setName(userData.name);
//       setPhone(userData.phone);
//     }
//   }, []);

//   const handleService = async () => {   

//     let result = await fetch("http://localhost:4500/services", {
//       method: "post",
//       body: JSON.stringify({ name, phone, category, price, description}),
//       headers: { "Content-Type": "application/json" },
//     });

//     result = await result.json();
//     console.log(result);
//   };

//   return (
//     <>
//       <Navbar />
//       <h1 className={styles.main_heading}>Add your service here</h1>
//       <section className={styles.book_container}>
//         <div className={styles.contact_form}>
//           <form className={styles.form}>
//             <div className={styles.all_radio_btns}>
//               <label className={styles.formLabel} htmlFor="profession">Profession</label>

//             <div className={styles.radioContainer1}>
//               <div className={styles.radio_item}>
//                 <input
//                   type="radio"
//                   id="plumber"
//                   name="profession"
//                   value="Plumber"
//                   onChange={(e) => {
//                     setCategory(e.target.value);
//                   }}
//                 />
//                 <label htmlFor="plumber">Plumber</label>
//               </div>

//               <div className={styles.radio_item}>
//                 <input
//                   type="radio"
//                   id="electrician"
//                   name="profession"
//                   value="electrician"
//                   onChange={(e) => {
//                     setCategory(e.target.value);
//                   }}
//                 />
//                 <label htmlFor="electrician">Electrician</label>
//               </div>

//               <div className={styles.radio_item}>
//                 <input
//                   type="radio"
//                   id="labor"
//                   name="profession"
//                   value="labor"
//                   onChange={(e) => {
//                     setCategory(e.target.value);
//                   }}
//                 />
//                 <label htmlFor="labor">Labor</label>
//               </div>
//             </div>

//             <div className={styles.radioContainer2}>
//               <div className={styles.radio_item}>
//                 <input
//                   type="radio"
//                   id="mechanic"
//                   name="profession"
//                   value="mechanic"
//                   onChange={(e) => {
//                     setCategory(e.target.value);
//                   }}
//                 />
//                 <label htmlFor="mechanic">Mechanic</label>
//               </div>
            
//               <div className={styles.radio_item}>
//                 <input
//                   type="radio"
//                   id="carpenter"
//                   name="profession"
//                   value="carpenter"
//                   onChange={(e) => {
//                     setCategory(e.target.value);
//                   }}
//                 />
//                 <label htmlFor="carpenter">Carpenter</label>
//               </div>

//               <div className={styles.radio_item}>
//                 <input
//                   type="radio"
//                   id="cable_operator"
//                   name="profession"
//                   value="cable_operator"
//                   onChange={(e) => {
//                     setCategory(e.target.value);
//                   }}
//                 />
//                 <label htmlFor="cable_operator">Cable Operator</label>
//               </div>
//             </div>
//           </div>
          

//             <div className={styles.form_control}>
//               <label htmlFor="Number">Price</label>
//               <input
//                 type="Number"
//                 name="Price"
//                 value={price}
//                 onChange={(e) => {
//                   setPrice(e.target.value);
//                 }}
//               />
//             </div>

//             <div className={styles.form_control}>
//               <label htmlFor="text">Enter your Description here</label>
//               <textarea
//                 name="text"
//                 rows="5"
//                 value={description}
//                 onChange={(e) => {
//                   setDescription(e.target.value);
//                 }}
//               />
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginBottom: "20px",
//               }}
//             >
//               <NavLink to="/allusers"
//                 onClick={handleService}
//                 className={styles.bookbtn}
//                 type="submit"
//               >
//                 Book Service
//               </NavLink>
//             </div>

//           </form>
//         </div>
//         <div className={styles.contact_image}>
//           <img src="/Images/addservice.png" alt="Booking" />
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default AddServices;

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./AddServices.module.css";

const AddServices = () => {
  const [userId,setUserId]= useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loginusers"));
    if (userData) {
      setUserId(userData._id);
      setName(userData.name);
      setPhone(userData.phone);
    }
  }, []);

  const handleService = async () => {   
    let result = await fetch("http://localhost:4500/services", {
      method: "post",
      body: JSON.stringify({ name, phone, category, price, description,userId}),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);
    toast.success("Service has been added successfully!");
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.main_heading}>Add your service here</h1>
      <section className={styles.book_container}>
        <div className={styles.contact_form}>
          <form className={styles.form}>
            <div className={styles.form_control}>
              <label className={styles.formLabel} htmlFor="profession">Profession</label>
              <select 
                id="profession" 
                name="profession" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className={styles.select_input}
              >
                <option value="">Select a profession</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrician">Electrician</option>
                <option value="Labor">Labor</option>
                <option value="Mechanic">Mechanic</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Cable Operator">Cable Operator</option>
              </select>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="price">Price</label>
              <div className={styles.price_input}>
                <span className={styles.rupee_symbol}>Rs.</span>
                <input
                  type="Number"
                  name="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Enter your Description here</label>
              <textarea
                name="text"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <button
                onClick={handleService}
                className={styles.bookbtn}
                type="button"
              >
                Add Service
              </button>
            </div>

          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/Images/addservice.png" alt="Booking" />
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default AddServices;