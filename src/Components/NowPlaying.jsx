import React, { useEffect } from 'react'
import Movie from './Movie';

export default function NowPlaying({nowMovies, imageConfig}) {
    
    const movies = nowMovies.slice(0, 7);
    console.log(movies);
  return (
    <div style={{display: "flex", gap: "20px"}}>
        {movies.map((movie) => <Movie movie={movie} imageConfig={imageConfig} imagePath={movie.poster_path} imageSize={"w185"} />)}
    </div>
    
  )
}
