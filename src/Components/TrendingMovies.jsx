import React, { useEffect, useState } from 'react'
import Movie from './Movie'

export default function TrendingMovies({trendingMovies, imageConfig }) {
 

  return (
    <div style={{display: "flex", gap: "100px"}}>
      {trendingMovies.length != 0 &&
        <>
          <div>
            <Movie movie={trendingMovies[0]} imageConfig={imageConfig} imagePath={trendingMovies[0].backdrop_path} imageSize={"w500"} />
          </div>
          <div>
            <Movie movie={trendingMovies[1]} imageConfig={imageConfig} imagePath={trendingMovies[1].backdrop_path} imageSize={"w500"}/>
          </div>
        </>
      }

    </div>
  )
}
