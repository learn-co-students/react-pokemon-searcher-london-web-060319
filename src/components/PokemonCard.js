import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
state = {
  flipToBack: false
}
  
  render() {
    return (
      <Card onClick={() => this.setState({flipToBack: !this.state.flipToBack})}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.flipToBack ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
