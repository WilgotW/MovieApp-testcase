import './App.css';
import DiscoverPage from './Components/DiscoverPage';
import SearchBar from './Components/SearchBar';
import React, { useEffect, useReducer, useState } from 'react'
import FetchMovies from './Components/FetchMovies';
import Movie from './Components/Movie';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [imageConfig, setImageConfig] = useState([]);

  async function searchForMovies (searchTerm) {
    const movieInformation = {
      type: "movies",
      searchTerm: searchTerm
    }
    const response = await FetchMovies(movieInformation);
    console.log(response)
    setMovies([response]);
  }
  async function fetchImageConfig (){
    const movieInformation = {
      type: "config"
    }
    const response = await FetchMovies(movieInformation);
    setImageConfig([response])
  }
  useEffect(() => {
    fetchImageConfig()
  }, [])
  

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <button onClick={() => searchForMovies(searchTerm)}>Search</button>
      <div className='center'>
        <div className='discover-grids'>
          {movies.length > 0 ? movies[0].results.map(movie => <Movie movie={movie} imageConfig={imageConfig[0].images}/>) : <p>Search For Movies!</p>}      
        </div>
      </div>
    </div>
  );
}

export default App;
