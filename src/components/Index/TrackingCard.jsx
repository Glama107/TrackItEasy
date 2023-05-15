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
                            <svg version="1.1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 width="17.4175" height="13.2806">
                                <g>
                                    <rect height="13.2806" opacity="0"
                                          width="17.4175" x="0" y="0"/>
                                    <path
                                        d="M4.9155 13.2806L12.4969 13.2806C13.8694 13.2806 14.4458 12.5393 14.6446 11.1979L15.7073 4.148L1.70742 4.148L2.77295 11.1979C2.97627 12.5557 3.55034 13.2806 4.9155 13.2806ZM1.15657 3.29949L16.2632 3.29949C17.0159 3.29949 17.4175 2.83601 17.4175 2.08835L17.4175 1.23259C17.4175 0.482666 17.0159 0.0191894 16.2632 0.0191894L1.15657 0.0191894C0.431909 0.0191894 0 0.482666 0 1.23259L0 2.08835C0 2.83601 0.401587 3.29949 1.15657 3.29949ZM6.48274 11.1655C6.2354 11.1655 6.02798 10.953 6.02798 10.7107C6.02798 10.5809 6.08811 10.4808 6.16794 10.401L8.07663 8.47991L6.16794 6.55606C6.08811 6.47395 6.02798 6.37163 6.02798 6.24404C6.02798 6.00176 6.23767 5.80444 6.48274 5.80444C6.60249 5.80444 6.69243 5.85952 6.7897 5.93936L8.7085 7.8531L10.6374 5.9343C10.7324 5.84942 10.8319 5.79434 10.9444 5.79434C11.199 5.79434 11.3991 5.99443 11.3991 6.24404C11.3991 6.36658 11.344 6.45601 11.2592 6.551L9.34314 8.47991L11.2541 10.3959C11.3339 10.4808 11.3941 10.5758 11.3941 10.7107C11.3941 10.9507 11.1866 11.1655 10.9444 11.1655C10.8168 11.1655 10.7145 11.1003 10.6273 11.0255L8.7085 9.10672L6.79248 11.0255C6.70759 11.1053 6.60249 11.1655 6.48274 11.1655Z"
                                        fill="#ffffff" fill-opacity="0.85"/>
                                </g>
                            </svg>


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
                    <p className="title">Days of transit</p>
                    <p className="content">{card.trackingData.data.track_info.time_metrics.days_of_transit} days</p>
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
                            src={`parcel-images/${card.trackingData ? card.trackingData.data.carrier : null}.png`}
                        />
                    </p>
                </div>
            </div>
        </div>

    );
}

export default TrackingCard;
