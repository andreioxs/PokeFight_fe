import React from 'react'
import HeaderController from '../../components/header/HeaderController'

const HomeView = ({ humanDeck, rem }) => {
  return (
    <div id="start">
      <div>
        <HeaderController />
      </div>
      <div id="Homepage">
      <img id="pokemon" src={"images/pokemon-23-logo.png"} alt="logo"/><br></br><br></br><br></br><br></br>
      <img id="slogan" src={"images/slogan.png"} alt="slogan"/>
        
        <div id="home">
          <a href="/Pokedex"><img id="pokedex" src={"images/pokedex.png"} alt="pokedex"/></a>
          
        <h6>1.) Klicke auf den Pokédex<br></br>2.) Wähle bis zu 6 Pokemon aus.<br></br> 3.) Kämpfe gegen den Computer.</h6>
        </div>
      </div>

    </div>
  )
}

export default HomeView