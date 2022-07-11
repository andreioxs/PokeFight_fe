import React from 'react'
import './Card.css'

const Card = ({pokemon}) => {




  return (
    <div>
        <div class="inner_box">
            <div class="img_box">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
            </div>
            <div class="Card__header">
                <h2 class="Card_name"><span class="Card__number">{pokemon.id}</span>{pokemon.name.english}</h2>
            </div>
            <div class="stats">
                    <p>Attack: {pokemon.base.Attack}</p>
                    <p>Defense: {pokemon.base.Defense}</p>
            </div>
            <div class="stats">
                    <p>Health: {pokemon.base.HP}</p>
                    <p>Speed: {pokemon.base.Speed}</p>
            </div>
        </div>
    </div>





    

  )
}

export default Card