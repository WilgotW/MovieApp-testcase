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
  const [searchType, setSearchType] = useState("");

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
  // useEffect(() => {
  //   SearchForMovies(type, movieInformation)
  // }, [searchType])
  const movieInformation = {
    type: searchType,
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
  
  return (
    <Router>
      <div className="App" style={{display: "flex"}}>
        <Navbar />
        <div>
            <Routes>
              <Route exact path='/' element={<HomePage movieInformation={movieInformation} />} />
              <Route path='/discover' element={<DiscoverPage/>}/>
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
