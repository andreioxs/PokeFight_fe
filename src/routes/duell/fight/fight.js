const MIN_DAMAGE = 10

const damageCalculator = (attack, defense) => {
    let damage = attack - defense

    if (damage < MIN_DAMAGE)
        damage = MIN_DAMAGE

    return damage
}

const attack = (attackPokemon, defendPokemon, setStateDefender) => {
    // // attacker dead?
    if (attackPokemon.base.HP <= 0) return false

    // make damage
    const damage = damageCalculator(attackPokemon.base.Attack, defendPokemon.base.Defense)

    // calculate HP
    const newHP = defendPokemon.base.HP - damage

    setStateDefender(prev => ({
        ...prev,
        base: {
            ...prev.base,
            HP: newHP
        }
    }))

    if(newHP <= 0)
    {
        return false
    } else {
        return true
    }
}

export {
    damageCalculator,
    attack,
}