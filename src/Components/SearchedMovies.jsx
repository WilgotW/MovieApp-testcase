import React, { useState } from 'react'
import Movie from '../Components/Movie'

export default function SearchedMovies({movies}) {
  console.log("is: " + movies)
  return (
    <>
      <div className='discover-grid'>   
        {/* {movies.lenght > 0 ? movies.map(movie => <Movie movie={movie}></Movie>) : <p>Search For Movies!</p>} */}
      </div>
    </>
  )
}
