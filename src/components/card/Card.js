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

  return (
    <div>
      <div className="inner_box">
        <div className="img_box">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        </div>
        <div className="Card__header">
          <h2 className="Card_name"><span className="Card__number">{id}</span>{pokemon.name.english}</h2>
        </div>
        <div className="stats">
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
        </div>
        <div className="stats">
          <p>Health: {pokemon.base.HP}</p>
          <p>Speed: {pokemon.base.Speed}</p>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <div className="inner_box">
  //       <div className="img_box">
  //         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
  //       </div>       
  //     </div>
  //   </div>
  // )
}

export default Card