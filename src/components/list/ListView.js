import React from 'react'
import Card from '../card/Card'
import './ListView.css'

const ListView = ({ filteredPokemon, handleAddHumanDeck }) => {

    const renderList = () => filteredPokemon
        .map(pokemon =>
        <button
            onClick={handleAddHumanDeck(pokemon)}
            key={pokemon.id}>
            {/* {x.name.english} */}
            <Card pokemon={pokemon}></Card>
        </button>)


    return (
        <div className='list'>
            {renderList()}
            
        </div>

    )
}

export default ListView