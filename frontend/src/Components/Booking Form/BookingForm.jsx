import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './BookingForm.module.css';


const BookingForm = () => {

  return (
    <>
    <Navbar/>
    <h1 className={styles.main_heading}>Book your service here</h1>
    <section className={styles.book_container}>
      <div className={styles.contact_form}>
        <form className="form">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Enter your problem here</label>
            <textarea name="text" rows="5" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button className={styles.bookbtn} type="submit">Book Service</button>
          </div>

          {/*<div>{name + " " + email + " " + text}</div>*/}
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/Images/booking provider.png" alt="Booking" />
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default  BookingForm;