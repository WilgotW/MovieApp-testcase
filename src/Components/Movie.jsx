import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import GenerateImage from './GenerateImage'

export default function Movie({ movie, imageSize, imagePath }) {
  // useParams
  const moviePoster = GenerateImage("https://image.tmdb.org/t/p/", imageSize, imagePath);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div onClick={() => {
      
    }}style={{ background: imagePath == undefined && "orange", textAlign: "center" }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div style={{
        position: "relative",
        textAlign: "center",
        color: "white"
      }}>
        <Link to={"/movies/"+movie.id}>{movie.title}</Link> 
        {imagePath != undefined ?
          <img
            src={moviePoster}
            className="movie-poster"
          ></img> : <div style={{ background: "orange", width: "100%", height: "100%" }}></div>
        }


        {isHovering &&
          <>
            {imagePath != undefined ?
              <section style={{
                pointerEvents: "none",
                fontWeight: "600",
                width: "100%",
                userSelect: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}> {movie.title != undefined ? movie.title : movie.name} <br /> <p style={{ fontWeight: "200", margin: "0" }}> {movie.release_date != undefined ? movie.release_date : movie.first_air_date}</p>
              </section> : <div style={{}}>{movie.title != undefined ? movie.title : movie.name}</div>
            }
          </>
        }
      </div>
    </div>
  )
}
