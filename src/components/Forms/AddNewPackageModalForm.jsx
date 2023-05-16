import {useState} from "react";
import Modal from "react-modal";
import 'animate.css/animate.min.css'

import "../style/add-new-package-modal.css";
import {
    Autocomplete,
    Button,
    CircularProgress,
    TextField,
    ThemeProvider
} from "@mui/material";
import theme from "../../themeMUI";
import FormService from "../../Services/FormService";

const options = [
    {value: "amazon", label: "Amazon"},
    {value: "zalando", label: "Zalando"},
    {value: "nike", label: "Nike"},
];


const AddNewPackageModalForm = ({
                                    modalIsOpen,
                                    setModalIsOpen,
                                    setCardsUpdated
                                }) => {
    const [newTracking, setNewTracking] = useState("");
    const [newTrackingTitle, setNewTrackingTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const formService = new FormService();

    const handleCloseModal = () => setModalIsOpen(false);

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        await formService.createTracking(event, setCardsUpdated);
        setNewTracking("");
        setNewTrackingTitle("");
        handleCloseModal();
        setIsLoading(false);
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Popup"
            className="modal-add-package animate__animated animate__fadeInUp"
        >
            <h2>Add new package</h2>
            <form onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                    <div className="form-group">
                        <TextField
                            id="trackingNumber"
                            label="Numéro de suivi"
                            variant="outlined"
                            value={newTracking}
                            onChange={(e) => setNewTracking(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <Autocomplete
                            disablePortal
                            id="shop"
                            options={options}
                            renderInput={(params) => <TextField {...params}
                                                                label="Boutique"/>}
                        />
                    </div>
                    <div className="form-group">
                        <TextField id="titleTracking" label="Alias"
                                   variant="outlined" value={newTrackingTitle}
                                   onChange={(e) => setNewTrackingTitle(e.target.value)}/>
                    </div>
                    <div className={"form-group"}>
                        <TextField
                            id="articles"
                            label="Articles"
                            multiline
                            maxRows={4}
                        />
                    </div>


                    <div className="button-container">

                        <Button onClick={handleCloseModal} type="button"
                                variant="outlined"
                        >Close</Button>
                        <Button type={"submit"} className={"send"}
                                variant="contained">{isLoading ?
                            <CircularProgress
                                color="inherit"/> : 'Ajouter'}</Button>

                    </div>
                </ThemeProvider>
            </form>
        </Modal>
    );
};

export default AddNewPackageModalForm;