import { useParams } from 'react-router-dom'
import movies from '../../helpers/movie-database'
import './style.css'

function Movie() {

    const { movieId } = useParams()

    function findCorrectId(movie) {
        return (Number(movieId) === Number(movie.id))
    }

    const movieResult = movies.find(findCorrectId)

    console.log(movieResult)

    const movieCast = movieResult.cast.map(oneCast => oneCast.name).join(", ")

    console.log(movieCast)

    const genreStyle = <span className="movie-bold">Genre:</span>
    const premiereStyle = <span className="movie-bold">Premiere:</span>
    const directionStyle = <span className="movie-bold">Direction:</span>
    const castStyle = <span className="movie-bold">Cast:</span>

    return (
        <div className="movie">
            <img className="movie-poster" src={movieResult.poster} alt={movieResult.title} />

            <div className="movie-container">
                <h2 className="movie-title">{movieResult.title}</h2>
                <div className="movie-rating">{movieResult.rating.toFixed(1)} ⭐</div>
            </div>

            <div className="movie-details">
                <p>{genreStyle} {movieResult.genre}</p>
                <p>{premiereStyle} {movieResult.year}</p>
                <p>{directionStyle} {movieResult.director}</p>
                <p>{castStyle} {movieCast}</p>
                <p>{movieResult.storyline}</p>
            </div>
        </div>
    )
}

export default Movie


