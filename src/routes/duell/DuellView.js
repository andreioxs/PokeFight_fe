import React from 'react'
import DeckController from '../../components/deck/DeckController'
import HeaderController from '../../components/header/HeaderController'

const DuellView = ({ humanDeck, choosePokemon, computerDeck }) => {
    return (
        <div>

            <div>
                <HeaderController />
            </div>

            <div>
                {/* <h4>Gegner Deck</h4> */}
                <DeckController
                    deck={computerDeck}
                />
            </div>

            <div>
                <h3>-------------------------------------------</h3>
                <h3>------------------FIGHT--------------------</h3>
                <h3>-------------------------------------------</h3>
            </div>

            <div>
                <DeckController
                    deck={humanDeck}
                    onClick={choosePokemon}
                />
                {/* <h4>My Deck</h4> */}
            </div>

        </div>
    )
}

export default DuellView