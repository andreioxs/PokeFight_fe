import React from 'react'
import './SearchView.css'
import {
    Link,
  } from "react-router-dom";

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
            <Link to={"/duell"}><img id="pokeball" src={"images/pokeball.png"} alt="pokeball"/></Link>
        </div>
    )
}

export default SearchView