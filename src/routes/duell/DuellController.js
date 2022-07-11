import React, { useState } from 'react'
import DuellView from './DuellView'
import AI from './ai/ComputerAI'

import { useDeckContext } from '../../contexts/DeckContext'

const DuellController = () => {
    const deckContext = useDeckContext()

    const [copyComputerDeck, setComputerDeck] = useState(deckContext.computerDeck)
    const [copyHumanDeck, setHumanDeck] = useState(deckContext.humanDeck)

    const [computerFightPokemon, setComputerFightPokemon] = useState(null)
    const [humanFightPokemon, setHumanFightPokemon] = useState(null)

    const choosePokemon = pokemon => e => {
        console.log("choosePokemon", pokemon)
        setHumanFightPokemon(pokemon)
    }

    const computerAI = () => {
        console.log("computerAI")
        


        setComputerFightPokemon()
    }


    return <DuellView
        humanDeck={copyHumanDeck}
        choosePokemon={choosePokemon}
        computerDeck={copyComputerDeck}
        computerFightPokemon={computerFightPokemon}
        humanFightPokemon={humanFightPokemon}
    />
}

export default DuellController