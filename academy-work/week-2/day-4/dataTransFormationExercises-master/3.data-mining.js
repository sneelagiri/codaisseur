const pokeData = require('./pokeData')
const gymData = require('./gymData')
const trainerData = require('./trainerData')

const gymLeader = {
    "id": 0,
    "name": "undefined",
    "pokemonIds": []
}


const getGymLeader = (gym, trainers) => {
    const matchingGym = gymData.filter(theGym => theGym === gym)
    const matchingGymObj = matchingGym[0]
    trainers.map( trainer => {
        if (trainer.id == matchingGymObj.trainerId) {
            gymLeader.id = trainer.id
            gymLeader.name = trainer.name
            gymLeader.pokemonIds = trainer.pokemonIds
        }
    })
    return gymLeader
}

const getTrainerPokemons = (trainer, pokemons) => {
    const trainerPokemonArray= []
    trainer.pokemonIds.map(trainerPokemon => {
        pokemons.map(pokemon => {
            if(pokemon.id == trainerPokemon) {
                trainerPokemonArray.push(pokemon)
            }
        })
    })
    return trainerPokemonArray
}

const getTrainersPokemons = (trainers, pokemons) => {
    const trainerPokemonArray= []
    trainers.map(trainerPokemon => {
        pokemons.map(pokemon => {
            if(pokemon.id == trainerPokemon.pokemonIds) {
                trainerPokemonArray.push(pokemon)
            }
        })
    })
    return trainerPokemonArray
}

const getBigGyms = (gyms, trainers) => {
    const bigGyms = []
    trainers.map(trainer => {
        gyms.map(gym => {
            if (gym.trainerId == trainer.id && trainer.pokemonIds.length >= 4) {
                bigGyms.push(gym.city)
            }
        })
    })
    return bigGyms
}

const getRarestGym = (gyms, trainers, pokemons) => {
    const legendaryGyms = [] 
    const legendaryGymsCopy = [...legendaryGyms]
    gyms.map(gym => {
        trainers.map(trainer => {
            trainer.pokemonIds.map(trainerPokemon => {
                pokemons.map(pokemon => {
                    if(pokemon.spawn_chance < 0.01 
                        && pokemon.id == trainerPokemon 
                        && trainer.id == gym.trainerId) {
                            legendaryGyms.push(gym)
                            if(legendaryGyms[])
                        }
                }) 
            })
        })    
    })

}

module.exports = {
    getGymLeader,
    getTrainerPokemons,
    getTrainersPokemons,
    getBigGyms,
    getRarestGym,
}