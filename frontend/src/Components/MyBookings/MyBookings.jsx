import React, { useState, useEffect } from 'react';
import styles from './MyBookings.module.css';
import Navbar from '../Navbar/Navbar';

const MyBookings = () => {
    const user = JSON.parse(localStorage.getItem("loginusers"));
    const userName = user ? user.name : "User";

    const [userId, setUserId] = useState("");
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loginusers"));
        if (storedUser && storedUser._id) {
            setUserId(storedUser._id);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            fetchBookings();
        }
    }, [userId]);

    const fetchBookings = async () => {
        try {
            let response = await fetch(`http://localhost:4500/showBookedService?userId=${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let result = await response.json();
            setBookings(result);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    return (
      <>
      <Navbar/>
        <h1 className={styles.main_heading}>{userName}'s BOOKINGS</h1>
        <div className={styles.bookingsContainer}>
            <table className={styles.bookingsTable}>
                <thead>
                    <tr className={styles.tableRow}>
                        <th className={styles.tableHeader}>Service Name</th>
                        <th className={styles.tableHeader}>Provider Name</th>
                        <th className={styles.tableHeader}>Status</th>
                        <th className={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking._id} className={styles.tableRow}>
                                <td className={styles.tableCell}>{booking.category}</td>
                                <td className={styles.tableCell}>{booking.serviceProviderName}</td>
                                <td className={styles.tableCell}>{booking.currentStatus}</td>
                                <td className={styles.tableCell}>
                                    <button className={styles.actionButton}>View Details</button>
                                    <button className={styles.actionButton}>Reschedule</button>
                                    <button className={styles.actionButton}>Cancel</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className={styles.tableRow}>
                            <td colSpan="4" className={styles.noBookings}>No bookings found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default MyBookings;