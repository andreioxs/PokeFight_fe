import React, { useState } from 'react'
import DuellView from './DuellView'
import AI from './ai/ComputerAI'

import { useDeckContext } from '../../contexts/DeckContext'
import ComputerAI from './ai/ComputerAI'

const DuellController = () => {
    const deckContext = useDeckContext()

    const [copyComputerDeck, setComputerDeck] = useState(deckContext.computerDeck)
    const [copyHumanDeck, setHumanDeck] = useState(deckContext.humanDeck)

    const [copyComputerDeckDeath, setComputerDeckDeath] = useState([])
    const [copyHumanDeckDeath, setHumanDeckDeath] = useState([])

    const [computerFightPokemon, setComputerFightPokemon] = useState(null)
    const [humanFightPokemon, setHumanFightPokemon] = useState(null)

    const choosePokemon = pokemon => e => {
        console.log("choosePokemon", pokemon)

        // setze fight card wieder zu deck
        if (humanFightPokemon !== null) {
            setHumanDeck(prev => [...prev, { ...humanFightPokemon }])
        }

        // setze fight card
        setHumanFightPokemon(pokemon)

        // entferne karte aus deck
        setHumanDeck(prev => {
            const result = [...prev]
            const index = result.findIndex(x => x.id === pokemon.id)
            result.splice(index, 1)
            return result
        })

        // computer initial choose
        if (computerFightPokemon !== null) return

        const computerPokemon = ComputerAI.getRandomPokemon(copyComputerDeck)

        setComputerFightPokemon(computerPokemon)
    }

    const damageCalculator = (attack, defense) => {
        let damage = attack - defense

        if (damage < 10)
            damage = 10

        return damage
    }


    const updateFight = e => {
        // console.log("updateFight")

        let resultComputerFightPokemon = computerFightPokemon
        let resultHumanFightPokemon = humanFightPokemon
        console.log("START resultHumanFightPokemon", resultHumanFightPokemon)

        // attack
        if (computerFightPokemon.base.Speed > humanFightPokemon.base.Speed) {
            // console.log("computer begins")

            const damage = damageCalculator(resultComputerFightPokemon.base.Attack, resultHumanFightPokemon.base.Defense)
            // console.log("damage", damage)

            const newHP = resultHumanFightPokemon.base.HP - damage
            // console.log("newHP", newHP)

            resultHumanFightPokemon = {
                ...resultHumanFightPokemon,
                base: {
                    ...resultHumanFightPokemon.base,
                    HP: newHP
                }
            }
            // console.log("END resultHumanFightPokemon", resultHumanFightPokemon)
            setHumanFightPokemon(resultHumanFightPokemon)

        } else {
            console.log("human begins")

        }


        // pokemon death
        if (resultHumanFightPokemon.base.HP < 0) {
            console.log("human is dead")

            setHumanDeckDeath(prev => [...prev, { ...resultHumanFightPokemon }])
            // setHumanFightPokemon(prev => {
            //     const result = [...prev]
            //     const index = result.findIndex(x => x.id === resultHumanFightPokemon.id)
            //     result.splice(index, 1)
            //     return result
            // })
        }



        // game over

        // switch pokemon
        if (AI.switchPokemon()) {
            console.log("switchPokemon")
            const computerPokemon = ComputerAI.getRandomPokemon(copyComputerDeck)

            setComputerFightPokemon(computerPokemon)
        }
    }

    return <DuellView
        humanDeck={copyHumanDeck}
        choosePokemon={choosePokemon}
        computerDeck={copyComputerDeck}
        computerFightPokemon={computerFightPokemon}
        humanFightPokemon={humanFightPokemon}
        updateFight={updateFight}
    />
}

export default DuellController