import React, { useState } from 'react'
import GenerateImage from './GenerateImage'

export default function Movie({movie, imageSize, imagePath}) {
  const moviePoster = GenerateImage("https://image.tmdb.org/t/p/", imageSize, imagePath);
  const [isHovering, setIsHovering] = useState(false);
  console.log(movie)
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
          }}> {movie.title != undefined ? movie.title : movie.name} <br/> <p style={{fontWeight: "200", margin: "0"}}> {movie.release_date != undefined ? movie.release_date : movie.first_air_date}</p> </section>
        }
      </div>
    </div>
  )
}
