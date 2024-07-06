import movieData from "../mockData";
import './App.css';
import Nav from '../Nav/Nav'
import Card from '../Card/Card';
import { useState, UseEffect } from "react"

function App() {
const [movie, setMovie] = useState(movieData)

  return (
    <div className="App">
        <Nav />
      <header className="App-header">
        {movie.movies.map((video, index) => (
        <Card key={index} video={video}/>
        ))}
      </header>
    </div>
  );
}

export default App;
