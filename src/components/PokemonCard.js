import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

export default class PokemonCard extends Component {
  render() {

  const hp = this.props.stats.find(stat => stat.name === 'hp')

  return (
    <Card>
      <div>
        <div className="image">
          <img alt={this.props.name} src={this.props.sprites.front} />
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
