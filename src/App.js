import './App.css';
import DiscoverPage from './Components/DiscoverPage';
import SearchBar from './Components/SearchBar';
import React, { useEffect, useReducer, useState } from 'react'
import FetchMovies from './Components/FetchMovies';
import Movie from './Components/Movie';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  console.log(movies.length);
  console.log(movies);

  async function searchForMovies (searchTerm) {
    const movieInformation = {
      type: "movies",
      searchTerm: searchTerm
    }
    const response = await FetchMovies(movieInformation);
    setMovies([response]);
  }

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <button onClick={() => searchForMovies(searchTerm)}>Search</button>
      {/* {movies.length <= 0 ? <p>No Movies Searched</p> : <DiscoverPage searchTerm={searchTerm} movieResults={movies[0].results}/>} */}
      {movies.length > 0 ? movies[0].results.map(movie => <Movie movie={movie} />) : <p>eh</p>}      
    </div>
  );
}

export default App;
