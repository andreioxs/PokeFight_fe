import React from 'react'
import './DeckView.css'

const DeckView = ({ deck, onClick }) => {

    const renderDeckHuman = (deck) => deck.map(x =>
        <button
            className='deck-card'
            key={x.id}
            onClick={onClick(x)}
        >
            {x.name.english}
        </button>)

    const renderDeckComputer = (deck) => deck.map(x =>
        <div
            className='deck-card'
            key={x.id}
        >
            {x.name.english}
            KARTE VERDECKT
        </div>)

    if (onClick === undefined) {
        return (
            <div className='deck'>
                {renderDeckComputer(deck)}
            </div>
        )
    }

    return (
        <div className='deck'>
            {renderDeckHuman(deck)}
        </div>
    )
}

export default DeckView