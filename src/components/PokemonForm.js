import React from 'react'
// import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    const pokemonData =  {
      "name": this.state.name,
      "stats": [
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    this.props.createPokemon(pokemonData)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input name="name"  onChange={event => this.handleChange(event)} value={this.state.name}></input><br/>
          <label>HP:</label>
          <input name="hp"  onChange={event => this.handleChange(event)} value={this.state.hp}></input><br/>
          <label>Front Url:</label>
          <input name="frontUrl"  onChange={event => this.handleChange(event)} value={this.state.frontUrl}></input><br/>
          <label>Back Url:</label>
          <input name="backUrl"  onChange={event => this.handleChange(event)} value={this.state.backUrl}></input><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PokemonForm
