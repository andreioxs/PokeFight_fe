import React from 'react'
import DeckView from './DeckView'

const DeckController = (
    {
        deck,
        onClick,
        death = []
    }) => {


    return <DeckView
        deck={deck}
        onClick={onClick}
        death={death}
    />
}

export default DeckController