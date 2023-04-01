import React from 'react';
import './style/map.css'

function TrackingMap() {
    //States


    // Comportements


    //Rendu
    return (
        <iframe allowFullScreen=""
                title={"Map"}
                height="450" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90493.60555287196!2d-0.6560519189454946!3d44.86381807021491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1679306407140!5m2!1sfr!2sfr"
                style={{border: 0}}
                width="600"></iframe>
    );
}

export default TrackingMap;
