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
    <div style={{display: "flex", width: "fit-content", flexDirection: "column", paddingLeft: "50px"}}>
      <h1 style={{width: "0"}}>Trending</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <TrendingMovies trendingMovies={trendingMovies} imageConfig={imageConfig}/>
      </div>
      <h1 style={{width: "fit-content"}}>Now Playing</h1>
      <div >
        {nowMovies.length > 0 &&
          <NowPlaying nowMovies={nowMovies} imageConfig={imageConfig} />
        }
      </div>
      <h1 style={{width: "fit-content"}}>Top Rated</h1>
      <div>
        {ratedMovies.length > 0 &&
          <TopRated ratedMovies={ratedMovies} imageConfig={imageConfig} />
        }
      </div>
    </div>
  )
}
