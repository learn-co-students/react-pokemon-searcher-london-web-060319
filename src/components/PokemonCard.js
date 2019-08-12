import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    imageToggle: false
  }

  // componentDidMount = () =>{
  //   setInterval(this.toggleImage, 5000)
  // }

  toggleImage = () => {
    if(this.state.imageToggle === true){
      this.setState({imageToggle: false});
    } else {
      this.setState({imageToggle: true})
    }
  }
  picture = (image) => {
    return(
      <img className="pokePic" alt="oh no!" src={image} />
    )
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
          {!this.state.imageToggle && this.picture(this.props.pokemon.sprites.front)}
          {this.state.imageToggle && this.picture(this.props.pokemon.sprites.back)}
            
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <br />
              Type: {this.props.pokemon.types.join(', ')}
              <br />
              <i className="icon heartbeat red" />
              {/* {this.props.pokemon.stats[(this.props.pokemon.stats.length-1)].value} */}
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
