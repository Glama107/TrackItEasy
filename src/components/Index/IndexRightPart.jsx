import React from 'react';
import HeaderRight from "./HeaderRight";
import './style/right-part.css'
import DetailsCard from "./DetailsCard";

function IndexRightPart({activeCard}) {
    //States


    // Comportements


    //Rendu
    return (
        <div className="right-part">
            <HeaderRight/>
            {activeCard ? <DetailsCard activeCard={activeCard}/> :
                <div className="no-card">Aucune carte sélectionnée</div>}
        </div>
    );
}

export default IndexRightPart;
