import React from 'react'
import './ListView.css'

const ListView = ({ filteredPokemon, handleAddHumanDeck }) => {


    const renderList = () => filteredPokemon
        .map(x => <button
            className='container'
            onClick={handleAddHumanDeck(x)}
            key={x.id}>
            {x.name.english}
        </button>)

    return (

        <div className='list'>
            {renderList()}
        </div>

    )
}

export default ListView