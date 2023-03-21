import React from 'react';
import './style/card.css'

function TrackingCard(props) {
    //States


    // Comportements
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    //Rendu
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col">
                        <p className="title">Number</p>
                        <p className="content">{props.cardInfo.tracking_number}</p>
                    </div>
                    <div className="col">
                        <p className="title">Status</p>
                        <p className={"content status " + props.cardInfo.status_ship}>• {Capitalize(props.cardInfo.status_ship)}</p>
                    </div>
                    <div className="col">
                        <div className="row-edit">
                            <div className="edit">
                                <i className="fas fa-pen"></i>
                            </div>
                            <div className="edit delete">
                                <i className="fas fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <p className="title">Departure</p>
                        <p className="content">11/08/2023</p>
                    </div>
                    <div className="col">
                        <p className="title"></p>
                        <p className="content">- - - - - - - - - -</p>
                    </div>
                    <div className="col">
                        <p className="title">Arrival</p>
                        <p className="content">13/08/2023</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <p className="title">Customer</p>
                        <p className="content">John Doe</p>
                    </div>
                    <div className="col">
                        <p className="title">Weight</p>
                        <p className="content">1.3kg</p>
                    </div>
                    <div className="col">
                        <p className="title">Price</p>
                        <p className="content">150€</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <p className="title">Company</p>
                        <p className="content"><img
                            alt=""
                            src="https://ereputation-dereferencement.fr/wp-content/uploads/2021/01/Amazon-logo.png"/>
                        </p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <p className="title">Parcel</p>
                        <p className="content">
                            <img
                                alt=""
                                src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/0d/La_Poste_logo.svg/1200px-La_Poste_logo.svg.png"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackingCard;
