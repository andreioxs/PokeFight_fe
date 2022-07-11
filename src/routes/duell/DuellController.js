import React from 'react'
import DuellView from './DuellView'

import { useDeckContext } from '../../contexts/DeckContext'

const DuellController = () => {
    const deckContext = useDeckContext()

    const choosePokemon = pokemon => e => console.log("choosePokemon", pokemon)


    return <DuellView
        humanDeck={deckContext.humanDeck}
        choosePokemon={choosePokemon}
        computerDeck={deckContext.computerDeck}
    />
}

export default DuellController