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
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    SearchForMovies("config", setImageConfig, "", "");
    SearchForMovies("genres", "", "", "");
  }, [])

  const movieInformation = {
    searchTerm: searchTerm,
    movies: movies,
    imageConfig: imageConfig,
    filter: activeFilter
  }
  function searchMovies(){
    SearchForMovies("movies", setMovies, searchTerm, activeFilter)
  }
  return (
    <div className="App" style={{display: "flex"}}>
      <LeftSideBar />
      <div>
        {activeFilter}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies}/>
        <DiscoverPage movieInformation={movieInformation} setActiveFilter={setActiveFilter}/>
      </div>
    </div>
  );
}

export default App;
