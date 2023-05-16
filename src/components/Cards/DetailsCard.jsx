import React from 'react';
import '../style/details-card.css'
import 'animate.css/animate.min.css';
import TrackingMap from "../TrackingMap";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import {createTheme, ThemeProvider} from "@mui/material";
import dayjs from "dayjs";

function DetailsCard({activeCard}) {
    //States
    let timelineTheme = createTheme({
        typography: {
            fontFamily: 'TT Firs Neue Trl', // Remplacez par votre police de caractères
            fontSize: 11,
        },
        palette: {
            primary: {
                main: '#1045F6', // Remplacez par votre couleur primaire
            },
            secondary: {
                main: 'rgba(211, 211, 211, 0.5)', // Remplacez par votre couleur secondaire
            },
        },
    });

    // Comportements


    //Rendu
    return (
        <div className={`details-card animate__animated animate__fadeInUp`}>
            <div className="title">
                <h2>Tracking Details
                    for <br/> "{activeCard ? activeCard.alias : "XXXXXXXXXX"}"
                </h2>
            </div>
            <TrackingMap/>
            <ThemeProvider theme={timelineTheme}>
                <div className="details-container">
                    <Timeline
                        className={"details-timeline"}>
                        {activeCard ? activeCard.trackingData.data.track_info.tracking.providers[0].events.map((event, index) => {
                            return (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent
                                        color="text.secondary">
                                        <b>
                                            {(() => {
                                                switch (event.stage) {
                                                    case 'Delivered':
                                                        return <p>Livré</p>;
                                                    case 'InTransit':
                                                        return <p>En
                                                            transit</p>;
                                                    case 'AvailableForPickup':
                                                        return <p>Prêt à être
                                                            livré</p>;
                                                    case 'InfoReceived':
                                                        return <p>Label créé</p>
                                                    case 'OutForDelivery':
                                                        return <p>En cours de
                                                            livraison</p>
                                                }
                                            })()}
                                        </b>
                                        <small><i>{dayjs(event.time_utc).format('DD / MM / YYYY - HH:mm')}</i></small>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color={"primary"}/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>{event.description}</TimelineContent>
                                </TimelineItem>
                            )
                        }) : null}
                        <TimelineItem>
                            <TimelineOppositeContent
                                color="text.secondary">
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>

                    </Timeline>

                </div>
            </ThemeProvider>
        </div>

    );
}

export default DetailsCard;
