import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    showBack:false 
  }

  toggleCard=()=>{
   this.setState({showBack: !this.state.showBack})
  }

  render() {  
    return (
  
      <Card>
        <div onClick={this.toggleCard}>
          <div className="image">
    
            { this.state.showBack ? <img src={this.props.pokemon.sprites.back} alt="oh no!" /> : <img src={this.props.pokemon.sprites.front} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>

        </div>
      </Card>
    )
  }
}

export default PokemonCard
