import React from 'react'
import Card from '../card/Card'
import './DeckView.css'


const DeckView = ({ deck, onClick, death = [] }) => {

    const renderHuman = (deck) => deck
        .map(pokemon => (
            <button
                className='deck-card'
                key={pokemon.id}
                onClick={onClick(pokemon)}
            >
                <Card pokemon={pokemon} />
            </button>
        )
        )

    const renderComputer = (deck) => deck
        .map(pokemon => (
            <div
                className='deck-card'
                key={pokemon.id}
            // onClick={onClick(pokemon)}
            >
                <Card pokemon={pokemon} />
            </div>
        )
        )

    const renderDeath = (death) => death
        .map(pokemon => (
            <div
                className='deck-card'
                key={pokemon.id}
            >
                <div className='death'>
                    <Card pokemon={pokemon} />
                </div>


            </div>
        )
        )

    const renderEmpty = (deck, death) => {
        const deckLengt = deck.length
        const deathLengt = death.length
        const number = deckLengt + deathLengt

        if (number < 6) {
            const left = 6 - number
            // console.log("left", left)

            return [...Array(left)].map((pokemon, i) => 
            <div
            className='deck-card'
                key={i}
                style={{ display: "flex", minHeight: 50, minWidth: 50, background: "red" }}

            >
                <div className='empty'>
                </div>
            </div>)

        }
    }

    const renderDeck = () => onClick === undefined
        ? (
            <div className='cards'>
                {renderComputer(deck)}
            </div>
        )
        : (
            <div className='cards'>
                {renderHuman(deck)}
            </div>
        )

    return (
        <div className='deck'>
            {renderDeck()}

            {renderDeath(death)}
            {renderEmpty(deck, death)}
        </div>
    )
}

export default DeckView