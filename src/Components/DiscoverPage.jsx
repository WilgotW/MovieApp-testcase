import React, { useEffect, useState } from 'react'
import FilterCollection from './FilterCollection'
import Movie from './Movie'
import SearchBar from './Interactive/SearchBar'

import SwitchPage from './Interactive/SwitchPage';
import getSearchedMovies from '../ApiCalls/getSearchedMovies'
import getImagesConfig from '../ApiCalls/getImagesConfig'
import getGenreIds from '../ApiCalls/getGenreIds';
import getFilteredMovies from '../ApiCalls/getFilteredMovies'

export default function DiscoverPage() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [genreIds, setGenreIds] = useState([]);
  const [noResults, setNoResults] = useState(false);

  async function getMovies(){
    setActiveFilter("")
    searchTerm != "" && setAllMovies(await getSearchedMovies(searchTerm, page, setNoResults));
  }
  async function filteredMovies(){
    setAllMovies(await getFilteredMovies(activeFilter, genreIds, page));
  }
  useEffect(() => {
    if(allMovies.length > 0) {
      activeFilter == "" ? getMovies() : filteredMovies()
    }else {
      setNoResults(true)
    }
  }, [page])
  
  useEffect(() => {
    async function getImageConfig(){
      setImageConfig(await getImagesConfig());
      setGenreIds(await getGenreIds());
    }
    getImageConfig();
  }, []);
  
  useEffect(() => {
    if(page != 1){
      setPage(1);
    }else {
      filteredMovies();
    }
  }, [activeFilter])
 
  function nextPage(){
    setPage(prev => prev + 1);
  }
  function previusPage(){
    if(page > 1){
      setPage(prev => prev - 1);
    }
  }
  return (
    <div style={{display:"flex", justifyContent: "center", paddingLeft: "50px"}}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={getMovies}/>

      <div style={{display: "flex", flexDirection: "column", justifyContent: "left", }}>
        <h1 style={{color: "white", width: "0"}}>Discover</h1>
        <div>
          <FilterCollection setActiveFilter={setActiveFilter}/>
        </div>
      </div>
      <div style={{width: "100%",display: "flex", justifyContent: "space-between", height: "50px"}}>
        <SwitchPage page={previusPage} name={"Previus Page"}/>
        <p style={{fontSize: "20px", margin: "0", fontWeight: "500"}}>Page: {page}</p>
        <SwitchPage page={nextPage} name={"Next Page"}/>
      </div>
      
      <div className='center'>
        {noResults ? <div style={{color: "red"}}>No Results Found</div> : <div className='discover-grids'>
          {allMovies.length > 0 && 
            allMovies.map(movie => 
            <Movie 
              key={movie.id} 
              movie={movie} 
              imageSize={"w185"}
              imagePath={movie.poster_path}
            />)
          }</div>
        }      
          
      </div>
      </div>
    </div>
    
  )
}
