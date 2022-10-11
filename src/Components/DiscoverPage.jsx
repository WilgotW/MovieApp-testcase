import SearchedMovies from './SearchedMovies'
import React, { useState } from 'react'


export default function DiscoverPage({searchTerm, movieResults}) {
  
  return (
    <div>
      <h1>Discover</h1>
      <p>Searchin For: {searchTerm}</p>
      <SearchedMovies movies={movieResults} />
    </div>
  )
}
