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
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    SearchForMovies("config", setImageConfig, "", "");
    SearchForMovies("genres", setGenres, "", "");
  }, [])

  const movieInformation = {
    searchTerm: searchTerm,
    movies: movies,
    imageConfig: imageConfig,
    genres: genres
  }
  function searchMovies(){
    SearchForMovies("movies", setMovies, searchTerm, "")
  }
  return (
    <div className="App" style={{display: "flex"}}>
      <LeftSideBar />
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies}/>
        <DiscoverPage movieInformation={movieInformation} />
      </div>
    </div>
  );
}

export default App;
