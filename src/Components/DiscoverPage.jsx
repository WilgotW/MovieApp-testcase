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
  const [activeRating, setActiveRating] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeMovieSize, setActiveMovieSize] = useState("w185");
  const sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("load", handleResize, false);
    window.addEventListener("resize", handleResize, false);
    checkSizes()
  })
  
  function checkSizes(){
    if(windowWidth > 2070){
      setActiveMovieSize(sizes[3]);
    }else if(windowWidth > 800){
      setActiveMovieSize(sizes[2]);
    }
    if(windowWidth < 800){
      setActiveMovieSize(sizes[3]);
    }
  }

  async function getMovies(){
    setActiveFilter("")
    searchTerm !== "" && setAllMovies(await getSearchedMovies(searchTerm, page, activeRating));
  }
  async function filteredMovies(){
    setAllMovies(await getFilteredMovies(activeFilter, genreIds, page, activeRating));
  }
  useEffect(() => {
    allMovies.length > 0 && activeFilter == "" ? getMovies() : filteredMovies()
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
 
  useEffect(() => {
    if(activeFilter !== ""){
      filteredMovies()
    }else if(searchTerm !== ""){
      getMovies()
    }
  }, [activeRating])
  //switch page:
  const nextPage = () => setPage(prev => prev + 1)
  const previusPage = () => page > 1 && setPage(prev => prev - 1);
    
  return (
    <div className='scrollbar-hidden' style={{height: "100%", paddingLeft: "50px",overflowY: "scroll", width: "100%", margin: "0", overflowX: "hidden"}}>
      <div style={{width: "100%"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={getMovies}/>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "left"}}>
          <h1 style={{color: "white", width: "0"}}>Discover</h1>
          <div>
            <FilterCollection setActiveFilter={setActiveFilter}/>
          </div>
        </div>
        <div style={{width: "100%"}}>
          <div style={{float: "left", marginBottom: "100px"}}>
            <p>Minimun rating: {activeRating}</p>
            <input type="range" min="0" max="10" value={activeRating} onChange={ev => setActiveRating(ev.target.value)} />
          </div>
        </div>
        <div style={{width: "100%",display: "flex", justifyContent: "space-between", height: "50px"}}>
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", justifyContent: "space-between", width: "95%"}}>
              {page !== 1 ?
                <SwitchPage page={previusPage} name={"Previus Page"}/>
                : <div style={{width: "30px", height: "30px"}}></div>
              }
              
              {allMovies.length >= 20 ? 
                <>
                  <p style={{fontSize: "20px", margin: "0", fontWeight: "500"}}>Page: {page}</p>
                  <SwitchPage page={nextPage} name={"Next Page"}/>
                </>
                : <div style={{width: "30px", height: "30px"}}></div>
              } 
            </div>
          </div>
        </div>
        <div className='center' >
          {allMovies.length === 0 && 
            <div style={{color: "red"}}>No Results Found</div>
          }
          <div className='movie-grid'>
            {allMovies.length > 0 && 
              allMovies.map(movie => 
              <Movie 
                key={movie.id} 
                movie={movie} 
                imageSize={activeMovieSize}
                imagePath={movie.poster_path}
              />)
            }
          </div>
        </div>
        </div>
      </div>
    </div>
    
  )
}
