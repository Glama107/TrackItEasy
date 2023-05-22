import '../style/profile.css';
import ApiService from "../../Services/ApiService";
import {useEffect, useState} from "react";

const apiService = new ApiService();


function ProfileComponent() {
    //States
    const [userDetails, setUserDetails] = useState({});

    // Comportements

    useEffect(() => {
        async function fetchData() {
            const data = await apiService.getUserDetails();
            setUserDetails(data);
            console.log(data);
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
                    className="div2 child-grid animate__animated animate__fadeInUp"></div>
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
