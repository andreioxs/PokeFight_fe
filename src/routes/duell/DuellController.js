import React, { useEffect, useState } from 'react'
import DuellView from './DuellView'
import AI from './ai/ComputerAI'

import { useDeckContext } from '../../contexts/DeckContext'
import ComputerAI from './ai/ComputerAI'

import { movePokemonFromStateToState } from '../../utils/pokemonUtils'
import { attack } from './fight/fight'

const DuellController = () => {
    const deckContext = useDeckContext()

    // deck
    const [computerDeck, setComputerDeck] = useState(deckContext.computerDeck)
    const [humanDeck, setHumanDeck] = useState(deckContext.humanDeck)

    // death pokemons
    const [computerDeathPokemons, setComputerDeathPokemons] = useState([])
    const [humanDeathPokemons, setHumanDeathPokemons] = useState([{
        "id": "6_1657746994076",
        "name": {
            "english": "Charizard",
            "japanese": "リザードン",
            "chinese": "喷火龙",
            "french": "Dracaufeu"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 84,
            "Defense": 78,
            "Sp. Attack": 109,
            "Sp. Defense": 85,
            "Speed": 100
        }
    }])

    // fighting pokemon
    const [computerFightingPokemon, setComputerFightPokemon] = useState(null)
    const [humanFightingPokemon, setHumanFightPokemon] = useState(null)

    const [gameover, setGameover] = useState("")

    const updateFight = e => {
        if (gameover.length > 0) return console.log(gameover)
        // is Fighting Pokemon available
        // if(computerFightingPokemon === null || humanFightingPokemon === null) return console.log("choose pokemon")


        if (computerFightingPokemon === null && computerDeck.length > 0) {
            // choose pokemon
            const newFightingCOmputerPokemon = ComputerAI.getRandomPokemon(computerDeck)
            console.log("ööö", newFightingCOmputerPokemon)
            movePokemonFromStateToState(setComputerDeck)(setComputerFightPokemon)(newFightingCOmputerPokemon)
        }

        // no more pokemons available
        if (computerDeck.length === 0 && computerFightingPokemon === null) {
            return setGameover("human")
        }

        if (humanDeck.length === 0 && humanFightingPokemon === null) {
            return setGameover("computer")
        }

        if (computerFightingPokemon === null || humanFightingPokemon === null) return console.log("üüü")


        // whot attack first
        if (computerFightingPokemon.base.Speed > humanFightingPokemon.base.Speed) {
            // computer attacks
            if (!attack(computerFightingPokemon, humanFightingPokemon, setHumanFightPokemon)) {
                // human pokemondeath
                movePokemonFromStateToState(setHumanFightPokemon)(setHumanDeathPokemons)(humanFightingPokemon)
            } else {
                // human attack
                if (!attack(humanFightingPokemon, computerFightingPokemon, setComputerFightPokemon)) {
                    //computer pokemon death
                    movePokemonFromStateToState(setComputerFightPokemon)(setComputerDeathPokemons)(computerFightingPokemon)
                }
            }
        } else {
            // human attacks
            if (!attack(humanFightingPokemon, computerFightingPokemon, setComputerFightPokemon)) {
                //computer pokemon death
                movePokemonFromStateToState(setComputerFightPokemon)(setComputerDeathPokemons)(computerFightingPokemon)
            } {
                // computer attack
                if (!attack(computerFightingPokemon, humanFightingPokemon, setHumanFightPokemon)) {
                    // human pokemondeath
                    movePokemonFromStateToState(setHumanFightPokemon)(setHumanDeathPokemons)(humanFightingPokemon)
                }
            }
        }


        // // game over?
        // if (computerDeck.length === 0) {
        //     // computer game over
        //     console.log("COMPUTER is GAME OVER")

        // } else if (humanDeck.length === 0) {
        //     // computer game over
        //     console.log("HUMAN is GAME OVER")

        // }

        // console.log("computer pokemon is death", computerFightingPokemon)
        // // computer need new pokeom?
        // if (computerFightingPokemon === null) {
        //     console.log("computer pokemon is death55555555555555555")
        //     const newFightingCOmputerPokemon = ComputerAI.getRandomPokemon(computerDeck)
        //     movePokemonFromStateToState(computerDeck)(computerFightingPokemon)(newFightingCOmputerPokemon)
        // }

        // // ai maybe switch pokemon
        // if (AI.switchPokemon()) {
        //     console.log("switchPokemon")
        //     const newFightingCOmputerPokemon = ComputerAI.getRandomPokemon(computerDeck)

        //     // fight back to deck
        //     movePokemonFromStateToState(computerFightingPokemon)(computerDeck)(computerFightingPokemon)
        //     // deck to fight
        //     movePokemonFromStateToState(computerDeck)(computerFightingPokemon)(newFightingCOmputerPokemon)
        // }
    }

    const choosePokemon = pokemon => e => {
        // computer initial
        if (computerFightingPokemon === null) {
            const computerPokemon = ComputerAI.getRandomPokemon(computerDeck)
            movePokemonFromStateToState(setComputerDeck)(setComputerFightPokemon)(computerPokemon)
        }

        // fight to deck
        if (humanFightingPokemon !== null) {
            movePokemonFromStateToState(setHumanFightPokemon)(setHumanDeck)(humanFightingPokemon)
        }

        // deck to fight
        movePokemonFromStateToState(setHumanDeck)(setHumanFightPokemon)(pokemon)
    }

    useEffect(() => {

    }, [])

    return <DuellView
        computerDeck={computerDeck}
        humanDeck={humanDeck}
        computerDeathPokemons={computerDeathPokemons}
        humanDeathPokemons={humanDeathPokemons}
        computerFightingPokemon={computerFightingPokemon}
        humanFightingPokemon={humanFightingPokemon}
        updateFight={updateFight}
        choosePokemon={choosePokemon}
        gameover={gameover}
    />
}

export default DuellController