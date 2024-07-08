import './Details.css'
import moment from 'moment';
import { useEffect, useState } from 'react';

const Details = ({video, id}) => {
    const monthAndYear = moment(video.release_date).format('MMM D, YYYY');
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [isReadMore, setIsReadMore] = useState(false);

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
        console.log(selectedMovie)
    }, [selectedMovie])

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

  return (
    (selectedMovie ? 
    <article className='detailsContainer'>
        <img src={video.backdrop_path} className="backdrop-image"/>
        <div className='backgroundContainer'>
            <img src={video.poster_path} alt='Poster' />
            <div className='titleSection'>
                <h1 className= 'movieTitle'>{selectedMovie.title}</h1>
                <div className='textSection'>
                    <div className='childrenText'>
                        <p><strong> Release Date: </strong>{monthAndYear}</p>
                        <p><strong> Average Rating: </strong>{selectedMovie.average_rating}/10 ★'s</p>
                        <p><strong>Overview: </strong> 
                    {isReadMore ? selectedMovie.overview : `${selectedMovie.overview.substring(0, 100)}...`}
                    <span className='read-more-link' onClick={toggleReadMore}>
                        {isReadMore ? ' Read Less' : ' Read More'}
                        </span>
                        </p>
                    </div>
                    <div className='additionalText'>
                        <p><strong> Budget: </strong> {selectedMovie.budget > 0 ? `$${selectedMovie.budget.toLocaleString()}` : 'Not available'}</p>
                        <p><strong> Revenue: </strong> {selectedMovie.revenue > 0 ? `$${selectedMovie.revenue.toLocaleString()}` : 'Not available'}</p>
                        <p><strong> Runtime: </strong> {selectedMovie.runtime}min</p>
                        <div className='genreSection'>
                        <p><strong>Genres: </strong> {selectedMovie.genres.map(genre => genre).join(', ')}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
    </article>
    : <p>....Loading</p>)
  )
}

export default Details