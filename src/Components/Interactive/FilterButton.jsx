import React from 'react'

export default function FilterButton({name, setFilter}) {
  return (
    <div>
      <button className='filter-buttons' onClick={() => setFilter(name)}>{name}</button>
    </div>
  )
}
