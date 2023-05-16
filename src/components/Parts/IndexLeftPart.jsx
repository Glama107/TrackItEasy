import React, {useState} from 'react';
import HeaderLeft from "../Headers/HeaderLeft";
import '../style/left-part.css'
import TrackingCardsList from "../Grids/TrackingCardsList";

function IndexLeftPart({setActiveCard}) {
    //States
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [countCardsFilter, setCountCardsFilter] = useState({
        all: '0',
        NO_DATA: '0',
        FILED: '0',
        DELIVERED: '0',
        IN_TRANSIT: '0'
    });

    // Comportements


    //Rendu
    return (
        <div className="left-part">
            <HeaderLeft
                setSelectedFilter={setSelectedFilter}
                selectedFilter={selectedFilter}
                countCardsFilter={countCardsFilter}
            />

            <TrackingCardsList
                selectedFilter={selectedFilter}
                setCountCardsFilter={setCountCardsFilter}
                setActiveCard={setActiveCard}
            />
        </div>
    );
}

export default IndexLeftPart;