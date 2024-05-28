// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
// import styles from "./Profile.module.css";

// export const Profile = () => {
//     const [userDetails, setUserDetails] = useState(null);

//     useEffect(() => {
//         document.title = "Trusty Taskers - Profile";
//       }, []);

//     useEffect(() => {
//         // Fetch user details from localStorage or API
//         const storedUserDetails = localStorage.getItem("loginusers");
//         if (storedUserDetails) {
//             try {
//                 const parsedDetails = JSON.parse(storedUserDetails);
//                 setUserDetails(parsedDetails);
//             } catch (error) {
//                 console.error("Error parsing user details from localStorage:", error);
//             }
//         }
//     }, []);

//     return (
//         <>
//             <Navbar />
//             {userDetails ? (
//                 <>
//                     <h1 className={styles.main_heading}>{userDetails.name}'s PROFILE</h1>
//                     <div className={styles.profile}>
//                         <div className={styles.details}>
//                             <p className={styles.field}>
//                                 <strong>Name:</strong> {userDetails.name}
//                             </p>
//                             <p className={styles.field}>
//                                 <strong>Email:</strong> {userDetails.email}
//                             </p>
//                             <p className={styles.field}>
//                                 <strong>Phone Number:</strong> {userDetails.phone}
//                             </p>
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <p>No user details available.</p>
//             )}
//         </>
//     );
// };





import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import styles from "./Profile.module.css";
import Footer from '../Footer/Footer';

export const Profile = () => {
    const [userProfile, setUserProfile] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        showProfileDetail();
    }, []);

    const showProfileDetail = async () => {
        const userId = JSON.parse(localStorage.getItem("loginusers"))._id;
        let result = await fetch(`http://localhost:4500/showProfile?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        setUserProfile(result);
    };

    const handleUpdateProfile = (profile) => {
        navigate('/updateprofile', { state: { profile } });
    };

    const handleDeleteProfile = async(id,category)=>{
        let result = await fetch(`http://localhost:4500/Delete?userId=${id}&category=${category}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.reload();
        if (result.ok) {
            let response = await result.json();
            console.log(response);
        } else {
            console.error('Failed to delete:', result.statusText);
        }
        window.location.reload();
    }

    return (
        <>
            <Navbar/>
            <h1 className={styles.main_heading}>{JSON.parse(localStorage.getItem("loginusers")).name}'s PROFILE</h1>
            <div className={styles.section_white}>
                {userProfile.length > 0 ? (
                    userProfile.map((profile) => (
                        <div key={profile._id} className={styles.card}>
                            <img
                                className={styles.teamImg}
                                src="Images/profile-img.jpg"
                                alt="profile-img"
                            />
                            <div className={styles.cardInfo}>
                                <form>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="category" className={styles.cardCategory}>Profession</label>
                                        <input
                                            type="text"
                                            id="category"
                                            name="category"
                                            value={profile.category}
                                            className={styles.cardInput}
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.cardTitle}>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={profile.name}
                                            className={styles.cardInput}
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            value={profile.phone}
                                            className={styles.cardInput}
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={profile.email}
                                            className={styles.cardInput}
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="price">Price</label>
                                        <input
                                            type="text"
                                            id="price"
                                            name="price"
                                            value={profile.price}
                                            className={styles.cardInput}
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={profile.description}
                                            className={styles.cardInput}
                                            readOnly
                                        />
                                    </div>
                                    <button 
                                        type="button" 
                                        className={styles.cardBtn} 
                                        onClick={() => handleUpdateProfile(profile)}
                                    >
                                        Update Profile
                                    </button>
                                    <button 
                                        type="button" 
                                        className={styles.cardBtn} 
                                        onClick={() => handleDeleteProfile(profile.userId,profile.category)}
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noServices}>No services available</p>
                )}
            </div>
            <Footer/>
        </>
    );

};

export default Profile;