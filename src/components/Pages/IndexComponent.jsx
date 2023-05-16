import IndexLeftPart from "./IndexLeftPart";
import IndexRightPart from "./IndexRightPart";
import {useState} from "react";

function IndexComponent() {
    //States
    const [activeCard, setActiveCard] = useState(null);

    // Comportements


    //Rendu
    return (
        <main>
            <IndexLeftPart setActiveCard={setActiveCard}/>
            <IndexRightPart activeCard={activeCard}/>
        </main>
    );
}

export default IndexComponent;
