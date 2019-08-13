import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    image: this.props.pokemon.sprites.front
  }

  toggleImage = () => {
    if (this.state.image === this.props.pokemon.sprites.front) {
      this.setState({ image: this.props.pokemon.sprites.back})
    } else { this.setState({ image: this.props.pokemon.sprites.front}) }
  }

  render() {
    
    return (
      <Card onClick={this.toggleImage}>
        <div>
          <div className="image">
            <img src={this.state.image}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => {
                return stat.name === "hp"
              }).value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
