import React from 'react'
import { Form } from 'semantic-ui-react'


class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event)=>this.props.handleFormSubmit(event,this.state)}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleSubmit} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input  onChange={this.handleSubmit}  fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input  onChange={this.handleSubmit}  fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input  onChange={this.handleSubmit}  fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
