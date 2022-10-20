import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getExternialId from '../ApiCalls/getExternialIds';
import getMovieByExternialId from '../ApiCalls/getMovieByExternialId';
import generateImage from './generateImage';

export default function MovieDetails() {
  const { movieId } = useParams()
  
  const [externalId, setExternialId] = useState("");
  const [movie, setMovie] = useState([]);
  const [moviePoster, setMoviePoster] = useState("");

  useEffect(() => {
    async function getExternial(){
      setExternialId(await getExternialId(movieId));
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
    setMoviePoster(generateImage("https://image.tmdb.org/t/p/", "w185", movie.poster_path));
    console.log(movie);
  }, [movie])
  
  return (
  <div key={movieId}>
    {movie !== [] &&
      <div>
        <p>{movie.title !== undefined ? movie.title : movie.name}</p>
        <img src={moviePoster} alt="" />
      </div>
    }
  </div>
  )
}
