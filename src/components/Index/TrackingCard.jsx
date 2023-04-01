import React, {useState} from 'react';
import './style/tracking-card.css'
import ConfirmSupressModal from "./ConfirmSupressModal";
import 'animate.css/animate.min.css';

function TrackingCard(props) {
    //States
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Comportements
    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    //Rendu
    return (
        <div className={`tracking-card animate__animated animate__fadeInUp`}>
            <div className="row">
                <div className="col">
                    <p className="title">Number</p>
                    <p className="content">{props.card.tracking_number}</p>
                </div>
                <div className="col">
                    <p className="title">Status</p>
                    <p className={"content status " + props.card.status_ship}>• {Capitalize(props.card.status_ship)}</p>
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
                card={props.card}
                cards={props.cards}
                setCards={props.setCards}
            />


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
                    <p className="title">Title</p>
                    <p className="content">{props.card.title}</p>
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
                    <p className="content">
                        {props.card.shop ? (
                            <img src={`shop-images/${props.card.shop}.png`}
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
