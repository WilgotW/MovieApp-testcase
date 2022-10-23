import React, { useEffect, useState } from 'react'
import FilterButton from './Interactive/FilterButton';

export default function FilterCollection({setActiveFilter}) {
    const [genres, setGenres] = useState([
      {name: "Action", id: 1, active: false},
      {name: "Science fiction", id: 2, active: false },
      {name: "Adventure", id: 3, active: false},
      {name: "Fantasy", id: 4, active: false},
      {name: "War", id: 5, active: false},
      {name: "Animation", id: 6, active: false},
      {name: "Drama", id: 7, active: false},
      {name: "Horror", id: 8, active: false}
    ])
    const setFilter = (filter, genreId) =>{
      setActiveFilter(filter);
      const newGenres = [...genres];
      for (let i = 0; i < newGenres.length; i++) {
        newGenres[i].active = false;
      }
      newGenres[genreId-1].active = true;
      setGenres([...newGenres]);
    }
    const resetActiveGenres = () => {
      setActiveFilter("");
      const newGenres = [...genres];
      for (let i = 0; i < newGenres.length; i++) {
        newGenres[i].active = false;
      }
      setGenres([...newGenres]);
    }
    // useEffect(() => {
    //   searchTerm !== "" && resetActiveGenres()
    // }, [searchTerm])

  return (
    <div className='filter-button-collection' >
      {genres.map(genre => <FilterButton key={genre.id} genre={genre} setFilter={setFilter}/>)}
    </div>
  )
}
