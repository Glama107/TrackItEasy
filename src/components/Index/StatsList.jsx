import React from 'react';
import './style/stats-card-list.css'
import StatsCard from "./StatsCard";

function TrackingCardsList() {
    //States


    // Comportements


    //Filtre les cartes en fonction du filtre sélectionné


    //Rendu
    return (
        <div>
            <div className="stats-container">
                <StatsCard/>
                <StatsCard/>
                <StatsCard/>
                <StatsCard/>
            </div>
        </div>
    );
}

export default TrackingCardsList;