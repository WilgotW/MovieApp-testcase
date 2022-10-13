import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DiscoverPage from './Components/DiscoverPage';
import SearchBar from './Components/SearchBar';
import React, { useEffect, useReducer, useState } from 'react'
import SearchForMovies from './Components/SearchForMovies';
import LeftSideBar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [page, setPage] = useState("1");

  useEffect(() => {
    SearchForMovies("config", setImageConfig);
    SearchForMovies("genres", setGenreIds);
    SearchForMovies("trending", setTrendingMovies);
  }, [])
  useEffect(() => {
    filterSearch()
  }, [activeFilter])
  useEffect(() => {
    console.log(activeFilter)
    if(parseInt(page) != 0 && movieInformation.searchTerm != ""){
      searchMovies();
    }else{
      filterSearch();
    }
  }, [page])
  function filterSearch(){
    activeFilter != "" && SearchForMovies("filter", setMovies, "", activeFilter, genreIds, page)
  }

  const movieInformation = {
    page: page,
    searchTerm: searchTerm,
    movies: movies,
    trendingMovies: trendingMovies,
    imageConfig: imageConfig,
    filter: activeFilter,
    genreIds: genreIds
  }
  function searchMovies(){
    SearchForMovies("movies", setMovies, searchTerm, activeFilter, genreIds, page)
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
    <Router>
      <div className="App" style={{display: "flex"}}>
        <Navbar />
        <div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies}/>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/discover' element={<DiscoverPage movieInformation={movieInformation} setActiveFilter={setActiveFilter} page={page} nextPage={nextPage} previusPage={previusPage}/>}/>
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
