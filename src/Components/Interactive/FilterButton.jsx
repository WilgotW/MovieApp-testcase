import React, { useState } from 'react'

export default function FilterButton({genre, setFilter}) {
  return (
    <div>
      <button className={genre.active ? "filter-selected": "filter-buttons"} onClick={() => {
        setFilter(genre.name, genre.id)
      }}>{genre.name}</button>
    </div>
  )
}
