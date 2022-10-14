import React, { useEffect, useState } from 'react'
import GenerateImage from './GenerateImage'
import Movie from './Movie'

export default function TrendingMovies({movieInformation, imageConfig }) {
   
  return (
    <div style={{display: "flex"}}>
      {movieInformation.movies.length > 0 &&
        <>
          <Movie movie={movieInformation.trendingMovies[0]} imageConfig={imageConfig} />
          <Movie movie={movieInformation.trendingMovies[1]} imageConfig={imageConfig} />
        </>
      }

    </div>
  )
}
