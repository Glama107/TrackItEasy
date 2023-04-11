import React, {useState} from 'react';
import './style/tracking-card.css'
import ConfirmSupressModal from "./ConfirmSupressModal";
import 'animate.css/animate.min.css';

function TrackingCard({card, setCardsUpdated, setActiveCard}) {
    //States
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Comportements
    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleClick = (card) => {
        console.log(card);
        setActiveCard(card);
    };


    //Rendu
    return (
        <div className={`tracking-card animate__animated animate__fadeInUp`}
             onClick={() => handleClick(card)}>
            <div className="row">
                <div className="col">
                    <p className="title">Number</p>
                    <p className="content">{card.trackingNumber}</p>
                </div>
                <div className="col">
                    <p className="title">Status</p>
                    <p className={"content status " + card.status}>• {card.status}
                    </p>
                </div>
                <div className="col">
                    <div className="row-edit">
                        <div className="edit">
                            <i className="fas fa-pen"></i>
                        </div>
                        <button className="edit delete"
                                onClick={handleOpenModal}>
                            <i className="fas fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmSupressModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                card={card}
                setCardsUpdated={setCardsUpdated}
            />


            <hr/>
            <div className="row">
                <div className="col">
                    <p className="title">Departure</p>
                    <p className="content">{card.depositDate ? card.depositDate : "N/A"}</p>
                </div>
                <div className="col">
                    <p className="title"></p>
                    <p className="content">- - - - - - - - - -</p>
                </div>
                <div className="col">
                    <p className="title">Arrival</p>
                    <p className="content">{card.deliveryDate ? card.deliveryDate : "N/A"}</p>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col">
                    <p className="title">Title</p>
                    <p className="content">{card.alias ? card.alias : card.trackingNumber}</p>
                </div>
                <div className="col">
                    <p className="title">Receipt</p>
                    <p className="content">{card.receipt ? "Sent" : "Not" +
                        " sent"}</p>
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
                    <p className="content">
                        {card.shop ? (
                            <img src={`shop-images/${card.shop}.png`}
                                 alt="Image du shop"/>
                        ) : (
                            <span>N/A</span>
                        )}
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

    );
}

export default TrackingCard;
