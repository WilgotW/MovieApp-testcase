import React, { useEffect, useState } from 'react';
import TrendingMovies from './TrendingMovies';
import getImagesConfig from './ApiCalls/getImagesConfig';
import getTrendingMovies from './ApiCalls/getTrendingMovies';

export default function HomePage() {
  const [imageConfig, setImageConfig] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function setup(){
      setImageConfig(await getImagesConfig());
      setTrendingMovies(await getTrendingMovies())
    }
    setup();
  }, []);
  return (
    <div style={{display: "flex", justifyContent: "center", width: "100%", flexDirection: "column", background: "blue"}}>
      
      <h1>Trending</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <TrendingMovies trendingMovies={trendingMovies} imageConfig={imageConfig}/>
      </div>
    </div>
  )
}
