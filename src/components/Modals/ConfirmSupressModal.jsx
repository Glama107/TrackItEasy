import '../style/confirmation-modal.css'
import Modal from "react-modal";
import ApiService from "../../Services/ApiService";

const apiService = new ApiService();

function ConfirmSupressModal({
                                 modalIsOpen,
                                 setModalIsOpen,
                                 card,
                                 setCardsUpdated
                             }) {
    //States

    // Comportements
    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const handleSupress = () => {
        const data = apiService.deleteTracking(card._id);
        setCardsUpdated(true);
        handleCloseModal();
    }


    //Rendu
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}
               contentLabel="Popup" className={"confirmation-modal" +
            " animate__animated animate__fadeInUp"}>
            <h2>Suppression d'un élément</h2>
            <p>Êtes-vous sur de vraiment vouloir
                supprimer {card.tracking_number} ?</p>
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
