import './style/confirmation-modal.css'
import Modal from "react-modal";

function ConfirmSupressModal(props) {
    //States


    // Comportements
    const handleCloseModal = () => {
        props.setModalIsOpen(false);
    };

    const handleSupress = () => {
        const newCards = props.cards.filter(card => card.id !== props.card.id);
        props.setCards(newCards);
        handleCloseModal();
    }


    //Rendu
    return (
        <Modal isOpen={props.modalIsOpen} onRequestClose={handleCloseModal}
               contentLabel="Popup" className={"confirmation-modal" +
            " animate__animated animate__fadeInUp"}>
            <h2>Suppression d'un élément</h2>
            <p>Êtes-vous sur de vraiment vouloir
                supprimer {props.card.tracking_number} ?</p>
            <div className={"button-container-confirm"}>
                <button type={"button"} onClick={handleCloseModal}>Annuler
                </button>
                <button
                    type={"submit"}
                    className={"delete-btn"}
                    onClick={handleSupress}>
                    Supprimer
                </button>
            </div>
        </Modal>
    );
}

export default ConfirmSupressModal;
