import React from 'react'
import TrendingMovies from './TrendingMovies'

export default function HomePage({movieInformation}) {
  return (
    <div>
      <h1>Trending</h1>
      <TrendingMovies movieInformation={movieInformation} />
    </div>
  )
}
