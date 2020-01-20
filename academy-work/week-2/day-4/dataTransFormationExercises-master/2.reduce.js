const calculateTotalPokemonWeight = (pokemons) => {
    return pokemons.reduce((totalWeight, currentPokemon) => {
        return totalWeight + parseFloat(currentPokemon.weight)
    }, 0)
}

const calculateAverageSpawnChance = (pokemons) => {
    return pokemons.reduce((averageSpawnChance, currentPokemon) => {
        return ((averageSpawnChance + (currentPokemon.spawn_chance / pokemons.length)))
    }, 0)
}

const calculateTotalEggDistance = (pokemons) => {
    const notNotInEggs = pokemons.filter(pokemon => pokemon.egg !== "Not in Eggs")
    const eggDistance = notNotInEggs.reduce((totalEggDistance, currentPokemon) => {
        return totalEggDistance + parseFloat(currentPokemon.egg)
    }, 0)
    return eggDistance
}

const getHeaviestPokemon = (pokemons) => {
    const heaviestPokemon = pokemons.reduce((heaviest, currentPokemon) => {
        return (parseFloat(heaviest.weight) || 0) > parseFloat(currentPokemon.weight) ? heaviest : currentPokemon 
    }, {})
    return heaviestPokemon
}

const rarityCategory = {
    "common": [],
    "rare": [],
    "legendary": []
}

const categorizePokemonsByRarity = (pokemons) => {
    const categorize = pokemons.reduce((rarity, currentPokemon) => {
        return currentPokemon.spawn_chance > 0.1 ? 
        rarityCategory.common.push(currentPokemon)
        : currentPokemon.spawn_chance <= 0.1 
        && currentPokemon.spawn_chance > 0.01 ?
        rarityCategory.rare.push(currentPokemon)
        : currentPokemon.spawn_chance < 0.01 ?
        rarityCategory.legendary.push(currentPokemon)
        : null
    }, 0)
    console.log(rarityCategory)
    return rarityCategory
}
/*
categorizePokemonsByRarity should return an object like this:

{
   common: [ ], // array of pokemons
   rare: [ ], // array of pokemons
   legendary: [ ], // array of pokemons
}

Common: spawn_chance higher than 0.1
Rare: spawn_chance less than 0.1
Legendary: spawn_chance less than 0.01

*/

module.exports = {
    calculateTotalPokemonWeight,
    calculateAverageSpawnChance,
    calculateTotalEggDistance,
    getHeaviestPokemon,
    categorizePokemonsByRarity
}