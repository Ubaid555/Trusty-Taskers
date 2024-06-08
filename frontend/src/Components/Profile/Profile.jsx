// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
// import { useNavigate } from 'react-router-dom';
// import styles from "./Profile.module.css";
// import Footer from '../Footer/Footer';
// import ConfirmModal from '../ConfirmModal/ConfirmModal';

// export const Profile = () => {
//     const [userProfile, setUserProfile] = useState([]);
//     const [showConfirm, setShowConfirm] = useState(false);
//     const [deleteProfileId, setDeleteProfileId] = useState(null);
//     const [deleteProfileCategory, setDeleteProfileCategory] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         document.title = "Trusty Taskers - Profile";
//       }, []);
    
//     useEffect(() => {
//         showProfileDetail();
//     }, []);

//     const showProfileDetail = async () => {
//         const userId = JSON.parse(localStorage.getItem("loginusers"))._id;
//         let result = await fetch(`http://localhost:4500/showProfile?userId=${userId}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         result = await result.json();
//         setUserProfile(result);
//     };

//     const handleUpdateProfile = (profile) => {
//         navigate('/updateprofile', { state: { profile } });
//     };

//     const handleDeleteProfile = async (id, category) => {
//         let result = await fetch(`http://localhost:4500/Delete?userId=${id}&category=${category}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         window.location.reload();
//         if (result.ok) {
//             let response = await result.json();
//             console.log(response);
//             setUserProfile(userProfile.filter(profile => profile.userId !== id || profile.category !== category));
//         } else {
//             console.error('Failed to delete:', result.statusText);
//         }
//         window.location.reload();
//     };

//     const showDeleteConfirmation = (id, category) => {
//         setDeleteProfileId(id);
//         setDeleteProfileCategory(category);
//         setShowConfirm(true);
//     };

//     const confirmDelete = () => {
//         handleDeleteProfile(deleteProfileId, deleteProfileCategory);
//         setShowConfirm(false);
//     };

//     const cancelDelete = () => {
//         setShowConfirm(false);
//     };

//     return (
//         <>
//             <Navbar />
//             <h1 className={styles.main_heading}>{JSON.parse(localStorage.getItem("loginusers")).name}'s PROFILE</h1>
//             <div className={styles.section_white}>
//                 {userProfile.length > 0 ? (
//                     userProfile.map((profile) => (
//                         <div key={profile._id} className={styles.card}>
//                             <img
//                                 className={styles.teamImg}
//                                 src={profile.image}
//                                 alt="profile-img"
//                             />
//                             <div className={styles.cardInfo}>
//                                 <form>
//                                     <div className={styles.formGroup}>
//                                         <label htmlFor="category" className={styles.cardCategory}>Profession</label>
//                                         <input
//                                             type="text"
//                                             id="category"
//                                             name="category"
//                                             value={profile.category}
//                                             className={styles.cardInput}
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div className={styles.formGroup}>
//                                         <label htmlFor="name" className={styles.cardTitle}>Name</label>
//                                         <input
//                                             type="text"
//                                             id="name"
//                                             name="name"
//                                             value={profile.name}
//                                             className={styles.cardInput}
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div className={styles.formGroup}>
//                                         <label htmlFor="phone">Phone</label>
//                                         <input
//                                             type="text"
//                                             id="phone"
//                                             name="phone"
//                                             value={profile.phone}
//                                             className={styles.cardInput}
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div className={styles.formGroup}>
//                                         <label htmlFor="price">Price</label>
//                                         <input
//                                             type="text"
//                                             id="price"
//                                             name="price"
//                                             value={profile.price}
//                                             className={styles.cardInput}
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div className={styles.formGroup}>
//                                         <label htmlFor="description">Description</label>
//                                         <textarea
//                                             id="description"
//                                             name="description"
//                                             value={profile.description}
//                                             className={styles.cardInput}
//                                             readOnly
//                                         />
//                                     </div>
//                                     <button 
//                                         type="button" 
//                                         className={styles.cardBtn} 
//                                         onClick={() => handleUpdateProfile(profile)}
//                                     >
//                                         Update Profile
//                                     </button>
//                                     <button 
//                                         type="button" 
//                                         className={styles.cardBtn} 
//                                         onClick={() => showDeleteConfirmation(profile.userId, profile.category)}
//                                     >
//                                         Delete Profile
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className={styles.oops}>
//                         <p className={styles.no_services}>Add services first</p>
//                     </div>
//                 )}
//             </div>
//             <Footer />
//             <ConfirmModal 
//                 show={showConfirm} 
//                 onConfirm={confirmDelete} 
//                 onCancel={cancelDelete} 
//             />
//         </>
//     );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import styles from "./Profile.module.css";
import Footer from '../Footer/Footer';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

export const Profile = () => {
    const [userProfile, setUserProfile] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteProfileId, setDeleteProfileId] = useState(null);
    const [deleteProfileCategory, setDeleteProfileCategory] = useState(null);
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

    const showDeleteConfirmation = (id, category) => {
                setDeleteProfileId(id);
                setDeleteProfileCategory(category);
                setShowConfirm(true);
            };
        
            const confirmDelete = () => {
                handleDeleteProfile(deleteProfileId, deleteProfileCategory);
                setShowConfirm(false);
            };
        
            const cancelDelete = () => {
                setShowConfirm(false);
            };

    const getImageForCategory = (category) => {
        switch(category.toLowerCase()) {
            case 'electrician':
                return '/Images/electrician.jpeg';
            case 'plumber':
                return '/Images/plumber.png';
            case 'mechanic':
                return '/Images/mechanic.png';
            case 'cable operator':
                return '/Images/cable operator.jpg';
            case 'labor':
                return '/Images/labor.png';
            case 'carpenter':
                return '/Images/carpenter.png';
            default:
                return '/Images/default.png'; // A default image if none match
        }
    }

    return (
        <>
            <Navbar/>
            <h1 className={styles.main_heading}>{JSON.parse(localStorage.getItem("loginusers")).name}'s PROFILE</h1>
            <div className={styles.section_white}>
                {userProfile.length > 0 && (
                    <img
                        className={styles.teamImg}
                        src={userProfile[0].image}
                        alt="profile-img"
                    />
                )}
                <div className={styles.formContainer}>
                    {userProfile.length > 0 ? (
                        userProfile.map((profile, index) => (
                            <div key={profile._id} className={styles.card}>
                                <div className={styles.cardInfo}>
                                    <h2 className={styles.serviceHeading}>Service {index + 1}</h2>
                                    <form>
                                        <img 
                                            className={styles.card_image} 
                                            src={getImageForCategory(profile.category)} 
                                            alt='service-img' 
                                            height='70px' 
                                            width='70px'
                                        />
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
                                            onClick={() => showDeleteConfirmation(profile.userId, profile.category)}
                                        >
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.oops}>
                            <p className={styles.no_services}>Add services first</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
            <ConfirmModal 
                show={showConfirm} 
                onConfirm={confirmDelete} 
                onCancel={cancelDelete} 
            />
        </>
    );
};

export default Profile;