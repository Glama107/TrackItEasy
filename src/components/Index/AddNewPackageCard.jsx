import React, {useState} from "react";
import "./style/card.css";
import "./style/addNewCard.css";
import AddNewPackageModalForm from "./AddNewPackageModalForm";

function AddNewPackageCard({cards, setCards}) {
//States
    const [modalIsOpen, setModalIsOpen] = useState(false);

// Comportements
    const handleOpenModal = () => {
        setModalIsOpen(true);
    };
    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

//Rendu
    return (
        <div>
            <div className="card add-package">
                <img alt="" src="./illustration-delivery.png"/>
                <h2>Add new package</h2>
                <p>Fill out the form and create new package</p>
                <button onClick={handleOpenModal}>+</button>
            </div>
            <AddNewPackageModalForm
                modalIsOpen={modalIsOpen}
                handleCloseModal={handleCloseModal}
                cards={cards}
                setCards={setCards}
            />
        </div>
    );
}

export default AddNewPackageCard;