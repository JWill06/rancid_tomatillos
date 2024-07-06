import './Card.css'

const Card = ({video}) => {
    const updatedRating = video.average_rating.toFixed(1)
    return (
        <div className="cardContainer">
                <img alt='movie poster'src={video.poster_path}/>
            <div className='posterContainer'>
                <h1 className='title'>{video.title}</h1>
                <p className='rating'> Rating: {updatedRating}/10</p>
                <p className='releaseDate'>Released:{video.release_date}</p>
            </div>
        </div>
    )
}

export default Card