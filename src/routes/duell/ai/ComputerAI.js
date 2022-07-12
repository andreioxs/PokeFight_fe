
const getRandomPokemon = (copyComputerDeck) => {
    const index = Math.floor(Math.random() * copyComputerDeck.length)

    return copyComputerDeck[index]
}

const switchPokemon = () => {
    const number = 10

    const value = Math.floor(Math.random() * number)
    console.log("choosePokemon", value)

    return value === 0 ? true : false
}

export default {
    switchPokemon,
    getRandomPokemon
}