import './Details.css'
import moment from 'moment';

const Details = ({video}) => {
    const monthAndYear = moment(video.release_date).format('MMM YYYY')
  return (
    <article className='detailsContainer'>
        <img src={video.backdrop_path} className="backdrop-image"/>
        <div className='backgroundContainer'>
            <img src={video.poster_path} alt='Poster' />
            <div>
                <h1 className= 'title'>{video.title}</h1>
                <p><strong> Rating: </strong>{video.rating}</p>
                <p><strong> Release Date: </strong>{monthAndYear}</p>
                <p><strong> Average Rating: </strong>{video.average_rating}/10 ★'s</p>
            </div>
        </div>
    </article>
  )
}

export default Details