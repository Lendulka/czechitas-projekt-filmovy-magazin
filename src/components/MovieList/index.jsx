import movies from '../../helpers/movie-database'
import { NavLink } from 'react-router-dom'
import './style.css'

function MovieList() {
    return (
        <nav className="movie-list">
            {movies.map(movie => <NavLink key={movie.id} to={String(movie.id)}>{movie.title}</NavLink>)}
        </nav>
    )
}

export default MovieList



