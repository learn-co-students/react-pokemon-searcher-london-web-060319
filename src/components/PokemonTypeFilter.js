import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default function PokemonTypeFilter({ filterOption, filterOptions, handleChange, changeTypeFilter }) {
  return (
    <div>
      <Form>
        <Form.Field>
          Selected type: <b>{filterOption}</b>
        </Form.Field>
        <Form.Field>
          {
            filterOptions.map(type =>
              
              <Checkbox
                radio
                label={type}
                name='checkboxRadioGroup'
                value={type}
                checked={type === filterOption}
                onChange={(e, {value}) => handleChange(value)}
              />
            )
          }
        </Form.Field>
      </Form>
    </div>
  )
}
