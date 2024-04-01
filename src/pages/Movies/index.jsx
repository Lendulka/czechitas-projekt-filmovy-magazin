import MovieList from '../../components/MovieList'
import { Outlet } from 'react-router-dom'
import './style.css'

function Movies() {
    return (
        <div className="movies">
            <h1>Movies</h1>

            <div className="movies-container">

                <MovieList />

                <Outlet />

            </div>
        </div>
    )
}

export default Movies