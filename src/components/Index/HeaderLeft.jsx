import React from 'react';
import './style/header.css'

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
                        className={`filter-btn ${selectedFilter === 'prepared' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('prepared')}>Prepared
                        ({countCardsFilter.prepared})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'ready' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('ready')}>Ready for
                        shipping ({countCardsFilter.ready})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'delivered' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('delivered')}>Delivered
                        ({countCardsFilter.delivered})
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'transit' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('transit')}>In
                        transit ({countCardsFilter.transit})
                    </button>
                </div>
            </header>
        </div>
    );
}

export default HeaderLeft;