import React from 'react'
import Movie from './Movie';
export default function NowPlaying({nowMovies, imageConfig, imageSize}) {
  const movies = nowMovies !== undefined && nowMovies.slice(0, 7);
  return (
    <div className='movie-grid' >
      {movies.map((movie) => <Movie key={movie.id} movie={movie} imageConfig={imageConfig} imagePath={movie.poster_path} imageSize={imageSize}/>)}
    </div>
  )
}
