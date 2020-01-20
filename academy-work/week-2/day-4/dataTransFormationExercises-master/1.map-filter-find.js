const pokeData = require('./pokeData')

const getPokeNames = (pokemons) => {
    return pokemons.map(pokemon => pokemon.name)
}

const getPokemonById = (pokemons, id) => {
    const singlePokemon = pokemons.find((pokemon) => {
        // console.log('ID OF CURRENT POKEMON:', pokemon.id)
        // console.log("ID WE ARE LOOKING FOR:", id)
        return pokemon.id === id
    })
    return singlePokemon
}

const getRarePokemons = (pokemons) => {
    const filteredPokemons = pokemons.filter(pokemon => pokemon.spawn_chance < 0.1)
    return filteredPokemons
}

const getMidSizedPokemon = (pokemons) => {
    const midSizePokemon = pokemons.find(pokemon => pokemon.weight == "38.0 kg")  
    return midSizePokemon
}

const getAdultPokemons = (pokemons) => {
    const adultPokemons = pokemons.filter(pokemon => pokemon.egg === "Not in Eggs")
    return adultPokemons
}

const getPokemonImages = (pokemons) => {
    const pokeImages = pokemons.map(pokemon => pokemon.img)
    return pokeImages
}

module.exports = {
    getPokeNames,
    getPokemonById,
    getRarePokemons,
    getMidSizedPokemon,
    getAdultPokemons,
    getPokemonImages
}