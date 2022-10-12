import React, { useState } from 'react'
import GenerateImage from './GenerateImage'

export default function Movie({movie, imageConfig}) {
  const moviePoster = imageConfig.base_url + imageConfig.poster_sizes[2] + movie.poster_path;
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
          <div style={{
            userSelect: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>{movie.title}</div>
        }
      </div>
    </div>
  )
}
