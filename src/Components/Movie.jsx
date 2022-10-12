import React, { useState } from 'react'
import GenerateImage from './GenerateImage'

export default function Movie({movie, imageConfig}) {
  const moviePoster = GenerateImage(imageConfig.base_url, imageConfig.poster_sizes[2], movie.poster_path);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div style={{width: "fit-content"}} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div style={{
        position: "relative",
        textAlign: "center",
        color: "white"
        }}>
        <img 
          src={moviePoster}
          className="movie-poster"
        ></img>
        {isHovering &&
          <section style={{
            pointerEvents: "none",
            fontWeight: "600",
            width: "100%",
            userSelect: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}>{movie.title} <br/> <p style={{fontWeight: "200", margin: "0"}}> {movie.release_date}</p> </section>
        }
      </div>
    </div>
  )
}
