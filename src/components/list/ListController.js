import React from 'react'
import ListView from './ListView'
import { DeckContext, useDeckContext } from '../../contexts/DeckContext'

const ListController = ({ filteredPokemon }) => {
    const DeckContext = useDeckContext()

    const handleAddHumanDeck = pokemon => e => {
        const humanDeck = DeckContext.humanDeck

        if (humanDeck.length >= 6) return console.log("max 6")

        DeckContext.setHumanDeck(prev => [...prev, { ...pokemon, id: pokemon.name.english + "_" + Date.now() }])
    }

    return <ListView
        filteredPokemon={filteredPokemon}
        handleAddHumanDeck={handleAddHumanDeck}
    />
}

export default ListController