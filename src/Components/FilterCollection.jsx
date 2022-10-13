import React, { useState } from 'react'
import FilterButton from './FilterButton';

export default function FilterCollection({setActiveFilter}) {
    const genres = [
      {name: "Action", id: 1},
      {name: "Science fiction", id: 2},
      {name: "Adventure", id: 3},
      {name: "Fantasy", id: 4},
      {name: "War", id: 5},
      {name: "Animation", id: 6},
      {name: "Drama", id: 7},
      {name: "Horor", id: 8}
    ]
    const setFilter = (filter) =>{
      filter.preventDefault();
      setActiveFilter(filter);
    }
  return (
    <div style={{display: "flex", justifyContent: "left", gap: "20px", marginBottom: "100px"}}>
      {genres.map(genre => <FilterButton key={genre.id} name={genre.name} setFilter={setFilter}/>)}
    </div>
  )
}
