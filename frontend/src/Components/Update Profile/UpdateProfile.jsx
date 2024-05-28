// src/components/UpdateProfile/UpdateProfile.js

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from './UpdateProfile.module.css';

const UpdateProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { profile } = location.state; // get the profile data from state

    const [updatedProfile, setUpdatedProfile] = useState(profile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProfile({
            ...updatedProfile,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem("loginusers"))._id;
        
        try {
            let update = await fetch(`http://localhost:4500/updateProfile?userId=${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedProfile)
            });
    
            update = await update.json();

            console.log(update.result)
    
            if (update.result === 'Result successfully Updated') {
                toast.error(update.result);
              } else {
                toast.success("Unsuccessful Updation");
              }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };
    

    return (
        <div className={styles.updateProfileContainer}>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="category" className={styles.label}>Profession</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={updatedProfile.category}
                        // onChange={handleChange}
                        className={styles.input}
                        readOnly
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={updatedProfile.name}
                       // onChange={handleChange}
                        className={styles.input}
                        readOnly
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={updatedProfile.phone}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={updatedProfile.price}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={updatedProfile.description}
                        onChange={handleChange}
                        className={styles.textarea}
                    />
                </div>
                <button onClick={handleSubmit} type="submit" className={styles.button}>Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;