import React, { useEffect, useState } from 'react'
import FilterCollection from './FilterCollection'
import Movie from './Movie'
import SearchBar from './SearchBar'

import getSearchedMovies from './ApiCalls/getSearchedMovies'
import movieData from './movieData'
import getImagesConfig from './ApiCalls/getImagesConfig'

export default function DiscoverPage() {
  const [page, setPage] = useState("1");

  // const [newMovies, setNewMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState([]);

  async function getMovies(){
    setAllMovies(await getSearchedMovies(searchTerm))
    
    setAllMovies(await allMovies.map((movie) => {
      return movieData(movie.title, movie.genre_ids, movie.release_date, movie.backdrop_path, movie.id);
    }));
    console.log(allMovies)
  }
  
 
  useEffect(() => {
    async function imageConfig(){
      const imageCon = await getImagesConfig()
      setImageConfig(imageCon);
      // setMovieSize(await imageCon.poster_sizes[2])
    }
    imageConfig();
  }, []);

  // useEffect(() => {

  // }, [allMovies])

  function setMovieSize(size){
    setAllMovies(allMovies.map((movie) => {
      const addSize = {
        ...movie,
        imageSize: size
      }
      return addSize;
    }))
  }
  


  // 
  // const [genreIds, setGenreIds] = useState([]);
  // const [activeFilter, setActiveFilter] = useState("");
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [imageConfig, setImageConfig] = useState([]);

  
  // useEffect(() => {
  //   activeFilter !== "" && searchMovies();
  // }, [activeFilter])
 
  // useEffect(() => {
  //   async function getImages(){
  //     const respone = await FetchMovies({type: "config"});
  //     setImageConfig(await respone);
  //   }
  //   async function getGenreIds(){
  //     const response = await FetchMovies({type: "genres"});
  //     setGenreIds(await response);
  //   }
  //   getImages()
  //   getGenreIds()
  // }, [])
  
  // async function searchMovies(){
  //   const response = await getApiResponse({
  //     type: activeFilter,
  //     searchTerm: searchTerm,
  //     filter: activeFilter
  //   });
  //   setMovies(await response);
  // }
  
  // function nextPage(){
  //   let pageNumber = parseInt(page);
  //   pageNumber++;
  //   setPage(pageNumber.toString());
  // }
  // function previusPage(){
  //   let pageNumber = parseInt(page);
  //   if(pageNumber > 1){
  //     pageNumber--;
  //     setPage(pageNumber.toString());
  //   }
  // }
  return (
    <div style={{width: "100%", position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={getMovies}/>

      <div style={{display: "flex", flexDirection: "column", justifyContent: "left", paddingLeft: "150px"}}>
        <h1 style={{color: "white", width: "0"}}>Discover</h1>
        <div>
          {/* <FilterCollection setActiveFilter={setActiveFilter}/> */}
        </div>
      </div>
      <div className='center'>
        {/* <SwitchPage page={previusPage} name={"Previus Page"}/>
        {page}
        <SwitchPage page={nextPage} name={"Next Page"}/> */}
      </div>
      
      <div className='center'>
        <div className='discover-grids'>
          
          {allMovies.length > 0 && 
            allMovies.map(movie => 
            <Movie 
              key={movie.id} 
              movie={movie} 
              imageConfig={imageConfig}
            />)
          }      
        </div>
        
      </div>
      
    </div>
  )
}
