import React from 'react';
import './style/stats-card.css'
import 'animate.css/animate.min.css';

function TrackingCard() {
    //States


    // Comportements

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%', // Modifier la largeur de la modal ici
            height: 'auto', // Réglez la hauteur sur auto pour qu'elle s'ajuste automatiquement à la taille de l'image
            padding: '20px'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    };


    //Rendu
    return (
        <div className={`stat-card animate__animated animate__fadeInUp`}>

        </div>

    );
}

export default TrackingCard;
