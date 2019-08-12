import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(res =>
        this.setState({
          pokemons: res
        })
      );
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }
  filterPokemon = () => this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))

  // onSearchChange = event => {
  //   const newPoke = this.state.pokemons.filter(pokemon => {
  //     return pokemon.name.includes(event.target.value);
  //   });

  //   this.setState({
  //     pokemons: newPoke,
  //     pokemonSearch: event.target.value
  //   });
  // };



  handleFormSubmit = (event, state) => {
    event.preventDefault();
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ state }) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(object => {
        this.setState({
          pokemons: [...this.state.pokemons, object]
        });
      }); // parses JSON response into native JavaScript objects
  };

  render() {
    const pokemons = this.filterPokemon()
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} />
        <br />
        <PokemonCollection pokemons={pokemons} />
        <br />
        <PokemonForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default PokemonPage;
