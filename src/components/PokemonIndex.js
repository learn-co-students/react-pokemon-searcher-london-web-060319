import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PokemonCard from './PokemonCard';
import { stringify } from 'querystring';

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: "",
    filtered: []
  }

  fetchData = () => {
    return fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
  }

  componentDidMount() {
    this.fetchData()
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }

  pokemonList = () => {

    if (this.state.filtered.length > 0) {
      return this.state.filtered.map(poke => {
        return(
          <PokemonCard pokemon={poke}/>
        )
      })
    } else {
      return this.state.pokemons.map(poke => {
        return(
          <PokemonCard pokemon={poke}/>
        )
      })
    }
  }

  searchState = (event) => {
    this.setState ({
      search: event.target.value
    },
    this.updatePokemonList)
  }

  updatePokemonList = () => {
    const searchTerm = this.state.search
    const searchedPokemons = this.state.pokemons.filter(elem => {
      return elem.name.includes(searchTerm)
    })
    this.setState({
      filtered: searchedPokemons
    })
  }

  handleSubmitArray = (state) => {
    console.log(state)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        stats: [
          {
            value: state.hp,
            name: "hp"
          }
        ],
        sprites: {
          front: state.frontUrl,
          back: state.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        pokemons: [
          ...this.state.pokemons,
          obj
        ]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.searchState} showNoResults={false} />
        <br />
        <PokemonCollection />
        <br />
        <PokemonForm getToArray={this.handleSubmitArray}/>
        <br />
        {this.pokemonList()}
      </div>
    )
  }
}

export default PokemonPage
