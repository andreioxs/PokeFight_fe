import React from 'react'

const SearchView = ({ onChange, onKeyDown, onClick }) => {
    return (
        <div>
            <input
                type={"text"}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchView