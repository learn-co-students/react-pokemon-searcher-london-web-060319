import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function PokemonTypeFilter({ filterOption, filterOptions, handleChange }) {
  return (
    <div>
      <Form>
        <div className="ui buttons">
          {
            filterOptions.map(type =>
              <Button
                key={type}
                className={`${type} ${filterOption === type ? 'selected' : ''}`}
                onClick={(e, { value }) => handleChange(type)}
              >{type}</Button>
            )
          }
        </div>
        {
          filterOption ?
            <Form.Field>
              Selected type: <b>{filterOption}</b>
            </Form.Field> : <Form.Field />
        }
      </Form>
    </div>
  )
}
