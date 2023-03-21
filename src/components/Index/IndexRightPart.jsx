import React from 'react';
import HeaderRight from "./HeaderRight";
import TrackingMap from "./TrackingMap";
import './style/rightpart.css'

function IndexRightPart() {
    //States


    // Comportements


    //Rendu
    return (
        <div className="right-part">
            <HeaderRight/>
            <TrackingMap/>
        </div>
    );
}

export default IndexRightPart;
