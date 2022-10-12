import React, { useState } from 'react'
import FilterButton from './FilterButton';

export default function FilterCollection({setActiveFilter}) {
    const genres = [
      {name: "Action"},
      {name: "Science fiction"},
      {name: "Adventure"},
      {name: "Fantasy"},
      {name: "War"},
      {name: "Animation"},
      {name: "Drama"},
      {name: "Horor"}
    ]
    function setFilter (filter){
      setActiveFilter(filter);
    }
  return (
    <div style={{display: "flex", justifyContent: "left", gap: "20px", marginLeft: "40px", marginBottom: "100px"}}>
      {genres.map(genre => <FilterButton name={genre.name} setFilter={setFilter}/>)}
    </div>
  )
}
