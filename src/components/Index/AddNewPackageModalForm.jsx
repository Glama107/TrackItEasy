import {useState} from "react";
import Modal from "react-modal";

const AddNewPackageModalForm = ({
                                    modalIsOpen,
                                    handleCloseModal,
                                    cards,
                                    setCards
                                }) => {
    const [nouveauTracking, setNouveauTracking] = useState("");

    const handleChange = (event) => {
        setNouveauTracking(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // empêche le rechargement de la page
        const cardsCopy = [...cards]; // copie du tableau
        const id = cardsCopy[cardsCopy.length - 1].id + 1; // id du nouveau tracking
        const tracking_number = event.target.trackingNumber.value; // numéro
        const status_ship = "prepared";
        // de suivi du nouveau tracking
        const cardToAdd = {id, tracking_number, status_ship}; // objet à ajouter
        cardsCopy.push(cardToAdd); // ajout de l'objet au tableau

        setCards(cardsCopy); // mise à jour du tableau
        setNouveauTracking(""); // réinitialisation du champ de saisie

        handleCloseModal(); // fermeture de la modale
    };

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}
               contentLabel="Popup">
            <h2>Add new package</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <div className={"form-group"}>
                    <label htmlFor="trackingNumber">
                        Numéro de suivi :<span className={"required"}> *</span>
                    </label>
                    <input value={nouveauTracking} type="text"
                           id="trackingNumber" name="trackingNumber"
                           onChange={handleChange}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="alias">Alias :</label>
                    <input type="text" id="alias" name="alias"/>
                </div>
                <div className={"form-group file"}>
                    <label htmlFor="fileInput" className={"input-file"}>
                        Preuve de dépot +<input type="file" id="fileInput"
                                                name="fileInput" hidden/>
                    </label>
                </div>
                <div className="button-container">
                    <button type={"button"} className={"send close"}
                            onClick={handleCloseModal}>
                        Close
                    </button>
                    <button type={"submit"} className={"send"}>
                        Add
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddNewPackageModalForm;