import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCasts from '../ApiCalls/getCasts';
import getExternialId from '../ApiCalls/getExternialIds';
import getMovieByExternialId from '../ApiCalls/getMovieByExternialId';
import getVideos from '../ApiCalls/getVideos';
import generateImage from './generateImage';
import PersonProfile from './PersonProfile';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

export default function MovieDetails() {
  const { movieId } = useParams();
  
  const [externalId, setExternialId] = useState("");
  const [movie, setMovie] = useState([]);
  const [moviePoster, setMoviePoster] = useState("");
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const releaseYear = movie?.release_date ? movie.release_date.slice(0, 4) : "Not found";

  useEffect(() => {
    async function getExternial(){
      setExternialId(await getExternialId(movieId));
      setCast(await getCasts(movieId));
      setVideos(await getVideos(movieId));
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
    movie.poster_path !== undefined && setMoviePoster(generateImage("https://image.tmdb.org/t/p/", "h632", movie.poster_path));
  }, [movie])

  const nextVideo = () => activeVideoIndex < 4 && setActiveVideoIndex(prev => prev + 1);
  const prevVideo = () => activeVideoIndex > 0 && setActiveVideoIndex(prev => prev - 1);
  
  return (
  <div key={movieId}className='scrollbar-hidden' style={{
      display: "flex", 
      height: "90vh",
      paddingLeft: "200px", 
      paddingTop: "100px", 
      paddingRight: "1000px", 
      flexDirection: "column", 
      overflowY: "scroll", 
      overflowX: "hidden"}}>
        
    {movie !== [] &&
      <>
        <div style={{
          display: "flex"
        }}>
          <img src={moviePoster} alt="" />
          <div style={{width: "500px", textAlign: "center", padding: "20px"}}>
            <div style={{width: "80%"}}>
              <h1>{movie.title !== undefined ? movie.title : movie.name}</h1>
              <h3>Release date: {releaseYear}</h3>
              <h4 style={{margin: "0"}}>Overview:</h4>
              <p style={{margin: "0"}}>{movie.overview}</p>
            </div>
          </div>
        </div>
        <div style={{marginTop: "50px"}}>
          <h1 style={{ width: "0"}}>Videos</h1>
          {videos !== "" ? 
            <div >
              <div style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                height: "0"
              }}>
                <iframe style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }} title='Youtube player' width="560" height="315" src={"https://youtube.com/embed/"+videos[activeVideoIndex]+"?autoplay=0"}></iframe>
              </div>
            </div>
            : <p>No videos Aviable</p>
          }
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "80px"}}>
            <BsFillArrowLeftCircleFill className='icons' style={{fontSize: "60px"}} onClick={prevVideo}/>
            <BsFillArrowRightCircleFill className='icons' style={{fontSize: "60px"}}onClick={nextVideo}/>
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
                {cast.map(person => <PersonProfile key={person.id} person={person} />)}
              </div>
            }
          </div>
        </div>
        
        
      </>
    }
  </div>
  )
}
