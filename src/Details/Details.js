import './Details.css'
import moment from 'moment';
import { useEffect, useState } from 'react';

const Details = ({video, id}) => {
    // const monthAndYear = moment(video.release_date).format('MMM YYYY');
const [selectedMovie, setSelectedMovie] = useState(null)

    const fetchSingleMovie = (id) => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => setSelectedMovie(data.movie))
        .catch(error => console.error('Failed to fetch movie:', error.message))
      }
      
      useEffect(() => {
        fetchSingleMovie(id)
      }, [])

    useEffect(()=>{
        console.log('SELECTED',selectedMovie)
    }, [selectedMovie])

  return (
    (selectedMovie ? 
    <article className='detailsContainer'>
        <img src={video.backdrop_path} className="backdrop-image"/>
        <div className='backgroundContainer'>
            <img src={video.poster_path} alt='Poster' />
            <div>
                <h1 className= 'title'>{selectedMovie.title}</h1>
                {/* <p><strong> Release Date: </strong>{monthAndYear}</p> */}
                <p><strong> Average Rating: </strong>{selectedMovie.average_rating}/10 ★'s</p>
                <p><strong> Overview: </strong>{selectedMovie.overview}</p>
                <p><strong> Budget: </strong>{selectedMovie.budget}</p>
            </div>
        </div>
    </article>
    : <p>....Loading</p>)
  )
}

export default Details