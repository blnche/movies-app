import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard.jsx'
import Grid from '@mui/material/Unstable_Grid2'


const Movies = () => {

    // const [movies, setMovies, loading, setLoading, error, setError] = useContext(MovieContext)
    const [movies, setMovies] = useContext(MovieContext)
    console.log(movies)

    return (
        <>
            <h1>Movies</h1>
            <Grid container spacing={5} justifyContent={'center'}>
            {movies && movies.map(movie => {
                return(
                    <div key={movie.id}>
                        <Grid >
                            <MovieCard {...movie}/>
                        </Grid>
                    </div>
                )
            })}
            </Grid>
        </>
    )
}

export default Movies