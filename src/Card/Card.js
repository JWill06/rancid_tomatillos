import './Card.css'
import moment from 'moment';
import { NavLink } from 'react-router-dom'

const Card = ({movie}) => {
    const {  id } = movie;
    const monthAndYear = moment(movie.release_date).format('MMM DD, YYYY')


    return (
        <NavLink to={`/movies/${id}`} className='navLink'>
            
            <div className="cardContainer">
                    <img alt='movie poster'src={movie.poster_path}/>
                <div className='posterContainer' >
                    <h1 className='title'>{movie.title}</h1>
                    <p className='rating'> {movie.average_rating}/10 ★'s</p>
                    <p className='releaseDate'>{monthAndYear}</p>
                    <p>...More</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Card