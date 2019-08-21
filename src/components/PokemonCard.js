import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
 constructor() {
   super()
   this.state = {
     imgPosition: 'front'
   }
 }
 switchImgPosition = () => {
   this.setState({
     imgPosition: this.state.imgPosition === 'front' ? 'back' : 'front'
   })
 }

  render() {
    let { name, sprites, hp, types } = this.props
    return (
      <Card onClick={() => this.switchImgPosition()}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.imgPosition === 'front' ? sprites.front : sprites.back} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
           <p>{types}</p>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
