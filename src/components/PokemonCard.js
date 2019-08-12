import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

const colorMap = {
  poison: 'purple',
  grass: 'green',
  fire: 'red',
  bug: 'olive',
  electric: 'yellow',
  water: 'blue',
  fairy: 'pink',
  normal: 'grey',
  ground: 'brown',
  fighting: 'teal',
  dragon: 'orange',
  ghost: 'violet'
}

export default class PokemonCard extends Component {
  state = {
    showFront: true
  }

  toggleFrontState = () => this.setState({ showFront: !this.state.showFront })

  render() {
  const hp = this.props.stats.find(stat => stat.name === 'hp')
  const { front, back } = this.props.sprites
  const type = this.props.types
  const color = colorMap[type] || 'black'



  return (
    <Card onClick={this.toggleFrontState} color={color}>
      <div>
        <div className="image">
          <img alt={this.props.name} src={this.state.showFront ? front : back} />
        </div>
        <div className="content">
          <div className="header">{this.props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp.value} hp
            </span>
        </div>
      </div>
    </Card>
  )
}
}
