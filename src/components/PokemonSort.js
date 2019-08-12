import React from 'react'

export default function PokemonSort({ sortOptions, changeSort, sortOption }) {
  return (
    <React.Fragment>
      <select onChange={e => changeSort(e.target.value)}>
        {
          sortOptions.map(option => <option selected={sortOption === option} value={option}>{option}</option>)
        }
      </select>
    </React.Fragment>
  )
}
