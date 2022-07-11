import React, { useState } from 'react'
import SearchView from './SearchView'

const SearchController = ({ handleSearch }) => {
    const [searchTerm, setSearchterm] = useState("")

    const onChange = e => setSearchterm(e.target.value)

    const onKeyDown = e => {
        if (e.key !== 'Enter') return

        e.preventDefault();
        handleSearch(searchTerm)
    }

    const onClick = e => handleSearch(searchTerm)

    return <SearchView
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
    />
}

export default SearchController