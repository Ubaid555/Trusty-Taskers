import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import styles from "./PasswordUpdate.module.css";
import Footer from '../Footer/Footer';

const PasswordUpdate = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);


  const updatePassword = async () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      let response = await fetch('http://localhost:4500/updatepassword', {
        method: 'POST',
        body: JSON.stringify({
          email: JSON.parse(localStorage.getItem("loginusers")).email,
          oldPassword,
          newPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      let result = await response.json();
      if (response.status === 400) {
        toast.error(result.message);
      } else {
        toast.success("Password updated successfully!");
        // Optionally, clear form fields after successful update
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case 'old':
        setShowOldPassword(!showOldPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirm':
        setShowConfirmNewPassword(!showConfirmNewPassword);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.heading_main}>Update Password</h1>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/Images/change password.png" height="300px" width="300px" alt="Update Password" className={styles.image_pass}/>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.form_control}>
              <label htmlFor="password">Old Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="****"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className={styles.input}
                />
                <i className={`fa ${showOldPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eyeIcon}`} onClick={() => togglePasswordVisibility('old')} />
              </div>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="password">New Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="****"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={styles.input}
                />
                <i className={ `fa ${showNewPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eyeIcon}`} onClick={() => togglePasswordVisibility('new')} />
              </div>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="password">Confirm New Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showConfirmNewPassword ? "text" : "password"}
                  placeholder="****"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className={styles.input}
                />
                <i className={`fa ${showConfirmNewPassword ? "fa-eye-slash" : "fa-eye"} ${styles.eyeIcon}`} onClick={() => togglePasswordVisibility('confirm')} />
              </div>
            </div>

            <button onClick={updatePassword} className={styles.button}>
              Update Password
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer/>
    </>
  );
}

export default PasswordUpdate;