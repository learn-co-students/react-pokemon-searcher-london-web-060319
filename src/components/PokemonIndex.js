import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'



class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemonArr: [],
      searchTerm: ''
    }
  }

  getPokemon = async () => {
    const resp = await fetch("http://localhost:3000/pokemon");
    return await resp.json();
  }

  filterPokemonRender = () => {
    return this.state.pokemonArr.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  createPokemon = (pkmnObj) => {
    fetch("http://localhost:3000/pokemon", {
      method: 'Post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pkmnObj)
    })
    .then(resp => resp.json())
    .then(newPokemon => this.setState({pokemonArr: [...this.state.pokemonArr, newPokemon]}))
  }

  componentDidMount() {
    this.getPokemon()
    .then(resolve => this.setState({
      pokemonArr: resolve
    }))
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, input) => this.setState({searchTerm: input.value}), 500)} showNoResults={false} />
        <br />
        <PokemonForm createNewPokemon={this.createPokemon} />
        <br />
        <PokemonCollection pokemonsToRender={this.filterPokemonRender()} />
      </div>
    )
  }
}

export default PokemonPage
