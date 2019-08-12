import React from 'react'
import { Form } from 'semantic-ui-react'

export default class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
      id: '',
      types: []
    }
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })

  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
      id: '',
      types: []
    })
  }

  typeToOption = (type) => ({
    text: type,
    key: type,
    value: type
  })

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Form.Group widths="equal">
            <Form.Input fluid label="id" placeholder="id" name="id" />
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
            <Form.Dropdown
              label="Type"
              placeholder='Type'
              name="types"
              scrolling
              multiple
              search
              selection
              options={this.props.types.map(type => this.typeToOption(type))}
              onChange={(e, { name, value }) => this.setState({ [name]: value })}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}