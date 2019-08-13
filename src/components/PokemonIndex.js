import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  fetchPokemon = () => {
    return fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
  }

  componentDidMount(){
    this.fetchPokemon()
    .then(pokemon => this.setState({ pokemon }))
  }

  filterPokemon = () => {
    return this.state.pokemon.filter(onepokemon => onepokemon.name.includes(this.state.searchTerm))
  }

  createPokemon = (pokemonObj) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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
        <Search onSearchChange={_.debounce((event, {value}) => this.setState({searchTerm: value}), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
