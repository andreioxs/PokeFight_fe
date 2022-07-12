import React from 'react'
import './DuellView.css'
import Card from '../../components/card/Card'
import DeckController from '../../components/deck/DeckController'
import HeaderController from '../../components/header/HeaderController'

const DuellView = ({
    humanDeck,
    choosePokemon,
    computerDeck,
    computerFightPokemon,
    humanFightPokemon,
    updateFight,
}) => {


    console.log("computerFightPokemon", computerFightPokemon)
    console.log("humanFightPokemon", humanFightPokemon)

    const renderHumanFightPokemon = () => humanFightPokemon === null
        ? <div>Please Choose a Pokemon below</div>
        : (
            <div>
                <Card pokemon={humanFightPokemon} />
            </div>
        )

    const renderComputerFightPokemon = () => computerFightPokemon === null
        ? null
        : (
            <div>
                <Card pokemon={computerFightPokemon} />
            </div>
        )

    return (
        <div className='duell'>

            <div className='header'>
                <HeaderController />
            </div>

            <div className='camera'>
                <div className='perspecite'>

                    <div className='board'>

                        {/* <h4>Gegner Deck</h4> */}
                        <DeckController
                            deck={computerDeck}
                        />

                        <div className='fightArea'>
                            {/* <h3>-------------------------------------------</h3> */}
                            {renderComputerFightPokemon()}
                            {/* <h3>------------------FIGHT--------------------</h3> */}
                            {renderHumanFightPokemon()}
                            <button onClick={updateFight}>Attack</button>
                            {/* <h3>-------------------------------------------</h3> */}
                        </div>

                        <DeckController
                            deck={humanDeck}
                            onClick={choosePokemon}
                        />
                        {/* <h4>My Deck</h4> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DuellView