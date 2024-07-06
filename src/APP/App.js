// import movieData from "../mockData";
import './App.css';
import Nav from '../Nav/Nav'
import Card from '../Card/Card';
import Footer from "../Footer/Footer";
import { useState, UseEffect, useEffect } from "react"
import Details from "../Details/Details";

function App() {
const [movie, setMovie] = useState([])
const [selectedMovie, setSelectedMovie] = useState(null)
const [detailView, setDetailView] = useState(false)

const fetchAllMovies = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => setMovie([...data.movies]))
}

// const fetchedMovie = 1

// const fetchSingleMovie = () => {
//   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id')
//   .then(response => response.json())
//   .then(data => setMovie([data.movie]))
// }

useEffect(() => {
  fetchAllMovies();
  // fetchSingleMovie()
}, [])

const handleMovieClick = (movieId) => {
  setSelectedMovie(movieId)
  setDetailView(true)
}

const handleMainView = () => {
  setMovie(movie)
  setSelectedMovie(null)
  setDetailView(false)
}

  return (
    <div className="App">
        <Nav onClick={handleMainView}/>
      <header className="App-header">
      {detailView ? (
          <Details video={movie.find(m => m.id === selectedMovie)} />
        ) : (
          movie.map((movie, index) => (
            <Card key={index} video={movie} onSelect={handleMovieClick} />
          ))
        )}
        </header>
      <Footer />
    </div>
  );
}

export default App;
