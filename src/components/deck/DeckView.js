import React from 'react'
import Card from '../card/Card'
import './DeckView.css'


const DeckView = ({ deck, onClick }) => {

    const renderDeckHuman = (deck) => deck.map(pokemon =>
        <button
            className='deck-card'
            key={pokemon.id}
            onClick={onClick(pokemon)}
            
        >
            <Card pokemon={pokemon}></Card>
            
        </button>)

    const renderDeckComputer = (deck) => deck.map(pokemon =>
        <div
            className='deck-card'
            key={pokemon.id}
        >
            
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