import React, { useEffect, useState } from 'react'
import FilterCollection from './FilterCollection'
import Movie from './Movie'
import SearchBar from './SearchBar'

import SwitchPage from './SwitchPage';
import getSearchedMovies from './ApiCalls/getSearchedMovies'
import movieData from './movieData'
import getImagesConfig from './ApiCalls/getImagesConfig'
import getGenreIds from './ApiCalls/getGenreIds';
import getFilteredMovies from './ApiCalls/getFilteredMovies'

export default function DiscoverPage() {
  const [page, setPage] = useState("1");

  const [searchTerm, setSearchTerm] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [genreIds, setGenreIds] = useState([]);


  async function getMovies(){
    if(activeFilter !== ""){
      setActiveFilter("");
      setPage("1");
    }
    setAllMovies(await getSearchedMovies(searchTerm, page));
  }
  useEffect(() => {
    if(allMovies.length > 0) {
      if(activeFilter == ""){
        getMovies();
      }else{
        filteredMovies();
      }      
    }
  }, [page])


  // useEffect(() => {
  //   if(allMovies.length > 0){
  //     console.log(allMovies);
  //     setAllMovies(allMovies.map((movie) => {
  //       movieData(movie.title, movie.genre_ids, movie.release_date, movie.backdrop_path, movie.id, "w780");
  //     }));
  //     // setMovieSize("w780")
  //   }
  // }, [allMovies])
  
  async function filteredMovies(){
    setAllMovies(await getFilteredMovies(activeFilter, genreIds, page));
  }

  useEffect(() => {
    if(activeFilter !== ""){
      setPage("1");
      filteredMovies();
    }
  }, [activeFilter])
 
  useEffect(() => {
    async function getImageConfig(){
      setImageConfig(await getImagesConfig());
      setGenreIds(await getGenreIds());
    }
    getImageConfig();
  }, []);


  // function setMovieSize(size){
  //   setAllMovies(allMovies.map((movie) => {
  //     const addSize = {
  //       ...movie,
  //       imageSize: size
  //     }
  //     return addSize;
  //   }))
  // }
  
  
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
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={getMovies}/>

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
          
          {allMovies.length > 0 && 
            allMovies.map(movie => 
            <Movie 
              key={movie.id} 
              movie={movie} 
            />)
          }      
        </div>
        
      </div>
      
    </div>
  )
}
