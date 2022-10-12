import './App.css';
import DiscoverPage from './Components/DiscoverPage';
import SearchBar from './Components/SearchBar';
import React, { useEffect, useReducer, useState } from 'react'
import SearchForMovies from './Components/SearchForMovies';

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
  
  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <button onClick={() => SearchForMovies("movies", setMovies, searchTerm, "")}>Search</button>
      <DiscoverPage movieInformation={movieInformation} />
    </div>
  );
}

export default App;
