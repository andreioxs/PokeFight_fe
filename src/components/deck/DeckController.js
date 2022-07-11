import React from 'react'
import DeckView from './DeckView'

const DeckController = ({ deck, onClick }) => {


    return <DeckView
        deck={deck}
        onClick={onClick}
    />
}

export default DeckController