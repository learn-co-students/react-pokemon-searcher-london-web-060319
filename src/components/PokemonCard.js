import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  clickImage = () => {
    console.log("clicked")
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    const {name, sprites, stats} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickImage}>
            <img src={this.state.front ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(elem => elem.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
