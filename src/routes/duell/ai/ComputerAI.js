
const switchPokemon = () => {
    const number = 10

    const value = Math.floor(Math.random * number)
    console.log("choosePokemon", value)

    return value === 0 ? true : false
}

