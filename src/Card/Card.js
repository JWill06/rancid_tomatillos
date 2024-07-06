import './Card.css'
import moment from 'moment';
import { useState } from 'react';
// export let updatedRating;

const Card = ({video, onSelect}) => {
    const monthAndYear = moment(video.release_date).format('MMM YYYY')

    const handleClick = () => {
        onSelect(video.id)
    }

    return (
        <div className="cardContainer" onClick={handleClick}>
                <img alt='movie poster'src={video.poster_path}/>
            <div className='posterContainer' >
                <h1 className='title'>{video.title}</h1>
                <p className='rating'> {video.average_rating}/10 ★'s</p>
                <p className='releaseDate'>{monthAndYear}</p>
            </div>
        </div>
    )
}

export default Card