import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true,
  }


  togglePokemonCard = () => {
    this.setState({ front : !this.state.front })
  }
  
  render() {
    const { poke } = this.props
    const hpObj = poke.stats.find(stat => stat.name === "hp")
    
    return (
      
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onClick={ this.togglePokemonCard } src={this.state.front ? poke.sprites.front : poke.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
