import React, { useState } from 'react'
import AllPokemonView from './AllPokemonView'
import { usePokemonContext } from '../../contexts/PokemonContext'

import { useDeckContext } from '../../contexts/DeckContext'

const AllPokemonController = () => {
    const pokemonContext = usePokemonContext()
    const deckContext = useDeckContext()

    const [filteredPokemon, setFilteredPokemon] = useState(pokemonContext.allPokemon)

    const handleSearch = searchTerm => {
        const filteredPokemon = pokemonContext.allPokemon.filter(x => x.name.english.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredPokemon(filteredPokemon)
    }

    const rem = pokemon => e => {
        deckContext.setHumanDeck(prev => {
            const result = [...prev]
            const index = result.findIndex(x => x.id === pokemon.id)
            result.splice(index, 1)
            return result
        })

    }


    return <AllPokemonView
        filteredPokemon={filteredPokemon}
        setFilteredPokemon={setFilteredPokemon}
        handleSearch={handleSearch}
        humanDeck={deckContext.humanDeck}
        rem={rem}
    />
}

export default AllPokemonController