import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiscoverPage from './Components/DiscoverPage';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <Router>
      <div className="App" style={{display: "flex"}}>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/discover' element={<DiscoverPage/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
