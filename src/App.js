import './App.css';
import DiscoverPage from './Components/DiscoverPage';
import SearchBar from './Components/SearchBar';
import React, { useEffect, useReducer, useState } from 'react'
import SearchForMovies from './Components/SearchForMovies';
import LeftSideBar from './Components/LeftSideBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    SearchForMovies("config", setImageConfig);
    SearchForMovies("genres", setGenreIds);
  }, [])
  useEffect(() => {
    activeFilter != "" && SearchForMovies("filter", setMovies, searchTerm, activeFilter, genreIds)
  }, [activeFilter])

  const movieInformation = {
    searchTerm: searchTerm,
    movies: movies,
    imageConfig: imageConfig,
    filter: activeFilter,
    genreIds: genreIds
  }
  function searchMovies(){
    SearchForMovies("movies", setMovies, searchTerm, activeFilter, genreIds)
  }
  return (
    <div className="App" style={{display: "flex"}}>
      <LeftSideBar />
      <div>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies}/>
        <DiscoverPage movieInformation={movieInformation} setActiveFilter={setActiveFilter}/>
      </div>
    </div>
  );
}

export default App;
