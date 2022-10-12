import React, { useState } from 'react'
import FilterCollection from './FilterCollection'
import Movie from './Movie'

export default function DiscoverPage({movieInformation}) {
  return (
    <div style={{width: "100%"}}>
      <div style={{width: "100%", display: "flex", color: "white", justifyContent: "left"}}>
        <h1 style={{marginLeft: "40px", marginBottom: "30px"}}>Discover</h1>
      </div>

      <FilterCollection />
      
      <div className='center'>
        <div className='discover-grids'>
          {movieInformation.movies.length > 0 && 
            movieInformation.movies[0].map(movie => 
            <Movie 
              key={movie.id} 
              movie={movie} 
              imageConfig={movieInformation.imageConfig[0].images}
            />)
          }      
        </div>
      </div>
      
    </div>
  )
}
