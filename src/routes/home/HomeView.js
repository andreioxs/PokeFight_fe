import React from 'react'
import HeaderController from '../../components/header/HeaderController'

const HomeView = ({ humanDeck, rem }) => {
  return (
    <div>

      <div>
        <HeaderController />
      </div>

      <div>
        <h1>Home</h1>
        <h2>Willkommen auf PokeFight</h2>
        <h3>Wähle bis zu 6 Pokemon aus und Kämpfe gegen den Computer</h3>
      </div>

    </div>
  )
}

export default HomeView