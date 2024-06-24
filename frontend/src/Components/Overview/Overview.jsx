// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CountUp from 'react-countup';
// import styles from './Overview.module.css';
// import Navbar from '../Navbar/Navbar';
// import Dashboard from '../Dashboard/Dashboard';
// import Footer from '../Footer/Footer';

// const Overview = () => {
//     const user = JSON.parse(localStorage.getItem("loginusers"));
//     const userName = user ? user.name : "User";

//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [userProfile, setUserProfile] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4500/overview');
//                 setData(response.data[0]); 
//             } catch (err) {
//                 setError('Error fetching data');
//             }
//         };

//         fetchData();
//     }, []);

//     const showProfileDetail = async () => {
//         const userId = JSON.parse(localStorage.getItem("loginusers"))._id;
//         try {
//             const response = await axios.get(`http://localhost:4500/overviewProfile?userId=${userId}`);
//             setUserProfile(response.data);
//         } catch (err) {
//             console.error('Error fetching profile:', err);
//         }
//     };

//     useEffect(() => {
//         showProfileDetail();
//     }, []);

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!data || userProfile.length === 0) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <Navbar />
//             <Dashboard />
//             <div className={styles.header_overview}>
//             <h1 className={styles.heading_overview}>
//                     <span className={styles.welcome}>Welcome</span> to<span className={styles.name_part}>{userName}'s</span> Dashboard
//                 </h1>
//                 {userProfile.length > 0 && (
//                     <img
//                         className={styles.profile_image}
//                         src={userProfile[0].image}
//                         alt="profile-img"
//                     />
//                 )}
//             </div>
//             <div className={styles.overviewWrapper}>
//                 <div className={styles.overview_container}>
//                     <div className={styles.card}>
//                         <h2 className={styles.cardTitle}>Total No. of Services Offered</h2>
//                         <p className={styles.cardValue}>
//                             <CountUp end={data.totalServices} duration={2.5} />
//                         </p>
//                     </div>
//                     <div className={styles.card}>
//                         <h2 className={styles.cardTitle}>Total Services Requested</h2>
//                         <p className={styles.cardValue}>
//                             <CountUp end={data.totalServicesRequested} duration={2.5} />
//                         </p>
//                     </div>
//                     <div className={styles.card}>
//                         <h2 className={styles.cardTitle}>Total Services Confirmed</h2>
//                         <p className={styles.cardValue}>
//                             <CountUp end={data.totalServicesConfirmed} duration={2.5} />
//                         </p>
//                     </div>
//                     <div className={styles.card}>
//                         <h2 className={styles.cardTitle}>Total Services Completed</h2>
//                         <p className={styles.cardValue}>
//                             <CountUp end={data.totalServicesCompleted} duration={2.5} />
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Overview;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import styles from './Overview.module.css';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';

const Overview = () => {
    const user = JSON.parse(localStorage.getItem("loginusers"));
    const userName = user ? user.name : "User";

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [userProfile, setUserProfile] = useState(null); // Initialize with null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4500/overview');
                setData(response.data[0]); 
            } catch (err) {
                setError('Error fetching data');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
    
        const showProfileDetail = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("loginusers"));
                if (!user || !user._id) {
                    console.error('User ID not found in localStorage');
                    return;
                }
    
                const userId = user._id;
                console.log('Fetching profile for user ID:', userId);
    
                let result = await fetch(`http://localhost:4500/overviewProfile?userId=${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
    
                if (!result.ok) {
                    console.error('Error fetching profile:', result.statusText);
                    return;
                }
    
                result = await result.json();
    
                if (Array.isArray(result) && result.length > 0) {
                    console.log('Profile image URL:', result[0].image); // Accessing the image property of the first object
                    setUserProfile(result[0].image); // Setting the user profile image
                } else {
                    console.log('No data found');
                }
            } catch (err) {
                console.error('Error fetching profile:', err);
            }
        };
    
        showProfileDetail();
    }, []); // Empty dependency array ensures this runs only once when the component mounts
    

    if (error) {
        return <div>{error}</div>;
    }

    if (!data || userProfile === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <Dashboard />
            <div className={styles.header_overview}>
                <h1 className={styles.heading_overview}>
                    <span className={styles.welcome}>Welcome</span> to<span className={styles.name_part}>{userName}'s</span> Dashboard
                </h1>
                {userProfile && userProfile.length > 0 && (
                    <img
                        className={styles.profile_image}
                        src={userProfile}
                        alt="profile-img"
                    />
                )}
            </div>
            <div className={styles.overviewWrapper}>
                <div className={styles.overview_container}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Total No. of Services Offered</h2>
                        <p className={styles.cardValue}>
                            <CountUp end={data.totalServices} duration={2.5} />
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Total Services Requested</h2>
                        <p className={styles.cardValue}>
                            <CountUp end={data.totalServicesRequested} duration={2.5} />
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Total Services Confirmed</h2>
                        <p className={styles.cardValue}>
                            <CountUp end={data.totalServicesConfirmed} duration={2.5} />
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Total Services Completed</h2>
                        <p className={styles.cardValue}>
                            <CountUp end={data.totalServicesCompleted} duration={2.5} />
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Overview;