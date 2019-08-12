const endpoint = 'http://localhost:3000/'
const pokemonURL = `${endpoint}pokemon/`

const getPokemon = () => fetch(pokemonURL).then(res => res.json())

const formatPokemonPost = pokemon => ({
  "name": pokemon.name,
  "id": pokemon.id,
  "stats": [
    {
      "value": pokemon.hp,
      "name": "hp"
    },
    {
      "value": pokemon.speed,
      "name": "speed"
    },
    {
      "value": pokemon.attack,
      "name": "attack"
    },
    {
      "value": pokemon.defense,
      "name": "defense"
    },
    {
      "value": pokemon.specialAttack,
      "name": "special-attack"
    },
    {
      "value": pokemon.specialDefense,
      "name": "special-defense"
    }
  ],
  "types": pokemon.types,
  "sprites": {
    "front": pokemon.frontUrl,
    "back": pokemon.backUrl
  }
})

const postPokemon = pokemon => fetch(pokemonURL, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(formatPokemonPost(pokemon))
}).then(res => res.json())

const deletePokemon = id => fetch(`${pokemonURL}${id}`, {
  method: 'DELETE'
})


export default {
  getPokemon,
  postPokemon,
  deletePokemon
}