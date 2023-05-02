import React, {useEffect, useState} from 'react';
import './style/tracking-card.css'
import ConfirmSupressModal from "./ConfirmSupressModal";
import 'animate.css/animate.min.css';
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import FormService from "../../Services/FormService";
import Modal from "react-modal";

const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function TrackingCard({card, setCardsUpdated, setActiveCard}) {
    //States
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [receiptModalOpen, setReceiptModalOpen] = useState(false);
    const [isReceipt, setIsReceipt] = useState(false);
    const [receiptText, setReceiptText] = useState("Not sent");
    const formService = new FormService();

    // Comportements

    useEffect(() => {
        if (card.receipt) {
            setIsReceipt(true);
            setReceiptText("Sent")
        } else {
            setIsReceipt(false);
            setReceiptText("Not sent")
        }
    });


    const openReceiptModal = () => {
        if (card.receipt) {
            setReceiptModalOpen(true);
        }
    };

    const closeReceiptModal = () => {
        setReceiptModalOpen(false);
    };

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleClick = (card) => {
        console.log(card);
        setActiveCard(card);
    };

    const handleUpload = (e) => {
        if (e.target.files) {
            formService.addReceipt(card._id, e.target.files[0]);
        }
    }

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
        <div className={`tracking-card animate__animated animate__fadeInUp`}
             onClick={() => handleClick(card)}>
            <div className="row">
                <div className="col">
                    <p className="title">Number</p>
                    <p className="content">{card.trackingNumber}</p>
                </div>
                <div className="col">
                    <p className="title">Status</p>
                    <p className={"content status " + card.status.toLowerCase()}>• {Capitalize(card.status)}
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
                    <p className={"content "}>{card.depositDate ? dayjs(card.depositDate).format('DD/MM/YYYY') : "N/A"}</p>
                </div>
                <div className="col">
                    <p className="title"></p>
                    <p className="content">- - - - - - - - - -</p>
                </div>
                <div className="col">
                    <p className="title">Arrival</p>
                    <p className="content">{card.deliveryDate ? dayjs(card.deliveryDate).format('DD/MM/YYYY') : "N/A"}</p>
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
                    <Button variant="text" component="label"
                            style={{
                                fontSize: "11px",
                                color: "#1045F6"
                            }}
                            onClick={openReceiptModal}
                    >
                        {receiptText}
                        {isReceipt
                            ? ""
                            : <input onChange={handleUpload} hidden
                                     accept="image/*" multiple
                                     type="file"/>
                        }
                    </Button>
                </div>
                <Modal isOpen={receiptModalOpen}
                       onRequestClose={closeReceiptModal}
                       style={{width: '400px'}}
                       style={customStyles}
                       overlayStyle={customStyles.overlay}>
                    <img
                        src={"http://localhost:4000/api/trackings/receipt/" + card.receipt}
                        alt="Une image"/>
                    <button onClick={closeReceiptModal}>Fermer</button>
                </Modal>
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
