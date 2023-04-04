import React, {useEffect, useState} from 'react';
import AddNewPackageCard from "./AddNewPackageCard";
import TrackingCard from "./TrackingCard";
import './style/tracking-card-list.css'
import ApiService from "../../Services/ApiService";

const apiService = new ApiService();

function TrackingCardsList({selectedFilter, setCountCardsFilter}) {
    //States
    const [gridMaxHeight, setGridMaxHeight] = useState('auto');
    const [cards, setCards] = useState([]);
    const [cardsUpdated, setCardsUpdated] = useState(false);

    // Comportements

    useEffect(() => {
        async function fetchData() {
            const data = await apiService.getTrackingByUser();

            // Sort the data array by createdAt in descending order
            data.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

            setCards(data);
            console.log(data);

            const numCards = data.reduce((num, card) => {
                num[card.status]++;
                num.all++;
                return num;
            }, {all: 0, prepared: 0, ready: 0, DELIVERED: 0, transit: 0});

            const numCardsStr = Object.keys(numCards).reduce((obj, key) => {
                obj[key] = numCards[key].toString();
                return obj;
            }, {});

            setCountCardsFilter(numCardsStr);

            const numRows = Math.ceil(numCards[selectedFilter] / 2);
            const gridHeight = `${numRows * 300}px`;
            setGridMaxHeight(gridHeight);
        }

        fetchData();
        setCardsUpdated(false);
    }, [selectedFilter, setCountCardsFilter, cardsUpdated]);

    //Filtre les cartes en fonction du filtre sélectionné
    const filteredCards = selectedFilter === 'all' ? cards : cards.filter(card => card.status === selectedFilter);


    //Rendu
    return (
        <div style={{
            maxHeight: gridMaxHeight,
            overflowY: "scroll",
            minHeight: "90vh"
        }}>
            <div className="card-container">
                <AddNewPackageCard cards={cards} setCards={setCards}
                                   setCardsUpdated={setCardsUpdated}/>
                {filteredCards && filteredCards.map((card) => (
                    <TrackingCard key={card._id} card={card} cards={cards}
                                  setCards={setCards}
                                  setCardsUpdated={setCardsUpdated}/>
                ))}
            </div>
        </div>
    );
}

export default TrackingCardsList;