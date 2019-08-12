const endpoint = 'http://localhost:3000/'
const pokemonURL = `${endpoint}pokemon`

const getPokemon = () => fetch(pokemonURL).then(res => res.json())

const formatPokemonPost = pokemon => ({
  "name": pokemon.name,
  "stats": [
    {
      "value": pokemon.hp,
      "name": "hp"
    }
  ],
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

export default {
  getPokemon,
  postPokemon
}