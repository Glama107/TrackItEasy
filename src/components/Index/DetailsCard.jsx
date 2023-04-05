import React from 'react';
import './style/details-card.css'
import 'animate.css/animate.min.css';
import TrackingMap from "./TrackingMap";
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

function DetailsCard() {
    //States
    let timelineTheme = createTheme({
        typography: {
            fontFamily: 'TT Firs Neue Trl', // Remplacez par votre police de caractères
            fontSize: 12,
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
                <h2>Tracking Details</h2>
            </div>
            <TrackingMap/>
            <ThemeProvider theme={timelineTheme}>
                <div className="details-container">
                    <Timeline position="alternate"
                              className={"details-timeline"}>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                09:30 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Eat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Code</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                12:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Sleep</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                9:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Repeat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                9:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Repeat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                9:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Repeat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                9:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>Repeat</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <div className="informations-container">
                        <div className="informations">
                            <div className="information">
                                <div className="information-title">
                                    <h3>Tracking ID</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>

    );
}

export default DetailsCard;