import React from 'react'

const SearchBox = ({ onQuery, value }) => {
  return <input
    onChange={event => onQuery(event.target.value)}
    value={value}
    type="text"
    placeholder="Search contacts..."
  />
}

export default SearchBox
