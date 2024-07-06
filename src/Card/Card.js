import './Card.css'
import moment from 'moment';

const Card = ({video}) => {
    const updatedRating = video.average_rating.toFixed(1);
    const monthAndYear = moment(video.release_date).format('MMM YYYY')
    return (
        <div className="cardContainer">
                <img alt='movie poster'src={video.poster_path}/>
            <div className='posterContainer'>
                <h1 className='title'>{video.title}</h1>
                <p className='rating'> {updatedRating}/10 ★'s</p>
                <p className='releaseDate'>{monthAndYear}</p>
            </div>
        </div>
    )
}

export default Card