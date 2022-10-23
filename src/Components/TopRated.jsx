import React from 'react'
import Movie from './Movie';
export default function TopRated({ratedMovies, imageConfig, imageSize}) {
    const movies = ratedMovies.slice(0, 7);
  return (
    <div className='movie-grid'>
      {movies.map((movie) => <Movie key={movie.id} movie={movie} imageConfig={imageConfig} imagePath={movie.poster_path} imageSize={imageSize} />)}
    </div>
  )
}
