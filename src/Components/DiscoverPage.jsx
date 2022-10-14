import React, { useEffect, useState } from 'react'
import FilterCollection from './FilterCollection'
import Movie from './Movie'
import SwitchPage from './SwitchPage'
import SearchBar from './SearchBar'
import GenerateImage from './GenerateImage'
import FetchMovies from './FetchMovies'
import SearchForMovies from './SearchForMovies'

export default function DiscoverPage() {
  const [page, setPage] = useState("1")
  const [genreIds, setGenreIds] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageConfig, setImageConfig] = useState([]);

  useEffect(() => {
    activeFilter !== "" && searchMovies();
  }, [activeFilter])
 
  useEffect(() => {
    async function getImages(){
      const respone = await FetchMovies({type: "config"});
      setImageConfig(await respone);
    }
    async function getGenreIds(){
      const response = await FetchMovies({type: "genres"});
      setGenreIds(await response);
    }
    getImages()
    getGenreIds()
  }, [])
  
  async function searchMovies(){
    const response = await FetchMovies({
      type: activeFilter,
      searchTerm: searchTerm,
      filter: activeFilter
    });
    setMovies(await response);
  }

  function nextPage(){
    let pageNumber = parseInt(page);
    pageNumber++;
    setPage(pageNumber.toString());
  }
  function previusPage(){
    let pageNumber = parseInt(page);
    if(pageNumber > 1){
      pageNumber--;
      setPage(pageNumber.toString());
    }
  }
  return (
    <div style={{width: "100%", position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies}/>

      <div style={{display: "flex", flexDirection: "column", justifyContent: "left", paddingLeft: "150px"}}>
        <h1 style={{color: "white", width: "0"}}>Discover</h1>
        <div>
          <FilterCollection setActiveFilter={setActiveFilter}/>
        </div>
      </div>
      <div className='center'>
        <SwitchPage page={previusPage} name={"Previus Page"}/>
        {page}
        <SwitchPage page={nextPage} name={"Next Page"}/>
      </div>
      
      <div className='center'>
        <div className='discover-grids'>
          
          {movies.length > 0 && 
            movies.map(movie => 
            <Movie 
              key={movie.id} 
              movie={movie} 
              imageConfig={imageConfig.images}
            />)
          }      
        </div>
        
      </div>
      
    </div>
  )
}
