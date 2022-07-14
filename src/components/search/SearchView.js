import React from 'react'
import './SearchView.css'

const SearchView = ({ onChange, onKeyDown, onClick }) => {
    return (
        <div id="search">
            <input
                type={"text"}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Pokémon"
            />
            <button onClick={onClick}>Suche!</button>
        </div>
    )
}

export default SearchView