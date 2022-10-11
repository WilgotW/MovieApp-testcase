import React from 'react'

export default function Movie({movie}) {
  return (
    <div style={{background: "red", padding: "1rem", margin: "40px"}}>
      <h3>{movie.title}</h3>
      <p>popularity: {movie.popularity}</p>
      <p>release date: {movie.release_date}</p>
    </div>
  )
}
