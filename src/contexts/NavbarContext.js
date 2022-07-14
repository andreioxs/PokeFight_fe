import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext()

export const NavbarContext = ({ children }) => {
    const [allLink, setAllLink] = useState([
        {
            "id": 0,
            "icon": "",
            "text": "Pokédex",
            "link": "/Pokedex"
        },
        {
            "id": 2,
            "icon": "",
            "text": "Duell",
            "link": "/duell"
        },
    ])

    const [selectId, setLinkId] = useState(0)


    return (
        <StateContext.Provider
            value={{
                allLink, setAllLink,

                selectId, setLinkId,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useNavbarContext = () => useContext(StateContext)