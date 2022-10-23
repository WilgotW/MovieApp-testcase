import React, { useEffect, useState } from 'react';
import TrendingMovies from './TrendingMovies';
import getImagesConfig from '../ApiCalls/getImagesConfig';
import getTrendingMovies from '../ApiCalls/getTrendingMovies';
import NowPlaying from './NowPlaying';
import getNowPlaying from '../ApiCalls/getNowPlaying';
import getTopRated from '../ApiCalls/getTopRated';
import TopRated from './TopRated';

export default function HomePage() {
  const [imageConfig, setImageConfig] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeMovieSize, setActiveMovieSize] = useState("w185");
  const [activeTrendingMovieSize, setActiveTrendingMovieSize] = useState("w780")
  const sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
  const trendingSizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780'];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("load", handleResize, false);
    window.addEventListener("resize", handleResize, false);
    checkSizes()
  })
  
  function checkSizes(){
    if(windowWidth > 1870){
      setActiveTrendingMovieSize(trendingSizes[5]);
    }
    if(windowWidth < 1870){
      setActiveTrendingMovieSize(trendingSizes[4]);
    }
    
    if(windowWidth > 800){
      setActiveMovieSize(sizes[2]);
      
    }
    if(windowWidth < 800){
      setActiveMovieSize(sizes[3]);
      setActiveTrendingMovieSize(trendingSizes[3])
    }
  }

  useEffect(() => {
    async function setup(){
      setImageConfig(await getImagesConfig());
      setTrendingMovies(await getTrendingMovies());
      setNowMovies(await getNowPlaying());
      setRatedMovies(await getTopRated());
    }  
    setup();
  }, []);
 
  return (
    <div style={{display: "flex", width: "fit-content", flexDirection: "column", paddingLeft: "50px", marginBottom: "500px", height: "100%"}}>
      <div className='scrollbar-hidden' style={{overflowY: "scroll", overflowX: "hidden", boxSizing: "content-box"}}>
        <h1 style={{width: "0"}}>Trending</h1>
        <div>
          {trendingMovies.length > 0 &&
            <TrendingMovies trendingMovies={trendingMovies} imageConfig={imageConfig} imageSize={activeTrendingMovieSize}/>
          }
        </div>
        <h1 style={{width: "fit-content"}}>Now Playing</h1>
        <div >
          {nowMovies.length > 0 &&
            <NowPlaying nowMovies={nowMovies} imageConfig={imageConfig} imageSize={activeMovieSize}/>
          }
        </div>
        <h1 style={{width: "fit-content"}}>Top Rated</h1>
        <div>
          {ratedMovies !== [] &&
            <TopRated ratedMovies={ratedMovies} imageConfig={imageConfig} imageSize={activeMovieSize}/>
          }
        </div>
      </div>
    </div>
  )
}
