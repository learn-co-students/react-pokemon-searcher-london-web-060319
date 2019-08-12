import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [], 
    query: ''
  }
  
  componentDidMount = () => {
    this.getPokemon()
    // .then(() => this.setState({...this.state.pokemon, this.props.newPokemon}))
    
  }

  getPokemon = () =>{
    return fetch('http://localhost:3000/pokemon').then(resp => resp.json()).then(resp => this.setState({pokemon: resp}))
  }

  createPokemon = event => {
    this.setState({
      pokemon: [...this.state.pokemon, 
  {name: event.target.name.value,
      stats: [{value: event.target.hp.value, name: "hp"}],
      types: [event.target.types.value],
      sprites:{front: event.target.frontUrl.value,
      back: event.target.backUrl.value}}]
    })
  }

  filterPokemon = () => {
    return this.state.pokemon.filter(pokeman => pokeman.name.includes(this.state.query))
  }
  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, {value}) => this.setState({query: value}), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()}/>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
