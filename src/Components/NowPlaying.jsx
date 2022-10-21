import React from 'react'
import Movie from './Movie';

export default function NowPlaying({nowMovies, imageConfig}) {
    const movies = nowMovies !== undefined && nowMovies.slice(0, 7);
  return (
    <div style={{display: "flex", gap: "20px"}}>
      {movies.map((movie) => <Movie key={movie.id} movie={movie} imageConfig={imageConfig} imagePath={movie.poster_path} imageSize={"w185"}/>)}
    </div>
  )
}
