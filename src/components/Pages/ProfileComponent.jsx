import '../style/profile.css';
import ApiService from "../../Services/ApiService";
import React, {useEffect, useState} from "react";
import {
    createTheme,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import dayjs from "dayjs";
import {ThemeProvider} from "@mui/material/styles";

const apiService = new ApiService();

const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function ProfileComponent() {
    //States
    const [userDetails, setUserDetails] = useState({});
    const [trackings, setTrackings] = useState([]);
    const [numberOfTrackings, setNumberOfTrackings] = useState(0);


    const tableTheme = createTheme({
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 12,
        },
    });

    // Comportements

    useEffect(() => {
        async function fetchData() {
            const userDetails = await apiService.getUserDetails();
            const [userTrackings, numberOfTrackings] = await apiService.getTrackingByUser();

            setNumberOfTrackings(numberOfTrackings);
            setUserDetails(userDetails);
            setTrackings(userTrackings);
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
                            <p>Nombre de colis
                                : <b>{numberOfTrackings ? numberOfTrackings : 'N/A'}</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="div2 child-grid animate__animated animate__fadeInUp">
                    <h3>Mes 5 derniers trackings</h3>

                    <ThemeProvider theme={tableTheme}>
                        <TableContainer>
                            <Table sx={{minWidth: 100}}
                                   aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="left">Alias</TableCell>
                                        <TableCell
                                            align="left">Numéro</TableCell>
                                        <TableCell
                                            align="left">Status</TableCell>
                                        <TableCell
                                            align="left">Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {trackings.slice(0, 5).map((tracking) => (
                                        <TableRow
                                            key={tracking._id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th"
                                                       scope="row" align="left"
                                                       className={"filed"}>
                                                {tracking.alias}
                                            </TableCell>
                                            <TableCell
                                                align="left">{tracking.trackingNumber}</TableCell>
                                            <TableCell
                                                align="left"
                                                className={tracking.status.toLowerCase()}>{Capitalize(tracking.status)}</TableCell>
                                            <TableCell
                                                align="left">{dayjs(tracking.creationDate).format('DD/MM/YYYY')}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </ThemeProvider>
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
