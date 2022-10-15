import React from 'react'
import Movie from './Movie';
export default function TopRated({ratedMovies, imageConfig}) {
    const movies = ratedMovies.slice(0, 7);
  return (
    <div style={{display: "flex", gap: "20px"}}>
      {movies.map((movie) => <Movie movie={movie} imageConfig={imageConfig} imagePath={movie.poster_path} imageSize={"w185"} />)}
    </div>
  )
}
