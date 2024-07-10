import './Details.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isReadMore, setIsReadMore] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const fetchSingleMovie = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`);
                const data = await response.json();
                setMovie(data.movie);
                setIsLoading(false);
            } catch (error) {
                setError('Failed to fetch movie details.');
                setIsLoading(false);
            }
        };
        fetchSingleMovie();
    }, [id]);

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
                const data = await response.json();
                setTrailer(data.videos)
                setIsLoading(false)
            } catch (error) {
                setError('Failed to fetch movie trailer.')
                setIsLoading(false)
            }
        };
        fetchVideos()
    }, [id])
    const trailerVideoId = trailer.length > 0 ? trailer[0].key : '';

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const monthAndYear = movie.release_date ? moment(movie.release_date).format('MMM D, YYYY') : '';
    const formattedOverview = movie.overview ? (isReadMore ? movie.overview : `${movie.overview.substring(0, 100)}...`) : '';

    return (
        <article className='detailsContainer'>
            {trailerVideoId && (
                <iframe
                    width="1400"
                    height="1000"
                    src={`https://www.youtube.com/embed/${trailerVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
            <div className='backgroundContainer'>
                <img src={movie.poster_path} alt='Poster' />
                <div className='titleSection'>
                    <h1 className='movieTitle'>{movie.title}</h1>
                    <div className='textSection'>
                        <div className='childrenText'>
                            <p><strong>Release Date:</strong> {monthAndYear}</p>
                            <p><strong>Average Rating:</strong> {movie.average_rating}/10 ★'s</p>
                            <p><strong>Overview:</strong>
                                {formattedOverview}
                                <span className='read-more-link' onClick={() => setIsReadMore(!isReadMore)}>
                                    {isReadMore ? 'Read Less' : 'Read More'}
                                </span>
                            </p>
                        </div>
                        <div className='additionalText'>
                            <p><strong>Budget:</strong> {movie.budget > 0 ? `$${movie.budget.toLocaleString()}` : 'Not available'}</p>
                            <p><strong>Revenue:</strong> {movie.revenue > 0 ? `$${movie.revenue.toLocaleString()}` : 'Not available'}</p>
                            <p><strong>Runtime:</strong> {movie.runtime}min</p>
                            <div className='genreSection'>
                                <p><strong>Genres:</strong> {movie.genres && Array.isArray(movie.gneres) ? movie.genres.map(genre => genre).join(', ') : 'Not Available'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Details;
