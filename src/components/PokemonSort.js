// import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

// export default function PokemonSort({ sortOptions, changeSort, sortOption }) {

//   const typeToOption = (type) => ({
//     text: type,
//     key: type,
//     value: type
//   })

//   return (
//       <Dropdown 
//       placeholder='Sort'
//       onChange={e => changeSort(e.target.value)}
//       selection
//       options={sortOptions.map(type => this.typeToOption(type))}
//       />
//   )
// }

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
