import '../style/profile.css';
import ApiService from "../../Services/ApiService";
import React, {useEffect, useState} from "react";

const apiService = new ApiService();


function ProfileComponent() {
    //States
    const [userDetails, setUserDetails] = useState({});
    const [trackings, setTrackings] = useState([]);

    // Comportements

    useEffect(() => {
        async function fetchData() {
            const userDetails = await apiService.getUserDetails();
            const userTrackings = await apiService.getTrackingByUser();
            setUserDetails(userDetails);
            setTrackings(userTrackings);
            console.log(trackings);
        }

        fetchData();
    }, []);

    //Rendu
    return (
        <main className={"profile-page"}>
            <div className="parent">
                <div
                    className="div1 child-grid animate__animated animate__fadeInUp">
                    <div className="flex-row">
                        <img src="https://placehold.co/600x400/png" alt=""/>
                        <div className="column">
                            <p>Adresse mail
                                : <b>{userDetails.email ? userDetails.email : 'N/A'}</b>
                            </p>
                            <p>Pseudo
                                : <b>{userDetails.username ? userDetails.username : 'N/A'}</b>
                            </p>
                            <p>Date de naissance
                                : <b>{userDetails.birthDate ? userDetails.birthDate : 'N/A'}</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="div2 child-grid animate__animated animate__fadeInUp">
                    <h3>Mes derniers trackings</h3>
                    <div className="column">
                        {trackings && trackings.map((tracking) => (
                            <div
                                className="tracking-row"
                                key={tracking._id}>
                                <p>{tracking.trackingNumber}</p>
                                <p>{tracking.alias}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="div3 child-grid animate__animated animate__fadeInUp"></div>
                <div
                    className="div4 child-grid animate__animated animate__fadeInUp"></div>
                <div
                    className="div5 child-grid animate__animated animate__fadeInUp"></div>
            </div>
        </main>
    );
}

export default ProfileComponent;
