import './App.css';
import Nav from '../Nav/Nav'
import Card from '../Card/Card';
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react"
import Details from "../Details/Details";
import { Routes, Route } from 'react-router-dom'

function App() {
const [movies, setMovies] = useState([])

const fetchAllMovies = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => setMovies([...data.movies]))
  .catch(error => console.error('Failed to fetch', error))
}

useEffect(() => {
  fetchAllMovies();
}, [])

  return (
    <div className="App">
        <Nav />
      <header className="App-header">
        <Routes>
        <Route path="/" element={
              movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}/>
          <Route path='/movies/:id' element={<Details  />}/>
        </Routes>
        </header>
      <Footer />
    </div>
  );
}

export default App;
