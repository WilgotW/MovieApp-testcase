import React from 'react'
import Movie from './Movie'

export default function TrendingMovies({trendingMovies, imageConfig, imageSize }) {
  return (
    <div className='trending-movies'>
      {trendingMovies.length > 0 &&
        <>
          <div style={{width: "fit-content"}}>
            <Movie movie={trendingMovies[0]} imageConfig={imageConfig} imagePath={trendingMovies[0].backdrop_path} imageSize={imageSize}/>
          </div>
          <div style={{width: "fit-content"}}>
            <Movie movie={trendingMovies[1]} imageConfig={imageConfig} imagePath={trendingMovies[1].backdrop_path} imageSize={imageSize}/>
          </div>
        </>
      }
    </div>
  )
}
