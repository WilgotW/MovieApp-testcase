import React from 'react'
import GenerateImage from './GenerateImage'

export default function Movie({movie, imageConfig}) {
  const moviePoster = imageConfig.base_url + imageConfig.poster_sizes[2] + movie.poster_path;
  return (
    <div style={{width: "fit-content"}}>
      <div style={{position:"absolute", display: "flex", alignItems: "center", height: "100%"}}>

        {/* <div style={{color: "white"}}>{movie.title}</div> */}
      </div>
      {/* <p>popularity: {movie.popularity}</p>
      <p>release date: {movie.release_date}</p> */}
      <img 
        src={moviePoster}
        className="movie-poster"
      ></img>
    </div>
  )
}
