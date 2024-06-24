import React, { useState } from 'react';
import styles from './PasswordUpdate.module.css';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';

const PasswordUpdate = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4500/api/updatePassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    currentPassword,
                    newPassword
                })
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Error updating password:', error);
            setMessage('Failed to update password. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <Dashboard />
            <div className={styles.container}>
                <h1>Update Password</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label> */}
                    <label>
                        Current Password:
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Update Password</button>
                </form>
                {message && <p className={styles.message}>{message}</p>}
            </div>
        </>
    );
};

export default PasswordUpdate;