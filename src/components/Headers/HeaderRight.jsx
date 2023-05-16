import React from 'react';
import '../style/header.css'

function HeaderRight() {
    //States


    // Comportements


    //Rendu
    return (
        <header>
            <div className="filters">
                <button className="filter-btn active">All (146)</button>
                <button className="filter-btn">Prepared (146)</button>
            </div>
        </header>
    );
}

export default HeaderRight;
