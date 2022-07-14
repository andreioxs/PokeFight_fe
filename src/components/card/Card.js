import React from 'react'
import './Card.css'


const Card = ({ pokemon }) => {

  const pickNumberFromData = (id) => {
    let checkValue = id + id
    if (typeof id === "number") {
      checkValue = id + ""
    }
    const myArray = checkValue.split("_");
    return myArray[0]
  }

  const id = pickNumberFromData(pokemon.id)

  const typeColor = {
    "Grass": "#43a047",
    "Poison": "#7e57c2",
    "Fire": "#ff5722",
    "Flying": "#f7e0c0",
    "Water": "#039be5",
    "Bug": "#689f38",
    "Normal": "#757575",
    "Electric": "#ffc107",
    "Ground": "#795548",
    "Fairy": "#f06292",
    "Fighting": "#f44336",
    "Psychic": "#ab47bc",
    "Dragon": "#81522d"
  };

  const gradient = `radial-gradient(farthest-corner at 50% -20%, #000, ${pokemon.type.map(t => typeColor[t]).filter(v => !!v)}, #000)`;
  console.log(pokemon)
  function MouseOver(Card) {
    Card.target.style.background = 'red';
  }

  return (
    <div>
      <div class="inner_box">
        <div class="img_box">
          <div class={`inner_box`} style={{ background: gradient }}>
            <div class="img_box">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            </div>
            <div class="Card__header">
              <h2 class="Card_name"><span class="Card__number">{id}</span>{pokemon.name.english}</h2>
            </div>
            <div class="stats">

              <div class="stats">
                <p>Attack: {pokemon.base.Attack}</p>
                <p>Attack: {pokemon.base.Attack} </p>
                <p>Defense: {pokemon.base.Defense}</p>
              </div>
              <div class="stats">
                <p>Health: {pokemon.base.HP}</p>
                <p>Speed: {pokemon.base.Speed}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>





  )
}

export default Card