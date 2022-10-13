import React, { useState } from 'react'
import FilterCollection from './FilterCollection'
import Movie from './Movie'
import SwitchPage from './SwitchPage'

export default function DiscoverPage({movieInformation, setActiveFilter, page, nextPage, previusPage}) {
  return (
    <div style={{width: "100%", position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      {/* <div style={{width: "100%", paddingLeft: "400px"}}></div> */}
      <div style={{display: "flex", flexDirection: "column", justifyContent: "left", paddingLeft: "150px"}}>
        <h1 style={{color: "white", width: "0"}}>Discover</h1>
        <div>
          <FilterCollection setActiveFilter={setActiveFilter}/>
        </div>
      </div>
      <div className='center'>
        <SwitchPage page={previusPage} name={"Previus Page"}/>
        {page}
        <SwitchPage page={nextPage} name={"Next Page"}/>
      </div>
      
      <div className='center'>
        {movieInformation != undefined

        }
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
