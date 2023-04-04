import React, {useState} from 'react';
import HeaderLeft from "./HeaderLeft";
import './style/left-part.css'
import TrackingCardsList from "./TrackingCardsList";

function IndexLeftPart() {
    //States
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [countCardsFilter, setCountCardsFilter] = useState({
        all: '0',
        prepared: '0',
        ready: '0',
        DELIVERED: '0',
        intransit: '0'
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
            />
        </div>
    );
}

export default IndexLeftPart;