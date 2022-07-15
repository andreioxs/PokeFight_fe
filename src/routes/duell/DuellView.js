import React from 'react'
import './DuellView.css'
import Card from '../../components/card/Card'
import DeckController from '../../components/deck/DeckController'
import HeaderController from '../../components/header/HeaderController'

const DuellView = ({
    computerDeck,
    humanDeck,
    computerDeathPokemons,
    humanDeathPokemons,
    computerFightingPokemon,
    humanFightingPokemon,
    updateFight,
    choosePokemon,
    gameover,
}) => {

    const renderhumanFightingPokemon = () => humanFightingPokemon === null
        ? <h4>Please Choose a Pokemon below</h4>
        : (
            <div>
                <Card pokemon={humanFightingPokemon} />
            </div>
        )

    const rendercomputerFightingPokemon = () => computerFightingPokemon === null
        ? null
        : (
            <div>
                <Card pokemon={computerFightingPokemon} />
            </div>
        )

    const renderAttackButton = () => <button className='button' onClick={updateFight}>click me for logic...</button>

    const renderButtonOrGameOver = () => gameover.length > 0
        ? (<div>
            <h1>GAME OVER</h1>
            <h4>the winner is {gameover}</h4>
        </div>)
        : renderAttackButton()

    return (
        <div className='duell'>

            <div className='header'>
                <HeaderController />
            </div>


            <div className='camera'>

                <div className='perspecite'>

                    <div className='board'>

                        <DeckController
                            deck={computerDeck}
                            death={computerDeathPokemons}
                        />

                        <div className='fightArea'>
                            {rendercomputerFightingPokemon()}
                            <br />
                            <br />

                            {renderhumanFightingPokemon()}
                            <br />
                            {renderButtonOrGameOver()}
                        </div>

                        <DeckController
                            deck={humanDeck}
                            death={humanDeathPokemons}
                            onClick={choosePokemon}
                        />

                    </div>

                </div>

            </div>



        </div>
    )
}

export default DuellView