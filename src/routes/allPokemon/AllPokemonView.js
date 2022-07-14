import React from 'react'
import DeckController from '../../components/deck/DeckController'
import HeaderController from '../../components/header/HeaderController'
import ListController from '../../components/list/ListController'

import SearchController from '../../components/search/SearchController'

const AllPokemonView = ({
    filteredPokemon,
    setFilteredPokemon,
    handleSearch,
    humanDeck,
    rem
}) => {



    return (
        <div>

            <div>
                <HeaderController />
            </div>

            

            <div>
                <h4>My Deck</h4>
                <DeckController
                    deck={humanDeck}
                    onClick={rem}
                />
            </div>

            <div>
                <h4></h4>
                <SearchController
                    handleSearch={handleSearch}
                />
            </div>

            <div>
                {/* <h4>List</h4> */}
                <ListController
                    filteredPokemon={filteredPokemon}
                />
            </div>

        </div>
    )
}

export default AllPokemonView