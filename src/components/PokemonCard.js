import React, { Component } from 'react'
import { Card, Button, Image } from 'semantic-ui-react'



export default class PokemonCard extends Component {
  state = {
    showFront: true,
    showData: false
  }

  toggleFrontState = () => this.setState({ showFront: !this.state.showFront })
  toggleMoreData = () => this.setState({ showData: !this.state.showData })
  titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

  render() {
    
    const health = this.props.stats.find(stat => stat.name === 'hp')
    const attack = this.props.stats.find(stat => stat.name === 'attack')
    const defense = this.props.stats.find(stat => stat.name === 'defense')
    const specialDefense = this.props.stats.find(stat => stat.name === 'special-defense')
    const speed = this.props.stats.find(stat => stat.name === 'speed')
    const specialAttack = this.props.stats.find(stat => stat.name === 'special-attack')


    const HP = health.value

    const { front, back } = this.props.sprites
    const type = this.props.types[0]

    const name = this.titleCase(this.props.name)

    return (
      <Card className={type} >
      <div>
      <Button floated='right' circular icon='delete' onClick={this.props.deletePokemon} />
      </div>
        {this.state.showData ?
          <div onClick={this.toggleMoreData} >
            <div className="header">{name}</div>
            <div className="extra content" >
              <div>
                <i className="icon heartbeat red" />
                {HP} hp
            </div>
              <div>
                <i className="icon certificate orange" />
                {attack.value} atk
            </div>
              <div>
                <i className="icon shield yellow" />
                {defense.value} def
            </div>
            <div>
                <i className="icon certificate blue" />
                {specialAttack.value} sp.atk
            </div>
              <div>
                <i className="icon shield green" />
                {specialDefense.value} sp.def
            </div>
              <div>
                <i className="icon lightning pink" />
                {speed.value} spd
            </div>
            </div>
          </div>
          :
          <div>

              <Image centered ui={false} className="ui small image" onClick={this.toggleFrontState} alt={name} src={this.state.showFront ? front : back} />

            <div className="content" onClick={this.toggleMoreData}>
              <div className="header"  >{name}</div>
            </div>
          </div>
        }
      </Card>
    )
  }
}
