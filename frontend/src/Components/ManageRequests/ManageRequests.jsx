import React, { useState, useEffect } from 'react';
import styles from './ManageRequests.module.css';
import Navbar from '../Navbar/Navbar';

const ManageRequests = () => {

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
        const fetchBookings = async () => {
            try {
                let response = await fetch(`http://localhost:4500/showBookingRequests?userId=${userId}`, {
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

        if (userId) {
            fetchBookings();
        }
    }, [userId]);

    const handleAcceptRequest = async (bookingId) => {
        if (bookingId) {
            try {
                let update = await fetch(`http://localhost:4500/handleBookingRequest?bookingId=${bookingId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                     body: JSON.stringify({ status: 'Confirmed' })
                });
    
                if (!update.ok) {
                    throw new Error('Network response was not ok');
                }
    
                let result = await update.json();
                if(result.modifiedCount===1){
                    window.location.reload();
                }
                console.log("Update result:", result);
            } catch (error) {
                console.error("Error updating booking status:", error);
            }
        }
    };

    return (
      <>
      <Navbar/>
        <h1 className={styles.main_heading}>{userName}'s BOOKINGS Requests</h1>
        <div className={styles.bookingsContainer}>
            <table className={styles.bookingsTable}>
                <thead>
                    <tr className={styles.tableRow}>
                        <th className={styles.tableHeader}>Service Name</th>
                        <th className={styles.tableHeader}>Requester Name</th>
                        <th className={styles.tableHeader}>Status</th>
                        <th className={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking._id} className={styles.tableRow}>
                                <td className={styles.tableCell}>{booking.category}</td>
                                <td className={styles.tableCell}>{booking.serviceTakerName}</td>
                                <td className={styles.tableCell}>{booking.currentStatus}</td>
                                <td className={styles.tableCell}>
                                    <button className={styles.actionButton}>View Details</button>
                                    <button className={styles.actionButton} onClick={() => handleAcceptRequest(booking._id)}>Accept</button>
                                    <button className={styles.actionButton}>Reject</button>
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

export default ManageRequests