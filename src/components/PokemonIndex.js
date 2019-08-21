import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import API from '../adapters/API'
import PokemonSort from './PokemonSort';
import PokemonTypeFilter from './PokemonTypeFilter';

class PokemonIndex extends React.Component {

  state = {
    pokemons: [],
    sortOptions: [
      'Default',
      'Name',
      'Id'
    ],
    types: [
      'normal',
      'fire',
      'water',
      'electric',
      'grass',
      'ice',
      'fighting',
      'poison',
      'ground',
      'flying',
      'psychic',
      'bug',
      'rock',
      'ghost',
      'dragon',
      'dark',
      'steel',
      'fairy'
    ],
    typeFilter: undefined,
    sortOption: 'Default',
    searchTerm: ''
  }

  componentDidMount() {
    API.getPokemon()
      .then(pokemons => this.setState({ pokemons }))
  }

  updateSearchTerm = searchTerm => this.setState({ searchTerm })

  filterPokemon = (pokemons) => pokemons.filter(
    pokemon => pokemon.name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
  )

  changeSort = sortOption => this.setState({ sortOption })

  sortPokemon = (sortOption, pokemons) => {
    if (sortOption === 'Default') return pokemons

    return pokemons.sort((pokemonA, pokemonB) => {
      if (sortOption === 'Name')
        return pokemonA.name.localeCompare(pokemonB.name)
      if (sortOption === 'Id')
        return pokemonA.id -
          pokemonB.id
    })
  }

  addPokemon = newPokemon => {
    API.postPokemon(newPokemon)
      .then(pokemon => this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      }))
  }

  filterPokemonType = (pokemons) => pokemons.filter(
    pokemon => this.state.typeFilter ? pokemon.types && pokemon.types.includes(this.state.typeFilter) : true
  )

  changeTypeFilter = newTypeFilter => (newTypeFilter === this.state.typeFilter ? this.setState({ ['typeFilter']: undefined }) : this.setState({ ['typeFilter']: newTypeFilter }))

  deletePokemon = id => {
    API.deletePokemon(id)
      .then(this.setState({
        pokemons: this.state.pokemons.filter(pokemon => pokemon.id !== id)
      }))
  }

  render() {
    const fp = this.filterPokemon(this.state.pokemons)
    const ffp = this.filterPokemonType(fp)

    const pokemons = this.sortPokemon(this.state.sortOption, ffp)

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <div>
          <PokemonTypeFilter
            handleChange={this.changeTypeFilter}
            filterOption={this.state.typeFilter}
            filterOptions={this.state.types}
          />
          <br />
          <PokemonSort sortOptions={this.state.sortOptions} changeSort={this.changeSort} sortOption={this.state.sortOption} />
          <br />
          <div><br />
            <Search onSearchChange={(e, { value }) => this.updateSearchTerm(value)} showNoResults={false} value={this.state.searchTerm} />
          </div>
        </div>
        <br />
        <PokemonForm types={this.state.types} onSubmit={this.addPokemon} />
        <br />
        <div>
          <PokemonCollection pokemons={pokemons} deletePokemon={this.deletePokemon} />
        </div>
      </div>
    )
  }
}

export default PokemonIndex
