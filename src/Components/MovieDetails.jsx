import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCasts from '../ApiCalls/getCasts';
import getExternialId from '../ApiCalls/getExternialIds';
import getMovieByExternialId from '../ApiCalls/getMovieByExternialId';
import generateImage from './generateImage';
import PersonProfile from './PersonProfile';

export default function MovieDetails() {
  const { movieId } = useParams()
  
  const [externalId, setExternialId] = useState("");
  const [movie, setMovie] = useState([]);
  const [moviePoster, setMoviePoster] = useState("");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getExternial(){
      setExternialId(await getExternialId(movieId));
      setCast(await getCasts(movieId));
    } 
    getExternial();
  }, [])
  useEffect(() => {
    async function getMovie() {
      externalId != "" && setMovie(await getMovieByExternialId(externalId)); 
    }
    getMovie()
  }, [externalId])

  useEffect(() => {
    setMoviePoster(generateImage("https://image.tmdb.org/t/p/", "h632", movie.poster_path));
    console.log(externalId);
  }, [movie])
  
  return (
  <div key={movieId} style={{display: "flex", paddingLeft: "200px", paddingTop: "100px", flexDirection: "column"}}>
    {movie !== [] &&
      <>
        <div style={{
          display: "flex"
        }}>
          <img src={moviePoster} alt="" />
          <div style={{width: "500px", textAlign: "center", padding: "20px"}}>
            <div style={{width: "80%"}}>
              <h1>{movie.title !== undefined ? movie.title : movie.name}</h1>
              <h4 style={{margin: "0"}}>Overview:</h4>
              <p style={{margin: "0"}}>{movie.overview}</p>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ width: "0"}}>Cast</h1>
          <div>
            {cast.length > 0 &&
              <div style={{
                height: "fit-content",
                width: "1000px",
                display: "flex",
                overflowX: "auto",
                gap: "20px"
              }}>
                {cast.map(person => <PersonProfile person={person} />)}
              </div>
            }
          </div>
        </div>
      </>
    }
  </div>
  )
}
