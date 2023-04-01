import React, {useEffect, useState} from 'react';
import AddNewPackageCard from "./AddNewPackageCard";
import TrackingCard from "./TrackingCard";
import './style/tracking-card-list.css'

function TrackingCardsList({selectedFilter, setCountCardsFilter}) {
    //States
    const [gridMaxHeight, setGridMaxHeight] = useState('auto');
    const [cards, setCards] = useState(() => [
        {
            id: 1,
            tracking_number: 'FDIOFDHS',
            title: 'Nike Air Max 270',
            status_ship: 'prepared',
            shop: 'Amazon'
        },
        {
            id: 2,
            tracking_number: 'ZEA23132',
            title: 'Nike Air Max 270',
            status_ship: 'ready',
            shop: 'Zalando'
        },
        {
            id: 3,
            tracking_number: '432BHREZ',
            title: 'Nike Air Max 270',
            status_ship: 'delivered',
            shop: 'Nike'
        },
        {
            id: 4,
            tracking_number: 'ZEI0A9E32',
            title: 'Nike Air Max 270',
            status_ship: 'transit',
            shop: 'Zalando'
        },
    ], []);

    // Comportements

    useEffect(() => {
        // Tri des cartes par ordre décroissant d'id
        const sortedCards = [...cards].sort((a, b) => b.id - a.id);

        const numCards = sortedCards.reduce((num, card) => {
            num[card.status_ship]++;
            num.all++;
            return num;
        }, {all: 0, prepared: 0, ready: 0, delivered: 0, transit: 0});

        // Convertit les nombres en chaînes de caractères
        const numCardsStr = Object.keys(numCards).reduce((obj, key) => {
            obj[key] = numCards[key].toString();
            return obj;
        }, {});

        setCountCardsFilter(numCardsStr);

        // Calcule la hauteur de la grille en fonction du nombre d'éléments de carte
        const numRows = Math.ceil(numCards[selectedFilter] / 2);
        const gridHeight = `${numRows * 300}px`;
        setGridMaxHeight(gridHeight);
    }, [cards, selectedFilter]);


    //Filtre les cartes en fonction du filtre sélectionné
    const filteredCards = selectedFilter === 'all' ? cards : cards.filter(card => card.status_ship === selectedFilter);

    // Tri des cartes par ordre décroissant d'id
    const sortedCards = [...filteredCards].sort((a, b) => b.id - a.id);

    //Rendu
    return (
        <div
            style={{
                maxHeight: gridMaxHeight,
                overflowY: "scroll",
                minHeight: "90vh"
            }}>
            <div className="card-container">
                <AddNewPackageCard cards={cards} setCards={setCards}/>
                {sortedCards.map((card) => (
                    <TrackingCard key={card.id} card={card} cards={cards}
                                  setCards={setCards}/>
                ))}
            </div>
        </div>
    );
}

export default TrackingCardsList;