import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
      getServices();
  }, []);

  const getServices = async () => {
    try {
      let result = await fetch("http://localhost:4500/services");
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
    <div className={styles["product-list-container"]}>
      <h3>Services List</h3>
      <table className={styles["product-table"]}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? services.map((service, index) => (
            <tr key={service._id}>
              <td>{index + 1}</td>
              <td>{service.name}</td>
              <td>{service.phone}</td>
              <td>{service.price}</td>
              <td>{service.description}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5">No services available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingForm;
