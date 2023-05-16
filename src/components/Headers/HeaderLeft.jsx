import React from 'react';
import '../style/header.css'

function HeaderLeft({setSelectedFilter, selectedFilter, countCardsFilter}) {
    //States

    // Comportements
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    }

    //Rendu
    return (
        <div>
            <header>
                <div className="filters">
                    <button
                        className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('all')}>All
                        ({countCardsFilter.all})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'NO DATA' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('NO DATA')}>No data
                        ({countCardsFilter.NO_DATA})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'FILED' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('FILED')}>Filed
                        ({countCardsFilter.FILED})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'DELIVERED' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('DELIVERED')}>Delivered
                        ({countCardsFilter.DELIVERED})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'IN' +
                        ' TRANSIT' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('IN TRANSIT')}>In
                        transit ({countCardsFilter.IN_TRANSIT})
                    </button>
                </div>
            </header>
        </div>
    );
}

export default HeaderLeft;