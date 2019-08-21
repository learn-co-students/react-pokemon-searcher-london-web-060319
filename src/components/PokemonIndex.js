import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
// import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemons: data
    }))
  }
  
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value})
  }

  filterPokemons = () => this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTerm))  

  createPokemon = (pokemonData) => {
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemonData), 
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemons: [...this.state.pokemons, data]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <form>
          <label>Find Pokemon:</label>
          <input onChange={event => this.handleChange(event)} name="search" value={this.state.searchTerm} ></input>
        </form>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <PokemonCollection pokemons={this.filterPokemons()}/>
      </div>
    )
  }
}

export default PokemonPage
