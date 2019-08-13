import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    inputValue: "",
  }

  componentDidMount () {
    return fetch('http://localhost:3000/pokemon')
    .then( r => r.json() )
    .then( pokemon => {
      this.setState({ pokemon })
    })
  }

  handleInputChange = (e, {value}) => {
    this.setState({ inputValue: value })
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(p => p.name.includes(this.state.inputValue))
  }
  createPokemon = pokemonObj => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(pokemonObj)
    })
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemon: [...this.state.pokemon, pokemon]}))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleInputChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={ this.filteredPokemon() } />
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
      </div>
    )
  }
}

export default PokemonPage
