import React, {useState} from "react";
import "./style/tracking-card.css";
import "./style/add-new-package-card.css";
import AddNewPackageModalForm from "./AddNewPackageModalForm";
import 'animate.css/animate.min.css';
import {Button, ThemeProvider} from "@mui/material";
import theme from "../../themeMUI";

function AddNewPackageCard({cards, setCards, setCardsUpdated}) {
//States
    const [modalIsOpen, setModalIsOpen] = useState(false);

// Comportements
    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

//Rendu
    return (
        <div>
            <div
                className="tracking-card add-package animate__animated animate__fadeInUp">
                <img alt="" src="./illustration-delivery.png"/>
                <h2>Add new package</h2>
                <p>Fill out the form and create new package</p>
                <ThemeProvider theme={theme}>
                    <Button type={"submit"} onClick={handleOpenModal}
                            color={"primary"}
                            variant="contained">+</Button>
                </ThemeProvider>
            </div>
            <AddNewPackageModalForm
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                cards={cards}
                setCards={setCards}
                setCardsUpdated={setCardsUpdated}
            />
        </div>
    );
}

export default AddNewPackageCard;