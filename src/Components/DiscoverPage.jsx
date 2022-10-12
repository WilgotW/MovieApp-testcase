import React, { useState } from 'react'
import Movie from './Movie'

export default function DiscoverPage({movieInformation}) {
  return (
    <div>
      <h1>Discover</h1>
      <p>Searchin For: {movieInformation.searchTerm}</p>
      <div className='center'>
        <div className='discover-grids'>
          {movieInformation.movies.length > 0 ? 
            movieInformation.movies[0].map(movie => 
            <Movie 
              key={movie.id} 
              movie={movie} 
              imageConfig={movieInformation.imageConfig[0].images}
            />) 
            : <p>Search For Movies!</p>}      
        </div>
      </div>
    </div>
  )
}
