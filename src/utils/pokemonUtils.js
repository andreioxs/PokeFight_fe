const removePokemonFromState = setState => pokemon => {
    setState(prev => {
        console.log("prev", prev)
        // arr
        if (Array.isArray(prev)) {
            const copy = [...prev]
            const index = copy.findIndex(x => x.id === pokemon.id)

            if (index === -1) return copy

            copy.splice(index, 1)

            return copy
        }

        // no arr
        return null

    })
}


const movePokemonFromStateToState = setStateOrigin => setStateTarget => pokemon => {
    // // set
    setStateTarget(prev => Array.isArray(prev)
        ? [...prev, { ...pokemon }]
        : pokemon)
    // //delete
    removePokemonFromState(setStateOrigin)(pokemon)
}


export {
    removePokemonFromState,
    movePokemonFromStateToState,
}